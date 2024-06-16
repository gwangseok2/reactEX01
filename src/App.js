import "./App.css";
import Board from "./components/Board";
import React, { useState } from "react";
import History from "./components/History";

function App() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);

  const [xIsNext, setxIsNext] = useState(true);

  const [stepNumber, setStepNumber] = useState(0);

  // 승자체크
  const gameWinnerCheck = (square) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[b] === square[c]) {
        return square[a];
      }
    }

    return null;
  };

  const current = history[stepNumber];
  const winner = gameWinnerCheck(current.squares);

  // player turn text
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  /**
    리엑트 불변성 유지 기존 배열 건들면 리랜더링 되니까 
    복사본을 만들고 복사본을 변경 후
    변경본을 셋 데이터로 다시 할당
  */
  const boardClick = (idx) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const newCurrent = newHistory[newHistory.length - 1];
    const newSquares = newCurrent.squares.slice();

    // 중복클릭방지
    if (gameWinnerCheck(newHistory) || newSquares[idx]) {
      return;
    }

    newSquares[idx] = xIsNext ? "X" : "O";
    setHistory([...newHistory, { squares: newSquares }]);
    setxIsNext((xIsNext) => !xIsNext);
    setStepNumber(newHistory.length);
  };

  // 게임 히스토리 랜더
  const gameHistory = history.map((el, idx) => {
    const desc = idx ? `Go to move #${idx}` : "Go to game start";
    return (
      <li key={idx} onClick={() => moveToHistory(idx)}>
        <button>{desc}</button>
      </li>
    );
  });

  const moveToHistory = (idx) => {
    setStepNumber(idx);
    setxIsNext(idx % 2 === 0);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(idx) => boardClick(idx)} />
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
        <History gameHistory={gameHistory} />
      </div>
    </div>
  );
}

export default App;
