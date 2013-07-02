define([
  // Libs
  'joshlib!vendor/backbone',
  'joshlib!vendor/underscore',
  'joshlib!utils/dollar',
  'joshlib!utils/ismobile',
  'joshlib!utils/woodman'
], function(
  Backbone,
  _,
  $,
  isMobile,
  woodman
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
  },function(err){
    if (err){
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
     initialize: function(options) {
      logger.log('App init: Started');

      this.initControllers();
      logger.log('App init: Created controllers');

      this.initViews();
      logger.log('App init: Created views');

      this.initRouter(options);
    },
    /**
    * Init controllers
    * @function
    **/
    initControllers: function initControllers(){
    },
    /**
    * Init views
    * @function
    **/
    initViews: function initViews(){
    },
    /*
    * Init router
    * @function
    **/
    initRouter: function initRouter(options){
      this.router = options.router;
      this.router.init(this);
      logger.log('Router set and initialized');
    }
  });

  return App;
});
