// eslint-disable-next-line import/no-unresolved
const { app, BrowserWindow } = require('electron');
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const chokidar = require('chokidar');
const { protocol } = require('electron');
const fs = require('fs');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile('public/index.html');

  const watcher = chokidar.watch('dist/bundle.js', {
    ignored: /(^|[/\\])\../, // ignore dotfiles
    persistent: true,
  });

  watcher.on('change', () => {
    console.log('detected changes');

    win.reload();
  });
}

try {
  app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });
} catch (e) {
  console.log('THIS IS AN ERROR', e);
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
