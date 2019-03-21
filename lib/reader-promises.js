'use strict';

const fs = require('fs');
const util = require('util');
let contents = [];
let reader = util.promisify(fs.readFile);
/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files, callback) => {
  readAll([...files],callback);
  contents = [];
};

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */
const readAll = (paths, callback) => {

  let contents = [];

  reader(paths[0])
    .then(data => {
      console.log('Read File 1: ', contents);
      contents.push(data.toString().trim());
      return reader(paths[1])
        .then(data => {
          console.log('Read File 2: ', contents);
          contents.push(data.toString().trim());
          return reader(paths[2])
            .then(data => {
              console.log('Read File 3: ', contents);
              contents.push(data.toString().trim());
              console.log('Contents: ', contents);
              return contents;
            });
        });
    });

  callback(null, contents);
};

