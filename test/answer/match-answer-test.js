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
        it('must have a *firstSetId* property', function () {
          assert.hasError('match-answer-no-firstsetid', {
            '[0].firstSetId': 'property .firstSetId is required'
          });
        });
        describe('The *firstSetId* property', function () {
          it('must be a string', function () {
            assert.hasError('match-answer-firstsetid-is-not-a-string', {
              '[0].firstSetId': 'should be string'
            });
          });
        });
        it('must have a *secondSetId* property', function () {
          assert.hasError('match-answer-no-secondsetid', {
            '[0].secondSetId': 'property .secondSetId is required'
          });
        });
        describe('The *secondSetId* property', function () {
          it('must be a string', function () {
            assert.hasError('match-answer-secondsetid-is-not-a-string', {
              '[0].secondSetId': 'should be string'
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