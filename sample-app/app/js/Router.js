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
    init: function init(app) {
      this.app = app;

      this.setRoutes();
      this._bindRoutes();

      this.historyStart();
    },
    routes:{},
    setRoutes: function setRoutes() {
      // setup your routes
      // here

      // default routes
      this.setDefaultRoutes();
    },
    setDefaultRoutes: function setDefaultRoutes() {
      this.routes[''] = 'defaultRoute';
      this.routes['*path'] =  'notfound';
    },

    defaultRoute: function defaultRoute() {

    },
    notfound: function notfound() {
      logger.log('Route not found', arguments);
      this.navigate('', {trigger:true, replace:true});
    }
  });
});
