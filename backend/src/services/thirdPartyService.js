const axios = require("axios");

exports.fetchNumbers = async (numberId) => {
  try {
    const response = await axios.get(`http://thirdpartyapi.com/${numberId}`, {
      timeout: 500,
    });
    return response.data.numbers;
  } catch (error) {
    console.error("Error fetching numbers:", error.message);
    return null;
  }
};
