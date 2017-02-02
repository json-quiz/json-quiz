var assert = require('./../../assert')('graphic-answer');

describe('Graphic answer', function () {
  describe('Schema', function () {
    describe('A graphic answer', function () {
      it('must be an object', function () {
        assert.isValid('graphic-answer');
      });
      describe('A graphic answer', function () {
        it('must have positive coordinates', function () {
          assert.hasError('negative-coordinates', {
            '.data[0].y': 'should be >= 0'
          });
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'graphic-answer'
    ]);
  });
});
