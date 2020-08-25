const { common } = require('../utils/index');
const homeApi = require('./module/home');
const collegeApi = require('./module/college');
const meApi = require('./module/me');
const apiObj = {};
apiObj.extend = function (copy) {
    return common.extend(this, copy)
}
apiObj.extend(homeApi);
apiObj.extend(collegeApi);
apiObj.extend(meApi);
module.exports = apiObj;