const url = require('url');

const urlString = 'example.com:8080/pathname/?search=test#hash';

const parsedUrl = url.parse(urlString, true);

console.log(parsedUrl.host)
console.log(parsedUrl.pathname)