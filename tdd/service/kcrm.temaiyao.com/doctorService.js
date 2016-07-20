/**
 * Created by allen on 2016/7/15.
 */
var should = require('chai').should(), supertest = require('supertest'), api = supertest('http://localhost:5000');
describe('Authentication', function () {
    it('errors if wrong basic auth', function (done) {
        api.get('/blog')
            .set('x-api-key', '123myapikey')
            .auth('incorrect', 'credentials')
            .expect(401, done);
    });
});
//# sourceMappingURL=doctorService.js.map