import {getWritePath, createFolderByUrl} from '../../src/io/json2file';
/**
 * Created by allen on 2016/7/15.
 */

require('chai').should();

describe('getWritePath', ()=> {
    it('normal sample #1', function () {
        getWritePath('http://mochajs.org/').should.equal('mochajs.org');
    });

    it('normal sample #2', function () {
        getWritePath('https://www.google.com/#q=nodejs+url').should.equal('www.google.com');
    });

    it('normal sample #3', function () {
        getWritePath('https://github.com/jedwood/api-testing-with-node/tree/master/test').should.equal('github.com/jedwood/api-testing-with-node/tree/master/test');
    });

    it('normal sample git', function () {
        getWritePath('https://github.com/jf3096/bilibili-live-video-noty.git').should.equal('github.com/jf3096/bilibili-live-video-noty.git');
    });

    it('empty string', function () {
        (()=>getWritePath('')).should.throw();
    });

    it('null value', function () {
        (()=>getWritePath(null)).should.throw();
    });
});

describe('createFolderByUrl', ()=> {
    it('normal sample #1', function () {
        createFolderByUrl("github.com/jf3096/bilibili-live-video-noty.git");
    });
});