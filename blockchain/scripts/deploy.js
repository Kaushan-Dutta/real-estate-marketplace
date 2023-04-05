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
