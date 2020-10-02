var express = require('express');
var router = express.Router();

// TEST ROUTES CUSTOMER
router.get('/customers', function(req, res, next) {
  res.status(200).json([{customers}]);
});

module.exports = router;