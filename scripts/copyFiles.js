/*
This script is used during the build of JS packages to
copy and modify the package.json file and copy other files
*/

const path = require('node:path');
const fse = require('fs-extra');

console.log('Copying files...');

const rootPath = path.resolve(__dirname, '..');
const packagePath = process.cwd();
const buildPath = path.join(packagePath, './dist');

async function includeFileInBuild(file) {
  const sourcePath = path.resolve(packagePath, file);
  const targetPath = path.resolve(buildPath, path.basename(file));
  await fse.copy(sourcePath, targetPath);
  // console.log(`Copied ${sourcePath} to ${targetPath}`);
}

async function createPackageFile() {
  const pkgFilePath = path.resolve(packagePath, './package.json');
  // console.log(`Updating ${pkgFilePath}`);
  const packageData = await fse.readFile(pkgFilePath, 'utf8');
  const { scripts, devDependencies, module, publishConfig, volta, ...other } =
    JSON.parse(packageData);

  // we remove
  //  - scripts
  //  - devDependencies
  //  - publishConfig
  //  - volta

  const newPackageData = {
    ...other,
    private: false,
    main: './index.es.js',
    types: './index.d.ts',
  };

  const targetPath = path.resolve(buildPath, './package.json');

  await fse.writeFile(targetPath, JSON.stringify(newPackageData, null, 2), 'utf8');
  // console.log(`Created package.json in ${targetPath}`);

  return newPackageData;
}

async function run() {
  try {
    // update and copy package.json
    await createPackageFile();

    // copy global files to packages
    const filesToCopy = [`${rootPath}/LICENSE.md`, `${rootPath}/STYLE_GUIDE.md`, 'README.md'];
    await Promise.all(filesToCopy.map((file) => includeFileInBuild(file)));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
