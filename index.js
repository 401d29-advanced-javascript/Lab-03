'use strict';

const fileReader = require('./lib/reader.js');

// Obtain and assert input
let files = process.argv.slice(2);

//instanceof Array  can also be written as  Array.isArray()
if( ! (files instanceof Array && files.length) ) {
  throw new Error('Invalid Args');
}

fileReader(files, (err,data) => {
  if ( err ) { throw err; }
  console.log('From Callback:', data);
});
