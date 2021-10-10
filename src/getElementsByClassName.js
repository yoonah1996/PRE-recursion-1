/**
 * 1. Broswer에 존재하는 document.getElementsByClassName 함수를
 * 직접 구현해봅니다.
 * 
 * getElementsByClassName 함수는 현재 documnet에서 주어진
 * className을 가지고 있는 모든 html element를 찾는 함수입니다.
 * 
 * - 결과는 항상 배열의 형태로 리턴해줍니다.
 * - document.body, element.childNodes, element.classList를 사용해보세요
 * 
 * 2. 그냥 테스트 통과를 하고 싶으시다면, 다음과 같이 구현하면 될거예요.
 *  function getElementsByClassName (className) {
 *    return document.getElementsByClassName(className);
 *  };
 * 
 1. 결과를 담을 빈배열 result 생성
 2. html에서 class를 담고 있는 최상위 element인 body부터 class를 찾아내려감 -> document.body에서 시작
 3. 현재 element가 인자로 들어온 className을 포함하고 있으면, result배열에 추가
 4. element에 자식 element가 있으면, for문을 돌면서 recursion을 돌려주고, recursion을 통해 element가 지정된 className을 가지고 있는지 확인
 5. 자식 element가 없을때까지 recursion이 돌아간 후 result 배열을 리턴
 * 하지만 이 과제의 목적은 재귀를 공부하는 것이니, 처음부터 구현해봐야겠지요?
 */
function getElementsByClassName(className) {
  let result = [];  //className을 가지고 모든 html element를 저장할 배열
  let highelement = document.body;  //html의 최상위 클래스 element
  //재귀함수
  let recursion = function(element){
    //className을 가지고 있으면 result에 push해라
    if(element.classList.contains(className)){
      result.push(element);
    }
    //element의 자식이 0보다 크면(즉, 있으면) 재귀함수 실행
    if(element.children.length > 0){
      for(let i=0; i<element.children.length; i++){
        recursion(element.children[i]);
      }
    }
  }

  recursion(highelement);
  return result;

};