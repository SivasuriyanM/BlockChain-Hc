import React,{useContext} from 'react'
import { AppContext } from '../context';

const Doclog = () => {
    const contData = useContext(AppContext);
    const {contract} = contData.state;
  const display = async (event) => {
    event.preventDefault();
    const {contract} = contData.state;
    const name = document.querySelector('#name').value;
    
    const add = document.querySelector('#add').value;
    console.log("Check" +contract)
    const da = await contract.getDoctorAccounts();
    console.log(contData.account[0]);
    console.log(da[0]);
    const metadd = contData.account[0]
    if(add === metadd){
        if(contData.account[0] === add  ||contData.account[0] === add){
            window.location.href = "/doctor";
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

export default Doclog;