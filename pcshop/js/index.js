$(function(){
	//页面导航，分类列表功能
	$.get("http://h6.duchengjiu.top/shop/api_cat.php",function(data){
		var obj = data;
		
		for (var i = 0;i<obj.data.length;i++) {
			$("#nav").append('<li><a href="list.html?cat_id=' +obj.data[i].cat_id+ '">' + obj.data[i].cat_name + '</a></li>');
		}
	})
	//热门商品
	$.get("http://h6.duchengjiu.top/shop/api_cat.php",function(data){
		var obj = data;
		
		for (var i = 0;i<obj.data.length;i++) {
			$("#goodsUl").append('<li><img src="' +obj.data[i].goods_thumb+ '" /><p>' +obj.data[i].goods_name+ '</p><p>' +obj.data[i].goods_desc+ '</p><p class="price">' +obj.data[i].price+ '</p></li>');
		}
	})
})