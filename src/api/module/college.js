const { postRequest } = require('../../utils/lib/request');
// 获取护肤学院文章列表
const getCollegeList = (data) => postRequest('/web/skin/getArticleList', data, 'no', 'no');
// 肌肤测试
const skinText = (data) => postRequest('/web/skin/test', data, 'no');
// 肌肤测试详情
const getSkinInfo = (data) => postRequest('/web/skin/getInfo', data, 'no');
// 获取肌肤测试分页
const getSkinPage = (data) => postRequest('/web/skin/getPage', data);
// 删除肌肤
const deleteSkinInfo = (data) => postRequest('/web/skin/deleteSkinInfo', data, 'no', 'no');
// 获取评论分页
const getComponentPage = (data) => postRequest('/web/article/getComponentPage', data, 'no', 'no');
// 添加文章浏览记录
const handleAddArticleBrowse = (data) => postRequest('/smallprogramMain/handleAddArticleBrowse', data, 'no', 'no');

module.exports = {
    getCollegeList,
    skinText,
    getSkinInfo,
    getSkinPage,
    getComponentPage,
    deleteSkinInfo,
    handleAddArticleBrowse
}