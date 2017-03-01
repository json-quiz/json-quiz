var assert = require('./../../assert')('ordering-answer');

describe('ordering answer', function () {
  describe('Schema', function () {
    describe('An ordering answer', function () {

      it('must be an object', function () {
        assert.isValid('ordering-answer');
      });

      describe('An ordering answer data', function () {

        it('must be an array', function () {
          assert.hasError('answer-is-not-an-array', {
            '.data': 'should be array'
          });
        });

        describe('Each answer', function () {

          it('must be an object', function () {
            assert.hasError('answer-is-not-an-object', {
              '.data[0]': 'should be object'
            });
          });

          it('must be unique', function () {
            assert.hasError('answer-duplicate-answers', {
              '.data': 'items ## 0 and 1 are duplicate'
            });
          });

          it('must have a *itemId* property', function () {
            assert.hasError('answer-no-itemId', {
              '.data[0].itemId': 'property .itemId is required'
            });
          });

          describe('The *itemId* property', function () {
            it('must be a string', function () {
              assert.hasError('answer-itemId-is-not-a-string', {
                '.data[0].itemId': 'should be string'
              });
            });
          });

          describe('The *position* property', function () {
            it('must be a number', function () {
              assert.hasError('answer-position-is-not-a-number', {
                '.data[0].position': 'should be number'
              });
            });
          });
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'ordering-answer'
    ]);
  });
});
