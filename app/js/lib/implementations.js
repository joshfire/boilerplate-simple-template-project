// This is the dynamic implementation map containing
// tests.

define({
  List: [
    {
      implementation: 'js/views/List.android',

      isAvailable: function(runtime) {

        return (runtime.os.family.indexOf('Android') > -1);
      }
    },
    {
      implementation: 'js/views/List.phone',

      isAvailable: function(runtime) {

        return runtime.formfactor.family === 'phone';
      }
    },
    // default implementation
    {
      implementation: 'js/views/List',

      isAvailable: function(runtime) {

        return true;
      }
    }
  ]
});