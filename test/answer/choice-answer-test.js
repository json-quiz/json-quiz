var assert = require('./../../assert')('choice-answer');

describe('Choice answer', function () {
  describe('Schema', function () {

    describe('A choice answer', function () {
      it('must be an array', function () {
        assert.hasError('choice-answer-is-not-an-array', {
          '': 'should be array'
        });
      });
      describe('Each answer', function () {
        it('must be an object', function () {
          assert.hasError('choice-answer-answer-is-not-an-object', {
            '[0]': 'should be object'
          });
        });
        it('must be unique', function () {
          assert.hasError('choice-answer-duplicate-answers', {
            '': 'items ## 0 and 1 are duplicate'
          });
        });
        it('must have a *choiceId* property', function () {
          assert.hasError('choice-answer-no-choiceid', {
            '[0].choiceId': 'property .choiceId is required'
          });
        });
        describe('The *choiceId* property', function () {
          it('must be a string', function () {
            assert.hasError('choice-answer-choiceid-is-not-a-string', {
              '[0].choiceId': 'should be string'
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