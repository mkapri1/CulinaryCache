const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json());
app.use(cors());


const db = require('./models')

//Routers
const sellerRouter = require('./routes/sellers')
app.use("/sellers", sellerRouter)

const mealsRouter = require('./routes/meals')
app.use("/meals", mealsRouter)



db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});

