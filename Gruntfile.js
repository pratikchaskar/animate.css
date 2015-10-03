module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);


  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),


    cssmin: {
      minify: {
        src: ['animate.css'],
        dest: 'animate.min.css',
      }
    },

    watch: {
      css: {
        files: [ 'source/**/*', 'animate-config.json' ],
        tasks: ['default']
      }
    }

  });

  // fuction to perform custom task

  // register task
  grunt.registerTask('default', ['cssmin']);
  grunt.registerTask('dev', ['watch']);

};
