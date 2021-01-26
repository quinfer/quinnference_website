'use strict';

const fs = require('fs');
const extractZip = require('extract-zip');
const got = require('got');
const tmp = require('tmp');

const config = require('./config');
const utils = require('./utils');
const operationSystemRevisions = require('./operationSystemRevisions');

function getOperationSystemRevision(platform, architecture) {
    const osWithRevision = operationSystemRevisions.find(operationSystem => {
        let sameOs = operationSystem.platform === platform;

        if (operationSystem.architecture) {
            sameOs = sameOs && (operationSystem.architecture === architecture);
        }

        return sameOs;
    });

    if (!osWithRevision) {
        console.log('Unknown platform or architecture found:', platform, architecture);
        throw new Error('Unsupported platform');
    }

    return osWithRevision.revision;
}

function createTempFile() {
    return new Promise((resolve, reject) => {
        tmp.file((error, path) => {
            if (error) {
                console.log('An error occured while trying to create temporary file', error);
                reject(error);
            } else {
                resolve(path);
            }
        });
    });
}

function getCdnDownloadStream(cdnUrl) {
    return new Promise((resolve, reject) => {
        const stream = got.stream(cdnUrl);

        stream.on('error', error => {
            if (error.statusCode === 404) {
                resolve(null);
            } else {
                reject(error);
            }
        });

        stream.on('response', () => resolve(stream));
    });
}

function downloadChromium() {
    return new Promise((resolve, reject) => {
        const platform = process.platform;
        const architecture = process.arch;

        const revision = getOperationSystemRevision(platform, architecture);
        const cdnUrls = utils.getOsCdnUrls({
            platform,
            architecture,
            revision
        });

        const promises = cdnUrls.map(cdnUrl => getCdnDownloadStream(cdnUrl));
        promises.push(createTempFile());

        Promise.all(promises)
            .then(promiseResults => {
                const path = promiseResults.pop();
                const downloadStream = promiseResults.find(promiseResult => promiseResult);
                console.log('Downloading Chromium archive from Google CDN');
                downloadStream
                    .pipe(fs.createWriteStream(path))
                    .on('error', error => {
                        console.log('An error occurred while trying to save Chromium archive to disk', error);
                        reject(error);
                    })
                    .on('finish', () => {
                        resolve(path);
                    });
            });
    });
}

function unzipArchive(archivePath, outputFolder) {
    console.log('Started extracting archive', archivePath);
    return new Promise((resolve, reject) => {
        extractZip(archivePath, {dir: outputFolder}, error => {
            if (error) {
                console.log('An error occurred while trying to extract archive', error);
                reject(error);
            } else {
                console.log('Archive was successfully extracted');
                resolve(true);
            }
        });
    });
}

module.exports = downloadChromium()
    .then(path => unzipArchive(path, config.BIN_OUT_PATH))
    .catch(err => console.error('An error occurred while trying to setup Chromium. Resolve all issues and restart the process', err));
