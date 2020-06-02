//import axios from '@/js_sdk/axios'
import axios from '@/js_sdk/gangdiedao-uni-axios'
var requestingNum = 0



/**
 * 请求接口日志记录
 */
function _reqlog(req) {
	if (process.env.NODE_ENV === 'development') {
		console.log("请求地址：" + req.url, req.data || req.params)
	}

	//TODO 调接口异步写入日志数据库
}

/**
 * 响应接口日志记录
 */
function _reslog(res) {
	if (process.env.NODE_ENV === 'development') {
		console.log(`${res.config.url}响应结果：`, res)
	}
}

// 创建自定义接口服务实例
const http = axios.create({
	// baseURL: [baseURL],
	timeout: 30000, // 不可超过 manifest.json 中配置 networkTimeout的超时时间
	// #ifdef H5
	withCredentials: true,
	crossDomain: true,
	// #endif
	headers: {
		'Content-Type': 'application/json',
		// 'Access-Control-Allow-Origin': '*',
		// 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
		// 'Access-Control-Allow-Headers':'Content-Type, Access-Control-Allow-Headers,Access-Control-Allow-Origin, Authorization, X-Requested-With'
		// 'X-Requested-With': 'XMLHttpRequest',
	},
})

//拦截器 在请求之前拦截
http.interceptors.request.use(config => {
	// code...
	// 获取本地存储的Cookie
	//    const cookie = uni.getStorageSync('cookie')
	//    // 设置Cookie
	//    config.headers.Cookie = cookie
	// _reqlog(config)
	return config
})

// 拦截器 在请求之后拦截
http.interceptors.response.use(response => {
	// _reslog("aaddresponse")
	_reslog(response)
	// code...
	// 获取cookie
// alert( "response");
	let headerStr = JSON.stringify(response.Cookie)
		// console.log(headerStr);
	let setCookie = /(?:Set-Cookie).+;/.exec(headerStr)
// alert(headerStr);
	// if(setCookie !=null){
	// 	let cookie = (setCookie[0]).replace(/Set-Cookie|:|"/g, "")
	// 		console.log("cookiejishu");
	// 	console.log(cookie);
	// 	if (cookie) {
	// 		uni.setStorage({
	// 			key: 'cookie',
	// 			data: cookie.split(';')[0]
	// 		})
	// 	}
	// }

	return response
}, error => {
	return Promise.reject(error.message)
})


// get 请求
function sendGetRequestJson(obj) {

	if (requestingNum === 0) {
		uni.showLoading({
			title: "正在加载数据"
		});
	}
	requestingNum++
	var url = obj.url
	var param = ""
	for (var key in obj.data) {
		if (param === "") {
			param = "?" + key + "=" + obj.data[key]
		} else {
			param = param + "&" + key + "=" + obj.data[key]
		}
	}
	if (param != "") {
		url = url + param;
		console.log(url)
	}
	// get 请求
	http.get(url, []).then(res => {
		obj.successCallBack(res.data);
	}).catch(error => {
		obj.failCallBack(error);
	}).finally((res) => {
		requestingNum--
		if (requestingNum === 0) {
			uni.hideLoading();
		}
	})
}

// get 请求
function sendGetRequestJsonlky(obj) {

	if (requestingNum === 0) {
		// uni.showLoading({
		// 	title: "正在加载数据"
		// });
	}
	requestingNum++
	var url = obj.url
	var param = ""
	for (var key in obj.data) {
		if (param === "") {
			param = "?" + key + "=" + obj.data[key]
		} else {
			param = param + "&" + key + "=" + obj.data[key]
		}
	}
	if (param != "") {
		url = url + param;
		console.log(url)
	}
	// get 请求
	http.get(url, []).then(res => {
		obj.successCallBack(res.data);
	}).catch(error => {
		obj.failCallBack(error);
	}).finally((res) => {
		requestingNum--
		if (requestingNum === 0) {
			// uni.hideLoading();
		}
	})
}


// post请求
function sendPOSTRequestJson(obj) {

	if (requestingNum === 0) {
		// this.loading = false;
		uni.showLoading({
			title: "正在加载数据",

		});
		console.log("requestingNum")
	}
	var url = obj.url
	console.log(url)
	requestingNum++
	console.log(obj.data)

	var param = ""
	for (var key in obj.data) {
		if (param === "") {
			param = "?" + key + "=" + obj.data[key]
		} else {
			param = param + "&" + key + "=" + obj.data[key]
		}
	}

	console.log(param)

	if (param != "") {
		url = url + param;
		console.log(url)
	}
	// post 请求
	http.post(url, []).then(res => {
		console.log("成功")
		obj.successCallBack(res.data);
	}).catch(error => {
		console.log("失败" + error)
		obj.failCallBack(error);
	}).finally(() => {
		requestingNum--
		if (requestingNum === 0) {
			// this.loading = false;
			uni.hideLoading();
		}

	})
}

function sendPostRequestJson(obj) {

	if (requestingNum === 0) {
		// this.loading = false;
		// uni.showLoading({
		// 	title: "正在加载数据"
		// });
		console.log("requestingNum")
	}
	requestingNum++
	console.log(obj.data)
	var url = obj.url
	console.log(JSON.stringify(obj.data));
	var param = ""
	for (var key in obj.data) {
		if (param === "") {
			param = "?" + key + "=" + obj.data[key]
		} else {
			param = param + "&" + key + "=" + obj.data[key]
		}
	}
	var url = obj.url + param;
	console.log(url)
	// post 请求
	http.post(url, []).then(res => {

		obj.successCallBack(res.data);
	}).catch(error => {
		console.log(error)
		obj.failCallBack(error);
	}).finally(() => {
		requestingNum--
		if (requestingNum === 0) {
			// this.loading = false;
			// uni.hideLoading();
		}
	})
}

function sendPost1RequestJson(obj) {
	if (requestingNum === 0) {
		// this.loading = false;
		uni.showLoading({
			title: "正在加载数据"
		});
		console.log("requestingNum")
	}
	requestingNum++
	console.log(obj+"-----------")
	console.log(obj.data.myData.get("destName")+"++++++++++++")
	var url = obj.url
	// console.log(JSON.stringify(obj.data));
	// var param = ""
	// for (var key in obj.data) {
	// 	if (param === "") {
	// 		param = "?" + key + "=" + obj.data[key]
	// 	} else {
	// 		param = param + "&" + key + "=" + obj.data[key]
	// 	}
	// }
	// var url = obj.url + param;
	// post 请求
	http.post(url, obj.data.myData).then(res => {

		obj.successCallBack(res.data);
	}).catch(error => {
		obj.failCallBack(error);
	}).finally(() => {
		requestingNum--
		if (requestingNum === 0) {
			// this.loading = false;
			uni.hideLoading();
		}
	})

}

module.exports = {
	sendGetRequestJson: sendGetRequestJson,
	sendPostRequestJson: sendPostRequestJson,
	sendPost1RequestJson: sendPost1RequestJson,
	sendPOSTRequestJson: sendPOSTRequestJson,
	sendGetRequestJsonlky: sendGetRequestJsonlky

}
