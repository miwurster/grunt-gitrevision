/*
 * grunt-gitrevision
 * https://github.com/miwurster/grunt-gitrevision
 *
 * Copyright (c) 2014 Michael Wurster
 * Licensed under the MIT license.
 */

'use strict';

var exec = require('child_process').exec;

module.exports = function (grunt) {

    grunt.registerMultiTask('gitrevision', 'Adds version and Git\'s revision information to your project files.', function () {

        var done = this.async();

        var options = this.options({
            versionPattern: '[^\\-]version[\'"]?\\s*[:=]\\s*[\'"]',
            replacePattern: '[0-9a-zA-Z\\-_\\+\\.]+',
            revisionPrefix: '-r',
            revisionSuffix: ''
        });

        var pkg = grunt.file.readJSON('package.json');

        // We use the number of commits as our revision
        var cmd = 'git rev-list --count HEAD';

        var definedFiles = this.files;

        exec(cmd, function (error, stdout, stderr) {

            var revision = stdout.replace(/(\r\n|\n|\r)/gm, "");
            var version = pkg.version + options.revisionPrefix + revision + options.revisionSuffix;

            definedFiles.forEach(function (file) {

                var filepath = file.src[0];

                if (file.src.length === 0) {
                    grunt.fail.warn('You have to specify a valid src file in ' + JSON.stringify(file) + '.');
                }
                if (file.src.length > 1) {
                    grunt.fail.warn('You can only specify one src file in ' + JSON.stringify(file.src) + '.');
                }
                if (!grunt.file.exists(filepath)) {
                    grunt.fail.warn('Source file "' + filepath + '" not found.');
                }

                var content = grunt.file.read(filepath);

                // Apply the version string to the src file
                var pattern = new RegExp('(' + options.versionPattern + ')(' + options.replacePattern + ')', 'g');
                var output = content.replace(pattern, '$1' + version);

                grunt.file.write(file.dest, output);

                if (!pattern.exec(content)) {
                    grunt.log.error('Pattern not found in file "' + filepath + '"');
                    grunt.log.error('Pattern: ' + pattern);
                } else {
                    grunt.log.ok('File "' + file.dest + '" created.');
                }

                done();
            });
        });
    });
};
