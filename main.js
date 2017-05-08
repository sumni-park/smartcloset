var weather = require('./weather.js');
var motion = require('./motion.js');
var say = require('say');


var isMotion = false; // 모션이 들어왔는지 확인하는 변수
console.log('start');

setInterval(execution.bind(this), 5000);

function execution() {
  isMotion = motion.motion();
  console.log('isMotion : ', isMotion);
  if(isMotion) {
    weather.weather('Seoul')
    .then((weatherSpeak) => {
      say.speak(weatherSpeak, 'Alex');
      isMotion = false;
    });
  }
}
