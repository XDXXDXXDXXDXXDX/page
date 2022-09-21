#include<stdio.h>
#include<stdlib.h>
int main() {
	char op;
	int seconds = 0, *s = &seconds;
	void shutPc(int *sec), calSec(int *sec);

	system ("title 定时关机"); //设定程序名
	system("color F0"); //设定前后景色
	system("mode con cols=60 lines=20"); //设置窗口大小

	printf("***********************使用说明***********************\n");
	printf("设定定时关机请输入 s 。\n");
	printf("取消定时关机请输入 c 。\n");
	printf("******************************************************\n");
	putchar(10);

	printf("请输入您想进行的操作：\n");
	//响应用户的操作命令
	do {
		op = getchar();
		switch(op) {
			case 'c': 
				system("shutdown -a"); 
				printf("定时关机已取消\n"); break; //取消定时关机 
			case 's': 
				calSec(s); //计算倒数的秒
				shutPc(s); //关机 
				break; //设定时间关机 
		}
	}while(op != 'e');

	return 0;
}

// 关闭计算机
void shutPc(int *sec) {
	char YorN, shutString[20];
	if(*sec == 0) {
		printf("确定要立即关闭计算机吗？（Y/N）\n");
		YorN = getchar();
		if(YorN == 'Y' || YorN == 'y') {
			sprintf(shutString, "shutdown -s -t %d", sec);
			system(shutString);
			printf("立即关机已经启用\n");
		}else{
			printf("立即关机已经取消\n");
		}
	}else{
		sprintf(shutString, "shutdown -s -t %d", *sec);
		system(shutString);
		printf("定时关机已经启用\n");
	}

	*sec = 0;
}

// 计算倒计时的秒
void calSec(int *sec) {
	char time[20];
	int i, cache = 0;

	putchar(10);
	printf("***********************定时说明***********************\n");
	printf("如想90分钟后自动关机，只需输入 90 即可。\n");
	printf("如想1小时30分钟后自动关机，可以输入 1h30m 。\n");
	printf("如想1小时30分钟40秒后自动关机，可以输入 1h30m40s 。\n");
	printf("******************************************************\n");
	putchar(10);

	printf("请输入倒计时时间（默认单位为分钟）\n");
	scanf("%s", time);
	for(i=0; time[i]!='\0'; i++) {
		switch(time[i]) {
			case 'h': *sec += cache * 3600; cache = 0; break; //将缓存中的数值转换成秒后清空缓存  
			case 'm': *sec += cache * 60; cache = 0; break; //将缓存中的数值转换成秒后清空缓存 
			case 's': *sec += cache; cache = 0; break; //将缓存中的数值转换成秒后清空缓存
			default : cache = cache * 10 + time[i] - 48;
		}
	}
	if(*sec == 0 && cache != 0) {
		*sec += cache * 60;
	}else{
		*sec += cache;
	}
}
