import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Board from './components/Board/Board'
import Player from './components/Player/Player';
import Dice from './components/Dice/Dice';
import RollDice from './components/RollDice/RollDice';

import isSnakeTile from './utils/snakes';
import isLadderTile from './utils/ladders';
import AddPlayer from './components/AddPlayer/AddPlayer';
import Players from './components/Players/Players';

import getRandomColor from './utils/color';



class App extends Component {
  constructor(props) {
    super(props);
    const c = getRandomColor();
    this.state = {
      players: [{ name: 'player0', playerPosition: 0, color: c, throws: 0, sixes: 0, ladders: 0, snakes: 0 }],
      dieFace: 1,
      isMoving: false,
      currentPlayer: 0
    }
  }
  componentDidMount() {
    const nplayers = this.state.players.slice();
    nplayers[0].playerPosition = 1;
    this.setState({
      players: nplayers
    });
  }
  setNewState(r, newPosition) {
    const nplayers = this.state.players.slice();
    nplayers[this.state.currentPlayer].playerPosition = this.state.players[this.state.currentPlayer].playerPosition + r;
    this.setState({ players: nplayers, isMoving: true }, () => {
      setTimeout(() => {
        const nplayers = this.state.players.slice();
        nplayers[this.state.currentPlayer].playerPosition = newPosition;
        this.setState({ players: nplayers }, () => {
          this.setState({ isMoving: false }, () => {
            this.callbackAfterMove(r);
          })
        });

      }, 3000)
    });
  }
  callbackAfterMove(r) {
    if (this.state.players[this.state.currentPlayer].playerPosition === 100) {
      alert("Player " + this.state.players[this.state.currentPlayer].name + " has won!!!!!!!");
      const nplayers = [...this.state.players];
      nplayers.forEach(v => {
        v.playerPosition = 1;
      });
      this.setState({ players: nplayers });
      return;
    }
    if (r !== 6) {
      let cp = this.state.currentPlayer;
      if (cp === this.state.players.length - 1) {
        cp = 0;
      } else {
        cp++;
      }
      this.setState({ currentPlayer: cp });
    }
  }
  addStats(cp, r, snakeTile, ladderTile) {
    const nplayers = [...this.state.players];
    let player = nplayers[cp];
    //eslint-disable-next-line
    let x;
    if (r === 6) {
      x = { ...player, sixes: player.sixes++ };
    }
    if (snakeTile) {
      x = { ...player, snakes: player.snakes++ };
    }
    if (ladderTile) {
      x = { ...player, ladders: player.ladders++ };
    }
    x = { ...player, throws: player.throws++ };
    nplayers[cp] = player;
    this.setState({ players: nplayers });
  }
  handleClick() {
    const r = Math.floor(Math.random() * 6) + 1;
    const cp = this.state.currentPlayer;
    this.setState({ dieFace: r });
    const snakeTile = isSnakeTile(this.state.players[this.state.currentPlayer].playerPosition + r);
    const ladderTile = isLadderTile(this.state.players[this.state.currentPlayer].playerPosition + r);
    if (snakeTile) {
      this.setNewState(r, snakeTile);
    } else if (ladderTile) {
      this.setNewState(r, ladderTile);
    } else {
      if (this.state.players[this.state.currentPlayer].playerPosition + r <= 100) {
        let nplayers = this.state.players.slice();
        nplayers[this.state.currentPlayer].playerPosition = this.state.players[this.state.currentPlayer].playerPosition + r;
        this.setState({ players: nplayers }, () => { this.callbackAfterMove(r) });
      }
    }

    this.addStats(cp, r, snakeTile, ladderTile);
  }
  handleAdd() {
    const l = this.state.players.length;
    const c = getRandomColor();
    const nplayer = { name: 'player' + l, playerPosition: 1, color: c, throws: 0, sixes: 0, ladders: 0, snakes: 0 };
    const nplayers = this.state.players.slice();
    nplayers.push(nplayer);
    this.setState({ players: nplayers });
  }
  getPlayers() {
    return this.state.players.map((v, i) => {
      return <Player player={v} index={i} key={i} />
    })
  }
  render() {
    return (
      <div className="App">
        <Board />
        {this.getPlayers()}
        <Dice face={this.state.dieFace} />
        <RollDice handleClick={this.handleClick.bind(this)} isMoving={this.state.isMoving} />
        <AddPlayer handleAdd={this.handleAdd.bind(this)} />
        <Players players={this.state.players} currentPlayer={this.state.currentPlayer} />
      </div>
    );
  }
}

export default App;
