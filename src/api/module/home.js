const { postRequest } = require('../../utils/lib/request');
// 获取顶部消息数量
const getMessageCount = (data) => postRequest('/sa/index/front/systemMessageCount', data);
// 获取icon list
const getIconList = (data) => postRequest('/sa/index/front/columnInfoList', data, '', '');
// 分类全部状态列表
const getClassAllList = (data) => postRequest('/smallprogramMain/handle_getGoodsOrderBy', data, 'no', 'no');
module.exports = {
    getMessageCount,
    getIconList,
    getClassAllList
}