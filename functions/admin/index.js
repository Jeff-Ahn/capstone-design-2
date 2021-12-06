const readApi = require('./read');

module.exports.handler = (httpMethod, body, queryStringParameters) => {
  const respose = { statusCode: 200, body: null };
  switch (httpMethod) {
    case 'GET': {
      const { search: value } = queryStringParameters;
      return readApi.getScamDataByValue(value);
    }
    case 'POST':
    case 'DELETE':
    default:
      respose.statusCode = 405;
      respose.body = JSON.stringify({ message: 'Method Not Allowed' });
      return respose;
  }
};
