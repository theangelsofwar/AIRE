import React, { useState, useEffect, useReducer, useContext } from 'react';
import logo from './logo.svg';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import {
  ApolloLink,
  ApolloClient,
  InMemoryCache,
  HttpLink
} from 'apollo-client-preset';

const client = new ApolloClient({

})

import './App.css';


// import Header from '../Header';
import Layout from '../Layout';
import Profile from '../Profile';
import Login from '../Login';

function App() {

  const initialState =useContext(Context);
  const [state, setState] = useState(initialState);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    
  });


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
