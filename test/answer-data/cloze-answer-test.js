var assert = require('./../../assert')('cloze-answer');

describe('Cloze answer', function () {
  describe('Schema', function () {
    describe('A cloze answer', function () {
      it('must be an object', function () {
        assert.isValid('cloze-answer');
      });
      describe('A cloze answer data', function () {
        it('must be an array', function () {
          assert.hasError('cloze-answer-is-not-an-array', {
            '.data': 'should be array'
          });
        });
        describe('Each answer', function () {
          it('must be an object', function () {
            assert.hasError('cloze-answer-answer-is-not-an-object', {
              '.data[0]': 'should be object'
            });
          });
          it('must be unique', function () {
            assert.hasError('cloze-answer-duplicate-answers', {
              '.data': 'items ## 0 and 1 are duplicate'
            });
          });
          it('must have a *holeId* property', function () {
            assert.hasError('cloze-answer-no-holeid', {
              '.data[0].holeId': 'property .holeId is required'
            });
          });
          describe('The *holeId* property', function () {
            it('must be a string', function () {
              assert.hasError('cloze-answer-holeid-is-not-a-string', {
                '.data[0].holeId': 'should be string'
              });
            });
          });
          it('must have a *answerText* property', function () {
            assert.hasError('cloze-answer-no-answertext', {
              '.data[0].answerText': 'property .answerText is required'
            });
          });
          describe('The *answerText* property', function () {
            it('must be a string', function () {
              assert.hasError('cloze-answer-answertext-is-not-a-string', {
                '.data[0].answerText': 'should be string'
              });
            });
          });
        });
      });
    });
  });
  
  describe('Examples', function () {
    assert.areValid([
      'cloze-answer'
    ]);
  });
});