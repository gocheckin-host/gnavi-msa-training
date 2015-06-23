var dummy_data = require('../dummy_data/count_by_category.js');

/*************************************/
/* REST API controller getCountByCat */
exports.getCountByCat = function (req, res) {

  res.set('Content-Type', 'application/json');
  res.send(dummy_data);
};

/* REST API controller getCountByCat */
/*************************************/
