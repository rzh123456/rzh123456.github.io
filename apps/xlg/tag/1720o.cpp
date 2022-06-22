#include <cstdio>
#include <string>
#define string std::string
#define gc getchar()
string uid,tag;
bool isspc(char c){
	return c==' '||c=='\t'||c=='\r'||c=='\n'||c=='{'||c=='}'||c=='['||c==']'||c=='\"'||c==','||c==':'||c==EOF||c=='\0';
}
string reads(){
	string s="";
	char c=gc;
	while(isspc(c)){c=gc;if(c==EOF) return "";}
	while(!isspc(c)) s+=c,c=gc;
	return s;
}
int main(){
	bool f=0;
	freopen("taga.json","r",stdin);
	freopen("tagnewa.json","w",stdout);
	putchar('[');
	while(1){
		reads();
		uid=reads();
		if(uid==""){
			break;
		}
		reads();
		tag=reads();
		if(f){
			puts(","); 
		}
		else{
			puts("");
		}
		printf("{\"uid\":\"%s\",\"tag\":[{\"text\":\"%s\",\"tcolor\":\"#ffffff\",\"bcolor\":\"#00a2a2\",\"radius\":\"2\"}]}",uid.c_str(),tag.c_str());
		f=1;
	}
	puts("");
	putchar(']');
}
