var weather = require('./weather.js');
var motion = require('./motion.js');
var say = require('say');


var isMotion = false; // 모션이 들어왔는지 확인하는 변수
console.log('start');

setInterval(execution, 100);

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


function delay(gap){ /* gap is in millisecs */
  var then,now;
  then=new Date().getTime();
  now=then;
  while((now-then)<gap){
    now=new Date().getTime();  // 현재시간을 읽어 함수를 불러들인 시간과의 차를 이용하여 처리
  }
}
