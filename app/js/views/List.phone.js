define([
  'js/views/List'
], function(
  List
) {
  return List.extend({
    initialize: function(opt) {
      List.prototype.initialize.call(this, opt);
      console.log('phone specific list');
    }
  });
});