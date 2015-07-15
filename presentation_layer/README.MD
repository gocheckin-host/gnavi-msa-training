Welcome to gnavi-msa-pl!
===================

Overview
-------------

Presentation layer using AngularJS MVW framework for Web UI.

-------------
Notice
-------------
Because there is no Service Registry applied, you need to edit the presentation_layer/js/services/services.js file.

```
var areaServiceURI = "http://gnavi-msa-bl-area.<your_cf_domain>";
var catServiceURI = "http://gnavi-msa-bl-category.<your_cf_domain>";
var indexServiceURI = "http://gnavi-msa-bl-index.<your_cf_domain>";
```

-------------
For Training Steps
-------------
Please check if the MicroServices which act as business logic layers provide expected data to the presentation layer.

The 'area' business logic layer:

```
curl -X GET "http://gnavi-msa-bl-area.<your_cf_domain>/api/prefectures"
curl -X GET "http://gnavi-msa-bl-area.<your_cf_domain>/api/areas"
curl -X GET "http://gnavi-msa-bl-area.<your_cf_domain>/api/count_by_area"
curl -H "Content-Type: application/json" -X POST "http://gnavi-msa-bl-area.<your_cf_domain>/api/count_by_area_cat" -d '{"areaList":[{"area_code":"AREA130","area_name":"中部"}],"catList":[{"category_l_code":"RSFST09000","category_l_name":"居酒屋"},{"category_l_code":"RSFST02000","category_l_name":"日本料理・郷土料理"},{"category_l_code":"RSFST03000","category_l_name":"すし・魚料理・シーフード"}]}'
```
The 'category' business logic layer:

```
curl -X GET "http://gnavi-msa-bl-category.<your_cf_domain>/api/categories"
curl -X GET "http://gnavi-msa-bl-category.<your_cf_domain>/api/count_by_category"
curl -H "Content-Type: application/json" -X POST "http://gnavi-msa-bl-category.<your_cf_domain>/api/count_by_cat_area" -d '{"areaList":[{"area_code":"AREA110","area_name":"関東"},{"area_code":"AREA120","area_name":"関西"},{"area_code":"AREA130","area_name":"中部"}],"catList":[{"category_l_code":"RSFST03000","category_l_name":"すし・魚料理・シーフード"}]}'
```

-------------
Deployment to Cloud Foundry
-------------
bower install dependencies:
```
bower install
```

Remember to install [cf cli](https://github.com/cloudfoundry/cli/releases).
Then, push the application:
```
cf push
```

You can access your app at 
```
http://gnavi-msa-pl.<your_cf_domain>
```
