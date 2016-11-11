define(['jquery','app/url','ajax'],function($,url,xhr){
	function creatBnNav(){
		//var x=xhr();//jQuery中包括创建对象了
		$.ajax({
			type:"get",
			url:url.getBaseURL()+'/banner',
			async:true,
			success:callback
		});
		var ulbox=$('.b-map');
		function callback(data){
			data.forEach(function(elem,index){			
				var li=$("<li></li>");
				var a=$("<a href="+elem.href+"></a>");
				a.css('background',"url("+elem.imgUrl+") no-repeat");
				li.append(a);
				ulbox.append(li);	
			});
		}
		var left=ulbox[0].offsetLeft;
		var xk=$('.lbxk');
		
		var i=0;
		var j=1;
		var timer;
		//定义轮播图函数	
		function lunBo(){
			i++;
			xk.css('background','#fff');
			xk.eq(i).css('background','red');
			left=-1420*i;
			ulbox.css('left',left+'px');
			
			if(i==4){
				i=0;
				xk.css('background','#fff');
				xk.eq(i).css('background','red');	
				ulbox.css('left','0px');
			}
			
//			if(left>0){
//				left=left*i;
//				ulbox.css('left','-4260px');
//				
//			}
//			console.log(left);
//			console.log(i);
//			console.log(j);
		}
		timer=setInterval(lunBo,2000);
		//设置小框划过变色改图片
		xk.each(function(index,elem){
			$(elem).on('mouseenter',function(){
				clearInterval(timer);
				xk.css('background','#fff');
				$(elem).css('background','red');
				ulbox.css('left',-(index*1420)+'px');
			});
			$(elem).on('mouseout',function(){
				i=index;
				timer=setInterval(lunBo,2000)
			});
		});
		//设置测箭头事件
		var l=null;
		$('.lb-left-btn').on({
			'mouseenter':function(){
				clearInterval(timer);
			},
			"click":function(){
				
				lunBo();
			}
		});
		$('.lb-right-btn').on({
			'mouseenter':function(){
				clearInterval(timer);
			},
			"click":function(){
				lunBo();
			}
		})
		
		
		
//		$('.lb-left-btn').on('mouseenter',function(){
//			clearInterval(timer);
//			$('.lb-left-btn').on('click',function(){
//				console.log(i);
//				i+=1;
//				ulbox.css('left',-(i*1420)+'px');
//			})
//			
//		});

	}
	return creatBnNav;
});