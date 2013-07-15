require.config({
  paths: {
    // The text plugin returns the contents of a required file as a string. Useful for requiring templates.
    'text'            : 'js/lib/text',
    /*
    * This file contains the mapping between devices and implementations. It is necessary if the devicedetect
    * plugin is used anywhere through the app. More details inside.
    */
    'implementations' : 'js/lib/implementations'
  }
});

define([
  'js/app',
  'js/router'
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