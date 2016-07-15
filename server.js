/**
 * Created by allen on 2016/7/15.
 */
require('es6-promise').polyfill();
require('isomorphic-fetch');
fetch('//offline-news-api.herokuapp.com/stories')
    .then(function (response) {
    if (response.status >= 400) {
        throw new Error("Bad response from server");
    }
    return response.json();
})
    .then(function (stories) {
    console.log(stories);
});
//# sourceMappingURL=server.js.map