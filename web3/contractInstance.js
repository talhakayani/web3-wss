const { getWeb3 } = require('./web3Instances');
const TrainingContractABI = require('./ABI/trainingContractABI.json');
const CONTRACT_ADDRESS = '0xC5C3b7Ee40D0DBD5a4Fc7F809E1B71894fCaDd34';

const initContract = () => {
  const web3 = getWeb3();
  const contract = new web3.eth.Contract(TrainingContractABI, CONTRACT_ADDRESS);
  return contract;
};

module.exports = {
  initContract,
};
