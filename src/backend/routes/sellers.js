const express = require('express')
const router = express.Router()
const { Sellers } = require('../models')


router.get('/', (req, res) => {
    res.send("Hello")
});

router.post("/", async(req,res) => {
    const seller = req.body
    await Sellers.create(seller)
    res.json(seller);
})

module.exports = router;