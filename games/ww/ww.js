var mp,nxt;
var h,w,interv,cw;
var scr;
var intId,running;
var dir=new Array(0, 0,1, 0,-1, 1,0, -1,0, 1,1, 1,-1, -1,1, -1,-1);
function init(){
	h=50;
	w=30;
	cw=25;
	interv=1000;
	running=0;
	mp=new Array();
	nxt=new Array();
	for(var i=1;i<=h;++i){
		mp[i]=new Array();
		nxt[i]=new Array();
		for(var j=1;j<=w;++j){
			mp[i][j]=0;
			nxt[i][j]=0;
		}
	}
	scr=document.getElementById("screen");
}
function getCls(x){
	switch(x){
		case 0:return "white";
		case 1:return "yellow";
		case 2:return "red";
		case 3:return "blue";
	}
	return 0;
}
function show0(x,p,a,b){
	var ele=document.createElement("LI");
	ele.className=getCls(x);
	ele.style.width=cw+"px";
	ele.style.height=cw+"px";
	ele.onclick=click(a,b);
	p.appendChild(ele);
}
function showRow(ri,p){
	var rowEle=document.createElement("UL");
	for(var i=1;i<=w;++i){
		show0(mp[ri][i],rowEle,ri,i);
	}
	p.appendChild(rowEle);
}
function show(p){
	scr.innerHTML="";
	for(var i=1;i<=h;++i){
		showRow(i,scr);
	}
}
function upd0(a,b){
	switch(mp[a][b]){
		case 0:{
			nxt[a][b]=0;
			break;
		}
		case 1:{
			var cnt=0;
			for(var i=1;i<=8;++i){
				if(getCol(a+getDir(i,0),b+getDir(i,1))==3){
					++cnt;
				}
			}
			if(cnt==1||cnt==2){
				nxt[a][b]=3;
			}
			else{
				nxt[a][b]=1;
			}
			break;
		}
		case 2:{
			nxt[a][b]=1;
			break;
		}
		case 3:{
			nxt[a][b]=2;
			break;
		}
	}
}
function getDir(a,b){
	return dir[(a<<1)-1+b];
}
function getCol(a,b){
	if(a<1||a>h||b<1||b>w){
		return 0;
	}
	return mp[a][b];
}
function update(){
	for(var i=1;i<=h;++i){
		for(var j=1;j<=w;++j){
			upd0(i,j);
		}
	}
	for(var i=1;i<=h;++i){
		for(var j=1;j<=w;++j){
			mp[i][j]=nxt[i][j];
		}
	}
}
function run0(){
	update();
	show();
}
function run(){
	if(!running){
		intId=setInterval(run0,interv);
		running=1;
	}
}
function stop(){
	if(running){
		clearInterval(intId);
		running=0;
	}
}
function click(a,b){
	return function(){
		var t=mp[a][b];
		mp[a][b]=(t+1)%4;
		show();
	}
}
window.onload=function(){
	init();
	show();
}
function save(){
	var txt="";
	for(var i=1;i<=h;++i){
		for(var j=1;j<=w;++j){
			if(mp[i][j]>0){
				txt+=i+" "+j+" "+mp[i][j]+" ";
			}
		}
	}
	txt+="-1 -1 -1";
	txt=btoa(txt);
	console.log(txt);
	copy(txt);
}
function copy(str) {
	let oInput=document.createElement('input');
	oInput.value=str;
	document.body.appendChild(oInput);
	oInput.select();
	document.execCommand("Copy");
	oInput.style.display='none';
	document.body.removeChild(oInput);
}
var ostr,readp;
function ascii(x){return x.charCodeAt(0);}
function isdigit(x){var xx=ascii(x);return xx>=48&&xx<=57;}
function gc(){return ostr.charAt(readp++);}
function read(txt){
	var f=1,t=0,c=gc();
	while(c!='-'&&(!isdigit(c))) c=gc();
	if(c=='-') f=-1,c=gc();
	while(isdigit(c)) t=10*t+ascii(c)-48,c=gc();
	return f*t;	
}
function load(){
	var txt=prompt("请输入存档数据：","");
	var a,b,c;
	txt=atob(txt);
	ostr=txt;
	readp=0;
	while(1){
		a=read();
		b=read();
		c=read();
		if(a==-1){
			break;
		}
		mp[a][b]=c;
	}
	show();
}