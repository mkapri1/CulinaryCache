import React, { useState } from 'react';
import './CreateMeal.css'; // Make sure to import your CSS file
import Axios from 'axios'

const CreateMeal = () => {
  const [RestaurantName, setRestaurantName] = useState('');
  const [Vegan, setVegan] = useState('');
  const [Allergies, setAllergies] = useState('');
  const [Price, setPrice ] = useState('');
  const [ CollectTime, setCollectTime ] = useState('');

  const createMeal = () => {
    Axios.post('http://localhost:3001/create-meal', {
        RestaurantName: RestaurantName,
        Vegan: Vegan,
        Allergies: Allergies,
        Price: Price,
        CollectTime: CollectTime,
    })
};



  return (
    <div className="container">
      <div className="Title">
        <h1 className="text">Create a Mystery Meal</h1>
      </div>
      <form>
        <div className="inputs">
          <div className="input">
            <input
              type="text"
              placeholder="Restaurant Name"
              value={RestaurantName}
              onChange={(e)=> setRestaurantName(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Vegan"
              value={Vegan}
              onChange={(e)=> setVegan(e.target.value)}
            />
          </div>
          
          <div className="input">
            <input
              type="text"
              placeholder="Allergies"
              value={Allergies}
              onChange={(e)=> setAllergies(e.target.value)}
            />
          </div>
          <div className="input">
            <input
              type="integer"
              placeholder="Price"
              value={Price}
              onChange={(e)=> setPrice(e.target.value)}
            />
          </div>
          <div className="input">
            <input
              type="integer"
              placeholder="Collect Time"
              value={CollectTime}
              onChange={(e)=> setCollectTime(e.target.value)}
            />
          </div>
        </div>
        <div className="submit-container">
          <button type="submit" className="submit" onClick={createMeal}>
            Post Mystery Meal
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateMeal;
