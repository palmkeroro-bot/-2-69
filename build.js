import { copyFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Create vendor directory if it doesn't exist
try {
  mkdirSync('vendor', { recursive: true });
} catch (err) {
  // Directory might already exist
}

// Copy the analytics library
try {
  copyFileSync(
    'node_modules/@vercel/analytics/dist/index.mjs',
    'vendor/analytics.js'
  );
  console.log('✓ Copied @vercel/analytics to vendor/analytics.js');
} catch (err) {
  console.error('Error copying analytics:', err);
  process.exit(1);
}
