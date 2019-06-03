'use strict';

const path = require('path');

const _root = path.resolve(__dirname, '..');

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    console.log("Adding dummy log");
    return path.join.apply(path, [_root].concat(args));
}

exports.root = root;
