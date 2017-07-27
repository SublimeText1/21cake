function fun(ele){
	var details = document.getElementById("cake_meau");
		if (details.style.display=="none") {
				details.style.display="block";
				ele.setAttribute("src","../images/hide.png");
				console.log(details);
		}else if(details.style.display=="block"){
				// console.log("===+--=-=-=");
				details.style.display="none";
				ele.setAttribute("src","../images/top.png");
		}else{
				details.style.display="none";
		}
			
}

function fun2(){
	var main = document.getElementById("cake_box");
		var small =document.getElementById("select_city");
		if (small.style.display =="none"){
			small.style.opacity = "1";
			small.style.display = "block";
		}else{
			small.style.display = "block";
			main.style.opacity = "0.5";
		}
}
		
function city(ntn){
		var sure= $("#sure");
		var main=$("#cake_box");
		var context=$("#select_city");
		console.log(context);
		$("p").removeClass("city_first");
		console.log($("p"));
		$(ntn).addClass("city_first");
		$("#sure").click(function(){
			$("#show").text($(ntn).text());
			context.css("display","none");
			main.css("opacity","1");
		})
}

$.ajax({
	url:"../php/zhangxu.php?type=present",
	type:"get",
	success:function(data){
		var obj = JSON.parse(data).data.goodsArr[1].goods;
		console.log(obj);
		for (var i = 0; i < obj.length; i++) {
			var li = $("<li class='list-box-li'></li>");
			var a = $("<a href='' class='list-pro-a'></a>");
			var img = $("<img src='' alt=''>");
			var size = $("<h3 class='size'></h3>");
			var span = $("<span></span>");
			var price = $("<span class='price'></span>");
			var span1 = $('<span class="cart-add"></span>');
			var img1 = $("<img src='' alt=''>");
			size.html(obj[i].en_name);
			span.html(obj[i].name);
			price.html('&yen;'+obj[i].price+'/'+obj[i].spec);
			img.attr("src",obj[i].img_url);
			img1.attr("src",obj[i].img_urls);
			a.append(img);
			a.append(size);
			a.append(span);
			a.append(price);
			li.append(a);
			span1.append(img1);
			li.append(span1);
			$(".list-box-ul").append(li);
		}
	}
})
// img1.append(span1);li.append(img1);