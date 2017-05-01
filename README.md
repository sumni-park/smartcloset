# Smartcloset

1. command line : ***npm install*** [필요한 모듈이 설치된다.]
2. weather.js 에서는 weatherSpeak에 출력할 메시지를 string형태로 만들어 주기만 하면 됨.
3. 모션센서는 제가 잘 몰라서.. 모션이 들어왔을때(민감도 조정 필요) motion을 true로 바꿔주면 됨.
4. main.js : 버그가 많을거라고 예상되나 일단 초기모델
* isMotion은 모션감지가 되었는지 3초 간격으로 감지한다.
* 감지되면 1초 후에 weather함수 호출
* 결과 넘어오면 음성으로 출력.
* 다시 isMotion을 false로 바꿔준다.

ppt : http://bit.ly/2oBaYQS
