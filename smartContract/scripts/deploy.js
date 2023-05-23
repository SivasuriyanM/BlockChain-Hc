const hre = require("hardhat");

async function getbal(address){
  const bal = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(bal);
}
async function consolebal(addresses){
  let counter = 0;
  for (const address of addresses){
    console.log(`Address ${counter} balence`, await getbal(address))
  }
}
async function consloeDoctordata(doctordata){
  for(const Doctor of doctordata){
      const timestamp = Doctor.timestamp;
      const name = Doctor.doctorName;
      const address = Doctor.doctorAddress;
      const docDob = Doctor.docDob;
      const specialist = Doctor.specialist;
      const hospitalName = Doctor.hospitalName;

    console.log(`At ${timestamp},name ${name}, address ${address},Dob ${docDob},specialist ${specialist},hospitalName ${hospitalName}`);
  }
}
async function consloePatientdata(patientdata){
  for(const Patient of patientdata){
      const timestamp = Patient.timestamp;
      const name = Patient.patientName;
      const address = Patient.patientAddress;
      const patDob = Patient.patDob;
      const medicalHistroy = Patient.medicalHistroy;
      const gaurdian = Patient.gaurdian;

    console.log(`At ${timestamp},name ${name}, address ${address},Dob ${patDob},medicalHistroy ${medicalHistroy},gaurdian ${gaurdian}`);
    
  }
}

async function main() {
  const [admin,pd1,pd2,pd3,dd1,dd2,dd3] = await hre.ethers.getSigners();
  const Health = await hre.ethers.getContractFactory("Hcsc");
  const contract = await Health.deploy();

  await contract.deployed();
  console.log("Address of the contract", contract.address);

  const addresses = [admin.address,pd1.address, pd2.address,pd3.address];
  console.log("Before Insert");
  await consolebal(addresses);
  
  const amount =  {value:hre.ethers.utils.parseEther("1")}
  await contract.connect(pd1).insertPatientData("pd1","00/00/000","Diabeties","doc1",amount);
  await contract.connect(pd2).insertPatientData("pd2","00/00/000","Diabeties","doc2",amount);
  await contract.connect(pd3).insertPatientData("pd3","00/00/000","Diabeties","doc3",amount);
  await contract.connect(dd1).insertPatientData("d1","00/00/000","surgen","h1",amount);
  await contract.connect(dd1).insertPatientData("d2","00/00/000","dent","h2",amount);
  await contract.connect(dd3).insertPatientData("d3","00/00/000","nueral ","h3",amount);

  console.log("After Insert");
  await consolebal(addresses);

  const Patient = await contract.fetchPatientData();
  consloePatientdata(Patient);

  const Doctor = await contract.fetchDoctorData();
  consloeDoctordata(Doctor);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});