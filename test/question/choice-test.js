var assert = require('./../../assert')('choice-question');

describe('Choice question', function () {
  describe('Schema', function () {
    describe('A choice question', function () {
      it('must satisfy the #base-question# schema', function () {
        assert.hasErrors('not-satisfying-base-schema', {
          '.id': 'property .id is required',
          '.type': 'property .type is required',
          '.content': 'property .content is required',
          '.meta': 'should be object',
          '.objects': 'should be array'
        });
      });

      it('must have a *multiple* property', function () {
        assert.hasError('no-multiple-property', {
          '.multiple': 'property .multiple is required'
        });
      });

      it('must have a *random* property', function () {
        assert.hasError('no-random-property', {
          '.random': 'property .random is required'
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

    describe('The *multiple* property', function () {
      it('must be a boolean', function () {
        assert.hasError('multiple-is-not-a-boolean', {
          '.multiple': 'should be boolean'
        });
      });
    });

    describe('The *random* property', function () {
      it('must be a boolean', function () {
        assert.hasError('random-is-not-a-boolean', {
          '.random': 'should be boolean'
        });
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

      describe('Each choice', function () {
        it('must satisfy the #content# schema', function () {
          assert.hasErrors('choice-not-satisfying-content-schema', {
            '.choices[0].data': 'should be string',
            '.choices[1].id': 'property .id is required'
          });
        });

        it('must be unique', function () {
          assert.hasError('duplicate-choices', {
            '.choices': 'items ## 0 and 2 are duplicate'
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

      it('must contain at least one solution', function () {
        assert.hasError('under-one-solution', {
          '.solutions': 'should NOT have less than 1 items'
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

        it('may have a *feedback* property', function () {
          assert.isValid('choice-feedback');
        });
      });

      describe('The *id* property', function () {
        it('must be a string', function () {
          assert.hasError('solution-id-is-not-a-string', {
            '.solutions[0].id': 'should be string'
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
      'true-or-false',
      'solutions',
      'choice-feedback',
      'extended'
    ]);
  });
});
