//点击注册相关提示错误
document.getElementsByClassName("sign-up")[0].addEventListener("click",showError);

//点击确定隐藏错误提示框
document.getElementsByClassName("confirm")[0].addEventListener("click",hideError);

//点击登陆执行的操作
document.getElementsByClassName("confirm-btn")[0].addEventListener("click",signOrError);

document.getElementsByClassName("input-sth")[0].addEventListener("click",function() {
    document.getElementsByClassName("error")[0].style.display ="none";  
});

document.getElementsByClassName("input-sth")[1].addEventListener("click",function() {
    document.getElementsByClassName("error")[0].style.display ="none";  
});

//展示错误其实框
function showError() {
    document.getElementsByClassName("no-sign")[0].style.display = "block";
}
//隐藏错误提示框
function hideError() {
    document.getElementsByClassName("no-sign")[0].style.display = "none";
}

//防止用户连续疯狂点击登陆
var canClick = true;

//登陆相关操作
function signOrError() {
    var email = document.getElementsByClassName("email")[0].value;
    var password = document.getElementsByClassName("password")[0].value;
    var e = "linzihui";
    var p = "727476"
    if(email == e && password == p) {
        window.open("https://xdxxdxxdxxdxxdx.github.io/pythononplus/inner.html","_blank");
    }else if(canClick == true) {
        canClick = false;
        document.getElementsByClassName("error")[0].style.display ="block";
        window.clearTimeout(hideError); 
        var hideError = setTimeout(function(){
            document.getElementsByClassName("error")[0].style.display = "none";
            canClick = true;      
        },3000);

    }  
}