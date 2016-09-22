function clickHandle() {
    alert('div is clicked');
    alert('这里是在独立的js文件中写的代码');

}

// 在实际开发中 $表示jQuery插件，是一个缩写(别名)
// 输出jQuery的版本号
      console.log($.fn.jquery);

      // 输出变量a的值
      // 此处输出时  报错  变量未定义
      // console.log(a);
