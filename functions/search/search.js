const dayjs = require('dayjs');
const { unmarshall, marshall } = require('@aws-sdk/util-dynamodb');
const { ddb } = require('../../common/dynamodb');

const searchApi = async (value) => {
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
