
const { contextBridge, ipcRenderer } = require('electron')
console.log(contextBridge, ipcRenderer)


const info = document.querySelector('.info')
info.innerHTML = `
    <div>Node: ${process.versions.node}</div>
    <div>Chrome: ${process.versions.chrome}</div>
    <div>Electron: ${process.versions.electron}</div>
`


const func = async () => {
    const response = await ipcRenderer.invoke('ping')
    console.log(response) // 打印 'pong'
}


document.querySelector('#btn').addEventListener('click', func)

