import React, { useState } from 'react';
import ContextGame from './ContextGame';

function Provider({ children }) {
  const [ activePlayer, setActivePlayer ] = useState(1);
  const [ gameBoard, setGameBoard ] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    
  const resetGame = () => {
    setActivePlayer(1);
    setGameBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  const toggleActivePlayer = () => {
    if (activePlayer === 1) return setActivePlayer(2);
    return setActivePlayer(1);
  }

  const updateGame = (cellClicked) => {
    const newGame = [...gameBoard];

    if (gameBoard[cellClicked] === 0) {
      newGame[cellClicked] = activePlayer;
      toggleActivePlayer();
    } else newGame[cellClicked] = gameBoard[cellClicked];
    setGameBoard(newGame);
  }

  const contextGame = {
    activePlayer,
    gameBoard,
    resetGame,
    updateGame,    
  }

  return (
    <ContextGame.Provider value={ contextGame }>
      { children }
    </ContextGame.Provider>
  );  
}

export default Provider;
