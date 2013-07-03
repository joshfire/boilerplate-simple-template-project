define([
  'app',
  'router'
], function(
  App,
  Router
) {
  'use strict';

  window._app = new App({
    device:         'none', //Default adapter is the 'none' one
    router:         Router
  });
});