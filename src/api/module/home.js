const { postRequest } = require('../../utils/lib/request');
// 获取顶部消息数量
const getMessageCount = (data) => postRequest('/sa/index/front/systemMessageCount', data);
// 获取icon list
const getIconList = (data) => postRequest('/sa/index/front/columnInfoList', data, '', '');
// 分类全部状态列表
const getClassAllList = (data) => postRequest('/smallprogramMain/handle_getGoodsOrderBy', data, 'no', 'no');
// 获取相关文章
const getAboutAtc = (data) => postRequest('/sa/index/front/findIndexOrOtherArticlePage', data, 'no','no');
// 分类列表
const getClassList = (data) => postRequest('/smallprogramMain/handle_getTypes', data, 'no','');
// 获取首页banner
const pullBannerAd = (data) => postRequest('/sa/index/front/pullBannerAd', data, 'no','no');
// 清空消息数量
const readAll = (data) => postRequest('/sa/index/front/readAll', data, 'no','no');
// 获取问诊用户列表
const getAskList = (data) => postRequest('/sa/index/front/findConsumerPhonePage', data, 'no','no');
module.exports = {
    getMessageCount,
    getIconList,
    getClassAllList,
    getAboutAtc,
    getClassList,
    pullBannerAd,
    readAll,
    getAskList
}