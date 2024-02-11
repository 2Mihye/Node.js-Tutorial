/* HTTP 요청 모듈 */
// Node.js로 http 요청을 만드는 방법
var http = require("http");

var makeRequest = function (message) {
  // HTTP 요청의 옵션을 정의하기
  var options = {
    host: "localhost",
    port: 8080,
    path: "/",
    method: "POST",
  };

  // 요청을 초기화
  var request = http.request(options, function (response) {
    // 데이터를 수신할 때의 콜백 함수를 지정
    response.on("data", function (data) {
      // 이 경우에는 response body를 로깅
      console.log(data.toString());
    });
  });
  // 요청 시작
  request.write(message);
  // 요청 마침
  request.end();
};
// 전역 함수 선언
module.exports = makeRequest;

/*
 실행하려면 "8 - Module Loader"로 이동
 */
