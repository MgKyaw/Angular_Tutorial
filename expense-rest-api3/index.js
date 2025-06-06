var express = require("express")
var cors = require('cors')
var db = require("./sqlitedb.js")

var app = express()
app.use(cors());

var bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var HTTP_PORT = 8000
app.listen(HTTP_PORT, () => {
   console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

app.get("/", (req, res, next) => {
   res.json({ "message": "Ok" })
});

app.get("/api/jsonp/expense", (req, res, next) => {
   var sql = "select * from expense"
   var params = []
   db.all(sql, params, (err, rows) => {
      if (err) {
         res.status(400).json({ "error": err.message });
         return;
      }
      res.jsonp(rows)
  });
});
app.use(function (req, res) {
   res.status(404);
});
