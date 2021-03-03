import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn_of_player: 'X',
      board: ['', '', '', '', '', '', '', '', ''],
      x_score: 0,
      o_score: 0
    }
  }

  clickCell(index) {
    const win_combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [1, 4, 7],
      [2, 5, 8],
      [0, 3, 6],
      [0, 4, 8],
      [2, 4, 6]
    ];
    let board = [...this.state.board];
    if (board[index] === '') {
      board[index] = this.state.turn_of_player;
      this.setState({
        turn_of_player: (this.state.turn_of_player === 'X') ? 'O' : 'X',
        board: board
      });
    }

    for (let i = 0; i < win_combos.length; i++) {
      let [w1, w2, w3] = [win_combos[i][0], win_combos[i][1], win_combos[i][2]];
      if (board[w1] !== '' && board[w1] === board[w2] && board[w2] === board[w3]) {
        // END GAME
        if (this.state.turn_of_player === 'X') {
          this.addScore('X');
        } else if (this.state.turn_of_player === 'O') {
          this.addScore('O');
        }
        console.log(this.state)
        this.clearBoard();
      }
    }
    console.log(this.state)
  }

  addScore(player) {
    if (player === 'X') {
      this.setState(state => ({
        x_score: state.x_score + 1
      }));
    } else if (player === 'O') {
      this.setState(state => ({
        o_score: state.o_score + 1
      }));
    }

  }

  clearBoard() {
    this.setState(state => ({
      turn_of_player: 'X',
      board: ['', '', '', '', '', '', '', '', ''],
      x_score: state.x_score,
      o_score: state.o_score
    }))
  }

  render () {
    return (
      <div className='App'>
        <h1>Tic Tac Toe Game</h1>
        <p className='scores'>
          <span value>X scores: {this.state.x_score}</span><br />
          <span>O scores: {this.state.o_score}</span>
          </p>
        <div className='board'>
          {this.state.board.map((cell, index) => {
            return (
            <div
              onClick={() => this.clickCell(index)}
              className='cell'
              key={index}>
                {cell}
            </div>
            );
        })}
        </div>
      </div>
    );
  }
}


