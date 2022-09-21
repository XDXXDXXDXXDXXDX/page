//查询城市的方法
function searchCity() {
    //获取用户输入的城市名并拼接成url
    var city = document.getElementsByClassName('cityName')[0].value;
    var u1 = "https://free-api.heweather.com/s6/weather/now?location=" + city + "&key=e6cccb7275d745a89c9b8e0b174e630d";
    var u2 = "https://free-api.heweather.com/s6/weather/forecast?location=" + city + "&key=e6cccb7275d745a89c9b8e0b174e630d";
    
    //尝试检查用户输入城市名是否合法
    var xhr = new XMLHttpRequest;
    xhr.open("GET", u1, true);
    xhr.onload = function() {
        if(this.status == 200) {
            //获取api返回的状态信息
            var status = JSON.parse(this.responseText).HeWeather6["0"].status;
            //如果城市名称输入正确的话则调用获取天气的方法，否则提示用户信息输入错误
            if(status == "ok") {
                getWeather(u1,u2);
                document.getElementsByClassName('searchCity')[0].style.display = "none";
                document.getElementsByClassName('index')[0].style.display = "block";
            }else{
                alert("请正确输入城市名！");
            }
        }else if (this.status == 404) {
            alert("请检查网络连接");
        }
    }
    xhr.send();
}

//绑定事件，分别是点击确认和返回时做的事
document.getElementsByClassName('search')[0].addEventListener('click',searchCity);
document.getElementsByClassName('back')[0].addEventListener('click', function() {
    document.getElementsByClassName('searchCity')[0].style.display = "none";
    document.getElementsByClassName('index')[0].style.display = "block";
})

function chooseCity() {
    var city = document.getElementsByClassName('city'),
        len = city.length;
        for(var i = 0; i < len; i++) {
            (function(num) {
                city[num].addEventListener('click', function() {
                    var u1 = "https://free-api.heweather.com/s6/weather/now?location=" + city[num].innerHTML + "&key=e6cccb7275d745a89c9b8e0b174e630d";
                    var u2 = "https://free-api.heweather.com/s6/weather/forecast?location=" + city[num].innerHTML + "&key=e6cccb7275d745a89c9b8e0b174e630d";
                    getWeather(u1,u2);
                    document.getElementsByClassName('searchCity')[0].style.display = "none";
                    document.getElementsByClassName('index')[0].style.display = "block";
                })
            })(i)
        }
}

chooseCity();