import React, { Component } from 'react'

class FormCmp extends Component {

  constructor(props) {
    super(props);

    this.state = {in : ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({in : event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    alert(this.state.in);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="in" value={this.state.in} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
export default FormCmp;