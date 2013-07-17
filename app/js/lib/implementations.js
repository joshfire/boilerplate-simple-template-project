// This is the dynamic implementation map containing
// tests.

define({
  List: [
    {
      implementation: 'js/views/List.androidphone',
      isAvailable: function(runtime) {
        return (runtime.os.family.indexOf('Android') > -1 &&
                  runtime.formfactor.family === 'phone');
      }
    },
    {
      implementation: 'js/views/List.phone',
      isAvailable: function(runtime) {
        return runtime.formfactor.family === 'phone';
      }
    },
    {
      implementation: 'js/views/List.tablet',
      isAvailable: function(runtime) {
        return runtime.formfactor.family === 'tablet';
      }
    },
    // default implementation (don't forget to set one ! could become ugly)
    {
      implementation: 'js/views/List',
      isAvailable: function(runtime) { return true; }
    }
  ],

  Toolbar: [
    {
      implementation: 'js/views/Toolbar.tablet',
      isAvailable: function(runtime) {
        return runtime.formfactor.family === 'tablet';
      }
    },
    {
      implementation: 'js/views/Toolbar',
      isAvailable: function(runtime) { return true; }
    }
  ]
});