var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require ('mongodb').MongoClient;
var ObjectID = require ('mongodb').ObjectID;
var jsonwebtoken = require ('jsonwebtoken')
//import {sign} from 'jsonwebtoken';
const bodyparser = require('body-parser');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/reclamation', (err, client) => {
      if (err) return console.log(err);
      let db = client.db('reclamation');
      closure(db);
  })
}

app.post('/login', (req, res) => {
  let mail = req.params.mail
  connection(db => {
db.collection('Users').findOne({ mail: req.body.mail
              }, (err, result) => {
                if (result) {
                    if(result.password == req.body.password) {
                      let token = jsonwebtoken.sign(result,"mysecretcode")
                    res.send( {message : "ok", token : token} );
                  } else {
                    res.send({message : "Wrong password"});
                  }
                } else {
                    res.send({message : "User not found"});
                  }
                })
              })
            })

 app.post('/register', (req, res) => {

   connection(db => {
     db.collection('Users').insert(req.body, (err, result) => {
       if (err) {
         res.send().err
       }
       res.send({
         message: "ok"
       });
     });
   });
 });

 app.post('/reclam/:id', (req, res) => {
  let id= req.params.id
  console.log(id);
  console.log(req.body);

    connection(db => {
      db.collection('Users').updateOne({_id: ObjectID(id)}, {$addToSet:{reclamation: req.body}}, (err, result) => {
        if (err) {
          console.log (err);
        }
        res.send({message: result} );
        // res.send({
        //   message: "ok"
        // });
      });
    });
  });




app.listen(3000)
