//点击注册相关提示错误
document.getElementsByClassName("sign-up")[0].addEventListener("click",showError);

//点击确定隐藏错误提示框
document.getElementsByClassName("confirm")[0].addEventListener("click",hideError);

//点击登陆执行的操作
document.getElementsByClassName("confirm-btn")[0].addEventListener("click",signOrError);

//展示错误其实框
function showError() {
    document.getElementsByClassName("no-sign")[0].style.display = "block";
}
//隐藏错误提示框
function hideError() {
    document.getElementsByClassName("no-sign")[0].style.display = "none";
}

//登陆相关操作
function signOrError() {
    var email = document.getElementsByClassName("email")[0].value;
    var password = document.getElementsByClassName("password")[0].value;
    var e = "linzihui";
    var p = "727476"
    if(email == e && password == p) {
        window.open("https://xdxxdxxdxxdxxdx.github.io/pythonon/inner.html","_blank");
    }else{
        document.getElementsByClassName("error")[0].style.display ="block";
        setTimeout(function(){
            document.getElementsByClassName("no-sign")[0].style.display = "none";      
        },3000);
    }  
}