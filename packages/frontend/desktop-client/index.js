const { app, BrowserWindow } = require('electron')
const serve = require('electron-serve')

let mainWindow

const loadURL = serve({
  directory: 'build'
})

function createWindow () {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800
  })

  loadURL(mainWindow)

  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', dereferenceWindowObject)
}

function dereferenceWindowObject () {
  mainWindow = null
}

app.on('ready', createWindow)
