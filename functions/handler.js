'use strict';

module.exports.main = async (event) => {
  const { httpMethod, body, queryStringParameters, path } = event;
  const { handler } = require(`./${path}`);
  const response = await handler(httpMethod, body, queryStringParameters);
  return response;
};
