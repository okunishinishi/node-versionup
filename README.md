versionup
====

[![Build Status][my_travis_badge_url]][my_travis_url]
[![Code Climate][my_codeclimate_badge_url]][my_codeclimate_url]
[![Code Coverage][my_codeclimate_coverage_badge_url]][my_codeclimate_url]
[![npm version][my_npm_budge_url]][my_npm_url]


Tiny script to increment version number in package.json (or bower.json)

For example, `{"version" : "1.0.0}` -> `{"version" : "1.0.1}`

Usage
---------

Just path your project root path to version up package.json (or bower.json).

```javascript

var versionup = require('versionup');
versionup({
    path: '__your_project_root_path__'
});

```

Available options
---------

| Key | Default | Description |
| --- | --- | --- |
| path | process.cwd() | Project root path or json file path to work with. |
| level| "micro" | Level to change. "major", "minor", or "micro". |
| amount | 1 | Amount to increment. | 


Installation
---------

```bash
$ npm install --save-dev
```


Using with CLI
---------

```bash
$ npm install --g
```

```bash
$ versionup -p "${~/my_project}" -l "micro" -a "1"
```

License
-------
This software is released under the [MIT License][my_license_url].

[my_repo_url]: https://github.com/okunishinishi/node-versionup
[my_travis_url]: http://travis-ci.org/okunishinishi/node-versionup
[my_travis_badge_url]: http://img.shields.io/travis/okunishinishi/node-versionup.svg?style=flat
[my_license_url]: https://github.com/okunishinishi/node-versionup/blob/master/LICENSE
[my_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-versionup
[my_codeclimate_badge_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-versionup.svg?style=flat
[my_codeclimate_coverage_badge_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-versionup.svg?style=flat
[my_coverage_url]: http://okunishinishi.github.io/node-versionup/coverage/lcov-report
[my_npm_url]: http://www.npmjs.org/package/coz
[my_npm_budge_url]: http://img.shields.io/npm/v/coz.svg?style=flat
