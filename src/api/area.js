import { postAxios, getAxios } from '../utils/http';

// 发布活动
export const areaCreate = (params) => {
    return postAxios('/area/create', params);
};

// 活动列表
export const areaList = (params) => {
    return getAxios('/area/list', params);
};

// 活动详情
export const areaDetail = (params) => {
    return getAxios('/area/detail', params);
};

// 更新活动
export const areaUpdate = (params) => {
    return postAxios('/area/update', params);
};

// 删除活动
export const areaDelete = (params) => {
    return postAxios('/area/delete', params);
};