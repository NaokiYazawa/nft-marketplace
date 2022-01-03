require("@nomiclabs/hardhat-waffle");

const projectId = "7f1e2b693cd64981bb896013d92b4d63"

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: []
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: []
    },
  },
  solidity: "0.8.4",
};
