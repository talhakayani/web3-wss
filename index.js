const { getWeb3, getWssWeb3 } = require('./web3');
const { safeMintNft, getTokenUri } = require('./web3/contractFunctions');

// console.log(getWeb3(), getWssWeb3());
const web3Http = getWeb3();
const web3Wss = getWssWeb3();

const getChainId = async () => {
  const chainIdWss = await web3Wss.eth.getChainId();
  const chainIdHttp = await web3Http.eth.getChainId();
  console.log('getChainId ~ chainIdHttp:', chainIdHttp, chainIdWss);
};

const eventListener = async () => {
  web3Wss.eth
    .subscribe(
      'logs',
      {
        address: '0xC5C3b7Ee40D0DBD5a4Fc7F809E1B71894fCaDd34',
      },
      (err, event) => {
        if (err) {
          console.error('web3.eth.subscribe ~ err:', err);
          return err;
        }

        console.log('Event', event);
      }
    )
    .on('connected', () => {
      console.log(`arbitrum is Connected.`);
    });
};

(async () => {
  await getChainId();
  // eventListener();
  //   await safeMintNft('0xAAD7D223E95acE70f58cCF7Bf387Ddd651C33403');
  const tokenUris = await Promise.all([getTokenUri(0), getTokenUri(1)]);
  console.log('tokenUris:', tokenUris);
})();
