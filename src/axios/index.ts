// 引入axios以及element ui中的loading和MessageBox组件
import Vue from 'vue';
import axios from 'axios';
import { Toast } from 'vant';
// // 超时时间
axios.defaults.timeout = 1000000;
// 默认带上cookie
// axios.defaults.withCredentials = true;

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.AppKey = '01d358feb9a354cf';

// // http请求拦截器
let storage: any = window.localStorage;
const curWwwPath = window.document.location.href;
// // axios.interceptors.request.use(config => {

axios.interceptors.request.use((config: any) => {

    let flag: boolean = true;
    if (storage.count && Number(storage.count) === 1) {
        flag = false;
    } else {
        flag = true;
    }
    setTimeout( () => {
        storage.count = 2;
    }, 5000);
    if (flag) {
        Toast.loading({
            mask: true,
            message: '加载中...',
            duration: 0
        });
    }
    // config.headers.AppId = 'keshihuafenxi';
    // config.headers.AppKey = '01d358feb9a354cf';

    // console.log('config', config);

    return config;
}, (error: any) => {
    Toast.clear();
    storage.count = 1;

    return Promise.reject(error);
});

// // http响应拦截器
axios.interceptors.response.use((data: any) => {// 响应成功关闭loading
    // axios.interceptors.response.use(data => {// 响应成功关闭loading

    // 登录页面不执行此判断
    // if (data.data.error && curWwwPath.indexOf('landing') === -1) {
    //     MessageBox.alert('您还未登陆或者您的登陆已失效,请登陆后再试', '温馨提示', {
    //         confirmButtonText: '确定',
    //         callback: (action) => {
    //         // callback: action => {
    //         window.location.href = RealPath + '/#/landing';
    //         }
    //     });
    // }
    // Promise.reject(data);
    // const ccc = data;
    Toast.clear();
    storage.count = 1;

    return data;
},
    (error) => {

        Toast.clear();
        storage.count = 1;

        return Promise.reject(error);
    });

export default axios;
