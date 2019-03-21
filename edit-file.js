'use strict';

const fs = require('fs');

/**
 * Reads test.txt file
 * Adds addtional data to test.txt
 * Reads test.txt after new data added
 * @type {function}
 * @param  err
 */

const read = (err) => {
  if(err) {
    console.err(err);
  };

  fs.readFile('files/test.txt', 'utf8',function(err, contents) {
    if(err) {
      console.err(err);
    };
    console.log('BEFORE: ', contents);

    fs.appendFile('files/test.txt', 'I Wrote Something... ', function (err) {
      if (err) {
        console.err(err);
      };
      console.log('Saved Additional Content');

      fs.readFile('files/test.txt', 'utf8',function(err, contents) {
        if(err) {
          console.err(err);
        };
        console.log('AFTER: ', contents);
      });
    
    });

  });

};

read();
