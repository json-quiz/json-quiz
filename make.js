require('shelljs/make');

target.build = function () {
  echo('Regenerating directories from ./build...');
  rm('-rf', '_spec', '_data', 'schemas');
  cp('-r', 'build/_spec', 'build/_data', 'build/schemas', '.');
};

target.rollback = function () {
  echo('Reverting changes and leaving branch...');
  exec('git reset HEAD');
  exec('git checkout .');
  exec('git checkout master');
};