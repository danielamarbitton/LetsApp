/* const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.API_KEY,
  api_secret:process.env.API_SECRET,
  
})

exports.createProduct = async (req, res, next) => {


  

  try{
    const result = await cloudinary.uploader.upload(image, {
      folder: "pics",
      width: 300,
      crop: "scale".
  })
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product
    })
  }catch (error){
    console.log(error);
    next(error)
  }

 */


}