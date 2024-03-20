import React from "react";
import Square from "./Square";
import "./Board.css";
function Board() {
  // 컴포넌트를 리턴해서 이용하는 것도 가능.
  const renderSquare = (index) => {
    return <Square />;
  };
  return (
    <div className="board">
      <div className="status">Next Player: X, O</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
