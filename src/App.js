import React, { Component } from 'react';
import NumberCmp from './NumberCmp';
import FormCmp from './FormCmp';

class App extends Component {

  render() {
    return (
        <div>
          <NumberCmp number="1"/>
          <FormCmp />
        </div>
    )
  }
}

export default App;