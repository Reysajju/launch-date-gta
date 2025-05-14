# Static Assets Setup

For local development and deployment, you need to place the following folders in this directory:

1. `GTAVI_Artwork_Wallpapers` - Contains all artwork and wallpapers
2. `GTAVI_Screenshots` - Contains all screenshots
3. `GTAVI_Videos` - Contains all video clips

## Setup Instructions

1. Copy or move these folders from the project root to this `public` directory:
   ```
   cp -r ../GTAVI_Artwork_Wallpapers ./
   cp -r ../GTAVI_Screenshots ./
   cp -r ../GTAVI_Videos ./
   ```

2. Alternatively, on Windows, you can create symbolic links (requires admin privileges):
   ```
   mklink /D GTAVI_Artwork_Wallpapers ..\GTAVI_Artwork_Wallpapers
   mklink /D GTAVI_Screenshots ..\GTAVI_Screenshots
   mklink /D GTAVI_Videos ..\GTAVI_Videos
   ```

These assets are referenced in the application with paths like `/GTAVI_Artwork_Wallpapers/...`
