app.controller('mainController', ['$scope', 'commonService', function($scope, c_service) {
    // 参数一  type 分类信息
//     c_service.getData('ertong', function(res) {
//         console.dir(res);
//     });
// }]);

$scope.selectedIndex = 0;
$scope.linkTo = function(index) {
    $scope.selectedIndex = index;
};
}]);
