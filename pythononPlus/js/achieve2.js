var time = new Date();
var min = document.getElementsByClassName("min")[0];
var sec = document.getElementsByClassName("sec")[0];
var timLeft = setInterval(timeFun,1000);

function timeFun() {
    if(sec.innerHTML > 0){
        sec.innerHTML = sec.innerHTML - 1;
        if(sec.innerHTML < 10) {
            sec.innerHTML = "0" + sec.innerHTML; 
        }
    }else if(sec.innerHTML == 0){
        if(min.innerHTML == 0) {
            alert("测试结束");
            clearInterval(timLeft);
            clearInterval(exeL);
        }else{
            sec.innerHTML = 59;
            min.innerHTML = min.innerHTML - 1; 
            if(min.innerHTML < 10) {
                min.innerHTML = "0" + min.innerHTML;    
            }
        }   
    }
}

//前进后退
var exeContainer = document.getElementsByClassName("exe-container");

var forward = document.getElementsByClassName("forward");
var forLength = forward.length;

var back = document.getElementsByClassName("back");
var backLength = back.length;

for(var i = 0; i < forLength - 1; i++) {
    (function bindGo(i) {
        forward[i].addEventListener('click', function(){
            exeContainer[i].style.display = "none";
            exeContainer[i + 1].style.display = "block";
            window.scrollTo(0,0);
        });
    })(i);
}

for(var i = 1; i < backLength; i++) {
    (function bindGo(i) {
        back[i].addEventListener('click', function(){
            exeContainer[i].style.display = "none";
            exeContainer[i - 1].style.display = "block";
            body.scrollTop=0;
        });
    })(i);
}

//答题进度展示
var inputClass = document.getElementsByClassName("chec");
var exeLeft = document.getElementsByClassName("exe-left-main")[0];
var exeCom = document.getElementsByClassName("completed")[0];
var checNum = inputClass.length;
var exeL = setInterval(exeLeftFun, 500);

function exeLeftFun() {
    var xCheck = 0;
    for(var i = 0; i < checNum; i++){
        if(inputClass[i].checked == true){
            xCheck++;
        }    
    }
    if(xCheck != 0) {
        exeLeft.innerHTML = xCheck;
        exeCom.style.width = xCheck * 16 + "px";
        exeCom.style.display = "block";
    }   
}

