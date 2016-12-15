var assert = require('./../../assert')('match-question');

describe('Match question', function () {
  describe('Schema', function () {
    describe('A match question', function () {
      it('must satisfy the #base-question# schema', function () {
        assert.hasErrors('not-satisfying-base-schema', {
          '.id': 'property .id is required',
          '.type': 'property .type is required',
          '.content': 'property .content is required',
          '.meta': 'should be object',
          '.objects': 'should be array'
        });
      });

      it('must have a *random* property', function () {
        assert.hasError('no-random-property', {
          '.random': 'property .random is required'
        });
      });

      it('must have a *penalty* property', function () {
        assert.hasError('no-penalty-property', {
          '.penalty': 'property .penalty is required'
        });
      });

      it('must have a *firstSet* property', function () {
        assert.hasError('no-first-set', {
          '.firstSet': 'property .firstSet is required'
        });
      });

      it('must have a *secondSet* property', function () {
        assert.hasError('no-second-set', {
          '.secondSet': 'property .secondSet is required'
        });
      });

      it('may have a *solutions* property', function () {
        assert.isValid('solutions');
      });
    });

    describe('The *random* property', function () {
      it('must be a boolean', function () {
        assert.hasError('random-is-not-a-boolean', {
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

      it('must be greater than 0', function () {
        assert.hasError('penalty-is-under-zero', {
          '.penalty': 'should be >= 0'
        });
      });
    });

    describe('The *firstSet* property', function () {
      it('must be an array', function () {
        assert.hasError('first-set-is-not-an-array', {
          '.firstSet': 'should be array'
        });
      });

      it('must contain at least one item', function () {
        assert.hasError('empty-first-set-array', {
          '.firstSet': 'should NOT have less than 1 items'
        });
      });

      describe('Each item', function () {
        it('must satisfy the #content# schema', function () {
          assert.hasErrors('first-set-item-not-satisfying-content-schema', {
            '.firstSet[0].data': 'should be string',
            '.firstSet[1].id': 'property .id is required'
          });
        });

        it('must be unique', function () {
          assert.hasError('duplicate-first-set-item', {
            '.firstSet': 'items ## 0 and 1 are duplicate'
          });
        })
      });
    });

    describe('The *secondSet* property', function () {
      it('must be an array', function () {
        assert.hasError('second-set-is-not-an-array', {
          '.secondSet': 'should be array'
        });
      });

      it('must contain at least one item', function () {
        assert.hasError('empty-second-set-array', {
          '.secondSet': 'should NOT have less than 1 items'
        });
      });

      describe('Each item', function () {
        it('must satisfy the #content# schema', function () {
          assert.hasErrors('second-set-item-not-satisfying-content-schema', {
            '.secondSet[0].data': 'should be string',
            '.secondSet[1].id': 'property .id is required'
          });
        });

        it('must be unique', function () {
          assert.hasError('duplicate-second-set-item', {
            '.secondSet': 'items ## 0 and 1 are duplicate'
          });
        })
      });
    });

    describe('The *solutions* property', function () {
      it('must be an array', function () {
        assert.hasError('solutions-is-not-an-array', {
          '.solutions': 'should be array'
        });
      });

      it('must contain at least one solution', function () {
        assert.hasError('under-one-solution', {
          '.solutions': 'should NOT have less than 1 items'
        });
      });

      describe('Each solution', function () {
        it('must be unique', function () {
          assert.hasError('duplicate-solutions', {
            '.solutions': 'items ## 0 and 1 are duplicate'
          });
        });

        it('must have a *firstId* property', function () {
          assert.hasError('no-solution-first-id', {
            '.solutions[0].firstId': 'property .firstId is required'
          });
        });

        it('must have a *secondId* property', function () {
          assert.hasError('no-solution-second-id', {
            '.solutions[0].secondId': 'property .secondId is required'
          });
        });

        it('must have a *score* property', function () {
          assert.hasError('no-solution-score', {
            '.solutions[0].score': 'property .score is required'
          });
        });

        it('may have a *feedback* property', function () {
          assert.isValid('with-solution-feedback');
        });
      });

      describe('The *firstId* property', function () {
        it('must be a string', function () {
          assert.hasError('solution-first-id-is-not-a-string', {
            '.solutions[0].firstId': 'should be string'
          });
        });
      });

      describe('The *secondId* property', function () {
        it('must be a string', function () {
          assert.hasError('solution-second-id-is-not-a-string', {
            '.solutions[0].secondId': 'should be string'
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
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'basic',
      'solutions',
      'with-solution-feedback',
      'text-and-images'
    ]);
  });
});
