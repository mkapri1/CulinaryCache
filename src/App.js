
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import SellerRegistration from './frontend/SellerRegistration';
import LandingPage from './frontend/LandingPage';
import SellerRegistration from './frontend/SellerRegistration';
import CreateMeal from './frontend/CreateMeal';

function App() {
  return (
    <Router>
    <div>
      <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/seller' element={<SellerRegistration/>} />
      <Route path='/create-meal' element={<CreateMeal/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
