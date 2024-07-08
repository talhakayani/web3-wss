const { initContract } = require('./contractInstance');
const { getWeb3 } = require('./web3Instances');

// https://beta-api-metadata.veefriends.com/v1/collections/0x7a3159290ba6672c3cc5741f6bcdf5261266cd15/tokens/15236
const safeMintNft = async (
  walletAddress,
  tokenUri = 'https://cryptoverse.oscar-iot.com/wp-json/wpsc/v1/nft1155/1556/0000000000000000000000000000000000000000000000000000000000000002'
  //   tokenUri = 'https://beta-api-metadata.veefriends.com/v1/collections/0x7a3159290ba6672c3cc5741f6bcdf5261266cd15/tokens/15236'
) => {
  //   const web3 = getWeb3();
  const contract = initContract();
  console.log('contract:', contract);

  const estimatedGas = await contract.methods
    .safeMint(walletAddress, tokenUri)
    .estimateGas({
      from: '0xaad7d223e95ace70f58ccf7bf387ddd651c33403',
    });
  console.log('estimatedGas:', estimatedGas);

  const mintNFTResponse = await contract.methods
    .safeMint(walletAddress, tokenUri)
    .send({
      from: '0xAAD7D223E95acE70f58cCF7Bf387Ddd651C33403',
      gas: estimatedGas,
    });
  console.log('mintNFTResponse:', mintNFTResponse);
};

const getTokenUri = async (tokenId) => {
  const contract = initContract();
  const tokenUriResponse = await contract.methods.tokenURI(tokenId).call();
  return tokenUriResponse;
};
module.exports = {
  safeMintNft,
  getTokenUri,
};
