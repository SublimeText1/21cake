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
		if (small.css("display") =="none"){
				small.css("display","block");
				main.css("opacity","0.3");
				// main.css("background","yellow");
				// small.css("display","block");
			}else{
				small.css("display","none");
			    main.css("opacity","1");
			}
		}
		 function city(ntn){
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
		 		main.css("opacity","1");
		 	})						
			} 




	
			

		
	 