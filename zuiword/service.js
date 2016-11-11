var express=require('express');
var app=express();
//通过该方法能够访问public下的所有静态页面10.0.161.138:7000/index.html
app.use(express.static('public'));
app.listen(6500);
console.log('服务器已启动');
