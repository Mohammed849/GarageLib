var express = require('express');
var router = express.Router();

// TEST HOMEPAGE
router.get('/', function(req, res, next) {
  // On envoi depuis notre route, des données json avec quelques infos pour tester notre backend
  res.status(200).json([{
    title: 'Garagelib',
    welcome: 'Bienvenue sur Garagelib !',
  }]);
});

module.exports = router;