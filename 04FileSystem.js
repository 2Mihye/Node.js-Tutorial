/*
 파일 시스템 (스트림 사용)

  Node.js를 사용하여 파일 시스템에서 파일을 읽는 것은 스트림을 사용하면 간단하다.
 */
// 파일 시스템 모듈 요구
var fs = require("fs");
// 원본 파일에서 'read' 스트림을 만들기
var readFile = fs.createReadStream("README.md");
// 대상 파일에 'write' 스트림을 만들기
var writeFile = fs.createWriteStream("README_copy.md");
// pipe함수를 사용하면 스트리밍이 간단해진다.
// pipe 함수는 읽을 수 있는 스트림에서 모든 데이터를 끌어내어 지정된 목적지에 기록하며,
// 목적지가 빠르게 읽을 수 있는 스트림에 압도되지 않도록 하기위해 자동으로 흐름을 관리한다.
readFile.pipe(writeFile);

/*
 다음 코드를 입력하여 노드를 실행하고, 파일을 읽는다.

 node '.\04File System.js'

 나와야 할 결과물:

 README.md의 복사본이 파일 시스템에 만들어져야 한다.
 */
