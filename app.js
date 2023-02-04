const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes/routes');
const app = express();

require('dotenv').config();

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Database connected.');
})

app.use(express.json());
app.use('/api', routes)

app.get("/getTwo", (req, res, next) => {
    res.json();
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})