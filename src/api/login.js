import { postAxios } from '../utils/http';

// /admin/auth/register注册
export const registerUser = (params) => {
    return postAxios('/admin/auth/register', params);
};

// 登陆
export const loginUser = (params) => {
    return postAxios('/admin/auth/login', params);
};