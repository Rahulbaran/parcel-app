const axios = require("axios").default;

exports.handler = async (event, context) => {
  const url = `https://www.boredapi.com/api/activity?type=${
    event.queryStringParameters.type || "music"
  }`;

  try {
    const { data } = await axios.get(url);

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString()
    };
  }
};
