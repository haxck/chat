import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatList from './ChatList'
import ChatWindow from './ChatWindow'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-logo">
          <img src="{{logo}}" alt="..."/>
        </div>
        <ChatList />
        <ChatWindow />
      </div>
    );
  }
}

export default App;
