const express = require('express')
const app = express()
const mongoose = require('mongoose');
const {CreateUsers,uploadUserProfile,profileUrlSender} = require('./Controlers/UserControl');
require('dotenv').config();
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path');
const multer = require('multer')

const storage = multer.diskStorage({
 destination : function (req,file,cb){
  cb(null,'./upload')
 } ,
 filename : function (req,file,cb){
  const ext = path.extname(file.originalname);
cb(null,`${Date.now()}_profile${ext}`)
 }
})


const upload = multer({
  storage
})

Main().catch(error => console.log(error))
async function Main(params) {
   await mongoose.connect(process.env.MONGODB_URL,{    useNewUrlParser: true,
    useUnifiedTopology: true})
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173', // Allow only this origin
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

app.post('/profileUpdate', upload.single('profilePic'), (req, res) => {
uploadUserProfile(req,res)

})
app.post('/UserProfile', upload.single('profilePic'), (req, res) => {
  profileUrlSender(req,res)

})






app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})