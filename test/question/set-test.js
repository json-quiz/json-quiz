var assert = require('./../../assert')('set-question');

describe('Set question', function () {
  describe('Schema', function () {
    describe('A set question', function () {
      it('must satisfy the #base-question# schema', function () {
        assert.hasErrors('not-satisfying-base-schema', {
          '.id': 'property .id is required',
          '.type': 'property .type is required',
          '.content': 'property .content is required'
        });
      });

      it('must have a *sets* property', function () {
        assert.hasError('no-sets', {
          '.sets': 'property .sets is required'
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

    describe('The *sets* property', function () {
      it('must be an array', function () {
        assert.hasError('sets-is-not-an-array', {
          '.sets': 'should be array'
        });
      });

      it('must contain at least one item', function () {
        assert.hasError('under-one-set', {
          '.sets': 'should NOT have less than 1 items'
        });
      });

      describe('Each item', function () {
        it('must be an object', function () {
          assert.hasError('set-is-not-an-object', {
            '.sets[0]': 'should be object'
          });
        });

        it('must be unique', function () {
          assert.hasError('duplicate-set', {
            '.sets': 'items ## 0 and 1 are duplicate'
          });
        })

        it('must satisfy the #content# schema', function () {
          assert.hasError('set-not-satisfying-content-schema', {
            '.sets[0].id': 'property .id is required'
          });
        });
      });
    });

    describe('The *items* property', function () {
      it('must be an array', function () {
        assert.hasError('items-is-not-an-array', {
          '.items': 'should be array'
        });
      });

      it('must contain at least one item', function () {
        assert.hasError('under-one-item', {
          '.items': 'should NOT have less than 1 items'
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
      it('must be an object', function () {
        assert.hasError('solutions-is-not-an-object', {
          '.solutions': 'should be object'
        });
      });

      it('must have an *associations* property', function () {
        assert.hasError('solutions-no-association-property', {
          '.solutions.associations': 'property .associations is required'
        });
      });

      it('may have an *odd* property', function () {
        assert.isValid('with-odds')
      });

      describe('Each association', function () {
        it('must be unique', function () {
          assert.hasError('duplicate-association', {
            '.solutions.associations': 'items ## 0 and 1 are duplicate'
          });
        });

        it('must have a *setId* property', function () {
          assert.hasError('no-association-set-id', {
            '.solutions.associations[0].setId': 'property .setId is required'
          });
        });

        it('must have a *itemId* property', function () {
          assert.hasError('no-association-item-id', {
            '.solutions.associations[0].itemId': 'property .itemId is required'
          });
        });

        it('must have a *score* property', function () {
          assert.hasError('no-association-score', {
            '.solutions.associations[0].score': 'property .score is required'
          });
        });

        it('may have a *feedback* property', function () {
          assert.isValid('with-feedback');
        });
      });

      describe('The *setId* property', function () {
        it('must be a string', function () {
          assert.hasError('association-set-id-is-not-a-string', {
            '.solutions.associations[0].setId': 'should be string'
          });
        });
      });

      describe('The *itemId* property', function () {
        it('must be a string', function () {
          assert.hasError('association-item-id-is-not-a-string', {
            '.solutions.associations[0].itemId': 'should be string'
          });
        });
      });

      describe('The *score* property', function () {
        it('must be a number', function () {
          assert.hasError('association-score-is-not-a-number', {
            '.solutions.associations[0].score': 'should be number'
          });
        });
      });

      describe('The *feedback* property', function () {
        it('must be a string', function () {
          assert.hasError('association-feedback-is-not-a-string', {
            '.solutions.associations[0].feedback': 'should be string'
          });
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'basic',
      'with-solutions',
      'with-feedback',
      'with-odds'
    ]);
  });
});
