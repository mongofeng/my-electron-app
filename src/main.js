const { app, BrowserWindow } = require('electron')
const path = require('path')
function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile(path.resolve(__dirname, '../public/index.html'))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}



app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})