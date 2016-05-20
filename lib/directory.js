var events = require('events');
var chkdir = require('chokidar');
var File = require('./file');

var Directory = function(config) {
    this.watchDir = config.watch;
    this.criteria = config.matchCriteria;
};

Directory.prototype = new events.EventEmitter();

Directory.prototype.watch = function() {
    chkdir.watch(this.watchDir + "/" + this.criteria.startsWith + "*" + this.criteria.endsWith).on('add', this.newFileEvent.bind(this));
};

Directory.prototype.newFileEvent = function(path, event) {
    this.emit('newFile', new File(path));
};


module.exports = Directory;
