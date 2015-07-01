var helpers = require('./../../test-helpers');

describe('Common type', function () {
  describe('Structure', function () {
    describe('A question', function () {
      it('must be an object', function () {
        helpers.assertHasError('question-common', 'invalid/not-an-object.json', {
          '': 'should be object'
        });
      });

      it('must have an *id* property', function () {
        helpers.assertHasError('question-common', 'invalid/no-id.json', {
          '.id': 'property .id is required'
        });
      });

      it('must have a *title* property', function () {
        helpers.assertHasError('question-common', 'invalid/no-title.json', {
          '.title': 'property .title is required'
        });
      });

      it('may have an *meta* property', function () {
        helpers.assertIsValid('question-common', 'valid/with-metadata.json');
      });

      it('may have an *objects* property', function () {
        helpers.assertIsValid('question-common', 'valid/with-object.json');
      });

      it('may have a *resources* property', function () {
        helpers.assertIsValid('question-common', 'valid/with-resource.json');
      });

      it('may have a *feedback* property', function () {
        helpers.assertIsValid('question-common', 'valid/global-feedback.json');
      });
    });

    describe('The *id* property', function () {
      it('must be a string', function () {
        helpers.assertHasError('question-common', 'invalid/id-is-not-a-string.json', {
          '.id': 'should be string'
        });
      });
    });

    describe('The *title* property', function () {
      it('must be a string', function () {
        helpers.assertHasError('question-common', 'invalid/title-is-not-a-string.json', {
          '.title': 'should be string'
        });
      });
    });

    describe('The *meta* property', function () {
      it('must be a #metadata# block', function () {
        helpers.assertHasError('question-common', 'invalid/meta-is-not-a-metadata-block.json', {
          '.meta': 'should be object'
        });
      });
    });

    describe('The *objects* property', function () {
      it('must be an array', function () {
        helpers.assertHasError('question-common', 'invalid/objects-is-not-an-array.json', {
          '.objects': 'should be array'
        });
      });

      it('must contain at least one object', function () {
        helpers.assertHasError('question-common', 'invalid/under-one-object.json', {
          '.objects': 'should NOT have less than 1 items'
        });
      });

      describe('Each object', function () {
        it('must be a #content# block', function () {
          helpers.assertHasError('question-common', 'invalid/object-is-not-a-content-block.json', {
            '.objects[0]': 'should be object'
          });
        });

        it('must be unique', function () {
          helpers.assertHasError('question-common', 'invalid/duplicate-objects.json', {
            '.objects': 'items ## 0 and 1 are duplicate'
          });
        });
      });
    });

    describe('The *resources* property', function () {
      it('must be an array', function () {
        helpers.assertHasError('question-common', 'invalid/resources-is-not-an-array.json', {
          '.resources': 'should be array'
        });
      });

      it('must contain at least one resource', function () {
        helpers.assertHasError('question-common', 'invalid/under-one-resource.json', {
          '.resources': 'should NOT have less than 1 items'
        });
      });

      describe('Each resource', function () {
        it('must be a #content# block', function () {
          helpers.assertHasError('question-common', 'invalid/resource-is-not-a-content-block.json', {
            '.resources[0]': 'should be object'
          });
        });

        it('must be unique', function () {
          helpers.assertHasError('question-common', 'invalid/duplicate-resources.json', {
            '.resources': 'items ## 0 and 1 are duplicate'
          });
        });
      });
    });

    describe('The *hints* property', function () {
      it('must be an array', function () {
        helpers.assertHasError('question-common', 'invalid/hints-is-not-an-array.json', {
          '.hints': 'should be array'
        });
      });

      it('must contain at least one hint', function () {
        helpers.assertHasError('question-common', 'invalid/under-one-hint.json', {
          '.hints': 'should NOT have less than 1 items'
        });
      });

      describe('Each hint', function () {
        it('must be an object', function () {
          helpers.assertHasError('question-common', 'invalid/hint-is-not-an-object.json', {
            '.hints[0]': 'should be object'
          });
        });

        it('must be unique', function () {
          helpers.assertHasError('question-common', 'invalid/duplicate-hints.json', {
            '.hints': 'items ## 0 and 1 are duplicate'
          });
        });

        it('must have an *id* property', function () {
          helpers.assertHasError('question-common', 'invalid/no-hint-id.json', {
            '.hints[0].id': 'property .id is required'
          });
        });

        it('must have a *text* property', function () {
          helpers.assertHasError('question-common', 'invalid/no-hint-text.json', {
            '.hints[0].text': 'property .text is required'
          });
        });

        it('may have a *penalty* property', function () {
          helpers.assertIsValid('question-common', 'valid/hints-penalty.json');
        });
      });

      describe('The *id* property', function () {
        it('must be a string', function () {
          helpers.assertHasError('question-common', 'invalid/hint-id-is-not-a-string.json', {
            '.hints[0].id': 'should be string'
          });
        });
      });

      describe('The *text* property', function () {
        it('must be a string', function () {
          helpers.assertHasError('question-common', 'invalid/hint-text-is-not-a-string.json', {
            '.hints[0].text': 'should be string'
          });
        });
      });

      describe('The *penalty* property', function () {
        it('must be a number', function () {
          helpers.assertHasError('question-common', 'invalid/hint-penalty-is-not-a-number.json', {
            '.hints[0].penalty': 'should be number'
          });
        });

        it('must be greater than zero', function () {
          helpers.assertHasError('question-common', 'invalid/hint-penalty-is-less-than-zero.json', {
            '.hints[0].penalty': 'should be > 0'
          });
          helpers.assertHasError('question-common', 'invalid/hint-penalty-equals-zero.json', {
            '.hints[0].penalty': 'should be > 0'
          });
        });
      });
    });

    describe('The *feedback* property', function () {
      it('must be a string', function () {
        helpers.assertHasError('question-common', 'invalid/feedback-is-not-a-string.json', {
          '.feedback': 'should be string'
        });
      });
    });
  });

  describe('Examples', function () {
    var examples = [
      'with-metadata',
      'with-object',
      'with-resource',
      'global-feedback',
      'hints-no-penalty',
      'hints-penalty'
    ];

    examples.forEach(function (example) {
      it('format/question/common/examples/valid/' + example + '.json', function () {
        helpers.assertIsValid('question-common', 'valid/' + example + '.json', []);
      });
    });
  });
});
