'use strict';

const path = require('path');

const config = require('./config');

module.exports = {
    getOsChromiumBinPath() {
        const platform = process.platform;

        let chromiumFolderNamePostfix = platform;
        if (platform === 'darwin') {
            chromiumFolderNamePostfix = 'mac';
        } else if (platform === 'win32') {
            chromiumFolderNamePostfix = 'win';
        }
        const chromiumFolderName = `chrome-${chromiumFolderNamePostfix}`;

        let binPath = path.join(config.BIN_OUT_PATH, chromiumFolderName);

        if (platform === 'linux') {
            binPath = path.join(binPath, 'chrome');
        } else if (platform === 'win32') {
            binPath = path.join(binPath, 'chrome.exe');
        } else if (platform === 'darwin') {
            binPath = path.join(binPath, 'Chromium.app/Contents/MacOS/Chromium');
        } else {
            console.error('Unsupported platform or architecture found:', process.platform, process.arch);
            throw new Error('Unsupported platform');
        }

        return binPath;
    },

    getOsCdnUrls(params) {
        const platform = params.platform;
        const architecture = params.architecture;
        const revision = params.revision;

        let urlOsName;
        if (platform === 'linux') {
            urlOsName = 'Linux';
            if (architecture === 'x64') {
                urlOsName += '_x64';
            }
        } else if (platform === 'win32') {
            urlOsName = 'Win';
            if (architecture === 'x64') {
                urlOsName += '_x64';
            }
        } else if (platform === 'darwin') {
            urlOsName = 'Mac';
        } else {
            console.log('Unknown platform or architecture found:', platform, architecture);
            throw new Error('Unsupported platform');
        }

        const urlOsPostfixes = [];
        if (platform === 'linux') {
            urlOsPostfixes.push(platform);
        } else if (platform === 'win32') {
            urlOsPostfixes.push(platform, 'win');
        } else {
            urlOsPostfixes.push('mac');
        }

        const urls = urlOsPostfixes.map(urlOsPostfix => {
            return `https://www.googleapis.com/download/storage/v1/b/chromium-browser-snapshots/o/${urlOsName}%2F${revision}%2Fchrome-${urlOsPostfix}.zip?alt=media`;
        });

        return urls;
    }
};
