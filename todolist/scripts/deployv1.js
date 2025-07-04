const{ethers, upgrades} = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
     if (!deployer) throw new Error("Signer not found");
    console.log("Deploying contracts with the account:", deployer.address);
    const Todolistv1 = await ethers.getContractFactory("Todolist");
    const proxy=await upgrades.deployProxy(Todolistv1,[deployer.address],{
                initializer:"initialize",

    });
    await proxy.waitForDeployment();

        console.log("todolistv1 deployed to:",await proxy.getAddress());
        console.log("deployed-by:",deployer.address)
    }
    main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
