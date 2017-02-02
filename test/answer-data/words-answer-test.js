var assert = require('./../../assert')('words-answer');

describe('Words answer', function () {
  describe('Schema', function () {
    describe('A words answer', function () {
      it('must be an object', function () {
        assert.isValid('words-answer');
      });
      describe('A words answer data', function () {
        it('must be a string', function () {
          assert.hasError('words-answer-is-not-a-string', {
            '.data': 'should be string'
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
