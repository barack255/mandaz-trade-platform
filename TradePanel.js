import React from "react";

const TradePanel = ({ balance }) => {
  return (
    <div className="trade-panel">
      <h2>Trade Panel</h2>
      <p>Balance: ${balance}</p>
      {/* Add your trading functionality here */}
    </div>
  );
};

export default TradePanel;
