const { postRequest } = require('../../utils/lib/request');
// 获取护肤学院文章列表
const getCollegeList = (data) => postRequest('/skin/getArticleList', data);
// 肌肤测试
const skinText = (data) => postRequest('/skin/test', data);
// 肌肤测试详情
const getSkinInfo = (data) => postRequest('/skin/getInfo', data);
// 获取肌肤测试分页
const getSkinPage = (data) => postRequest('/skin/getPage', data);
module.exports = {
    getCollegeList,
    skinText,
    getSkinInfo,
    getSkinPage
}