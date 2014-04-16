# grunt-gitrevision

> Grunt task to add version and Git's revision information to your project files.

The idea is to use the current Git commit count as the revision number and combine it with the version string from your `package.json`.

We use the following command to determine Git's "revision" number:

```shell
git rev-list --count HEAD
```

Whenever a user/client comes back and tells you there is a bug in "revision" _1302_ you could use the following Git alias:

```
[alias]
    show-rev-number = !sh -c 'git rev-list --reverse HEAD | nl | awk \"{ if(\\$1 == "$0") { print \\$2 }}\"'
```

Using `git show-rev-number 1302` will print the **hash** for "revision" _1302_


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

#### options.versionPattern
Type: `String`
Default value: `'[^\\-]version[\'"]?\\s*[:=]\\s*[\'"]'`

A string value representing a regular expression to identify the preceding part of the actual version information.

#### options.revisionPrefix
Type: `String`
Default value: `'-r'`

A string value prefixing the revision number.

#### options.revisionSuffix
Type: `String`
Default value: `''`

A string value which should be appended to the revision information.


### Usage Examples

In this example, the default options are used to replace the version part `var version = '0';` from file `test/fixtures/testing.js`. So, if the input file contains the appropriate pattern the task will replace it with the actual version information and writes the new content to the specified output file `tmp/testing.js`.

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
