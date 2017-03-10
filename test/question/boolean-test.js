var assert = require('./../../assert')('boolean-question');

describe('Boolean question', function () {
  describe('Schema', function () {
    describe('A boolean question', function () {
      it('must satisfy the #base-question# schema', function () {
        assert.hasErrors('not-satisfying-base-schema', {
          '.id': 'property .id is required',
          '.type': 'property .type is required',
          '.content': 'property .content is required',
          '.meta': 'should be object',
          '.objects': 'should be array'
        });
      });

      it('must have a *choices* property', function () {
        assert.hasError('no-choices-property', {
          '.choices': 'property .choices is required'
        });
      });

      it('may have a *solutions* property', function () {
        assert.isValid('solutions');
      });
    });

    describe('The *choices* property', function () {
      it('must be an array', function () {
        assert.hasError('choices-is-not-an-array', {
          '.choices': 'should be array'
        });
      });

      it('must contain at least two choices', function () {
        assert.hasError('under-two-choices', {
          '.choices': 'should NOT have less than 2 items'
        });
      });

      it('must contain two choices max', function () {
        assert.hasError('more-than-two-choices', {
          '.choices': 'should NOT have more than 2 items'
        });
      });

      describe('Each choice', function () {
        it('must satisfy the #content# schema', function () {
          assert.hasErrors('choice-not-satisfying-content-schema', {
            '.choices[0].data': 'should be string',
            '.choices[1].id': 'property .id is required'
          });
        });

        it('must be unique', function () {
          assert.hasError('duplicate-choices', {
            '.choices': 'items ## 0 and 1 are duplicate'
          });
        });
      });
    });

    describe('the *solutions* property', function () {
      it('must be an array', function () {
        assert.hasError('solutions-is-not-an-array', {
          '.solutions': 'should be array'
        });
      });

      it('must contain at least two solutions', function () {
        assert.hasError('under-two-solutions', {
          '.solutions': 'should NOT have less than 2 items'
        });
      });

      it('must contain two solutions max', function () {
        assert.hasError('more-than-two-solutions', {
          '.solutions': 'should NOT have more than 2 items'
        });
      });

      describe('Each solution', function () {
        it('must be an object', function () {
          assert.hasError('solution-is-not-an-object', {
            '.solutions[0]': 'should be object'
          });
        });

        it('must be unique', function () {
          assert.hasError('duplicate-solutions', {
            '.solutions': 'items ## 0 and 1 are duplicate'
          });
        });

        it('must have an *id* property', function () {
          assert.hasError('no-solution-id', {
            '.solutions[0].id': 'property .id is required'
          });
        });

        it('must have a *score* property', function () {
          assert.hasError('no-solution-score', {
            '.solutions[0].score': 'property .score is required'
          });
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'basic',
      'solutions'
    ]);
  });
});
