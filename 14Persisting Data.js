/* 데이터 영속성 */
/*
 - Node는 많은 데이터베이스와 훌륭하게 작동한다.
 - 대부분의 데이터베이스는 논블로킹 드라이버를 가지고 있다.

 REDIS
 - Redis는 오픈 소스 (BSD 라이선스), 메모리 내 데이터 구조 저장소로 데이터베이스, 캐시 및 메시지 브로커로 사용된다.

 설치하기:
 "npm install redis --save"
 */

var redis = require("redis");
var client = redis.createClient();

// 키-값 항목을 설정하여 데이터베이스에 명령 설정
client.set("1", "one");
client.set("2", "two");
client.set("3", "three");

// 데이터베이스에서 값을 되찾아오기
client.get("1", function (err, reply) {
  // 명령은 non-blocking
  console.log(reply);
});

/*
 다음 코드를 입력하여  redis 클라이언트를 시작하고 데이터를 저장하고 검색한다. 
 node '14Persisting Data.js'

 나와야 할 결과물:
 - one on the cmd
 */
