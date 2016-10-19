app.controller('bookListController', ['$scope','commonService','$routeParams', function($scope,c_service,$routeParams) {
  console.dir($routeParams.id);

  c_service.getData(c_service.id,function(res){
      console.dir(res);
    });

}]);
