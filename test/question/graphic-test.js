var assert = require('./../../assert')('graphic-question');

describe('Graphic question', function () {
  describe('Definitions', function () {
    describe('The *coord* type', function () {
      it('must be an object', function () {
        assert.hasErrors('graphic-coord-is-not-an-object', {
          '.solutions[0].area.center': 'should be object',
          '.solutions[1].area.coords[0]': 'should be object'
        });
      });
      it('must have an *x* property', function () {
        assert.hasError('graphic-coord-no-x', {
          '.solutions[0].area.center.x': 'property .x is required',
          '.solutions[1].area.coords[0].x': 'property .x is required'
        });
      });
      it('must have an *y* property', function () {
        assert.hasError('graphic-coord-no-y', {
          '.solutions[0].area.center.y': 'property .y is required',
          '.solutions[1].area.coords[0].y': 'property .y is required'
        });
      });
      describe('The *x* property', function () {
        it('must be a number', function () {
          assert.hasError('graphic-coord-x-is-not-a-number', {
            '.solutions[0].area.center.x': 'should be number',
            '.solutions[1].area.coords[0].x': 'should be number'
          });
        });
      });
      describe('The *y* property', function () {
        it('must be a number', function () {
          assert.hasError('graphic-coord-y-is-not-a-number', {
            '.solutions[0].area.center.y': 'should be number',
            '.solutions[1].area.coords[0].y': 'should be number'
          });
        });
      });
    });

    describe('The *area* type', function () {
      it('must be an object', function () {
        assert.hasError('graphic-area-is-not-an-object', {
          '.solutions[0].area': 'should be object'
        });
      });
      it('must have an *id* property', function () {
        assert.hasError('graphic-area-no-id', {
          '.solutions[0].area.id': 'property .id is required'
        });
      });
      it('must have a *shape* property', function () {
        assert.hasError('graphic-area-no-shape', {
          '.solutions[0].area.shape': 'property .shape is required'
        });
      });
      describe('The *id* property', function () {
        it('must be a string', function () {
          assert.hasError('graphic-area-id-is-not-a-string', {
            '.solutions[0].area.id': 'should be string'
          });
        });
      });
      describe('The *shape* property', function () {
        it('must be either "circle", "rect" or "poly"', function () {
          assert.hasError('graphic-area-shape-not-enum', {
            '.solutions[0].area.shape': 'should be equal to one of values'
          });
        });
      });
      describe('A "circle" area', function () {
        it('must have a *center* property', function () {
          assert.hasError('graphic-area-circle-no-center', {
            '.solutions[0].area.center': 'property .center is required'
          });
        });
        it('must have a *radius* property', function () {
          assert.hasError('graphic-area-circle-no-radius', {
            '.solutions[0].area.radius': 'property .radius is required'
          });
        });
        describe('The *center* property', function () {
          it('must be of type *coord*', function () {
            assert.hasError('graphic-area-circle-center-is-not-a-coord', {
              '.solutions[0].area.center': 'should be object'
            });
          });
        });
        describe('The *radius* property', function () {
          it('must be a number', function () {
            assert.hasError('graphic-area-circle-radius-is-not-a-number', {
              '.solutions[0].area.radius': 'should be number'
            });
          });
        });
      });
      describe('A "rect" or "poly" area', function () {
        it('must have a *coords* property', function () {
          assert.hasError('graphic-area-no-coords', {
            '.solutions[0].area.coords': 'property .coords is required'
          });
        });
        describe('The *coords* property', function () {
          it('must be an array', function () {
            assert.hasError('graphic-area-coords-is-not-an-array', {
              '.solutions[0].area.coords': 'should be array'
            });
          });
          describe('Each coord', function () {
            it('must be of type *coord*', function () {
              assert.hasError('graphic-area-coord-is-not-an-object', {
                '.solutions[0].area.coords[0]': 'should be object'
              });
            });
            it('must be unique', function () {
              assert.hasError('graphic-area-duplicate-coords', {
                '.solutions[0].area.coords': 'items ## 0 and 1 are duplicate'
              });
            });
          });
        });
      });
      describe('A "rect" area', function () {
        it('must have exactly 2 *coords* items', function () {
          assert.hasError('graphic-area-rect-coords-less-2-items', {
            '.solutions[0].area.coords': 'should NOT have less than 2 items'
          });
          assert.hasError('graphic-area-rect-coords-more-2-items', {
            '.solutions[0].area.coords': 'should NOT have more than 2 items'
          });
        });
      });
      describe('A "poly" area', function () {
        it('must have at least 3 *coords* items', function () {
          assert.hasError('graphic-area-poly-coords-less-3-items', {
            '.solutions[0].area.coords': 'should NOT have less than 3 items'
          });
        });
      });
    });
  });

  describe('Schema', function () {
    describe('A graphic question', function () {
      it('must satisfy the #base-question# schema', function () {
        assert.hasErrors('graphic-not-satisfying-base-schema', {
          '.id': 'property .id is required',
          '.type': 'property .type is required',
          '.content': 'property .content is required',
          '.meta': 'should be object',
          '.objects': 'should be array'
        });
      });
      it('must have an *image* property', function () {
        assert.hasError('graphic-no-image', {
          '.image': 'property .image is required'
        });
      });
      it('must have a *pointers* property', function () {
        assert.hasError('graphic-no-pointers', {
          '.pointers': 'property .pointers is required'
        });
      });
      it('may have a *solutions* property', function () {
        assert.isValid('graphic-solutions');
      });
    });
    describe('The *image* property', function () {
      it('must have an *id* property', function () {
        assert.hasError('graphic-image-no-id', {
          '.image.id': 'property .id is required'
        });
      });
      it('must have an *url* property', function () {
        assert.hasError('graphic-image-no-url', {
          '.image.url': 'property .url is required'
        });
      });
      it('must have a *width* property', function () {
        assert.hasError('graphic-image-no-width', {
          '.image.width': 'property .width is required'
        });
      });
      it('must have a *height* property', function () {
        assert.hasError('graphic-image-no-height', {
          '.image.height': 'property .height is required'
        });
      });
      it('must be an object', function () {
        assert.hasError('graphic-image-is-not-an-object', {
          '.image': 'should be object'
        });
      });
    });
    describe('the *solutions* property', function () {
      it('must be an array', function () {
        assert.hasError('graphic-solutions-is-not-an-array', {
          '.solutions': 'should be array'
        });
      });
      it('must contain at least one solution', function () {
        assert.hasError('graphic-under-one-solution', {
          '.solutions': 'should NOT have less than 1 items'
        });
      });
      describe('Each solution', function () {
        it('must be an object', function () {
          assert.hasError('graphic-solution-is-not-an-object', {
            '.solutions[0]': 'should be object'
          });
        });
        it('must be unique', function () {
          assert.hasError('graphic-duplicate-solutions', {
            '.solutions': 'items ## 0 and 1 are duplicate'
          });
        });
        it('must have a *score* property', function () {
          assert.hasError('graphic-solution-no-score', {
            '.solutions[0].score': 'property .score is required'
          });
        });
        it('must have an *area* property', function () {
          assert.hasError('graphic-solution-no-area', {
            '.solutions[0].area': 'property .area is required'
          });
        });
        it('may have a *feedback* property', function () {
          assert.isValid('graphic-solutions');
        });
        describe('The *area* property', function () {
          it('must be of type *area*', function () {
            assert.hasError('graphic-solution-invalid-area', {
              '.solutions[0].area.shape': 'should be equal to one of values'
            });
          });
        });
        describe('The *score* property', function () {
          it('must be a number', function () {
            assert.hasError('graphic-solution-score-is-not-a-number', {
              '.solutions[0].score': 'should be number'
            });
          });
        });
        describe('The *feedback* property', function () {
          it('must be a string', function () {
            assert.hasError('graphic-solution-feedback-is-not-a-string', {
              '.solutions[0].feedback': 'should be string'
            });
          });
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'graphic-simple',
      'graphic-extended',
      'graphic-solutions',
      'graphic-with-meta'
    ]);
  });
});
