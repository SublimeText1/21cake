function fun(ele){
	var details = $("#cake_meau");
		if (details.css("display")=="none") {
				details.css("display","block");
				$(ele).attr("src","../images/hide.png");
		}else if(details.css("display")=="block"){
				details.css("display","none");
				$(ele).attr("src","../images/top.png");
		}else{
				details.css("display","none");
		}		
	}
		function fun2(){
			var main=$("#cake_box");
			var small=$("#select_city");
			var big = $("#big");
		if (small.css("display") =="none"){
				small.css("display","block");
				big.css("display","block");
				// main.css("background","yellow");
				// small.css("display","block");
			}else{
				small.css("display","none");
			}
		}
		 function city(ntn){
		 	var big = $("#big");
		 	var sure= $("#sure");
		 	var main=$("#cake_box");
		 	var context =$("#select_city");
		 	console.log(context);
		 	$("p").removeClass("city_first");
		 	console.log($("p"));
		 	$(ntn).addClass("city_first");
		 	$("#sure").click(function(){
		 		$("#show").text($(ntn).text());
		 		context.css("display","none");
		 		big.css("display","none");
		 		
		 	})	
			} 
			function big(){
				var small=$("#select_city");
				var big = $("#big");
				small.css("display","none");
				big.css("display","none");

			}				



	
			

		
	 