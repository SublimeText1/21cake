function codes(n){
	var a = "azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789";
	var b = "";
	for (var i = 0; i < n; i++) {
		var index = Math.floor(Math.random()*62);
		b+=a.charAt(index);
	}
	return b;
};
function show(){
	document.getElementById('login').innerHTML = codes(4);
}
window.onload=show;