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

            if (typeof file.src !== 'string') {
                grunt.fail.warn('You can only specify one src file.');
            }

//            var contents = file.src.filter(function (filepath) {
//                // Remove nonexistent files (it's up to you to filter or warn here).
//                if (!grunt.file.exists(filepath)) {
//                    grunt.log.warn('Source file "' + filepath + '" not found.');
//                    return false;
//                } else {
//                    return true;
//                }
//            }).map(function (filepath) {
//                // Read and return the file's source.
//                return grunt.file.read(filepath);
//            }).join('\n');
//            // Write joined contents to destination filepath.
//            grunt.file.write(file.dest, contents);
//            // Print a success message.
//            grunt.log.writeln('File "' + file.dest + '" created.');
        });


//        this.files.forEach(function (filepath) {
//
//            grunt.log.error(JSON.stringify(filepath));
//
//            // Warn if a source file/pattern was invalid.
//            if (!grunt.file.exists(filepath)) {
//                grunt.log.error('Source file "' + filepath + '" not found.');
//                return '';
//            }
//
//            // Read file source.
//            var pattern = new RegExp('(' + options.prefix + ')(' + options.replace + ')', 'g'),
//                file = grunt.file.read(filepath),
//                newfile = file.replace(pattern, '$1' + version),
//                matches = pattern.exec(file);
//
//            if (!matches) {
//                grunt.log.subhead('Pattern not found in file');
//                grunt.log.writeln('Path: ' + filepath);
//                grunt.log.writeln('Pattern: ' + pattern);
//            } else {
//                grunt.log.subhead('File updated');
//                grunt.log.writeln('Path: ' + filepath);
//                grunt.log.writeln('Old version: ' + matches.pop() + '. New version: ' + version + '.');
//            }
//
//
//            grunt.file.write(filepath, newfile);
//        });
    });
};
