const { postRequest } = require('../../utils/lib/request');
// 发表初映象笔记
const addWriteNote = (data) => postRequest('/sa/index/front/addImpressNote', data, 'no', 'no');
// 发表印圈笔记
const addCircleNote = (data) => postRequest('/sa/index/front/publishCircleNote', data, 'no', 'no');
// 查询笔记列表
const getCirleNoteList = (data) => postRequest('/sa/index/front/findImpressNotePage', data, 'no', 'no');
// 查询印圈列表
const getCirleNoteData = (data) => postRequest('/sa/index/front/findCircleNotePage', data, 'no', 'no');
// 发布印圈评论
const noteCommentSend = (data) => postRequest('/sa/index/front/publishNoteComment', data, 'no', 'no');
// 印圈点赞
const circleFabulous = (data) => postRequest('/sa/index/front/likeCircleNote', data, 'no', 'no');
// 获取赞过文章
const findCollectionOrDzArticlePage = (data) => postRequest('/sa/index/front/findCollectionOrDzArticlePage', data, 'no', 'no');
module.exports = {
    addWriteNote,
    addCircleNote,
    getCirleNoteList,
    getCirleNoteData,
    noteCommentSend,
    circleFabulous,
    findCollectionOrDzArticlePage
}