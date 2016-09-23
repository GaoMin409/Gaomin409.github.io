

var shengCtrl = document.querySelector('#sheng');
var shiCtrl = document.querySelector('#shi');
var quCtrl = document.querySelector('#qu');
// var shengSpan = document.querySelector('#shengSpan');
// var shiSpan = document.querySelector('#shiSpan');
// var quSpan = document.querySelector('#quSpan');


var arrSheng = [{id:"0",name:"请选择"},
{id:"1",name:"陕西省"},
{id:"2",name:"河南省"},
{id:"3",name:"山东省"},
];

var arrShi = [{id:"0",name:"请选择",fid:"0"},
{id:"1-1",name:"西安市",fid:"1"},
{id:"1-2",name:"渭南市",fid:"1"},
{id:"2-1",name:"郑州市",fid:"2"},
{id:"2-2",name:"洛阳市",fid:"2"},
{id:"3-1",name:"济南市",fid:"3"},
{id:"3-2",name:"青岛市",fid:"3"},
{id:"3-3",name:"泰安市",fid:"3"},
];


var arrQu = [{id:"1-1-0",name:"市辖区",fid:"1-1"},
{id:"1-1-1",name:"雁塔区",fid:"1-1"},
{id:"1-1-2",name:"未央区",fid:"1-1"},
{id:"1-1-3",name:"长安区",fid:"1-1"},
{id:"1-1-4",name:"碑林区",fid:"1-1"},
{id:"1-2-0",name:"市辖区",fid:"1-2"},
{id:"1-2-1",name:"富平县",fid:"1-2"},
{id:"1-2-2",name:"华阴市",fid:"1-2"},
{id:"1-2-3",name:"大荔县",fid:"1-2"},
{id:"2-1-0",name:"市辖区",fid:"2-1"},
{id:"2-1-1",name:"经开区",fid:"2-1"},
{id:"2-1-2",name:"中原区",fid:"2-1"},
{id:"2-1-3",name:"金水区",fid:"2-1"},
{id:"2-2-0",name:"市辖区",fid:"2-2"},
{id:"2-2-1",name:"西工区",fid:"2-2"},
{id:"2-2-2",name:"洛龙区",fid:"2-2"},
{id:"3-1-0",name:"市辖区",fid:"3-1"},
{id:"3-1-1",name:"长清区",fid:"3-1"},
{id:"3-1-2",name:"历下区",fid:"3-1"},
{id:"3-1-3",name:"槐荫区",fid:"3-1"},
{id:"3-2-0",name:"市辖区",fid:"3-2"},
{id:"3-2-1",name:"黄岛区",fid:"3-2"},
{id:"3-2-2",name:"崂山区",fid:"3-2"},
{id:"3-2-3",name:"市南区",fid:"3-2"},
{id:"3-2-4",name:"市北区",fid:"3-2"},
{id:"3-3-0",name:"市辖区",fid:"3-3"},
{id:"3-3-1",name:"泰山区",fid:"3-3"},
{id:"3-3-2",name:"岱岳区",fid:"3-3"},
];


initCtrlSheng();

function initCtrlSheng(){
  var strHtml = '';
  arrSheng.forEach(function(item){
    // console.log(item);
    strHtml += '<option value="' + item.id +'">'+item.name+'</option>';
  });
  shengCtrl.innerHTML = strHtml;

}

function initCtrlShi(data){
  var strHtml = '';
  data.forEach(function(item){
      // console.log(item);
    strHtml += '<option value="' + item.id +'">'+item.name+'</option>';
  });
  shiCtrl.innerHTML = strHtml;
  selShiChange();
}

function initCtrlQu(data){
  var strHtml = '';
  data.forEach(function(item){
    strHtml += '<option value="' + item.id +'">'+item.name+'</option>';
  });
  quCtrl.innerHTML = strHtml;
}

// 省份下拉框数据改变之后
function selShengChange(){
  // 获取选择框的值
// console.log(shengCtrl.value);

var result = arrShi.filter(function(item){

  if(item.fid == shengCtrl.value){
    // console.log(shengCtrl.value);
    // console.log(item.fid);
  // shengSpan.innerHTML = item.name;
    return item;
  }
});
initCtrlShi(result);
}


// 市下拉框数据改变之后
function selShiChange(){
  // console.log(shiCtrl.value);
  var result = arrQu.filter(function(item){
    if(item.fid == shiCtrl.value){
      return item;
    }
  });
  initCtrlQu(result);
}
