/**
 * Created by allen on 2016/7/15.
 */


require('es6-promise').polyfill();
require('isomorphic-fetch');

const rootAddress = "http://kcrm.temaiyao.com/api/Doctor/";

class MedicalRepService {
    checkMRUserState():Promise<any> {
        return fetch('http://kcrm.temaiyao.com/api/MedicalRep/CheckMRUserState?RoleType=11&Token=nol3y00vYWKNX21Xy9C2kjRl0KA&appSecret=7d8dc5ecba1c42829274a19a76fd82d1&oid=oPDHttyQTM-4bXFKRtMJNDCdVNCM&return_type=json&uid=opeeCv48evqXVIuP2uQyIR2JaUPY')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
    }
}
