const {Buffer} = require('buffer');

const buf = Buffer.from('Hello, World!', 'utf-8');

console.log(buf.toString('hex'))
console.log(buf.toString('base64'))