var time;
  function fun(ele){
    if(ele.value=="点击获取验证码" || ele.value=="重新获取验证码"){
      time=setInterval(fun1,1000);
      ele.setAttribute("disabled","");
    }

  }
  var num =60;
  function fun1(){
    var input=document.getElementById("sure");
    if(num==0){
      clearInterval(time);
      input.value="重新获取验证码";
      num=60;
      input.removeAttribute("disabled");
    }else{
      num--;
      input.value="重新发送（"+num+"s）";
    }
  }