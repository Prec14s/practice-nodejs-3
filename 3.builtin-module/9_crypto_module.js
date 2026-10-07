const crypto = require('crypto');

const secret = "password";
const pwdsecret = "140402";
const hash = crypto.createHmac('sha256', secret).update(pwdsecret)
.digest('hex');

console.log(hash);
console.log(pwdsecret);
