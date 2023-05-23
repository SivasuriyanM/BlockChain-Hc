const hre = require("hardhat");

async function getbal(address){
    const bal = await hre.ethers.provider.getBalance(address);
    return hre.ethers.utils.formatEther(bal);
  }

async function consolebal(addresses){
    let counter = 0;
    for (const address of addresses){
      console.log(`Address ${counter} balence address ${address}`, await getbal(address))
      counter++;
    }
}

async function consolePatDet(PatientAccounts){
        const name = PatientAccounts[2];
        console.log(`At ${PatientAccounts}  name ${name}`);
}

async function consoleDoctorDet(Doctors){
    for (const Doctor of Doctors){
        console.log(`${Doctor} `);
    }
}

async function main(){
    const [admin, patient, doctor] = await hre.ethers.getSigners();
    const Record = await hre.ethers.getContractFactory("Record");
    const contract = await Record.deploy();

    await contract.deployed();
    console.log("Address of the Contract", contract.address);

    const addresses = [admin.address, patient.address, doctor.address];
    console.log("Before Insert");
    await consolebal(addresses);
    const adp = patient.address;
    const addo = doctor.address;
    
    const amount =  {value:hre.ethers.utils.parseEther("1")}
    await contract.connect(patient).setPatient(adp,1,"patient_One","Male","B+ve","869576","tn","dep","p","7");
    await contract.connect(doctor).setDoctor(addo,1,"doctor_one","female","c","8765","Sk","A");
    
    console.log("After Insert");
    await consolebal(addresses);

    const Patient = await contract.getPatient(adp);
    consolePatDet(Patient);

    const Doctor = await contract.getDoctor("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC");
    consoleDoctorDet(Doctor);
}

main().catch((error) =>{
    console.error(error);
    process.exitCode = 1;
});