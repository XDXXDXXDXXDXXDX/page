var input = document.getElementsByClassName("search-input")[0];
var serachImg = document.getElementsByClassName("search-img")[0];
document.addEventListener('keypress',function(e){
    if(e.keyCode == 13){
        if(input.value == "汽车工程师") {
            window.open("https://xdxxdxxdxxdxxdx.github.io/pythononplus/searchinner.html","_blank");
        }else{
            alert("请输入正确内容！");
        }        
    }
});

serachImg.addEventListener('click',function(){
    if(input.value == "汽车工程师") {
        window.open("https://xdxxdxxdxxdxxdx.github.io/pythononplus/searchinner.html","_blank");
    }else{
        alert("请输入正确内容！");
    }        
});