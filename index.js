// express
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
app.listen(port, () => {console.log('Listening on port!')})

// CORS
const cors = require('cors');
app.use(cors({origin:'*'}))

// mongoose
const mongoose = require('mongoose')
const MONGODB_URI = 'mongodb+srv://RedfordHudson:XvceyOBTcqvDS5vt@cluster0.qj3av.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(process.env.MONGODB_URI || MONGODB_URI);
const db = mongoose.connection;
db.once('error', err => console.log(err));
db.once('open', () => console.log('Connected to server!'))

// API
const linkRouter = require('./routes/routes.link')
app.use('/',linkRouter)