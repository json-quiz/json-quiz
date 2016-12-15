var assert = require('./../../assert')('open-answer');

describe('Open answer', function () {
  describe('Schema', function () {
    describe('An open answer', function () {
      it('must satisfy the #content# schema', function () {
        assert.hasErrors('not-satisfying-content-schema', {
          '.type': 'property .type is required'
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'open-answer'
    ]);
  });
});