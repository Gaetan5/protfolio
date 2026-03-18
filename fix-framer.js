const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Remplacer animate={{ opacity: 1... }} par whileInView={{ opacity: 1... }}
  // et ajouter viewport={{ once: true, margin: "-50px" }} si pas déjà présent

  // Regex pour trouver les motion.div, motion.section, motion.h2... qui ont initial et animate
  // C'est un peu risqué avec juste regex, on va chercher spécifiquement :
  // animate={{ opacity: 1, y: 0 }} ou similaire

  content = content.replace(/animate=\{\s*\{([^}]+)\}\s*\}/g, (match, innerProps) => {
    // Si ca ressemble à une animation d'entrée (opacity: 1), on la passe en whileInView
    if (
      innerProps.includes('opacity: 1') ||
      innerProps.includes('y: 0') ||
      innerProps.includes('x: 0')
    ) {
      return `whileInView={{${innerProps}}} viewport={{ once: true, margin: "100px" }}`;
    }
    return match;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${path.basename(filePath)}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

walkDir(componentsDir);
console.log('Done updating animations!');
