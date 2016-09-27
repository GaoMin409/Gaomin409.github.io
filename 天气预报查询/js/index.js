var weatherArr = [];
var html = template('table', {
    list: weatherArr
});
document.querySelector('#container').innerHTML = html;
getWeatherInfo(101180101, "郑州");

function doSearch() {

    getCityInfo(document.querySelector('#city').value);
    weatherArr = [];
}

function getCityInfo(cityName) {
    $.ajax({
        url: 'http://apis.baidu.com/apistore/weatherservice/cityinfo',
        data: {
            cityname: cityName
        },
        method: "get",
        headers: {
            apikey: 'de2321dd06ebe93601a59ebcdef7cd8f'
        },
        dataType: 'json',

        success: function(cityInfo) {
            console.dir(cityInfo);
            if (cityInfo.errNum == -1) {
                alert('查询失败');
            }
            if(cityInfo.errNum == 0){
              // console.log(cityInfo.retData['cityCode']);
              // console.log(cityInfo.retData['cityName']);
              document.querySelector('#cityNameSpan').innerText = "[" + cityName + "]";
              getWeatherInfo(cityInfo.retData['cityCode'], cityInfo.retData['cityName']);
            }
        },
        error: function(err) {
            console.log(err);
        }
    });
}


function getWeatherInfo(cityCode, cityName) {
    // console.log(cityCode);
    $.ajax({
        url: 'http://apis.baidu.com/apistore/weatherservice/recentweathers',
        data: {
            cityname: cityName,
            cityid: cityCode
        },
        method: "get",
        headers: {
            apikey: 'de2321dd06ebe93601a59ebcdef7cd8f'
        },
        dataType: 'json',

        success: function(weatherInfo) {
            // console.dir(weatherInfo);


            var arr = [];

            // 获取历史7天的值
            var historys = weatherInfo.retData['history'];
            historys.forEach(function(item) {
                // console.log(item);
                var obj = {};
                obj.date = item.date;
                obj.week = item.week;
                obj.fengli = item.fengli;
                obj.fengxiang = item.fengxiang;
                obj.hightemp = item.hightemp;
                obj.lowtemp = item.lowtemp;
                obj.type = item.type;
                // console.log(obj);
                arr.push(obj);
            });

            // 获取今天天气值
            var todays = weatherInfo.retData['today'];
            // console.log(item);
            var obj = {};
            obj.date = todays.date;
            obj.week = todays.week;
            obj.fengli = todays.fengli;
            obj.fengxiang = todays.fengxiang;
            obj.hightemp = todays.hightemp;
            obj.lowtemp = todays.lowtemp;
            obj.type = todays.type;
            // console.log(obj);
            arr.push(obj);

            // 获取未来四天的值
            var forecasts = weatherInfo.retData['forecast'];
            forecasts.forEach(function(item) {
                // console.log(item);
                var obj = {};
                obj.date = item.date;
                obj.week = item.week;
                obj.fengli = item.fengli;
                obj.fengxiang = item.fengxiang;
                obj.hightemp = item.hightemp;
                obj.lowtemp = item.lowtemp;
                obj.type = item.type;
                // console.log(obj);
                arr.push(obj);
            });

            for (var z = arr.length - 1; z >= 0; z--) {

                weatherArr.push(arr[z]);
            }
            var html = template('table', {
                list: weatherArr
            });
            document.querySelector('#container').innerHTML = html;
        },
        error: function(err) {
            console.log(err);
        }
    });
}
