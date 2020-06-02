"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// 心跳包时间索引
var timer = null;
// 断线重连时间索引
var reConnectTimer = null;
// 是否登录
var isLogin = false;
// 当前网络状态
var netWork = true;
// 是否是主动退出
// let isClosed:boolean = false;
// 消息队列
var socketMsgQueue = [];
var uniSocket = /** @class */ (function () {
    function uniSocket(config) {
        var _this = this;
        this.config = __assign({
            url: "ws://127.0.0.1",
            params: {},
            debug: true,
            isSendHeart: true,
            isReconnection: true,
            reConnectTime: 3000,
            timeout: 4 * 60 * 1000,
            heartData: "ping",
            onSocketMessage: null,
            onSocketClose: null,
            onSocketError: null,
            onSocketOpen: null
        }, config);
        // 连接socket
        this.initSocket = function (success, fail) {
            // isClosed = false;
            if (isLogin) {
                _this.config.debug && console.log("%c [socket] %c 您已经登录了,请勿重新登录", 'color:#0f0;', 'color:#000;');
                return typeof success === "function" && success(_this);
            }
            // 检查网络状态
            _this.config.debug && console.log("%c [socket] %c 检查网络状态...", 'color:yellow;', 'color:#000;');
            // @ts-ignore
            uni.getNetworkType({
                fail: function (err) {
                    _this.config.debug && console.log("%c [socket] %c 检查网络状态失败:", 'color:red;', 'color:#000;', err);
                    typeof fail === "function" && fail(err, _this);
                },
                success: function (res1) {
                    if (res1.networkType === "none") {
                        _this.config.debug && console.log("%c [socket] %c 网络已断开", 'color:red;', 'color:#000;');
                        isLogin = false;
                        netWork = false;
                        // @ts-ignore
                        uni.showModal({
                            title: "网络错误",
                            content: "请打开网络服务",
                            showCancel: false
                        });
                        typeof fail === "function" && fail(res1, _this);
                    }
                    else {
                        netWork = true;
                        _this.config.debug && console.log("%c [socket] %c 网络正常,开始建立连接...", 'color:yellow;', 'color:#000;');
                        // @ts-ignore
                        uni.connectSocket({
                            url: _this.config.url,
                            fail: function (err) {
                                _this.config.debug && console.log("%c [socket] %c 连接socket失败:", 'color:red;', 'color:#000;', err);
                                typeof fail === "function" && fail(err, _this);
                            },
                            success: function (res2) {
                                console.log("%c [socket] %c 连接成功", 'color:blue;', 'color:#000;', res2);
                                typeof success === "function" && success(_this);
                            }
                        });
                    }
                }
            });
        };
        // 发送socket消息
        this.sendSocketMessage = function (data, success, fail) {
            if (data === void 0) { data = ""; }
            if (typeof data === "object") {
                // @ts-ignore
                data = __assign(__assign({}, _this.config.params), data);
                _this.config.debug && console.log("%c [socket] %c 发送消息", 'color:blue;', 'color:#000;', data);
                data = JSON.stringify(data);
            }
            else {
                _this.config.debug && console.log("%c [socket] %c 发送消息", 'color:blue;', 'color:#000;', data);
            }
            if (!isLogin) {
                // @ts-ignore
                socketMsgQueue.push(data);
            }
            else {
                // @ts-ignore
                uni.sendSocketMessage({
                    data: data,
                    success: success,
                    fail: fail
                });
            }
        };
        // 主动关闭socket
        this.closeSocket = function (options) {
            _this.config.debug && console.log("%c [socket] %c 主动关闭socket", 'color:red;', 'color:#000;');
            isLogin = false;
            // 主动退出
            // isClosed = true;
            if (_this.config.isSendHeart) {
                _this._clearHeart();
            }
            // @ts-ignore
            uni.closeSocket(options);
        };
        // 监听socket是否打开成功
        // @ts-ignore
        uni.onSocketOpen(function (header) {
            _this.config.debug && console.log("%c [socket] %c socket打开成功", 'color:blue;', 'color:#000;', header);
            isLogin = true;
            // 判断是否需要发送心跳包
            if (_this.config.isSendHeart) {
                _this.config.debug && console.log("%c [socket] %c 检查到需要发送心跳包:", 'color:#0f0;', 'color:#000;', _this.config.timeout);
                _this._clearHeart();
                _this._startHeart();
            }
            // 发送消息队列消息
            for (var i = 0; i < socketMsgQueue.length; i++) {
                _this.config.debug && console.log("%c [socket] %c 正在发送消息队列消息:", 'color:blue;', 'color:#000;', i, socketMsgQueue[i]);
                _this.sendSocketMessage(socketMsgQueue[i]);
            }
            socketMsgQueue = [];
            typeof _this.config.onSocketOpen === "function" && _this.config.onSocketOpen(_this);
        });
        // @ts-ignore
        uni.onSocketMessage(function (data) {
            var message = _this._isJson(data.data) ? JSON.parse(data.data) : data.data;
            _this.config.debug && console.log("%c [socket] %c 接收到消息:", 'color:blue;', 'color:#000;', message);
            typeof _this.config.onSocketMessage === "function" && _this.config.onSocketMessage(message);
        });
        // 监听网络状态
        // @ts-ignore
        uni.onNetworkStatusChange(function (res) {
            _this.config.debug && console.log("%c [socket] %c 监听到网络状态改变", 'color:#0f0;', 'color:#000;', JSON.stringify(res));
            if (res.isConnected) {
                if (!isLogin /*&& !isClosed */ && _this.config.isReconnection) {
                    _this.config.debug && console.log("%c [socket] %c 监听到有网络服务,重新连接socket", 'color:yellow;', 'color:#000;');
                    _this._reConnectSocket();
                }
            }
            else {
                isLogin = false;
                _this.config.isSendHeart && _this._clearHeart();
                // @ts-ignore
                uni.showModal({
                    title: "网络错误",
                    content: "请打开网络服务",
                    showCancel: false
                });
            }
        });
        // 监听socket被关闭
        // @ts-ignore
        uni.onSocketClose(function (res) {
            isLogin = false;
            typeof _this.config.onSocketClose === "function" && _this.config.onSocketClose(res);
            _this.config.debug && console.log("%c [socket] %c 监听到socket被关闭了:", 'color:red;', 'color:#000;', JSON.stringify(res));
            // 停止心跳检查
            if (_this.config.isSendHeart) {
                _this._clearHeart();
            }
            if ( /*!isClosed && */_this.config.isReconnection) {
                // 断线重连
                _this.config.debug && console.log("%c [socket] %c 非主动断开socket,重新连接中...", 'color:yellow;', 'color:#000;');
                _this._reConnectSocket();
            }
        });
        // 监听socket错误
        // @ts-ignore
        uni.onSocketError(function (res) {
            isLogin = false;
            _this.config.debug && console.log("%c [socket] %c 监听到socket错误", 'color:red;', 'color:#000;', res);
            // if(this.config.isReconnection){
            //   this.initSocket();
            // }
            typeof _this.config.onSocketError === "function" && _this.config.onSocketError(res);
        });
    }
    // socket重连
    uniSocket.prototype._reConnectSocket = function () {
        var _this = this;
        if (isLogin) {
            this.config.debug && console.log("%c [socket] %c 在登录状态,无法重连", 'color:red;', 'color:#000;');
        }
        else {
            reConnectTimer = setInterval(function () {
                _this.initSocket(function (e) {
                    e.config.debug && console.log("%c [socket] %c 重新连接成功", 'color:yellow;', 'color:#000;');
                    if (e.config.isSendHeart) {
                        e._clearHeart();
                        e._startHeart();
                    }
                    clearInterval(reConnectTimer);
                    reConnectTimer = null;
                }, function (err, e) {
                    e.config.debug && console.log("%c [socket] %c 重新连接失败", 'color:red;', 'color:#000;');
                });
            }, this.config.reConnectTime);
        }
    };
    // 清除心跳
    uniSocket.prototype._clearHeart = function () {
        this.config.debug && console.log("%c [socket] %c 已清除心跳", 'color:#0f0;', 'color:#000;');
        clearInterval(timer);
    };
    // 心跳开始
    uniSocket.prototype._startHeart = function () {
        var _this = this;
        this.config.debug && console.log("%c [socket] %c 心跳开始", 'color:#0f0;', 'color:#000;');
        timer = setInterval(function () {
            console.info("%c [socket] %c 登录状态", 'color:#0f0;', 'color:#000;', isLogin);
            _this.sendSocketMessage(_this.config.heartData);
        }, this.config.timeout);
    };
    // 是否是json字符串
    uniSocket.prototype._isJson = function (str) {
        try {
            var obj = JSON.parse(str);
            return !!(typeof obj == 'object' && obj);
        }
        catch (e) {
            return false;
        }
    };
    return uniSocket;
}());
exports.default = uniSocket;
