'use strict';

function toID(text) {
  return ('' + text).toLowerCase().replace(/[^a-z0-9]+/g, '');
}

exports.toID = toID;
