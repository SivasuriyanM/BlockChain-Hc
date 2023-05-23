import React,{useContext} from 'react';
import { AppContext } from '../context';

const EditDetail = () => {
    const contData = useContext(AppContext);
    
    const display = async (event) => {
        event.preventDefault();
        const {contract} = contData.state;
        const name = document.querySelector('#name').value;
        
        const id = document.querySelector('#id').value;
        const gen = document.querySelector('#gender').value;
        const bg = document.querySelector('#bg').value;
        const ph = document.querySelector('#ph').value;
        const ha = document.querySelector('#ha').value;
        const Issue = document.querySelector('#is').value;
        const med = document.querySelector('#md').value;
        const dob = document.querySelector('#dob').value;
        console.log( id, name, gen, bg, ph, ha, Issue, med, dob)
        console.log("Check" +contract)
        const transaction = await contract.editPatient(id, name, gen, bg, ph, ha, Issue, med, dob);
        await transaction.wait();
        console.log("Patient Registed")
    }
  return (
    <>
    {console.log(contData)}
    <form onSubmit={display}>
        <label>Patient id</label>
        <input type='number' id='id' ></input>
        <label>Patient name</label>
        <input type='text' id='name' ></input>
        <label>Patient gender</label>
        <input type='text' id='gender' ></input>
        <label>Patient BloodGroup</label>
        <input type='text' id='bg' ></input>
        <label>Patient Phone No</label>
        <input type='text' id='ph' ></input>
        <label>Patient Home Address</label>
        <input type='text' id='ha' ></input>
        <label>Patient Issue</label>
        <input type='text' id='is' ></input>
        <label>Patient Medicine</label>
        <input type='text' id='md' ></input>
        <label>Patient DOB</label>
        <input type='text' id='dob' ></input>

        <button type='submit'>Display</button>
    </form>
    </>
  )
}
export default EditDetail