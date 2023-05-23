import React,{useContext} from 'react';
import { AppContext } from '../context';

const EditDoc = () => {
    const contData = useContext(AppContext);
    
    const display = async (event) => {
        event.preventDefault();
        const {contract} = contData.state;
        const name = document.querySelector('#name').value;
        
        const id = document.querySelector('#id').value;
        const gen = document.querySelector('#gender').value;
        const hn = document.querySelector('#hn').value;
        const ph = document.querySelector('#ph').value;
        const qa = document.querySelector('#qa').value;
        const sp = document.querySelector('#sp').value;
        
        console.log( id, name, gen, sp, hn, ph, qa)
        console.log("Check" +contract)
        const transaction = await contract.editDoctor(contData.account[0],id, name, gen, sp, hn, ph, qa);
        await transaction.wait();
        console.log("Doctor Registed")
    }
  return (
    <>
    {console.log(contData)}
    <form onSubmit={display}>
        <label>Id</label>
        <input type='number' id='id' ></input>
        <label>Name</label>
        <input type='text' id='name' ></input>
        <label>Gender</label>
        <input type='text' id='gender' ></input>
        <label>Specialist</label>
        <input type='text' id='sp' ></input>
        <label>Hospital Name</label>
        <input type='text' id='hn' ></input>
        <label>Phone Number</label>
        <input type='text' id='ph' ></input>
        <label>Qualification</label>
        <input type='text' id='qa' ></input>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default EditDoc