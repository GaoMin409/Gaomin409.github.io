app.controller('bookListController', ['$scope','commonService','$routeParams', function($scope,c_service,$routeParams) {
  console.dir($routeParams.name);
  console.dir($routeParams.id);
  console.dir($routeParams);

    $scope.bookData = [];
}]);
