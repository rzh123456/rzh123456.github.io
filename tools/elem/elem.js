var ele=new Array();
var ecnt=0;
function newele(eid,esym,ename,ear,eari){
	++ecnt;
	ele[ecnt]={id:eid,sym:esym,name:ename,ar:ear,ari:eari};
}
function init(){
	newele(1,"H","氢",1.008,1);
	newele(2,"He","氦",4.003,1);
	newele(3,"Li","锂",6.941,1);
	newele(4,"Be","铍",9.012,1);
	newele(5,"B","硼",10.81,1);
	newele(6,"C","碳",1.008,1);
	newele(7,"N","氮",1.008,1);
	newele(8,"O","氧",1.008,1);
	newele(9,"F","氟",1.008,1);
	newele(10,"Ne","氖",1.008,1);
}
function chquery(){

}