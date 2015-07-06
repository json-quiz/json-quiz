var assert = require('./../../assert')('sort-question');

describe('Sort question', function () {
  describe('Schema', function () {
    describe('A sort question', function () {
      it('must satisfy the #base-question# schema', function () {
        assert.hasErrors('not-satisfying-base-schema', {
          '.id': 'property .id is required',
          '.title': 'property .title is required',
          '.meta': 'should be object',
          '.objects': 'should be array'
        });
      });

      it('must have an *items* property', function () {
        assert.hasError('no-items', {
          '.items': 'property .items is required'
        });
      });

      it('may have a *solution* property', function () {
        assert.isValid('solution');
      });
    });

    describe('The *items* property', function () {
      it('must be an array', function () {
        assert.hasError('items-is-not-an-array', {
          '.items': 'should be array'
        });
      });

      it('must contain at least two items', function () {
        assert.hasError('under-two-items', {
          '.items': 'should NOT have less than 2 items'
        });
      });

      describe('Each item', function () {
        it('must satisfy the #content# schema', function () {
          assert.hasErrors('item-not-satisfying-content-schema', {
            '.items[0].data': 'should be string',
            '.items[1].id': 'property .id is required'
          });
        });

        it('must be unique', function () {
          assert.hasError('duplicate-item', {
            '.items': 'items ## 0 and 1 are duplicate'
          });
        })
      });
    });

    describe('The *solution* property', function () {
      it('must be an object', function () {
        assert.hasError('solution-is-not-an-object', {
          '.solution': 'should be object'
        });
      });

      it('must have an *itemIds* property', function () {
        assert.hasError('no-solution-item-ids', {
          '.solution.itemIds': 'property .itemIds is required'
        });
      });

      it('must have a *itemScore* property', function () {
        assert.hasError('no-solution-item-score', {
          '.solution.itemScore': 'property .itemScore is required'
        });
      });

      describe('The *itemIds* property', function () {
        it('must be an array', function () {
          assert.hasError('solution-item-ids-is-not-an-array', {
            '.solution.itemIds': 'should be array'
          });
        });

        it('must contain at least two item ids', function () {
          assert.hasError('under-two-solution-item-ids', {
            '.solution.itemIds': 'should NOT have less than 2 items'
          });
        });
      });

      describe('Each item id', function () {
        it('must be unique', function () {
          assert.hasError('duplicate-solution-item-id', {
            '.solution.itemIds': 'items ## 0 and 2 are duplicate'
          });
        });

        it('must be a string', function () {
          assert.hasError('solution-item-id-is-not-a-string', {
            '.solution.itemIds[1]': 'should be string'
          });
        });
      });

      describe('The *itemScore* property', function () {
        it('must be a number', function () {
          assert.hasError('solution-item-score-is-not-a-number', {
            '.solution.itemScore': 'should be number'
          });
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'basic',
      'solution',
      'extended'
    ]);
  });
});
