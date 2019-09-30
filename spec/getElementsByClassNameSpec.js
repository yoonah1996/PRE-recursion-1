const htmlStrings = [
  '<p class="targetClassName"></p>',
  '<p class="otherClassName targetClassName"></p>',
  '<p><p class="targetClassName"></p></p>',
  '<p><p class="targetClassName"><p class="targetClassName"></p></p></p>',
  '<p><p></p><p><p class="targetClassName"></p></p></p>',
  '<p><p class="targetClassName"></p><p class="targetClassName"></p></p>',
  '<p><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></p>'
];

describe('getElementsByClassName', function(){

  it('내장 `getElementsByClassName` 함수를 실행시켰을 때와 같은 결과를 리턴해야 합니다.', function(){
    $('body').addClass('targetClassName');
    htmlStrings.forEach(function(htmlString){
      const $rootElement = $(htmlString);
      $('body').append($rootElement);

      const result = getElementsByClassName('targetClassName');
      const expectedNodeList = document.getElementsByClassName('targetClassName');
      const expectedArray = Array.prototype.slice.apply(expectedNodeList);
      const equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
      expect(equality).to.equal(true);

      $rootElement.remove();
    });
    $('body').removeClass('targetClassName');
  });

});
