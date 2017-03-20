import React, { Component } from 'react';
import ChatWindowHeader from './ChatWindowHeader'
import ChatWindowBody from './ChatWindowBody'
import ChatWindowInput from './ChatWindowInput'
import './ChatWindow.css'

class ChatWindow extends Component{
    render(){
        return (
            <div className="ChatWindow">
            <ChatWindowHeader />
            <ChatWindowBody />
            <ChatWindowInput />
            </div>
        )
    }
}

export default ChatWindow;