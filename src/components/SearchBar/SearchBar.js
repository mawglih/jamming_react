import React, { Component } from 'react';
import './SearchBar.css';

export class SearchBar extends Component {
    render() {
      return (
        <div>
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" />
                <a>SEARCH</a>
            </div>
        </div>
      );
    }
  }
  
  export default SearchBar;