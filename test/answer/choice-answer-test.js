var assert = require('./../../assert')('choice-answer');

describe('Choice answer', function () {
  describe('Schema', function () {

    describe('A choice answer', function () {
      /*

      it('must have a *image* property', function () {
        assert.hasError('graphic-no-image', {
          '.image': 'property .image is required'
        });
      });*/
      /*it('must have a *items* property', function () {
        assert.hasError('graphic-no-items', {
          '.items': 'property .items is required'
        });
      });*/
    });
  });
  
  describe('Examples', function () {
    assert.areValid([
      'choice-answer'
    ]);
  });
});