// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import vue from 'vue';

Object.assign(String.prototype, {
    replaceAll(search, replacement) { // 全局替换
        return this.replace(new RegExp(search, 'g'), replacement);
    },
    getTime() { // 时间转时间戳[单位:s]
        // this = '2014-04-23 18:55:49:123';
        const date = new Date(this);
        return Date.parse(date) / 1000;
    },
});

Object.assign(Number.prototype, {
    getTime() { // 时间戳转时间[单位:s]
        // this = 1330870514;
        const date = new Date(this * 1000);
        return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}. ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    },
});

Object.assign(vue.prototype, {
    _output(e) {
        console.group(`%ctitle：${e.title}`, 'color:#0114fb;background-color:#01fb09');// 打印分组
        console.info(`%cfrom：${document.title}`, 'background-color:#077aec');
        console.dir(e.content);
        console.info('%cto：', 'background-color:#077aec');
        console.trace();
        console.groupEnd();
    },

    _dataType(obj) { // 判断数据类型
        const type = Object.prototype.toString.call(obj);
        switch (type) {
            case '[object Object]':
                return 'Object';
            case '[object Array]':
                return 'Array';
            case '[object String]':
                return 'String';
            case '[object Number]':
                return 'Number';
            case '[object Boolean]':
                return 'Boolean';
            case '[object Undefined]':
                return 'Undefined';
            case '[object Function]':
                return 'Function';
            case '[object Null]':
                return 'Null';
            case '[object Document]' || '[object HTMLDocument]':
                return 'Document';
            default :
                return 'Unknown';
        }
    },

    _browserType() { // 判断浏览器类型
        const userAgent = navigator.userAgent,
            includes = userAgent.includes; // 取得浏览器的userAgent字符串
        return includes('Opera') ? 'Opera' : includes('Firefox') ? 'Firefox' : includes('Chrome') ? 'Chrome' : includes('Safari') ? 'Safari' : includes('compatible') && includes('MSIE') && !includes('Opera') ? 'IE' : 'Unknown';
    },

    _URLEncode(clearString) {
        let output = '';
        let x = 0;
        clearString = clearString.toString();
        const regex = /(^[a-zA-Z0-9-_.]*)/;
        while (x < clearString.length) {
            const match = regex.exec(clearString.substr(x));
            if (match !== null && match.length > 1 && match[1] !== '') {
                output += match[1];
                x += match[1].length;
            } else {
                if (clearString.substr(x, 1) === ' ') {
                    // 原文在此用 clearString[x] == ' ' 做判断, 但ie不支持把字符串当作数组来访问,
                    // 修改后两种浏览器都可兼容
                    output += '+';
                } else {
                    const charCode = clearString.charCodeAt(x);
                    const hexVal = charCode.toString(16);
                    output += `%${hexVal.length < 2 ? '0' : ''}${hexVal.toUpperCase()}`;
                }
                x++;
            }
        }
        return output;
    },

    request(name) {
        const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i'),
            r = window.location.search.substr(1).match(reg);
        return r !== null ? unescape(r[2]) : null;
    },

    _api() { // api服务
        const [ag, data] = [arguments, new FormData()];
        for (let x in ag[1]) {
            data.append(x, ag[1][x])
        }
        return this.$http.post(`/api/${ag[0]}`, data);
    },
    _ajax(option) {//自定义AJAX,注意：该接口仅用于token处理，不可用于其它数据的处理！
        const xmlHttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"),
            state_Change = () => {
                xmlHttp.readyState === 4 ? (() => {
                    //remark:箭头函数可以跟随this
                    if (xmlHttp.status === 200) {
                        //this._wxSignature();//微信授权
                        const data = xmlHttp.responseText;
                        option.success.call(this, typeof data === 'string' ? JSON.parse(data) : data)//注意使用json来传递数据
                    } else {
                        option.error ? option.error() : null
                    }
                })() : null
            };
        xmlHttp.onreadystatechange = state_Change;
        option.header ? xmlHttp.setRequestHeader(option.header.name, option.header.value) : null;//设置请求头部
        xmlHttp.open(option.type || "GET", option.url, typeof option.async === 'undefined' ? true : option.async);
        xmlHttp.send(option.data);
    },

    _randomString(len = 32) { // 随机字符串32
        const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678',
            maxPos = $chars.length;
        /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        let pwd = '';
        for (let i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    },
    _getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return (arr[2]);
        else
            return null;
    },
    _setCookie(name,value)
    {
        document.cookie = name + "="+ escape (value);
    }
});

/*Object.setPrototypeOf(qc,vue);*/

export default vue;
