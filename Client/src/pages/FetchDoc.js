import { useState, useEffect } from 'react'
import React,{useContext} from 'react'
import { AppContext } from '../context';

const FetchDoc = () => {
    const contData = useContext(AppContext);
    const [dets, setDet] = useState([]);
    const {contract} = contData.state;
  useEffect(() => {
    const detail = async () => {
        const dets = await contract.getDoctor(contData.account[0]);
        setDet(dets);
    };
    contract && detail();

  });
    // const giveAccess = async(event) => {
    //     event.preventDefault();
    //     const add = document.querySelector('#add').value;
    //     const gA = await contract.giveAccess(add);
    //     await gA.wait();
    // }
    // const removeAccess = async(event) => {
    //     event.preventDefault();
    //     const add = document.querySelector('#add').value;
    //     const gA = await contract.removeAccess(add);
    //     await gA.wait();
    // }
    console.log(dets);
    return (
    <><p>Doctor Details</p> 
    <button><a href='/editdoc'>Edit Profile</a></button>
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
                        
                    </tbody>
                </table>
    </>
  )
}

export default FetchDoc