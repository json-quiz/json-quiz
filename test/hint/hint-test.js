var assert = require('./../../assert')('hint');

describe('Hint', function () {
  describe('Schema', function () {
    describe('A hint', function () {
      it('must be an object', function () {
        assert.hasError('not-an-object', {
          '': 'should be object'
        });
      });

      it('must have an *id* property', function () {
        assert.hasError('no-id', {
          '.id': 'property .id is required'
        });
      });

      it('may have a *value* property', function () {
        assert.isValid('with-value');
      });

      it('may have a *penalty* property', function () {
        assert.isValid('with-penalty');
      });
    });

    describe('The *id* property', function () {
      it('must be a string', function () {
        assert.hasError('id-is-not-a-string', {
          '.id': 'should be string'
        });
      });
    });

    describe('The *value* property', function () {
      it('must be a string', function () {
        assert.hasError('value-is-not-a-string', {
          '.value': 'should be string'
        });
      });
    });

    describe('The *penalty* property', function () {
      it('must be a number', function () {
        assert.hasError('penalty-is-not-a-number', {
          '.penalty': 'should be number'
        });
      });

      it('must be greater than zero', function () {
        assert.hasErrors('penalty-is-less-than-zero', {
          '.penalty': 'should be > 0'
        });

        assert.hasErrors('penalty-equals-zero', {
          '.penalty': 'should be > 0'
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'no-penalty',
      'no-value',
      'with-penalty',
      'with-value'
    ]);
  });
});
