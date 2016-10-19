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

      it('must have a *members* property', function () {
        assert.hasError('no-members', {
          '.members': 'property .members is required'
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
          assert.hasError('duplicate-set-item', {
            '.sets': 'items ## 0 and 1 are duplicate'
          });
        })

        it('must have an *id* property', function () {
          assert.hasError('no-set-id', {
            '.sets[0].id': 'property .id is required'
          });
        });

        it('must have a *name* property', function () {
          assert.hasError('no-set-name', {
            '.sets[0].name': 'property .name is required'
          });
        });
      });
    });

    describe('The *members* property', function () {
      it('must be an array', function () {
        assert.hasError('members-is-not-an-array', {
          '.members': 'should be array'
        });
      });

      it('must contain at least one item', function () {
        assert.hasError('under-one-member', {
          '.members': 'should NOT have less than 1 items'
        });
      });

      describe('Each item', function () {
        it('must satisfy the #content# schema', function () {
          assert.hasErrors('member-item-not-satisfying-content-schema', {
            '.members[0].data': 'should be string',
            '.members[1].id': 'property .id is required'
          });
        });

        it('must be unique', function () {
          assert.hasError('duplicate-member-item', {
            '.members': 'items ## 0 and 1 are duplicate'
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

        it('must have a *setId* property', function () {
          assert.hasError('no-solution-set-id', {
            '.solutions[0].setId': 'property .setId is required'
          });
        });

        it('must have a *memberId* property', function () {
          assert.hasError('no-solution-member-id', {
            '.solutions[0].memberId': 'property .memberId is required'
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

      describe('The *setId* property', function () {
        it('must be a string', function () {
          assert.hasError('solution-set-id-is-not-a-string', {
            '.solutions[0].setId': 'should be string'
          });
        });
      });

      describe('The *memberId* property', function () {
        it('must be a string', function () {
          assert.hasError('solution-member-id-is-not-a-string', {
            '.solutions[0].memberId': 'should be string'
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
