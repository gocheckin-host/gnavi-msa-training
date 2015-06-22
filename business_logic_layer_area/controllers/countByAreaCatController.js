var Q = require("q");

/*****************************************/
/* REST API controller getCountByAreaCat */
exports.getCountByAreaCat = function (req, res) {


  getCountByAreaListCatListPromise(req.body.areaList ,req.body.catList )
    .then(function(areaCatCountList) {
      res.set('Content-Type', 'application/json');
      res.send(areaCatCountList);
    })
    .done(function() {
      console.log("End: getCountByAreaCat");
    });
  

};

var getCountByAreaCatPromise = function(area, cat) {
  var d = Q.defer();

  var jsonObj = JSON.parse('["' + cat.category_l_name + '",' + randomInt(100, 1000) + ']');

  d.resolve(jsonObj);

  return d.promise;
};

var getCountByAreaCatListPromise = function(area, catList) {
  var d = Q.defer();

  var prom = [];
  

  catList.forEach(function (cat) {
    prom.push(getCountByAreaCatPromise(area, cat));
  });    



  Q.all(prom)
    .then(function (singleAreaCatCountList) {
        console.log("singleAreaCatCountList found");
        var result = {key:area.area_name, values: singleAreaCatCountList};
        d.resolve(result);
  });

  return d.promise;

};

var getCountByAreaListCatListPromise = function(areaList, catList) {
  var d = Q.defer();

  var prom = [];
  
  areaList.forEach(function (area) {
      prom.push(getCountByAreaCatListPromise(area, catList)); 
  });


  Q.all(prom)
    .then(function (areaCatCountList) {
        console.log("areaCatCountList found");
        d.resolve(areaCatCountList);
  });

  return d.promise;

};

var randomInt = function(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
/* REST API controller getCountByAreaCat */
/*****************************************/