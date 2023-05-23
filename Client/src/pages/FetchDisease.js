import React,{useContext} from 'react'
import { useState, useEffect } from 'react'
import { AppContext } from '../context';

const FetchDisease = () => {
    const contData = useContext(AppContext);
    const [dia, setDia] = useState([]);
    const [hd, setHd] = useState([]);
    const {contract} = contData.state;
  
  useEffect(() => {
    const detail = async () => {
        const dia = await contract.getDiabetes(contData.account[0]);
        const hd = await contract.getHeartdisease(contData.account[0]);
        setDia(dia);
        setHd(hd)
    };
    contract && detail();

  });
    return (
        <><p>Diabetes Report</p>
        <button><a href='/editdia'>Edit Detail</a></button>
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
        <button><a href='/edithd'>Edit Detail</a></button>
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
                            
                        </tbody>
                    </table> 
        </>
      )
}

export default FetchDisease