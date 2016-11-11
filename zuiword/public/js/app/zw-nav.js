define(['jquery','app/url','ajax'],function($,url,xhr){
	function creatNav(){
		$.ajax({
			type:"get",
			url:url.getBaseURL()+'/nav',
			async:true,
			success:callback
		});
		var navbox=$('.zw-nav');
		var ul=$('<ul></ul>');
		navbox.append(ul);
		function callback(data){
			data.forEach(function(elem,index){
				var li=$("<li></li>");
				var a=$("<a href="+elem.Url+"></a>");
				a.html(elem.title);
				li.append(a);
				ul.append(li);	
			});			
		}
	}
	return creatNav;
});