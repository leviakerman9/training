const { ethers, upgrades } = require("hardhat");

async function main() {
    const proxyAddress = "0xBAceCa0E44D15CC275D4c30b6BbF258828F9D0D4"; // proxy address
    console.log("Upgrading contract at address:", proxyAddress);
  const todolistv2 = await ethers.getContractFactory("TodolistV2");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, todolistv2);
  console.log("Todolistv1 upgraded to v2 at:", await upgraded.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});