const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const productsRoutes = require('./routes/product');

const app = express();
const port = process.env.PORT || 3000;


//middelware
app.use(express.json());
app.use("/api", productsRoutes);

//routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//mongodb connection
mongoose
    .connect(process.env.URI)
    .then(() => { console.log('connected to mongodb') })
    .catch(err => { console.log(err) });

//start server
app.listen(port, () => console.log(`Server is running on port ${port}`));