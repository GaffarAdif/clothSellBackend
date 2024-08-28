const User = require('../Models/Users/UserScema')





// create user 
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
// uploead profiel 

const uploadUserProfile = async (req,res)=>{
  // Access file and other form data
  const  myEmail  = req.body;
  const myfile = req.file

 const myUser = await  User.updateOne({Email : 'gaffar@gmail.com'},{ProfileIamge : myfile.filename})

console.log(myUser)
    res.status(200).json(
      {
        Messege : 'Profile Upload Succsesfully',
        porfileUrl : myfile.filename
      }
    )

}

// send profileUrl 

const profileUrlSender = async (req,res)=>{
const myuser = req.body.userEmail

const userProfileUrl = await User.findOne({Email : myuser}, { ProfileIamge: 1, _id: 0 })

res.status(200).json({
  profileUrl : userProfileUrl
})
  


}




module.exports =  {uploadUserProfile, CreateUsers,profileUrlSender}