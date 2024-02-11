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
