var helpers = require('./../../test-helpers')('metadata');

describe('Metadata', function () {
  describe('Structure', function () {
    describe('A metadata block', function () {
      it('must be an object', function () {
        helpers.assertHasError('invalid/not-an-object.json', {
          '': 'should be object'
        });
      });

      it('may have a *title* property', function () {
        helpers.assertIsValid('title-and-description.json');
      });

      it('may have a *description* property', function () {
        helpers.assertIsValid('title-and-description.json');
      });

      it('may have an *authors* property', function () {
        helpers.assertIsValid('author.json');
      });

      it('may have a *license* property', function () {
        helpers.assertIsValid('authors-and-license.json');
      });
    });

    describe('The *title* property', function () {
      it('must be a string', function () {
        helpers.assertHasError('invalid/title-is-not-a-string.json', {
          '.title': 'should be string'
        });
      });
    });

    describe('The *description* property', function () {
      it('must be a string', function () {
        helpers.assertHasError('invalid/description-is-not-a-string.json', {
          '.description': 'should be string'
        });
      });
    });

    describe('The *authors* property', function () {
      it('must be an array', function () {
        helpers.assertHasError('invalid/authors-is-not-an-array.json', {
          '.authors': 'should be array'
        });
      });

     it('must contain at least one item', function () {
        helpers.assertHasError('invalid/under-one-author.json', {
          '.authors': 'should NOT have less than 1 items'
        });
      });

      describe('Each author', function () {
        it('must be an object', function () {
          helpers.assertHasError('invalid/author-is-not-an-object.json', {
            '.authors[0]': 'should be object'
          });
        });

        it('must be unique', function () {
          helpers.assertHasError('invalid/duplicate-authors.json', {
            '.authors': 'items ## 0 and 1 are duplicate'
          });
        });

        it('must have a *name* property', function () {
          helpers.assertHasError('invalid/no-author-name.json', {
            '.authors[0].name': 'property .name is required'
          });
        });

        it('may have an *email* property', function () {
          helpers.assertIsValid('authors-and-license.json');
        });
      });

      describe('The *name* property', function () {
        it('must be a string', function () {
          helpers.assertHasError('invalid/author-name-is-not-a-string.json', {
            '.authors[0].name': 'should be string'
          });
        });
      });

      describe('The *email* property', function () {
        it('must be a string', function () {
          helpers.assertHasError('invalid/author-email-is-not-a-string.json', {
            '.authors[0].email': 'should be string'
          });
        });

        it('must hold an email address', function () {
          helpers.assertHasError('invalid/author-email-is-not-valid.json', {
            '.authors[0].email': 'should match format email'
          });
        });
      });
    });

    describe('The *license* property', function () {
      it('must be a string', function () {
        helpers.assertHasError('invalid/license-is-not-a-string.json', {
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
        helpers.assertIsValid(example + '.json', []);
      });
    });
  });
});
