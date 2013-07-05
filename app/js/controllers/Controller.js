define([
  'joshlib!vendor/backbone'
], function(
  Backbone
) {
  'use strict';

  var Controller = function(app, opt) {
    this.app = app;

    // Calls the controller's "constructor".
    if (this.initialize) {
      this.initialize(opt);
    }
  };

  // We'll use the extend function of Backbone.Model to enable heritage on our controller
  Controller.extend = Backbone.Model.extend;
  return Controller;
});