/**
 * Created by allen on 2016/7/15.
 */
"use strict";
var url = require('url');
var path = require('path');
var fs = require('fs');
function stripLastSlash(str) {
    if (!str) {
        return null;
    }
    return str.slice(-1) === "/" ? str.slice(0, -1) : str;
}
function getWritePath(urlString) {
    if (!urlString) {
        throw new Error('json2file.ts: url should not be empty.');
    }
    var urlResult = url.parse(urlString);
    return urlResult.hostname + stripLastSlash(urlResult.pathname);
}
exports.getWritePath = getWritePath;
function write(urlString, jsonData) {
    var writePath = path.resolve(__dirname, 'schemas/pending');
}
function createFolderByUrl(urlString, relativePath) {
    if (!urlString) {
        return;
    }
    var processBasePath = path.resolve(process.cwd(), relativePath);
    if (urlString.length > 200) {
        throw new Error('json2file.ts: url is too long as path in Windows. Limited in 200 characters. Windows path has restricted under 240 characters.');
    }
    var folderNames = urlString.split('/');
    if (folderNames.length > 10) {
        throw new Error('json2file.ts: folder length has limited up to 10 to prevent too deep in Window.');
    }
    folderNames.forEach(function (folderName, index) {
        var checkPath = processBasePath + "/" + folderNames.slice(0, index + 1).join("/");
        if (!fs.existsSync(checkPath)) {
            fs.mkdirSync(checkPath);
        }
    });
}
exports.createFolderByUrl = createFolderByUrl;
//# sourceMappingURL=json2file.js.map