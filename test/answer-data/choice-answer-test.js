var assert = require('./../../assert')('choice-answer');

describe('Choice answer', function () {
  describe('Schema', function () {
    describe('A choice answer', function () {
      it('must be an object', function () {
        assert.isValid('choice-answer');
      });
      describe('A choice answer data', function () {
        it('must be an array', function () {
          assert.hasError('choice-answer-is-not-an-array', {
            '.data': 'should be array'
          });
        });
        describe('Each answer', function () {
          it('must be a string', function () {
            assert.hasError('choice-answer-answer-is-not-a-string', {
              '.data[0]': 'should be string'
            });
          });
          it('must be unique', function () {
            assert.hasError('choice-answer-duplicate-answers', {
              '.data': 'items ## 0 and 1 are duplicate'
            });
          });
        });
      });
    });
  });
  
  describe('Examples', function () {
    assert.areValid([
      'choice-answer'
    ]);
  });
});