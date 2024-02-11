/*
 파일 업로드(스트림 사용)
 */

var fs = require("fs");
var http = require("http");
// 이번 예제는 요청에서 읽어 파일로 전송한다.
http
  .createServer(function (request, response) {
    var writeFile = fs.createWriteStream("README_copy.md");
    request.pipe(writeFile);

    request.on("end", function () {
      response.end("uploaded");
    });
  })
  .listen(8080);
/*
 다음 코드를 입력하여 노드를 실행하고 파일을 읽는다.

 node '.\05Upload File.js'

 다음 코드를 입력하고 파일을 포함하고 있는 HTTP요청을 개발자의 로컬 서버에 만든다.

 curl --upload-file readme.md http://localhost:8080

 나와야 할 결과물:

 - README.md의 복사본이 파일 시스템에 만들어져 있어야 한다.
 - HTTP응답이 'uploaded'여야 한다.

 */
