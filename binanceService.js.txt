const axios = require("axios");

const getMarketData = async (symbol) => {
  const response = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
  return response.data;
};

module.exports = { getMarketData };
