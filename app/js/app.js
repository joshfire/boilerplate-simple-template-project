/**
 * app — Main App Controller
 * This is the "brain" of the app ; not to be confused with the main.js which is a launcher.
 * It creates the main "static" views of the app :
  Layout
    L Toolbar
    L CardPanel
      L  n * datasource list view
      L  n * datasource details view

 * ... And then populates the main CardPanel with the DS views.
 *
 */
define([
  // Libs
  'joshlib!vendor/backbone',
  'joshlib!vendor/underscore',
  'joshlib!utils/dollar',
  'joshlib!utils/ismobile',
  'joshlib!utils/woodman',
  'joshlib!ui/Layout',
  'joshlib!ui/CardPanel',
  'joshlib!ui/Item',

  'devicedetect!Toolbar',
  'js/controllers/DatasourceController'
], function(
  Backbone,
  _,
  $,
  isMobile,
  woodman,
  Layout,
  CardPanel,
  Item,

  Toolbar,
  DatasourceController
) {
  'use strict';

  /* Init woodman logger */
  var logger = woodman.getLogger('app');
  woodman.load({
    loggers: [
      {
        level: 'all',
        appenders: [
          {
            type: 'console',
            name: 'console',
            layout: {
              type: 'pattern',
              pattern: '%d{yyyy-MM-dd HH:mm:ss} [%c] %p - %m%n'
            }
          }
        ]
      }
    ]
  }, function(err) {
    if (err) {
      //TODO handle woodman init err
      throw err;
    }
  });

  // Finally initialize the app
  var App = function(options) {
    this.initialize(options);
  };
  App.extend = Backbone.View.extend;

  App = App.extend({
    views: {},
    controllers: [],

    initialize: function(options) {
      logger.log('App init: Started');

      this.initControllers();
      logger.log('App init: Created controllers');

      this.initViews();
      logger.log('App init: Created views');

      /* This is the actual starting point of the app. The initRouter method
      launches historystart which reads the current hash and executes the associated route.
      While it is still inactive, we're free to set an initial route ourselves or to log in or whatever. */
      this.initRouter(options);
    },

    /**
     * Init controllers
     * Create a controller for each DS. This controller will create the views
     * associated with the DS and handle its routes.
     */
    initControllers: function initControllers() {
      if ( window.Joshfire && window.Joshfire.factory ) {
        var datasources = window.Joshfire.factory.getDataSource('main').children;
        for(var k in datasources) {
          /* It should be fairly easy to create multiple versions of this controller
          (extend it) for the various cases of OutputType we can get. */
          this.controllers[k] = new DatasourceController(this, {
            datasource: datasources[k],
            index: k,
            name: datasources[k].name,
            slug: k + '-' + this.slugify(datasources[k].name)
          });
        }
      }
    },

    /**
    * Init all the static views (at minima) and the overall layout
    * @function
    **/
    initViews: function initViews () {
      var subViews = {};

      /* The main Layout, Toolbar and Content are the static views of the app ; they never move
      and their behaviour stays the same. They won't need active treatment, so we can just keep
      them around here for easy access. */

      this.views.layout = new Layout({
        el: '#app'
      });
      this.views.toolbar = new Toolbar({
        className: 'toolbar'
      });

      // If we're expecting content we use a cardpanel
      // Otherwise we'll set a simple item to show something anyway
      if (this.controllers.length) {
        this.views.content = new CardPanel({
          className: 'content'
        });
      } else {
        this.views.content = new Item();
      }
      // Sets the toolbar/content as the children of the layout.
      this.views.layout.setChildren({
        toolbar: this.views.toolbar,
        content: this.views.content
      });

      // This is an important part : the app requests the views from each individual controller.
      // In this case we go berserk mode and request them all at once even though we don't need em.
      // Which is enough most of the time. But, any of the requested views couls easily be added whenever
      // x or y happened using something along the lines of `views.content.addChild(controller.getView())`
      for (var k in this.controllers) {
        if(this.controllers.hasOwnProperty(k)) {
          subViews[this.controllers[k].slug] = this.controllers[k].getView();
          subViews[this.controllers[k].slug+'-details'] = this.controllers[k].getDetailsView();
          this.views.toolbar.registerItem(this.controllers[k]);
        }
      }
      // Set the children of the content view aaaaand...
      if (_.size(subViews) > 0) {
        this.views.content.setChildren(subViews);
      }
      // Renders the whole tree of views
      this.views.layout.render();
    },

    /*
     * Init router
     * @function
     */
    initRouter: function initRouter(options) {
      this.router = options.router;
      this.router.init(this);
      logger.log('Router set and initialized');
    },
    /*
     * Shows a list or a detail view depending on a controller
     */
    showItem: function(item) {
      this.views.content.showChild(item.slug);
    },
    showItemDetails: function(item) {
      this.views.content.showChild(item.slug + '-details');
    },
    /**
     * Helper function to transform any latin string in a readable URL-ready string.
     */
    slugify: function(str) {
      var slug = str.replace(/^\s+|\s+$/g, ''); // trim
      slug = slug.toLowerCase();

      // remove accents, swap ñ for n, etc
      var from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;';
      var to   = 'aaaaaeeeeeiiiiooooouuuunc------';
      for (var i=0, l=from.length ; i<l ; i++) {
        slug = slug.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
      }

      slug = slug.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

      return slug;
    }
  });

  return App;
});
