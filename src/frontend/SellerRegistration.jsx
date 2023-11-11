import React from "react";
import './SellerRegistration.css'
//import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from 'axios';



const SellerRegistration= () => {

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [RestaurantName, setRestaurantName] = useState('')
    const [RestaurantAddress, setRestaurantAddress] = useState('')
   

    const register = () => {
        Axios.post('http://localhost:3001/seller', {
            Name : Name,
            Email:Email,
            Password: Password,
            RestaurantName : RestaurantName,
            RestaurantAddress : RestaurantAddress, 
            
        }).then((response) => {
            console.log(response)
        })
    }

    const navigate = useNavigate();
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
             <input type = "name" onChange= { (e) => {
                        setName(e.target.value)}}
                    placeholder="Name" />
                </div>
                <div className="input"> 
                    <input type = "email" onChange= { (e) => {
                        setEmail(e.target.value)}}
                    placeholder="Email" />
                </div>
                <div className="input"> 
                    <input type = "password" onChange= { (e) => {
                        setPassword(e.target.value)}}placeholder="Password"/>
                </div>
                <div className="input"> 
                <input type = "restaurantName" onChange= { (e) => {
                        setRestaurantName(e.target.value)}}
                    placeholder="restaurantName" />
                </div>
                <div className="input"> 
                <input type = "RestaurantAddress" onChange= { (e) => {
                        setRestaurantAddress(e.target.value)}}
                    placeholder="RestaurantAddress" />
                </div>
            </div>
                
            <div className="submit-container">
                <button className="submit" onClick= {register}> Register</button>
                <button className = "submit"onClick = {() => navigate("/login")}> Login </button> <br/>
            </div>
        </div>
     </div>
    )
}

export default SellerRegistration
