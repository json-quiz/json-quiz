var assert = require('assert');
var Ajv = require('ajv');
var ajv = Ajv();

module.exports = {
  getValidator: function (schemaDir) {
    var schema = require('./format/' + schemaDir + '/schema.json');

    return ajv.compile(schema); // schema is cached by ajv
  },
  getData: function (typeDir, dataFilePath) {
    return require('./format/' + typeDir + '/examples/' + dataFilePath);
  },
  assertValidate: function (typeDir, dataFilePath, expectedErrors) {
    var validate = this.getValidator(typeDir);
    var data = this.getData(typeDir, dataFilePath);
    var errors;

    validate(data);

    if (!validate.errors) {
      validate.errors = [];
    }

    errors = validate.errors.map(function (error) {
      var wrapper = {};
      wrapper[error.dataPath] = error.message;

      return wrapper;
    });

    assert.deepEqual(errors, expectedErrors, 'Validation result does not match expectations');
  }
};