import React from "react";
import ReactDOM from "react-dom";
import Game from './snake/game';
import "./index.css";

// function Square(props) {
//     return (
//         <button className="square" onClick={props.onClick}>
//             {props.value}
//         </button>
//     );
// }
//
// class Board extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             squares: Array(255).fill(null),
//             xIsNext: true,
//         };
//     }
//
//     handleClick(i) {
//         const squares = this.state.squares.slice();
//         if (calculateWinner(squares) || squares[i]) {
//             return;
//         }
//         squares[i] = this.state.xIsNext ? 'X' : 'O';
//         this.setState({
//             squares: squares,
//             xIsNext: !this.state.xIsNext,
//         });
//     }
//
//     renderSquare(i) {
//         return (
//             <Square
//                 value={this.state.squares[i]}
//                 onClick={() => this.handleClick(i)}
//             />
//         );
//     }
//
//     render() {
//         const winner = calculateWinner(this.state.squares);
//         let status;
//         if (winner) {
//             status = 'Winner: ' + winner;
//         } else {
//             status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//         }
//
//         let squaresX = [];
//         for (let i = 0; i < 15; i++) {
//             let squaresY = [];
//             for (let j = 0; j < 15; j++) {
//                 squaresY.push(this.renderSquare(15 * i + j));
//             }
//             squaresX.push(
//                 <div className="board-row">
//                     {squaresY}
//                 </div>
//             );
//         }
//
//         return (
//             <div>
//                 {squaresX}
//             </div>
//         );
//     }
// }
//
// class Game extends React.Component {
//     render() {
//         return (
//             <div className="game">
//                 <div className="game-board">
//                     <Board />
//                 </div>
//                 <div className="game-info">
//                     <div>{/* status */}</div>
//                     <ol>{/* TODO */}</ol>
//                 </div>
//             </div>
//         );
//     }
// }

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

// function calculateWinner(squares) {
//     for (let i = 0; i < squares.length; i++) {
//         const [a, b, c] = squares[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return squares[a];
//         }
//     }
//     return null;
// }
