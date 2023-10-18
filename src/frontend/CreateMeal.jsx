import React, { useState } from 'react';
import './CreateMeal.css'; // Make sure to import your CSS file

const CreateMeal = () => {
  const [mealName, setMealName] = useState('');
  const [isVegan, setIsVegan] = useState(false);
  const [allergies, setAllergies] = useState('');

  const handleMealNameChange = (e) => {
    setMealName(e.target.value);
  };

  const handleVeganChange = (e) => {
    setIsVegan(e.target.checked);
  };

  const handleAllergiesChange = (e) => {
    setAllergies(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can handle the form submission, such as sending data to your server.

    // For demonstration purposes, we'll just log the data.
    console.log('Meal Name:', mealName);
    console.log('Is Vegan:', isVegan);
    console.log('Allergies:', allergies);
  };

  return (
    <div className="container">
      <div className="Title">
        <h1 className="text">Create a Mystery Meal</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
            <input
              type="text"
              placeholder="Meal Name"
              value={mealName}
              onChange={handleMealNameChange}
              required
            />
          </div>
          <div className="input">
            <label>
              Vegan:
              <input type="checkbox" checked={isVegan} onChange={handleVeganChange} />
            </label>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Allergies"
              value={allergies}
              onChange={handleAllergiesChange}
            />
          </div>
        </div>
        <div className="submit-container">
          <button type="submit" className="submit">
            Post Mystery Meal
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateMeal;
