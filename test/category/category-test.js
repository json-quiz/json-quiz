var assert = require('./../../assert')('category');

describe('Category', function () {
  describe('Schema', function () {
    describe('A category', function () {
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

      it('must have a *name* property', function () {
        assert.hasError('no-name', {
          '.name': 'property .name is required'
        });
      });

      it('may have a *default* property', function () {
        assert.isValid('extended');
      });
    });

    describe('The *id* property', function () {
      it('must be a string', function () {
        assert.hasError('id-is-not-a-string', {
          '.id': 'should be string'
        });
      });
    });

    describe('The *name* property', function () {
      it('must be a string', function () {
        assert.hasError('name-is-not-a-string', {
          '.name': 'should be string'
        });
      });
    });

    describe('The *default* property', function () {
      it('must be a boolean', function () {
        assert.hasError('default-is-not-a-boolean', {
          '.default': 'should be boolean'
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'basic',
      'extended'
    ]);
  });
});
