var fs = require('fs');
var buildDir = __dirname + '/build';

function makeHtmlWrapper() {
  return {
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
    }
  };
}

function DocReporter(runner) {
  var level = 0;
  var output = '';
  var suiteFile;
  var wrapper = makeHtmlWrapper();

  runner.on('suite', function (suite) {
    if (suite.root) {
      return;
    }

    level++;

    if (level === 1) {
      suiteFile = wrapper.fileName(suite.title);
      output += wrapper.firstLevelTitle(suite.title);
    } else if (level === 2) {
      output += wrapper.secondLevelTitle(suite.title);
    } else {
      output += wrapper.otherTitle(suite.title);
    }
  });

  runner.on('suite end', function (suite) {
    if (suite.root) {
      return;
    }

    level--;

    if (level === 0) {
      if (!fs.existsSync(buildDir)) {
        fs.mkdirSync(buildDir);
      }

      fs.writeFileSync(buildDir + '/' + suiteFile, output);
      console.log('Doc file "build/%s" generated', suiteFile);
    } else if (level >= 2) {
      output += wrapper.otherTitleEnd();
    }
  });

  runner.on('pass', function (test) {
    output += wrapper.spec(test.title);
  });

  runner.on('fail', function (test, err) {
    console.log('fail: %s -- error: %s', test.fullTitle(), err.message);
    console.log('Aborting doc generation');
    process.exit(1);
  });
}

module.exports = DocReporter;