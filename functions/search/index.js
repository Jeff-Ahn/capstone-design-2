const { searchApi } = require('./search');

module.exports.handler = (httpMethod, body, queryStringParameters) => {
  const respose = { statusCode: 200, body: null };
  if (httpMethod !== 'POST') {
    respose.statusCode = 405;
    respose.body = JSON.stringify({ message: 'Method Not Allowed' });
    return respose;
  }
  const { type, value } = JSON.parse(body);
  return searchApi(type, value);
};
