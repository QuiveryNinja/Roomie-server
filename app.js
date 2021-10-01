const express = require("express");
const app = express();
const cors = require('cors')
require("dotenv").config();

app.use(express.json());
app.use(cors())


const db = require("./models");



//Routers
const postRouter = require("./routes/Posts");
app.use("/allReviews", postRouter);

db.sequelize.sync().then(()=> {
    app.listen(process.env.PORT || 2000, () => {
        console.log("Server on port 2000")
    });
}).catch((err) => {
    console.log(err)
})

