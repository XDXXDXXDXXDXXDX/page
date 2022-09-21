var title = document.getElementsByClassName("title");
var container = document.getElementsByClassName("test-sth-container");
for(var i = 0; i < 3; i++) {
    (function bindClick(i) {
        title[i].addEventListener('click', function(){
            switch(i) {
                case 0: title[0].className = title[0].className + " choose";
                        title[1].className = "title ability";
                        title[2].className = "title motivation";
                        container[0].style.display = "block";
                        container[1].style.display = "none";
                        container[2].style.display = "none";
                        break;
                case 1: title[1].className = title[1].className + " choose";
                        title[0].className = "title character";
                        title[2].className = "title motivation";
                        container[1].style.display = "block";
                        container[0].style.display = "none";
                        container[2].style.display = "none";
                        break;
                case 2: title[2].className = title[2].className + " choose";
                        title[0].className = "title character";
                        title[1].className = "title ability";
                        container[2].style.display = "block";
                        container[0].style.display = "none";
                        container[1].style.display = "none";
                        break;
            }
        });
    })(i); 
}