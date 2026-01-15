const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(command, args, options = {}) {
  const result = spawnSync(command, args, { stdio: 'inherit', ...options });
  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

const root = path.resolve(__dirname, '..');
const docsSite = path.join(root, 'docs-site');
const docsBuild = path.join(docsSite, 'build');
const docsDest = path.join(root, 'documentation');

run('cargo', ['build']);
run('npm', ['--prefix', 'docs-site', 'install']);
run('npm', ['--prefix', 'docs-site', 'run', 'build']);

if (fs.existsSync(docsDest)) {
  fs.rmSync(docsDest, { recursive: true, force: true });
}
fs.mkdirSync(docsDest, { recursive: true });
fs.cpSync(docsBuild, docsDest, { recursive: true });

console.log(`Deployed docs to ${docsDest}`);
