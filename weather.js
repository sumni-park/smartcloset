var weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C

module.exports = {
  weather: function (city) {
    query = {
      search : city,
      degreeType : 'C',
    };
    console.log('start');
    return new Promise((resolve, reject) => {
      weather.find(query, function(err, result) {
          if(err) return reject(err);

          var weatherData = JSON.stringify(result, null, 2);
          var weatherSpeak = "";
          // weatherData에 이제 api로 받은 정보가 들어갈 것임
          // 적당한 조건에 의해 weatherSpeak에 문장을 만들어주면 됨.
	  var curr_skycode = result[0].current.skycode;
	  var curr_date = result[0].current.date;
       	  var curr_temp = result[0].current.temperature;
	  var td_low = result[0].forecast[1].low;
	  var td_high = result[0].forecast[1].high;
	  var yd_high = result[0].forecast[1].high;
 	  var skytext = "";
          var cmptext = "";
          var dateArr = curr_date.split('-');
    
          if((curr_skycode<=4 && curr_skycode>=1)||curr_skycode == 17)  skytext = "뇌우를 동반한 폭우가 예상됩니다. 우산을 챙기시고 가급적 외출을 삼가십시오." //thunderstorm
          else if (curr_skycode == 5 || curr_skycode == 7 ||curr_skycode == 10) skytext ="눈비가 내릴 것으로 예상되오니 우산을 챙기세요."; //rain_snow
          else if (curr_skycode == 6) skytext ="비나 진눈깨비가 내릴 것으로 예상되오니 우산을 꼭 챙기십시오.";  //sleet
          else if (curr_skycode == 8||curr_skycode == 9||curr_skycode == 25) skytext ="차갑고 매서운 바람이 예상되오니 따뜻하게 입으시고 가능한 목도리와 마스크를 착용바랍니다."; //icy
          else if (curr_skycode == 11||curr_skycode == 18||curr_skycode == 40) skytext ="소나기가 예상됩니다. 우산을 챙기시길 바랍니다."; //showers
          else if (curr_skycode == 12 ) skytext ="비가 올 예정입니다. 우산을 꼭 챙기시길 바랍니다."; //rain
          else if (curr_skycode == 13) skytext ="눈보라가 몰아칠 것으로 예상됩니다. 가급적 외출을 피하시고, 목도리와 장갑을 끼는 것이 좋을 것 같습니다."; //flurries
          else if(curr_skycode == 14 || curr_skycode == 15 || curr_skycode == 16 || curr_skycode == 42 || curr_skycode == 43 ) skytext = "다소 많은 눈이 예상되오니 우산을 챙기시고 목도리와 장갑을 착용하시길 바랍니다."; //snow
          else if(curr_skycode == 19 ) skytext = "먼지가 농도가 높을 것으로 예상되오니 반드시 마스크를 착용하시기 바랍니다."; //dust
          else if(curr_skycode == 20 ) skytext = "짙은 안개가 낄 것으로 예상되오니 교통안전에 유의하시길 바랍니다."; //fog
          else if(curr_skycode == 21 || curr_skycode == 22 ) skytext = "안개가 낀 곳이 많으니 교통 안전에 유의하시길 바랍니다.";//haze
          else if(curr_skycode == 23||curr_skycode == 24 ) skytext = "다소 강한 바람이 예상되오니 옷차림에 각별히 신경쓰셔야 겠습니다."; //windy
          else if(curr_skycode == 26) skytext = "다소 구름이 많을 전망입니다.";//cloudy
          else if(curr_skycode == 27||curr_skycode == 28) skytext = "대체로 구름이 많습니다.";//most_cloudy
          else if(curr_skycode == 29||curr_skycode == 30) skytext = "가끔 구름이 끼겠지만 대체로 맑습니다."; //partly_cloudy
          else if(curr_skycode == 31||curr_skycode == 32) skytext = "다소 포근한 날씨입니다."; //sunny
          else if(curr_skycode == 33 ||curr_skycode == 34) skytext = "대체로 맑고 더울 것으로 예상됩니다. 옷차림을 한결 가볍게 준비하셔도 될 것 같습니다."; //mostly sunny
          else if(curr_skycode == 36) skytext = "무더위가 예상되오니 통풍이 잘되는 시원한 옷차림을 준비하세요."; //hot
          else if(curr_skycode == 37 || curr_skycode == 38 || curr_skycode == 47) skytext = "뇌우를 동반한 폭우가 내릴 가능성이 있습니다. 우산을 챙기시고 가급적 외출을 삼가십시오."; //chance_of_tstorm
          else if(curr_skycode == 39||curr_skycode == 45) skytext = "비가 올 가능성이 있으니 우산을 챙기시길 바랍니다."; //chance_of_rain
          else if(curr_skycode == 41||curr_skycode == 46) skytext = "눈이 올 가능성이 있으니 목도리와 우산을 챙기시길 바랍니다."; //chance_of_snow
          else if(curr_skycode == 44) skytext = "별일없읍읍읍";   //na
    
          if(td_high>yd_high) cmptext = "어제보다 높습니다.";
          else if(td_high==yd_high) cmptext = "어제와 비슷합니다.";
          else cmptext = "어제보다 낮습니다.";
    
          if(td_high-td_low>=10) cmptext+="크게 벌어지는 일교차에 대비하여 옷차림 하셔야겠습니다. ";
          weatherSpeak += dateArr[1]+"월" + dateArr[2]+"일 "+"현재 서울 기온은 " + curr_temp + "도로 "+ skytext;
	  weatherSpeak += "오늘 하루 최저 기온은 " + td_low + "도 최고 기온은 " + td_high +"도로 " + cmptext;

          return resolve(weatherSpeak);
        });
    });
  },
}
