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
 * Uses Promises
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
      return reader(paths[1])//return moves whatever is afer it to the next things down
        .then(data => {
          console.log('Read File 2: ', contents);
          contents.push(data.toString().trim());
          return reader(paths[2])
            .then(data => {
              console.log('Read File 3: ', contents);
              contents.push(data.toString().trim());
              console.log('Contents: ', contents);
              callback(undefined, contents);//callback will move the contents back up
                                            //to the LAST place where it is put in as a parameter
                                            //in this case, the LAST place is readAll = (paths, callback)
                                            //on line 21
            });
        });
    });

};

//////////////////////// WORKS JUST AS WELL
//promise.all() VERSION
// const readAll = (paths, callback) => {
//   let promises = [];
//   paths.forEach(file => {
//     promises.push(readFile(file));
//   });

//   Promise.all(promises)
//     .then(data => {
//       let content = data.map( (val, idx) => {
//         val.toString().trim()
//         callback(undefined, content);
//       });
//   });
// };