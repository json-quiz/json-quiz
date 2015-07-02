/**
 * Custom reporter for Mocha, generating from the test suite
 * a markdown spec to be rendered by jekyll.
 */

var fs = require('fs');
var buildDir = __dirname + '/build';

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
    fileHeader: function (suiteTitle) {
      return '---\n'
        + 'title: ' + suiteTitle + '\n'
        + 'layout: default\n'
        + '---\n\n';
    },
    firstLevelTitle: function (title) {
      return '# FOOOOO' + title + '\n\n';
    },
    secondLevelTitle: function (title) {
      return '## ' + title + '\n\n';
    },
    otherTitle: function (title) {
      return _getIndent() + '* ' + title + ':\n\n';
    },
    otherTitleEnd: function () {
      return '';
    },
    spec: function (text) {
      var matches = text.match(/#([a-zA-Z\-0-9_]+)#/);

      if (matches) {
        // make link to another schema
        var schemaId = matches[1];
        text = text.replace(
          '#' + schemaId + '#',
          '[' + schemaId + '](' + schemaId + '.html)'
        );
      }

      return _getIndent() + '* ' + text + '\n\n';
    },
    example: function (title, content) {
      // convert file name into plain text title
      var title = (title.charAt(0).toUpperCase() + title.slice(1))
        .slice(0, -5)
        .replace('-' , ' ');

      return '### ' + title + '\n\n'
        + '{% highlight json %}\n\n'
        + content + '\n\n'
        + '{% endhighlight %}\n\n';
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
      output += wrapper.fileHeader(suite.title)
        + wrapper.firstLevelTitle(suite.title);
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
