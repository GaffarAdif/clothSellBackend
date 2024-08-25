const express = require('express')
const app = express()
const mongoose = require('mongoose');
const CreateUsers = require('./Controlers/UserControl');
require('dotenv').config();
const bodyParser = require('body-parser')
const cors = require('cors');


Main().catch(error => console.log(error))
async function Main(params) {
   await mongoose.connect(process.env.MONGODB_URL,{    useNewUrlParser: true,
    useUnifiedTopology: true})
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: '*', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));



app.get('/', (req, res) => {
  res.send('Hello World!')
 
})
app.post('/registration', (req, res) => {
  const SuccesRegistration =  CreateUsers(req,res)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})