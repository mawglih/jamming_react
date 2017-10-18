import React, { Component } from 'react';
import './PlayList.css';
import  TrackList  from '../TrackList/TrackList';

class PlayList extends Component {
    render() {
      return (
        <div>
            <div className="PlayList">
                <input defaultValue="New Playlist"/>
                <TrackList></TrackList>
                <a className="Playlist-save">SAVE TO SPOTIFY</a>
            </div>
        </div>
      );
    }
  }
  
  export default PlayList;