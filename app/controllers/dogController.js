const axios = require('axios');

exports.getDogs = async (req, res) => {
  try {
    const response = await axios.get(process.env.DOG_API_URL, {
      headers: {
        'x-api-key': process.env.DOG_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dog images' });
  }
};