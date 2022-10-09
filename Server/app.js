// import modules
const express = require("express");
const morgan = require ("morgan");
const cors = require ("cors");
require("dotenv").config();
const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
const multer = require('multer')

const upload = multer({ dest: 'uploads/' })
const { uploadFile, getFileStream } = require('./s3')


//app
const app = express();

//db
const { MongoClient } = require("mongodb");

const { MONGO_URI } = process.env

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);

client.connect();

client.close();

console.log("Connected to Mongo")

//middleware
app.use(morgan("dev"))
app.use(cors({origin:true, credentials: true}))

//routes
const testRoutes = require("../Server/routes/test");
app.use("/", testRoutes);


//s3
app.get('/images/:key', (req, res) => {
  console.log(req.params)
  const key = req.params.key
  const readStream = getFileStream(key)

  readStream.pipe(res)
})

app.post('/images', upload.single('image'), async (req, res) => {
  const file = req.file
  console.log(file)

  // apply filter
  // resize 

  const result = await uploadFile(file)
  await unlinkFile(file.path)
  console.log(result)
  const description = req.body.description
  res.send({imagePath: `/images/${result.Key}`})
})



//port
const port = process.env.PORT || 8000;

//listener
const server = app.listen(port, () => console.log(`Server is running on ${port}`));

