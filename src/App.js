import React, { Component } from 'react';
import LyricContainer from './LyricContainer';
import Metronome from './Metronome';
import './App.css';
import data from './data.json';

let variable = 0;

class App extends Component {

    state = {
      name: 'Blink 182 - The Rock Show',
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
        "*Instrumental*",
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
          12000, /* instrumental */
          2800, 2100, 2400, 3100, /* first verse */
          10000, /* instrumental */
          2200, 2500, 2400, 2000, /* second verse */
          2800, 2500, 2500, 2500, 2500, 3000, /* chorus */
          9500, /* instrumental */
          2500, 2500, 2600, 2300, /* third verse */
          2500, 2500, 2500, 2500, 2500, 2800, /* chorus */
          3700, 2500, 3600, 3700, 2700, 3000, /* bridge */
          2500, 2500, 2500, 2500, 2500, 5900, /* chorus */
          4900, 2900, 33000 /* outro */
        ]
  }


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
    console.log(jsonResponse)
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: `${this.state.counter%2==0 ? 'red' : 'yellow' }`}}>{this.state.lyrics[this.state.counter]}</h1>
        <button onClick={this.handleStartLyrics}>More Lyrics!</button>
          <form>
              <select>
                <option>{this.state.name}</option>
              </select>
          </form>
        <Metronome />
      </header>
      <LyricContainer />
    </div>
  );
}
}

export default App;
