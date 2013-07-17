define([
  'js/views/Toolbar'
], function(
  Toolbar
) {
  return Toolbar.extend({
    initialize: function(opt) {
      Toolbar.prototype.initialize.call(this, opt);
      console.log("Tablet specific toolbar");
    }
  });
});