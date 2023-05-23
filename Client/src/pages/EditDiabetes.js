import React,{useContext} from 'react';
import { AppContext } from '../context';

const EditDiabetes = () => {
    const contData = useContext(AppContext);
    
    const display = async (event) => {
        event.preventDefault();
        const {contract} = contData.state;
        const gl = document.querySelector('#gl').value;
        const bp = document.querySelector('#bp').value;
        const st = document.querySelector('#st').value;
        const ins = document.querySelector('#in').value;
        const bmi = document.querySelector('#bmi').value;
        const pre = document.querySelector('#pre').value;
        const dpf = document.querySelector('#dpf').value;
        console.log( gl, bp, st, ins, bmi, pre, dpf)
        const transaction = await contract.editDiabetes(pre, gl, bp, st, ins, bmi, dpf);
        await transaction.wait();
        console.log("Recorded")
    }
  return (
    <>
    {console.log(contData)}
    <form onSubmit={display}>
        <label>Glucose Level</label>
        <input type='text' id='gl' ></input>
        <label>Blood Pressure</label>
        <input type='text' id='bp' ></input>
        <label>Skin Thickness</label>
        <input type='text' id='st' ></input>
        <label>Insulin</label>
        <input type='text' id='in' ></input>
        <label>Body Mass Index</label>
        <input type='text' id='bmi' ></input>
        <label>Pregnancies</label>
        <input type='text' id='pre' ></input>
        <label>Diabetes Pedigree Function</label>
        <input type='text' id='dpf' ></input>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}
export default EditDiabetes