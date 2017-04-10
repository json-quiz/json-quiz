var assert = require('./../../assert')('selection-answer');

describe('Selection answer', function () {
  describe('Examples', function () {
    assert.areValid([
      'highlight',
      'select',
      'find',
      'no-click',
      'empty'
    ]);
  });
});
