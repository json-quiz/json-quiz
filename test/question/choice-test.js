var helpers = require('./../../test-helpers');

describe('Choice type', function () {
  describe('Structure', function () {
    describe('A choice question', function () {
      it('must satisfy question-common schema', function () {
        helpers.assertHasError('question-choice', 'invalid/not-satisfying-common-schema.json', {
          '.id': 'property .id is required'
        });
        helpers.assertHasError('question-choice', 'invalid/not-satisfying-common-schema.json', {
          '.title': 'property .title is required'
        });
        helpers.assertHasError('question-choice', 'invalid/not-satisfying-common-schema.json', {
          '.meta': 'should be object'
        });
        helpers.assertHasError('question-choice', 'invalid/not-satisfying-common-schema.json', {
          '.objects': 'should be array'
        });
      });

      it('must have a *multiple* property', function () {
        helpers.assertHasError('question-choice', 'invalid/no-multiple-property.json', {
          '.multiple': 'property .multiple is required'
        });
      });

      it('must have a *random* property', function () {
        helpers.assertHasError('question-choice', 'invalid/no-random-property.json', {
          '.random': 'property .random is required'
        });
      });

      it('must have a *choices* property', function () {
        helpers.assertHasError('question-choice', 'invalid/no-choices-property.json', {
          '.choices': 'property .choices is required'
        });
      });

      it('may have a *solutions* property', function () {
        helpers.assertIsValid('question-choice', 'valid/solutions.json');
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
            '.solutions[0].id': 'property .id is required'
          });
        });

        it('must have a *score* property', function () {
          helpers.assertHasError('question-choice', 'invalid/no-solution-score.json', {
            '.solutions[0].score': 'property .score is required'
          });
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
    });
  });

  describe('Examples', function () {
    var examples = [
      'true-false',
      'solutions',
      'full'
    ];

    examples.forEach(function (example) {
      it('format/question/choice/examples/valid/' + example + '.json', function () {
        helpers.assertIsValid('question-choice', 'valid/' + example + '.json', []);
      });
    });
  });
});
