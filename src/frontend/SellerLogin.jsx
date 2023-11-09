import React, {useState} from "react";
import './SellerLogin.css'
//import { Link } from 'react-router-dom';

const SellerLogin= () => {
    const [action,setAction]= useState("Login");
    return(
        <div>
        <a href="/seller">About</a>
        <div className="Title"> 
        </div>
        <div className="container">
            <div className=" header">
                <div className=" text">{action}</div> 
            </div>
            <div className="inputs">
             <div className="input"> 
                
                <div className="input"> 
                    <input type = "email" placeholder="Email" />
                </div>
                </div>
                <div className="input"> 
                    <input type = "password" placeholder="Password"/>
                </div>
                
                
            </div>
            <div className="forgot-password">Lost Password?<span>Click Here!</span></div>
                
            <div className="submit-container">
                <div className="submit"> Login </div>
            </div>
            
        </div>
     </div>
    )
}

export default SellerLogin