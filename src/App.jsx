import Player from "./components/Player";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, SetActivePlayer] = useState("X");

  function handleSelectSquare (rowIndex, colIndex){
    SetActivePlayer((curActivePlayer)=> curActivePlayer === "X" ? "O" : "X");
    
    setGameTurns(prevTurn=> {
      let currentPlayer = "X";

      if (prevTurn.length > 0 &&  prevTurn[0].player === "X"){
        currentPlayer = "0";
      }


      const updateTurn = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer} ,...prevTurn]
      return updateTurn;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="P1" symbol="X" isActive={activePlayer === "X"}/>
          <Player initialName="P2" symbol="O" isActive={activePlayer === "O"}/>
        </ol>
        <GameBoard onSelectSquare = {handleSelectSquare} turns = {gameTurns}></GameBoard>
      </div>
    </main>
  );
}

export default App;
