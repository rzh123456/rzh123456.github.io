var tg=new Array(),pg=new Array(),rs=new Array(),tl=new Array();
var tlshow=new Array();
var sel;
function gebi(strId){
	return document.getElementById(strId);
}
function checktag(){
	for(var i=1;i<=4;++i){
		if(i==sel){
			tg[i].className="tag sel";
			pg[i].className="opbox";
		}
		else{
			if(tg[i].className=="tag sel"){
				tg[i].className="tag";
				pg[i].className="opbox hidden";
			}
			else{
				pg[i].className="opbox hidden";
			}
		}
	}
}
function init(){
	tg[1]=gebi("tg1");
	tg[2]=gebi("tg2");
	tg[3]=gebi("tg3");
	tg[4]=gebi("tg4");
	pg[1]=gebi("pg1");
	pg[2]=gebi("pg2");
	pg[3]=gebi("pg3");
	pg[4]=gebi("pg4");
	sel=1;
	checktag();
}
function seltag(idx){
	sel=idx;
	checktag();
}
function sel0(){}
window.onload=function(){
	init();
}