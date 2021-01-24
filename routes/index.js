var express = require('express');
var router = express.Router();
const Videogame = require("../models/Videogame")

/* GET home page. */
router.get('/', function(req, res, next) {
  Videogame.find()
    .then(videogames => {
      res.status(200).json({videogames});
    })
    .catch(e=>{
      console.log(e);
    });
});

module.exports = router;
