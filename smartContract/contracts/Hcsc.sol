// SPDX-License-Identifier:MIT

pragma solidity >=0.5.0 <0.9.0;

contract Hcsc {
    struct Patient{
        string patientName;
        string patDob;
        string medicalHistroy;
        string gaurdian;
        uint timestamp;
        address patientAddress;
    }

    Patient[] patientdata;

    address payable admin;

    constructor(){
        admin = payable(msg.sender);
    }

    function insertPatientData(string memory patientName, string memory patDob,string memory medicalHistroy,string memory gaurdian) public payable{
        require(msg.value > 0, "Please pay greater than 0 ether");
        admin.transfer(msg.value);
        patientdata.push(Patient(patientName,patDob,medicalHistroy,gaurdian,block.timestamp,msg.sender));
    }

    function fetchPatientData() public view returns(Patient[] memory){
        return patientdata;
    }
    struct Doctor{
        string doctorName;
        string docDob;
        string specialist;
        string hospitalName;
        uint timestamp;
        address doctorAddress;
    }

    Doctor[] doctordata;

    function insertDoctorData(string memory doctorName, string memory docDob,string memory specialist,string memory hospitalName) public payable{
        require(msg.value > 0, "Please pay greater than 0 ether");
        admin.transfer(msg.value);
        doctordata.push(Doctor(doctorName,docDob,specialist,hospitalName,block.timestamp,msg.sender));
    }

    function fetchDoctorData() public view returns(Doctor[] memory){
        return doctordata;
    }

}