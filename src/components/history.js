import React from "react";

const History = ({ gameHistory }) => {
  return (
    <div>
      <h2>history Components</h2>
      <ul>{gameHistory.map((el) => el)}</ul>
    </div>
  );
};

export default History;
