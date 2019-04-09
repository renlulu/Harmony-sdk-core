const { task } = require('gulp');
const del = require('del');

const packages = [
  'harmony-crypto',
  'harmony-account',
  'harmony-network',
  'harmony-utils',
];

task('cleanBrowser', async () => {
  await packages.map((p) => {
    const pathToLib = `packages/${p}/lib`;
    return del.sync([pathToLib]);
  });
});

task('cleanServer', async () => {
  await packages.map((p) => {
    const pathToLib = `packages/${p}/dist`;
    return del.sync([pathToLib]);
  });
});

task('cleanDocs', async () => {
  await packages.map((p) => {
    const pathToLib = `packages/${p}/doc`;
    return del.sync([pathToLib]);
  });
});
