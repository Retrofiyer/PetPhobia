const axios = require('axios');

exports.getCats = async (req, res) => {
  try {
    const response = await axios.get(process.env.CAT_API_URL, {
      headers: {
        'x-api-key': process.env.CAT_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cat images' });
  }
};