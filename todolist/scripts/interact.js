require("dotenv").config();
const { ethers } = require("hardhat");

async function main(){
    // proxy contract address
    const proxyAddress="0xBAceCa0E44D15CC275D4c30b6BbF258828F9D0D4";
    
    const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/"+process.env.ALCHEMY_API_KEY);
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    if(!signer) console.error("Signer not found");

    const contract = await ethers.getContractAt("TodolistV2", "0xBAceCa0E44D15CC275D4c30b6BbF258828F9D0D4", signer);

    if(!contract) console.error("contract not found");

    await contract.createTask("Task 2","0x8F6C81243B15eB4A91889Ced8A458D6f2fCD47c7");
    console.log("Task created successfully");

    await  contract.assignTask(2, "0x8F6C81243B15eB4A91889Ced8A458D6f2fCD47c7");
    console.log("Task assigned successfully");

    const count = await contract.getAssignedTaskCount("0x8F6C81243B15eB4A91889Ced8A458D6f2fCD47c7");
    console.log("Assigned task count:", count.toString());
   
}main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});