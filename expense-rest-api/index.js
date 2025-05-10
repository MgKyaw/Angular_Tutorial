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

app.get("/api/expense", (req, res, next) => {
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

app.get("/api/expense/:id", (req, res, next) => {
   var sql = "select * from expense where id = ?"
   var params = [req.params.id]
   db.get(sql, params, (err, row) => {
      if (err) {
         res.status(400).json({ "error": err.message });
         return;
      }
      res.json(row)
   });
});

app.post("/api/expense/", (req, res, next) => {
   var errors = []
   if (!req.body.item) {
      errors.push("No item specified");
   }
   var data = {
      item: req.body.item,
      amount: req.body.amount,
      category: req.body.category,
      location: req.body.location,
      spendOn: req.body.spendOn,
      createdOn: req.body.createdOn,
   }
   var sql = 'INSERT INTO expense (item, amount, category, location, spendOn, createdOn) VALUES (?,?,?,?,?,?)'
   var params = [data.item, data.amount, data.category, data.location, data.spendOn, data.createdOn]
   db.run(sql, params, function (err, result) {
      if (err) {
         res.status(400).json({ "error": err.message })
         return;
      }
      data.id = this.lastID;
      res.json(data);
   });
})

app.post("/api/expense/:id/update_amount", (req, res, next) => {
   var errors = []
   if (!req.params.id) {
      errors.push("No item specified");
   }
   
   var sql = 'UPDATE expense SET amount = ? WHERE id = ?'
   var params = [req.body.amount, req.params.id]
   db.run(sql, params, function (err, result) {
      if (err) {
         res.status(400).json({ "error": err.message })
         return;
      }
      res.json({ id: req.params.id, amount: req.body.amount });
   });
})

app.put("/api/expense/:id", (req, res, next) => {
   if (req.params.id == null) {
      res.status(400).json({ "error": "Resource (Expense) Id is not send." })
      return
   }
   
   var data = {
      id: req.params.id,
      item: req.body.item,
      amount: req.body.amount,
      category: req.body.category,
      location: req.body.location,
      spendOn: req.body.spendOn
   }
   
   var sql = 'SELECT count(*) AS cnt FROM expense WHERE id = ?'
   var params = [data.id]
   db.get(sql, params, function (err, result) {
   if (err) {
      res.status(400).json({ "error": err.message })
      return;
   }
   
   if (result.cnt == 0) {
      var sql = 'INSERT INTO expense (id, item, amount, category, location, spendOn, createdOn) VALUES (?, ?,?,?,?,?,?)'
      var params = [data.id, data.item, data.amount, data.category, data.location, data.spendOn, data.createdOn]
      db.run(sql, params, function (err, result) {
         if (err) {
            res.status(400).json({ "error": err.message })
            return;
         }
         console.log(result)
         res.json(data);
      });
   } else {
      db.run(
         `UPDATE expense SET
            item = ?,    
            amount = ?,
            category = ?, 
            location = ?,    
            spendOn = ? 
            WHERE id = ?`,
         [data.item, data.amount, data.category, data.location, data.spendOn, data.id],
         function (err, result) {
            if (err) {
               console.log(err);
               res.status(400).json({ "error": res.message })
               return;
            }
            res.json(data)
         });
      }
   });

})

app.delete("/api/expense/:id", (req, res, next) => {
   db.run(
   'DELETE FROM expense WHERE id = ?',
   req.params.id,
   function (err, result) {
      if (err) {
         res.status(400).json({ "error": res.message })
         return;
      }
      res.json({ "message": "deleted", changes: this.changes })
   });
})

app.use(function (req, res) {
   res.status(404);
});
