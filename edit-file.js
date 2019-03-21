'use strict';

const fs = require('fs');

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
