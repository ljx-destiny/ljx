$.picAutoChange = function(){
	//自动切换
	function autoPlay(){
					
		//获取当前图片的路径(找到编号)
		var picId = $("img").attr("src").substr(7,1);//下标7开始截取1位
						
		var nextId = ++picId;
		//范围
		if(nextId == 5){
			nextId = 0;
		}
					
		$("img").prop("src","images/" + nextId + ".jpg")
	}
	setInterval(autoPlay,1000);
				
}