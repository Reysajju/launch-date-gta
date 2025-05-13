// This script helps set up the assets for deployment
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories to copy
const assetDirs = [
  'GTAVI_Artwork_Wallpapers',
  'GTAVI_Screenshots',
  'GTAVI_Videos'
];

// Create public directory if it doesn't exist
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
  console.log('Created public directory');
}

// Function to recursively copy a directory
function copyDirectory(source, destination) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  // Get all files and directories in the source
  const entries = fs.readdirSync(source, { withFileTypes: true });

  // Process each entry
  for (const entry of entries) {
    const srcPath = path.join(source, entry.name);
    const destPath = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      // Recursively copy subdirectories
      copyDirectory(srcPath, destPath);
    } else {
      // Copy files
      try {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${entry.name}`);
      } catch (error) {
        console.error(`Error copying ${entry.name}: ${error.message}`);
      }
    }
  }
}

// Copy each asset directory to public
assetDirs.forEach(dir => {
  const sourcePath = path.join(__dirname, dir);
  const destPath = path.join(__dirname, 'public', dir);

  // Check if source directory exists
  if (fs.existsSync(sourcePath)) {
    console.log(`Processing ${dir}...`);
    try {
      copyDirectory(sourcePath, destPath);
      console.log(`Successfully set up ${dir} in public directory`);
    } catch (error) {
      console.error(`Error setting up ${dir}: ${error.message}`);
    }
  } else {
    console.warn(`Warning: ${dir} not found in project root. This is expected on Netlify.`);
    
    // Create empty directories to prevent build errors
    fs.mkdirSync(destPath, { recursive: true });
    console.log(`Created empty directory for ${dir}`);
  }
});

console.log('Asset setup complete!');
