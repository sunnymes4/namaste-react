# NAMASTE REACT

# PARCEL - https://parceljs.org/
- Zero Config - No Configuration required to run parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement - replace any new changes made and saved
- File Watching Algorithm - written in C++ -
  to build app as soon as there is any change in the file
- Caching - Faster Builds - reducing time on each build
- Image Optimization
- Compression
- production Bundler
- Minification
- Consistent Hashing
- Code Splitting
- Https
- Diffirential Bundling - Support older Browsers
- Diagnostic - gives nice view of errors if any
- Error Handling
- Tree Shaking - Removes unused code from codebase
- Different Dev and Production bundles

# Important Points to Remember
- Remove main: app.js from package.json - bacause it throws error when you are running - 
  npx parcel build index.html which is conflict.

# Commands
- npx parcel index.html - for local (developement) build - takes lesser time than prod build.
- npx parcel build index.html - for prod build
