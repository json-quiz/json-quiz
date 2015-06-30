var helpers = require('./../../test-helpers');

describe('Choice type', function () {
  describe('Structure', function () {
    describe('A choice question', function () {
      it('must be an object', function () {
        helpers.assertHasError('question-choice', 'invalid/not-an-object.json', {
          '': 'should be object'
        });
      });

      it('must have an *id* property', function () {
        helpers.assertHasError('question-choice', 'invalid/no-id-property.json', {
          '': 'properties id, title, random, multiple, choices are required'
        });
      });

      it('must have a *title* property', function () {
        helpers.assertHasError('question-choice', 'invalid/no-title-property.json', {
          '': 'properties id, title, random, multiple, choices are required'
        });
      });

      it('must have a *multiple* property', function () {
        helpers.assertHasError('question-choice', 'invalid/no-multiple-property.json', {
          '': 'properties id, title, random, multiple, choices are required'
        });
      });

      it('must have a *random* property', function () {
        helpers.assertHasError('question-choice', 'invalid/no-random-property.json', {
          '': 'properties id, title, random, multiple, choices are required'
        });
      });

      it('must have a *choices* property', function () {
        helpers.assertHasError('question-choice', 'invalid/no-choices-property.json', {
          '': 'properties id, title, random, multiple, choices are required'
        });
      });

      it('may have a *meta* property', function () {
        helpers.assertIsValid('question-choice', 'valid/with-metadata.json');
      });

      it('may have an *meta* property', function () {
        helpers.assertIsValid('question-choice', 'valid/with-metadata.json');
      });

      it('may have an *objects* property', function () {
        helpers.assertIsValid('question-choice', 'valid/with-object.json');
      });

      it('may have a *resources* property', function () {
        helpers.assertIsValid('question-choice', 'valid/with-resource.json');
      });

      it('may have a *feedback* property', function () {
        helpers.assertIsValid('question-choice', 'valid/global-feedback.json');
      });

      it('may have a *solutions* property', function () {
        helpers.assertIsValid('question-choice', 'valid/solutions.json');
      });

      describe('The *id* property', function () {
        it('must be a string', function () {
          helpers.assertHasError('question-choice', 'invalid/id-is-not-a-string.json', {
            '.id': 'should be string'
          });
        });
      });

      describe('The *title* property', function () {
        it('must be a string', function () {
          helpers.assertHasError('question-choice', 'invalid/title-is-not-a-string.json', {
            '.title': 'should be string'
          });
        });
      });

      describe('The *multiple* property', function () {
        it('must be a boolean', function () {
          helpers.assertHasError('question-choice', 'invalid/multiple-is-not-a-boolean.json', {
            '.multiple': 'should be boolean'
          });
        });
      });

      describe('The *random* property', function () {
        it('must be a boolean', function () {
          helpers.assertHasError('question-choice', 'invalid/random-is-not-a-boolean.json', {
            '.random': 'should be boolean'
          });
        });
      });

      describe('The *choices* property', function () {
        it('must be an array', function () {
          helpers.assertHasError('question-choice', 'invalid/choices-is-not-an-array.json', {
            '.choices': 'should be array'
          });
        });

        it('must contain at least two choices', function () {
          helpers.assertHasError('question-choice', 'invalid/under-two-choices.json', {
            '.choices': 'should NOT have less than 2 items'
          });
        });

        describe('Each choice', function () {
          it('must be a #content# block', function () {
            helpers.assertHasError('question-choice', 'invalid/choice-is-not-a-content-block.json', {
              '.choices[0]': 'should be object'
            });
          });

          it('must be unique', function () {
            helpers.assertHasError('question-choice', 'invalid/duplicate-choices.json', {
              '.choices': 'items ## 0 and 2 are duplicate'
            });
          });
        });
      });

      describe('The *meta* property', function () {
        it('must be a #metadata# block', function () {
            helpers.assertHasError('question-choice', 'invalid/meta-is-not-a-metadata-block.json', {
              '.meta': 'should be object'
            });
          });
      });

      describe('The *objects* property', function () {
        it('must be an array', function () {
          helpers.assertHasError('question-choice', 'invalid/objects-is-not-an-array.json', {
            '.objects': 'should be array'
          });
        });

        it('must contain at least one object', function () {
          helpers.assertHasError('question-choice', 'invalid/under-one-object.json', {
            '.objects': 'should NOT have less than 1 items'
          });
        });

        describe('Each choice', function () {
          it('must be a #content# block', function () {
            helpers.assertHasError('question-choice', 'invalid/object-is-not-a-content-block.json', {
              '.objects[0]': 'should be object'
            });
          });

          it('must be unique', function () {
            helpers.assertHasError('question-choice', 'invalid/duplicate-objects.json', {
              '.objects': 'items ## 0 and 1 are duplicate'
            });
          });
        });
      });

      describe('The *resources* property', function () {
        it('must be an array', function () {
          helpers.assertHasError('question-choice', 'invalid/resources-is-not-an-array.json', {
            '.resources': 'should be array'
          });
        });

        it('must contain at least two choices', function () {
          helpers.assertHasError('question-choice', 'invalid/under-one-resource.json', {
            '.resources': 'should NOT have less than 1 items'
          });
        });

        describe('Each resource', function () {
          it('must be a #content# block', function () {
            helpers.assertHasError('question-choice', 'invalid/resource-is-not-a-content-block.json', {
              '.resources[0]': 'should be object'
            });
          });

          it('must be unique', function () {
            helpers.assertHasError('question-choice', 'invalid/duplicate-resources.json', {
              '.resources': 'items ## 0 and 1 are duplicate'
            });
          });
        });
      });

      describe('The *hints* property', function () {
        it('must be an array', function () {
          helpers.assertHasError('question-choice', 'invalid/hints-is-not-an-array.json', {
            '.hints': 'should be array'
          });
        });

        it('must contain at least one hint', function () {
          helpers.assertHasError('question-choice', 'invalid/under-one-hint.json', {
            '.hints': 'should NOT have less than 1 items'
          });
        });

        describe('Each hint', function () {
          it('must be an object', function () {
            helpers.assertHasError('question-choice', 'invalid/hint-is-not-an-object.json', {
              '.hints[0]': 'should be object'
            });
          });

          it('must be unique', function () {
            helpers.assertHasError('question-choice', 'invalid/duplicate-hints.json', {
              '.hints': 'items ## 0 and 1 are duplicate'
            });
          });

          it('must have an *id* property', function () {
            helpers.assertHasError('question-choice', 'invalid/no-hint-id.json', {
              '.hints[0]': 'properties id, text are required'
            });
          });

          it('must have a *text* property', function () {
            helpers.assertHasError('question-choice', 'invalid/no-hint-text.json', {
              '.hints[0]': 'properties id, text are required'
            });
          });

          it('may have a *penalty* property', function () {
            helpers.assertIsValid('question-choice', 'valid/hints-penalty.json');
          });

          describe('The *id* property', function () {
            it('must be a string', function () {
              helpers.assertHasError('question-choice', 'invalid/hint-id-is-not-a-string.json', {
                '.hints[0].id': 'should be string'
              });
            });
          });

          describe('The *text* property', function () {
            it('must be a string', function () {
              helpers.assertHasError('question-choice', 'invalid/hint-text-is-not-a-string.json', {
                '.hints[0].text': 'should be string'
              });
            });
          });

          describe('The *penalty* property', function () {
            it('must be a number', function () {
              helpers.assertHasError('question-choice', 'invalid/hint-penalty-is-not-a-number.json', {
                '.hints[0].penalty': 'should be number'
              });
            });

            it('must be greater than zero', function () {
              helpers.assertHasError('question-choice', 'invalid/hint-penalty-is-less-than-zero.json', {
                '.hints[0].penalty': 'should be > 0'
              });
              helpers.assertHasError('question-choice', 'invalid/hint-penalty-equals-zero.json', {
                '.hints[0].penalty': 'should be > 0'
              });
            });
          });
        });
      });

      describe('the *solutions* property', function () {
        it('must be an array', function () {
          helpers.assertHasError('question-choice', 'invalid/solutions-is-not-an-array.json', {
            '.solutions': 'should be array'
          });
        });

        it('must contain at least one solution', function () {
          helpers.assertHasError('question-choice', 'invalid/under-one-solution.json', {
            '.solutions': 'should NOT have less than 1 items'
          });
        });

        describe('Each solution', function () {
          it('must be an object', function () {
            helpers.assertHasError('question-choice', 'invalid/solution-is-not-an-object.json', {
              '.solutions[0]': 'should be object'
            });
          });

          it('must be unique', function () {
            helpers.assertHasError('question-choice', 'invalid/duplicate-solutions.json', {
              '.solutions': 'items ## 0 and 1 are duplicate'
            });
          });

          it('must have an *id* property', function () {
            helpers.assertHasError('question-choice', 'invalid/no-solution-id.json', {
              '.solutions[0]': 'properties id, score are required'
            });
          });

          it('must have a *score* property', function () {
            helpers.assertHasError('question-choice', 'invalid/no-solution-score.json', {
              '.solutions[0]': 'properties id, score are required'
            });
          });

          describe('The *id* property', function () {
            it('must be a string', function () {
              helpers.assertHasError('question-choice', 'invalid/solution-id-is-not-a-string.json', {
                '.solutions[0].id': 'should be string'
              });
            });
          });

          describe('The *score* property', function () {
            it('must be a number', function () {
              helpers.assertHasError('question-choice', 'invalid/solution-score-is-not-a-number.json', {
                '.solutions[0].score': 'should be number'
              });
            });
          });
        })
      });

      describe('The *feedback* property', function () {
        it('must be a string', function () {
          helpers.assertHasError('question-choice', 'invalid/feedback-is-not-a-string.json', {
            '.feedback': 'should be string'
          });
        });
      });
    });
  });

  describe('Examples', function () {
    var examples = [
      'true-false',
      'with-metadata',
      'with-object',
      'with-resource',
      'global-feedback',
      'hints-no-penalty',
      'hints-penalty',
      'solutions'
    ];

    examples.forEach(function (example) {
      it(example + '.json', function () {
        helpers.assertIsValid('question-choice', 'valid/' + example + '.json', []);
      });
    });
  });
});