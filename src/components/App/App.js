import React, { Component } from 'react';
import './App.css';
import  SearchBar  from '../SearchBar/SearchBar';
import  SearchResults  from '../SearchResults/SearchResults';
import  PlayList  from '../PlayList/PlayList';
import  Spotify  from '../../utility/Spotify';

class App extends Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlayListName = this.updatePlayListName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.searchSpotify = this.searchSpotify.bind(this);
    this.state = {
      searchResults: [],
      playListName: '',
      playListTracks: []
    };
  }
  addTrack(track) {
    let playListTracks = this.state.playListTracks;
    if(!playListTracks.includes(track)) {
      playListTracks.push(track);
        this.setState({
          playListTracks
        });
    }
  }
  removeTrack(track) {
    let playListTracks = this.state.playListTracks;
    for(var i = 0; i < playListTracks.length; i++) {
      if(playListTracks[i].id === track.id) {
        playListTracks.splice(playListTracks[i], 1);
        this.setState({
          playListTracks
        });
        break;
      }
    }
  }
  updatePlayListName(name) {
    console.log("update name: ", name);
    this.setState({
      playListName: name
    });
  }
  savePlaylist(name, tracks) {
    let uris= [];
    console.log("my list to save is: ", name);
    tracks = this.state.playListTracks.map(track => {
      console.log("my track uri is: ", track.uri);
      return uris.push({uri: track.uri});
    });
    Spotify.savePlayList(name, uris);
  }
  searchSpotify(term){
    Spotify.search(term)
    .then(track => {
      this.setState({searchResults: track});
    });
  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.searchSpotify}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <PlayList playListName={this.state.playListName} playListTracks={this.state.playListTracks} onRemove={this.removeTrack} onNameChange={this.updatePlayListName} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
