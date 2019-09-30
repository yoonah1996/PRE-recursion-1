// test cases are described in fixtures.js
describe('stringifyJSON', function(){
  it('내장 `JSON.stringify` 함수를 실행했을 때와 같은 결과를 리턴해야 합니다.', function(){

    stringifiableObjects.forEach(function(test){
      const expected = JSON.stringify(test);
      const result = stringifyJSON(test);
      expect(result).to.equal(expected);
    });

    unstringifiableValues.forEach(function(obj){
      const expected = JSON.stringify(obj);
      const result = stringifyJSON(obj);
      expect(result).to.equal(expected);
    });

  });
});
