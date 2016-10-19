app.controller('bookListController', ['$scope','commonService','$routeParams', function($scope,c_s,$routeParams) {
  // console.dir($routeParams.name);
  console.dir($routeParams.id);
  // console.dir($routeParams);

c_s.getData($routeParams.id,function(res){
  var bookData = res.data;
      console.dir(res.data);
    });

}]);
