const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(command, args, options = {}) {
  const result = spawnSync(command, args, { stdio: 'inherit', ...options });
  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

const root = path.resolve(__dirname, '..', '..');
const platform = process.platform;

function buildDocs() {
  run('npm', ['--prefix', 'docs-site', 'install'], { cwd: root });
  run('npm', ['--prefix', 'docs-site', 'run', 'build'], { cwd: root });
  const docsBuild = path.join(root, 'docs-site', 'build');
  const docsDest = path.join(root, 'dist', platform === 'win32' ? 'windows' : platform === 'darwin' ? 'macos' : 'linux', 'documentation');
  if (fs.existsSync(docsDest)) {
    fs.rmSync(docsDest, { recursive: true, force: true });
  }
  fs.mkdirSync(docsDest, { recursive: true });
  fs.cpSync(docsBuild, docsDest, { recursive: true });
}

if (platform === 'win32') {
  buildDocs();
  const script = path.join(root, 'scripts', 'packaging', 'windows', 'build-installer.ps1');
  run('powershell', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', script]);
} else if (platform === 'darwin') {
  buildDocs();
  const script = path.join(root, 'scripts', 'packaging', 'mac', 'build-installer.sh');
  run('bash', [script]);
} else {
  buildDocs();
  const script = path.join(root, 'scripts', 'packaging', 'linux', 'build-package.sh');
  run('bash', [script]);
}
