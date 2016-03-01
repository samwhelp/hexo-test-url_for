'use strict';

var url = require('url');
var _ = require('lodash');

function fix_path(path)
{
    path = path || '/';
    path = '' + path;
    path = path.trim();
    return path;
}

function urlForHelper(path, options) {
  path = fix_path(path);
  if (path[0] === '#' || path[0] === '/') {
    return path;
  }

  var config = this.config;
  var root = fix_path(config.root);
  var data = url.parse(path);

  options = _.assign({
    relative: config.relative_link
  }, options);

  // Exit if this is an external path
  if (data.protocol) {
    return path;
  }

  // Resolve relative url
  if (options.relative) {
    return this.relative_url(this.path, path);
  }

  // Prepend root path
  if (root.length > 1 && root[root.length-1] !== '/') {
      return root + '/' + path;
  }
  path = root + path;

  return path;
}

module.exports = urlForHelper;
