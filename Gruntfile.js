module.exports = function(grunt) {

  grunt.initConfig({

    assemble: {
        options: {
          layout: 'src/responsive/layouts/default.hbs',
          partials: 'src/responsive/modules/**/*.hbs',
          data: 'src/responsive/data/**/*.json',
          flatten: false
        },
        pages: {
          expand: true,
          cwd: 'src/responsive/pages',
          src: '**/*.hbs',
          dest: 'src/'
        }
    }
    
  });

  grunt.loadNpmTasks('assemble');

};

