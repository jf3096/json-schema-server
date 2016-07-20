"use strict";
var json2file_1 = require('../../src/io/json2file');
/**
 * Created by allen on 2016/7/15.
 */
require('chai').should();
describe('getWritePath', function () {
    it('normal sample #1', function () {
        json2file_1.getWritePath('http://mochajs.org/').should.equal('mochajs.org');
    });
    it('normal sample #2', function () {
        json2file_1.getWritePath('https://www.google.com/#q=nodejs+url').should.equal('www.google.com');
    });
    it('normal sample #3', function () {
        json2file_1.getWritePath('https://github.com/jedwood/api-testing-with-node/tree/master/test').should.equal('github.com/jedwood/api-testing-with-node/tree/master/test');
    });
    it('normal sample git', function () {
        json2file_1.getWritePath('https://github.com/jf3096/bilibili-live-video-noty.git').should.equal('github.com/jf3096/bilibili-live-video-noty.git');
    });
    it('empty string', function () {
        (function () { return json2file_1.getWritePath(''); }).should.throw();
    });
    it('null value', function () {
        (function () { return json2file_1.getWritePath(null); }).should.throw();
    });
});
describe('createFolderByUrl', function () {
    it('normal sample #1', function () {
        json2file_1.createFolderByUrl("github.com/jf3096/bilibili-live-video-noty.git");
    });
});
//# sourceMappingURL=json2file.js.map