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
