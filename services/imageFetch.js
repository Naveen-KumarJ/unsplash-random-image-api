const { default: axios } = require("axios");

const fetchImage = async () => {
  const URL = `https://api.unsplash.com/photos/random?client_id=${process.env.CLIENT_ID}`;
  const response = await axios.get(URL);
  return response.data.urls;
};

module.exports = { fetchImage };
