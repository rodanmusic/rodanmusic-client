### Build Process:
1. Run the rodanmusic-client build script.  This creates a minified project in the build directory.
2. Copy this built directory over to the rodanmusic-server/clientBuild directory.
3. run the rodanmusic-server build script.
4. Launch the server which serves the content via port 4000.  
5. Create an apache reverse proxy gateway to forward traffic received at port 80 to the express server on port 4000.