app.controller('bookController',['$scope',function($scope){
$scope.bookTypes = [
  {id:'ertong',name:'儿童',img:'./assets/images/book_list/ertong.jpg',description:'童书热销榜'},
  {id:'lishi',name:'历史',img:'./assets/images/book_list/lishi.jpg',description:'历史热销榜'},
  {id:'dongman',name:'动漫',img:'./assets/images/book_list/dongman.jpg',description:'动漫热销榜'},
  {id:'qingchunwenxue',name:'青春文学',img:'./assets/images/book_list/qingchunwenxue.jpg',description:'青春文学热销榜'},
];
}]);
