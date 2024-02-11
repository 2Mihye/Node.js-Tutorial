<a name="README">[<img src="https://martinchavez.github.io/Assets/Logos/nodejsfull.svg" heigth="300px" width="300px"/>](https://nodejs.org)

# Node.js: Tutorial

이 튜토리얼을 Node.js를 배우기위한 가이드로 사용하세요. 각각의 유닛에는 실행되는 예제가 포함된 주석이 달린 수업이 있습니다.

# Topics

- 소개
- 이벤트
- Streams
- 파일 시스템 조작
- 파일 업로드
- 모듈
- NPM
- Express
- Express Routes
- Socket.io
- Redis를 사용한 데이터 지속

# Suggested prerequisites

<a name="README">[<img src="https://martinchavez.github.io/Assets/Logos/javascript.svg" width="50px" height="50px" />](https://github.com/MartinChavez/Learn-Javascript)</a>

# 소개

```Javascript
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
```

# 이벤트

```Javascript
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
```

# Streams

```Javascript
/* 스트림(Streams)

 네트워크 액세스나 디스크의 파일에 일관적으로 의존하는 애플리케이션을 작성할 때, 데이터가 어떻게 전송되고 있는지를 이해하고 최적화하는 것이 중요하다.
 그것은 Node.js의 훌륭한 사용 예시이다.

 - 스트림은 데이터가 흐르는 채널같은 것이다.
 - 두 가지 주요한 유형 : 읽을 수 있는(Readable) 것과 쓸 수 있는(Writeable) 것
 - Readable 스트림: EventEmitter에서 상속된다.

 */
var http = require("http");

// 'request'는 readable 스트림
// 'response'는 writeable 스트림
http
  .createServer(function (request, response) {
    // 아래 예제에서 클라이언트로부터 받은 데이터를 콘솔에 출력
    response.writeHead(200);

    request.on("readable", function () {
      var chunk = null;
      while (null !== (chunk = request.read())) {
        response.write(chunk);
        console.log(chunk);
      }
    });
    request.on("end", function () {
      response.end("- end of request");
    });
  })
  .listen(8080);

// 위 예제를 아래 코드를 사용하여 간소화할 수 있음
/*
 http.createServer(function (request, response) {
 response.writeHead(200);
 // pipe는 읽을 수 있는 스트림에서 읽자마자 쓰기 가능한 스트림으로 쓰기를 돕는다.
 request.pipe(response);
 }).listen(8080);
 */

console.log("Listening on port 8080...");

/*
 다음 코드를 입력하여 노드와 서버 실행

 node '.\03Streams.js'

 다음 코드를 입력하여 로컬 서버에 HTTP 요청

 curl -d 'from client' http://localhost:8080

 나와야 할 결과물:

 "from client- end of request"
 */
```

# 모듈

```Javascript
/*
 * 모듈 (Modules)

- 현재 문맥에서 사용하기 위해 로드되는 라이브러리
- 'require' 키워드를 사용하여 로드된다.

*/
var moduleFunction = function () {
  console.log("Module loaded");
};
//  이 메서드를 공개로 만들려면 module.exports를 사용해야 한다.
// 'exports'는 'require'가 반환하는 것을 의미한다.
module.exports = moduleFunction;

// 함수를 명시적으로 공개 메서드로 설정하기 (이전 예제와 동일한 동작)
/*
 exports.moduleExport = function(){
 console.log("exports를 사용하여 모듈이 로드되었습니다");
 }
 */

/*
 실행하려면 "8 - Module Loader"로 이동
*/
```

# 설치

```Terminal
npm install
```

# 튜토리얼 실행 (각 파일에 번호 지정되어있음)

```Terminal
node '01Introduction.js'
```

```Terminal
node '02Events.js'
```

```Terminal
node '03SStreams.js'
```
