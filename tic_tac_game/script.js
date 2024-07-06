document.addEventListener('DOMContentLoaded', () => {
      const cells = document.querySelectorAll('[data-cell]');
      const board = document.getElementById('board');
      const restartButton = document.getElementById('restartButton');
      const scoreXElement = document.getElementById('score-x');
      const scoreOElement = document.getElementById('score-o');
      const X_CLASS = 'x';
      const O_CLASS = 'o';
      const WINNING_COMBINATIONS = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
      ];
      let oTurn;
      let scoreX = 0;
      let scoreO = 0;
  
      // Start the game
      startGame();
  
      // Restart game when restart button is clicked
      restartButton.addEventListener('click', startGame);
  
      function startGame() {
          oTurn = false;
          cells.forEach(cell => {
              cell.classList.remove(X_CLASS);
              cell.classList.remove(O_CLASS);
              cell.removeEventListener('click', handleClick);
              cell.addEventListener('click', handleClick, { once: true });
          });
          setBoardHoverClass();
      }
  
      function handleClick(e) {
          const cell = e.target;
          const currentClass = oTurn ? O_CLASS : X_CLASS;
          placeMark(cell, currentClass);
          if (checkWin(currentClass)) {
              endGame(false);
          } else if (isDraw()) {
              endGame(true);
          } else {
              swapTurns();
              setBoardHoverClass();
          }
      }
  
      function endGame(draw) {
          if (draw) {
              alert('Draw!');
          } else {
              if (oTurn) {
                  scoreO++;
                  scoreOElement.textContent = scoreO;
                  alert('Player O Wins!');
              } else {
                  scoreX++;
                  scoreXElement.textContent = scoreX;
                  alert('Player X Wins!');
              }
          }
          cells.forEach(cell => {
              cell.removeEventListener('click', handleClick);
          });
      }
  
      function isDraw() {
          return [...cells].every(cell => {
              return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS);
          });
      }
  
      function placeMark(cell, currentClass) {
          cell.classList.add(currentClass);
      }
  
      function swapTurns() {
          oTurn = !oTurn;
      }
  
      function setBoardHoverClass() {
          board.classList.remove(X_CLASS);
          board.classList.remove(O_CLASS);
          if (oTurn) {
              board.classList.add(O_CLASS);
          } else {
              board.classList.add(X_CLASS);
          }
      }
  
      function checkWin(currentClass) {
          return WINNING_COMBINATIONS.some(combination => {
              return combination.every(index => {
                  return cells[index].classList.contains(currentClass);
              });
          });
      }
  });
  