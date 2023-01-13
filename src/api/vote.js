import { postAxios, getAxios } from '../utils/http';

// 发布活动
export const voteCreate = (params) => {
    return postAxios('/vote/create', params);
};

// 活动列表
export const voteList = (params) => {
    return getAxios('/vote/list', params);
};

// 活动详情
export const voteDetail = (params) => {
    return getAxios('/vote/detail', params);
};

// 更新活动
export const voteUpdate = (params) => {
    return postAxios('/vote/update', params);
};

// 删除活动
export const voteDelete = (params) => {
    return postAxios('/vote/delete', params);
};

// 批量创建选项
export const voteOptionCreate = (params) => {
    return postAxios('/vote/option/create/batch', params);
};

// 获取选项的列表
export const voteOptionList = (params) => {
    return getAxios('/vote/option/list', params);
};

// 选项删除
export const voteOptionDelete = (params) => {
    return postAxios('/vote/option/delete', params);
};

// 选项更新
export const voteOptionUpdate = (params) => {
    return postAxios('/vote/option/update', params);
};