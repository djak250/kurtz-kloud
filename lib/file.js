var fs = require('fs');
var path = require('path');

var File = function(filePath) {
  this.name          = path.basename(filePath);
  this.directory     = path.dirname(filePath);
  this.path          = filePath;
  this.formattedName = this.name.split(' ').join('_');
}

File.prototype.unlink = function(){
    try{
        fs.unlinkSync(this.path);
    } catch(ignored){}
}

module.exports = File;
