const { addNewScamData } = require('./create');
const { getScamDataByValue } = require('./read');

module.exports.handler = (httpMethod, body, queryStringParameters) => {
  const respose = { statusCode: 200, body: null };
  switch (httpMethod) {
    case 'GET': {
      const { search: value } = queryStringParameters;
      return getScamDataByValue(value);
    }
    case 'POST': {
      const { type, value, report_path } = JSON.parse(body);
      return addNewScamData(type, value, report_path);
    }
    case 'PUT': {
    }
    case 'DELETE': {
    }
    default:
      respose.statusCode = 405;
      respose.body = JSON.stringify({ message: 'Method Not Allowed' });
      return respose;
  }
};
