import React from "react";
import './SellerRegistration.css'
//import { Link } from 'react-router-dom';

const SellerRegistration= () => {
    return(
        <div>
        <a href="/seller">About</a>
        <div className="Title"> 
        </div>
        <div className="container">
            <div className=" header">
                <div className=" text"> Seller Registration</div> 
            </div>
            <div className="inputs">
             <div className="input"> 
                    <input type = "text" placeholder="Name" />
                </div>
                <div className="input"> 
                    <input type = "email" placeholder="Email" />
                </div>
                <div className="input"> 
                    <input type = "password" placeholder="Password"/>
                </div>
                <div className="input"> 
                    <input type = "text" placeholder="Restaurant Name"/>
                </div>
                <div className="input"> 
                    <input type = "text" placeholder="Restaurant Address"/>
                </div>
            </div>
                
            <div className="submit-container">
                <div className="submit"> Register</div>
                <div className="submit"> Login </div>
            </div>
        </div>
     </div>
    )
}

export default SellerRegistration
