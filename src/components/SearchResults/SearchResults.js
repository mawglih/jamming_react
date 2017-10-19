import React, { Component } from 'react';
import './SearchResults.css';
import  TrackList  from '../TrackList/TrackList';

class SearchResults extends Component {
    componentDidMount() {
        console.log("searchresults", this.props);
    }
    render() {
      return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd}/>
            </div>
      );
    }
  }
  
  export default SearchResults;