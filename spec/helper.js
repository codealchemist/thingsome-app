var path = require('path');

module.exports = {
  appPath: function() {
    switch (process.platform) {
      case 'darwin':
        return path.join(__dirname, '..', '.tmp', 'AppsomeApp-darwin-x64', 'AppsomeApp.app', 'Contents', 'MacOS', 'AppsomeApp');
      case 'linux':
        return path.join(__dirname, '..', '.tmp', 'AppsomeApp-linux-x64', 'AppsomeApp');
      default:
        throw 'Unsupported platform';
    }
  }
};
