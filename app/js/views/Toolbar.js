define([
  'joshlib!vendor/backbone',
  'joshlib!ui/List',

  'text!templates/toolbarItem.ejs'
], function (
  Backbone,
  List,

  tplToolbarItem
) {
  return List.extend({
    initialize: function (opt) {
      this.collection = new Backbone.Collection();
      opt.itemTemplate = tplToolbarItem;

      List.prototype.initialize.call(this, opt);
    },

    registerItem: function registerItem (item) {
      this.collection.push(item.toJSON());
      this.update(true);
    },

    setActiveItem: function setActiveItem (item) {
      this.$('.active').removeClass('active');
      this.$('.' + item.slug).addClass('active');
    }
  });
});