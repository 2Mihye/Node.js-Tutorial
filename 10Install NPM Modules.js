/* npm */
/*
- Node.js의 패키지 관리자
- Node.js와 함께 설치된다.
- 모듈 저장소를 가지고있다. (npmjs.org)
- 내장된 의존성 관리
- 모듈을 쉽게 게시할 수 있음
*/

// 'request' 패키지 설치:
// 'npm install request' 입력 후 실행
// 이러면 모듈이 'node_modules' 디렉토리에 설치된다.

// 'g' 플래그를 사용하여 전역으로 실행 가능한 모듈을 설치할 수 있다.
// 'npm install typescript -g'

// 메모: 참고: 전역 npm 모듈은 require로 사용할 수 없으며 로컬로 설치해야 한다.

// 팁: 명령 줄에서 모듈을 검색하려면 다음 코드 사용:
// 'npm search <module>'

// Best Practice: Node 프로젝트를 만들 때 package.json 파일을 만들어 여러 옵션 (이름, 버전 등)을 지정해야 하지만,
// 가장 중요한 측면은 종속성을 즉, 응용 프로그램이 실행되기 위해 필요한 모듈을 지정해야 한다.

// 의존성이 지정된 후에는 다음 코드를 실행하여 이를 확인할 수 있다:
// 'npm install'
// 이렇게 하면 package.json 파일 내부를 확인하고 누락된 의존성을 가져옴.

// npm에서 가져온 모듈로 작업할 때는 node_modules 디렉토리가 모든 종속성을 포함하지 않으므로 'npm install'을 실행하여 생성해야 한다.

// 응용 프로그램에서 사용하는 모듈은 다른 모듈을 참조하는 package.json을 포함할 수 있다.
// 'npm install'은 모든 종속성을 설치하고 새로운 node_modules 디렉토리를 만든다.
