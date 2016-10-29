var express = require('express');
var router = express.Router();

// 引入数据处理模块
var dal = require('../common/dalData');

/// 文章列表  /blog/list
router.get('/list',function(req,res){
	var data = dal.getData(); //获取所有的数据
	res.render('blog/list',{list:data});
});

/// 单篇文章 /blog/detail/文章ID
router.get('/detail/:id',function(req,res){
	// console.log(req.params.id);
	dal.updateViewTimes(req.params.id); //更新当前文章的浏览次数
	var data = dal.getDataByID(req.params.id);//获取当前文章数据
	res.render('blog/detail',{data:data});
});

module.exports = router;
