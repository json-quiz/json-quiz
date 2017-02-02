var assert = require('./../../assert')('open-answer');

describe('Open answer', function () {
  describe('Schema', function () {
    describe('A open answer', function () {
      it('must be an object', function () {
        assert.isValid('open-answer');
      });
      describe('An open answer data', function () {
        it('must satisfy the #content# schema', function () {
          assert.hasErrors('open-answer-is-not-a-string', {
            '.data': 'should be string'
          });
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'open-answer'
    ]);
  });
});