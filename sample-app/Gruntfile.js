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
  grunt.registerMultiTask('joshoptimize', 'Optimize JS and HTML files for project using the Joshfire Framework', function (arg) {
    var data=this.data;

    device = this.data.device || defaultDevice;
    adapter = this.data.adapter || defaultAdapter;

    // Tell grunt this task is asynchronous.
    var done = this.async();

    // Gets all the Javascript files - And accepts wildcard patterns
    var jsFiles = this.data.src.filter(function(i) { return i.match(/\.js/); });
    var ext;
    // Gets all the html files - And accepts wildcard patterns
    var htmlFiles = grunt.file.expand(
      this.data.src.filter(function(i) {return (ext = i.match(/\.x?html/)); })
    );


    // Process each HTML files
    grunt.util.async.forEach(htmlFiles, function (HTMLFile) {
      var HTMLFileSrc = grunt.file.read(HTMLFile),
      //HTMLFileDest = 'build/' + HTMLFile.slice(0, - ext[0].length) + (device !== 'browser' ? '.' + device :'')+ ext,
      HTMLFileDest = 'build/app/index'+(device !== 'browser' ? '.' + device :'')+ ext;

      grunt.file.write(HTMLFileDest, HTMLFileSrc.replace(new RegExp('data-adapter-'+adapter+' data-main="([^"]*)" src="[^"]*"'), 'src="main.' + adapter + '.optimized.js"'));
      grunt.log.writeln('Wrote ' + HTMLFileDest);
    }, function(err) {
      done();
    });

    // Process each JS files
    grunt.util.async.forEach(jsFiles, optimizeJSFile, function(err) {
      done();
    });
  });


  grunt.registerTask('clean', 'Clean the mess', function(){
    grunt.file.delete('./app/js/joshlib.js');
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
        // grunt.log.writeln('Wrote ' + JSFile + '.' + adap + '.optimized.js';);
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
      
        var filenameIn = JSFile + '.' + adapter + '.optimized.js';
        var filenameOut = JSFile + '.'+device+'.optimized.js';
        console.log('copy', filenameIn, 'to', filenameOut);
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['clean','jshint', 'sass', 'joshoptimize:browser', 'joshoptimize:phone', 'clean']);
};