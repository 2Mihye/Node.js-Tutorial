/* 웹 소켓 (Web Sockets) */
/*
 - 웹 소켓은 클라이언트와 서버 간의 연결을 생성할 수 있다.
 - 이러한 연결에서 데이터는 실시간으로 이동할 수 있다.
 */

/* Socket.io */
/*
 - 실시간 애플리케이션에 훌륭한 도구
 - 클라이언트가 웹 소켓을 지원하지 않는 경우 대체 동작 제공

 소켓 설치:
 npm install --save socket.io
 */
var express = require("express");
var app = express();
// http 서버를 만들고 요청을 express에 전달
var server = require("http").createServer(app);
// socket.io 모듈을 로드하고 요청을 수신하기 위해 http 서버를 사용할 수 있도록 한다.
var io = require("socket.io")(server);

// 'connection' 이벤트를 수신하고 콜백 함수 정의
io.on("connection", function (client) {
  console.log("Client connected...");
  // 클라이언트에 'messages' 이벤트를 발생시키고 {socket: 'i.o'} 객체 전송
  client.emit("messages", { socket: "i.o" });

  client.on("fromClient", function (data) {
    console.log(data);
    // broadcast를 사용하여 연결된 모든 클라이언트에 메시지를 보내기
    client.broadcast.emit("fromServer", { fromServer: "fromServer" });
  });
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/socket.html");
});

server.listen(8080);

/*
 다음 코드를 입력하여 노드를 실행하고 socket.io 서버를 생성한다.
 node '13Socket.io.js'

 - 클라이언트측 코드는 socket.html을 볼 것

 브라우저: localhost:8080

 나와야 할 결과물:
 -"i.o"와 함께 console.log에서 숫자가 출력되어야 한다.
 - Node에서는 숫자가 계속 증가해야 한다.
 */
