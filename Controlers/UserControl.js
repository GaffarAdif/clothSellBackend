const User = require("../Models/Users/UserScema");
const uploadFileOnCloudinary = require("../HelperFunction/Clourdinary");

// create user
const CreateUsers = async (req, res) => {
  try {
    const newUser = new User({
      FullName: req.body.fullName,
      Email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      Password: req.body.password,
      ProfileIamge: "",
    });
    await newUser.save();
    res.status(201).json({
      message: "Account created successfully",
      user: newUser,
      Succses: true,
    });
  } catch (error) {
    console.log(Object.keys(error.keyValue)[0]);
    res.status(500).json({
      whatError: Object.keys(error.keyValue)[0],
    });
  }
};
// uploead profiel

const uploadUserProfile = async (req, res) => {
  // Access file and other form data
  const Number = req.params.id;
  const myfile = req.file;

  const cloudnaryUrl = await uploadFileOnCloudinary(`upload/${myfile.filename}`)
    .then((resp) => {
      return resp;
    })
    .catch((errer) => {
      console.log(errer);
    });

  const myUser = await User.updateOne(
    { phoneNumber: Number },
    { ProfileIamge: cloudnaryUrl }
  );

  res.status(200).json({
    Messege: "Profile Upload Succsesfully",
    porfileUrl: cloudnaryUrl,
  });
};

// Send Data for loging

const logingDataSend = async (req, res) => {
  const UserPhoneNumber = req.params.number;
  const UserPassword = req.params.password;

  const userInfoBasisNumberAndPassword = await User.findOne(
    { phoneNumber: UserPhoneNumber, Password: UserPassword },
    { _id: 0, createdAt: 0, updatedAt: 0, Password: 0 }
  );

  if (userInfoBasisNumberAndPassword) {
    res.status(200).json({
      message: "Number Or Passord Match Succesfully",
      UserInfo: userInfoBasisNumberAndPassword,
    });
  } else {
    res.status(404).json({
      message: "password not match",
    });
  }
};

module.exports = { uploadUserProfile, CreateUsers, logingDataSend };
