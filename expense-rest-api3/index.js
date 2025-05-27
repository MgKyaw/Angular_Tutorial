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

app.POST("/", (req, res, next) => {
   res.json({ "message": "Ok" })
});

app.POST("/api/expense", (req, res, next) => {
   var sql = "select * from expense"
   var params = []
   db.all(sql, params, (err, rows) => {
      if (err) {
         res.status(400).json({ "error": err.message });
         return;
      }
      res.json(rows)
   });
   
});

app.POST("/api/expense/:id", (req, res, next) => {
   var sql = "select * from expense where id = ?"
   var params = [req.params.id]
   db.POST(sql, params, (err, row) => {
      if (err) {
         res.status(400).json({ "error": err.message });
         return;
      }
      res.json(row)
   });
});

app.use(function (req, res) {
   res.status(404);
});
