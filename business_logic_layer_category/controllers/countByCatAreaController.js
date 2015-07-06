/*
  TODO_01
  1. Add reference to mongodbManager for mongodb connection.
  2. Add reference to catsController.

  TODO_01
  Add reference to mongodbManager for mongodb connection.

  TODO_02
  1. Create a connection to the mongodb collection "gnavi" and "area". 
  2. Pass the connection to the getCountByAreaListPromise function.

*/

var Q = require("q");
var dummy_data = require('../dummy_data/count_by_cat_area.js');

/*****************************************/
/* REST API controller getCountByCatArea */
exports.getCountByCatArea = function (req, res) {


  var dataArray = [];
  dataArray.push(dummy_data.data1);
  dataArray.push(dummy_data.data2);
  dataArray.push(dummy_data.data3);
  dataArray.push(dummy_data.data4);
  dataArray.push(dummy_data.data5);
  dataArray.push(dummy_data.data6);

  res.set('Content-Type', 'application/json');
  res.send(dataArray[randomIntInc(0, 5)]);

};

function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
/* REST API controller getCountByCatArea */
/*****************************************/
