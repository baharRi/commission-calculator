const { app, BrowserWindow } = require("electron") //634 (gzipped: 392)

require("@electron/remote/main").initialize()

function createWindow() {
    //create the app window
    const win = new BrowserWindow({
        width: 400,
        height: 600, 
        webPreferences: {
            enableRemoteModule: true
        }
    })

    win.loadURL("http://localhost:3000")

}

app.on("ready", createWindow)

//these are for MacOS. can delete
app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit()
    }
})

app.on("active", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})