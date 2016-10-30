// 动态的创建div标签
for (var i = 0; i < 50; i++) {
    // 通过jQuery方式创建标签
    var $div = $('<div></div>');
    // 设置标签的文本内容
    $div.text(Math.ceil((Math.random() * 100)));
    // 把新创建的标签添加在body的最后位置
    $('body').append($div);
}
// 循环页面中的所有div为期设置背景颜色
$('div').each(function(index, div) {
    $(div).css('background-color', 'hsl(' + Math.random() * 360 + ',50%,50%)');
})

var sumResult = 0;
// 为div添加click事件
$('div').click(function(e) {
    //判断当前点击的div中的文本值
    //如果当前的是偶数 那么多我的结果做操作 将标签做修改 同时修改成绩
    if (Number($(this).text()) % 2 == 0) {
        sumResult += 1;
        $(this).fadeToggle(function() {
            $(this).show();
            $(this).css({
                'background-color': '#333333',
                'cursor': 'auto'
            });
            $(this).text('X');
        });
        $('.score').text(sumResult);
    }
})
