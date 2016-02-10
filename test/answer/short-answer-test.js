var assert = require('./../../assert')('short-answer');

describe('Short answer', function () {
  describe('Schema', function () {

    describe('A short answer', function () {
      it('must be an array', function () {
        assert.hasError('short-answer-is-not-an-array', {
          '': 'should be array'
        });
      });
      describe('Each answer', function () {
        it('must be an object', function () {
          assert.hasError('short-answer-answer-is-not-an-object', {
            '[0]': 'should be object'
          });
        });
        it('must not have less than one item', function () {
          assert.hasError('short-answer-less-than-1-item', {
            '': 'should NOT have less than 1 items'
          });
        });
        it('must not have more than one item', function () {
          assert.hasError('short-answer-more-than-1-item', {
            '': 'should NOT have more than 1 items'
          });
        });
        it('must have a *text* property', function () {
          assert.hasError('short-answer-no-text', {
            '[0].text': 'property .text is required'
          });
        });
        describe('The *text* property', function () {
          it('must be a string', function () {
            assert.hasError('short-answer-text-is-not-a-string', {
              '[0].text': 'should be string'
            });
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