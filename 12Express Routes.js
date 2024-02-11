/* Express Routes */

var express = require("express");
var request = require("request");
var url = require("url");
var crypto = require("crypto");
var app = express();

// 다음과 같은 문맥으로 엔드 포인트 생성
// ':'를 사용하여 동적 매개변수를 사용한다는 것을 지정
app.get("/images/:email", function (req, response) {
  // 요청 매개변수에서 정보 사용
  var email = req.params.email;
  // gravatar API는 'email' 매개변수의 해시를 필요로 한다.
  var hash = crypto.createHash("md5").update(email).digest("hex");

  // 일반적으로 옵션 세트를 객체로 지정할 수 있다.
  var options = {
    protocol: "http",
    host: "gravatar.com",
    pathname: "/avatar/" + hash,
    query: { size: 80 },
  };

  // URL로 요청을 만들기
  var gravatarUrl = url.format(options);

  // 요청을 응답으로 파이핑
  request(gravatarUrl).pipe(response);
});

app.listen(8080);

/*
 다음 코드를 입력하여 노드를 실행하고 엔드 포인트를 생성한다.
 node '.\12Express Routes.js'

 다음 코드를 입력하고 파일을 포함하고 있는 HTTP요청을 개발자의 로컬 서버에 만든다.
 curl -s http://localhost:8080/images/<gravatar_email>
 브라우저에서 실행: http://localhost:8080/images/<gravatar_email>

 나와야 할 결과물:
 - 브라우저: 아바타 이미지가 나타나야 한다.
 - 콘솔에서는 이미지의 바이트를 볼 수 있어야 합니다
 */
