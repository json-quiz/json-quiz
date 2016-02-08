var assert = require('./../../assert')('base-question');

describe('Base question', function () {
  describe('Schema', function () {
    describe('A question', function () {
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

      it('must have a *title* property', function () {
        assert.hasError('no-title', {
          '.title': 'property .title is required'
        });
      });

      it('may have a *meta* property', function () {
        assert.isValid('with-metadata');
      });

      it('may have an *objects* property', function () {
        assert.isValid('with-object');
      });

      it('may have a *resources* property', function () {
        assert.isValid('with-resource');
      });

      it('may have a *feedback* property', function () {
        assert.isValid('global-feedback');
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

      it('must hold a custom JSON MIME type', function () {
        assert.hasError('type-is-not-a-valid-json-mime', {
          '.type': 'should match pattern \"^application/x\\.[^/]+\\+json$\"'
        });
      });
    });

    describe('The *title* property', function () {
      it('must be a string', function () {
        assert.hasError('title-is-not-a-string', {
          '.title': 'should be string'
        });
      });
    });

    describe('The *meta* property', function () {
      it('must satisfy the #metadata# schema', function () {
        assert.hasErrors('meta-not-satisfying-metadata-schema', {
          '.meta.authors': 'should be array',
          '.meta.license': 'should be string'
        });
      });
    });

    describe('The *objects* property', function () {
      it('must be an array', function () {
        assert.hasError('objects-is-not-an-array', {
          '.objects': 'should be array'
        });
      });

      it('must contain at least one object', function () {
        assert.hasError('under-one-object', {
          '.objects': 'should NOT have less than 1 items'
        });
      });

      describe('Each object', function () {
        it('must satisfy the #content# schema', function () {
          assert.hasError('object-not-satisfying-content-schema', {
            '.objects[0].type': 'property .type is required'
          });
        });

        it('must be unique', function () {
          assert.hasError('duplicate-objects', {
            '.objects': 'items ## 0 and 1 are duplicate'
          });
        });
      });
    });

    describe('The *resources* property', function () {
      it('must be an array', function () {
        assert.hasError('resources-is-not-an-array', {
          '.resources': 'should be array'
        });
      });

      it('must contain at least one resource', function () {
        assert.hasError('under-one-resource', {
          '.resources': 'should NOT have less than 1 items'
        });
      });

      describe('Each resource', function () {
        it('must satisfy the #content# schema', function () {
          assert.hasError('resource-not-satisfying-content-schema', {
            '.resources[0]': 'should be object'
          });
        });

        it('must be unique', function () {
          assert.hasError('duplicate-resources', {
            '.resources': 'items ## 0 and 1 are duplicate'
          });
        });
      });
    });

    describe('The *hints* property', function () {
      it('must be an array', function () {
        assert.hasError('hints-is-not-an-array', {
          '.hints': 'should be array'
        });
      });

      it('must contain at least one hint', function () {
        assert.hasError('under-one-hint', {
          '.hints': 'should NOT have less than 1 items'
        });
      });

      describe('Each hint', function () {
        it('must be an object', function () {
          assert.hasError('hint-is-not-an-object', {
            '.hints[0]': 'should be object'
          });
        });

        it('must be unique', function () {
          assert.hasError('duplicate-hints', {
            '.hints': 'items ## 0 and 1 are duplicate'
          });
        });

        it('must have an *id* property', function () {
          assert.hasError('no-hint-id', {
            '.hints[0].id': 'property .id is required'
          });
        });

        it('must have a *text* property', function () {
          assert.hasError('no-hint-text', {
            '.hints[0].text': 'property .text is required'
          });
        });

        it('may have a *penalty* property', function () {
          assert.isValid('hints-penalty');
        });
      });

      describe('The *id* property', function () {
        it('must be a string', function () {
          assert.hasError('hint-id-is-not-a-string', {
            '.hints[0].id': 'should be string'
          });
        });
      });

      describe('The *text* property', function () {
        it('must be a string', function () {
          assert.hasError('hint-text-is-not-a-string', {
            '.hints[0].text': 'should be string'
          });
        });
      });

      describe('The *penalty* property', function () {
        it('must be a number', function () {
          assert.hasError('hint-penalty-is-not-a-number', {
            '.hints[0].penalty': 'should be number'
          });
        });

        it('must be greater than zero', function () {
          assert.hasErrors('hint-penalty-is-less-than-zero', {
            '.hints[0].penalty': 'should be > 0'
          });
        });
      });
    });

    describe('The *feedback* property', function () {
      it('must be a string', function () {
        assert.hasError('feedback-is-not-a-string', {
          '.feedback': 'should be string'
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'with-metadata',
      'with-object',
      'with-resource',
      'global-feedback',
      'hints-no-penalty',
      'hints-penalty'
    ]);
  });
});
