define(['jquery','app/url','ajax'],function($,url,xhr){
	function menuNav(){
		$.ajax({
			type:"get",
			url:url.getBaseURL()+'/menu',
			async:true,
			success:callback
		});
		var box=$('.banner-nav');
		var ul1=$('<ul></ul>');
		ul1.attr('class','banner-nav-menu');
		
		box.append(ul1);
		function callback(data){
			data.forEach(function(elem,index){
				//menu导航
				var li=$('<li></li>');
				ul1.append(li);
				var h3=$('<h3>'+elem.title+'</h3>');
				li.append(h3);
				var Ddiv=$('<div></div>');
				li.append(Ddiv);
				var ul2=$('<ul></ul>');
				ul2.attr('class','banner-nav-main');
				li.append(ul2);
				for(var j=0;j<elem.mainCity.length;j++){
					var Da=$('<a href=\'#\'>'+elem.mainCity[j]+'</a>');
					Ddiv.append(Da);
				}
				//menu主体
				var li1=$('<li></li>');
				ul2.append(li1);
				var moreCity=elem.moreCity;
				for(var a=0;a<moreCity.length;a++){
					var xdiv=$('<div></div>');
					li1.append(xdiv);	
					var xh3=$('<h3>'+moreCity[a].cityName+'</h3>');
					xdiv.append(xh3);
					var xxdiv=$('<div></div>');
					xdiv.append(xxdiv);				
					for(var b=0;b<moreCity[a].items.length;b++){
						if(moreCity[a].items[b].length>30){
							var Ximg=$("<img />").attr('src',moreCity[a].items[b]).css('width','80px').
							css('height','80px').css('margin-right','15px');
							xxdiv.append(Ximg);
						}else{
							var Xa=$('<a href=\'#\'>'+moreCity[a].items[b]+'</a>');
							xxdiv.append(Xa);
						}						
					}	
				}
				var xxdiv1=$('<div></div>');
				var Dimg=$("<img />").attr('src',elem.moreCityImg);	
				xxdiv1.append(Dimg);
				li1.append(xxdiv1);
				
				li.on('mouseenter',function(){
//					$(this).css('background','#fff');
					ul2.css('display','block').css('background','#fff');
					
					
				}).on('mouseleave',function(){
//					$(this).css('background','rgba(0,0,0,0.7)');
					ul2.css('display','none');
				})
			})
		}
	}	
	return menuNav;
});