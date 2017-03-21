import React, { Component } from 'react';
import './App.css';
import ChatList from './ChatList'
import ChatWindow from './ChatWindow'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatList />
        <ChatWindow />
      </div>
    );
  }
}

export default App;
