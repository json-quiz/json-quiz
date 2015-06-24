var helpers = require('./../../test-helpers');

describe('A choice question', function () {
  it('must be an object', function () {
    helpers.assertValidate('question/choice', 'invalid/not-an-object.json', [
      { '': 'should be object' }
    ]);
  });

  it('must have a *choiceType* property', function () {
    helpers.assertValidate('question/choice', 'invalid/no-choice-type-property.json', [
      { '': 'properties choiceType, choices are required' }
    ]);
  });

  it('must have a *choices* property', function () {
    helpers.assertValidate('question/choice', 'invalid/no-choices-property.json', [
      { '': 'properties choiceType, choices are required' }
    ]);
  });

  describe('Its *choiceType* property', function () {
    it('must be a mime type', function () {
      helpers.assertValidate('question/choice', 'invalid/choice-type-is-not-a-mime.json', [
        { '.choiceType': 'should match pattern \"^[^/]+/[^/]+$\"' }
      ]);
    });
  });

  describe('Its *choices* property', function () {
    it('must be an array', function () {
      helpers.assertValidate('question/choice', 'invalid/choices-is-not-an-array.json', [
        { '.choices': 'should be array' }
      ]);
    });

    it('must contain at least two choices', function () {
      helpers.assertValidate('question/choice', 'invalid/under-two-choices.json', [
        { '.choices': 'should NOT have less than 2 items' }
      ]);
    });

    describe('Each choice', function () {
      it('must be an object', function () {
        helpers.assertValidate('question/choice', 'invalid/no-choice-object.json', [
          { '.choices[0]': 'should be object' }
        ]);
      });

      it('must have an "id" property', function () {
        helpers.assertValidate('question/choice', 'invalid/no-choice-id.json', [
          { '.choices[0]': 'properties id, text are required' }
        ]);
      });

      it('must be unique', function () {
        throw new Error('NOT IMPLEMENTED');
      });
    });
  });
});
