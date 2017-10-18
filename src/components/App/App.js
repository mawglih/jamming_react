import React, { Component } from 'react';
import './App.css';
import  SearchBar  from '../SearchBar/SearchBar';
import  SearchResults  from '../SearchResults/SearchResults';
import  PlayList  from '../PlayList/PlayList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {track1:{
          name: 'Song1',
          artist: 'Artist1',
          album: 'Album1',
          id: new Date(Date.now()).getTime()
          } 
        },
        {track2:{
          name: 'Song2',
          artist: 'Artist2',
          album: 'Album2',
          id: new Date(Date.now()).getTime() + 1
          } 
        },
        {track3:{
          name: 'Song3',
          artist: 'Artist3',
          album: 'Album3',
          id: new Date(Date.now()).getTime() + 2
          } 
        }
      ]   
    };
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <PlayList/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
