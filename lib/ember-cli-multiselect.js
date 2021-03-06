'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLIMultiselect(project) {
  this.project = project;
  this.name    = 'Ember CLI Multi Select';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLIMultiselect.prototype.treeFor = function treeFor(name) {
  var treePath =  path.join('node_modules', 'ember-cli-multiselect', name + '-addon');

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLIMultiselect.prototype.included = function included(app) {
  this.app = app;
  this.app.import('bower_components/ember-cli-multiselect/styles/style.css');
};

module.exports = EmberCLIMultiselect;
