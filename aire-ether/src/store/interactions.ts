import Web3 from 'web3';

import {
  web3Loaded,
  web3AccountLoaded,
} from './actions';

export const loadWeb3 = async (dispatch) => {
  let web3;
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  }
  else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
  }
  
  dispatch(web3Loaded(web3));
  return web3;
}