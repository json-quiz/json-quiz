var assert = require('./../../assert')('boolean-answer');

describe('Boolean answer', function () {
  describe('Schema', function () {
    describe('A boolean answer', function () {
      it('must be an object', function () {
        assert.isValid('boolean-answer');
      });
      describe('A boolean answer id', function () {
        it('must be an string', function () {
          assert.hasError('boolean-answer-is-not-a-string', {
            '.id': 'should be string'
          });
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'boolean-answer'
    ]);
  });
});
