var assert = require('./../../assert')('step');

describe('Step', function () {
  describe('Schema', function () {
    describe('A step', function () {
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

      it('must have an *items* property', function () {
        assert.hasError('no-items', {
          '.items': 'property .items is required'
        });
      });

      it('may have a *meta* property', function () {
        assert.isValid('step-metadata');
      });
    });

    describe('The *id* property', function () {
      it('must be a string', function () {
        assert.hasError('id-is-not-a-string', {
          '.id': 'should be string'
        });
      });
    });

    describe('The *items* property', function () {
      it('must be an array', function () {
        assert.hasError('items-is-not-an-array', {
          '.items': 'should be array'
        });
      });

      describe('Each item', function () {
        it('must be unique', function () {
          assert.hasError('duplicate-items', {
            '.items': 'items ## 0 and 1 are duplicate'
          });
        });

        it('must satisfy the #content# or questions schemas', function () {
          assert.hasError('item-not-satisfying-content-or-question-schema', {
            '.items[0]': 'should match exactly one schema in oneOf'
          });
        })
      });
    });

    describe('The *meta* property', function () {
      it('must satisfy the #metadata# schema', function () {
        assert.hasErrors('meta-not-satisfying-metadata-schema', {
          '.meta.authors': 'should be array',
          '.meta.license': 'should be string'
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'one-question',
      'multiple-questions',
      'step-metadata'
    ]);
  });
});
