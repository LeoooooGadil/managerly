import path from 'path';
import fs from 'fs';
import { getOS } from './os'
import { AppData } from '../data';

export const createAppDirectory = () => {
    // get if linux or windows
    let os = getOS();

    // create app directory based on os
    if (os === 'win') {
        // windows
        const appDirectory = getAppDirectory(process.env.APPDATA);
        // create directory
        createDirectory(appDirectory);
    }
    else if (os === 'linux') {
        // linux
        const appDirectory = getAppDirectory(process.env.HOME, '.app');
        // create directory
        createDirectory(appDirectory);
    }
    else if (os === 'mac') {
        // mac
        const appDirectory = path.join(process.env.HOME, 'Library', 'Application Support');
        // create directory
        createDirectory(appDirectory);
    }
    else {
        throw new Error('Unsupported platform');
    }
}

export const createDirectory = (dir) => {
    if(fs.existsSync(dir)) return;
    fs.mkdirSync(dir, { recursive: true })
}

export const getAppDirectory = (...dir) => {
    return path.join(...dir, AppData.name);
}
