var assert = require('assert');
var Ajv = require('ajv');
var ajv = Ajv({ allErrors: true });

ajv.addSchema([
  require('./format/metadata/schema.json'),
  require('./format/content/schema.json'),
  require('./format/question/common/schema.json'),
  require('./format/question/choice/schema.json')
]);

function validateAndNormalizeErrors(schemaId, dataFilePath) {
  var validate = ajv.getSchema(schemaId);
  var schemaDir = schemaId.split('-').join('/');
  var data = require('./format/' + schemaDir + '/examples/' + dataFilePath);
  var errors = {};

  validate(data);

  if (!validate.errors) {
    validate.errors = [];
  }

  validate.errors.forEach(function (error) {
    errors[error.dataPath] = errors[error.dataPath] || [];
    errors[error.dataPath].push(error.message);
  });

  return errors;
}

function makeHelpers(schemaId) {
  var _schemaId = schemaId;

  return {
    assertIsValid: function (dataFilePath) {
      var errors = validateAndNormalizeErrors(_schemaId, 'valid/' + dataFilePath);
      var errorsAsString = '(errors: ' + JSON.stringify(errors) + ')';
      assert.deepEqual(errors, [], 'Validation was not supposed to return any errors ' + errorsAsString);
    },
    assertHasErrors: function (dataFilePath, expectedErrors) {
      var errors = validateAndNormalizeErrors(dataFilePath);
      assert.deepEqual(errors, expectedErrors, 'Validation result does not match expectations');
    },
    assertHasError: function (dataFilePath, expectedError) {
      var errors = validateAndNormalizeErrors(_schemaId, dataFilePath);
      var expectedPath = Object.keys(expectedError)[0];
      var expectedMessage = expectedError[expectedPath];
      var errorsAsString = '(errors: ' + JSON.stringify(errors) + ')';

      assert(expectedPath in errors, 'No error at expected path ' + errorsAsString);
      assert(
        errors[expectedPath].indexOf(expectedMessage) > -1,
        'The expected error ("' +  expectedMessage+ '") is missing ' + errorsAsString
      );
    }
  };
}

module.exports = makeHelpers;