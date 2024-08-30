const Product = require("../Models/Proudct/ProductShcema");
const uploadFileOnCloudinary = require("../HelperFunction/Clourdinary");

const CreateProduct = async (req, res) => {
  const image = req.file;
  const productInfo = req.body;

  const CloudinaryUrl = await uploadFileOnCloudinary(`upload/${image.filename}`)
    .then((resp) => resp)
    .catch((err) => {
      console.log(err);
    });

  const ProductUploaded = await new Product({
    product_id: productInfo.product_id,
    product_name: productInfo.product_name,
    product_price: Number(productInfo.product_price),
    product_catagoris: productInfo.product_id,
    product_size: productInfo.product_size,
    product_color: productInfo.product_color,
    product_stock: Number(productInfo.product_stock),
    product_image: CloudinaryUrl,
  });

  await ProductUploaded.save();

  //   console.log('Product Info:', productInfo);

  // Process the image and productInfo as needed
  res.status(200).json({
    Succes: true,
  });
};

module.exports = { CreateProduct };
