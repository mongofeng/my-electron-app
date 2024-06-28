
console.log(versions)
console.log(ipcRenderer)



const info = document.querySelector('.info')
info.innerHTML = `
    <div>Node: ${versions.node()}</div>
    <div>Chrome: ${versions.chrome()}</div>
    <div>Electron: ${versions.electron()}</div>
`


const func = async () => {
    const response = await ipcRenderer.invoke('ping')
    console.log(response) // 打印 'pong'
    const div = document.createElement('div')
    div.innerHTML = response
    document.body.appendChild(div)
  
}


document.querySelector('#btn').addEventListener('click', func)

