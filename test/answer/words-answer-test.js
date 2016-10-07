var assert = require('./../../assert')('words-answer');

describe('Words answer', function () {
  describe('Schema', function () {

    describe('A words answer', function () {
      it('must be an object', function () {
        assert.hasError('words-answer-is-not-an-object', {
          '': 'should be object'
        });
      });
      it('must have a *text* property', function () {
        assert.hasError('words-answer-no-text', {
          '.text': 'property .text is required'
        });
      });
      describe('The *text* property', function () {
        it('must be a string', function () {
          assert.hasError('words-answer-text-is-not-a-string', {
            '.text': 'should be string'
          });
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'words-answer'
    ]);
  });
});
