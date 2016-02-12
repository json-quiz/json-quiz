var assert = require('./../../assert')('short-answer');

describe('Short answer', function () {
  describe('Schema', function () {

    describe('A short answer', function () {
      it('must be an object', function () {
        assert.hasError('short-answer-is-not-an-object', {
          '': 'should be object'
        });
      });
      it('must have a *text* property', function () {
        assert.hasError('short-answer-no-text', {
          '.text': 'property .text is required'
        });
      });
      describe('The *text* property', function () {
        it('must be a string', function () {
          assert.hasError('short-answer-text-is-not-a-string', {
            '.text': 'should be string'
          });
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'short-answer'
    ]);
  });
});
