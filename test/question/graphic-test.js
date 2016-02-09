var assert = require('./../../assert')('graphic-question');

describe('Graphic question', function () {
  describe('Schema', function () {

    describe('A graphic question', function () {
      it('must satisfy the #base-question# schema', function () {
        assert.hasErrors('graphic-not-satisfying-base-schema', {
          '.id': 'property .id is required',
          '.type': 'property .type is required',
          '.title': 'property .title is required',
          '.meta': 'should be object',
          '.objects': 'should be array'
        });
      });

      it('must have a *image* property', function () {
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
        it('must have a *area* property', function () {
          assert.hasError('graphic-solution-no-area', {
            '.solutions[0].area': 'property .area is required'
          });
        });
        
        describe('The *area* property', function () {
          it('must have an *id* property', function () {
            assert.hasError('graphic-solution-area-no-id', {
              '.solutions[0].area.id': 'property .id is required'
            });
          });
          describe('The *id* property', function () {
            it('must be a string', function () {
              assert.hasError('graphic-solution-area-id-is-not-a-string', {
                '.solutions[0].area.id': 'should be string'
              });
            });
          });
          
          it('must fit only one schema', function () {
            assert.hasError('graphic-solution-area-should-match-one-schema', {
              '.solutions[0].area': "should match exactly one schema in oneOf"
            });
          });
          
          it('must have a *shape* property', function () {
            assert.hasError('graphic-solution-area-no-shape', {
              '.solutions[0].area.shape': 'property .shape is required'
            });
          });
          describe('The *shape* property', function () {
            it('must be a circle, rect or poly', function () {
              assert.hasError('graphic-solution-area-shape-no-enum', {
                '.solutions[0].area.shape': 'should be equal to one of values'
              });
            });
          });
          
          it('must have a *coords* property', function () {
            assert.hasError('graphic-solution-area-no-coords', {
              '.solutions[0].area.coords': 'property .coords is required'
            });
          });
          describe('The *coords* property', function () {
            it('must be an array', function () {
              assert.hasError('graphic-solution-area-coords-is-not-an-array', {
                '.solutions[0].area.coords': 'should be array'
              });
            });
            it('must contain at least one coord id', function () {
              assert.hasError('graphic-solution-area-coords-empty', {
                '.solutions[0].area.coords': 'should NOT have less than 2 items'
              });
            });
            
            describe('Each coord', function () {
              it('must be an object', function () {
                assert.hasError('graphic-solution-area-coords-is-not-an-object', {
                  '.solutions[0].area.coords[0]': 'should be object'
                });
              });
            /*  it('must be unique', function () {
                assert.hasError('graphic-solution-area-duplicate-coords', {
                  '.solutions[0].area.coords': 'items ## 0 and 1 are duplicate'
                });
              });*/
            });
          });
          
          it('must have a *radius* property', function () {
            assert.hasError('graphic-solution-area-no-radius', {
              '.solutions[0].area.radius': 'property .radius is required'
            });
          });
          describe('The *radius* property', function () {
            assert.hasError('graphic-solution-area-radius-is-not-a-number', {
              '.solutions[0].area.radius': 'should be number'
            });
          });
          
          it('must have a *center* property', function () {
            assert.hasError('graphic-solution-area-no-center', {
              '.solutions[0].area.center': 'property .center is required'
            });
          });
          describe('The *center* property', function () {
            assert.hasError('graphic-solution-area-center-is-not-an-object', {
              '.solutions[0].area.center': 'should be object'
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
