import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
    // <input type="text"  =>  <TextField
    // <input type="submit"  =>  <RaisedButton 
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField hintText="hint" floatingLabelText="floatingLabel" name="in" value={this.state.in} onChange={this.handleChange}/>
          <RaisedButton type="submit" label="送信" primary={true}/>
        </form>
      </div>
    )
  }
}
export default FormCmp;