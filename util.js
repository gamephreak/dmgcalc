'use strict';

function toID(text) {
  return ('' + text).toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function error(err, msg) {
  if (err) {
    throw new Error(msg);
  } else {
    console.log(error);
  }
}

function include(xs, x) {
  return xs.indexOf(x) !== -1;
}

exports.toID = toID;
exports.error = error;
exports.include = include;
