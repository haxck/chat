import React, { Component } from 'react';
import './css/ChatWindowBody.css'
class ChatWindowBody extends Component {
  constructor(props){
    super(props)
    this.state = {
      names:[{name:'xxom',msg:'hello'},{name:'oyyu',msg:'hi'}]
    };
  }
  render() {
    var NewChat = this.state.names.map((data) =>{
      return (
        <div>
        <span>{data.name}:</span>
        <span>{data.msg}</span>
        </div>
      )
    })

    return (
      <div className="ChatWindowBody">
      {NewChat}
      </div>
    );
  }
}

export default ChatWindowBody;
