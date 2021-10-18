#include <cstdio>
int wit(int x,int y){
	if(y==0) return x;
	return wit(y,x%y); 
}
int main(){
	int a,b;
	puts("Guess what this is!\n"); 
	while(1){ 
		printf("Please input 2 integers (below 2^31-1):");
		scanf("%d%d",&a,&b);
		printf("Result:%d\n",wit(a,b));
	}
	return 0;
} 
