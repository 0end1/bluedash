// 生成uuid
export function generateUUID() {
  let d = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now(); //use high-precision timer if available
  }
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

//url参数格式化
export function parse_url(url) {
  const pattern = /(\w+)=(\w+)/ig; //定义正则表达式
  const params = {}; //定义数组
  url.replace(pattern, function (a, b, c) {
    params[b] = c;
  });
  return params; //返回这个数组.
}

/**
 * 获取路径的参数
 */
export function getQueryString(name, search = window.location.href) {
  console.log('search : ', search)
  search = search.split('?')[1]
  if (!search) return false
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
  let r = search.match(reg)
  if (r != null) return unescape(r[2]);
  return null;
}

/**
 *  @desc 防抖 (debounce): 将多次高频操作优化为只在最后一次执行，
 *  通常使用的场景是：用户输入，只需再输入完成后做一次输入校验即可。
 *  立即执行版的意思是触发事件后函数会立即执行，然后 n 秒内不触发事件才能继续执行函数的效果。
 *  @param fn 执行的回调函数
 *  @param wait 每次执行之后的间隔等待的时间
 *  @param immediate 是否立即执行
 */
export function debounce(fn, wait = 100, immediate = false) {
  let timeout = null
  return function (...args) {
    let context = this
    let callNow = !timeout
    timeout && clearTimeout(timeout)
    if (immediate) {
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      callNow && fn.apply(context, args)
    } else {
      timeout = setTimeout(() => {
        fn.apply(context, args)
      }, wait)
    }
  }
}

/**
 *  节流(throttle): 节流阀 每隔一段时间后执行一次，也就是降低频率，将高频操作优化成低频操作，
 *  通常使用场景: 滚动条事件 或者 resize 事件，通常每隔 100~500 ms执行一次即可。
 *  @desc 函数节流
 *  @param fn 函数
 *  @param wait 延迟执行毫秒数
 *  @param type 1 表时间戳版，2 表定时器版
 */
export function throttle(fn, wait = 500, type = 2) {
  let previous = Date.now()
  let timeout = null
  return function (...args) {
    let context = this
    if (type === 1) {
      let now = Date.now()
      if (now - previous > wait) {
        fn.apply(context, args)
        previous = now
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null
          fn.apply(context, args)
        }, wait)
      }
    }
  }
}

/**
 *  @desc  时间格式化
 *  @param timestamp 函数
 *  @param separator 分隔符
 *  @param type 日期类型
 */
export function formatTime({timestamp = '', separator = '.', type = 'date'} = {}) {
  let date
  if (timestamp) {
    // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
    timestamp = timestamp.length === 10 ? timestamp * 1000 : timestamp * 1
    date = new Date(timestamp)
  } else {
    // 如果没有时间戳 则获取当前时间对象实例
    date = new Date()
  }

  const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
  }
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const dates = [year, month, day].map(formatNumber).join(separator)
  switch (type) {
    case 'dateTime':
      return dates + ' ' + [hour, minute].map(formatNumber).join(':')
    case 'date':
      return dates
    case 'time':
      return dates + ' ' + [hour, minute, second].map(formatNumber).join(':')
  }
}


//判断系统类型
export function OSnow(){
  var agent = navigator.userAgent.toLowerCase();
  var isMac = /macintosh|mac os x/i.test(navigator.userAgent);
  if (agent.indexOf("win32") >= 0 || agent.indexOf("wow32") >= 0) {
    return { system: 'Windows', bits: 'win32' };
  }
  if (agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0) {
    return { system: 'Windows', bits: 'win64' };
  }
  if(isMac){
    return { system: 'Mac' };
  }
}
