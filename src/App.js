import React, { Component } from 'react';
import './App.css';


class App extends Component {

  state = {
    counter: 0,
    imSoTiredLyricArr: [
      "I'm so tired, I haven't slept a wink",
      "I'm so tired, my mind is on the brink",
      "I wonder should I get up and fix myself a drink? No no no",
      "I'm so tired, I don't know what to do",
      "I'm so tired, my mind is set on you",
      "I wonder should I call you but I know what you would do",
      "You say I'm putting you on, but it's no joke it's doing me harm",
      "You know I can't sleep, I can't stop my brain, you know it's three weeks, I'm going insane",
      "You know I'd give you everything I've got for a little piece of mind",
      "I'm so tired, I'm feeling so upset",
      "Although I'm so tired, I'll have another cigarette",
      "And curse Sir Walter Raleigh, he was such a stupid git",
      "You say I'm putting you on, but it's no joke it's doing me harm",
      "You know I can't sleep, I can't stop my brain, you know it's three weeks, I'm going insane",
      "You know I'd give you everything I've got for a little piece of mind",
      "I'd give you everything I've got for a little piece of mind",
      "I'd give you everything I've got for a little piece of mind"
    ],
    beatlesLyrics: ""
  }

  changeLyrics = () => {
    return this.state.imSoTiredLyricArr[this.state.counter];
  }


  randomName = () => {
    // event.preventDefault()
    this.setState({
      counter: this.state.counter+1
    })
    console.log(this.state.imSoTiredLyricArr[this.state.counter])
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>{this.state.imSoTiredLyricArr[this.state.counter]}</h1>
        <button onClick={this.randomName}>More Lyrics!</button>
      </header>
    </div>
  );
}
}

export default App;
