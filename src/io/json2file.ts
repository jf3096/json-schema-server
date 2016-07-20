/**
 * Created by allen on 2016/7/15.
 */

import * as url from 'url';
import * as path from 'path';
import * as fs from 'fs';

function stripLastSlash(str:string):string {
    if (!str) {
        return null;
    }
    return str.slice(-1) === "/" ? str.slice(0, -1) : str;
}

export function getWritePath(urlString:string):string {
    if (!urlString) {
        throw new Error('json2file.ts: url should not be empty.')
    }
    const urlResult = url.parse(urlString);
    return urlResult.hostname + stripLastSlash(urlResult.pathname);
}

function write(urlString:string, jsonData:JSON) {
    const writePath = path.resolve(__dirname, 'schemas/pending');
}

export function createFolderByUrl(urlString:string, relativePath:string) {
    if (!urlString) {
        return;
    }

    const processBasePath = path.resolve(process.cwd(), relativePath);

    if (urlString.length > 200) {
        throw new Error('json2file.ts: url is too long as path in Windows. Limited in 200 characters. Windows path has restricted under 240 characters.');
    }

    const folderNames = urlString.split('/');

    if (folderNames.length > 10) {
        throw new Error('json2file.ts: folder length has limited up to 10 to prevent too deep in Window.');
    }

    folderNames.forEach((folderName:string, index:number)=> {
        let checkPath = processBasePath + "/" + folderNames.slice(0, index + 1).join("/");
        if (!fs.existsSync(checkPath)) {
            fs.mkdirSync(checkPath);
        }
    })
}