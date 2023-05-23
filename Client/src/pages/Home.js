import React from 'react';
// import { Link } from 'react-router-dom';
import backGroundImg from "../assets/background.jpg"
import '../styles/home.css'

function Home(){
    return (
        <div className='home'
        style={{backgroundImage:`url(${backGroundImg})`}}>
          <div className='headerContainer'>
            <h1>HEALTHCHAIN</h1>
          </div>
        </div>
      );

}
export default Home;