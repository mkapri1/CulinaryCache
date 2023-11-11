const express = require('express')
const cors = require('cors')
const app = express()
const mysql = require('mysql')


app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
    user: "root",
    password: "Malika2002@",
    database: "CulinaryCache",
    host: "localhost", 
});


  app.get('/', function(req,res){
    res.send('Hey!')
  })

  app.post('/seller', (req, res) => {

    const Name = req.body.Name
    const Email = req.body.Email
    const Password = req.body.Password
    const RestaurantName = req.body.RestaurantName
    const RestaurantAddress = req.body.RestaurantAddress
    db.query(
        "INSERT INTO Seller (Name, Email, Password, RestaurantName, RestaurantAddress) VALUES (?, ?, ?, ? ,?)",
        [Name, Email, Password, RestaurantName, RestaurantAddress],
        (err, result) => {
            console.log(err)
        }
    );
});

app.post('/login', (res,req) => {
    const SellerEmail = req.body.Email;
    const SellerPassword = req.body.Password;
    db.query(
        "SELECT *FROM Seller WHERE Email = ? AND Password = ?", 
        [SellerEmail, SellerPassword],
        (err, result) => {
            if(err){
               res.send({err: err})
            }
            if (result.length > 0) {
                res.send(result)
            } else{
                res.send({message: "Wrong Email/Password!"})
            }
         
        })
})


app.listen(3001, () => {
    console.log("Server running on port 3001")
    db.connect(function(err){
        if(err) throw err;
        console.log('database connected!')
    })
})

