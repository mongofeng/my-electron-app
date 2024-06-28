const {contextBridge, ipcRenderer} = require('electron')

// contextBridge API can only be used when contextIsolation is enabled
// 原型里面的好像不能直接访问
contextBridge.exposeInMainWorld('ipcRenderer', {
  invoke:  ipcRenderer.invoke
})

contextBridge.exposeInMainWorld('versions', {
  node: () => {
    return process.versions.node
  }, chrome: () => {
    return process.versions.chrome
  }, electron: () => {
    return process.versions.electron
  }, ping: () => ipcRenderer.invoke('ping')
})