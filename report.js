/**
 * Custom reporter for Mocha, generating a markdown or html
 * spec from the test suite.
 */

var fs = require('fs');
var buildDir = __dirname + '/build';

function makeHtmlWrapper() {
  return {
    setLevel: function (level) {
      // noop
    },
    fileName: function (suiteTitle) {
      return suiteTitle.replace(' ', '-').toLowerCase() + '.html';
    },
    firstLevelTitle: function (title) {
      return '<h1>' + title + '</h1>';
    },
    secondLevelTitle: function (title) {
      return '<h2>' + title + '</h2>';
    },
    otherTitle: function (title) {
      return '<p>' + title + ':</p><ul>';
    },
    otherTitleEnd: function () {
      return '</ul>';
    },
    spec: function (text) {
      return '<li>' + text + '</li>';
    },
    example: function (title, content) {
      return '<h3>' + title + '</h3>'
        + '<pre>' + content + '</pre>';
    }
  };
}

function makeMarkdownWrapper() {
  var _level = 0;

  function _getIndent() {
    return Array.apply(null, new Array(_level - 3))
      .map(function (a) { return '  '; })
      .join('');
  }

  return {
    setLevel: function (level) {
      _level = level
    },
    fileName: function (suiteTitle) {
      return suiteTitle.replace(' ', '-').toLowerCase() + '.md';
    },
    firstLevelTitle: function (title) {
      return '#' + title + '\n\n';
    },
    secondLevelTitle: function (title) {
      return '##' + title + '\n\n';
    },
    otherTitle: function (title) {
      return _getIndent() + '* ' + title + ':\n\n';
    },
    otherTitleEnd: function () {
      return '';
    },
    spec: function (text) {
      return _getIndent() + '* ' + text + '\n\n';
    },
    example: function (title, content) {
      return '###' + title + '\n\n'
        + '```json\n\n'
        + content + '\n\n'
        + '```\n\n';
    }
  };
}

function DocReporter(runner) {
  var level = 0;
  var output = '';
  var suiteFile, parentSuite;
  var wrapper = makeMarkdownWrapper();

  runner.on('suite', function (suite) {
    if (suite.root) {
      return parentSuite = 'root';
    }

    wrapper.setLevel(++level);

    if (level === 1) {
      suiteFile = wrapper.fileName(suite.title);
      output += wrapper.firstLevelTitle(suite.title);
    } else if (level === 2) {
      output += wrapper.secondLevelTitle(suite.title);
    } else {
      output += wrapper.otherTitle(suite.title);
    }

    parentSuite = suite.title;
  });

  runner.on('suite end', function (suite) {
    if (suite.root) {
      return;
    }

    wrapper.setLevel(--level);

    if (level === 0) {
      if (!fs.existsSync(buildDir)) {
        fs.mkdirSync(buildDir);
      }

      fs.writeFileSync(buildDir + '/' + suiteFile, output);
      output = '';
      console.log('Doc file "build/%s" generated', suiteFile);
    } else if (level >= 2) {
      output += wrapper.otherTitleEnd();
    }
  });

  runner.on('pass', function (test) {
    var exampleFile, exampleTitle, exampleContent;

    wrapper.setLevel(++level);
    
    if (parentSuite === 'Examples') {
      exampleFile = __dirname + '/' + test.title;
      exampleTitle = test.title.split('/').pop();
      exampleContent = fs.readFileSync(exampleFile, { encoding: 'utf8' });
      output += wrapper.example(exampleTitle, exampleContent);
    } else {
      output += wrapper.spec(test.title);
    }
   
    wrapper.setLevel(--level);
  });

  runner.on('fail', function (test, err) {
    console.log('fail: %s -- error: %s', test.fullTitle(), err.message);
    console.log('Aborting doc generation');
    process.exit(1);
  });
}

module.exports = DocReporter;
