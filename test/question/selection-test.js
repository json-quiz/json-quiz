var assert = require('./../../assert')('selection-question');

describe('Selection question', function () {
  describe('Examples', function () {
    assert.areValid([
      'highlight',
      'select',
      'find',
      'penalties'
    ]);
  });

  describe('The *mode* property', function () {
    it('must be an [[select|find|highlight]]', function () {
      assert.hasError('unknown-mode', {
        '.mode': 'should be equal to one of values'
      });
    });
  })
});
