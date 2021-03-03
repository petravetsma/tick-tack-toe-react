import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn_of_player: 'X',
      board: ['', '', '', '', '', '', '', '', '']
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
    board[index] = this.state.turn_of_player;

    for (let i = 0; i < win_combos.length; i++) {
      let [w1, w2, w3] = [win_combos[i][0], win_combos[i][1], win_combos[i][2]];
      if (board[w1] !== '' && board[w1] === board[w2] && board[w2] === board[w3]) {
        // END GAME
        alert('END GAME');
      }
    }

    this.setState({
      turn_of_player: (this.state.turn_of_player === 'X') ? 'O' : 'X',
      board: board
    });
  }

  render () {
    return (
      <div className='App'>
        <h1>Tic Tac Toe Game</h1>
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


