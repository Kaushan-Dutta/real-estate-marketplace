require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    polygon:{
      url:'https://polygon-mumbai.g.alchemy.com/v2/yV3GGR8a9GvwMHPsZ9_UObDWFLNoS3ko',
      accounts:['0x5d6e319b2fece2fdb54141669875168ea622cda4cc665712b92e178b08b45d05']
    }
  }
  
};
