
	var numtext=$(".num");
	console.log(numtext);
	$("#cart_box").css("bottom","-500px");
	$("#select_go").click(function(){
	 	$("#cart_box").animate({"bottom":"0"},1000);
	})
	$("#wrong").click(function(){
		console.log(123);
		$("#cart_box").css("bottom","-500px");
	})

	    var price=$(".money");
		var five = $(".five_word");
		var three = $(".three_word");
		var two = $(".two_word");
		var img = $("#small");
		var bulk =  $(".bulk");
		var person =  $(".person");
		var tableware =  $(".tableware");
		var booking =  $(".booking");
		var money = $("#cart_money");
		two.click(function(){
				two.css("border","none");
				three.css("border","none");
				numtext.text("已选择："+two.text());
				five.css("border","none");
				two.css("border","1px solid rgb(0,0,0)");
				img.attr("src","../images/small.jpg");
				price.text("443.00");
				money.text(price.text());
				bulk.text("17*17");
				person.text("适合7-8人分享");
				tableware.text("含10套餐具");
				booking.text("须提前5小时预订");
			})
		five.click(function(){
				five.css("border","1px solid rgb(0,0,0)");
				two.css("border","none");
				three.css("border","none");
				numtext.text("已选择:"+five.text());
				img.attr("src","../images/big.jpg");
				price.text("1,003.00");
				money.text(price.text());
				bulk.text("30*30");
				person.text("适合15-20人分享");
				tableware.text("含20套餐具");
				booking.text("须提前24小时预订");
			})

		three.click(function(){
				three.css("border","1px solid rgb(0,0,0)");
				two.css("border","none");
				five.css("border","none");
				numtext.text("已选择："+three.text());
				img.attr("src","../images/middle.jpg");
				price.text("643.00");
				money.text(price.text());
				bulk.text("23*23");
				person.text("适合11-15人分享");
				tableware.text("含15套餐具");
				booking.text("须提前5小时预订");
			})  