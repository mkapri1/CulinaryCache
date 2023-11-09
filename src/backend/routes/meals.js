const express = require('express')
const router = express.Router()
const { meals } = require('../models')


router.get('/', async(req, res) => {
     const listOfMeals = await meals.findAll()
     res.json(listOfMeals)
});

router.post("/", async(req,res) => {
    const meals = req.body
    await meals.create(meals)
    res.json(meals);
})

module.exports = router;