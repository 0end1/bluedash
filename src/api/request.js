import axios from 'axios'

//环境参数
const hostObj = {
    dev: 'https://devleague.round-table-union.com',
    test: 'https://testleague.round-table-union.com',
    uat: 'https://uatleague.round-table-union.com',
    prd: 'https://league.round-table-union.com'
};
const env = 'prd'; //写死参数，环境切换也不用改

// 添加请求拦截器
axios.interceptors.request.use(function(config) {

    // 在发送请求之前做些什么
    config.headers.serviceversion = env;
    config.headers.source = 'web'
    config.headers.version = '1.0.0';
    //config.headers.tk = sessionStorage.getItem('token') || ''
        // config.baseURL = hostObj[env]
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    if (response.data.ret === "20180001") {
        reLogin(response.data);
    } else {
        return response;
    }

}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


/**
 * Http Get 请求
 * @param {String} apiUrl 请求地址
 * @param {Object} params 请求参数
 */
export function get(apiUrl, params) {
    return axios.get(apiUrl, {
        params
    })
}

/**
 * Http Post 请求
 * @param {String} apiUrl 请求地址
 * @param {Object} data 请求参数
 */
export function post(apiUrl, data) {
    return axios.post(apiUrl, data)
}

function showAlert(msg) {
    let deviceType = localStorage.getItem("platform");
    if (deviceType === "iOS") {
        window.webkit.messageHandlers.AppModel.postMessage({
            body: msg,
            isAlert: "true"
        });
    } else if (deviceType === "android") {
        window.nativeMethod.onAlertMsg(msg);
    }
}

function reLogin(data) {
    let deviceType = localStorage.getItem("platform");
    let errorCode = ["20180011", '20180001']
    if (errorCode.includes(data.ret)) {
        if (deviceType === "iOS") {
            window.webkit.messageHandlers.AppModel.postMessage({
                body: data.msg,
                isAlert: "true",
                code: data.ret
            });
        } else if (deviceType === "android") {
            window.nativeMethod.onAlertCodeMsg(data.ret, data.msg);
        }
    } else {
        showAlert(response.data.msg);
    }
}