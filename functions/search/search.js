const dayjs = require('dayjs');
const { unmarshall, marshall } = require('@aws-sdk/util-dynamodb');
const { ddb } = require('../../common/dynamodb');

const searchApi = async (value) => {
  const startDate = dayjs().subtract(365, 'day').format('YYYY-MM-DD');

  console.log('tablename', process.env.TABLE_NAME);
  try {
    const { Items } = await ddb.query({
      TableName: process.env.TABLE_NAME,
      ExpressionAttributeValues: marshall({
        ':pk': `SEARCH#${value}`,
        ':sk': `MONITORING_DATE#${startDate}`,
      }),
      KeyConditionExpression: `pk = :pk AND sk >= :sk`,
    });
    console.log('Items', Items);
    return { statusCode: 200, body: JSON.stringify(Items.map(unmarshall)) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify(e) };
  }
};

module.exports = {
  searchApi,
};
