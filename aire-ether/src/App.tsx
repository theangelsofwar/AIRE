import React, { Component } from 'react';
import Aire from './abis/Aire.json';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AireEther from './components/AireEther';
import { ApolloProvider } from 'react-apollo';
import {
  ApolloLink,
  ApolloClient,
  InMemoryCache,
  HttpLink
} from 'apollo-client-preset';

import './App.css';
import Web3 from 'web3';


// import Header from '../Header';
// import Layout from '../Layout';
// import Profile from '../Profile';
// import Login from '../Login';

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable()
    } 
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
      window.alert('Non Eth Browser, need metamask');
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] });

    const networkId = await web3.eth.net.getId()

    const networkData = Aire.networks[networkId]

    if(networkData) {
      const aireNetwork = web3.eth.Contract(Aire.abi, networkData.address)
      this.setState({ aireNetwork });

      const aireCount = await aireNetwork.methods.aireCount().call()
      this.setState({ aireCount })


      for(let i = 1; i <= aireCount; i++){
        const aire = await aireNetwork.methods.airePosts(i).call()
        this.setState({
          airePosts: [...this.state.airePosts, aire]
        })
      }
      this.setState({ loading: false })
    } else {
      window.alert('AireNetwork contract not eployed to detected network')
    }
  }


  createAire(content) {
    this.setState({ loading: true })
    this.state.aireNetwork.methods.createAire(content).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      aireNetwork: null,
      aireCount: 0, 
      airePosts: [],
      loading: true
    }

    this.createAire = this.createAire.bind(this);
  }



  render() {
    return (
      <div>

      </div>
    )
  }
  
}

export default App;
