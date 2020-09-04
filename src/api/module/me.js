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
module.exports = {
    userLoginGetOpenId,
    addUserInfo,
    getUserInfo,
    editUserInfo,
    getMsgList
}