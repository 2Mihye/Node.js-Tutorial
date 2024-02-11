/*
 * 모듈 (Modules)

- 현재 문맥에서 사용하기 위해 로드되는 라이브러리
- 'require' 키워드를 사용하여 로드된다.

*/
var moduleFunction = function () {
  console.log("Module loaded");
};
//  이 메서드를 공개로 만들려면 module.exports를 사용해야 한다.
// 'exports'는 'require'가 반환하는 것을 의미한다.
module.exports = moduleFunction;

// 함수를 명시적으로 공개 메서드로 설정하기 (이전 예제와 동일한 동작)
/*
 exports.moduleExport = function(){
 console.log("exports를 사용하여 모듈이 로드되었습니다");
 }
 */

/*
 실행하려면 "8 - Module Loader"로 이동
*/
