import { postAxios, getAxios } from '../utils/http';

// 发布活动
export const activePublish = (params) => {
    return postAxios('/activity/publish', params);
};

// 活动列表
export const activeList = (params) => {
    return getAxios('/activity/list', params);
};

// 活动详情
export const activeDetail = (params) => {
    return getAxios('/activity/detail', params);
};

// 更新活动
export const activeUpdate = (params) => {
    return postAxios('/activity/update', params);
};

// 删除活动
export const activeDelete = (params) => {
    return postAxios('/activity/delete', params);
};