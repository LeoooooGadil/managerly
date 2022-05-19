const devMenuTemplate = (app) => {

    const devMenuTemplate = [
        {
            label: 'File',
            submenu: [
                {label: 'Quit', accelerator: 'CmdOrCtrl+Q', click: () => app.quit()}
            ]
        },
        {
            label: 'Dev',
            submenu: [
                {
                    label: 'Toggle DevTools', 
                    accelerator: 'CmdOrCtrl+I', 
                    click: (item, focusedWindow) => {
                    focusedWindow.toggleDevTools();
                    }
                },
                {
                    label: 'Reload',
                    accelerator: 'CmdOrCtrl+R',
                    click: (item, focusedWindow) => {
                        focusedWindow.reload();
                    }
                },
                {
                    label: 'Back',
                    accelerator: 'CmdOrCtrl+Left',
                    click: (item, focusedWindow) => {
                        focusedWindow.webContents.goBack();
                    }
                },
                {
                    label: 'Forward',
                    accelerator: 'CmdOrCtrl+Right',
                    click: (item, focusedWindow) => {
                        focusedWindow.webContents.goForward();
                    }
                }
            ]
        }
    ]

    return devMenuTemplate
}

export default devMenuTemplate;