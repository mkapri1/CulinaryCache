
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import SellerRegistration from './frontend/SellerRegistration';
import LandingPage from './frontend/LandingPage';
import SellerRegistration from './frontend/SellerRegistration';
import CreateMeal from './frontend/CreateMeal';
import UserPage from './frontend/UserPage';
import SellerLogin from './frontend/SellerLogin';
import PaymentPage from './frontend/PaymentPage';
import axios from "axios";
import { useEffect } from 'react';


function App() {

  //useEffect(() => {
    //axios.get("http://localhost:3001/meals").then((response) => {
        //console.log(response)
    //})
  //}, [])

  return (
    <Router>
    <div>
      <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/seller' element={<SellerRegistration/>} />
      <Route path = '/login' element={<SellerLogin/>} />
      <Route path='/create-meal' element={<CreateMeal/>}/>
      <Route path='/meals' element={<UserPage/>}/>
       <Route path='/payment' element={<PaymentPage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
