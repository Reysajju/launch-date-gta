# Static Assets Setup

For local development and deployment, you need to place the following folders in this directory:

1. `GTAVI_Artwork_Wallpapers` - Contains all artwork and wallpapers
2. `GTAVI_Screenshots` - Contains all screenshots
3. `GTAVI_Videos` - Contains all video clips

## Setup Instructions

1. Run the setup-assets script to automatically copy the assets:
   ```
   npm run setup-assets
   ```

2. Alternatively, copy or move these folders from the project root to this `public` directory:
   ```
   cp -r ../GTAVI_Artwork_Wallpapers ./
   cp -r ../GTAVI_Screenshots ./
   cp -r ../GTAVI_Videos ./
   ```

3. On Windows, you can also use the included batch file:
   ```
   .\copy-assets.bat
   ```

## Important Note for Netlify Deployment

When deploying to Netlify, you need to upload these assets separately since they are too large for GitHub. You can:

1. Use Netlify Large Media (Git LFS)
2. Upload the assets directly to Netlify using their UI
3. Host the assets on a CDN and update the paths in the code

These assets are referenced in the application with paths like `/GTAVI_Artwork_Wallpapers/...`
