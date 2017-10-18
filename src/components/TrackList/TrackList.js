import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {

    componentDidMount() {
        console.log("tracklist", this.props.tracks);
        
    }
    render() {
      return (
        <div>
            <div className="TrackList">
            
            </div>
        </div>
      );
    }
  }
  
  export default TrackList;