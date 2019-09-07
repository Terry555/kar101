import React, { Component, useState } from 'react';
import LyricContainer from './LyricContainer';
import Metronome from './Metronome';
import './App.css';
import data from './data.json';

let variable = 0;

class App2 extends Component {

    state = {

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


  render(){
  return (
    <div className="App2">
      <h2>Testing from App2</h2>
    </div>
  );
}
}

export default App2;
