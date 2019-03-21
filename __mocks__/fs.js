'use strict';

module.exports = exports = {};


//mocks do not use real data
//this mock is designed to allow force of an error
//if there is no file name passed to it though, it will send the callback function with
//'Invalid File'
exports.readFile = (file, cb) => {
  if( file.match(/bad/i) ) {
    cb('Invalid File');
  }
  else {
    cb(undefined, new Buffer('File Contents'));
  }
};