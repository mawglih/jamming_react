import React, { Component } from 'react';
import './App.css';
import  SearchBar  from '../SearchBar/SearchBar';
import  SearchResults  from '../SearchResults/SearchResults';
import  PlayList  from '../PlayList/PlayList';

class App extends Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlayListName = this.updatePlayListName.bind(this);
    this.state = {
      searchResults: [
        {
          name: 'Song1',
          artist: 'Artist1',
          album: 'Album1',
          id: new Date(Date.now()).getTime()
        },
        {
          name: 'Song2',
          artist: 'Artist2',
          album: 'Album2',
          id: new Date(Date.now()).getTime() + 1
        },
        {
          name: 'Song3',
          artist: 'Artist3',
          album: 'Album3',
          id: new Date(Date.now()).getTime() + 2
        }
      ],
      playListName: '',
      playListTracks: [
        {
          name: 'ListA',
          artist: 'ArtistA',
          album: 'AlbumA',
          id: new Date(Date.now()).getTime()
        },
        {
          name: 'ListB',
          artist: 'ArtistB',
          album: 'AlbumB',
          id: new Date(Date.now()).getTime() + 1
        },
        {
          name: 'ListC',
          artist: 'ArtistC',
          album: 'AlbumC',
          id: new Date(Date.now()).getTime() + 2
        }
      ] 
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
        playListTracks.split(playListTracks[i], 1);
        this.setState({
          playListTracks
        });
      }
    }
  }
  updatePlayListName(name) {
    console.log("update name: ", name);
    this.setState({
      playListName: name
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <PlayList playListName={this.state.playListName} playListTracks={this.state.playListTracks} onRemove={this.removeTrack} onNameChange={this.updatePlayListName} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
