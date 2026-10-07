const path = require('path');

// joining the path
const joinedPath = path.join(__dirname, 'folder', 'example.txt');
console.log('Joined Path:', joinedPath);

//getting dirname
const dirname = path.dirname(joinedPath);
console.log('Directory Name:', dirname);

//basename
const basename = path.basename(joinedPath);
console.log('Base Name:', basename);

const extname = path.extname(joinedPath);
console.log('Extension Name:', extname);