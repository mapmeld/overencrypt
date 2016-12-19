// native modules
const fs = require('fs');

// NPM modules
const nginxConf = require('nginx-conf');
const apacheConf = require('apacheconf');

function nginxCheck(path, callback) {
  // async load config file
  fs.readFile(path, { encoding: 'utf-8' }, function(err, stream) {
    // handle file errors
    if (err) {
      return callback(err);
    }
    
    // examine the Nginx config file and make standardized recommendations
    var txt = stream + '';
  
    var confr = new (nginxConf.NginxParser)();
    confr.parse(txt, function (err, tree) {
      // handle any errors that might have happened in the Nginx parser
      if (err) {
        return callback(err);
      }
    
      // search for useful tags
    });
  });
}

function apacheCheck(path, callback) {
  // examine the Apache config file and make standardized recommendations
  apacheConf(path, function(err, config, parser) {
    // handle any errors
    if (err) {
      return callback(err);
    }
    
    // ?
  });
}

function checkConf(box, path, callback) {    
  // figure out what to do with the config file
  box = ((box + '') || '').toLowerCase();
  if (box === 'nginx') {
    nginxCheck(path, callback);
  } else if (box === 'apache') {
    apacheCheck(path, callback);
  } else {
    callback('Must provide Nginx or Apache config file');
  }
  });
}

module.exports = checkConf;