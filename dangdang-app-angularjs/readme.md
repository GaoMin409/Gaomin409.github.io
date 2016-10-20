#### dangdang-app项目说明
>此项目实现从当当网的新书排行榜抓取指定分类下的数目信息,把抓取的结果存储在本地的文件中.通过weui实现页面效果的展示

项目使用的主要模块有
```
gulp          # 实现自动化构建,主要是express框架代码修改后自动重启
express       # web框架
art-template  # 模版引擎
jQuery-weui   # 前端ui库
```


#### 运行
```bash
npm install # 安装依赖项
gulp        # 通过gulpfile直接启动项目
# http://localhost:3000 直接在浏览器中访问
```

#### 配置信息说明
```
在common.js文件中有一个bookTypes参数,对其进行配置可以继续抓取相应的数据
```
