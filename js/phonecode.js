var time;
  function get(ele){
    if(ele.value=="点击获取验证码" || ele.value=="重新获取验证码"){
      time=setInterval(get1,1000);
      ele.setAttribute("disabled","");
    }

  }
  var num =60;
  function get1(){
    var input=document.getElementById("sure1");
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