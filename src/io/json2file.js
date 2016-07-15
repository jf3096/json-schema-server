/**
 * Created by allen on 2016/7/15.
 */
"use strict";
var url = require('url');
var path = require('path');
// import * as  path from 'path';
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
    console.log(writePath);
    // if (!fs.existsSync(dir)) {
    //     fs.mkdirSync(dir);
    // }
    // /^(http(s)):\/\/(.*(\/))\/(.*(\/))\/(.*(\/))/
    // http://kcrm.temaiyao.com/api/MedicalRep/CheckMRUserState
}
write();
//# sourceMappingURL=json2file.js.map