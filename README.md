versionup
====

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


[my_license_url]: https://github.com/okunishinishi/node-versionup/blob/master/LICENSE