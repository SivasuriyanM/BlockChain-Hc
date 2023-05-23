//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract Record {

    struct Patient{
        uint id;
        string name;
        string gender;
        string bloodGroup;
        string phoneNumber;
        string houseAddress;
        string issue;
        string medicine;
        string dob;
        address add;
        uint date;
    }

    struct Diabetes{
        address add;
        string Pregnancies;
        string Glucose;
        string BloodPressure;
        string SkinThickness;
        string Insulin;
        string BMI;
        string DiabetesPedigreeFunction;
        uint date;
    }

    struct Heartdisease{
        address add;
        string cp;
        string trestbps;
        string chol;
        string fbs;
        string restecg;
        string thalach;
        string exang;
        string Thalassemia;
        uint date;
    }
    struct Doctor{
        uint id;
        string name;
        string gender;
        string specialist;
        string hospitalName;
        string phoneNumber;
        string qualification;
        address add;
        uint date;
    }

    mapping(address => Patient) patients;
    mapping(address => Doctor) doctors;
    mapping(address => Diabetes) diabetes;
    mapping(address => Heartdisease) heartdisease;
    mapping(address => mapping(address => bool)) canView;
    mapping(address => bool) isPatient;
    mapping(address => bool) isDoctor;

    uint patientCount;
    uint doctorCount;

    address[] PatientAccounts;
    address[] DoctorAccounts;

    string[] PatientName;
    string[] DoctorName;

    function setPatient( uint _id, string memory _name, string memory _gender, string memory _bloodGroup, string memory _phoneNumber, string memory _houseAddress, string memory _issue, string memory _medicine, string memory _dob) public{
        require(!isPatient[msg.sender]);
        patients[msg.sender] = Patient({id:_id, name:_name, gender:_gender, bloodGroup:_bloodGroup, phoneNumber:_phoneNumber, houseAddress:_houseAddress, issue:_issue, medicine:_medicine, dob:_dob, date:block.timestamp,add:msg.sender});
        PatientAccounts.push(msg.sender);
        PatientName.push(_name);
        patientCount++;
        isPatient[msg.sender] = true;
        canView[msg.sender][msg.sender] = true;
    }
    
    function editPatient( uint _id, string memory _name, string memory _gender, string memory _bloodGroup, string memory _phoneNumber, string memory _houseAddress, string memory _issue, string memory _medicine, string memory _dob) public{
        require(isPatient[msg.sender]);
        patients[msg.sender] = Patient({id:_id, name:_name, gender:_gender, bloodGroup:_bloodGroup, phoneNumber:_phoneNumber, houseAddress:_houseAddress, issue:_issue, medicine:_medicine, dob:_dob, date:block.timestamp,add:msg.sender});
    }
    function getPatient(address _address) public view returns(uint, string memory,string memory,string memory,string memory,string memory,string memory,string memory,string memory ){
        Patient storage patient = patients[_address];
        return (patient.id,patient.name,patient.gender,patient.bloodGroup,patient.phoneNumber,patient.houseAddress,patient.issue,patient.medicine,patient.dob);
    }
    
    function setDiabetes( string memory _Pregnancies, string memory _Glucose, string memory _BloodPressure, string memory _SkinThickness, string memory _Insulin, string memory _BMI, string memory _DiabetesPedigreeFunction) public{
        diabetes[msg.sender] = Diabetes({ Pregnancies:_Pregnancies, Glucose:_Glucose, BloodPressure:_BloodPressure, SkinThickness:_SkinThickness, Insulin:_Insulin, BMI:_BMI, DiabetesPedigreeFunction:_DiabetesPedigreeFunction, date:block.timestamp,add:msg.sender});
        canView[msg.sender][msg.sender] = true;
    }

    function editDiabetes(string memory _Pregnancies, string memory _Glucose, string memory _BloodPressure, string memory _SkinThickness, string memory _Insulin, string memory _BMI, string memory _DiabetesPedigreeFunction) public{        
       diabetes[msg.sender] = Diabetes({ Pregnancies:_Pregnancies, Glucose:_Glucose, BloodPressure:_BloodPressure, SkinThickness:_SkinThickness, Insulin:_Insulin, BMI:_BMI, DiabetesPedigreeFunction:_DiabetesPedigreeFunction, date:block.timestamp,add:msg.sender});
    }

    function getDiabetes(address _address) public view returns(string memory,string memory,string memory,string memory,string memory,string memory,string memory ){
        require(canView[_address][msg.sender]);
        Diabetes storage diabete = diabetes[_address];
        return (diabete.Pregnancies,diabete.Glucose,diabete.SkinThickness,diabete.BloodPressure,diabete.Insulin, diabete.BMI, diabete.DiabetesPedigreeFunction);
    }

     function setHeartDisease( string memory _cp, string memory _trestbps,string memory _thalach, string memory _chol, string memory _fbs, string memory _restecg, string memory _exang, string memory _Thalassemia) public{
        heartdisease[msg.sender] = Heartdisease({ cp:_cp, trestbps:_trestbps,thalach:_thalach, chol:_chol, fbs:_fbs, restecg:_restecg, exang:_exang, Thalassemia:_Thalassemia, date:block.timestamp,add:msg.sender});
        canView[msg.sender][msg.sender] = true;
    }
    function editHeartDisease( string memory _cp, string memory _trestbps,string memory _thalach, string memory _chol, string memory _fbs, string memory _restecg, string memory _exang, string memory _Thalassemia) public{
        heartdisease[msg.sender] = Heartdisease({ cp:_cp, trestbps:_trestbps,thalach:_thalach, chol:_chol, fbs:_fbs, restecg:_restecg, exang:_exang, Thalassemia:_Thalassemia, date:block.timestamp,add:msg.sender});
    }

    function getHeartdisease(address _address) public view returns(string memory,string memory,string memory,string memory,string memory,string memory,string memory ){
        require(canView[_address][msg.sender]);
        Heartdisease storage hd = heartdisease[_address];
        return (hd.cp, hd.trestbps, hd.chol, hd.fbs, hd.restecg, hd.exang, hd.Thalassemia);
    }

    function getPatientAcc() view public returns(address[] memory){
        return PatientAccounts;
    }

    function getPatientName() view public returns(string[] memory){
        return PatientName;
    }
    
    function giveAccess(address _address) public returns(bool succus){
        canView[msg.sender][_address] = true;
        return true;
    }

    function removeAccess(address _address) public returns(bool succus){
        canView[msg.sender][_address] = false;
        return true;
    }

    function getOthers(address _address) public view returns(uint, string memory,string memory,string memory,string memory,string memory,string memory,string memory,string memory){
        require(canView[_address][msg.sender]);
        Patient storage patient = patients[_address];
        return (patient.id,patient.name,patient.gender,patient.bloodGroup,patient.phoneNumber,patient.houseAddress,patient.issue,patient.medicine,patient.dob);
    }

    function setDoctor(address _address, uint _id, string memory _name, string memory _gender, string memory _specialist, string memory _hospitalName, string memory _phoneNumber, string memory _qualification) public{
        require(!isDoctor[msg.sender]);
        doctors[_address] = Doctor({id:_id, name:_name, gender:_gender, specialist:_specialist, hospitalName:_hospitalName, phoneNumber:_phoneNumber, qualification:_qualification, add:msg.sender, date:block.timestamp});
        DoctorAccounts.push(_address);
        DoctorName.push(_name);
        doctorCount++;
        isDoctor[msg.sender] = true;
    }

    function editDoctor(address _address, uint _id, string memory _name, string memory _gender, string memory _specialist, string memory _hospitalName, string memory _phoneNumber, string memory _qualification) public{
        require(isDoctor[msg.sender]);
        doctors[_address] = Doctor({id:_id, name:_name, gender:_gender, specialist:_specialist, hospitalName:_hospitalName, phoneNumber:_phoneNumber, qualification:_qualification, add:msg.sender, date:block.timestamp});
    }

    function getDoctor(address _address) public view returns(uint, string memory, string memory, string memory, string memory, string memory, string memory){
        Doctor storage doctor = doctors[_address];
        return (doctor.id,doctor.name,doctor.gender,doctor.specialist,doctor.phoneNumber,doctor.hospitalName, doctor.qualification);
    }
    
    function getDoctorAccounts() view public returns(address[] memory){
        return DoctorAccounts;
    }
    function getDoctorName() view public returns(string[] memory){
        return DoctorName;
    }
    
    function getPatientCount() view public returns(uint256){
        return patientCount;
    }

    function getDoctorCount() view public returns(uint256){
        return doctorCount;
    }

}