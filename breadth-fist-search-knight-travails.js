import { chessBoard, Knight } from "./knight-travails.js"
class Queue {
  items = [];

  enqueue(obj) {
    this.items.push(obj);
  }
  dequeue() {
    return this.items.shift()
  }
  isEmpty() {
    return this.items.length === 0
  }
}

const doBFS = function(knight, graph) {

  let startingPosition = knight.currentPosition; 
  let allowedMoves = knight.autoMove();
  // console.log(allowedMoves.moves)
  const bfsInfo = [];
  for (let i = 0; i < graph.length; i++) {
    bfsInfo[i] = {
      distance: null,
      predecessor: null
    };
  }
  //
  // bfsInfo[startingPosition].distance = 0;
  //
  // const queue = new Queue();
  // queue.enqueue(startingPosition);
  //
  // // Traverse the graph
  // while (!queue.isEmpty()) {
  //   const vertex = queue.dequeue();
  //   // console.log(bfsInfo[source])
  //   console.log(vertex)
  //   for (let i = 0; i < graph[vertex].length; i++) {
  //     const neighbor = graph[vertex][i];
  //     // console.log(`Value of neighbor => ${neighbor}`)
  //
  //     if (bfsInfo[neighbor].distance === null) {
  //       console.log("im emtpy and here's my distance: ", bfsInfo[neighbor].distance)
  //       bfsInfo[neighbor].distance = bfsInfo[vertex].distance + 1;
  //       bfsInfo[neighbor].predecessor = vertex;
  //       console.log("I'm not empty anymore, my distance " + bfsInfo[neighbor].distance +
  //         " and i'm: ", neighbor)
  //       console.log("My predecessor is " + bfsInfo[neighbor].predecessor +
  //         " and i'm: ", neighbor)
  //       queue.enqueue(neighbor);
  //       console.log(bfsInfo[neighbor])
  //     }
  //   }
  // }
  // return bfsInfo;
};

const chessGame = new chessBoard();
chessGame.resetBoard();
const knightHero = new Knight();

chessGame.moveKnight(knightHero.knightMoves(3, 1))
chessGame.moveKnight(knightHero.knightMoves(5, 2))
chessGame.moveKnight(knightHero.knightMoves(7, 3))
chessGame.moveKnight(knightHero.knightMoves(9, 4))
chessGame.moveKnight(knightHero.knightMoves(7, 4))
chessGame.moveKnight(knightHero.knightMoves(5, 4))
chessGame.moveKnight(knightHero.knightMoves(3, 3))
knightHero.printListOfMoves();

doBFS(knightHero, chessGame)


// const adjList = [
//   [1],
//   [0, 4, 5],
//   [3, 4, 5],
//   [2, 6],
//   [1, 2],
//   [1, 2, 6],
//   [3, 5],
//   []
// ];
// const bfsInfo = doBFS(adjList, 3);
// for (const i = 0; i < adjList.length; i++) {
//     println("vertex " + i + ": distance = " + bfsInfo[i].distance + ", predecessor = " + bfsInfo[i].predecessor);
// }
