var assert = require('assert');
var Ajv = require('ajv');
var ajv = Ajv({ allErrors: true });

function getValidator(schemaDir) {
  var schema = require('./format/' + schemaDir + '/schema.json');

  return ajv.compile(schema); // schema is cached by ajv
}

function getData(typeDir, dataFilePath) {
  return require('./format/' + typeDir + '/examples/' + dataFilePath);
}

function validateAndNormalizeErrors(typeDir, dataFilePath, expectedErrors) {
  var validate = getValidator(typeDir);
  var data = getData(typeDir, dataFilePath);
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

function assertIsValid(typeDir, dataFilePath) {
  var errors = validateAndNormalizeErrors(typeDir, dataFilePath);
  assert.deepEqual(errors, [], 'Validation was not supposed to return any errors');
}

function assertHasErrors(typeDir, dataFilePath, expectedErrors) {
  var errors = validateAndNormalizeErrors(typeDir, dataFilePath);
  assert.deepEqual(errors, expectedErrors, 'Validation result does not match expectations');
}

function assertHasError(typeDir, dataFilePath, expectedError) {
  var errors = validateAndNormalizeErrors(typeDir, dataFilePath);
  var expectedPath = Object.keys(expectedError)[0];
  var expectedMessage = expectedError[expectedPath];
  var errorsAsString = '(errors: ' + JSON.stringify(errors) + ')';

  assert(expectedPath in errors, 'No error at expected path ' + errorsAsString);
  assert(
    errors[expectedPath].indexOf(expectedMessage) > -1,
    'The expected error ("' +  expectedMessage+ '") is missing ' + errorsAsString
  );
}

module.exports = {
  assertIsValid: assertIsValid,
  assertHasErrors: assertHasErrors,
  assertHasError: assertHasError
};