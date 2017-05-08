var motion = require('./motion.js');


var isMotion = false; // 모션이 들어왔는지 확인하는 변수
console.log('start');

// setInterval(execution, 2000);

motion.motion();
/*
function execution() {
  isMotion = motion.motion();
  console.log('isMotion : ', isMotion);
  if(isMotion) {
    weather.weather('Seoul')
    .then((weatherSpeak) => {
      say.speak(weatherSpeak, 'Victoria');
      isMotion = false;
      delay(10000);
    });
  }
}
*/
