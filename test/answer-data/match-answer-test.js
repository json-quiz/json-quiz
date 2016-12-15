var assert = require('./../../assert')('match-answer');

describe('Match answer', function () {
  describe('Schema', function () {

    describe('A match answer', function () {
      it('must be an array', function () {
        assert.hasError('match-answer-is-not-an-array', {
          '': 'should be array'
        });
      });
      describe('Each answer', function () {
        it('must be an object', function () {
          assert.hasError('match-answer-answer-is-not-an-object', {
            '[0]': 'should be object'
          });
        });
        it('must be unique', function () {
          assert.hasError('match-answer-duplicate-answers', {
            '': 'items ## 0 and 1 are duplicate'
          });
        });
        it('must have a *firstId* property', function () {
          assert.hasError('match-answer-no-firstid', {
            '[0].firstId': 'property .firstId is required'
          });
        });
        describe('The *firstId* property', function () {
          it('must be a string', function () {
            assert.hasError('match-answer-firstid-is-not-a-string', {
              '[0].firstId': 'should be string'
            });
          });
        });
        it('must have a *secondId* property', function () {
          assert.hasError('match-answer-no-secondid', {
            '[0].secondId': 'property .secondId is required'
          });
        });
        describe('The *secondId* property', function () {
          it('must be a string', function () {
            assert.hasError('match-answer-secondid-is-not-a-string', {
              '[0].secondId': 'should be string'
            });
          });
        });
      });
    });
  });
  
  describe('Examples', function () {
    assert.areValid([
      'match-answer'
    ]);
  });
});