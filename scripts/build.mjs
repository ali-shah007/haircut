import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
await Promise.all(['index.html', 'app.js', 'style.css'].map(file => copyFile(file, `dist/${file}`)));
console.log('Built static app in dist/');
