const zlib = require('zlib')
const fs = require('fs')

const source = fs.readFileSync('example.txt', 'utf-8')
const zip = zlib.gzipSync(source)

fs.writeFileSync('example.zip', zip)