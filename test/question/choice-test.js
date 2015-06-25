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
          '': 'properties id, title, choices are required'
        });
      });

      it('must have a *title* property', function () {
        helpers.assertHasError('question/choice', 'invalid/no-title-property.json', {
          '': 'properties id, title, choices are required'
        });
      });

      it('must have a *choices* property', function () {
        helpers.assertHasError('question/choice', 'invalid/no-choices-property.json', {
          '': 'properties id, title, choices are required'
        });
      });

      describe('The *id* property', function () {
        it('must be a string', function () {
          helpers.assertHasError('question/choice', 'invalid/id-property-is-not-a-string.json', {
            '.id': 'should be string'
          });
        });
      });

      describe('The *title* property', function () {
        it('must be a string', function () {
          helpers.assertHasError('question/choice', 'invalid/title-property-is-not-a-string.json', {
            '.title': 'should be string'
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
            helpers.assertHasError('question/choice', 'invalid/no-choice-object.json', {
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
    });
  });

  describe('Examples', function () {
    var examples = [
      'true-false',
      'distant-medias',
      'embedded-medias'
    ];

    examples.forEach(function (example) {
      it(example + '.json', function () {
        helpers.assertIsValid('question/choice', 'valid/' + example + '.json', []);
      });
    });
  });
});