const placeOrder = async (type, price, quantity) => {
  // Simulate a trade execution (for now, a mock implementation)
  return { status: "success", type, price, quantity, timestamp: Date.now() };
};

module.exports = { placeOrder };
