var word,prm,wlen;
var len;
var tbox,crt;
var delta=150;
var vname="q",word,info,interv;
function gebi(id){
	return document.getElementById(id);
}
function writeWord(){
	tbox.value+=word.charAt(crt);
	++crt;
	if(crt==wlen){
		clearInterval(interv);
	}
}
function bdyx(){
	info.innerHTML="这对你来说有那么难吗？"; 
	gebi("baiduyixia").className="baidua";
	setTimeout('window.location.href="https://www.baidu.com/s?wd="+word',250);
}
function anim(){
	tbox=gebi("bdinput");
	info.innerHTML="然后，输入你想要知道的内容"
	/*for(var i=0;i<wlen;++i){
		//window.setTimeout("tbox.value+=word.charAt("+i+");",100);
		//tbox.value+=word.charAt(i);
	}*/
	crt=0;
	interv=setInterval("writeWord();",delta);
	setTimeout('info.innerHTML="点击“百度一下”";',wlen*delta+500);
	setTimeout("bdyx();",wlen*delta+1200);
}
window.onload=function(){
	console.log("Baidu:https://www.baidu.com");
	console.log("This website is made by rzh.You can visit https://rzh123456.github.io to visit me!");
	prm=window.location.search;
	len=prm.length;
	info=gebi("info");
	//alert(window.location.search);
	if(prm.slice(0,vname.length+2)==("?"+vname+"=")){
		word=prm.slice(vname.length+2);
		//document.write(word);
	}
	else{
		word="";
		window.location.href="bdfs_gen.html";
	}
	word=decodeURI(word);
	wlen=word.length;
	setTimeout("anim();",1000);
	/*
		首先，打开百度 
		然后，输入你想要知道的内容 
		点击“百度一下” 
		这对你来说有那么难吗？ 
	*/
}
