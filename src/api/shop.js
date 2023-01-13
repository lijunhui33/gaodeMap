import { postAxios, getAxios } from '../utils/http';

// 发布活动
export const shopCategoryCreate = (params) => {
    return postAxios('/shop/category/create', params);
};

// 活动列表
export const shopCategoryList = (params) => {
    return getAxios('/shop/category/list', params);
};

// 活动详情
export const shopCategoryDetail = (params) => {
    return getAxios('/shop/category/detail', params);
};

// 更新活动
export const shopCategoryUpdate = (params) => {
    return postAxios('/shop/category/update', params);
};

// 删除活动
export const shopCategoryDelete = (params) => {
    return postAxios('/shop/category/delete', params);
};