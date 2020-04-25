import React from 'react';
import logo from './logo.svg';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';


// import Header from '../Header';
import Layout from '../Layout';
import Profile from '../Profile';
import Login from '../Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
