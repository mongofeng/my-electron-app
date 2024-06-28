const { app, BrowserWindow } = require('electron')
const path = require('path')
function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, './server/preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile(path.resolve(__dirname, '../public/index.html'))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}



app.whenReady().then(() => {
    console.log('app.whenReady')
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

})

app.on('window-all-closed', () => {ct
    console.log('window-all-closed')

    if (process.platform !== 'darwin') {
      app.quit()
    }
})