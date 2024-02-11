/*
 * Node.js

 - 개발자가 자바스크립트를 사용하여 서버쪽으로 확장가능한 애플리케이션들을 만들 수 있다.
 - V8 JavaScript Runtime 위에서 작동된다. (크롬 브라우저에서 작동되는 것과 같음)

 * Node.js로 만들 수 있는 것

 - Web socket Server
 - File Upload client
 - 광고 Server
 - 실시간 데이터 앱

 * Node.js에 대한 오해

 - Node.js는 웹 프레임워크가 아니다.
 - Node.js는 멀티 스레드가 아니다.


 * 이벤트 루프란?

 - 노드가 처음으로 Java Script 코드를 해석하고, 그것을 실행하는 시점에 찾아낸 이벤트를 등록한다.
 - 스크립트가 실행됐을 때, 노드는 이벤트 루프를 시작하고 계속해서 이벤트를 확인한다.
 - 노드가 새로운 이벤트를 찾으면, 그러한 이벤트와 관련된 콜백을 트리거한다.
 - 개발자가 차단되지 않은 코드를 작성할 수 있도록 허용한다.

 * 이벤트 큐란?

 - 이벤트 루프를 위해 이벤트들을 대기열에 추가한다.
 - 한번에 하나씩 이벤트를 처리한다.

 */

/* Node.js 실행하는 법 */
// 노드 서버 만들고, HTTP응답 제공받기

// 'require' 키워드를 사용하여 모듈(라이브러리) 로드
var http = require("http");
// 일반적으로 대부분의 노드 모듈 메서드에 콜백함수를 명시해야한다.
http
  .createServer(function (request, response) {
    response.writeHead(200); // 헤더의 상태 코드
    response.write("Introduction"); // Response body
    response.end(); // 연결 종료
  })
  .listen(8080); // 노드가 연결을 수신할 포트

console.log("Listening on port 8080...");

/* 다음 코드를 입력하여 노드와 서버 실행
 node '01Introduction.js'
 */

/* 웹 화면에서 http 요청을 받기
 http://localhost:8080
 */
