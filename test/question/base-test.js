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

      it('must have a *content* property', function () {
        assert.hasError('no-content', {
          '.content': 'property .content is required'
        });
      });

      it('may have a *title* property', function () {
        assert.isValid('with-title');
      });

      it('may have a *instruction* property', function () {
        assert.isValid('with-more-info');
      });

      it('may have a *info* property', function () {
        assert.isValid('with-more-info');
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

      it('may have a *score* property', function () {
        assert.isValid('with-fixed-score');
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

    describe('The *content* property', function () {
      it('must be a string', function () {
        assert.hasError('content-is-not-a-string', {
          '.content': 'should be string'
        });
      });
    });

    describe('The *info* property', function () {
      it('must be a string', function () {
        assert.hasError('info-is-not-a-string', {
          '.info': 'should be string'
        });
      });
    });

    describe('The *instruction* property', function () {
      it('must be a string', function () {
        assert.hasError('instruction-is-not-a-string', {
          '.instruction': 'should be string'
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
        it('must satisfy the #hint# schema', function () {
          assert.hasError('hint-not-satisfying-hint-schema', {
            '.hints[0]': 'should be object'
          });
        });

        it('must be unique', function () {
          assert.hasError('duplicate-hints', {
            '.hints': 'items ## 0 and 1 are duplicate'
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

    describe('The *score* property', function () {
      it('must be an object', function () {
        assert.hasError('score-is-not-an-object', {
          '.score': 'should be object'
        });
      });

      it('must have a *type* property', function () {
        assert.hasError('no-score-type', {
          '.score.type': 'property .type is required'
        });
      });

      describe('The *type* property', function () {
        it ('must be either "sum" or "fixed"', function () {
          assert.hasError('unknown-score-type', {
            '.score.type': 'should be equal to one of values'
          });
        });
      });

      describe('Scores of type "fixed"', function () {
        it('must have a *success* property', function () {
          assert.hasError('no-sum-score-success', {
            '.score.success': 'property .success is required'
          });
        });

        it('must have a *failure* property', function () {
          assert.hasError('no-sum-score-failure', {
            '.score.failure': 'property .failure is required'
          });
        });

        describe('The *success* property', function () {
          it('must be a number', function () {
            assert.hasError('score-success-is-not-a-number', {
              '.score.success': 'should be number'
            });
          });
        })

        describe('The *feedback* property', function () {
          it('must be a string', function () {
            assert.hasError('score-failure-is-not-a-number', {
              '.score.failure': 'should be number'
            });
          });
        })
      })
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'with-hints',
      'with-metadata',
      'with-object',
      'with-resource',
      'with-fixed-score',
      'with-sum-score',
      'global-feedback',
      'with-more-info',
      'with-title'
    ]);
  });
});
