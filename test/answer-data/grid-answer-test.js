var assert = require('./../../assert')('grid-answer');

describe('grid answer', function () {
  describe('Schema', function () {
    describe('A grid answer', function () {
      it('must be an object', function () {
        assert.isValid('grid-answer');
      });
      describe('A grid answer data', function () {
        it('must be an array', function () {
          assert.hasError('grid-answer-is-not-an-array', {
            '.data': 'should be array'
          });
        });
        describe('Each answer', function () {
          it('must be an object', function () {
            assert.hasError('grid-answer-answer-is-not-an-object', {
              '.data[0]': 'should be object'
            });
          });
          it('must be unique', function () {
            assert.hasError('grid-answer-duplicate-answers', {
              '.data': 'items ## 0 and 1 are duplicate'
            });
          });
          it('must have a *cellId* property', function () {
            assert.hasError('grid-answer-no-cellid', {
              '.data[0].cellId': 'property .cellId is required'
            });
          });
          describe('The *cellId* property', function () {
            it('must be a string', function () {
              assert.hasError('grid-answer-cellid-is-not-a-string', {
                '.data[0].cellId': 'should be string'
              });
            });
          });
          it('must have a *text* property', function () {
            assert.hasError('grid-answer-no-text', {
              '.data[0].text': 'property .text is required'
            });
          });
          describe('The *text* property', function () {
            it('must be a string', function () {
              assert.hasError('grid-answer-text-is-not-a-string', {
                '.data[0].text': 'should be string'
              });
            });
          });
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'grid-answer'
    ]);
  });
});
