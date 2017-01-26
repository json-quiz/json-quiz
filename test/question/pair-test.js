var assert = require('./../../assert')('pair-question');

describe('Pair question', function () {
  describe('Schema', function () {
    describe('A pair question', function () {
      it('must satisfy the #base-question# schema', function () {
        assert.hasErrors('not-satisfying-base-schema', {
          '.id': 'property .id is required',
          '.type': 'property .type is required',
          '.content': 'property .content is required'
        });
      });

      it('must have a *rows* property', function () {
        assert.hasError('no-rows', {
          '.rows': 'property .rows is required'
        });
      });

      it('must have a *items* property', function () {
        assert.hasError('no-items', {
          '.items': 'property .items is required'
        });
      });

      it('must have a *random* property', function () {
        assert.hasError('no-random', {
          '.random': 'property .random is required'
        });
      });

      it('must have a *penalty* property', function () {
        assert.hasError('no-penalty', {
          '.penalty': 'property .penalty is required'
        });
      });

      it('may have a *solutions* property', function () {
        assert.isValid('with-solutions');
      });
    });

    describe('The *rows* property', function () {
      it('must be a number', function () {
        assert.hasError('rows-is-not-a-number', {
          '.rows': 'should be number'
        });
      });

      it('must be greater than 1', function () {
        assert.hasError('rows-is-less-than-one', {
          '.rows': 'should be >= 1'
        });
      });
    });

    describe('The *items* property', function () {
      it('must be an array', function () {
        assert.hasError('items-is-not-an-array', {
          '.items': 'should be array'
        });
      });

      it('must contain at least two item', function () {
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
        });

        it('may have a *coordinates* property', function () {
          assert.isValid('with-coordinates')
        });

      });
    });

    describe('The *random* property', function () {
      it('must be a boolean', function () {
        assert.hasError('random-is-not-a-bool', {
          '.random': 'should be boolean'
        });
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
        it('must be unique', function () {
          assert.hasError('duplicate-solutions', {
            '.solutions': 'items ## 0 and 1 are duplicate'
          });
        });

        it('must have a *itemIds* property', function () {
          assert.hasError('solution-no-itemIds', {
            '.solutions[0].itemIds': 'property .itemIds is required'
          });
        });

        it('must have a *score* property', function () {
          assert.hasError('no-solution-score', {
            '.solutions[0].score': 'property .score is required'
          });
        });

        it('may have a *feedback* property', function () {
          assert.isValid('with-feedback');
        });
      });

      describe('The *itemIds* property', function () {
        it('must be a array', function () {
          assert.hasError('solution-itemIds-is-not-an-array', {
            '.solutions[0].itemIds': 'should be array'
          });
        });

        describe('Each itemIds', function () {
          it('must contain at least one item', function () {
            assert.hasError('itemIds-under-one-elements', {
              '.solutions[0].itemIds': 'should NOT have less than 1 items'
            });
          });
        });

      });

      describe('The *score* property', function () {
        it('must be a number', function () {
          assert.hasError('solution-score-is-not-a-number', {
            '.solutions[0].score': 'should be number'
          });
        });
      });

      describe('The *feedback* property', function () {
        it('must be a string', function () {
          assert.hasError('solution-feedback-is-not-a-string', {
            '.solutions[0].feedback': 'should be string'
          });
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'basic',
      'with-coordinates',
      'with-solutions',
      'with-feedback'
    ]);
  });
});
