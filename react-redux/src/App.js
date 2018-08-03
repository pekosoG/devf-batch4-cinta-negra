import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PostForm from './components/PostForm';
import Post from './components/Post';

import { Provider } from 'react-redux';
import Store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <PostForm />
          <hr/>
          <Post />
        </div>
      </Provider>
    );
  }
}

export default App;
