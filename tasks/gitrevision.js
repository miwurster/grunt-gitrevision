/*
 * grunt-gitrevision
 * https://github.com/miwurster/grunt-gitrevision
 *
 * Copyright (c) 2014 Michael Wurster
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    grunt.registerMultiTask('gitrevision', 'Adds version and Git\'s revision information to your project files.', function () {

        var options = this.options({
            prefix: '[^\\-]version[\'"]?\\s*[:=]\\s*[\'"]',
            replace: '[0-9a-zA-Z\\-_\\+\\.]+'
        });

        var pkg = grunt.file.readJSON('package.json');
        var version = pkg.version;

        this.files.forEach(function (file) {

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

            // Replace version
            var pattern = new RegExp('(' + options.prefix + ')(' + options.replace + ')', 'g');
            var output = content.replace(pattern, '$1' + version);

            grunt.file.write(file.dest, output);

            if (!pattern.exec(content)) {
                grunt.log.error('Pattern not found in file "' + filepath + '"');
                grunt.log.error('Pattern: ' + pattern);
            } else {
                grunt.log.ok('File "' + file.dest + '" created.');
            }
        });
    });
};
