import React from 'react';
import '../App.css';
import{ calculateWinner } from './WinnerCombo'; // imports the combinations to determine the winner


// stores a value to the squares of the board when clicked
function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
  // creates and renders the board
  class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  // creates a fresh game with empty board, step number at 0 and x is the starting player
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber: 0,
        xIsNext: true
      };
    }
  
    handleClick(i) {
      // our history of the game up until the current point
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      // current point in our history of the game
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      // if there is a winner or if the square is filled do nothing/no more clicking
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      // sets the player's turn
      squares[i] = this.state.xIsNext ? "X" : "O";
      // sets the history
      this.setState({
        history: history.concat([
          {
            squares: squares
          }
        ]),
        // sets the step number
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }
  
    // jumps to the selected step number and sets the current turn player
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }
  
    render() {
      // renders the history/step number and calculates the winner
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
       // if move is not 0 go to that move number. If it is zero go back to the start
      const moves = history.map((step, move) => {
        const desc = move ?
          'Go To Move #' + move :
          'Play Again';
        return (
          <li key={move}>
            <button className="restart-btn" onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });
  
      // displays winner messsage or turn player if there isn't a winner
      let status;
      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "Next Player: " + (this.state.xIsNext ? "X" : "O");
      }
  
      return (
        <div className="container">
          <h1>React Tic Tac Toe</h1>
          <div>
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }

export default function TicTacToe() { 
        return (
            <Game />
        )
    }

