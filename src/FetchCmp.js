import React, { Component } from 'react';

class FetchCmp extends Component {

  constructor(props) {
    super(props);

    this.state = {key : ''};
  }

  componentDidMount() {
    fetch('http://localhost:3010/')
    .then(res => res.json())
    .then(res => this.setState(res));
  }

  render() {
    return (
      <div>Fetch {JSON.stringify(this.state)}</div>
    )
  }
}

export default FetchCmp;