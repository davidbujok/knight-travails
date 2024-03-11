class chessBoard {

  constructor() {
    this.board = this.autoChessBoard()
  }

  printBoard() {
    for (let row = 0; row < this.board.length; row++) {
      const line = this.board[row];
      console.log(`${line}`)
    };
    console.log("---------------------")
  }
  resetBoard() {
    this.board[1][2] = " X"
  }
  moveKnight(x) {
    // console.log(`${x[0]}|${x[1]}`)
    this.board[x[0]][x[1]] = " X";
    this.printBoard();
  }
  autoChessBoard = () => {
    let chessBoard = []
    for (let i = 0; i < 8; i++) {
      chessBoard.push([])
      for (let j = 0; j < 8; j++) {
        chessBoard[i].push("  ")
      }
    }
    return chessBoard;
  }
}

class Knight {
  currentPosition = [];
  lastPosition = [];
  listOfExecutedMoves = [];
  listOfPossibleMoves = [];

  printListOfMoves() {
    console.log(this.listOfExecutedMoves)
  }
  printListOfPossibleMoves() {
    console.log(this.listOfPossibleMoves)
  }
  printCurrentPosition() {
    return this.currentPosition
  }

  isLegal(x, y) {
    let moveX = false
    let moveY = false
    let moveL = false
    let moveR = false
    let moveOut = true
    this.currentPosition.length === 0 && (this.currentPosition = [1, 2]);
    if (x - this.currentPosition[0] === 2 || this.currentPosition[0] - x === 2) {
      moveX = true;
    } else {
      moveX = false;
    }

    if ((y - this.currentPosition[1] === 1) || (this.currentPosition[1] - y === 1)) {
      moveY = true;
    } else {
      moveY = false;
    }

    if (x - this.currentPosition[0] === 1 || this.currentPosition[0] - x === 1) {
      moveL = true;
    } else {
      moveL = false;
    }

    if ((y - this.currentPosition[1] === 2) || (this.currentPosition[1] - y === 2)) {
      moveR = true;
    } else {
      moveR = false;
    }
    if (x > 7 || x < 0 || y > 7 || y < 0) {
      moveOut = false
      console.log("You will fall of the board")
    }
    if ((moveX === true && moveY === true && moveOut === true) || (moveR === true && moveL === true && moveOut === true)) {
      return true
    } else {
      return false
    }
  }
  knightMoves(x, y) {
    if (this.isLegal(x, y)) {
      this.lastPosition = this.currentPosition;
      this.currentPosition = [x, y]
      this.listOfExecutedMoves.push([x, y])
      return [x, y, true]
    } else {
      console.log("You can't move in there")
      return this.currentPosition
    }
  }
  knightCheckMoves(x, y) {
    if (this.isLegal(x, y)) {
      this.listOfPossibleMoves.push([x, y])
    }
  }
  autoMove() {
    for (let moveX = 0; moveX < 8; moveX++) {
      for (let moveY = 0; moveY < 8; moveY++) {
        this.knightCheckMoves(moveX, moveY)
      }
    }
    this.printListOfPossibleMoves();
    return { position: this.currentPosition, moves: this.listOfPossibleMoves }
  }
}

export { chessBoard, Knight }



