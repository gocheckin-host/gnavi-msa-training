/*
  TODO_01
  Add reference to mongodbManager for mongodb connection.

  TODO_02
  1. Create a connection to the mongodb collection "gnavi" and "area". 
  2. Pass the connection to the getCountByAreaListPromise function.

*/


var Q = require("q");
var dummy_data = require('../dummy_data/count_by_category.js');

/*************************************/
/* REST API controller getCountByCat */
exports.getCountByCat = function (req, res) {

  res.set('Content-Type', 'application/json');
  res.send(dummy_data);
};

/* REST API controller getCountByCat */
/*************************************/
