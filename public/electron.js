"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var isDev = require("electron-is-dev");
var path = require("path");
// 1. Gabage Collection이 일어나지 않도록 함수 밖에 선언함.
var mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        //alwaysOnTop: true,
        center: true,
        //fullscreen: true,
        kiosk: !isDev,
        resizable: true
    });
    // 3. and load the index.html of the app.
    if (isDev) {
        // 개발 중에는 개발 도구에서 호스팅하는 주소에서 로드
        mainWindow.loadURL("http://localhost:3000");
        mainWindow.webContents.openDevTools();
    }
    else {
        // 프로덕션 환경에서는 패키지 내부 리소스에 접근
        mainWindow.loadFile(path.join(__dirname, "../build/index.html"));
    }
    // Emitted when the window is closed.
    mainWindow.on("closed", function () {
        mainWindow = undefined;
    });
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.on("ready", createWindow);
// Quit when all windows are closed.
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", function () {
    if (mainWindow === null) {
        createWindow();
    }
});
