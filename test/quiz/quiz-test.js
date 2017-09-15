var assert = require('./../../assert')('quiz');

describe('Quiz', function () {
  describe('Schema', function () {
    describe('A quiz', function () {
      it('must be an object', function () {
        assert.hasError('not-an-object', {
          '': 'should be object'
        });
      });

      it('must have an *id* property', function () {
        assert.hasError('no-id', {
          '.id': 'property .id is required'
        });
      });

      it('must have a *title* property', function () {
        assert.hasError('no-title', {
          '.title': 'property .title is required'
        });
      });

      it('must have a *steps* property', function () {
        assert.hasError('no-steps', {
          '.steps': 'property .steps is required'
        });
      });

      it('may have a *parameters* property', function () {
        assert.isValid('with-parameters');
      });

      it('may have a *meta* property', function () {
        assert.isValid('quiz-metadata');
      });
    });

    describe('The *id* property', function () {
      it('must be a string', function () {
        assert.hasError('id-is-not-a-string', {
          '.id': 'should be string'
        });
      });
    });

    describe('The *title* property', function () {
      it('must be a string', function () {
        assert.hasError('title-is-not-a-string', {
          '.title': 'should be string'
        });
      });
    });

    describe('The *parameters* property', function () {
      it('must be an object', function () {
        assert.hasError('parameters-is-not-an-object', {
          '.parameters': 'should be object'
        });
      });
    });

    describe('The *steps* property', function () {
      it('must be an array', function () {
        assert.hasError('steps-is-not-an-array', {
          '.steps': 'should be array'
        });
      });

      describe('Each step', function () {
        it('must satisfy the #step# schema', function () {
          assert.hasError('step-not-satisfying-step-schema', {
            '.steps[0]': 'should be object'
          });
        });

        it('must be unique', function () {
          assert.hasError('duplicate-steps', {
            '.steps': 'items ## 0 and 1 are duplicate'
          });
        });
      });
    });

    describe('The *meta* property', function () {
      it('must satisfy the #metadata# schema', function () {
        assert.hasErrors('meta-not-satisfying-metadata-schema', {
          '.meta.authors': 'should be array',
          '.meta.license': 'should be string'
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'content-and-question-steps',
      'quiz-metadata',
      'with-parameters',
      'with-tag-picking'
    ]);
  });
});
