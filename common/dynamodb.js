const { DynamoDB } = require('@aws-sdk/client-dynamodb');

const ddb = new DynamoDB({
  region: 'ap-northeast-2',
});

module.exports = {
  ddb,
};
