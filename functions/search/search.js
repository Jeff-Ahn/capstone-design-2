const dayjs = require('dayjs');
const { unmarshall, marshall } = require('@aws-sdk/util-dynamodb');
const { ddb } = require('../../common/dynamodb');

const increaseCallCount = async (type) => {
  const result = await ddb.updateItem({
    TableName: process.env.TABLE_NAME,
    Key: marshall({
      pk: `CALL_COUNT#${type}`,
      sk: `CALL_DATE#${dayjs().format('YYYY-MM-DD')}`,
    }),
    UpdateExpression: 'ADD call_count :incr',
    ExpressionAttributeValues: marshall({
      ':incr': 1,
    }),
    ReturnValues: 'UPDATED_NEW',
  });
  console.log('result:', JSON.stringify(result));
};

const searchApi = async (type, value) => {
  const startDate = dayjs().subtract(365, 'day').format('YYYY-MM-DD');

  try {
    const { Items } = await ddb.query({
      TableName: process.env.TABLE_NAME,
      ExpressionAttributeValues: marshall({
        ':pk': `SEARCH#${value}`,
        ':sk': `MONITORING_DATE#${startDate}`,
      }),
      KeyConditionExpression: `pk = :pk AND sk >= :sk`,
    });
    await increaseCallCount(type);
    const items = Items.map((item) => unmarshall(item));
    console.log('items:', JSON.stringify(items));
    return { statusCode: 200, body: JSON.stringify(items) };
  } catch (e) {
    console.error(e);
    return { statusCode: 500, body: JSON.stringify(e) };
  }
};

module.exports = {
  searchApi,
};
