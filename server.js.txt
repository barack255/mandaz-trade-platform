
const express = require("express");
const cors = require("cors");
const firebaseAdmin = require("firebase-admin");
const { getMarketData } = require("./binanceService");
const { placeOrder } = require("./tradeExecutionService");

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Firebase Admin SDK
const serviceAccount = require("./firebase-service-account.json");
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://your-database-url.firebaseio.com",
});

// Route to get market data (Binance API or similar)
app.get("/api/market-data", async (req, res) => {
  try {
    const marketData = await getMarketData("BTCUSDT");
    res.json(marketData);
  } catch (error) {
    res.status(500).send("Error fetching market data");
  }
});

// Route to place an order (paper trading logic)
app.post("/api/place-order", async (req, res) => {
  try {
    const { type, price, quantity } = req.body;
    const order = await placeOrder(type, price, quantity);
    res.json(order);
  } catch (error) {
    res.status(500).send("Error placing order");
  }
});

// Server start
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Mandaz Trade Platform server running on port ${port}`);
});
