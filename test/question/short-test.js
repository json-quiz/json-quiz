var assert = require('./../../assert')('short-question');

describe('Short question', function () {
  describe('Schema', function () {
    describe('A short-answer question', function () {
      it('must satisfy the #base-question# schema', function () {
        assert.hasErrors('not-satisfying-base-schema', {
          '.id': 'property .id is required',
          '.type': 'property .type is required',
          '.title': 'property .title is required',
          '.meta': 'should be object',
          '.objects': 'should be array'
        });
      });

      it('must have a *text* property', function () {
        assert.hasError('no-text', {
          '.text': 'property .text is required'
        });
      });

    });

    describe('The *text* property', function () {
      it('must be a string', function () {
        assert.hasError('text-is-not-a-string', {
          '.text': 'should be string'
        });
      });
    });

    describe('The *solutions* property', function () {
      it('must be an array', function () {
        assert.hasError('solutions-is-not-an-array', {
          '.solutions': 'should be array'
        });
      });

      it('must contain one solution', function () {
        assert.hasError('not-one-solution', {
          '.solutions': 'should NOT have less than 1 items'
        });
        assert.hasError('not-one-solution2', {
          '.solutions': 'should NOT have more than 1 items'
        });
      });

      describe('Each solution', function () {
        it('must be an object', function () {
          assert.hasError('solution-is-not-an-object', {
            '.solutions[0]': 'should be object'
          });
        });
      });

      it('must have an *answers* property', function () {
        assert.hasError('no-solution-answers', {
          '.solutions[0].answers': 'property .answers is required'
        });
      });

      describe('The *answers* property', function () {
        it('must be an array', function () {
          assert.hasError('solution-answers-is-not-an-array', {
            '.solutions[0].answers': 'should be array'
          });
        });

        it('must contain at least one item', function () {
          assert.hasError('under-one-solution-answer', {
            '.solutions[0].answers': 'should NOT have less than 1 items'
          });
        });

        describe('Each answer', function () {
          it('must be an object', function () {
            assert.hasError('solution-answer-is-not-an-object', {
              '.solutions[0].answers[0]': 'should be object'
            });
          });

          it('must be unique', function () {
            assert.hasError('duplicate-solution-answer', {
              '.solutions[0].answers': 'items ## 0 and 1 are duplicate'
            });
          });
          
          it('must have a *score* property', function () {
            assert.hasError('no-solution-answer-score', {
              '.solutions[0].answers[0].score': 'property .score is required'
            });
          });

          it('must have a *value* property', function () {
            assert.hasError('no-solution-answer-value', {
              '.solutions[0].answers[0].value': 'property .value is required'
            });
          });

          describe('The value property', function () {
            it('must be a string', function () {
              assert.hasError('solution-answer-value-is-not-a-string', {
                '.solutions[0].answers[0].value': 'should be string'
              });
            });
          });
          
          describe('The score property', function () {
            it('must be a number', function () {
              assert.hasError('solution-answer-score-is-not-a-number', {
                '.solutions[0].answers[0].score': 'should be number'
              });
            });
          });
        });
      });

    });
  });

  describe('Examples', function () {
    assert.areValid([
      'simple-input',
      'single-answer',
      'multiple-answers'
    ]);
  });
});
