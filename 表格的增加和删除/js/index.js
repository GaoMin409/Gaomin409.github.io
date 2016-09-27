var form = document.forms["form1"];
   var table = document.getElementById("myTable");
   var selectBox = table.getElementsByTagName("input");
   var tr = table.getElementsByTagName("tr");
   var clicked = true;
       function insert_row(){
         //alert(table.rows[0].cells.length)
var thisrow = table.insertRow(0);
         var thiscell = thisrow.insertCell(0);
         thiscell.innerHTML = "<input type=\"checkbox\" name=\"checkbox10\" value=\"checkbox\" />";
         var thiscell1 = thisrow.insertCell(1);
         thiscell1.innerHTML = "cell";
         var thiscell2 = thisrow.insertCell(2);
         thiscell2.innerHTML = "cell";
         var thiscell3 = thisrow.insertCell(3);
         thiscell3.innerHTML = "cell";
         var thiscell4 = thisrow.insertCell(4);
         thiscell4.innerHTML = "cell";
         thiscell4.align = "center";

       }
       function insert_Cell(){
           var y = table.rows[0].insertCell(0);
           y.colSpan="2";
           y.innerHTML = "sssss";
       }
       function selectall(){
           for(i=0;i<selectBox.length;i++){
               selectBox[i].checked = true;
           }
       }
       function noselect(){
           for(i=0;i<selectBox.length;i++){
               selectBox[i].checked = false;
           }
       }
       function inverse(){
           for(i=0;i<selectBox.length;i++){
               if(selectBox[i].checked){
                   selectBox[i].checked = false;
               }else{
                   selectBox[i].checked = true;
               }
           }
       }
       function delRow(){
           for(i=selectBox.length-1;i>=0;i--){
               //alert(typeof(selectBox[i]));
if(selectBox[i].checked){
                   table.deleteRow(i);
               }
           }
       }
       function onRefresh(){
           location.reload();
       }
       function copyRow(){
           for(i=0;i<selectBox.length;i++){
               if(selectBox[i].checked){
                   //var copytable = document.getElementById("copyTable");
var tablerow = table.insertRow(table.rows.length);
                   tablerow.innerHTML = table.rows[i].innerHTML;
               }
           }
       }
       function tableAlign(){
           for(i=0;i<selectBox.length;i++){
               if(selectBox[i].checked && clicked){
                   table.rows[i].align = "center";
               }
           }
       }
       function changeColor(){
           var skip = true;
           for(i=0;i<tr.length;i++){
               if(skip){
                   tr[i].bgColor = "#cccccc";
                   skip = false;
               }else{
                   tr[i].bgColor = "#ffffff";
                   skip = true;
               }
           }
       }
