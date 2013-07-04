/**
 * app — Main App Controller
 * This is the "brain" of the app ; not to be confused with the main.js which is a launcher.
 * It creates the main "static" views of the app :
  Layout
    L Toolbar
    L CardPanel
      L  n * datasource list view
      L  n * details list view
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

  'js/views/Toolbar',
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

      // Go !
      this.initRouter(options);
    },

    /**
    * Init controllers
    * @function
    * Create a controller for each DS and defer the usage of said DS
    * to the controller
    **/
    initControllers: function initControllers() {
      if ( window.Joshfire && window.Joshfire.factory ) {
        var datasources = window.Joshfire.factory.getDataSource('main').children;
        for(var k in datasources) {
          // It shouldn't be hard to extend this controller so it expects to
          // work with a certain @outputType
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
    * Init all the static views (at minima)
    * @function
    **/
    initViews: function initViews () {
      var subViews = {};
      // Main layout and toolbar, will never move
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

      this.views.layout.setChildren({
        toolbar: this.views.toolbar,
        content: this.views.content
      });

      for (var k in this.controllers) {
        if(this.controllers.hasOwnProperty(k)) {
          subViews[this.controllers[k].slug] = this.controllers[k].getView();
          subViews[this.controllers[k].slug+'-details'] = this.controllers[k].getDetailsView();
          this.views.toolbar.registerItem(this.controllers[k]);
        }
      }

      if (_.size(subViews) > 0) {
        this.views.content.setChildren(subViews);
      }
      this.views.layout.render();
    },

    /*
    * Init router
    * @function
    **/
    initRouter: function initRouter(options) {
      this.router = options.router;
      this.router.init(this);
      logger.log('Router set and initialized');
    },

    showItem: function(item) {

      this.views.content.showChild(item.slug);

    },
    showItemDetails: function(item, index) {

      this.views.content.showChild(item.slug + '-details');

    },

    slugify: function(str) {
      var slug = str.replace(/^\s+|\s+$/g, ''); // trim
      slug = slug.toLowerCase();

      // remove accents, swap ñ for n, etc
      var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
      var to   = "aaaaaeeeeeiiiiooooouuuunc------";
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
