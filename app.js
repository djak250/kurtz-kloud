var Directory    = require('./lib/directory');
var Controller   = require('./lib/controller');
var Notifier     = require('./lib/notifier');

var App = function(config) {
  this.config     = config;
  this.directory  = new Directory(config)
  this.controller = new Controller(config, this.directory);
  this.notifier   =  new Notifier();
};

App.prototype.start = function() {
  this.notifier.notify_application_start();
  this.directory.watch();
};

module.exports = App;
