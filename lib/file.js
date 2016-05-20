var fs = require('fs');

var File = function(name, directory) {
  this.name          = name;
  this.directory     = directory;
  this.path          = [directory, name].join('/');
  this.formattedName = name.split(' ').join('_');
}

File.prototype.unlink = function(){
    try{
        fs.unlinkSync(this.path);
    } catch(ignored){}
}

module.exports = File;
