var aUl = document.getElementById("aUl");
var aLis = aUl.getElementsByTagName("li");
var circlesLis = document.getElementById("circles").getElementsByTagName("li");
//信号量
var img_idx = 0; //取值范围 0,1,2,3,4

//自动播放
setInterval(function() {
	img_idx++;
	if (img_idx > 4) {
	img_idx = 0;
}
//调用函数
	chengPic();
}, 1000);

//小圆点的监听，要批量添加
//方法1 IIFE
for(var i = 0;i<circlesLis.length;i++){
    (function(a){
//监听
    circlesLis[a].onmouseover = function(){

    img_idx = a;

     //调用业务函数
    chengPic();  //这个函数帮你换图，帮你换小圆点是橙色还是紫色
    }

})(i);
 }
//业务函数
function chengPic() {

//去掉所有li的current类名
	for (var i = 0; i < aLis.length; i++) {
		aLis[i].className = "";
	}
//把当前信号量的图片li加上current类名
	aLis[img_idx].className = "current";
}