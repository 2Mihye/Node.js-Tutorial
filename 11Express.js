/*
 Express

 - Node.js는 낮은 레벨이다. (일반적으로 웹 앱을 만들려면 프레임워크가 필요하다.)
 - Express는 Node.js용 웹 개발 프레임워크이다.
 */

/*
  Express 설치하기:
 'npm install --save express'

 메모: '--save' 플래그를 사용하면 모듈을 설치하는 것 외에도 필요한 정보를 추가하여 의존성 파일(package.json)에 추가한다.
 */

// 웹 애플리케이션을 시작하기위해 라이브러리를 로드
var express = require("express");

// express의 인스턴스 만들기
var app = express();

// 엔드 포인트 정의
// '/'가 root route
app.get("/", function (request, response) {
  // 파일 시스템에서 파일을 읽어 응답으로 전송
  response.sendFile(__dirname + "/README.md");
});
// 포트 8080에서 요청을 수신
app.listen(8080);

/*
 다음 코드를 입력하여 노드를 실행하고 엔드 포인트를 생성한다.
 node '11Express.js'

 다음 코드를 입력하고 파일을 포함하고 있는 HTTP요청을 개발자의 로컬 서버에 만든다.
 curl  http://localhost:8080

 나와야 할 결과물:
 - README.md 파일이 포함된 HTTP 응답
 */
