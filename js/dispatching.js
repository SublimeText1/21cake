$(function(){ 
	$(".add").click(function(){ 
			var t=$(this).parent().find('input[class*=text_box]'); 
			t.val(parseInt(t.val())+1) 
		setTotal(); 
	}) 
	$(".min").click(function(){ 
		var t=$(this).parent().find('input[class*=text_box]'); 
		t.val(parseInt(t.val())-1) 
			if(parseInt(t.val())<0){ 
				t.val(0); 
			} 
		setTotal(); 
	}) 
	$(".min_two").click(function(){ 
		var t=$(this).parent().find('input[class*=text_box]'); 
		t.val(parseInt(t.val())-1) 
			if(parseInt(t.val())<0){ 
				t.val(0); 
			} 
		setTotal(); 
	})
	$(".min_three").click(function(){ 
		var t=$(this).parent().find('input[class*=text_box]'); 
		t.val(parseInt(t.val())-1) 
			if(parseInt(t.val())<0){ 
				t.val(0); 
			} 
		setTotal(); 
	})


	function setTotal(){ 
	var s=0; 
	$(".order_buy").each(function(){ 
		s += parseInt($(this).find('input[class*=text_box]').val())*200; 
	}); 
	$(".order_buy_two").each(function(){ 
		s += parseInt($(this).find('input[class*=text_box]').val())*200; 
	}); 
	$(".order_buy_three").each(function(){ 
		s += parseInt($(this).find('input[class*=text_box]').val())*200; 
	}); 
	$("#total").html(s.toFixed(2)); 
	} 
	setTotal(); 
	}) 
	
	var or = true;
	function order_sure(){
	var t = $("#text_box");
	if (or){
		$("#order_button").css("display","none");
		$(".order_buy").css("display","block");
		t.val(parseInt(t.val())+1);	
		}
	}
	function order_sure_two(){
		var t = $("#text_box");
		if (or){
			$("#order_button_two").css("display","none");
			$(".order_buy_two").css("display","block");
			t.val(parseInt(t.val())+1);
			
		}
	}

	function order_sure_three(){
		var t = $("#text_box");
		if (or){
			$("#order_button_three").css("display","none");
			$(".order_buy_three").css("display","block");
			t.val(parseInt(t.val())+1);
			
		}
	}

	$(function(){
		var t = $(".text_box");
		$(".min").click(function(){
			if (t.val()==0) {
				$("#order_button").css("display","block");
				$(".order_buy").css("display","none");
			}
		})
	})
	$(function(){
		var tt = $(".text_box_two");
		$(".min_two").click(function(){
			if (tt.val()==0) {
				$("#order_button_two").css("display","block");
				$(".order_buy_two").css("display","none");
			}
		})
	})
	$(function(){
		var ttt = $(".text_box_three");
		$(".min_three").click(function(){
			if (ttt.val()==0) {
				$("#order_button_three").css("display","block");
				$(".order_buy_three").css("display","none");
			}
		})
	})
