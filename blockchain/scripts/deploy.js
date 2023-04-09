// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const hre = require("hardhat");

const toWei=(value)=>{
  return(ethers.utils.parseUnits(value.toString(),"ether"))
}

async function main() {

   const contract=await ethers.getContractFactory("Zwillo");
   const deploy=await contract.deploy(toWei(0.000002));
   await deploy.deployed();
   console.log("Contract address",deploy.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0xECb4a42e08b606Db4176532f0B941c7616401eE5
//0x36C4Af6302174e455B4509cdB7627f18D0c92847
//0x42fc1ECd4739f26c3bC89a671Ca39e6AF7f6cB61
//0x0337CEcfFd3860f9397ec4e3518421D3bf2a39fe--current
//0xb1bADF9BfB23537bD4BffE534f455456121BF14b
//0x1c00AAcDac306CD2D5ff5bb9B7fD07C0169a4A6f
//0x99996BBf6f4Df79BB43d63ACe7D79671d4d97F7B
//0x461E1c13011fC1305C3C11a6FbB4B69638318610
//0x3D734b88fe708A67521FDDbED8a4e265e0859Fd3
//0xF3211840648ffEbF471cdfC0Ff6Eb444db93Acb8