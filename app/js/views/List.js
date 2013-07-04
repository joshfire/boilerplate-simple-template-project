define([
  'joshlib!ui/list',
  'text!templates/spinner.ejs'
], function(
  List,
  tplSpinner
) {
  return List.extend({
    showLoader: function() {
      this.loaderWrapper = document.createElement('div');
      this.loaderWrapper.className = 'loader-wrapper';
      this.loaderWrapper.innerHTML = tplSpinner;
      this.el.appendChild(this.loaderWrapper);
      console.log("YO");
    },
    hideLoader: function() {
      if(this.loaderWrapper) {
        this.el.removeChild(this.loaderWrapper);
        this.loaderWrapper.innerHTML = '';
        this.loaderWrapper = null;
        console.log("YO :(");
      }
    }
  });
});