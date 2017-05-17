import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      effect: 'Roland SH-09 Bass Drum Machine',
      buttons: [
        {id: '909bass1', text: 'Q', file: './audio/909bass1.wav'},
        {id: '909bass2', text: 'W', file: './audio/909bass2.wav'},
        {id: '909bass3', text: 'E', file: './audio/909bass3.wav'},
        {id: '909bass4', text: 'A', file: './audio/909bass4.wav'},
        {id: '909bass5', text: 'S', file: './audio/909bass5.wav'},
        {id: '909bass6', text: 'D', file: './audio/909bass6.wav'},
        {id: '909bass7', text: 'Z', file: './audio/909bass7.wav'},
        {id: '909bass8', text: 'X', file: './audio/909bass8.wav'},
        {id: '909bass9', text: 'C', file: './audio/909bass9.wav'}
        ]
    }
  }

  handleClick = (event) => {
    console.log(event)
    document.getElementById(event.target.innerText).play()
    this.setState({
      effect: event.target.id
    })
  }

  handleKeyDown = (event) => {
    console.log(event)
    if (event.target.nodeName === 'BODY') {
      var id = event.key.toUpperCase()
      var audio = document.getElementById(id)
      audio.play()
      this.setState({
        effect: audio.parentElement.id
      })
    } else {
      this.handleClick(event)
    }
  }

  createButtons = (button) => {
      return <button id={button.id} key={button.id} className='drum-pad' onClick={this.handleClick}>
        {button.text}
        <audio id={button.text} key={button.text} className='clip' src={button.file} />
        </button>
    }

  componentWillMount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div id='drum-machine' className="App">
        <div id='display'>
          {this.state.effect}
        </div>
        <div id='pads'>
          {this.state.buttons.map(this.createButtons)}
        </div>
      </div>
    );
  }
}

export default App;
