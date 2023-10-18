import React from "react";
import './LandingPage.css'
import { useNavigate } from "react-router-dom";
//import {useNavigate} from 'react-router'
import { useState } from "react";




const LandingPage= ()=> {

    const [textColor, setTextColor] = useState('#000'); // Initial text color

    const changeTextColor = () => {
      // Generate a random color (you can use any logic you want here)
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      setTextColor(randomColor) }

const navigate = useNavigate();

    return( 
        <div className="App">
        <h1 className="company-title">Culinary Cache</h1>
        <main className="App-main">
          <div className="landing-page">
            <div className="buttons">
            <button className = "login-button "onClick = {() => navigate("/seller")}> Seller Login </button> <br/>
            <button className = "login-button" onClick = {() => navigate("/user")}> User Login </button>
            </div>
            <div className="floating-images">
            </div>
          </div>
        </main>
      </div> );
}

export default LandingPage;




