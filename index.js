function solveSudoku(board) {
  solve(board);
  function solve(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === ".") {
          for (let num = 1; num <= 9; num++) {
            const char = num.toString();
            if (isValid(board, i, j, char)) {
              board[i][j] = char;
              if (solve(board)) return true;
              board[i][j] = ".";
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  function isValid(board, row, col, char) {
    for (let i = 0; i < 9; i++) {
      if (
        board[row][i] === char ||
        board[i][col] === char ||
        board[3 * Math.floor(row / 3) + Math.floor(i / 3)][
          3 * Math.floor(col / 3) + (i % 3)
        ] === char
      )
        return false;
    }
    return true;
  }
}
