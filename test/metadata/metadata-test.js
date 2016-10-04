var assert = require('./../../assert')('metadata');

describe('Metadata', function () {
  describe('Schema', function () {
    describe('A metadata block', function () {
      it('must be an object', function () {
        assert.hasError('not-an-object', {
          '': 'should be object'
        });
      });

      it('may have a *title* property', function () {
        assert.isValid('title-and-description');
      });

      it('may have a *description* property', function () {
        assert.isValid('title-and-description');
      });

      it('may have a *created* property', function () {
        assert.isValid('updated-and-created-dates');
      });

      it('may have an *updated* property', function () {
        assert.isValid('updated-and-created-dates');
      });

      it('may have an *authors* property', function () {
        assert.isValid('author');
      });

      it('may have a *license* property', function () {
        assert.isValid('authors-and-license');
      });
    });

    describe('The *title* property', function () {
      it('must be a string', function () {
        assert.hasError('title-is-not-a-string', {
          '.title': 'should be string'
        });
      });
    });

    describe('The *description* property', function () {
      it('must be a string', function () {
        assert.hasError('description-is-not-a-string', {
          '.description': 'should be string'
        });
      });
    });

    describe('The *created* property', function () {
      it('must be a string', function () {
        assert.hasError('created-is-not-a-string', {
          '.created': 'should be string'
        });
      });
    });

    describe('The *updated* property', function () {
      it('must be a string', function () {
        assert.hasError('updated-is-not-a-string', {
          '.updated': 'should be string'
        });
      });
    });

    describe('The *authors* property', function () {
      it('must be an array', function () {
        assert.hasError('authors-is-not-an-array', {
          '.authors': 'should be array'
        });
      });

     it('must contain at least one item', function () {
        assert.hasError('under-one-author', {
          '.authors': 'should NOT have less than 1 items'
        });
      });

      describe('Each author', function () {
        it('must be an object', function () {
          assert.hasError('author-is-not-an-object', {
            '.authors[0]': 'should be object'
          });
        });

        it('must be unique', function () {
          assert.hasError('duplicate-authors', {
            '.authors': 'items ## 0 and 1 are duplicate'
          });
        });

        it('must have a *name* property', function () {
          assert.hasError('no-author-name', {
            '.authors[0].name': 'property .name is required'
          });
        });

        it('may have an *email* property', function () {
          assert.isValid('authors-and-license');
        });
      });

      describe('The *name* property', function () {
        it('must be a string', function () {
          assert.hasError('author-name-is-not-a-string', {
            '.authors[0].name': 'should be string'
          });
        });
      });

      describe('The *email* property', function () {
        it('must be a string', function () {
          assert.hasError('author-email-is-not-a-string', {
            '.authors[0].email': 'should be string'
          });
        });

        it('must hold an email address', function () {
          assert.hasError('author-email-is-not-valid', {
            '.authors[0].email': 'should match format email'
          });
        });
      });
    });

    describe('The *license* property', function () {
      it('must be a string', function () {
        assert.hasError('license-is-not-a-string', {
          '.license': 'should be string'
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'author',
      'authors-and-license',
      'title-and-description',
      'updated-and-created-dates',
      'extra-data'
    ]);
  });
});
