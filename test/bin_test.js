/**
 * Test for versionup.js bin.
 * Runs with nodeunit
 */

"use strict";

var bin = require.resolve('../bin/versionup'),
    cp = require('child_process'),
    path = require('path'),
    fs = require('fs');

var tmpPackageJson = path.resolve(__dirname, '../tmp/tmp-package-json-' + new Date().getTime() + '.json');

exports.setUp = function (done) {
    var tmpDir = path.dirname(tmpPackageJson);
    if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir);
    }
    fs.writeFileSync(tmpPackageJson, JSON.stringify({
        version: '4.0.1'
    }));
    done();
};

exports.tearDown = function (done) {
    fs.unlinkSync(tmpPackageJson);
    done();
};

exports['Do major versionup.'] = function (test) {
    cp.exec(bin + ' -l "major" -p ' + tmpPackageJson, function (err, stdout, stderr) {
        test.ifError(err);
        if (stdout) {
            console.log(stdout);
        }
        if (stderr) {
            console.error(stderr);
        }
        test.done();
    });
};