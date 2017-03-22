import React, { Component } from 'react';
import './css/ChatWindowInput.css'

class ChatWindowInput extends Component {
  constructor(props){
    super(props);
    this.state = {value: 'Type your message'}
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleClick(event) {
    alert('An essay was submitted: ' + this.state.value);
  }
  render() {
    return (
      <div className="ChatWindowInput">
        <textarea value={this.state.value} onChange={this.handleChange}></textarea>
        <a onClick={this.handleClick}>Send</a>
      </div>
    );
  }
}

export default ChatWindowInput;
