import React, { useContext } from 'react';
import ContextGame from './utils/ContextGame'
import GameCell from './GameCell';
import './GameBoard.css';

function GameBoard() {
  
  const { gameBoard, updateGame } = useContext(ContextGame);

    return (
      <div className="game-board">
        {gameBoard.map((playerId, i) => (
          <GameCell
            id={i}
            key={i}
            onClick={() => updateGame(i)}
            content={playerId}
          />
        ))}
      </div>
    );
}

export default GameBoard;
