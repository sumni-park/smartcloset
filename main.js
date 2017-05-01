var weather = require('./weather.js');
var motion = require('./motion.js');
var say = require('say');


var isMotion = false;       // 모션이 들어왔는지 확인하는 변수

while (true) {
  setTimeout(() => {
    isMotion = motion.motion();
    if (isMotion) {
      setTimeout(() => {
        weather.weather()
        .then((weatherSpeak) => {
          say.speak(weatherSpeak, 'Alex', 0.5);
          isMotion = false;
        });
      },1000);
    }
  }, 3000);
}
