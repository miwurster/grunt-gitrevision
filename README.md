# grunt-gitrevision

> Grunt task to add version and Git's revision information to your project files.

## Getting Started

This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-gitrevision --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-gitrevision');
```

## The "gitrevision" task

### Overview

In your project's Gruntfile, add a section named `gitrevision` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    gitrevision: {
        options: {
            prefix: '[^\\-]version[\'"]?\\s*[:=]\\s*[\'"]'
        },
        your_target: {
            files: {
                'tmp/testing.js': ['test/fixtures/testing.js']
            }
        },
    },
});
```

### Options

#### options.prefix
Type: `String`
Default value: `'[^\\-]version[\'"]?\\s*[:=]\\s*[\'"]'`

A string value representing a regular expression to identify the preceding part of the actual version information.

### Usage Examples

In this example, the default options are used to replace the version part `var version = '0';` from file `test/fixtures/testing.js`. So, if the input has the appropriate pattern the file with the actual version information is written to `tmp/testing.js`.

```js
gitrevision: {
    default_options: {
        files: {
            'tmp/testing.js': ['test/fixtures/testing.js']
        }
    }
}
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License

[MIT](http://opensource.org/licenses/MIT) © [Michael Wurster](http://miwurster.com)
