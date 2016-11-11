define(['jquery','app/url','ajax'],function($,url,xhr){
	function creatJjiu(){
		//利用ajax请求获取服务器数据
		$.ajax({
			type:"get",
			url:url.getBaseURL()+'/freewalk',
			async:true,
			success:callback
		});
		//获取机酒部分设置数据没有的头部样式
		var box=$('.zw-jj-part');
		var jjTitle=$('<div></div>').attr('class','jj-title');
		var jjMain=$('<ul></ul>').attr('class','jj-main');
		box.append(jjTitle);
		box.append(jjMain);
		var h2=$('<h2></h2>').html('机酒自由行');
		jjTitle.append(h2);
		span=$('<span></span>').html('精选全球优质机票、酒店、游轮等旅行产品');
		jjTitle.append(span);
		var Tul=$('<ul></ul>');
		jjTitle.append(Tul);
		//处理返回数据
		function callback(gdata){
			//对数据中第一组数据进行遍历解决页面空的现象
			gdata[0].data.forEach(function(elem2,index2){
				var Mli=$('<li></li>');
				var Mlia=$('<a href=\'#\'></a>');
				Mli.append(Mlia);
				var Ddiv=$('<div></div>').attr('class','jj-show');
				var Dp=$('<p>'+elem2.title+'</p>');
				Mlia.append(Ddiv);
				Mlia.append(Dp);
				xImg=$('<img />').attr('src',elem2.imgUrl);
				Ddiv.append(xImg);
				xdiv=$('<div></div>').attr('class','jj-mark1');
				Ddiv.append(xdiv);
				var span1=$('<span></span>').html('机+酒');
				xdiv.append(span1);
				var xdiv1=$('<div></div>');
				xdiv.append(xdiv1);
				var span2=$('<span></span>').html(elem2.price);
				var span3=$('<span></span>').html('元起');
				xdiv1.append(span2);
				xdiv1.append(span3);
				jjMain.append(Mli);
			});
			//对上述进行属性设置，并单独添加最后一个li设置划过事件
			var Lli=$('<li></li>').attr('class','jj-main-bottom2');
			var p1=$('<p><a href="#">查看更多</a></p>');
			var p2=$('<p><a href="#">机酒自由行产品</a></p>');
			var p3=$('<p><a href="#">&gt;</a></p>');
			var Lxul=$('<ul><li><a href="#">机票</a></li><li><a href="#">酒店</a></li><li><a href="#">机+酒</a></li><li><a href="#">邮轮</a></li></ul>');
			Lli.append(p1);
			Lli.append(p2);
			Lli.append(p3);
			Lli.append(Lxul);
			jjMain.append(Lli);
			Lli.on('mouseenter',function(){
				p3.css('background','rgba(255,255,255,0.4)');
			}).on('mouseleave',function(){
				p3.css('background','rgba(255,255,255,0)');
			})
			var Fli=$('.jj-main li:first').attr('class','jj-main-top-left jj-margin');
			var Fa=$('.jj-main li:first>a');
			var mdiv=$('<div></div>').attr('class','jj-mark3');
			Fa.append(mdiv);
			$('.jj-main li:eq(1)').attr('class','jj-main-top-center jj-margin');
			$('.jj-main li:eq(2)').attr('class','jj-main-top-right jj-margin');
			$('.jj-main li:eq(3)').attr('class','jj-main-bottom1 jj-main-top-right');
			$('.jj-main li:eq(4)').attr('class','jj-main-bottom1 jj-main-top-right');
			$('.jj-main li:eq(5)').attr('class','jj-main-bottom1 jj-main-top-right');
			
			//进入全部页面布置
			gdata.forEach(function(elem,index){
				var Tlia=$('<a href=\'#\'></a>').html(elem.title);
				var Tli=$('<li></li>');
				Tli.append(Tlia);
				Tul.append(Tli);
				Tli.on('mouseenter',function(){
					jjMain.html('');
					elem.data.forEach(function(elem1,index1){
						console.log(index1);
						var Mli=$('<li></li>');
						var Mlia=$('<a href=\'#\'></a>');
						Mli.append(Mlia);
						var Ddiv=$('<div></div>').attr('class','jj-show');
						var Dp=$('<p>'+elem1.title+'</p>');
						Mlia.append(Ddiv);
						Mlia.append(Dp);
						xImg=$('<img />').attr('src',elem1.imgUrl);
						Ddiv.append(xImg);
						xdiv=$('<div></div>').attr('class','jj-mark1');
						Ddiv.append(xdiv);
						var span1=$('<span></span>').html('机+酒');
						xdiv.append(span1);
						var xdiv1=$('<div></div>');
						xdiv.append(xdiv1);
						var span2=$('<span></span>').html(elem1.price);
						var span3=$('<span></span>').html('元起');
						xdiv1.append(span2);
						xdiv1.append(span3);
						jjMain.append(Mli);
					});
					//给li设置class属性，并且对对第一个li进行单独处理
					var Fli=$('.jj-main li:first').attr('class','jj-main-top-left jj-margin');
					var Fa=$('.jj-main li:first>a');
					var mdiv=$('<div></div>').attr('class','jj-mark3');
					Fa.append(mdiv);
					$('.jj-main li:eq(1)').attr('class','jj-main-top-center jj-margin');
					$('.jj-main li:eq(2)').attr('class','jj-main-top-right jj-margin');
					$('.jj-main li:eq(3)').attr('class','jj-main-bottom1 jj-main-top-right');
					$('.jj-main li:eq(4)').attr('class','jj-main-bottom1 jj-main-top-right');
					$('.jj-main li:eq(5)').attr('class','jj-main-bottom1 jj-main-top-right');
					var Lli=$('<li></li>').attr('class','jj-main-bottom2');
					var p1=$('<p><a href="#">查看更多</a></p>');
					var p2=$('<p><a href="#">机酒自由行产品</a></p>');
					var p3=$('<p><a href="#">&gt;</a></p>');
					var Lxul=$('<ul><li><a href="#">机票</a></li><li><a href="#">酒店</a></li><li><a href="#">机+酒</a></li><li><a href="#">邮轮</a></li></ul>');
					Lli.append(p1);
					Lli.append(p2);
					Lli.append(p3);
					Lli.append(Lxul);
					jjMain.append(Lli);
					Lli.on('mouseenter',function(){
						p3.css('background','rgba(255,255,255,0.4)');
					}).on('mouseleave',function(){
						p3.css('background','rgba(255,255,255,0)');
					});
				});			
			});			
		}					
	}
	return creatJjiu;	
});
