var assert = require('./../../assert')('words-question');

describe('Words question', function () {
  describe('Schema', function () {
    describe('A words-answer question', function () {
      it('must satisfy the #base-question# schema', function () {
        assert.hasErrors('not-satisfying-base-schema', {
          '.id': 'property .id is required',
          '.type': 'property .type is required',
          '.content': 'property .content is required',
          '.meta': 'should be object',
          '.objects': 'should be array'
        });
      });

      it('may have a *solutions* property', function () {
        assert.isValid('single-answer');
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
        it('must satisfy the #keyword# schema', function () {
          assert.hasError('solution-not-satisfying-keyword-schema', {
            '.solutions[0]': 'should be object'
          });
        });

        it('must be unique', function () {
          assert.hasError('duplicate-solution', {
            '.solutions': 'items ## 0 and 1 are duplicate'
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
