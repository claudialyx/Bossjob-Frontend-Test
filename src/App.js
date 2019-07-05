import React, { Component } from 'react';
import './App.css';

import Header from './shared/components/Header';
import SearchContainer from './components/SearchContainer';
import JobListingContainer from './components/JobListingContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          <SearchContainer />
          <div style={{ padding: '10px 20px' }}>
            <JobListingContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
