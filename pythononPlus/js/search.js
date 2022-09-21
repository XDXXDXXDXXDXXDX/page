var headChoose = document.getElementsByClassName("head-like");
for(var i = 0; i < 2; i++) {
    (function bindC(i) {
        headChoose[i].addEventListener("click", function() {
            if(i == 0) {
                document.getElementsByClassName("know-show")[0].style.display = "block";
                document.getElementsByClassName("class-show")[0].style.display = "none";
                headChoose[0].className = headChoose[0].className + " " + "choose";
                headChoose[1].className = "class-show-head head-like";
            }else {
                document.getElementsByClassName("class-show")[0].style.display = "block";
                document.getElementsByClassName("know-show")[0].style.display = "none";
                headChoose[1].className = headChoose[1].className + " " + "choose";
                headChoose[0].className = "know-show-head head-like";
            }
        })   
    })(i)
}