/**
 * DatasourceController
 *
 * Directly inherits from the base controller which doesn't do much.
 * In this app, there is one instance of DatasourceController per datasource. The controller
 * creates and retains its collection (which is based on the datasource) and its views.
 * It has to generate the correct list and details view (or any other subsequent view)
 * depending on the datasource and possibly the outputtype of the datasource (which is not
 * the case now but could easily be).
 *
 * The router directly binds onNavigate and onNavigateDetails on their corresponding routes
 *   - user accesses the list view of the DS -> call to onNavigate
 *   - user accesses the detail of an item of the DS -> call to onNavigateDetails
 */
define([
  'joshlib!vendor/underscore',
  'joshlib!utils/woodman',
  'joshlib!collection',
  'joshlib!ui/Item',

  'js/views/List',
  'js/controllers/Controller'
], function(
  _,
  woodman,
  Collection,
  Item,
  List,
  Controller
) {
  'use strict';

  var logger = woodman.getLogger('DSController');

  return Controller.extend({

    initialize: function(opt) {
      this.datasource = opt.datasource;
      this.collection = new Collection([], { dataSource: this.datasource, dataSourceQuery: {} });
      this.name = opt.name || '';
      this.slug = opt.slug || '';
      this.index = opt.index;

      // Bind them to stay in context
      this.onNavigate = _.bind(this.onNavigate, this);
      this.onNavigateDetails = _.bind(this.onNavigateDetails, this);
    },

    /**
     * Called by the Router when the route corresponding to this DS is called
     */
    onNavigate: function () {
      logger.log('Watching a DS : ' + this.slug);
      this.app.views.toolbar.setActiveItem(this);
      this.app.showItem(this);
    },

    /**
     * Called by the Router when the route corresponding to an item in this DS is called
     */
    onNavigateDetails: function (index) {
      logger.log('Watching the details of a DS : ' + this.slug + ' — Item n°' + index);
      this.app.views.toolbar.setActiveItem(this);

      this.details.setModel(this.collection.at(index));
      this.details.update(true);

      this.app.showItemDetails(this, index);
    },

    /**
     * Should return the "summary" view of the DS (usually a list or grid). Called by the main controller (app)
     * to populate the main cardpanel.
     */
    getView: function getView () {
      if(!this.view) {
        this.view = new List({
          id: this.slug,
          className: 'list',
          customLoadEvent: true,
          itemOptions: {
            data: {
              slug: this.slug
            }
          },
          loadingClass: 'loading',
          collection: this.collection,
          itemTemplate: '<a href="#<%= slug  %>/<%= offset %>"><%= item.name %></a>'
        });
      }

      if(!this.collection.fetched) {
        this.collection.fetch();
      }

      return this.view;
    },

    /**
     * Should return the "details" view of the DS (usually a list or grid). Called by the main controller (app)
     * to populate the main cardpanel.
     */
    getDetailsView: function getDetailsView () {
      if(!this.details) {
        this.details = new Item({
          id: this.slug + '-details',
          className: 'details',
          template: '<h2><%= item.name %></h2><br /><p><%= item.articleBody ? item.articleBody : item.description %></p>'
        });
      }

      return this.details;
    },

    toJSON: function() {
      return {
        name: this.name,
        slug: this.slug,
        index: this.index
      };
    }
  });

});