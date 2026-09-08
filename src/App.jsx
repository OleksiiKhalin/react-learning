import {useState} from 'react'

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from './components/Log'
import WinCard from './components/WinCard.jsx'
import WINNING_COMBINATIONS from './winning_combinations'


function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  
  return currentPlayer;
}

function checkWin(gameTurns) {
  for (const player of ['X', 'O']) {
    for (const combination of WINNING_COMBINATIONS) {
      const hasWon = combination.every(({ row, col }) =>
        gameTurns.some(
          turn =>
            turn.player === player &&
            turn.square.row === row &&
            turn.square.col === col
        )
      );

      if (hasWon) {
        return player;
      }
    }
  }

  return null;
}


function App() {
  // const [activePlayer, setActivePlayer] = useState('X')
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = deriveActivePlayer(gameTurns);
  const winner = checkWin(gameTurns);
  const hasDraw = gameTurns.length === 9 && !winner;

  
  function handleRestart() {
    setGameTurns([]);
  }

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O': 'X')
    setGameTurns(prevTurns => {
      let currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{
        square: {row: rowIndex, col: colIndex}, player: currentPlayer
      },...prevTurns];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player1" symbol="X" isActive={activePlayer==='X'} />
          <Player initialName="Player2" symbol="O" isActive={activePlayer==='O'} />
        </ol>
        {
          (winner || hasDraw) 
          && <WinCard onRestart={handleRestart} winner={winner} hasDraw={hasDraw} />}
          || <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} /> 
      </div>
      <Log turns={gameTurns} />
    </main>
    
  )
}

export default App
