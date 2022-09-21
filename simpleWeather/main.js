//获取天气数据的方法
function getWeather(u1, u2) {
    //实况天气数据请求
    var xhr1 = new XMLHttpRequest,
        url1 = u1 || "https://free-api.heweather.com/s6/weather/now?location=auto_ip&key=e6cccb7275d745a89c9b8e0b174e630d";
    
    xhr1.open("GET", url1, true);

    xhr1.onload = function() {
        if(this.status == 200) {
            var now = JSON.parse(this.responseText);
            var temp = now.HeWeather6["0"].now.fl;
            // console.log(now);
            getCity(now.HeWeather6["0"].basic.location);
            getTemperature1(temp);
            getWeather1(now.HeWeather6["0"].now.cond_txt);
            getUpdate(now.HeWeather6["0"].update.loc);
            //改变块的背景颜色
            changeColor(temp, "todayBox")
        }else if (this.status == 404) {
            alert("请检查网络连接");
        }
    }

    xhr1.send();

    //3天天气预报数据请求
    var xhr2 = new XMLHttpRequest,
        url2 = u2 || "https://free-api.heweather.com/s6/weather/forecast?location=auto_ip&key=e6cccb7275d745a89c9b8e0b174e630d";
    
    xhr2.open("GET", url2, true);

    xhr2.onload = function() {
        if(this.status == 200) {
            var forecast = JSON.parse(this.responseText);
            var forecast2and3 = [forecast.HeWeather6["0"].daily_forecast[1].cond_txt_d, forecast.HeWeather6["0"].daily_forecast[2].cond_txt_d];
            var day2and3Temp = [forecast.HeWeather6["0"].daily_forecast[1].tmp_max, forecast.HeWeather6["0"].daily_forecast[1].tmp_min, forecast.HeWeather6["0"].daily_forecast[2].tmp_max, forecast.HeWeather6["0"].daily_forecast[2].tmp_min]
            // console.log(forecast);
            getTemp2and3(day2and3Temp);
            getWeather2and3(forecast2and3);
            getImg(0,forecast.HeWeather6["0"].daily_forecast["1"].cond_code_d);
            getImg(1,forecast.HeWeather6["0"].daily_forecast["2"].cond_code_d);
            //改变块的颜色
            var tempMin1 = forecast.HeWeather6["0"].daily_forecast["1"].tmp_min;
            var tempMin2 = forecast.HeWeather6["0"].daily_forecast["2"].tmp_min;
            changeColor(tempMin1, "weather2Box");
            changeColor(tempMin2, "weather3Box");
            changeColor(tempMin1,"day2Temp");
            changeColor(tempMin2,"day3Temp");

        }else if (this.status == 404) {
            alert("请检查网络连接");
        }
    }

    xhr2.send();
}

//展示搜索框的方法
function showSearch() {
    document.getElementsByClassName('searchCity')[0].style.display = "block";
    document.getElementsByClassName('index')[0].style.display = "none";
}
//绑定事件当点击城市栏时跳转到搜索界面
document.getElementsByClassName('cityBox')[0].addEventListener('click',showSearch);

//改变当前城市的方法
function getCity(city) {
    document.getElementsByClassName('nowCity')[0].innerHTML = city;
}
//改变今天天气温度的方法
function getTemperature1(temp) {
    document.getElementsByClassName('temperature1')[0].innerHTML = temp;
}
//改变今天天气状态的方法
function getWeather1(weather) {
    document.getElementsByClassName('weather1')[0].innerHTML = weather;
}
//改变明天和后天的天气状态的方法
function getWeather2and3(weather) {
    document.getElementsByClassName('weather2')[0].innerHTML = weather[0];
    document.getElementsByClassName('weather3')[0].innerHTML = weather[1];
}
//改变明天和后天的气温的方法
function getTemp2and3(temp) {
    document.getElementsByClassName('day2Max')[0].innerHTML = temp[0];
    document.getElementsByClassName('day2Min')[0].innerHTML = temp[1];
    document.getElementsByClassName('day3Max')[0].innerHTML = temp[2];
    document.getElementsByClassName('day3Min')[0].innerHTML = temp[3];
}
//改变天气更新时间的方法
function getUpdate(date) {
    document.getElementsByClassName('update')[0].innerHTML = date;
}
//根据天气状态码改变天气图标的方法
function getImg(i,num) {
    document.getElementsByClassName('icon')[i].src = "./img/" + num + ".png";
}
//改变色块的方法
function changeColor(temp,box) {
    switch(true) {      
        case temp > 35:
            document.getElementsByClassName(box)[0].style.backgroundColor = "#FF4040";
            break;
        case temp > 30 && temp <= 35 :
            document.getElementsByClassName(box)[0].style.backgroundColor = "#FF6A6A";
            break;
        case temp > 25 && temp <= 30 :
            document.getElementsByClassName(box)[0].style.backgroundColor = "#fc9191";
            break;
        case temp > 20 && temp <= 25 :
            document.getElementsByClassName(box)[0].style.backgroundColor = "#FFB6C1";
            break;
        case temp <= 20 :
            document.getElementsByClassName(box)[0].style.backgroundColor = "#B0E2FF";
            break;
    }   
}
//点击2，3色块展示最高温和最低温,再次点击隐藏
(function showTemp() {
    var i = 0,
        j = 0;
    document.getElementsByClassName('weather2Box')[0].addEventListener('click',function(){
        if(i%2 == 0){
            document.getElementsByClassName('day2Temp')[0].style.visibility = "visible";
            i++;
        }else {
            document.getElementsByClassName('day2Temp')[0].style.visibility = "hidden";
            i++;
        }
    });

    document.getElementsByClassName('weather3Box')[0].addEventListener('click',function(){
        if(j % 2 == 0){
            document.getElementsByClassName('day3Temp')[0].style.visibility = "visible";
            j++;
        }else {
            document.getElementsByClassName('day3Temp')[0].style.visibility = "hidden";
            j++;
        }
    });
})();
//执行获取天气数据
getWeather();


