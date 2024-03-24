import React, { useState } from "react";
import Square from "./Square";
import "./Board.css";
function Board() {
  const [data, setData] = useState(Array(9).fill(null));

  // 컴포넌트를 리턴해서 이용하는 것도 가능.
  const renderSquare = (idx) => {
    return <Square value={data[idx]} event={() => changeValue(idx)} />;
  };

  const changeValue = (idx) => {
    /**
      리엑트 불변성 유지 기존 배열 건들면 리랜더링 되니까 
      복사본을 만들고 복사본을 변경 후
      변경본을 셋 데이터로 다시 할당
    */
    const newArray = data.slice();
    newArray[idx] = newArray[idx] === "X" ? "O" : "X";
    setData(newArray);
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
