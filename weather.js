var weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C

module.exports = {
  weather: function (city) {
    query = {
      search : city,
      degreeType : 'F',
    };

    return new Promise((resolve, reject) => {
      weather.find(query, function(err, result) {
          if(err) return reject(err);

          var weatherData = JSON.stringify(result, null, 2);
          var weatherSpeak = '';
          // weatherData에 이제 api로 받은 정보가 들어갈 것임
          // 적당한 조건에 의해 weatherSpeak에 문장을 만들어주면 됨.



          return resolve(weatherSpeak);
        });
    });
  },
}
