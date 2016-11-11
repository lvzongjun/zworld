//注释部分为单一页面开发方式  模块化开发   AMD方法
//1、配置模块
//requirejs.config({
//	baseUrl:'js/lib',//定义基础目录
//	paths:{
//		'app':'../app',
//		'jquery':'jQuery-3.1.1',  //jquery是原文件定义已经定义好了好的。所以名字必须这个，jQuer已经定义了模块
//		'ajax':'../app/ajax'  //不加拓展名
//	},
//	//把未模块化的内容模块化
//	shim:{
//		'ajax':{
//			exports:'createXHR'
//		}
//	}
//});
//定义模块
//define(['app/zw-header','app/zw-nav','app/zw-banner','app/zw-menu','app/zw-jj'],function(head,nav,bn,menu,jj){
//	head();
//	nav();
//	bn();
//	menu();
//	jj();
//})

//多页面开发，我定义的主页面模块，首先将共有部分引入，然后引入自己的私有模块 （利用CMD方式引入）
requirejs(['./common'], function () {
    requirejs(['app/zw-header','app/zw-nav','app/zw-banner','app/zw-menu','app/zw-jj'],function(head,nav,bn,menu,jj){
	head();
	nav();
	bn();
	menu();
	jj();
	});  
});

