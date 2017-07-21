// function fun(ele){
		// 	var details = $("#cake_meau");
		// 	// details.css("display","none")
		// 	if (details.is(":visible")==false) {
		// 		// details.css("display","block");
		// 		details.is(":visible");
		// 		$(ele).attr("src","../images/hide.png");
		// 		// console.log(details);
		// 	}else if(details.is(":hidden")==false){
		// 		console.log("===+--=-=-=");
		// 		details.is(":visible");
		// 		$(ele).attr("src","../images/hide.png");
		// 	}else{
		// 		details.is(":visible");
		// 	}
			
		// }
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

		// }
			

		
	 