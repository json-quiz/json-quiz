var assert = require('./../../assert')('pair-answer');

describe('Pair answer', function () {
  describe('Schema', function () {
    describe('A pair answer', function () {
      it('must be an object', function () {
        assert.isValid('pair-answer');
      });
      describe('A pair answer data', function () {
        it('must be an array', function () {
          assert.hasError('not-an-array', {
            '.data': 'should be array'
          });
        });
        describe('Each pair', function () {
          it('must be an array', function () {
            assert.hasError('pair-is-not-an-array', {
              '.data[0]': 'should be array'
            });
          });
          it('must be unique', function () {
            assert.hasError('duplicate-answers', {
              '.data': 'items ## 0 and 1 are duplicate'
            });
          });

          describe('Each item', function () {
            it('must be a string', function () {
              assert.hasError('pair-item-id-is-not-a-string', {
                '.data[0][0]': 'should be string'
              });
            });

            it('must be unique', function () {
              assert.hasError('duplicate-pair-items', {
                '.data[0]': 'items ## 0 and 1 are duplicate'
              });
            });
          });
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'pair-answer'
    ]);
  });
});