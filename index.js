const express = require('express')
const app = express()
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path');
const fs = require('fs')
// local file inport 
const upload = require('./Multer/multer')
const {CreateUsers,uploadUserProfile,logingDataSend} = require('./Controlers/UserControl');
const {CreateAmin,SendAdminData} = require('./Controlers/AdminControlers')
const TempFileDelete = require('./HelperFunction/DeleteTempFile')
const {CreateProduct} = require('./Controlers/ProductControlers')
// local file inport 





Main().catch(error => console.log(error))
async function Main(params) {
   await mongoose.connect(process.env.MONGODB_URL,{    useNewUrlParser: true,
    useUnifiedTopology: true})
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
  origin: ['http://localhost:5173', 'http://192.168.0.106:5173'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed methods
  allowedHeaders: 'Content-Type,Authorization', // Specify allowed headers
};
app.use(cors(corsOptions));



app.get('/', (req, res) => {
  res.send('Hello World!')
 
})
app.post('/registration', (req, res) => {
  const SuccesRegistration =  CreateUsers(req,res)
})

app.post('/profileUpdate/:id', upload.single('profilePic'), (req, res) => {
uploadUserProfile(req,res)


setTimeout(() => {
  TempFileDelete(`upload/${req.file.filename}`)
}, 5000);

})


app.get('/loinginfo/:number/:password',(req, res) => {
  logingDataSend(req,res)
})


app.get('/admin/create/:name/:key',(req, res) => {
  CreateAmin(req,res)
})
app.get('/admin/loging/:key',(req, res) => {
  SendAdminData(req,res)
})
app.post('/admin/product/add',upload.single('productImage'),(req, res) => {
  CreateProduct(req,res)
  setTimeout(() => {
    TempFileDelete(`upload/${req.file.filename}`)
  }, 5000);
})





app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})