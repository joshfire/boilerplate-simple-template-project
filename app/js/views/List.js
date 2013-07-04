define([
  'joshlib!ui/list',
  'text!templates/spinner.ejs' // The HTML of the spinner
], function(
  List,
  tplSpinner
) {
  return List.extend({
    initialize: function(opt) {
      List.prototype.initialize.call(this, opt);

      // Remove the loader when the data has loaded
      this.collection.on('load', _.bind(this.hideLoader, this));
      // When we're at the end of the list, stop listening for the scroll
      this.collection.once('load:last', _.bind(function() {
        this.el.removeEventListener('scroll');
      }, this));
      /*
      Once we've received the loadmore data, re-enable loadmore.
      This is to avoid multiple calls to fetchMore between the time we fire
      the query and the time we receive the data.
      */
      this.collection.on('load:more', _.bind(function() {
        this.enableLoadMore = true;
      }, this));
      this.enableLoadMore = true;
      this.onScroll = _.bind(this.onScroll, this);
    },

    /**
    * Bound automatically by the framework in List.js
    **/
    onScroll: function(e) {
      var itemHeight = this.getItemHeight();
      var itemIndex = Math.floor((this.el.scrollTop + this.$el.height()) / itemHeight);

      if(this.enableLoadMore && this.collection.length - itemIndex < 4) {
        this.collection.fetchMore();
        this.currentPage ++;
        this.enableLoadMore = false;
      }
    },

    /**
    * Small helper function, nothing to see here
    **/
    getItemHeight: function() {
      return this.$('li').height();
    },

    /**
    * Custom showloader and hideloader functions
    * to integrate our awesome CSS spinner
    **/
    showLoader: function() {
      this.loaderWrapper = document.createElement('div');
      this.loaderWrapper.className = 'loader-wrapper';
      this.loaderWrapper.innerHTML = tplSpinner;
      this.el.appendChild(this.loaderWrapper);
    },
    hideLoader: function() {
      if(this.loaderWrapper) {
        this.el.removeChild(this.loaderWrapper);
        this.loaderWrapper.innerHTML = '';
        this.loaderWrapper = null;
      }
    }
  });
});