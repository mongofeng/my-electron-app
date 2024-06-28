const {contextBridge, ipcRenderer} = require('electron')

// contextBridge API can only be used when contextIsolation is enabled

// contextBridge.exposeInMainWorld('electron', {
//   ipcRenderer: ipcRenderer
// })

// contextBridge.exposeInMainWorld('versions', {
//   node: () => {
//     return process.versions.node
//   }, chrome: () => {
//     return process.versions.chrome
//   }, electron: () => {
//     return process.versions.electron
//   }, ping: () => ipcRenderer.invoke('ping')
// })