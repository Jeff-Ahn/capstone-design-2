const { unmarshall, marshall } = require('@aws-sdk/util-dynamodb');
const { ddb } = require('../../common/dynamodb');

const getScamDataByValue = async (value) => {
  try {
    const { Items } = await ddb.query({
      TableName: process.env.TABLE_NAME,
      ExpressionAttributeValues: marshall({
        ':pk': `SEARCH#${value}`,
      }),
      KeyConditionExpression: `pk = :pk`,
    });
    const items = Items.map((item) => unmarshall(item));
    console.log('items:', JSON.stringify(items));
    return { statusCode: 200, body: JSON.stringify(items) };
  } catch (e) {
    console.error(e);
    return { statusCode: 500, body: JSON.stringify(e) };
  }
};

module.exports = { getScamDataByValue };
