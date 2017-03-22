import React, { Component } from 'react';
import './css/ChatWindowInput.css'

class ChatWindowInput extends Component {
  render() {
    return (
      <div className="ChatWindowInput">
      <textarea name="textarea"
   rows="10" cols="50">Write something here</textarea>
      <a href="#">post</a>
      </div>
    );
  }
}

export default ChatWindowInput;
