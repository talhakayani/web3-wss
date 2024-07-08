const Web3 = require('web3');

const getWssWeb3 = () => {
  const web3 = new Web3(
    // 'wss://mainnet.infura.io/ws/v3/029c33fad94b4d5b87381b39a5aafbf4' /** RPC URL HRE => WSS */
    'wss://polygon-amoy.infura.io/ws/v3/029c33fad94b4d5b87381b39a5aafbf4'
  );
  return web3;
};

const getWeb3 = () => {
  const web3 = new Web3(
    'https://polygon-amoy.infura.io/v3/029c33fad94b4d5b87381b39a5aafbf4'

    /** RPC URL HRE => HTTP */
  );

  web3.eth.accounts.wallet.add(
    '' // TODO: Add your wallet private key here
  );
  return web3;
};

module.exports = {
  getWeb3,
  getWssWeb3,
};
