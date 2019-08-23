import React, { Component } from 'react';
import LyricContainer from './LyricContainer';
import Metronome from './Metronome';
import './App.css';
import data from './data.json';

let variable = 0;

class App extends Component {

    state = {
      name: "",
      counter: 0,
      lyrics: [],
      timeDelay: []
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

  handleSongChange = (event) => {
    this.setState({
      name: data[event.target.value].name,
      counter: data[event.target.value].counter,
      lyrics: data[event.target.value].lyrics,
      timeDelay: data[event.target.value].timeDelay,
    })
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: `${this.state.counter%2===0 ? 'red' : 'yellow' }`}}>{this.state.lyrics[this.state.counter]}</h1>
        <button onClick={this.handleStartLyrics}>Play The Song!</button>
          <form>
              <select defaultValue={data[1].name} onChange={this.handleSongChange}> {data.map((song, idx) => {
                  return <option value={song.id} key={idx}>{song.name}</option>
                })}
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
