import React, { Component } from 'react';
import LyricContainer from './LyricContainer';
import Metronome from './Metronome';
import './App.css';

let variable = 0;

class App extends Component {

    state = {
      counter: 0,
      lyrics: [
        "*Instrumental*",
        "Hanging out behind the club on the weekend",
        "Acting stupid, getting drunk with my best friends",
        "I couldn't wait for the summer and the Warped Tour",
        "I remember it's the first time that I saw her there",
        "*Instrumental*",
        "She's getting kicked out of school cause she's failing",
        "I'm kind of nervous cause I think all her friends hate me",
        "She's the one, she'll always be there",
        "She took my hand and that made it I swear",
        "Because I fell in love with the girl at the rock show",
        "She said 'what?' and I told her that I didn't know",
        "She's so cool, I'm gonna sneak in through her window",
        "Everything's better when she's around",
        "I can't wait till her parents go out of town",
        "I fell in love with the girl at the rock show",
        "When we said we were gonna move to Vegas",
        "I remember the look her mother gave us",
        "Seventeen without a purpose or direction",
        "We don't owe anyone a fucking explanation",
        "I fell in love with the girl at the rock show",
        "She said 'what?' and I told her that I didn't know",
        "She's so cool, I'm gonna sneak in through her window",
        "Everything's better when she's around",
        "I can't wait till her parents go out of town",
        "I fell in love with the girl at the rock show",
        "Black and white picture of her on my wall",
        "I waited for her call",
        "She always kept me waiting",
        "And if I ever got another chance",
        "I'd still ask her to dance",
        "Because she kept me waiting",
        "I fell in love with the girl at the rock show",
        "She said 'what?' and I told her that I didn't know",
        "She's so cool, I'm gonna sneak in through her window",
        "Everything's better when she's around",
        "I can't wait till her parents go out of town",
        "I fell in love with the girl at the rock show",
        "With the girl at the rock show",
        "With the girl at the rock show",
        "(I'll never forget tonight) with the girl at the rock show"
      ],
        timeDelay: [
          12000,
          3000, 2000, 3000, 2000,
          12000
        ]
  }

  // "I'm so tired, I haven't slept a wink",
  // "I'm so tired, my mind is on the brink",
  // "I wonder should I get up and fix myself a drink? No no no",
  // "I'm so tired, I don't know what to do",
  // "I'm so tired, my mind is set on you",
  // "I wonder should I call you but I know what you would do",
  // "You say I'm putting you on, but it's no joke it's doing me harm",
  // "You know I can't sleep, I can't stop my brain, you know it's three weeks, I'm going insane",
  // "You know I'd give you everything I've got for a little piece of mind",
  // "I'm so tired, I'm feeling so upset",
  // "Although I'm so tired, I'll have another cigarette",
  // "And curse Sir Walter Raleigh, he was such a stupid git",
  // "You say I'm putting you on, but it's no joke it's doing me harm",
  // "You know I can't sleep, I can't stop my brain, you know it's three weeks, I'm going insane",
  // "You know I'd give you everything I've got for a little piece of mind",
  // "I'd give you everything I've got for a little piece of mind",
  // "I'd give you everything I've got for a little piece of mind"


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


  timer = () => {
    this.setState({
      counter: (this.state.counter)+1
    })
    this.handleStartLyrics();
  }

  handleStartLyrics = () => {
    setTimeout(this.timer, this.state.timeDelay[variable]);
    variable++
  }

  render(){
    console.log(this.state)
  return (
    <div className="App">
      <header className="App-header">
        <h1>{this.state.lyrics[this.state.counter]}</h1>
        <button onClick={this.handleStartLyrics}>More Lyrics!</button>
        <Metronome />
      </header>
      <LyricContainer />
    </div>
  );
}
}

export default App;
