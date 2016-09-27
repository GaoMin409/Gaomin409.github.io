var arr = JSON.parse(localStorage.myData);
// arr.push(JSON.parse(localStorage.myData));
var html = template('table', {
    list: arr
});
document.querySelector('#container').innerHTML = html;




// 删除
// var form = document.forms["form1"];
// var row = document.getElementById("row");
// var selectBox = row.getElementsByTagName("input");
// console.log(selectBox);
// // console.dir(selectBox.length);
// // var tr = row.getElementsByTagName("tr");
// var clicked = true;
// function delRow() {
//     // document.getElementById("input").style.filter = 'alpha(opacity:1)';
//     console.log(selectBox.length);
//     for (i = selectBox.length - 1; i >= 0; i--) {
//         //alert(typeof(selectBox[i]));
//         console.dir(i);
//         if (selectBox[i].checked) {
//             console.log(i);
//             row.deleteRow(i);
//         }
//     }
// }

var rowIndex = 0;
var bool = 0;
var tr = document.querySelectorAll('tr');

function delRow(e) {
    bool++;
    console.dir(e);
    if (bool % 2 == 1) {
        // console.log(e);
        rowIndex = e.path[1].rowIndex;
        tr[rowIndex].style.backgroundColor = 'red';
    } else {
        tr[rowIndex].style.backgroundColor = '';
        // rowIndex = e.path[1].rowIndex;
    }
}

function deleteRow(e) {

    if (rowIndex == 0) {
        alert('请选择要删除的数据');
    } else {
      if (confirm('确认删除？')) {
          window.location.reload();
      } else {
          return;
      }
        arr = JSON.parse(localStorage.myData);
        arr.forEach(function(item, index) {
            if (index + 1 == rowIndex) {
                arr.splice(index, 1);
            }

        });
        // delRow(e);
    }
    localStorage.myData = JSON.stringify(arr);
    // arr.push(JSON.parse(localStorage.myData));
    var html = template('table', {
        list: arr
    });
    document.querySelector('#container').innerHTML = html;

}
