/**
 * Created by allen on 2016/7/17.
 */

interface IPkgConfigs {
    appConfigs:{
        schema:{
            pending:string
        }
    }
}

export const pkgConfigs:IPkgConfigs = require('../../package.json');

