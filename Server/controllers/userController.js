const { CreateBucketCommand } = require('@aws-sdk/client-s3');
const aws = require('aws-sdk');
const multer = require('multer');
const multers3= require("multer-s3")

new aws.s3({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey:process.env.SECRET_ACCESS_KEY,
  region: process.env.BUCKET_REGION
})

const upload = () => 
multer({
  storage: multers3({
    s3:s3,
    bucket:'lets-app-photo-storage',
    metadata: function(req,file,cd) {
      CreateBucketCommand(null,{fieldName: file.fieldname})
    },
    key: function(req,file,cb){
      cb(null, "image.jpeg")
    }
  })
})

upload().single('image-upload')

exports.uploadPic = (req, res, next) => {
  console.log(req.body);

  res.status(200).json({data: req.body})
}