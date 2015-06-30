var helpers = require('./../../test-helpers');

describe('Metadata', function () {
  describe('Structure', function () {
    describe('A metadata block', function () {
      it('must be an object', function () {
        helpers.assertHasError('metadata', 'invalid/not-an-object.json', {
          '': 'should be object'
        });
      });

      it('may have a *title* property', function () {
        helpers.assertIsValid('metadata', 'valid/title-and-description.json');
      });

      it('may have a *description* property', function () {
        helpers.assertIsValid('metadata', 'valid/title-and-description.json');
      });

      it('may have an *authors* property', function () {
        helpers.assertIsValid('metadata', 'valid/author.json');
      });

      it('may have a *license* property', function () {
        helpers.assertIsValid('metadata', 'valid/authors-and-license.json');
      });
    });

    describe('The *title* property', function () {
      it('must be a string', function () {
        helpers.assertHasError('metadata', 'invalid/title-is-not-a-string.json', {
          '.title': 'should be string'
        });
      });
    });

    describe('The *description* property', function () {
      it('must be a string', function () {
        helpers.assertHasError('metadata', 'invalid/description-is-not-a-string.json', {
          '.description': 'should be string'
        });
      });
    });

    describe('The *authors* property', function () {
      it('must be an array', function () {
        helpers.assertHasError('metadata', 'invalid/authors-is-not-an-array.json', {
          '.authors': 'should be array'
        });
      });

     it('must contain at least one item', function () {
        helpers.assertHasError('metadata', 'invalid/under-one-author.json', {
          '.authors': 'should NOT have less than 1 items'
        });
      });

      describe('Each author', function () {
        it('must be an object', function () {
          helpers.assertHasError('metadata', 'invalid/author-is-not-an-object.json', {
            '.authors[0]': 'should be object'
          });
        });

        it('must be unique', function () {
          helpers.assertHasError('metadata', 'invalid/duplicate-authors.json', {
            '.authors': 'items ## 0 and 1 are duplicate'
          });
        });

        it('must have a *name* property', function () {
          helpers.assertHasError('metadata', 'invalid/no-author-name.json', {
            '.authors[0]': 'properties name are required'
          });
        });

        it('may have an *email* property', function () {
          helpers.assertIsValid('metadata', 'valid/authors-and-license.json');
        });
      });

      describe('The *name* property', function () {
        it('must be a string', function () {
          helpers.assertHasError('metadata', 'invalid/author-name-is-not-a-string.json', {
            '.authors[0].name': 'should be string'
          });
        });
      });

      describe('The *email* property', function () {
        it('must be a string', function () {
          helpers.assertHasError('metadata', 'invalid/author-email-is-not-a-string.json', {
            '.authors[0].email': 'should be string'
          });
        });

        it('must hold an email address', function () {
          helpers.assertHasError('metadata', 'invalid/author-email-is-not-valid.json', {
            '.authors[0].email': 'should match format email'
          });
        });
      });
    });

    describe('The *license* property', function () {
      it('must be a string', function () {
        helpers.assertHasError('metadata', 'invalid/license-is-not-a-string.json', {
          '.license': 'should be string'
        });
      });
    });
  });

  describe('Examples', function () {
    var examples = [
      'author',
      'authors-and-license',
      'title-and-description',
      'extra-data'
    ];

    examples.forEach(function (example) {
      it('format/metadata/examples/valid/' + example + '.json', function () {
        helpers.assertIsValid('metadata', 'valid/' + example + '.json', []);
      });
    });
  });
});
