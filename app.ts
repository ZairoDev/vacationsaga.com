const express = require('express');

const app = express();
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://developerzairo:<password>@zairo.hon1apo.mongodb.net/?retryWrites=true&w=majority&appName=Zairo")


app.listen(3001, () => {
    console.log('db running on port 3001');
})

// mongodb+srv://developerzairo:<password>@zairo.hon1apo.mongodb.net/?retryWrites=true&w=majority&appName=Zairo
