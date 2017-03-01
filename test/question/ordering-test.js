var assert = require('./../../assert')('ordering-question');

describe('Ordering question', function () {
  describe('Schema', function () {
    describe('An ordering question', function () {
      it('must satisfy the #base-question# schema', function () {
        assert.hasErrors('not-satisfying-base-schema', {
          '.id': 'property .id is required',
          '.type': 'property .type is required',
          '.content': 'property .content is required'
        });
      });

      it('must have a *penalty* property', function () {
        assert.hasError('no-penalty-property', {
          '.penalty': 'property .penalty is required'
        });
      });

      it('must have an *items* property', function () {
        assert.hasError('no-items-property', {
          '.items': 'property .items is required'
        });
      });

      it('may have a *solutions* property', function () {
        assert.isValid('solutions');
      });

    });

    describe('The *penalty* property', function () {
      it('must be a number', function () {
        assert.hasError('penalty-is-not-a-number', {
          '.penalty': 'should be number'
        });
      });
    });

    describe('The *solutions* property', function () {
      it('must be an array', function () {
        assert.hasError('solutions-is-not-an-array', {
          '.solutions': 'should be array'
        });
      });

      describe('Each solution', function () {
        it('must be an object', function () {
          assert.hasError('solution-is-not-an-object', {
            '.solutions[0]': 'should be object'
          });
        });
      });
    });

  });

  describe('Examples', function () {
    assert.areValid([
      'basic',
      'solutions',
      'feedback'
    ]);
  });
});
