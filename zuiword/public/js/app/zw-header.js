define(['jquery'],function($){
	function creatBanner(){
		var ul=$('#seach-map');
		var flag = false;
		var iptli=$('#iptli').css({
			'height': '27px',
			'width' : '160px',
			'position':'relative',
			'overflow':'hidden'
		});
		var imgBg=$('#iptli img').css({
			'position':'absolute',
			'top':'6px',
			'left':'135px'
		})
		var ipt=$('#ipt').css({
			'position':'absolute',
			'top':'5px',
			'left':'160px'
		});
		iptli.on('mouseenter',function(){
			ipt.animate({'left':'0px'},100);
			imgBg.attr('src','img/seach-bg.gif')
		}).on('mouseleave',function(){
			console.log(flag);
			if(flag){
				ipt.stop();
			}else{
				ipt.animate({'left':'160px'},100);
				imgBg.attr('src','img/logo-bg4.gif');
			}
			
		})
		
		ipt.focus(function(){
			flag = true;
			var data = '';
			//键盘事件
			$(this).keydown(function(e){
				ul.html('');
				if (ipt.val() == '') {
					data ='';
				};
				//判断按下的键是否是0-9或a-z或退格键
				if ((e.keyCode <= 57 && e.keyCode >= 48) || (e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode == 8) {
					if (e.keyCode == 8) {
						data = data.substring(0 , data.length - 1);
					}else{
						data += e.key;//写入的数据,字符串拼接
					}
				}
				
					$.ajax({
						type:"get",
						url:"http://localhost:7000/ajax/" + data,
						async:true,
						success:handle
					});				
					function handle(data){
						var arr=JSON.parse(data).data.list;
						arr.forEach(function(elem,index){
							var li=$('<li></li>');
							ul.append(li);
							if(elem.belong_name){
								if(elem.src){									
									var img=$('<img/>').attr('src',elem.src).css({
										'height':'20px',
										'width':'20px',
										'margin-left':'10px',
										'margin-right':'10px'										
									});
									li.append(img);
									var span=$('<a href=\'#\'>'+elem.belong_name+'</a>');
									li.append(span);
								}else{
									var span=$('<a href=\'#\'>'+elem.belong_name+'</a>');
									li.append(span);
								}
								
							}
						
						})
						
				}
		}).blur(function(){
			flag=false;
			ipt.animate({'left':'160px'},100);
			imgBg.attr('src','img/logo-bg4.gif');
			ul.html('');
			ipt.val('');
			
		});
	});
}
	return creatBanner;


});