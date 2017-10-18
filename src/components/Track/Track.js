import React, { Component } from 'react';
import './Track.css';


class Track extends Component {
    // constructor(props) {
    //     super(props);
    //     let isRemoval = false;
    //     this.renderAction = this.renderAction.bind(this);
    // }
    // renderAction() {
    //     let displaySign = '+';
    //     if(this.isRemoval){
    //         displaySign = '-';
    //     } else {
    //         displaySign = '+';
    //     }
    // }
    render() {
      return (
        <div>
            <div className="Track">
                <div className="Track-information">
                    <h3></h3>
                    <p> | </p>
                </div>
                <a className="Track-action"></a>
            </div>
        </div>
      );
    }
  }
  
  export default Track;