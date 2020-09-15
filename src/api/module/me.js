const { postRequest } = require('../../utils/lib/request');
// 登录
const userLoginGetOpenId = (data) => postRequest('/smallprogramMain/getSmallUserInfo', data, 'no', 'no');
// 添加用户
const addUserInfo = (data) => postRequest('/smallprogramMain/handleInsertUserInfo', data, 'no', 'no');
// 获取用户信息
const getUserInfo = (data) => postRequest('/smallprogramMain/handleGetUserInfo', data, '', '');
// 修改用户
const editUserInfo = (data) => postRequest('/smallprogramMain/handleUpdateSmallUser', data, '', '');
// 获取消息列表
const getMsgList = (data) => postRequest('/sa/index/front/pullSystemMessage', data, 'no', '');
// 获取完善用户信息
const getAllUserInfo = (data) => postRequest('/sa/index/getAllUserInfo', data, 'no', 'no');
// 判断用户是否被关注
const judgeUserGz = (data) => postRequest('/sa/index/front/judgeUserGz', data, 'no', 'no');
// 关注
const articleGz = (data) => postRequest('/smallprogramMain/handleAddFans', data, 'no');
// 取消关注
const articleCloseGz = (data) => postRequest('/smallprogramMain/handleDelFans', data, 'no');
// 文章转发
const articleZc = (data) => postRequest('/web/article/zf', data, 'no');
// 评论文章
const atcPlRequest = (data) => postRequest('/web/article/pl', data, 'no');
// 获取文章详情
const getAtcInfo = (data) => postRequest('/web/article/getArticleInfo', data);
// 文章点赞
const articleDz = (data) => postRequest('/web/article/dz', data, 'no');
// 文章收藏
const articleSc = (data) => postRequest('/web/article/sc', data, 'no');
// 获取用户文章
const findNotifyRemindPage = (data) => postRequest('/sa/index/front/findNotifyRemindPage', data, 'no', 'no');
// 获取关注 粉丝
const getUserFansOrAttentions = (data) => postRequest('/sa/index/getUserFansOrAttentions', data, 'no', 'no');
module.exports = {
    userLoginGetOpenId,
    findNotifyRemindPage,
    addUserInfo,
    getUserInfo,
    editUserInfo,
    getMsgList,
    getAllUserInfo,
    judgeUserGz,
    articleGz,
    articleCloseGz,
    getUserFansOrAttentions,
    articleZc,
    getAtcInfo,
    atcPlRequest,
    articleDz,
    articleSc
}