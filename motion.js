var Gpio = require('onoff').Gpio;
// exports 안에 코드를 넣어주면 됨
module.exports = {
  motion: function() {
    var motion = false, pir = new Gpio(4, 'in', 'both');

	pir.watch(function(err, value) {
		  if (err) exit();
			  console.log('Intruder detected');
			    if(value == 1) motion =true;
	});

	console.log('Pi Bot deployed successfully!');

	function exit() {
		    pir.unexport();
			  process.exit();
	}



    return motion;  // true 면 모션인식이 된 것으로 판단.
  }
}
