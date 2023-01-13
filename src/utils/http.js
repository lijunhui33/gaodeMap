import Axios from "axios";
import { Message } from 'element-ui';
import router from '@/router/index';
import store from '../vuex/index';
// const userData = localStorage.getItem('userData');
// console.log(userData, 'test==>');
// userData 登陆请求返回后缓存
// {
//     userType: UserType; // 用户类型
//     accessToken: string; // 用户访问令牌
// }
import dev from '@/utils/dev';

// 请求地址
const https = dev.URL;
console.log(https, 'http_url');
// headers请求头等
let axios = Axios.create({
    baseURL: https,
    headers: {
        'ysxf-auth-data': store.state.userData || ''
    },
    timeout: 30000
});

// 每次请求拿最新token
axios.interceptors.request.use(
    (config) => {
        config.headers['ysxf-auth-data'] = store.state.userData;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 添加响应器
axios.interceptors.response.use(
    res => resHandler(res),
    err => {
        Message.error('服务报错');
        return Promise.reject(err);
    });

// 过期状态码在此处拦截
function resHandler (res) {
    // 如果是登陆过期并且在注册或者登陆页，不弹窗提示过期
    // 登陆失效的码
    const codeList = [507, 506, 10111, 10112, 10113, 10114, 10115,];
    if (codeList.indexOf(res.data.code) != -1 && router.app._route.name !== 'login' && router.app._route.name !== 'register') {
        // 如果是登陆过期并且在注册或者登陆页，不弹窗提示过期
        Message.error('登陆已过期');
        setTimeout(() => {
            router.push({ path: '/login' });
            store.commit('deleteUserData', '');
        }, 2000);
    }
    return Promise.resolve(res);
}

export const postAxios = (url, data) => {
    return axios.post(`${url}`, data);
};


export const putAxios = (url, data) => {
    return axios.put(`${url}`, data);
};

export const getAxios = (url, data) => {
    return axios.get(`${url}`, { params: data });
};

export const deleteAxios = (url, data) => {
    return axios.delete(`${url}`, { params: data });
};