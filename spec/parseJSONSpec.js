// test cases are described in fixtures.js
describe('parseJSON', function(){
  it('내장 `JSON.parse` 함수를 실행했을 때와 같은 결과를 리턴해야 합니다.', function(){
    parseableStrings.forEach(function(test){
      const result = parseJSON(test);
      const expected = JSON.parse(test);
      const equality = _.isEqual(result, expected); // 왜 이곳에서 `===`를 사용하지 않을까요?
      expect(equality).to.equal(true);
    });
  });

  it('유효하지 않은 JSON 형식이 주어지면 Error를 발생시켜야합니다.', function(){
    unparseableStrings.forEach(function(test){
      const fn = function(){
        parseJSON(test);
      }
      // if you'd prefer, you can write your version of parseJSON 
      // so that it passes this test instead of the one on line 20. 
      // expect(parseJSON(test)).to.equal(undefined);
      expect(fn).to.throw(SyntaxError);
    });
  });

});
