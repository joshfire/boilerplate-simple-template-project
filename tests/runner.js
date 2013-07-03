/**
 * @fileoverview Jasmine test runner for the application
 *
 * The code uses demo snippets from the AMD Testing project:
 *   https://github.com/geddesign/amd-testing
 * ... to make Jasmine and require.js work hand in hand.
 *
 * The code also makes use of a couple of matchers from Uxebu's Jasmine
 * matchers project:
 *   https://github.com/uxebu/jasmine-matchers
 *
 * Copyright (c) 2013 Joshfire
 * MIT license (see LICENSE file)
 */
/*global global, __dirname*/

var requirejs = require('requirejs');
var jasmine = require('jasmine-node');

// Map jasmine methods to global namespace
var key = '';
for (key in jasmine) {
  if (jasmine[key] instanceof Function) {
    global[key] = jasmine[key];
  }
}
global.define = requirejs;

// Configure require.js to use the application's "js" folder as base folder
requirejs.config({
  nodeRequire: require,
  baseUrl: __dirname + '/../app/js',
  paths: {
    specs: '../../tests/specs'
  }
});


// Retrieve the different suites of tests and run them,
// reporting results to the console.
requirejs([
  'specs/main.spec'
], function () {
  jasmine.getEnv().addReporter(new jasmine.ConsoleReporter());

  jasmine.getEnv().beforeEach(function () {
    this.addMatchers({
      /**
       * Returns true when object under scrutiny is a number
       */
      toBeNumber: function () {
        return typeof this.actual === 'number';
      },

      /**
       * Returns true when actual object is equal or greater than the provided
       * number
       */
      toEqualOrBeGreatherThan: function (expected) {
        return this.actual >= expected;
      },

      /**
       * Returns true when function has been called the expected number of times
       */
      toHaveBeenCalledXTimes: function (count) {
        var callCount = this.actual.callCount;
        var not = this.isNot ? 'NOT ' : '';
        this.message = function () {
          return 'Expected spy "' + this.actual.identity + '" ' + not +
            'to have been called ' + count + ' times, ' +
            'but was ' + callCount + '.';
        };
        return callCount === count;
      }
    });
  });

  jasmine.getEnv().execute();
});