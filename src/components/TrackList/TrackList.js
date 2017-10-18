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
            {
                this.props.tracks.map((track) => {
                return <Track track={track} key={track.id}/>;
                })
            }
            </div>
        </div>
      );
    }
  }
  
  export default TrackList;