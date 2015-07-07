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

      it('must have a *steps* property', function () {
        assert.hasError('no-steps', {
          '.steps': 'property .steps is required'
        });
      });

      it('may have an *meta* property', function () {
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

    describe('The *steps* property', function () {
      it('must be an array', function () {
        assert.hasError('steps-is-not-an-array', {
          '.steps': 'should be array'
        });
      });

      it('should contain at least one step', function () {
        assert.hasError('under-one-step', {
          '.steps': 'should NOT have less than 1 items'
        });
      });

      describe('Each step', function () {
        it('must be an object', function () {
          assert.hasError('step-is-not-an-object', {
            '.steps[0]': 'should be object'
          });
        });

        it('must be unique', function () {
          assert.hasError('duplicate-steps', {
            '.steps': 'items ## 0 and 1 are duplicate'
          });
        });

        it('must have an *id* property', function () {
          assert.hasError('no-step-id', {
            '.steps[0].id': 'property .id is required'
          });
        });

        it('must have an *items* property', function () {
          assert.hasError('no-step-items', {
            '.steps[0].items': 'property .items is required'
          });
        });

        describe('The *id* property', function () {
          it('must be a string', function () {
            assert.hasError('step-id-is-not-a-string', {
              '.steps[0].id': 'should be string'
            });
          });
        });

        describe('The *items* property', function () {
          it('must be an array', function () {
            assert.hasError('step-items-is-not-an-array', {
              '.steps[0].items': 'should be array'
            });
          });

          it('must contain at least one item', function () {
            assert.hasError('under-one-step-item', {
              '.steps[0].items': 'should NOT have less than 1 items'
            });
          });

          describe('Each item', function () {
            it('must be unique', function () {
              assert.hasError('duplicate-step-items', {
                '.steps[0].items': 'items ## 0 and 1 are duplicate'
              });
            });

            it('must satisfy the #content# or questions schemas', function () {
              assert.hasError('step-item-not-satisfying-content-or-question-schema', {
                '.steps[0].items[0]': 'should match exactly one schema in oneOf'
              });
            })
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
      'one-question-step',
      'multiple-questions-step',
      'content-and-question-steps',
      'quiz-metadata'
    ]);
  });
});
