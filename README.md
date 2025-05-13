# GTA VI Announcement Website

A promotional website for Grand Theft Auto VI built with React, TypeScript, and Vite.

## Setup

1. Make sure you have Node.js installed:
   ```
   C:\Users\sajjad.rasool\Downloads\Node\node-v23.11.0-win-x64
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up assets:
   ```
   npm run setup-assets
   ```
   This will copy the asset directories (GTAVI_Artwork_Wallpapers, GTAVI_Screenshots, GTAVI_Videos) to the public directory.

## Development

Run the development server:
```
npm run dev
```

## Building for Production

Build the project:
```
npm run build
```

Preview the production build:
```
npm run preview
```

## Deployment to Netlify

This project includes a `netlify.toml` file for easy deployment to Netlify.

### Option 1: Deploy with GitHub

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Netlify will automatically use the build settings in `netlify.toml`
4. **Important**: After the initial deployment, you'll need to upload your assets

### Option 2: Deploy with Netlify CLI (Recommended)

1. Install the Netlify CLI:
   ```
   npm install -g netlify-cli
   ```

2. Build your project:
   ```
   npm run build
   ```

3. Deploy to Netlify:
   ```
   netlify deploy
   ```

4. Follow the prompts and specify `dist` as your publish directory

### Handling Assets for Netlify

Since the media assets are large, you have several options:

1. **Netlify Large Media (Git LFS)**:
   - Install Git LFS
   - Set up Netlify Large Media
   - Track your asset files with Git LFS
   - Push to GitHub

2. **Direct Upload**:
   - After deployment, go to Netlify's "Deploys" tab
   - Click on "Deploy settings" > "Functions" > "Asset optimization"
   - Upload your assets to the appropriate directories

3. **Use a CDN**:
   - Host your assets on a CDN like Cloudinary or AWS S3
   - Update the asset paths in your code to point to the CDN URLs

## Project Structure

- `src/` - Source code
  - `components/` - React components
  - `data/` - Data files (characters, locations)
  - `types/` - TypeScript type definitions
- `public/` - Static assets
  - `GTAVI_Artwork_Wallpapers/` - Artwork and wallpapers
  - `GTAVI_Screenshots/` - Screenshots
  - `GTAVI_Videos/` - Video clips

## Troubleshooting

### Import Path Issues

If you encounter build errors related to file paths:

1. Make sure you're not using file extensions in import statements (e.g., use `import App from './App'` instead of `import App from './App.tsx'`)
2. Verify that all asset paths are correct and the files exist in the public directory
3. Run `npm run setup-assets` to ensure all assets are properly set up

### Netlify Build Failures

If your Netlify build fails:

1. **setup-assets.js not found**:
   - Make sure the file is committed to your repository
   - Check that the file is in the root directory
   - Verify that the build command in netlify.toml is correct

2. **Assets not found**:
   - The setup-assets.js script will create empty directories if assets aren't found
   - You'll need to upload your assets separately after deployment

3. **Node.js version issues**:
   - The netlify.toml file sets Node.js to version 18
   - If you need a different version, update the NODE_VERSION in netlify.toml
