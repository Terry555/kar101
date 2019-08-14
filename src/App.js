import React, { Component } from 'react';
import LyricContainer from './LyricContainer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0,
      lyrics: ["I'm so tired I haven't slept a wink",
              "I'm so tired my mind is on the brink",
              "I wonder should I get up and fix myself a drink?"
              ]
    }
  }

  // state = {
  //   // counter: 0,
  //   imSoTiredLyricArr: [
  //     "I'm so tired, I haven't slept a wink",
  //     "I'm so tired, my mind is on the brink",
  //     "I wonder should I get up and fix myself a drink? No no no",
  //     "I'm so tired, I don't know what to do",
  //     "I'm so tired, my mind is set on you",
  //     "I wonder should I call you but I know what you would do",
  //     "You say I'm putting you on, but it's no joke it's doing me harm",
  //     "You know I can't sleep, I can't stop my brain, you know it's three weeks, I'm going insane",
  //     "You know I'd give you everything I've got for a little piece of mind",
  //     "I'm so tired, I'm feeling so upset",
  //     "Although I'm so tired, I'll have another cigarette",
  //     "And curse Sir Walter Raleigh, he was such a stupid git",
  //     "You say I'm putting you on, but it's no joke it's doing me harm",
  //     "You know I can't sleep, I can't stop my brain, you know it's three weeks, I'm going insane",
  //     "You know I'd give you everything I've got for a little piece of mind",
  //     "I'd give you everything I've got for a little piece of mind",
  //     "I'd give you everything I've got for a little piece of mind"
  //   ],
  //   imSoTiredLength: 123,
  //   beatlesLyrics: "",
  //   lyricsFromFetch: [],
  //   timer: 0
  // }

  // componentDidMount(){
  //   const ky = process.env.REACT_APP_MUSIX_API_KEY
  //   // fetch(`http://api.musixmatch.com/ws/1.1/tracking.url.get?apikey=${ky}?artist_name=katy%20perry%20&track_name=hot%20n%20cold`)
  //   fetch(`https://api.musixmatch.com/ws/1.1/track.chart.get?apikey=${ky}&format=json`, {
  //     mode: 'no-cors',
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-Type': 'text/plain'
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     // this.setState({
  //     //   lyricsFromFetch: data
  //     // })
  //   })
  // }

  changeLyrics = () => {
    return this.state.imSoTiredLyricArr[this.state.counter];
  }


  randomName = () => {
    this.setState({
      counter: this.state.counter+1
    })
    console.log(this.state.imSoTiredLyricArr[this.state.counter])
  }

  handleStartLyrics(){
    function timer(){
      this.setState({
        counter: (this.state.counter += 1)
      });
    }

    let mrvariable = setInterval(timer, 3000);
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>{this.state.lyrics[this.state.counter]}</h1>
        <button onClick={this.handleStartLyrics}>More Lyrics!</button>
      </header>
      <LyricContainer />
    </div>
  );
}
}

export default App;
