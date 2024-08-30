const cloudinary = require("cloudinary").v2;
const fs = require("fs");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDNIRY_NAME,
  api_key: process.env.CLOUDNIRY_API_KEY,
  api_secret: process.env.CLOUDNIRY_API_SECRECT,
});

const uploadFileOnCloudinary = async (localPath) => {
  const response = await cloudinary.uploader.upload(localPath);

  return response.url;
};

module.exports = uploadFileOnCloudinary;
