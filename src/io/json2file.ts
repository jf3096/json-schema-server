/**
 * Created by allen on 2016/7/15.
 */

import * as url from 'url';
import * as path from 'path';
// import * as  path from 'path';


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
    console.log(writePath);
    // if (!fs.existsSync(dir)) {
    //     fs.mkdirSync(dir);
    // }

    // /^(http(s)):\/\/(.*(\/))\/(.*(\/))\/(.*(\/))/
    // http://kcrm.temaiyao.com/api/MedicalRep/CheckMRUserState
}
write();