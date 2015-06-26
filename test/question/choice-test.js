var helpers = require('./../../test-helpers');

describe('Choice type', function () {
  describe('Structure', function () {
    describe('A choice question', function () {
      it('must be an object', function () {
        helpers.assertHasError('question/choice', 'invalid/not-an-object.json', {
          '': 'should be object'
        });
      });

      it('must have an *id* property', function () {
        helpers.assertHasError('question/choice', 'invalid/no-id-property.json', {
          '': 'properties id, title, random, multiple, choices are required'
        });
      });

      it('must have a *title* property', function () {
        helpers.assertHasError('question/choice', 'invalid/no-title-property.json', {
          '': 'properties id, title, random, multiple, choices are required'
        });
      });

      it('must have a *multiple* property', function () {
        helpers.assertHasError('question/choice', 'invalid/no-multiple-property.json', {
          '': 'properties id, title, random, multiple, choices are required'
        });
      });

      it('must have a *random* property', function () {
        helpers.assertHasError('question/choice', 'invalid/no-random-property.json', {
          '': 'properties id, title, random, multiple, choices are required'
        });
      });

      it('must have a *choices* property', function () {
        helpers.assertHasError('question/choice', 'invalid/no-choices-property.json', {
          '': 'properties id, title, random, multiple, choices are required'
        });
      });

      it('may have a *hints* property', function () {
        // nothing to test...
      });

      it('may have a *feedback* property', function () {
        // nothing to test...
      });

      it('may have a *solutions* property', function () {
        // nothing to test...
      });

      describe('The *id* property', function () {
        it('must be a string', function () {
          helpers.assertHasError('question/choice', 'invalid/id-is-not-a-string.json', {
            '.id': 'should be string'
          });
        });
      });

      describe('The *title* property', function () {
        it('must be a string', function () {
          helpers.assertHasError('question/choice', 'invalid/title-is-not-a-string.json', {
            '.title': 'should be string'
          });
        });
      });

      describe('The *multiple* property', function () {
        it('must be a boolean', function () {
          helpers.assertHasError('question/choice', 'invalid/multiple-is-not-a-boolean.json', {
            '.multiple': 'should be boolean'
          });
        });
      });

      describe('The *random* property', function () {
        it('must be a boolean', function () {
          helpers.assertHasError('question/choice', 'invalid/random-is-not-a-boolean.json', {
            '.random': 'should be boolean'
          });
        });
      });

      describe('The *choices* property', function () {
        it('must be an array', function () {
          helpers.assertHasError('question/choice', 'invalid/choices-is-not-an-array.json', {
            '.choices': 'should be array'
          });
        });

        it('must contain at least two choices', function () {
          helpers.assertHasError('question/choice', 'invalid/under-two-choices.json', {
            '.choices': 'should NOT have less than 2 items'
          });
        });

        describe('Each choice', function () {
          it('must be an object', function () {
            helpers.assertHasError('question/choice', 'invalid/choice-is-not-an-object.json', {
              '.choices[0]': 'should be object'
            });
          });

          it('must be unique', function () {
            helpers.assertHasError('question/choice', 'invalid/duplicate-choices.json', {
              '.choices': 'items ## 0 and 2 are duplicate'
            });
          });

          it('must have an *id* property', function () {
            helpers.assertHasError('question/choice', 'invalid/no-choice-id.json', {
              '.choices[0]': 'properties id, type, data are required'
            });
          });

          it('must have a *type* property', function () {
            helpers.assertHasError('question/choice', 'invalid/no-choice-type.json', {
              '.choices[0]': 'properties id, type, data are required'
            });
          });

          it('must have either a *data* or an *url* property', function () {
            helpers.assertHasError('question/choice', 'invalid/no-choice-data-nor-url.json', {
              '.choices[0]': 'properties id, type, data are required'
            });
            helpers.assertHasError('question/choice', 'invalid/no-choice-data-nor-url.json', {
              '.choices[0]': 'properties id, type, url are required'
            });
          });

          describe('The *id* property', function () {
            it('must be a string', function () {
              helpers.assertHasError('question/choice', 'invalid/choice-id-is-not-a-string.json', {
                '.choices[1].id': 'should be string'
              });
            });
          });

          describe('The *type* property', function () {
            it('must be a string', function () {
              helpers.assertHasError('question/choice', 'invalid/choice-type-is-not-a-string.json', {
                '.choices[0].type': 'should be string'
              });
            });

            it('must hold a MIME type', function () {
              helpers.assertHasError('question/choice', 'invalid/choice-type-is-not-a-mime.json', {
                '.choices[0].type': 'should match pattern \"^[^/]+/[^/]+$\"'
              });
            });
          });

          describe('The *url* property', function () {
            it('must be a string', function () {
              helpers.assertHasError('question/choice', 'invalid/choice-url-is-not-a-string.json', {
                '.choices[1].url': 'should be string'
              });
            });

            it('must hold an URL', function () {
              helpers.assertHasError('question/choice', 'invalid/choice-url-is-not-valid.json', {
                '.choices[1].url': 'should match format uri'
              });
            });
          });

          describe('The *data* property', function () {
            it('must be a string', function () {
              helpers.assertHasError('question/choice', 'invalid/choice-data-is-not-a-string.json', {
                '.choices[0].data': 'should be string'
              });
            });

            it('may have an associated *encoding* property', function () {
              helpers.assertHasError('question/choice', 'invalid/choice-encoding-with-url.json', {
                ".choices[0]['encoding']": 'additional properties NOT allowed'
              });
            });

            describe('The *encoding* property', function () {
              it('must be a string', function () {
                helpers.assertHasError('question/choice', 'invalid/choice-encoding-is-not-a-string.json', {
                  '.choices[0].encoding': 'should be string'
                });
              });
            });
          });
        });
      });

      describe('The *hints* property', function () {
        it('must be an array', function () {
          helpers.assertHasError('question/choice', 'invalid/hints-is-not-an-array.json', {
            '.hints': 'should be array'
          });
        });

        it('must contain at least one hint', function () {
          helpers.assertHasError('question/choice', 'invalid/under-one-hint.json', {
            '.hints': 'should NOT have less than 1 items'
          });
        });

        describe('Each hint', function () {
          it('must be an object', function () {
            helpers.assertHasError('question/choice', 'invalid/hint-is-not-an-object.json', {
              '.hints[0]': 'should be object'
            });
          });

          it('must be unique', function () {
            helpers.assertHasError('question/choice', 'invalid/duplicate-hints.json', {
              '.hints': 'items ## 0 and 1 are duplicate'
            });
          });

          it('must have an *id* property', function () {
            helpers.assertHasError('question/choice', 'invalid/no-hint-id.json', {
              '.hints[0]': 'properties id, text are required'
            });
          });

          it('must have a *text* property', function () {
            helpers.assertHasError('question/choice', 'invalid/no-hint-text.json', {
              '.hints[0]': 'properties id, text are required'
            });
          });

          it('may have a *penalty* property', function () {
            // nothing to test...
          });

          describe('The *id* property', function () {
            it('must be a string', function () {
              helpers.assertHasError('question/choice', 'invalid/hint-id-is-not-a-string.json', {
                '.hints[0].id': 'should be string'
              });
            });
          });

          describe('The *text* property', function () {
            it('must be a string', function () {
              helpers.assertHasError('question/choice', 'invalid/hint-text-is-not-a-string.json', {
                '.hints[0].text': 'should be string'
              });
            });
          });

          describe('The *penalty* property', function () {
            it('must be a number', function () {
              helpers.assertHasError('question/choice', 'invalid/hint-penalty-is-not-a-number.json', {
                '.hints[0].penalty': 'should be number'
              });
            });

            it('must be greater than zero', function () {
              helpers.assertHasError('question/choice', 'invalid/hint-penalty-is-less-than-zero.json', {
                '.hints[0].penalty': 'should be > 0'
              });
              helpers.assertHasError('question/choice', 'invalid/hint-penalty-equals-zero.json', {
                '.hints[0].penalty': 'should be > 0'
              });
            });
          });
        });
      });

      describe('the *solutions* property', function () {
        it('must be an array', function () {
          helpers.assertHasError('question/choice', 'invalid/solutions-is-not-an-array.json', {
            '.solutions': 'should be array'
          });
        });

        it('must contain at least one solution', function () {
          helpers.assertHasError('question/choice', 'invalid/under-one-solution.json', {
            '.solutions': 'should NOT have less than 1 items'
          });
        });

        describe('Each solution', function () {
          it('must be a string', function () {
            helpers.assertHasError('question/choice', 'invalid/solution-is-not-a-string.json', {
              '.solutions[1]': 'should be string'
            });
          });
        })
      });

      describe('The *feedback* property', function () {
        it('must be a string', function () {
          helpers.assertHasError('question/choice', 'invalid/feedback-is-not-a-string.json', {
            '.feedback': 'should be string'
          });
        });
      });
    });
  });

  describe('Examples', function () {
    var examples = [
      'true-false',
      'distant-medias',
      'embedded-medias',
      'global-feedback',
      'hints-no-penalty',
      'hints-penalty',
      'solutions'
    ];

    examples.forEach(function (example) {
      it(example + '.json', function () {
        helpers.assertIsValid('question/choice', 'valid/' + example + '.json', []);
      });
    });
  });
});