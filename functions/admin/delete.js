const { marshall } = require('@aws-sdk/util-dynamodb');
const { ddb } = require('../../common/dynamodb');

const deleteScamDataByValue = async (value, monitoring_date) => {
  try {
    const { $metadata } = await ddb.deleteItem({
      TableName: process.env.TABLE_NAME,
      Key: marshall({
        pk: `SEARCH#${value}`,
        sk: `MONITORING_DATE#${monitoring_date}`,
      }),
    });
    console.log('$metadata:', JSON.stringify($metadata));
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      statusCode: 200,
      body: JSON.stringify({ message: 'Successfully deleted data' }),
    };
  } catch (e) {
    console.error(e);
    return { statusCode: 500, body: JSON.stringify(e) };
  }
};

module.exports = {
  deleteScamDataByValue,
};
