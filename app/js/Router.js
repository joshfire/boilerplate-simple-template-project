define([
  'joshlib!vendor/backbone',
  'joshlib!vendor/underscore',
  'joshlib!utils/dollar',
  'joshlib!utils/woodman',
  'joshlib!router'
], function(
  Backbone,
  _,
  $,
  woodman,
  Router
) {
  'use strict';

  var logger = woodman.getLogger('router');

  return new Router({

    routes:{},

    init: function init (app) {
      this.app = app;

      this.setRoutes();
      this.setInitialUrl();
      this.historyStart();
    },

    setRoutes: function setRoutes () {
      // Default routes
      // These should always be called first
      this.setDefaultRoutes();
      // setup your custom routes here

      // DS-linked routes
      for(var k in this.app.controllers) {
        this.route(this.app.controllers[k].slug, this.app.controllers[k].name, this.app.controllers[k].onNavigate);
        this.route(this.app.controllers[k].slug + '/:index', this.app.controllers[k].name, this.app.controllers[k].onNavigateDetails);
      }
    },

    setDefaultRoutes: function setDefaultRoutes () {
      this.route('*path', 'Not Found Route', this.notfound);
      this.route('', 'Default Route', this.defaultRoute);
    },

    setInitialUrl: function setInitialUrl () {
      if (this.app.controllers && this.app.controllers.length) {
        document.location.hash = this.app.controllers[0].slug;
      }
    },

    defaultRoute: function defaultRoute () {
      logger.log('Default route hit');
    },

    notfound: function notfound () {
      logger.log('Route not found', arguments);
      this.navigate('', {trigger:true, replace:true});
    }
  });
});
