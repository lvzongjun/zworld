requirejs(['./common'],function (){
    requirejs(['app/zw-header','app/cw-content'],function(head,main){
		head();
		main();
	});  
});