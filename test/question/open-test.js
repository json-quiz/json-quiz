var assert = require('./../../assert')('open-question');

describe('Open question', function () {
  describe('Schema', function () {
    describe('An open question', function () {
      it('must satisfy the #base-question# schema', function () {
        assert.hasErrors('not-satisfying-base-schema', {
          '.id': 'property .id is required',
          '.type': 'property .type is required',
          '.content': 'property .content is required',
          '.meta': 'should be object',
          '.objects': 'should be array'
        });
      });

      it('must have a *contentType* property', function () {
        assert.hasError('no-content-type', {
          '.contentType': 'property .contentType is required'
        });
      });

      it('may have a *maxLength* property', function () {
        assert.isValid('with-max-length');
      });

      describe('The *contentType* property', function () {
        it('must be a enum', function () {
          assert.hasError('content-type-is-not-in-enum', {
            '.contentType': 'should be equal to one of values'
          });
        });
      });

      describe('The *maxLength* property', function () {
        it('must be a number', function () {
          assert.hasError('max-length-is-not-a-number', {
            '.maxLength': 'should be number'
          });
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'basic',
      'with-max-length'
    ]);
  });
});
