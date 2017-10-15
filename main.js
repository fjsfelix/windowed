const Analytics  = require('electron-google-analytics');
const analytics = new Analytics.default('UA-64857602-3');

const electron = require('electron')
const app = electron.app
const Menu = electron.Menu
const BrowserWindow = electron.BrowserWindow


const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 600, height: 800})
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  mainWindow.on('closed', function () {
    mainWindow = null
  })
  const template = [
  {
    label: "Application",
    submenu: [
        {
          label: 'Learn More',
          click () { require('electron').shell.openExternal('https://windowed.io') }
        },
        { type: "separator" },
        { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {role: 'undo'},
      {role: 'redo'},
      {type: 'separator'},
      {role: 'cut'},
      {role: 'copy'},
      {role: 'paste'},
      {role: 'pasteandmatchstyle'},
      {role: 'delete'},
      {role: 'selectall'}
    ]
  },
  {
    label: 'View',
    submenu: [
      // {role: 'toggledevtools'},
      {role: 'reload'},
      {role: 'forcereload'},
      {type: 'separator'},
      {role: 'togglefullscreen'}
    ]
  }
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

function googleAnalytics(){
    return analytics.screen('windowed', '1.0.0', 'com.windowed.app', 'com.windowed.app', 'user')
  .then((response) => {
    return response;
  }).catch((err) => {
    return err;
  });
}
googleAnalytics();


app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})


