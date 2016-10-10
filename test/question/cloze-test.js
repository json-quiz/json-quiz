var assert = require('./../../assert')('cloze-question');

describe('Cloze question', function () {
  describe('Schema', function () {
    describe('A cloze question', function () {
      it('must satisfy the #base-question# schema', function () {
        assert.hasErrors('not-satisfying-base-schema', {
          '.id': 'property .id is required',
          '.type': 'property .type is required',
          '.content': 'property .content is required',
          '.meta': 'should be object',
          '.objects': 'should be array'
        });
      });

      it('must have a *text* property', function () {
        assert.hasError('no-text', {
          '.text': 'property .text is required'
        });
      });

      it('may have a *holes* property', function () {
        assert.isValid('hole-attributes');
      });

      it('may have a *solutions* property', function () {
        assert.isValid('single-answer');
      });
    });

    describe('The *text* property', function () {
      it('must be a string', function () {
        assert.hasError('text-is-not-a-string', {
          '.text': 'should be string'
        });
      });
    });

    describe('The *holes* property', function () {
      it('must be an array', function () {
        assert.hasError('holes-is-not-an-array', {
          '.holes': 'should be array'
        });
      });

      it('must contain at least one hole', function () {
        assert.hasError('under-one-hole', {
          '.holes': 'should NOT have less than 1 items'
        });
      });

      describe('Each hole', function () {
        it('must be an object', function () {
          assert.hasError('hole-is-not-an-object', {
            '.holes[0]': 'should be object'
          });
        });

        it('must be unique', function () {
          assert.hasError('duplicate-holes', {
            '.holes': 'items ## 0 and 1 are duplicate'
          });
        });

        it('must have an *id* property', function () {
          assert.hasError('no-hole-id', {
            '.holes[0].id': 'property .id is required'
          });
        });

        it('may have a *size* property', function () {
          assert.isValid('hole-attributes');
        });

        it('may have a *placeholder* property', function () {
          assert.isValid('hole-attributes');
        });

        it('may have a *choices* property', function () {
          assert.isValid('hole-choices');
        });

        describe('The *id* property', function () {
          it('must be a string', function () {
            assert.hasError('hole-id-is-not-a-string', {
              '.holes[0].id': 'should be string'
            });
          });
        });

        describe('The *size* property', function () {
          it('must be an integer', function () {
            assert.hasError('hole-size-is-not-an-integer', {
              '.holes[0].size': 'should be integer'
            });
          });

          it('must be greater than zero', function () {
            assert.hasError('hole-size-is-less-than-one', {
              '.holes[0].size': 'should be >= 1'
            });
          });
        });

        describe('The *placeholder* property', function () {
          it('must be a string', function () {
            assert.hasError('hole-placeholder-is-not-a-string', {
              '.holes[1].placeholder': 'should be string'
            });
          });
        });

        describe('The *choices* property', function () {
          it('must be an array', function () {
            assert.hasError('hole-choices-is-not-an-array', {
              '.holes[0].choices': 'should be array'
            });
          });

          it('must contain at least one choice', function () {
            assert.hasError('under-one-hole-choice', {
              '.holes[0].choices': 'should NOT have less than 1 items'
            });
          });

          describe('Each choice', function () {
            it('must be a string', function () {
              assert.hasError('hole-choice-is-not-a-string', {
                '.holes[0].choices[0]': 'should be string'
              });
            });
          });
        });
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
      });

      it('must have a *holeId* property', function () {
        assert.hasError('no-solution-hole-id', {
          '.solutions[0].holeId': 'property .holeId is required'
        });
      });

      it('must have an *answers* property', function () {
        assert.hasError('no-solution-answers', {
          '.solutions[0].answers': 'property .answers is required'
        });
      });

      describe('The *holeId* property', function () {
        it('must be a string', function () {
          assert.hasError('solution-hole-id-is-not-a-string', {
            '.solutions[0].holeId': 'should be string'
          });
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
          it('must satisfy the #keyword# schema', function () {
            assert.hasError('solution-answer-not-satisfying-keyword-schema', {
              '.solutions[0].answers[0]': 'should be object'
            });
          });
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'simple-input',
      'hole-attributes',
      'hole-choices',
      'single-answer',
      'multiple-answers'
    ]);
  });
});
