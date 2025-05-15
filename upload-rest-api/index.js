var express = require("express")
var cors = require('cors')
const multer = require('multer');

var app = express()
app.use(cors());

var bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var HTTP_PORT = 8000
app.listen(HTTP_PORT, () => {
   console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, "uploads/")
   },
   filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname)
   },
})

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('photo'), (req, res) => {
   console.log(req.file)
   res.json({ message: 'File uploaded successfully!' });
});
