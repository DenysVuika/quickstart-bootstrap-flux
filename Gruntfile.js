var path = require('path');

module.exports = function(grunt) {

  // Load Grunt tasks declared in the package.json file
  //require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      all: {
        files: ['react_components/**/*.js*'],
        tasks: ['build-debug'],
        options: {
          livereload: true
        }
      }
    },

    browserify: {
      options: {
        transform: ['reactify']
      },
      app: {
        src: 'react_components/App.jsx',
        dest: 'www/js/app.js'
      }
    },

    cssmin: {
      options: {
        sourceMap: true
      },
      target: {
        files: {
          'www/css/app.min.css': [
            'www/css/app.css',
          ]
        }
      }
    },

    uglify: {
      options: {
        mangle: true,
        sourceMap: true
      },
      app: {
        files: {
          'www/js/app.min.js': 'www/js/app.js'
        }
      }
    },

    express: {
      all: {
        options: {
          port: 9000,
          // Change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost',
          bases: ['www'],
          livereload: true,
          server: path.resolve('./server.js')
        }
      }
    },

    open: {
      all: {
        // Gets the port from the connect configuration
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    }

  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', [
    'browserify',
    'uglify',
    'cssmin'
  ]);

  grunt.registerTask('build-debug', [
    'browserify'
  ]);

  grunt.registerTask('serve', [
    'express',
    'open',
    'watch'
  ]);
};
