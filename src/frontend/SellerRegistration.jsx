import React from "react";
import './SellerRegistration.css'
//import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from 'axios';



const SellerRegistration = () => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [RestaurantName, setRestaurantName] = useState('');
    const [RestaurantAddress, setRestaurantAddress] = useState('');
    const [registrationStatus, setRegistrationStatus] = useState('');

    const register = () => {
        Axios.post('http://localhost:3001/seller', {
            Name: Name,
            Email: Email,
            Password: Password,
            RestaurantName: RestaurantName,
            RestaurantAddress: RestaurantAddress,
        })
        .then((response) => {
            setRegistrationStatus(response.data.message);
            // Clear input fields after successful registration
            setName('');
            setEmail('');
            setPassword('');
            setRestaurantName('');
            setRestaurantAddress('');
        })
        .catch((error) => {
            console.error('Registration error:', error);
            setRegistrationStatus('Registration failed');
        });
    };

    const navigate = useNavigate();

    return (
        <div>
            <a href="/seller">About</a>
            <div className="Title"></div>
            <div className="container">
                <div className="header">
                    <div className="text"> Seller Registration</div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={Name}
                            placeholder="Name"
                        />
                    </div>
                    <div className="input">
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={Email}
                            placeholder="Email"
                        />
                    </div>
                    <div className="input">
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={Password}
                            placeholder="Password"
                        />
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            onChange={(e) => setRestaurantName(e.target.value)}
                            value={RestaurantName}
                            placeholder="Restaurant Name"
                        />
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            onChange={(e) => setRestaurantAddress(e.target.value)}
                            value={RestaurantAddress}
                            placeholder="Restaurant Address"
                        />
                    </div>
                </div>
                <div className="submit-container">
                    <button className="submit" onClick={register}> Register</button>
                    <button className="submit" onClick={() => navigate("/login")}> Login</button><br />
                </div>
                {registrationStatus && <p>{registrationStatus}</p>}
            </div>
        </div>
    );
};

export default SellerRegistration;
