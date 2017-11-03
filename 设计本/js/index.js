var oUl = document.getElementsByTagName("ul")[0];
var aLi = document.getElementsByTagName("li");
var oYou = document.getElementById("you");
var aDiv = oYou.getElementsByTagName("div");
		
for (var i = 0;i<aLi.length;i++) {
	//编号
	aLi[i].index = i;
	aDiv[i].style.display = "none";
	aDiv[0].style.display = "block";
	//给一级每个都加上一个点击事件
	aLi[i].onmouseover = function(){
		//排他 	让所有样式清空
		for (var j = 0;j<aLi.length;j++) {
			aDiv[j].style.display="none";
			
		}
		//单独给当前元素、对应元素加上样式
		aDiv[this.index].style.display="block";
	}
}
			
