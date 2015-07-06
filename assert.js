/**
 * Helpers for testing schema validation.
 */

var assert = require('assert');
var Ajv = require('ajv');
var ajv = Ajv({ allErrors: true });
var resolved = {
  'metadata': 'metadata',
  'content': 'content',
  'base-question': 'question/base',
  'choice-question': 'question/choice',
  'match-question': 'question/match',
  'sort-question': 'question/sort'
};

ajv.addSchema([
  require('./format/metadata/schema.json'),
  require('./format/content/schema.json'),
  require('./format/question/base/schema.json'),
  require('./format/question/choice/schema.json'),
  require('./format/question/match/schema.json'),
  require('./format/question/sort/schema.json')
]);

/**
 * Returns the validator function for a given schema.
 */
function getSchema(schemaId) {
  var validate = ajv.getSchema(schemaId);

  if (!validate) {
    throw new Error('Unknown schema "' + schemaId + '"');
  }

  return validate;
}

/**
 * Returns the directory of a schema.
 */
function getSchemaDir(schemaId) {
  if (!resolved[schemaId]) {
    throw new Error('Cannot resolve directory of schema "' + schemaId + "'");
  }

  return 'format/' + resolved[schemaId];
}

/**
 * Validates a data sample and returns errors as a hash, where
 * property names are data paths and property values are error
 * messages.
 */
function validateAndNormalizeErrors(schemaId, dataFilePath) {
  var validate = getSchema(schemaId);
  var data = require('./' + getSchemaDir(schemaId) + '/examples/' + dataFilePath);
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

/**
 * Returns a set of assertion helpers for a given schema.
 *
 * The schema file must be named *schema.json* and must live in
 * the *format/[schemaId]* directory (if the id contains hyphens,
 * each part will be split into distinct directories).
 *
 * Assert functions will assume that the examples passed in are
 * located the *format/[schemaId]/examples/[valid|invalid]*
 * directory.
 */
function makeAsserters(schemaId) {
  var _schemaId = schemaId;

  return {
    isValid: function (exampleName) {
      var filePath = 'valid/' + exampleName + '.json';
      var errors = validateAndNormalizeErrors(_schemaId, filePath);
      var errorsAsString = '(errors: ' + JSON.stringify(errors) + ')';
      assert.deepEqual(errors, [], 'Validation was not supposed to return any errors ' + errorsAsString);
    },
    areValid: function (exampleNames) {
      var self = this;
      exampleNames.forEach(function (example) {
        it(getSchemaDir(_schemaId) + '/examples/valid/' + example + '.json', function () {
          self.isValid(example);
        });
      });
    },
    hasError: function (exampleName, expectedError) {
      var filePath = 'invalid/' + exampleName + '.json';
      var errors = validateAndNormalizeErrors(_schemaId, filePath);
      var expectedPath = Object.keys(expectedError)[0];
      var expectedMessage = expectedError[expectedPath];
      var errorsAsString = '(errors: ' + JSON.stringify(errors) + ')';

      assert(expectedPath in errors, 'No error at expected path ' + errorsAsString);
      assert(
        errors[expectedPath].indexOf(expectedMessage) > -1,
        'The expected error ("' +  expectedMessage+ '") is missing ' + errorsAsString
      );
    },
    hasErrors: function (exampleName, expectedErrors) {
      Object.keys(expectedErrors).forEach(function (path) {
        var error = {};
        error[path] = expectedErrors[path];
        this.hasError(exampleName, error);
      }, this);
    }
  };
}

module.exports = makeAsserters;
