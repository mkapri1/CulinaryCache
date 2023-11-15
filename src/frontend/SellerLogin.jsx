import React, {useState} from "react";
import './SellerLogin.css'
//import { Link } from 'react-router-dom';
import Axios from 'axios'

const SellerLogin= () => {
    const [SellerEmail,setSellerEmail]= useState('');
    const [SellerPassword, setSellerPassword] = useState('');

    
    const [loginStatus, setLoginStatus] = useState('');

    const login = () => {
        Axios.post('http://localhost:3001/login', {
            Email: SellerEmail,
            Password: SellerPassword
        }).then((response) => {
            if(response.data.message){
                setLoginStatus(response.data.message)
            }
            else{
                setLoginStatus(response.data[0].Email);
            }
        })
    }
    return(
        <div>
        <a href="/login">About</a>
        <div className="Title"> 
        </div>
        <div className="container">
            <div className=" header">
                <div className=" text"></div> 
            </div>
            <div className="inputs">
             <div className="input"> 
                
                <div className="input"> 
                    <input type = "email" placeholder="Email" onChange = { (e)=>{
                        setSellerEmail(e.target.value);
                     }} />
                </div>
                </div>
                <div className="input"> 
                    <input type = "password" placeholder="Password" onChange = { (e)=>{
                        setSellerPassword(e.target.value);
                     }}/>
                </div>
                
            </div>
            <div className="forgot-password">Lost Password?<span>Click Here!</span></div>
                
            <div className="submit-container">
                <div className="submit" onClick={login}> Login </div>
            </div>

            <h1> {loginStatus} </h1>
            
        </div>
     </div>
    )
}

export default SellerLogin