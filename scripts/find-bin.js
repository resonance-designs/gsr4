const { spawnSync } = require('child_process');
const path = require('path');

const result = spawnSync('cargo', ['metadata', '--format-version', '1'], {
  encoding: 'utf8',
  stdio: ['ignore', 'pipe', 'inherit']
});

const root = path.resolve(__dirname, '..');

let targetDir = process.env.CARGO_TARGET_DIR || '';
let version = 'unknown';

if (result.status === 0 && result.stdout) {
  try {
    const metadata = JSON.parse(result.stdout);
    targetDir = metadata.target_directory || targetDir;
    const pkg = metadata.packages.find(p => p.name === 'grainrust');
    if (pkg && pkg.version) {
      version = pkg.version;
    }
  } catch (err) {
    console.error('Failed to parse cargo metadata:', err.message);
  }
} else {
  console.error('cargo metadata failed; falling back to CARGO_TARGET_DIR.');
}

if (!targetDir) {
  targetDir = path.join(root, 'target');
}
const profiles = ['debug', 'release'];
const targets = [];

for (const profile of profiles) {
  targets.push(`${targetDir}/${profile}/grainrust.exe`);
  targets.push(`${targetDir}/${profile}/deps/grainrust-*.exe`);
}

console.log(`grainrust ${version}`);
console.log('Target directory:', targetDir);
console.log('Possible exe locations:');
for (const t of targets) {
  console.log('  -', t);
}
