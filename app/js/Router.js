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

      // Bind all the routes
      this.setRoutes();
      // Override initial URL and set ours, because i'm lazy
      this.setInitialUrl();
      // The actual start of the app
      this.historyStart();
    },
    setRoutes: function setRoutes () {
      var ctrl;
      // Default routes
      // These should always be called first in order for them to matter.
      this.setDefaultRoutes();

      // setup your custom routes here

      // DS-linked routes
      for(var k in this.app.controllers) {
        ctrl = this.app.controllers[k];
        // We're using the onNavigate and onNavigateDetails of each datasource
        // as routes for their associated URLs.
        this.route(ctrl.slug, ctrl.name, ctrl.onNavigate);
        this.route(ctrl.slug + '/:index', ctrl.name, ctrl.onNavigateDetails);
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
