/*
  TODO_01
  Add reference to mongodbManager for mongodb connection.

  TODO_02
  Create a connection by mongodbManager.

  TODO_02
  Close the connections.

  TODO_04
  Retrieve prefecture list with the mongodb connection.

  For details, please reference business_logic_layer_area/controller/areasController.js
*/

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