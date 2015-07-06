/**
 * Custom reporter for Mocha, generating from the test suite
 * a markdown spec to be rendered by jekyll.
 */

var fs = require('fs-extra');
var formatDir = __dirname + '/format';
var buildDir = __dirname + '/build';
var specDir = buildDir + '/_spec';
var dataDir = buildDir + '/_data';

function makeMarkdownWrapper() {
  var _level = 0;

  function _getIndent() {
    return Array.apply(null, new Array(_level - 3))
      .map(function () { return '  '; })
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
      return '# ' + title + '\n\n';
    },
    secondLevelTitle: function (title) {
      return '## ' + title + '\n\n';
    },
    otherTitle: function (title) {
      return _getIndent() + '* ' + title + ':\n\n';
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
      title = (title.charAt(0).toUpperCase() + title.slice(1))
        .slice(0, -5)
        .split('-')
        .join(' ');

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
      fs.mkdirsSync(dataDir);
      fs.copySync(formatDir + '/spec.yml', dataDir + '/spec.yml');
      console.log('Spec plan copied');

      return;
    }

    wrapper.setLevel(--level);

    if (level === 0) {
      fs.mkdirsSync(specDir);
      fs.writeFileSync(specDir + '/' + suiteFile, output);
      output = '';
      console.log('Doc file "%s" generated', suiteFile);
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
