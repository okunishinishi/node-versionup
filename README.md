versionup
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-versionup
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-versionup
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-versionup.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-versionup/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-versionup
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-versionup.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-versionup.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-versionup
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-versionup.svg
[bd_npm_url]: http://www.npmjs.org/package/versionup
[bd_npm_shield_url]: http://img.shields.io/npm/v/versionup.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/versionup.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Increment version number in package.json (or bower.json)

<!-- Description End -->




<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/01.Installation.md.hbs" Start -->

<a name="section-doc-readme-01-installation-md"></a>
Installation
-----

```bash
npm install versionup --save-dev
```

<!-- Section from "doc/readme/01.Installation.md.hbs" End -->

<!-- Section from "doc/readme/02.Usage.md.hbs" Start -->

<a name="section-doc-readme-02-usage-md"></a>
Usage
----

Call `versionup()` at project root path where `package.json` exists.

Version number will be incremented. (eg. `{"version" : "1.0.0}` -> `{"version" : "1.0.1}`)

```javascript
#!/usr/bin/env node

/**
 * This is an example to use versionup.
 */

"use strict";

var versionup = require('versionup');

// Increment version number in package.json (or bower.json).
versionup({
    // Options
}, function (err) {
    /*...*/
});
````

<!-- Section from "doc/readme/02.Usage.md.hbs" End -->

<!-- Section from "doc/readme/03.Options.md.hbs" Start -->

<a name="section-doc-readme-03-options-md"></a>
Options
---------

| Key | Default | Description |
| --- | --- | --- |
| path | process.cwd() | Project root path or json file path to work with |
| level | 'patch' | Level to change. 'major', 'minor', or 'patch'. |
| amount | 1 | Amount to increment. |

<!-- Section from "doc/readme/03.Options.md.hbs" End -->

<!-- Section from "doc/readme/04.CLI.md.hbs" Start -->

<a name="section-doc-readme-04-c-l-i-md"></a>
Using with CLI
---------

Install as a global module.

```bash
$ npm install versionup -g
```

Then,

```bash
$ versionup -p "~/my_project" -l "micro" -a "1"
```


<!-- Section from "doc/readme/04.CLI.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-versionup/blob/master/LICENSE).

<!-- LICENSE End -->


