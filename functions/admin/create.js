const { marshall } = require('@aws-sdk/util-dynamodb');
const dayjs = require('dayjs');
const { ddb } = require('../../common/dynamodb');

const addNewScamData = async (type, value, report_path) => {
  try {
    const { $metadata } = await ddb.putItem({
      TableName: process.env.TABLE_NAME,
      Item: marshall({
        pk: `SEARCH#${value}`,
        sk: `MONITORING_DATE#${dayjs().format('YYYY-MM-DD')}`,
        type,
        report_path,
      }),
    });
    console.log('$metadata:', JSON.stringify($metadata));
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Successfully added new Scam data' }),
    };
  } catch (e) {
    console.error(e);
    return { statusCode: 500, body: JSON.stringify(e) };
  }
};

module.exports = { addNewScamData };
