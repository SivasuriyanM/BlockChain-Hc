import React,{useContext} from 'react'
import { useState, useEffect } from 'react'
import { AppContext } from '../context';

const FetchOthers = (props) => {
    const contData = useContext(AppContext);
    const [dets, setDet] = useState([]);
    const [dia, setDia] = useState([]);
    const [hd, setHd] = useState([]);
    const [pa, setPa] = useState([]);
    const [pn, setPn] = useState([]);

    const {contract} = contData.state;
    useEffect(() => {
        const detail = async () => {
            const pa = await contract.getPatientAcc();
            setPa(pa);
            const pn = await contract.getPatientName();
            setPn(pn)
        };
        contract && detail();
    
      }, [contract]);
    const display = async (event) => {
        event.preventDefault();
        const add = document.querySelector('#address').value;
        console.log("Recorded"); 
        const dets = await contract.getOthers(add);
        setDet(dets);
        const dia = await contract.getDiabetes(add);
        const hd = await contract.getHeartdisease(add);
        setDia(dia);
        setHd(hd);     
    }
    
  return (
    <> 
    <form onSubmit={display}>
    <label>Patient Address</label>
    <input type='text' id='address' ></input>
    <button type='submit'>Submit</button>
    </form>
<h6>{pn[0]} - {pa[0]}</h6>
<h6>{pn[1]} - {pa[1]}</h6>
        <p>Patient Details</p> 
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
        <p>Diabetes Report</p>
                    <table >
                        <tbody>
                            <tr>
                                <td>{dia[0]}</td>
                            </tr>
                                <tr>
                                <td>{dia[1]}</td>
                            </tr>
                                <tr>
                                <td>{dia[2]}</td>
                            </tr>
                                <tr>
                                <td>{dia[3]}</td>
                            </tr>
                                <tr>
                                <td>{dia[4]}</td>
                            </tr>
                                <tr>
                                <td>{dia[5]}</td>
                            </tr>
                                <tr>
                                <td>{dia[6]}</td>
                            </tr>
                           
                        </tbody>
                    </table>
        <p>Heartdisease Report</p>
                    <table >
                        <tbody>
                            <tr>  
                                <td>{hd[0]}</td>
                            </tr>
                            <tr>
                                <td>{hd[1]}</td>
                            </tr>
                            <tr>
                                <td>{hd[2]}</td>
                            </tr>
                            <tr>
                                <td>{hd[3]}</td>
                            </tr>
                            <tr>
                                <td>{hd[4]}</td>
                            </tr>
                            <tr>
                                <td>{hd[5]}</td>
                            </tr>
                            <tr>
                                <td>{hd[6]}</td>
                            </tr>
                            <tr>
                                <td>{hd[7]}</td>
                            </tr>
                            
                        </tbody>
                    </table> 
    </>
  )
}

export default FetchOthers