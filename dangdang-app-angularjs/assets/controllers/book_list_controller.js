app.controller('bookListController', ['$scope', 'commonService', '$routeParams',
    function($scope, c_s, $routeParams) {
        console.dir($routeParams.id);
        
        $scope.bookData = [];
        c_s.getData($routeParams.id, function(res) {
            $scope.bookData = res.data;
            console.dir(res.data);
        });

    }
]);
