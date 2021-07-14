var word,prm,wlen;
var len;
var tbox,crt;
var delta=150,mdelta=50;
var cnt=0;
var vname="q",word,info,interv;
var debugging=0;
var mouse,aim,crtx,crty,aimx,aimy;
var dx,dy;
var bdyxbtn;
function gebi(id){
	return document.getElementById(id);
}
function specchar(src){
	var srcl=src.length,ret="";
	var ctmp;
	for(var i=0;i<srcl;++i){
		ctmp=src.charAt(i);
		switch(ctmp){
			case '+':ret+="%2B";break;
			case ' ':ret+="%20";break;
			case '/':ret+="%2F";break;
			case '?':ret+="%2F";break;
			case '%':ret+="%2F";break;
			case '#':ret+="%2F";break;
			case '&':ret+="%2F";break;
			case '=':ret+="%2F";break;
			default:ret+=ctmp;
		}
	}
	return ret;
}
function getTop(e){
	var offset=e.offsetTop;
	if(e.offsetParent!=null){
		offset+=getTop(e.offsetParent);
	}
	return offset;
}
function getLeft(e){
	var offset=e.offsetLeft;
	if(e.offsetParent!=null){
		offset+=getLeft(e.offsetParent);
	}
	return offset;
}
function xmove(dis){
	mouse.style.left=(parseInt(mouse.style.left)+dis)+'px';
}
function ymove(dis){
	mouse.style.top=(parseInt(mouse.style.top)+dis)+'px';
}
function movems(){
	xmove(dx),
	ymove(dy);
	++cnt;
	if(cnt>20){
		clearInterval(interv);
	}
}
function move2(){
	xmove(dx);
	++cnt;
	if(cnt>20){
		clearInterval(interv);
	}
}
function slidems(ax,ay){
	dx=ax/20.0,
	dy=ay/20.0;
	interv=setInterval("movems();",mdelta);
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
	if(debugging){
		//gebi("baiduyixia").className="baidua mouse_hand";
		gebi("baiduyixia").className="baidua nomouse";
	}
	else{
		gebi("baiduyixia").className="baidua nomouse";
		setTimeout('window.location.href="https://www.baidu.com/s?wd="+specchar(word)',250);
	}
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
	bdyxbtn=gebi("baiduyixia");
	aimx=getLeft(bdyxbtn),
	aimy=getTop(bdyxbtn);
	//slidems(aimx,aimy);
	cnt=0;
	dx=(aimx-parseInt(mouse.offsetLeft))/20.0;
	setTimeout('interv=setInterval("move2();",mdelta);',wlen*delta+800);
	setTimeout("bdyx();",wlen*delta+mdelta*20+1200);
}
function rzh_bdfs_debug(){
	debugging=1;
	word="调试(Debug)";
	//gebi("html_main").className="";
	//gebi("bdinput").className="";
	//gebi("baiduyixia").className="baiduua mouse_hand";
	console.log("感谢您使用本网站！Thank you!");
}
window.onload=function(){
	console.log("Baidu:https://www.baidu.com");
	console.log("This website is made by rzh.Please visit me on https://rzh123456.github.io !");
	prm=window.location.search;
	len=prm.length;
	info=gebi("info");
	//alert(window.location.search);
	if(prm=="?debug"){
		rzh_bdfs_debug();
	}
	else{
		if(prm.slice(0,vname.length+2)==("?"+vname+"=")){
			word=prm.slice(vname.length+2);
			//document.write(word);
		}
		else{
			word="";
			window.location.href="bdfs_gen.html";
		}
		word=decodeURI(word);
	}
	wlen=word.length;
	aim=gebi("bdinput"),
	mouse=gebi("mouse");
	mouse.style.left=mouse.style.top=0;
	aimx=aim.offsetLeft+0,
	aimy=aim.offsetTop+10,
	crtx=crty=0;
	slidems(aimx,aimy);
	setTimeout("anim();",20*mdelta+250);
		/*
			首先，打开百度 
			然后，输入你想要知道的内容 
			点击“百度一下” 
			这对你来说有那么难吗？ 
		*/
}