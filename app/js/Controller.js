define([
  'joshlib!vendor/backbone'
], function(
  Backbone
) {
  'use strict';

  var Controller = function(app, opt) {
    this.app = app;

    // This calls the controller's constructor.
    // Useful when subclasses extend the controller and have
    // specific initialization processes.
    if (this.initialize) {
      this.initialize(opt);
    }
  };

  Controller.extend = Backbone.Model.extend;
  return Controller;
});