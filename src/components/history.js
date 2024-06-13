import React from "react";

const History = ({ gameHistory }) => {
  return (
    <div>
      <h2>history Components</h2>
      <ol>{gameHistory}</ol>
    </div>
  );
};

export default History;
