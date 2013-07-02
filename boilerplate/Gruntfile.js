// Taken and adapted from https://github.com/nicolsc/new-backbone-app
// JSHINT : (buggy last version at moment of writing)
// npm install https://github.com/gruntjs/grunt-contrib-jshint/archive/7fd70e86c5a8d489095fa81589d95dccb8eb3a46.tar.gz
/*global module:false,console*/
module.exports = function(grunt) {
  'use strict';

  var adapter;
  var device;
  var buildDir = 'build/app/';
  var mainPath = 'app/js/';

  var defaultAdapter = 'none';
  var defaultDevice = 'browser';

  // ==========================================================================
  // CUSTOM TASKS
  // ==========================================================================
  // Our own "Joshfire" files optimizer
  grunt.registerMultiTask(
    'joshoptimize',
    'Optimize JS and HTML files for project using the Joshfire Framework',
    function (arg) {

    // Tell grunt this task is asynchronous.
    var done = this.async();
    var data = this.data;
    var jsFiles;
    var htmlFiles;
    var extension;

    device = data.device || defaultDevice;
    adapter = data.adapter || defaultAdapter;

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
      HTMLFileDest = 'build/app/index'+(device !== 'browser' ? '.' + device :'')+ extension;

      grunt.file.write(HTMLFileDest, HTMLFileSrc.replace(new RegExp('data-adapter-'+device+' data-main="([^"]*)" src="[^"]*"'), 'src="main.' + device + '.optimized.js"'));
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

  grunt.registerTask('notify-console', 'Notify the user that the build\'s over', function (arg) {
    var d = new Date();
    grunt.log.writeln('Build done, ended at ' +
      d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ' !');
  });
  grunt.registerTask('clean', 'Clean The Mess', function(){
    grunt.file.delete('app/js/joshlib.js');
    grunt.file.delete('app/js/main.optimized.js');
    grunt.file.delete('app/js/main.phone.optimized.js');
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

      // Prepare spawn for e.g. node lib/framework/scripts/optimize.js ios main.js
      var spawnOptions = {
        cmd: 'node',
        args: [
          'lib/framework/scripts/optimize.js',
          adap,
          JSFile
        ]
      };

      grunt.util.spawn(spawnOptions, doneCallback);
    }

    function moveFile(){
      grunt.file.setBase('../..'); // Todo: should be dynamic with mainPath

      var filenameIn = JSFile + ( adapter !== 'none' ? '.' + adapter : '' ) + '.optimized.js';
      var filenameOut = JSFile + '.'+device+'.optimized.js';

      grunt.file.copy(mainPath + filenameIn, buildDir + filenameOut);
      grunt.log.writeln('Wrote ' + filenameOut);
      grunt.file.delete(mainPath+filenameIn);
    }

    grunt.file.setBase(mainPath);
    optimizeJSFileAdapter(adapter, function(){
      moveFile();
      callback();
    });
  }

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'build/app/css/styles.css': 'app/sass/styles.scss',
          'build/app/css/styles.phone.css': 'app/sass/styles.phone.scss'
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
          'app/css/styles.css': 'app/sass/styles.scss',
          'app/css/styles.phone.css': 'app/sass/styles.phone.scss'
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

    watch: {
      files: ['app/sass/*.scss'],
      tasks: 'sass:dev'
    },

    joshoptimize: {
      phone: {
        src: ['main.js', 'app/index.phone.html'],
        adapter: 'ios',
        device:'phone'
      },
      browser:{
        src: ['main.js', 'app/index.html'],
        adapter:'none'
      }
      // android: {
      //   src: ['main.js', 'app/index.android.html'],
      //   adapter:'android',
      //   device:'phone'
      // }
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

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');


  // Default task.
  grunt.registerTask('default', [
    'clean',
    'jshint',
    'sass',
    'joshoptimize:browser',
    'joshoptimize:phone',
    'clean',
    'notify-console',
    'notify:finished'
  ]);
};








