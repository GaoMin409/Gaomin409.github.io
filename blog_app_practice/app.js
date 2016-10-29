var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');//调试模块
var bodyParser = require('body-parser');//格式化request数据的中间件

// 设置模板引擎
app.set('views',path.join(__dirname,'views'));

// 引入需要的art-template模板
var template = require('art-template');
template.config('base', '');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 设置静态目录
app.use(express.static('./public'));

app.get('/',function(req,res){
  res.redirect('/blog/list');
});

app.all('/admin/*',function(req,res,next){
  console.log('此处访问的是管理后台');
  next();
});

// 设置引入前端blog页面的路由模块
app.use('/admin/blog',require('./routes/admin/blog'));
app.use('/blog',require('./routes/blog'));
app.use('/api/blog',require('./routes/api/blog'));

app.listen(4000,function(){
  console.log('服务器运行于4000端口');
});
