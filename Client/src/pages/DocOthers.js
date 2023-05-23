import React,{useContext} from 'react'
import { useState, useEffect } from 'react'
import { AppContext } from '../context';

const DocOthers = () => {
    const contData = useContext(AppContext);
    const [dets, setDet] = useState([]);
    const [da, setDa] = useState([]);
    const [dn, setDn] = useState([]);
    const {contract} = contData.state;
    useEffect(() => {
        const detail = async () => {
            const da = await contract.getDoctorAccounts();
            setDa(da);
            const dn = await contract.getDoctorAccounts();
            setDn(dn)
        };
        contract && detail();
    
      }, [contract]);
      const display = async (event) => {
        event.preventDefault();
        const add = document.querySelector('#address').value;
        console.log("Recorded"); 
        const dets = await contract.getDoctor(add);
        setDet(dets);   
    }
  return (
    <>
    <form onSubmit={display}>
    <label>Doctor Address</label>
    <input type='text' id='address' ></input>
    <button type='submit'>Submit</button>
    </form>
<h6>{dn[0]} - {da[0]}</h6>
        <p>Doctor Details</p> 
                <table >
                    <tbody>
                        <tr> 
                            <td>{dets[1]}</td>
                        </tr>
                        <tr> 
                            <td>{dets[2]}</td>
                        </tr>
                        <tr> 
                            <td>{dets[3]}</td>
                        </tr>
                        <tr> 
                            <td>{dets[4]}</td>
                        </tr>
                        <tr> 
                            <td>{dets[5]}</td>
                        </tr>
                        <tr> 
                            <td>{dets[6]}</td>
                        </tr>
                        <tr> 
                            <td>{dets[7]}</td>
                        </tr>
                        <tr> 
                            <td>{dets[8]}</td>
                        </tr>
                    </tbody>
                </table>
    </>
  )
}

export default DocOthers