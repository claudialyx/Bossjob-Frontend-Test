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
          <div style={{padding: '10px 20px'}}>
            <SearchContainer/>
            <JobListingContainer/>
            <p>
              Please show a list of jobs as per design
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
