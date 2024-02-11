/*
 진행 상황 표시하는 파일 업로드 (스트림 사용)
 */

var fs = require("fs");
var http = require("http");

http
  .createServer(function (request, response) {
    var writeFile = fs.createWriteStream("largeFile_copy");
    // 요청에서 파일 크기를 가져온다.
    var fileBytes = request.headers["content-length"];

    // 이 변수는 업로드된 바이트를 추적하는 데 사용된다.
    var uploadedBytes = 0;

    request.on("readable", function () {
      var chunk = null;
      while (null !== (chunk = request.read())) {
        // 다음 코드는 파일 업로드 진행 상황을 계산하고 그것을 응답에 쓰는 역할을 한다.
        uploadedBytes += chunk.length;
        var progress = (uploadedBytes / fileBytes) * 100;
        response.write("progress: " + parseInt(progress, 10) + "%\n");
      }
    });

    request.pipe(writeFile);

    request.on("end", function () {
      response.end();
    });
  })
  .listen(8080);

console.log("Listening on port 8080...");
/*
 다음 코드를 입력하여 노드를 실행하고 파일을 읽는다.

 node '.\06Upload File with Progress.js'

 다음 코드를 입력하고 파일을 포함하고 있는 HTTP요청을 개발자의 로컬 서버에 만든다.

 curl --upload-file largeFile.txt http://localhost:8080

 나와야 할 결과물:

 - largeFile의 복사본이 파일 시스템에 만들어져 있어야 한다.
 - 콘솔에 진행률이 출력되어야 한다..

 */
