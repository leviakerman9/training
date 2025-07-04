require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */

const alchemyApiKey= process.env.ALCHEMY_API_KEY;
const privateKey = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.28",

  networks: {
    
    sepolia: {
     url: `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`,
      accounts: privateKey ? [privateKey] : [],
    }
  },
};
