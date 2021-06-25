rzhframe();
function id(x) {
	if (typeof x == "string")
		return document.getElementById(x);
	return x;
}
function rzhframe(){
	//document.getElementsByTagName("title")[0].innerText="Rzh's Website";
	//document.title;
	var httl=id("HeaderTitle");
	var hmnu=id("HeaderMenu");
	httl.innerHTML="Rzh's Website";
	hmnu.innerHTML='';
	hmnu.innerHTML+='<a href="/index.html" class="top"><li class="top">首页</li></a>'
	hmnu.innerHTML+='<a href="/articles/list.html" class="top"><li class="top">列表</li></a>'
	hmnu.innerHTML+='<a href="/articles/tools.html" class="top"><li class="top">工具</li></a>'
}