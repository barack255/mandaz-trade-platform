const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const axios = require('axios');
const firebaseAdmin = require('firebase-admin');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Firebase Admin SDK setup
const serviceAccount = require('./firebase-service-account.json');
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: 'https://your-database-url.firebaseio.com'
});

// Sample market data API (Binance or any other provider)
const binanceApiUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT';

async function fetchMarketData() {
  try {
    const response = await axios.get(binanceApiUrl);
    const data = response.data;
    io.emit('marketData', { 
      price: parseFloat(data.price), 
      timestamp: Date.now() 
    });
  } catch (error) {
    console.error('Error fetching market data', error);
  }
}

// Fetch market data every 1 second
setInterval(fetchMarketData, 1000);

// Serve static files (frontend)
app.use(express.static('../public'));

// Start the server
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
