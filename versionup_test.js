/**
 * Test for versionup.js
 * Runs with nodeunit
 */

"use strict";

var versionup = require('./versionup'),
    path = require('path'),
    fs = require('fs');

var tmpPackageJson = path.resolve(__dirname, 'tmp/tmp-package-json-' + new Date().getTime() + '.json');

exports.setUp = function (done) {
    var tmpDir = path.dirname(tmpPackageJson);
    if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir);
    }
    fs.writeFileSync(tmpPackageJson, JSON.stringify({
        version: '1.0.1'
    }));
    done();
};

exports.tearDown = function (done) {
    fs.unlinkSync(tmpPackageJson);
    done();
};

exports['Do major versionup.'] = function (test) {
    versionup({
        path: tmpPackageJson,
        level: 'major'
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

exports['Do minor versionup.'] = function (test) {
    versionup({
        path: tmpPackageJson,
        level: 'minor',
        amount: 2
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

exports['Do micro versionup.'] = function (test) {
    versionup({
        path: tmpPackageJson,
        level: 'micro',
        amount: 4
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

exports['Do version up with invalid path.'] = function (test) {
    versionup({
        path: '__invalid_path__'
    }, function (err) {
        test.ok(!!err);
        test.done();
    })
};