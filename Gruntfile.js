/*
 * grunt-gitrevision
 * https://github.com/miwurster/grunt-gitrevision
 *
 * Copyright (c) 2014 Michael Wurster
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        clean: {
            tests: ['tmp']
        },
        gitrevision: {
            default_options: {
                // options: {},
                files: {
                    'tmp/testing.js': ['test/fixtures/testing.js'],
                    'tmp/foo.js': ['test/fixtures/foo.js']
                }
            }
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('test', ['clean', 'gitrevision']);
    grunt.registerTask('default', ['jshint', 'test']);
};
