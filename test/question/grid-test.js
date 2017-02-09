var assert = require('./../../assert')('grid-question');

describe('Grid question', function () {
  describe('Schema', function () {
    describe('A grid question', function () {
      it('must satisfy the #base-question# schema', function () {
        assert.hasErrors('not-satisfying-base-schema', {
          '.id': 'property .id is required',
          '.type': 'property .type is required',
          '.content': 'property .content is required'
        });
      });

      it('must have a *random* property', function () {
        assert.hasError('no-random-property', {
          '.random': 'property .random is required'
        });
      });

      it('must have a *penalty* property', function () {
        assert.hasError('no-penalty-property', {
          '.penalty': 'property .penalty is required'
        });
      });

      it('must have a *cells* property', function () {
        assert.hasError('no-cells-property', {
          '.cells': 'property .cells is required'
        });
      });

      it('must have a *border* property', function () {
        assert.hasError('no-border-property', {
          '.border': 'property .border is required'
        });
      });

      it('must have a *rows* property', function () {
        assert.hasError('no-rows-property', {
          '.rows': 'property .rows is required'
        });
      });

      it('must have a *cols* property', function () {
        assert.hasError('no-cols-property', {
          '.cols': 'property .cols is required'
        });
      });

      it('may have a *solutions* property', function () {
        assert.isValid('solutions');
      });

      it('may have a *sumMode* property', function () {
        assert.isValid('solutions');
      });

    });

    describe('The *penalty* property', function () {
      it('must be a number', function () {
        assert.hasError('penalty-is-not-a-number', {
          '.penalty': 'should be number'
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

    describe('The *border* property', function () {
      it('must be an object', function () {
        assert.hasError('border-is-not-object', {
          '.border': 'should be object'
        });
      });

      it('must have a *color* property', function () {
        assert.hasError('border-no-color', {
          '.border.color': 'property .color is required'
        });
      });

      describe('The *color* property', function () {
        it('must be a string', function () {
          assert.hasError('border-color-is-not-a-string', {
            '.border.color': 'should be string'
          });
        });
      });

      it('must have a *width* property', function () {
        assert.hasError('border-no-width', {
          '.border.width': 'property .width is required'
        });
      });

      describe('The *width* property', function () {
        it('must be a number', function () {
          assert.hasError('border-width-not-a-number', {
            '.border.width': 'should be number'
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

      describe('Each solution', function () {
        it('must be an object', function () {
          assert.hasError('solution-is-not-an-object', {
            '.solutions[0]': 'should be object'
          });
        });

        it('must have a *cellId* property', function () {
          assert.hasError('solution-no-cellId', {
            '.solutions[0].cellId': 'property .cellId is required'
          });
        });

        describe('The *cellId* property', function () {
          it('must be a string', function () {
            assert.hasError('solution-cell-id-is-not-a-string', {
              '.solutions[0].cellId': 'should be string'
            });
          });
        });

        it('must have an *answers* property', function () {
          assert.hasError('solution-no-answers', {
            '.solutions[0].answers': 'property .answers is required'
          });
        });

        describe('The *answers* property', function () {
          it('must be an array', function () {
            assert.hasError('solution-answers-is-not-an-array', {
              '.solutions[0].answers': 'should be array'
            });
          });
        });

        describe('Each answer', function(){
          it('must satisfy the #keyword# schema', function () {
            assert.hasErrors('solution-answer-not-satisfying-keyword-schema', {
              '.solutions[0].answers[0].caseSensitive': 'property .caseSensitive is required',
              '.solutions[0].answers[1].text': 'property .text is required',
              '.solutions[1].answers[0].score': 'property .score is required'
            });
          });
        });
      });
    });

    describe('The *cells* property', function () {
      it('must be an array', function () {
        assert.hasError('cells-is-not-an-array', {
          '.cells': 'should be array'
        });
      });

      it('must contain at least one cell', function () {
        assert.hasError('cells-under-one-cell', {
          '.cells': 'should NOT have less than 1 items'
        });
      });

      describe('Each cell', function () {

        it('must be unique', function () {
          assert.hasError('cells-duplicate-cells', {
            '.cells': 'items ## 0 and 2 are duplicate'
          });
        });

        it('must have an *id* property', function () {
          assert.hasError('cell-no-id', {
            '.cells[0].id': 'property .id is required'
          });
        });

        it('must have a *coordinates* property', function () {
          assert.hasError('cell-no-coordinates', {
            '.cells[0].coordinates': 'property .coordinates is required'
          });
        });

        it('must have a *background* property', function () {
          assert.hasError('cell-no-background', {
            '.cells[0].background': 'property .background is required'
          });
        });

        it('must have a *color* property', function () {
          assert.hasError('cell-no-color', {
            '.cells[0].color': 'property .color is required'
          });
        });

        it('may have a *data* property', function () {
          assert.isValid('solutions');
        });

        it('may have a *choices* property', function () {
          assert.isValid('solutions');
        });

        describe('The *id* property', function () {
          it('must be a string', function () {
            assert.hasError('cell-id-not-a-string', {
              '.cells[0].id': 'should be string'
            });
          });
        });

        describe('The *coordinates* property', function () {
          it('must be an array', function () {
            assert.hasError('cell-coordinates-not-an-array', {
              '.cells[0].coordinates': 'should be array'
            });
          });
        });

        describe('The *color* property', function () {
          it('must be a string', function () {
            assert.hasError('cell-color-not-a-string', {
              '.cells[0].color': 'should be string'
            });
          });
        });

        describe('The *background* property', function () {
          it('must be a string', function () {
            assert.hasError('cell-background-not-a-string', {
              '.cells[0].background': 'should be string'
            });
          });
        });

      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'basic',
      'extended',
      'solutions',
      'feedback'
    ]);
  });
});
