app.controller('bookListController', ['$scope','commonService','$routeParams', function($scope,c_service,$routeParams) {
  console.dir($routeParams.name);
  console.dir($routeParams.id);
  console.dir($routeParams);

    $scope.bookData = (c_service.getData(c_service.id,function(res){
      console.dir(res);
    }));

}]);
