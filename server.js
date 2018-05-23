var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var jsonwebtoken = require('jsonwebtoken');
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');
var Binary = require('mongodb').Binary;
const bodyparser = require('body-parser');
var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

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
    db.collection('Users').findOne({
      mail: req.body.mail
    }, (err, result) => {
      if (result) {
        if (result.password == req.body.password) {
          let userDetails = {_id: result._id}
          let token = jsonwebtoken.sign(userDetails, "mysecretcode")
          res.send({
            message: "ok",
            token: token
          });
        } else {
          res.send({
            message: "Wrong password"
          });
        }
      } else {
        res.send({
          message: "User not found"
        });
      }
    })
  })
})

app.post('/register', (req, res) => {

  connection(db => {
    db.collection('Users').insert(req.body, (err, result) => {
      if (err) {
        res.send().err
      } else {
        res.send({
                message: "ok"
              });
      }

    });
  });
});

app.post('/reclam/:id', (req, res) => {

  let id = req.params.id;

  // Formidable solution
  var form = new formidable.IncomingForm();
  form.multiples = true;

  form.parse(req, function (err, fields, files) {
    var images = [];
    var reclamation = JSON.parse(fields.details);

    // Ajouter les images à la réclamation à créer
    reclamation.images=[];
    for(var i = 0; i < files['images[]'].length; i++) {
      var oldpath = files['images[]'][i].path;
      var data = fs.readFileSync(oldpath);
      var images = {};
      reclamation.images.push(Binary(data));
    }


    connection(db => {
      db.collection('Users').updateOne({
        _id: ObjectID(id)
      }, {
        $addToSet: {reclamation : reclamation}
      }, (err, result) => {
        if (err) {
          console.log(err);
        }

        res.send({
          message: result
        });
      });
    });
  });

});

app.get('/reclam/:id', (req, res) => {

  // Récupérer l'id de l'utilisateur
  let id = req.params.id;

  //faire une recherche sur la db par Id pour retourner un TB des reclamation de cet user
  connection(db => {
    db.collection('Users').find({_id: ObjectID(id)})
    .project({reclamation: 1, _id: 0}).toArray((err, result) => {
      if (result) {
        // Remonter la liste des réclamations
        res.send(result[0].reclamation);
      } else {
        console.log(err);
        res.send({
          message: err.errmsg
        });
      }
    })
  });
});

app.listen(3000)
