const lib = require('../../../../../../lib/lib.js');

const ioInject = require('../../../../helpers/io-inject.js');

test('create alice-bobbi view module with example, with custom config options', () => {
  const mysnap = [];

  const inject = ioInject(mysnap);

  const options = {
    name: 'alice-bobbi',
    githubAccount: 'alicebits',
    authorName: 'Alice',
    authorEmail: 'contact@alice.me',
    license: 'ISC',
    view: true,
    generateExample: true,
    exampleName: 'test-demo',
    exampleReactNativeVersion: 'react-native@0.60',
  };

  return lib(options, inject)
    .then(() => { expect(mysnap).toMatchSnapshot(); });
});