const HmacSHA256 = require('crypto-js/hmac-sha256.js');
const Base64 = require('crypto-js/enc-base64.js');

const key = process.env.HASH_KEY;
const encryptByMmacSHA256 = (data) => Base64.stringify(HmacSHA256(data, key));

module.exports = { encryptByMmacSHA256 };
