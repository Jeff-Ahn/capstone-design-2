'use strict';

module.exports.main = async (event) => {
  const { httpMethod, body, queryStringParameters, path } = event;
  const { handler } = require(`./${path}`);
  const response = await handler(httpMethod, body, queryStringParameters);
  return response;
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify(
  //     {
  //       message: 'Go Serverless v1.0! Your function executed successfully!',
  //       input: event,
  //     },
  //     null,
  //     2
  //   ),
  // };
};
