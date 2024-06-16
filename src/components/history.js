import React from "react";

const History = ({ gameHistory }) => {
  console.log(gameHistory, "gameHistory component");
  return (
    <div>
      <h2>history Components</h2>
      <ol>{gameHistory}</ol>
    </div>
  );
};

export default History;
