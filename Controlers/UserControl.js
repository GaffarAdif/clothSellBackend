const User = require('../Models/Users/UserScema')






const CreateUsers= async (req,res)=>{

  try {
    const newUser =  new  User({
        FullName : req.body.fullName,
        Email : req.body.email,
        phoneNumber : req.body.phoneNumber,
        Password : req.body.password,
        ProfileIamge : ''
    })
    await newUser.save()
    res.status(201).json({ 
        message: 'Account created successfully', user: newUser, Succses : true
       });
  } catch (error) {
    console.log(Object.keys(error.keyValue)[0] );
    res.status(500).json({
       whatError : Object.keys(error.keyValue)[0]
      
      });
  }
};

module.exports = CreateUsers