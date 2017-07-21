	var rou=false;
	$(".Arrow1").click(function(){
		if(rou){																																
			$(".Huairou").animate({"height":"0px"},1000);
			$(".Arrow1").attr('src','../images/Arrow.jpg');
			rou=false;
		}
		else{
			$(".Huairou").animate({"height":"350px"},1000);
			$(".Arrow1").attr('src','../images/animation4.jpg');
			rou=true;
		}
		
	})
		var chun=false;
	$(".Arrow").click(function(){
		if(chun){																																
			$(".Yichun2").animate({"height":"0px"},1000);
			$(".Arrow").attr('src','../images/Arrow.jpg');
			chun=false;
		}
		else{
			$(".Yichun2").animate({"height":"350px"},1000);
			$(".Arrow").attr('src','../images/animation5.jpg');
			chun=true;
		}
		
	})
		var Durian=false;
	$(".Arrow3").click(function(){
		if(Durian){																																
			$(".Thailand2").animate({"height":"0px"},1000);
			$(".Arrow3").attr('src','../images/Arrow.jpg');
			Durian=false;
		}
		else{
			$(".Thailand2").animate({"height":"350px"},1000);
			$(".Arrow3").attr('src','../images/animation5.jpg');
			Durian=true;
		}
		
	})