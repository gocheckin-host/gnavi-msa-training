var dummy_data = require('../dummy_data/categories.js');

/*************************************/
/* REST API controller getCategories */
exports.getCategories = function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send(dummy_data);
};
/* REST API controller getCategories */
/*************************************/

