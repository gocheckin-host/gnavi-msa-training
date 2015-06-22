var Q = require("q");
var dummy_data = require('../dummy_data/prefectures.js');


/**************************************/
/* REST API controller getPrefectures */
exports.getPrefectures = function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send(dummy_data);
};


/* REST API controller getPrefectures */
/**************************************/