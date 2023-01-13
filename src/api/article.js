import { postAxios, getAxios } from '../utils/http';

// 创建分类
export const categoryCreate = (params) => {
    return postAxios('/article/category/create', params);
};

// 分类列表
export const categoryList = (params) => {
    return getAxios('/article/category/list', params);
};

// 分类详情
export const categoryDetail = (params) => {
    return getAxios('/article/category/detail', params);
};

// 分类更新
export const categoryUpdate = (params) => {
    return postAxios('/article/category/update', params);
};

// 分类删除
export const categoryDelete = (params) => {
    return postAxios('/article/category/delete', params);
};

// 创建文章
export const articleCreate = (params) => {
    return postAxios('/article/publish', params);
};

// 文章列表
export const articleList = (params) => {
    return getAxios('/article/list', params);
};

// 文章详情
export const articleDetail = (params) => {
    return getAxios('/article/detail', params);
};

// 文章更新
export const articleUpdate = (params) => {
    return postAxios('/article/update', params);
};

// 删除文章
export const articleDelete = (params) => {
    return postAxios('/article/delete', params);
};