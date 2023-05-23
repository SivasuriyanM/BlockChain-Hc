
import React,{useContext} from 'react'
import { AppContext } from '../context';

const PatLog = () => {
    const contData = useContext(AppContext);
    const {contract} = contData.state;
  const display = async (event) => {
    event.preventDefault();
    const {contract} = contData.state;
    const name = document.querySelector('#name').value;
    
    const add = document.querySelector('#add').value;
    console.log("Check" +contract)
    const pa = await contract.getPatientAcc();
    const pn = await contract.getPatientName();
    console.log(pa)
    console.log(contData.account[0])
    if(add === contData.account[0]){
        if((contData.account[0] === add && pn[0] === name) || (pa[1] === add && pn[1] === name)){
            window.location.href = "/patient";
        }else{
            window.location.href = "/";
        }
    }else{
        alert("Enter valid address")
    }
    console.log("Login succesful")
}
  return (
    <>
    <form onSubmit={display}>
        <label>Name</label>
        <input type='textx' id='name' ></input>
        <label>Address</label>
        <input type='text' id='add' ></input>
        <button type='submit'>Login</button>
    </form>
    </>
  )
}

export default PatLog