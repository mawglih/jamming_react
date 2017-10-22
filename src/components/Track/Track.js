import React, { Component } from 'react';
import './Track.css';


class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySign: '+'
        }

        this.addTrack = this.addTrack.bind(this);
        this.renderAction = this.renderAction.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
    renderAction() {
        
    }
    addTrack() {
        this.props.onAdd(this.props.track);
    }
    removeTrack() {
        this.props.onRemove(this.props.track);
    }
    componentDidMount() {
        console.log("track is: ", this.props.track);
        console.log("onAdd is: ", this.props.onAdd);
        console.log('Trak isremoval: ', this.props.isRemoval);
        if(this.props.isRemoval){
            this.setState({
                displaySign: '-'
            });
        } else {
            this.setState({
                displaySign: '+'
            });
        }
    }
    render() {
      return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                <a onClick={this.props.isRemoval ? this.removeTrack : this.addTrack} className="Track-action">{this.state.displaySign}</a>
            </div>
      );
    }
  }
  
  export default Track;