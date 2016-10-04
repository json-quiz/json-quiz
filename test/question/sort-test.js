var assert = require('./../../assert')('sort-question');

describe('Sort question', function () {
  describe('Schema', function () {
    describe('A sort question', function () {
      it('must satisfy the #base-question# schema', function () {
        assert.hasErrors('not-satisfying-base-schema', {
          '.id': 'property .id is required',
          '.type': 'property .type is required',
          '.content': 'property .content is required',
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
      it('must be an array', function () {
        assert.hasError('solution-is-not-an-array', {
          '.solution': 'should be array'
        });
      });

      it('must contain at least two items', function () {
        assert.hasError('under-two-solution-items', {
          '.solution': 'should NOT have less than 2 items'
        });
      });

      describe('Each solution item', function () {
        it('must be unique', function () {
          assert.hasError('duplicate-solution-items', {
            '.solution': 'items ## 0 and 1 are duplicate'
          });
        });

        it('must be an object', function () {
          assert.hasError('solution-item-is-not-an-object', {
            '.solution[0]': 'should be object'
          });
        });

        it('must have an *itemId* property', function () {
          assert.hasError('no-solution-item-id', {
            '.solution[0].itemId': 'property .itemId is required'
          });
        });

        it('must have a *score* property', function () {
          assert.hasError('no-solution-item-score', {
            '.solution[0].score': 'property .score is required'
          });
        });

        describe('The *itemId* property', function () {
          it('must be a string', function () {
            assert.hasError('solution-item-id-is-not-a-string', {
              '.solution[0].itemId': 'should be string'
            });
          });
        });

        describe('The *score* property', function () {
          it('must be a number', function () {
            assert.hasError('solution-item-score-is-not-a-number', {
              '.solution[0].score': 'should be number'
            });
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
