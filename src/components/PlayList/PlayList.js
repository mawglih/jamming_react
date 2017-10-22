import React, { Component } from 'react';
import './PlayList.css';
import  TrackList  from '../TrackList/TrackList';

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
        isRemoval: true
    };
  }

  componentDidMount() {
    console.log('Playlist: ', this.props.playListTracks);
  }
  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }
  handleSave() {
      this.props.onSave(this.props.playListName, this.props.playListTracks);
  }
    render() {
      return (
            <div className="PlayList">
                <h2 className="Playlist-h2">{this.props.playListName}</h2>
                <input defaultValue="New Playlist" onChange={this.handleNameChange}/>
                  {<TrackList tracks={this.props.playListTracks} onRemove={this.props.onRemove} isRemoval={true}/>}
              
                <a className="Playlist-save" onClick={this.handleSave}>SAVE TO SPOTIFY</a>
            </div>
      );
    }
  }
  
  export default PlayList;