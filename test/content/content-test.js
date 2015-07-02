var assert = require('./../../assert')('content');

describe('Content', function () {
  describe('Structure', function () {
    describe('A content block', function () {
      it('must be an object', function () {
        assert.hasError('not-an-object', {
          '': 'should be object'
        });
      });

      it('must have an *id* property', function () {
        assert.hasError('no-id', {
          '.id': 'property .id is required'
        });
      });

      it('must have a *type* property', function () {
        assert.hasError('no-type', {
          '.type': 'property .type is required'
        });
      });

      it('must have either a *data* or an *url* property', function () {
        assert.hasErrors('no-data-nor-url', {
          '.data': 'property .data is required',
          '.url': 'property .url is required'
        });
      });

      it('may have a *meta* property', function () {
        assert.isValid('metadata');
      });
    });

    describe('The *id* property', function () {
      it('must be a string', function () {
        assert.hasError('id-is-not-a-string', {
          '.id': 'should be string'
        });
      });
    });

    describe('The *type* property', function () {
      it('must be a string', function () {
        assert.hasError('type-is-not-a-string', {
          '.type': 'should be string'
        });
      });

      it('must hold a MIME type', function () {
        assert.hasError('type-is-not-a-mime', {
          '.type': 'should match pattern \"^[^/]+/[^/]+$\"'
        });
      });
    });

    describe('The *url* property', function () {
      it('must be a string', function () {
        assert.hasError('url-is-not-a-string', {
          '.url': 'should be string'
        });
      });

      it('must hold an URL', function () {
        assert.hasError('url-is-not-valid', {
          '.url': 'should match format uri'
        });
      });
    });

    describe('The *data* property', function () {
      it('must be a string', function () {
        assert.hasError('data-is-not-a-string', {
          '.data': 'should be string'
        });
      });

      it('may have an associated *encoding* property', function () {
        assert.isValid('embedded-media');
      });

      describe('The *encoding* property', function () {
        it('must be a string', function () {
          assert.hasError('encoding-is-not-a-string', {
            '.encoding': 'should be string'
          });
        });
      });
    });

    describe('The *meta* property', function () {
      it('must satisfy #metadata# schema', function () {
        assert.hasErrors('meta-not-satisfying-metadata-schema', {
          '.meta.authors': 'should be array',
          '.meta.license': 'should be string'
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'html',
      'distant-media',
      'embedded-media',
      'metadata'
    ]);
  });
});
