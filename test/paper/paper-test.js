var assert = require('./../../assert')('paper');

describe('Paper', function () {
  describe('Schema', function () {
    describe('A paper', function () {
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

      it('must have a *startDate* property', function () {
        assert.hasError('no-start-date', {
          '.startDate': 'property .startDate is required'
        });
      });

      it('must have a *structure* property', function () {
        assert.hasError('no-structure', {
          '.structure': 'property .structure is required'
        });
      });

      it('may have a *user* property', function () {
        assert.isValid('with-user');
      });

      it('may have a *score* property', function () {
        assert.isValid('with-score');
      });

      it('may have an *endDate* property', function () {
        assert.isValid('with-end-date');
      });

      it('may have a *finished* property', function () {
        assert.isValid('with-finished');
      });

      it('may have an *answers* property', function () {
        assert.isValid('with-answers');
      });
    });

    describe('The *id* property', function () {
      it('must be a string', function () {
        assert.hasError('id-is-not-a-string', {
          '.id': 'should be string'
        });
      });
    });

    describe('The *user* property', function () {
      it('must be an object', function () {
        assert.hasError('user-is-not-an-object', {
          '.user': 'should be object'
        });
      });

      it('must have a *name* property', function () {
        assert.hasError('no-user-name', {
          '.user.name': 'property .name is required'
        });
      });

      describe('The *name* property', function () {
        it('must be a string', function () {
          assert.hasError('user-name-is-not-a-string', {
            '.user.name': 'should be string'
          });
        });
      });
    });

    describe('The *startDate* property', function () {
      it('must be a string', function () {
        assert.hasError('start-date-is-not-a-string', {
          '.startDate': 'should be string'
        });
      });
    });

    describe('The *endDate* property', function () {
      it('must be a string', function () {
        assert.hasError('end-date-is-not-a-string', {
          '.endDate': 'should be string'
        });
      });
    });

    describe('The *finished* property', function () {
      it('must be a boolean', function () {
        assert.hasError('finished-is-not-a-bool', {
          '.finished': 'should be boolean'
        });
      });
    });

    describe('The *score* property', function () {
      it('must be a number', function () {
        assert.hasError('score-is-not-a-number', {
          '.score': 'should be number'
        });
      });
    });

    describe('The *structure* property', function () {
      it('must be an array', function () {
        assert.hasError('structure-is-not-an-array', {
          '.structure': 'should be array'
        });
      });

      it('must contain at least one step', function () {
        assert.hasError('under-one-structure-step', {
          '.structure': 'should NOT have less than 1 items'
        });
      });

      describe('Each item', function () {
        it('must be an object', function () {
          assert.hasError('structure-step-is-not-an-object', {
            '.structure[0]': 'should be object'
          });
        });

        it('must be unique', function () {
          assert.hasError('duplicate-structure-steps', {
            '.structure': 'items ## 0 and 1 are duplicate'
          });
        });

        it('must have an *id* property', function () {
          assert.hasError('no-structure-step-id', {
            '.structure[0].id': 'property .id is required'
          });
        });

        it('must have an *items* property', function () {
          assert.hasError('no-structure-step-items', {
            '.structure[0].items': 'property .items is required'
          });
        });

        describe('The *id* property', function () {
          it('must be a string', function () {
            assert.hasError('structure-step-id-is-not-a-string', {
              '.structure[0].id': 'should be string'
            });
          });
        });

        describe('The *items* property', function () {
          it('must be an array', function () {
            assert.hasError('structure-step-items-is-not-an-array', {
              '.structure[0].items': 'should be array'
            });
          });

          describe('Each item', function () {
            it('must be unique', function () {
              assert.hasError('duplicate-structure-step-items', {
                '.structure[0].items': 'items ## 0 and 1 are duplicate'
              });
            });

            it('must be a string', function () {
              assert.hasError('structure-step-item-is-not-a-string', {
                '.structure[0].items[0]': 'should be string'
              });
            });
          });
        });
      });
    });

    describe('The *answers* property', function () {
      it('must be an array', function () {
        assert.hasError('answers-is-not-an-array', {
          '.answers': 'should be array'
        });
      });

      describe('Each item', function () {
        it('must be unique', function () {
          assert.hasError('duplicate-answer', {
            '.answers': 'items ## 0 and 1 are duplicate'
          });
        });

        it('must contain at least one answer', function () {
          assert.hasError('under-one-answer', {
            '.answers': 'should NOT have less than 1 items'
          });
        });

        it('must satisfy the #answer# schema', function () {
          assert.hasError('answer-not-satisfying-answer-schema', {
            '.answers[0]': 'should be object'
          });
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'minimal',
      'full',
      'with-user',
      'with-end-date',
      'with-score',
      'with-finished',
      'with-answers'
    ]);
  });
});
