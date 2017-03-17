/**
 * Helpers for testing schema validation.
 */

var assert = require('assert');
var Ajv = require('ajv');
var ajv = Ajv({ allErrors: true });

var resolved = {
  'keyword': 'misc/keyword',
  'metadata': 'metadata',
  'content': 'content',
  'hint': 'hint',
  'category': 'category',
  'base-question': 'question/base',
  'choice-answer': 'answer-data/choice',
  'choice-question': 'question/choice',
  'graphic-answer': 'answer-data/graphic',
  'graphic-question': 'question/graphic',
  'match-answer': 'answer-data/match',
  'match-question': 'question/match',
  'set-answer': 'answer-data/set',
  'set-question': 'question/set',
  'pair-answer': 'answer-data/pair',
  'pair-question': 'question/pair',
  'sort-question': 'question/sort',
  'words-answer': 'answer-data/words',
  'words-question': 'question/words',
  'cloze-answer': 'answer-data/cloze',
  'cloze-question': 'question/cloze',
  'open-answer': 'answer-data/open',
  'open-question': 'question/open',
  'selection-answer': 'answer-data/selection',
  'selection-question': 'question/selection',
  'grid-question': 'question/grid',
  'grid-answer': 'answer-data/grid',
  'ordering-question': 'question/ordering',
  'ordering-answer': 'answer-data/ordering',
  'boolean-question': 'question/boolean',
  'boolean-answer': 'answer-data/boolean',
  'answer': 'answer',
  'step': 'step',
  'quiz': 'quiz',
  'paper': 'paper'
};

Object.keys(resolved).forEach(function (id) {
  var schema = require('./format/' + resolved[id] + '/schema.json');
  var uri = getSchemaUri(id);
  ajv.addSchema(schema, uri);
});

/**
 * Returns the URI corresponding to a short schema identifier.
 */
function getSchemaUri(schemaId) {
  return 'http://json-quiz.github.io/json-quiz/schemas/'
    + resolved[schemaId]
    + '/schema.json';
}

/**
 * Returns the validator function for a given schema.
 */
function getSchema(schemaId) {
  var validate = ajv.getSchema(getSchemaUri(schemaId));

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
 * The schema file must be included above in the *resolved* and
 * *ajv.addSchema* statements.
 *
 * Assert functions will assume that the examples passed in are
 * located the *format/[schemaDir]/examples/[valid|invalid]*
 * directory.
 */
function makeAsserters(schemaId) {
  var _schemaId = schemaId;

  return {
    isValid: function (exampleName) {
      var filePath = 'valid/' + exampleName + '.json';
      var errors = validateAndNormalizeErrors(_schemaId, filePath);
      var errorsAsString = '(errors: ' + JSON.stringify(errors) + ')';
      assert.deepEqual(errors, [], 'Validation was not supposed to return any errors for "' + exampleName + '" ' + errorsAsString);
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

      assert(expectedPath in errors, 'No error at expected path for "' + exampleName + '" ' + errorsAsString);
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
