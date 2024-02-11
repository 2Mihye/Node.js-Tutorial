/* 이벤트

 - DOM이 작동하는 방식과 비슷하게, Node.js는 이벤트를 트리거하고, 콜백함수를 다룬다.
 - Many objects in Node에서 많은 객체가 이벤트를 발생시키고, 대부분 이러한 이벤트들은 EventEmitter 생성자에서 상속된다.
 */
// EventEmitter 생성자 로드
var EventEmitter = require("events").EventEmitter;

// 이런 경우, 개발자는 로거가 리스너를 추가함으로 이벤트를 발생시키도록 하려한다.
var logger = new EventEmitter();

// 다음 코드는 에러 이벤트를 듣고, 콜백함수를 실행하는 문법을 보여준다.
logger.on("error", function (message) {
  console.log("ERR: " + message);
});

// 다음 코드는 에러 이벤트를 트리거한다.
logger.emit("error", "This is the first error");
logger.emit("error", "This is the second error");

/* 다음 코드를 입력하여 이벤트 수신/생성하기
 node '02Events.js'

 나와야 할 결과물:

 ERR: This is the first error
 ERR: This is the second error

 */
