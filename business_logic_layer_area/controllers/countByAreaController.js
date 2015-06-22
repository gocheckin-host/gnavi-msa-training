var Q = require("q");
var areasController = require("./areasController");


/**************************************/
/* REST API controller getCountByArea */
exports.getCountByArea = function (req, res) {

  areasController.getAreasPromise()
    .then(function(areaList) {
        return getCountByAreaListPromise(areaList);
    })
    .then(function(areaCountList) {

      areaCountList.sort(function(a, b) {
          return parseFloat(b.count) - parseFloat(a.count);
      });

      res.set('Content-Type', 'application/json');
      res.send(areaCountList);
    })
    .catch(console.error)
    .done(function() {
      console.log("End: getCountByArea");
    });

};

var getCountByAreaPromise = function(area) {

  var d = Q.defer();

  d.resolve({area_code: area.area_code , area_name: area.area_name, count: randomInt(1000, 5000)});

  return d.promise;
};

var getCountByAreaListPromise = function(areaList) {
  var d = Q.defer();

  var prom = [];
  areaList.area.forEach(function (area) {
    prom.push(getCountByAreaPromise(area));
  });


  Q.all(prom)
    .then(function (areaCountList) {
        d.resolve(areaCountList);
  });

  return d.promise;

};

var randomInt = function(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

/* REST API controller getCountByArea */
/**************************************/
