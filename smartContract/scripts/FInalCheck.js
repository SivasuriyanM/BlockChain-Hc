const hre = require("hardhat");

async function main(){
    const [admin, patient, doctor] = await hre.ethers.getSigners();
    const Record = await hre.ethers.getContractFactory("Record");
    const contract = await Record.deploy();

    await contract.deployed();
    console.log("Address of the Contract", contract.address);
}
main().catch((error) =>{
    console.error(error);
    process.exitCode = 1;
});