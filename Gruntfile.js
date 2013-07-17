// Taken and adapted from https://github.com/nicolsc/new-backbone-app
// JSHINT : (buggy last version at moment of writing)
// npm install https://github.com/gruntjs/grunt-contrib-jshint/archive/7fd70e86c5a8d489095fa81589d95dccb8eb3a46.tar.gz

/**
 * Yo ! Feeling good today ? Great ! Not for long.
 * This file wraps the build process that is executed by the framework (which in turn executes require.r).
 * In here you can define the targets for which you would like to optimize your app. There are several
 * variables parameters here and you'll have to carefuly differentiate them.
 *
 * target   : This is your actual target. You define it and call it whatever you want, but be sure to call
 *  |         it consistently through the various parts of this file where you'll have to reference it.
 *  |
 *  |-- adapter  : This is a bit redundant with the target but is needed and read by the framework. It picks
 *  |              an adapter based on this. A target has an adapter. Up to you to define which adapter
 *  |              suits your target. If you're having trouble picking between two adapters for a single
 *  |              target, you probably need another target.
 *  |
 *  |-- targetUA : Lets you specify a specific targeted user agent. The key of the property
 *  |              has to be the target previously defined.
 *  |
 *  |-- targetSpecificOptions : lets you pass CLI arguments to the optimizer for a specific
 *  |                           target. The key has to be the target previously defined. Specifying
 *  |                           such properties overrides the targetUA (if there is any).
 *  |
 *
 * For every target you want to define, you have to set :
 *    - a 'grunt build:target' task configuration to indicate which files and adapter to use.
 *    - an entry in the sass configuration if there is a different stylesheet for the target
 *    - a registerTask to declare a task for the build of this target. e.g. registerTask('iosorandroidphones')
 *    - a targetUA or targetSpecificOptions if needed.
 *
 * See below for examples for all of the above.
 *
 * "that's it" !
 */

/*global module:false,console*/
module.exports = function(grunt) {
  'use strict';

  var adapter;
  var buildDir = 'build/app/';
  var mainPath = 'app/';
  var defaultAdapter = 'none';

  var target;
  var targetUA = {
    'phone': 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3',
    'android': 'Mozilla/5.0 (Linux; U; Android 4.0.2; en-us; Galaxy Nexus Build/ICL53F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
  };
  var targetSpecificOptions = {
    'androidphone': [
      '-f', 'phone',
      '-s', 'Android'
    ],
    'tablet': [
      '-f', 'tablet',
      '-s', 'whocares'
    ]
  };

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    build: {

      browser:{
        src: ['main.js', 'app/index.html'],
        adapter:'none'
      },
      phone: {
        src: ['main.js', 'app/index.phone.html'],
        adapter: 'phone'
      },
      androidphone: {
        src: ['main.js', 'app/index.androidphone.html'],
        adapter: 'phone'
      },
      tablet: {
        src: ['main.js', 'app/index.tablet.html'],
        adapter:'phone'
      }
    },
    sass: {
      dist: {
        files: {
          'app/css/styles.tablet.css'       : 'app/sass/styles.tablet.scss',
          'app/css/styles.phone.css'        : 'app/sass/styles.phone.scss',
          'app/css/styles.androidphone.css' : 'app/sass/styles.androidphone.scss'
        }
      },
      dev: {
        options: {
          style: 'expanded'
          // debugInfo: true,
          // lineNumbers: true,
          // compass: true
        },
        files: {
          'app/css/styles.tablet.css'       : 'app/sass/styles.tablet.scss',
          'app/css/styles.phone.css'        : 'app/sass/styles.phone.scss',
          'app/css/styles.androidphone.css' : 'app/sass/styles.androidphone.scss'
        }
      }
    },
    jshint: {
      all: [
        // 'Gruntfile.js',
        'app/js/*.js',
        'tests/**/*.js'
      ],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          define: true,
          console: true,
          require: true
        }
      }
    },
    /**
     * Copy static resources (images, package.json) to build folder
     */
    copy: {
      main: {
        files: [
          {
            cwd: 'app/media/',
            src: ['**'],
            dest: 'build/app/media/',
            expand: true
          },
          {
            cwd: 'app/css/',
            src: ['**'],
            dest: 'build/app/css/',
            expand: true
          },
          {/* Keep it until the build is done by the framework */
            cwd: 'app/',
            src: ['bootstrap.js'],
            dest: 'build/app/',
            expand: true
          }
        ]
      }
    },
    watch: {
      files: ['app/sass/*.scss'],
      tasks: 'sass:dev'
    },
    notify: {
      finished: {
        options: {
          title: 'CHANGE DAT NAME BRO', // c'mon don't blame :(
          message: 'Build Finished !'
        }
      }
    }
  });

  grunt.registerTask('notify-console', 'Notify the user that the build\'s over', function (arg) {
    var d = new Date();
    grunt.log.writeln('Build done, ended at ' +
      d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ' !');
  });

  grunt.registerTask('clean', 'Clean The Mess', function() {
    grunt.file.delete('app/js/joshlib.js');
    var files = grunt.file.expand('app/js/main*optimized.js');
    if(files.length) {
      grunt.file.delete(files);
    }
  });

  grunt.registerTask('help', 'Get some help !', function() {
    var done = this.async();
    var spawnOptions = {
      cmd: 'node',
      args: [
        'app/js/lib/framework/scripts/optimize.js',
        '--help'
      ]
    };
    grunt.util.spawn(spawnOptions, function(err, result) {
      grunt.log.writeln('Optimizer options are :');
      grunt.log.write(result);
      done();
    });
  });

  // Default task.
  grunt.registerTask('default', [
    'phone',
    'androidphone',
    'tablet',
    'browser'
  ]);
  grunt.registerTask('phone', [
    'clean',
    'jshint',
    'sass',
    'build:phone',
    'copy',
    'clean',
    'notify-console',
    'notify:finished'
  ]);
  grunt.registerTask('androidphone', [
    'clean',
    'jshint',
    'sass',
    'build:androidphone',
    'copy',
    'clean',
    'notify-console',
    'notify:finished'
  ]);
  grunt.registerTask('tablet', [
    'clean',
    'jshint',
    'sass',
    'build:tablet',
    'copy',
    'clean',
    'notify-console',
    'notify:finished'
  ]);
  grunt.registerTask('browser', [
    'clean',
    'jshint',
    'sass',
    'build:browser',
    'copy',
    'clean',
    'notify-console',
    'notify:finished'
  ]);

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');

  // ==========================================================================
  // CUSTOM TASKS
  // ==========================================================================
  // Our own "Joshfire" files optimizer
  grunt.registerMultiTask(
    'build',
    'Optimize JS and HTML files for project using the Joshfire Framework',
    function (arg) {

    // Tell grunt this task is asynchronous.
    var done = this.async();
    var data = this.data;
    var jsFiles;
    var htmlFiles;
    var extension;

    adapter = data.adapter || defaultAdapter;
    target = this.target;
    // Gets all the Javascript files - And accepts wildcard patterns
    jsFiles = this.data.src.filter(function(i) { return i.match(/\.js/); });

    // Gets all the html files - And accepts wildcard patterns
    htmlFiles = grunt.file.expand(
      this.data.src.filter(function(i) {return (extension = i.match(/\.x?html/)); })
    );

    // Process each HTML files
    grunt.util.async.forEach(htmlFiles, function (HTMLFile) {
      var HTMLFileSrc = grunt.file.read(HTMLFile),
      //HTMLFileDest = 'build/' + HTMLFile.slice(0, - ext[0].length) + (device !== 'browser' ? '.' + device :'')+ ext,
      HTMLFileDest = 'build/app/index' + (target !== 'none' ? '.' + target : '') + extension;

      grunt.file.write(HTMLFileDest, HTMLFileSrc.replace(new RegExp('data-adapter-' + adapter + ' data-main="([^"]*)" src="[^"]*"'), 'src="main.' + (target !== 'none' ? target + '.' : '') + 'optimized.js"'));
      grunt.log.writeln('Wrote ' + HTMLFileDest);
    }, function(err) {
      done();
    });

    // Process each JS files
    grunt.util.async.forEach(jsFiles, optimizeJSFile, function(err) {
      if(err) {
        console.error(err);
      }
      done();
    });
  });

  // ==========================================================================
  // CUSTOM FUNCTIONS
  // ==========================================================================
  function optimizeJSFile(JSFile, callback) {
    JSFile = JSFile.slice(0, -3); // (remove ".js")
    function optimizeJSFileAdapter(adap, callback) {

      function doneCallback(error, result, code) {
        if (error) {
          callback(error);
          return;
        }
        callback();
      }

      // Base options for this app. (feel free to make some of them
      // device specific or whatever)
      var theArgs = [
        'js/lib/framework/scripts/optimize.js',
        '-a', adap,
        '-i', JSFile,
        '-m', 'true',
        '-w', 'info,log',
        '-u', '"' + (targetUA[target] || '') + '"'
      ];

      // Append the eventual target specific options that will be used
      // by devicedetect.
      if (targetSpecificOptions[target]) {
        theArgs = theArgs.concat(targetSpecificOptions[target]);
      }

      // Run the optimizer !
      grunt.util.spawn({
        cmd: 'node',
        args: theArgs
      }, doneCallback);
    }

    function moveFile(){
      grunt.file.setBase('..'); // Todo: should be dynamic with mainPath

      var filenameIn = JSFile + ( adapter !== 'none' ? '.' + adapter : '' ) + '.optimized.js';
      var filenameOut = JSFile + ( target !== 'none' ? '.' + target : '' ) + '.optimized.js';

      grunt.file.copy(mainPath + filenameIn, buildDir + filenameOut);
      grunt.log.writeln('Wrote ' + filenameOut);
      grunt.file.delete(mainPath + filenameIn);
    }

    grunt.file.setBase(mainPath);
    optimizeJSFileAdapter(adapter, function(error) {
      if(error) {
        console.error(error);
      } else {
        moveFile();
        callback();
      }
    });
  }
};








