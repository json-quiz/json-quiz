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

      it('must have a *left* property', function () {
        assert.hasError('no-left', {
          '.left': 'property .left is required'
        });
      });

      it('must have a *right* property', function () {
        assert.hasError('no-right', {
          '.right': 'property .right is required'
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

    describe('The *left* property', function () {
      it('must be an array', function () {
        assert.hasError('left-is-not-an-array', {
          '.left': 'should be array'
        });
      });

      it('must contain at least one item', function () {
        assert.hasError('under-one-left-item', {
          '.left': 'should NOT have less than 1 items'
        });
      });

      describe('Each item', function () {
        it('must satisfy the #content# schema', function () {
          assert.hasErrors('left-item-not-satisfying-content-schema', {
            '.left[0].data': 'should be string',
            '.left[1].id': 'property .id is required'
          });
        });

        it('must be unique', function () {
          assert.hasError('duplicate-left-item', {
            '.left': 'items ## 0 and 1 are duplicate'
          });
        })
      });
    });

    describe('The *right* property', function () {
      it('must be an array', function () {
        assert.hasError('right-is-not-an-array', {
          '.right': 'should be array'
        });
      });

      it('must contain at least one item', function () {
        assert.hasError('under-one-right-item', {
          '.right': 'should NOT have less than 1 items'
        });
      });

      describe('Each item', function () {
        it('must satisfy the #content# schema', function () {
          assert.hasErrors('right-item-not-satisfying-content-schema', {
            '.right[0].data': 'should be string',
            '.right[1].id': 'property .id is required'
          });
        });

        it('must be unique', function () {
          assert.hasError('duplicate-right-item', {
            '.right': 'items ## 0 and 1 are duplicate'
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

        it('must have a *leftId* property', function () {
          assert.hasError('no-solution-left-id', {
            '.solutions[0].leftId': 'property .leftId is required'
          });
        });

        it('must have a *rightId* property', function () {
          assert.hasError('no-solution-right-id', {
            '.solutions[0].rightId': 'property .rightId is required'
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

      describe('The *leftId* property', function () {
        it('must be a string', function () {
          assert.hasError('solution-left-id-is-not-a-string', {
            '.solutions[0].leftId': 'should be string'
          });
        });
      });

      describe('The *rightId* property', function () {
        it('must be a string', function () {
          assert.hasError('solution-right-id-is-not-a-string', {
            '.solutions[0].rightId': 'should be string'
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
      'with-solutions',
      'with-feedback'
    ]);
  });
});
