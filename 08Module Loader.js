// 'require'를 사용하여 사용자 지정 모듈을 로드한다.
var moduleFunction = require("./7modules");
// 사용자 지정 모듈에서 모든 익스포트 메서드를 사용할 수 있다.
moduleFunction();

// './'를 사용하여 모듈을 요청할 때, 애플리케이션과 동일한 디렉토리에서 해당 이름의 파일을 찾는다.
var makeRequest = require("./9 - http module");
makeRequest("http req 1");
makeRequest("http req 2");

// '../'를 사용할 때, 상위 디렉토리에서 찾는다.

// 디렉토리를 지정하지 않으면 현재 앱 내의 node_modules 디렉토리에서 찾는다.

// 'require'가 현재 앱에서 모듈을 찾지 못하면 node_modules 디렉토리 (홈 디렉토리 내)에서 찾을것이다.

/*
 다음 코드를 입력하여 노드를 실행하고 사용자 지정 모듈을 로드한다.

 node '.\08 - Module Loader.js'

 나와야 할 결과물:

 - "Module loaded"에서 '7Modules'
 - '9Http Module'에서 두 개의 HTTP 요청
 */
