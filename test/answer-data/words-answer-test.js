var assert = require('./../../assert')('words-answer');

describe('Words answer', function () {
  describe('Schema', function () {

    describe('A words answer', function () {
      it('must be a string', function () {
        assert.hasError('words-answer-is-not-a-string', {
          '': 'should be string'
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
