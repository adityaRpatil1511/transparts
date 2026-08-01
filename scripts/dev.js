const os = require('os');
const { spawn } = require('child_process');

function getNetworkIp() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Return first non-internal IPv4 address (e.g. Wi-Fi / Ethernet 10.x.x.x or 192.168.x.x)
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '0.0.0.0';
}

const networkIp = getNetworkIp();

console.log('\n\x1b[36m%s\x1b[0m', '  ▲ Next.js Development Server');
console.log(`  \x1b[32m- Local:\x1b[0m   http://localhost:3000`);
console.log(`  \x1b[36m- Network:\x1b[0m http://${networkIp}:3000\n`);

const child = spawn('npx', ['next', 'dev', '-H', '0.0.0.0'], {
  stdio: 'inherit',
  shell: true,
});

child.on('error', (err) => {
  console.error('Failed to start Next.js dev server:', err);
});
