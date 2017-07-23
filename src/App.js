import React, { Component } from 'react';

import { Route, Link, withRouter } from 'react-router-dom'

import NumberCmp from './NumberCmp';
import FormCmp from './FormCmp';
import FetchCmp from './FetchCmp';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push('/fetch')
  }

  render() {
    return (
      <div>
        <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/number">Number</Link></li>
          <li><Link to="/form">Form</Link></li>
          <li><button onClick={this.handleClick}>Fetch</button></li>
        </ol>
        <Route path="/number" component={NumberCmp} number={2} />
        <Route path="/form" component={FormCmp} />
        <Route path="/fetch" component={FetchCmp} />
      </div>
    )
  }
}

export default withRouter(App);