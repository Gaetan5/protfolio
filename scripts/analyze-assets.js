const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const MAX_SIZE_KB = 500; // Seuil d'alerte à 500KB

console.log('\x1b[36m%s\x1b[0m', '🚀 Analyse des assets images...');

function analyzeDir(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      analyzeDir(filePath);
    } else if (/\.(png|jpg|jpeg|webp|avif)$/i.test(file)) {
      const sizeKB = stats.size / 1024;
      if (sizeKB > MAX_SIZE_KB) {
        console.log(
          '\x1b[31m%s\x1b[0m',
          `⚠️  ALERTE : ${file} est trop lourd (${sizeKB.toFixed(2)} KB)`,
        );
      } else {
        console.log('\x1b[32m%s\x1b[0m', `✅ ${file} (${sizeKB.toFixed(2)} KB)`);
      }
    }
  });
}

analyzeDir(publicDir);
console.log('\x1b[36m%s\x1b[0m', '✨ Analyse terminée.');
