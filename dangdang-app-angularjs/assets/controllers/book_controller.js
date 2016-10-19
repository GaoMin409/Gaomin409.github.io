app.controller('bookController',['$scope',function($scope){
$scope.bookTypes = [
  {id:'ertong',name:'儿童',img:'./assets/images/bok_list/ertong.jpg',description:'当当网童书热销榜'},
  {id:'lishi',name:'历史',img:'./assets/images/bok_list/lishi.jpg',description:'当当网历史热销榜'},
  {id:'dongman',name:'动漫',img:'./assets/images/bok_list/dongman.jpg',description:'当当网动漫热销榜'},
  {id:'qingchunwenxue',name:'青春文学',img:'./assets/images/bok_list/qingchunwenxue.jpg',description:'当当网青春文学热销榜'},
];
}]);
