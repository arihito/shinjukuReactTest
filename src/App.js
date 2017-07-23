import React, { Component } from 'react';
import NumberCmp from './NumberCmp';
import FormCmp from './FormCmp';
import FetchCmp from './FetchCmp';

class App extends Component {

  render() {
    return (
        <div>
          <NumberCmp number="1"/>
          <FormCmp />
          <FetchCmp />
        </div>
    )
  }
}

export default App;