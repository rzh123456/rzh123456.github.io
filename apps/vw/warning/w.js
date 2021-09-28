var para;
function prev(){
	history.go(-1);
}
function main(){
	para=window.location.search;
	alert(para);	
}
window.onload=main;