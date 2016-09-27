

var arr = JSON.parse(localStorage.myData);
// var arr = [];
var obj = {};

function btnClicked() {
    obj.name = document.querySelector('#search-name').value.trim();
    obj.race = document.querySelector('#search-race').value.trim();
    obj.occupation = document.querySelector('#search-occupation').value.trim();
    obj.liking = document.querySelector('#search-liking').value.trim();
    obj.animation = document.querySelector('#search-animation').value.trim();
if( obj.name =="" || obj.animation==""){
  alert('姓名或代表作不能为空');
 }
else{
  arr.push(obj);
  localStorage.myData = JSON.stringify(arr);
  // 页面进行跳转，跳转到href属性指定的值
  window.location.href="list.html";
}
}
// 弹出一个询问提示框
  // confirm('是否取消');
