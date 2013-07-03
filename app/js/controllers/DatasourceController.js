define([
  'joshlib!vendor/underscore',
  'joshlib!utils/woodman',
  'joshlib!collection',
  'joshlib!ui/Item',
  'joshlib!ui/List',
  'Controller'
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

      this.onNavigate = _.bind(this.onNavigate, this);
      this.onNavigateDetails = _.bind(this.onNavigateDetails, this);

      this.collection.fetch();
    },

    onNavigate: function () {
      logger.log('Watching a DS !');
      this.app.views.toolbar.setActiveItem(this);
      this.app.showItem(this);
    },

    onNavigateDetails: function (index) {
      logger.log('Watching the details of a DS ! Item n°' + index);
      this.app.views.toolbar.setActiveItem(this);

      this.details.setModel(this.collection.at(index));
      this.details.update(true);

      this.app.showItemDetails(this, index);
    },

    getView: function getView () {
      if(!this.view) {
        this.view = new List({
          id: this.slug,
          className: 'list',
          itemOptions: {
            data: {
              slug: this.slug
            }
          },
          collection: this.collection,
          itemTemplate: '<a href="#<%= slug  %>/<%= offset %>"><%= item.name %></a>'
        });
      }

      return this.view;
    },

    getDetailsView: function getDetailsView () {
      if(!this.details) {
        this.details = new Item({
          id: this.slug + '-details',
          className: 'details',
          template: '<h2><%= item.name %></h2><hr /><br /><p><%= item.articleBody ? item.articleBody : item.description %></p>'
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