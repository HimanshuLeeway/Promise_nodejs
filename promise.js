const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

//this is the example of(asynch and await)

// app.get('/image', async (req, res) => {
//   const query = req.query.query || 'nature'; // default to nature if no query provided
//   const url = `https://api.unsplash.com/photos/random?query=${query}&orientation=landscape`;
//   const headers = { 'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` };

//   try {
//     const response = await axios.get(url, { headers });
//     const data = response.data;
//     const imageUrl = data.urls.regular;
//     res.send(`<img src="${imageUrl}" alt="Unsplash Image">`);
//   } catch (error) {
//     console.error('Error fetching image:', error);
//     res.status(500).send('Error fetching image');
//   }
// });



//example of Promise (.then and .catch method)
app.get('/image', (req, res) => {
    const query = req.query.query || 'nature'; // default to nature if no query provided
    const url = `https://api.unsplash.com/photos/random?query=${query}&orientation=landscape`;
    const headers = { 'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` };
  
    axios.get(url, { headers })
      .then(response => {
        const data = response.data;
        const imageUrl = data.urls.regular;
        res.send(`<img src="${imageUrl}" alt="Unsplash Image">`);
      })
      .catch(error => {
        console.error('Error fetching image:', error);
        res.status(500).send('Error fetching image');
      });
  });

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
