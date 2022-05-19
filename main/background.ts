import { app, Menu } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import devMenuTemplate from './menu';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainMenu = Menu.buildFromTemplate(devMenuTemplate(app));
  Menu.setApplicationMenu(mainMenu);

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    autoHideMenuBar: isProd ? true : false,
  });

  if (isProd) {
    await mainWindow.loadURL('app://./index.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/`);
    // mainWindow.webContents.openDevTools();
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});