var helpers = require('./../../test-helpers');

describe('Content', function () {
  describe('Structure', function () {
    describe('A content block', function () {
      it('must be an object', function () {
        helpers.assertHasError('content', 'invalid/not-an-object.json', {
          '': 'should be object'
        });
      });

      it('must have an *id* property', function () {
        helpers.assertHasError('content', 'invalid/no-id.json', {
          '': 'properties id, type are required'
        });
      });

      it('must have a *type* property', function () {
        helpers.assertHasError('content', 'invalid/no-type.json', {
          '': 'properties id, type are required'
        });
      });

      it('must have either a *data* or an *url* property', function () {
        helpers.assertHasError('content', 'invalid/no-data-nor-url.json', {
          '': 'properties data are required'
        });
        helpers.assertHasError('content', 'invalid/no-data-nor-url.json', {
          '': 'properties url are required'
        });
      });

      it('may have a *meta* block', function () {
        helpers.assertIsValid('content', 'valid/metadata.json');
      });

      describe('The *id* property', function () {
        it('must be a string', function () {
          helpers.assertHasError('content', 'invalid/id-is-not-a-string.json', {
            '.id': 'should be string'
          });
        });
      });

      describe('The *type* property', function () {
        it('must be a string', function () {
          helpers.assertHasError('content', 'invalid/type-is-not-a-string.json', {
            '.type': 'should be string'
          });
        });

        it('must hold a MIME type', function () {
          helpers.assertHasError('content', 'invalid/type-is-not-a-mime.json', {
            '.type': 'should match pattern \"^[^/]+/[^/]+$\"'
          });
        });
      });

      describe('The *url* property', function () {
        it('must be a string', function () {
          helpers.assertHasError('content', 'invalid/url-is-not-a-string.json', {
            '.url': 'should be string'
          });
        });

        it('must hold an URL', function () {
          helpers.assertHasError('content', 'invalid/url-is-not-valid.json', {
            '.url': 'should match format uri'
          });
        });
      });

      describe('The *data* property', function () {
        it('must be a string', function () {
          helpers.assertHasError('content', 'invalid/data-is-not-a-string.json', {
            '.data': 'should be string'
          });
        });

        it('may have an associated *encoding* property', function () {
          helpers.assertIsValid('content', 'valid/embedded-media.json');
        });

        describe('The *encoding* property', function () {
          it('must be a string', function () {
            helpers.assertHasError('content', 'invalid/encoding-is-not-a-string.json', {
              '.encoding': 'should be string'
            });
          });
        });
      });

      describe('The *meta* property', function () {
        it('must be a #metadata# block', function () {
          helpers.assertHasError('content', 'invalid/meta-is-not-a-metadata-block.json', {
            '.meta': 'should be object'
          });
        });
      });
    });
  });

  describe('Examples', function () {
    var examples = [
      'html',
      'distant-media',
      'embedded-media',
      'metadata'
    ];

    examples.forEach(function (example) {
      it(example + '.json', function () {
        helpers.assertIsValid('content', 'valid/' + example + '.json', []);
      });
    });
  });
});