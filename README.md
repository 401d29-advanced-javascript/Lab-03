##Lab-03-Async
--This Program reads multiple .txt files in order from 1 - 3 and stores them in an array

##Technologies
--Node.js
--fs
--eslint
--util
--jest

##Commands
(For Tests)
--npm test
OR
--jest

(For running index.js)
--node index.js

##Functions
--readAll()    in reader-fixed.js
--Accepts file paths and callback function as parameters
--Executes function readOne() which accepts files and callback function 
--reads each .txt file 1 - 3

in reader-promises.js
--readAll() accepts file paths and a callback function as parameters
--Executes reader() to read each .txt file and provide a promise for each
--Returns an array contents = [] with the three .txts in order

--