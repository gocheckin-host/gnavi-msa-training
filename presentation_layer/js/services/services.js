var gnaviAPIservice = function($injectHttp, $q) {

    $http = $injectHttp;

    var gnaviAPI = {};
    var areaServiceURI = "http://gnavi-msa-bl-area.kolsch.mini.pez.pivotal.io";
    // var catServiceURI = "http://gnavi-msa-bl-category.kolsch.mini.pez.pivotal.io";
    // var indexServiceURI = "http://gnavi-msa-bl-index.kolsch.mini.pez.pivotal.io";

    gnaviAPI.getGnaviPrefs = function() {
      var deferred = $q.defer();

      deferred.resolve(
        {
          "_id": "557f8a2f0c2f802800235003",
          "pref": [
            {
              "pref_code": "PREF01",
              "pref_name": "北海道",
              "area_code": "AREA150"
            },
            {
              "pref_code": "PREF02",
              "pref_name": "青森県",
              "area_code": "AREA160"
            },
            {
              "pref_code": "PREF03",
              "pref_name": "岩手県",
              "area_code": "AREA160"
            }
          ]
        }
      );

      return deferred.promise;
    };


    gnaviAPI.getGnaviAreas = function() {
      var deferred = $q.defer();

      deferred.resolve(
        {
          "_id": "557f8aac0c2f802800235005",
          "area": [
            {
              "area_code": "AREA110",
              "area_name": "関東"
            },
            {
              "area_code": "AREA120",
              "area_name": "関西"
            },
            {
              "area_code": "AREA130",
              "area_name": "中部"
            }
          ]
        }
      );

      return deferred.promise;
    };

    gnaviAPI.getGnaviCats = function() {
      var deferred = $q.defer();

      deferred.resolve(
        {
            "_id": "557f8a860c2f802800235004",
            "category_l": [
                {
                    "category_l_code": "RSFST09000",
                    "category_l_name": "居酒屋"
                },
                {
                    "category_l_code": "RSFST02000",
                    "category_l_name": "日本料理・郷土料理"
                },
                {
                    "category_l_code": "RSFST03000",
                    "category_l_name": "すし・魚料理・シーフード"
                }
            ]
        }
      );

      return deferred.promise;
    };



    gnaviAPI.getCountByArea = function() {
      var deferred = $q.defer();

      deferred.resolve(
        [
          {
            "area_code": "AREA110",
            "area_name": "関東",
            "count": 136163
          },
          {
            "area_code": "AREA120",
            "area_name": "関西",
            "count": 65042
          },
          {
            "area_code": "AREA140",
            "area_name": "九州",
            "count": 36027
          }
        ]
      );

      return deferred.promise;
    };

    gnaviAPI.getCountByCat = function() {
      var deferred = $q.defer();

      deferred.resolve(
        [
          {
            category_l_code: "RSFST09000",
            category_l_name: "居酒屋",
            count: 53665
          },
          {
            category_l_code: "RSFST02000",
            category_l_name: "日本料理・郷土料理",
            count: 22079
          },
          {
            category_l_code: "RSFST03000",
            category_l_name: "すし・魚料理・シーフード",
            count: 25735
          }
        ]
      );

      return deferred.promise;
    };

    gnaviAPI.getCountByAreaCat = function(jsonParam) {
      var deferred = $q.defer();

      $http({
        method: 'POST', 
        url: areaServiceURI + '/api/count_by_area_cat',
        data: jsonParam,
        headers: {'Content-Type': 'application/json'}
      })
      .success(function(data, status, headers, config) {
        deferred.resolve(data);
      })
      .error(function(data, status, headers, config) {
        deferred.reject(status + " " + data);
      });

      return deferred.promise;
    };

    gnaviAPI.getCountByCatArea = function(jsonParam) {
      var deferred = $q.defer();

      $http({
        method: 'POST', 
        url: catServiceURI + '/api/count_by_cat_area',
        data: jsonParam,
        headers: {'Content-Type': 'application/json'}
      })
      .success(function(data, status, headers, config) {
        deferred.resolve(data);
      })
      .error(function(data, status, headers, config) {
        deferred.reject(status + " " + data);
      });

      return deferred.promise;
    };

    return gnaviAPI;
};


var gnaviModule = angular.module('gnaviApp.services', []);
gnaviModule.factory('gnaviAPIservice', ['$http', '$q', gnaviAPIservice]);

