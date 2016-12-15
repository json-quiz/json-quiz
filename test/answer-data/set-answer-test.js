var assert = require('./../../assert')('set-answer');

describe('Set answer', function () {
  describe('Schema', function () {

    describe('A set answer', function () {
      it('must be an array', function () {
        assert.hasError('set-answer-is-not-an-array', {
          '': 'should be array'
        });
      });
      describe('Each answer', function () {
        it('must be an object', function () {
          assert.hasError('set-answer-answer-is-not-an-object', {
            '[0]': 'should be object'
          });
        });
        it('must be unique', function () {
          assert.hasError('set-answer-duplicate-answers', {
            '': 'items ## 0 and 1 are duplicate'
          });
        });
        it('must have a *itemId* property', function () {
          assert.hasError('set-answer-no-itemid', {
            '[0].itemId': 'property .itemId is required'
          });
        });
        describe('The *itemId* property', function () {
          it('must be a string', function () {
            assert.hasError('set-answer-itemid-is-not-a-string', {
              '[0].itemId': 'should be string'
            });
          });
        });
        it('must have a *setId* property', function () {
          assert.hasError('set-answer-no-setid', {
            '[0].setId': 'property .setId is required'
          });
        });
        describe('The *setId* property', function () {
          it('must be a string', function () {
            assert.hasError('set-answer-setid-is-not-a-string', {
              '[0].setId': 'should be string'
            });
          });
        });
      });
    });
  });
  
  describe('Examples', function () {
    assert.areValid([
      'set-answer'
    ]);
  });
});