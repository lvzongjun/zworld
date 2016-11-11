//多页面开发，模块公有部分
requirejs.config({
	baseUrl:'js/lib',//定义基础目录
	paths:{
		'app':'../app',
		'jquery':'jQuery-3.1.1',  //jquery是原文件定义已经定义好了好的。所以名字必须这个
		'ajax':'../app/ajax'  //不加拓展名
	},
	//把未模块化的内容模块化
	shim:{
		'ajax':{
			exports:'createXHR'
		}
	}
});