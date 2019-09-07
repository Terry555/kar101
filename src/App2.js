import React, { Component, useState } from 'react';
import LyricContainer from './LyricContainer';
import Metronome from './Metronome';
import './App.css';
import data from './data.json';

let variable = 0;

class App2 extends Component {

    state = {
      lyricsFromFetch: []
    }


  componentDidMount(){
    const ky = process.env.REACT_APP_MUSIX_API_KEY
    fetch(`https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&q_track=Barbed%20Wire&q_artist=Kendrick%20Lamar&apikey=${ky}`, {
      // mode: 'no-cors',
      // headers: {
      // 'Access-Control-Allow-Origin': '*',
      //   'Content-Type': 'text/plain'
      // 'Accept': 'application/json',
      // 'Content-Type': 'application/json'
      // }
    })
    .then(response => response.slice(1).slice(0,-1).json())
      // response.json())
    .then(data => {
      console.log(data)
      // this.setState({
      //   lyricsFromFetch: data
      // })
    })
  }


  render(){
  return (
    <div className="App2">
      <h2>Testing from App2</h2>
    </div>
  );
}
}

export default App2;
