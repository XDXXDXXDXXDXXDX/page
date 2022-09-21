var choose = document.getElementsByClassName("choose-cont");
var cont1 = document.getElementsByClassName("main-content1")[0];
var cont2 = document.getElementsByClassName("main-content2")[0];
for(var i = 0; i < 2; i++) {
    (function bindX(i){
        switch(i) {
            case 0:
            choose[0].addEventListener('click',function(){
                choose[0].className = "choose-cont choose-cont1 choose-ing";
                choose[1].className = "choose-cont choose-cont2";
                cont1.style.display = "block";
                cont2.style.display = "none";
            })
            break;
            case 1:
            choose[1].addEventListener('click',function(){
                choose[1].className = "choose-cont choose-cont2 choose-ing";
                choose[0].className = "choose-cont choose-cont1";
                cont2.style.display = "block";
                cont1.style.display = "none";
            });
            break;
        }
    })(i);
}

var on = document.getElementsByClassName("on");
var on1 = document.getElementsByClassName("on1")[0];
var on2 = document.getElementsByClassName("on2")[0];
var off = document.getElementsByClassName("off");
var line1 = document.getElementsByClassName("line1")[0];
var line2 = document.getElementsByClassName("line2")[0];
var show1 = true;
var show2 = true;

on[0].addEventListener('click',function(){
    if(show1 == true) {
        on1.style.display = "none";
        off[0].style.display = "block";
        line1.style.display = "none";
        show1 = false;
    }else{
        on1.style.display = "block";
        off[0].style.display = "none";
        line1.style.display = "block";
        show1 = true;
    }
});

on[1].addEventListener('click',function(){
    if(show2 == true) {
        on2.style.display = "none";
        off[1].style.display = "block";
        line2.style.display = "none";
        show2 = false;
    }else{
        on2.style.display = "block";
        off[1].style.display = "none";
        line2.style.display = "block";
        show2 = true;
    }
});

var us = document.getElementsByClassName("us");
var usImg = document.getElementsByClassName("us-img");
var liujiaoxing = document.getElementsByClassName("liujiaoxing");
us[0].addEventListener('click',function() {
    usImg[0].className = "us-img shwo-pur";
    usImg[1].className = "us-img";
    usImg[2].className = "us-img";
    liujiaoxing[0].className = "liujiaoxing shwo-pur";
    liujiaoxing[1].className = "liujiaoxing";
    liujiaoxing[2].className = "liujiaoxing";
});
us[1].addEventListener('click',function() {
    usImg[1].className = "us-img shwo-pur";
    usImg[0].className = "us-img";
    usImg[2].className = "us-img";
    liujiaoxing[1].className = "liujiaoxing shwo-pur";
    liujiaoxing[0].className = "liujiaoxing";
    liujiaoxing[2].className = "liujiaoxing";
})
us[2].addEventListener('click',function() {
    usImg[2].className = "us-img shwo-pur";
    usImg[0].className = "us-img";
    usImg[1].className = "us-img";
    liujiaoxing[2].className = "liujiaoxing shwo-pur";
    liujiaoxing[0].className = "liujiaoxing";
    liujiaoxing[1].className = "liujiaoxing";
})



