const util = require('util');

const fs = require('fs');

const readFilePromise = util.promisify(fs.readFile);

readFilePromise('example.txt', 'utf-8').then(data => {
    console.log(data);
})

const formattedString = util.format('Hello, %s!', 'World', 'Ucok','Abangku')
console.log(formattedString);