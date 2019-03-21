'use strict';

jest.mock('fs');

// const reader = require('../../lib/reader.js');
const reader = require('../../lib/reader-promises.js');


describe('File Reader Module', () => {

  it('when given a bad file, returns an error', () => {
    let files = ['bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    return reader(files, (err) => {
      expect(err).toBeDefined();
    });
  });


  it('reads 3 files', () => {
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];
    reader(files, (err) => {
      expect(err).toBeNull();
      expect(files instanceof Array ).toBeTruthy();
      expect(files.length ).toBe(3);
    });
  });

});
