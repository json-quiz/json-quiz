var assert = require('./../../assert')('keyword');

describe('Keyword', function () {
  describe('Schema', function () {
    describe('A keyword', function () {
      it('must be an object', function () {
        assert.hasError('not-an-object', {
          '': 'should be object'
        });
      });

      it('must have a *text* property', function () {
        assert.hasError('no-text', {
          '.text': 'property .text is required'
        });
      });

      it('must have a *caseSensitive* property', function () {
        assert.hasError('no-case-sensitive', {
          '.caseSensitive': 'property .caseSensitive is required'
        });
      });

      it('must have a *score* property', function () {
        assert.hasError('no-score', {
          '.score': 'property .score is required'
        });
      });

      it('may have a *feedback* property', function () {
        assert.isValid('with-feedback');
      });
    });

    describe('The text property', function () {
      it('must be a string', function () {
        assert.hasError('text-is-not-a-string', {
          '.text': 'should be string'
        });
      });
    });

    describe('The caseSensitive property', function () {
      it('must be a boolean', function () {
        assert.hasError('case-sensitive-is-not-a-bool', {
          '.caseSensitive': 'should be boolean'
        });
      });
    });

    describe('The score property', function () {
      it('must be a number', function () {
        assert.hasError('score-is-not-a-number', {
          '.score': 'should be number'
        });
      });
    });

    describe('The feedback property', function () {
      it('must be a string', function () {
        assert.hasError('feedback-is-not-a-string', {
          '.feedback': 'should be string'
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'basic',
      'with-feedback'
    ]);
  });
});
