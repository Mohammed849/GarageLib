var express = require('express');
var router = express.Router();

// TEST HOMEPAGE
router.get('/', function(req, res, next) {
  // On envoi depuis notre route, des données json avec quelques infos pour tester notre backend
  res.status(200).json([{
    title: 'Express',
    text: 'Welcome to Express and React !',
    text2: "Bilou t'es le meilleur"
  }]);
});

module.exports = router;