export const getOS = () => {
    let platform = undefined;

    if (process.platform === 'win32') {
        platform = 'win';
    } else if (process.platform === 'linux') {
        platform = 'linux';
    } else if (process.platform === 'darwin') {
        platform = 'mac';
    }

    if(platform === undefined) {
        throw new Error('Unsupported platform');
    }

    return platform;
}