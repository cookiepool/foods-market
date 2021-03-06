import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.1.108:3000';
axios.defaults.withCredentials = true; // 允许跨域携带cookie

// 封装好的接口方法
export default {
    // 退出登录
    logout() {
        return new Promise((resolve, reject) => {
            axios.get('/user/logout').then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        })
    },
    // 判定用户是否已经登录
    isLogin() {
        return new Promise((resolve, reject) => {
            axios.get('/user/islogin').then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            })
        });
    },
    // 通用不带参数请求
    common_request(url) {
        return new Promise((resolve, reject) => {
            axios.get(url).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            })
        });
    },

    // 用户注册
    userRegister(params) {
        return new Promise((resolve, reject) => {
            axios.post('/user/register', params).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            })
        });
    },
    // 验证手机号是否已经注册
    checkPhoneNum(params) {
        return new Promise((resolve, reject) => {
            axios.post('/user/isRegister', params).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            })
        });
    },
    // 用户登录
    userLogin(params) {
        return new Promise((resolve, reject) => {
            axios.post('/user/login', params).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        });
    },
    // 商品详情页数据
    getProduct(params) {
        return new Promise((resolve, reject) => {
            axios.get('/product/productdetail', params).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        });
    },
    // 分类页面产品数据
    getType(params) {
        return new Promise((resolve, reject) => {
            axios.get('/product/typelist', params).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        });
    },
    // 获取购物车列表
    getCartList() {
        return new Promise((resolve, reject) => {
            axios.get('/cart/cartlist').then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            })
        });
    }
}