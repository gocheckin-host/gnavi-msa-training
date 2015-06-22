var Q = require("q");
var dummy_data = require('../dummy_data/areas.js');

/********************************/
/* REST API controller getAreas */
exports.getAreas = function (req, res) {
  getAreasPromise()
    .then(function(areaList) {
      res.set('Content-Type', 'application/json');
      res.send(areaList);
    })
    .catch(console.error)
    .done(function() {
      console.log("End: getAreas");
    });
};

exports.getAreasPromise = function() {
  return getAreasPromise();
};

var getAreasPromise = function() {
  var d = Q.defer();

  d.resolve(dummy_data);

  return d.promise;
};

/* REST API controller getAreas */
/********************************/