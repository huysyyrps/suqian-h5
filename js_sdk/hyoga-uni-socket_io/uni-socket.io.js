! function(t, e) {
	if ("object" == typeof exports && "object" == typeof module) module.exports = e();
	else if ("function" == typeof define && define.amd) define([], e);
	else {
		var r = e();
		for (var n in r)("object" == typeof exports ? exports : t)[n] = r[n]
	}
}(window, (function() {
	return function(t) {
		var e = {};

		function r(n) {
			if (e[n]) return e[n].exports;
			var o = e[n] = {
				i: n,
				l: !1,
				exports: {}
			};
			return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
		}
		return r.m = t, r.c = e, r.d = function(t, e, n) {
			r.o(t, e) || Object.defineProperty(t, e, {
				enumerable: !0,
				get: n
			})
		}, r.r = function(t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, r.t = function(t, e) {
			if (1 & e && (t = r(t)), 8 & e) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var n = Object.create(null);
			if (r.r(n), Object.defineProperty(n, "default", {
					enumerable: !0,
					value: t
				}), 2 & e && "string" != typeof t)
				for (var o in t) r.d(n, o, function(e) {
					return t[e]
				}.bind(null, o));
			return n
		}, r.n = function(t) {
			var e = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return r.d(e, "a", e), e
		}, r.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, r.p = "", r(r.s = 22)
	}([function(t, e) {
		t.exports = function() {
			return function() {}
		}
	}, function(t, e, r) {
		function n(t) {
			if (t) return function(t) {
				for (var e in n.prototype) t[e] = n.prototype[e];
				return t
			}(t)
		}
		t.exports = n, n.prototype.on = n.prototype.addEventListener = function(t, e) {
				return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(
					e), this
			}, n.prototype.once = function(t, e) {
				function r() {
					this.off(t, r), e.apply(this, arguments)
				}
				return r.fn = e, this.on(t, r), this
			}, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener =
			function(t, e) {
				if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
				var r, n = this._callbacks["$" + t];
				if (!n) return this;
				if (1 == arguments.length) return delete this._callbacks["$" + t], this;
				for (var o = 0; o < n.length; o++)
					if ((r = n[o]) === e || r.fn === e) {
						n.splice(o, 1);
						break
					} return this
			}, n.prototype.emit = function(t) {
				this._callbacks = this._callbacks || {};
				var e = [].slice.call(arguments, 1),
					r = this._callbacks["$" + t];
				if (r)
					for (var n = 0, o = (r = r.slice(0)).length; n < o; ++n) r[n].apply(this, e);
				return this
			}, n.prototype.listeners = function(t) {
				return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
			}, n.prototype.hasListeners = function(t) {
				return !!this.listeners(t).length
			}
	}, function(t, e, r) {
		var n, o = r(33),
			i = r(16),
			s = r(35),
			a = r(36),
			c = r(37);
		"undefined" != typeof ArrayBuffer && (n = r(38));
		var h = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
			u = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
			f = h || u;
		e.protocol = 3;
		var p = e.packets = {
				open: 0,
				close: 1,
				ping: 2,
				pong: 3,
				message: 4,
				upgrade: 5,
				noop: 6
			},
			l = o(p),
			d = {
				type: "error",
				data: "parser error"
			},
			y = r(39);

		function g(t, e, r) {
			for (var n = new Array(t.length), o = a(t.length, r), i = function(t, r, o) {
					e(r, (function(e, r) {
						n[t] = r, o(e, n)
					}))
				}, s = 0; s < t.length; s++) i(s, t[s], o)
		}
		e.encodePacket = function(t, r, n, o) {
			"function" == typeof r && (o = r, r = !1), "function" == typeof n && (o = n, n = null);
			var i = void 0 === t.data ? void 0 : t.data.buffer || t.data;
			if ("undefined" != typeof ArrayBuffer && i instanceof ArrayBuffer) return function(t, r, n) {
				if (!r) return e.encodeBase64Packet(t, n);
				var o = t.data,
					i = new Uint8Array(o),
					s = new Uint8Array(1 + o.byteLength);
				s[0] = p[t.type];
				for (var a = 0; a < i.length; a++) s[a + 1] = i[a];
				return n(s.buffer)
			}(t, r, o);
			if (void 0 !== y && i instanceof y) return function(t, r, n) {
				if (!r) return e.encodeBase64Packet(t, n);
				if (f) return function(t, r, n) {
					if (!r) return e.encodeBase64Packet(t, n);
					var o = new FileReader;
					return o.onload = function() {
						e.encodePacket({
							type: t.type,
							data: o.result
						}, r, !0, n)
					}, o.readAsArrayBuffer(t.data)
				}(t, r, n);
				var o = new Uint8Array(1);
				o[0] = p[t.type];
				var i = new y([o.buffer, t.data]);
				return n(i)
			}(t, r, o);
			if (i && i.base64) return function(t, r) {
				var n = "b" + e.packets[t.type] + t.data.data;
				return r(n)
			}(t, o);
			var s = p[t.type];
			return void 0 !== t.data && (s += n ? c.encode(String(t.data), {
				strict: !1
			}) : String(t.data)), o("" + s)
		}, e.encodeBase64Packet = function(t, r) {
			var n, o = "b" + e.packets[t.type];
			if (void 0 !== y && t.data instanceof y) {
				var i = new FileReader;
				return i.onload = function() {
					var t = i.result.split(",")[1];
					r(o + t)
				}, i.readAsDataURL(t.data)
			}
			try {
				n = String.fromCharCode.apply(null, new Uint8Array(t.data))
			} catch (e) {
				for (var s = new Uint8Array(t.data), a = new Array(s.length), c = 0; c < s.length; c++) a[c] = s[c];
				n = String.fromCharCode.apply(null, a)
			}
			return o += btoa(n), r(o)
		}, e.decodePacket = function(t, r, n) {
			if (void 0 === t) return d;
			if ("string" == typeof t) {
				if ("b" === t.charAt(0)) return e.decodeBase64Packet(t.substr(1), r);
				if (n && !1 === (t = function(t) {
						try {
							t = c.decode(t, {
								strict: !1
							})
						} catch (t) {
							return !1
						}
						return t
					}(t))) return d;
				var o = t.charAt(0);
				return Number(o) == o && l[o] ? t.length > 1 ? {
					type: l[o],
					data: t.substring(1)
				} : {
					type: l[o]
				} : d
			}
			o = new Uint8Array(t)[0];
			var i = s(t, 1);
			return y && "blob" === r && (i = new y([i])), {
				type: l[o],
				data: i
			}
		}, e.decodeBase64Packet = function(t, e) {
			var r = l[t.charAt(0)];
			if (!n) return {
				type: r,
				data: {
					base64: !0,
					data: t.substr(1)
				}
			};
			var o = n.decode(t.substr(1));
			return "blob" === e && y && (o = new y([o])), {
				type: r,
				data: o
			}
		}, e.encodePayload = function(t, r, n) {
			"function" == typeof r && (n = r, r = null);
			var o = i(t);
			if (r && o) return y && !f ? e.encodePayloadAsBlob(t, n) : e.encodePayloadAsArrayBuffer(t, n);
			if (!t.length) return n("0:");
			g(t, (function(t, n) {
				e.encodePacket(t, !!o && r, !1, (function(t) {
					n(null, function(t) {
						return t.length + ":" + t
					}(t))
				}))
			}), (function(t, e) {
				return n(e.join(""))
			}))
		}, e.decodePayload = function(t, r, n) {
			if ("string" != typeof t) return e.decodePayloadAsBinary(t, r, n);
			var o;
			if ("function" == typeof r && (n = r, r = null), "" === t) return n(d, 0, 1);
			for (var i, s, a = "", c = 0, h = t.length; c < h; c++) {
				var u = t.charAt(c);
				if (":" === u) {
					if ("" === a || a != (i = Number(a))) return n(d, 0, 1);
					if (a != (s = t.substr(c + 1, i)).length) return n(d, 0, 1);
					if (s.length) {
						if (o = e.decodePacket(s, r, !1), d.type === o.type && d.data === o.data) return n(d, 0, 1);
						if (!1 === n(o, c + i, h)) return
					}
					c += i, a = ""
				} else a += u
			}
			return "" !== a ? n(d, 0, 1) : void 0
		}, e.encodePayloadAsArrayBuffer = function(t, r) {
			if (!t.length) return r(new ArrayBuffer(0));
			g(t, (function(t, r) {
				e.encodePacket(t, !0, !0, (function(t) {
					return r(null, t)
				}))
			}), (function(t, e) {
				var n = e.reduce((function(t, e) {
						var r;
						return t + (r = "string" == typeof e ? e.length : e.byteLength).toString().length + r + 2
					}), 0),
					o = new Uint8Array(n),
					i = 0;
				return e.forEach((function(t) {
					var e = "string" == typeof t,
						r = t;
					if (e) {
						for (var n = new Uint8Array(t.length), s = 0; s < t.length; s++) n[s] = t.charCodeAt(s);
						r = n.buffer
					}
					o[i++] = e ? 0 : 1;
					var a = r.byteLength.toString();
					for (s = 0; s < a.length; s++) o[i++] = parseInt(a[s]);
					o[i++] = 255;
					for (n = new Uint8Array(r), s = 0; s < n.length; s++) o[i++] = n[s]
				})), r(o.buffer)
			}))
		}, e.encodePayloadAsBlob = function(t, r) {
			g(t, (function(t, r) {
				e.encodePacket(t, !0, !0, (function(t) {
					var e = new Uint8Array(1);
					if (e[0] = 1, "string" == typeof t) {
						for (var n = new Uint8Array(t.length), o = 0; o < t.length; o++) n[o] = t.charCodeAt(o);
						t = n.buffer, e[0] = 0
					}
					var i = (t instanceof ArrayBuffer ? t.byteLength : t.size).toString(),
						s = new Uint8Array(i.length + 1);
					for (o = 0; o < i.length; o++) s[o] = parseInt(i[o]);
					if (s[i.length] = 255, y) {
						var a = new y([e.buffer, s.buffer, t]);
						r(null, a)
					}
				}))
			}), (function(t, e) {
				return r(new y(e))
			}))
		}, e.decodePayloadAsBinary = function(t, r, n) {
			"function" == typeof r && (n = r, r = null);
			for (var o = t, i = []; o.byteLength > 0;) {
				for (var a = new Uint8Array(o), c = 0 === a[0], h = "", u = 1; 255 !== a[u]; u++) {
					if (h.length > 310) return n(d, 0, 1);
					h += a[u]
				}
				o = s(o, 2 + h.length), h = parseInt(h);
				var f = s(o, 0, h);
				if (c) try {
					f = String.fromCharCode.apply(null, new Uint8Array(f))
				} catch (t) {
					var p = new Uint8Array(f);
					f = "";
					for (u = 0; u < p.length; u++) f += String.fromCharCode(p[u])
				}
				i.push(f), o = s(o, h)
			}
			var l = i.length;
			i.forEach((function(t, o) {
				n(e.decodePacket(t, r, !0), o, l)
			}))
		}
	}, function(t, e) {
		e.encode = function(t) {
			var e = "";
			for (var r in t) t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" +
				encodeURIComponent(t[r]));
			return e
		}, e.decode = function(t) {
			for (var e = {}, r = t.split("&"), n = 0, o = r.length; n < o; n++) {
				var i = r[n].split("=");
				e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
			}
			return e
		}
	}, function(t, e) {
		t.exports = function(t, e) {
			var r = function() {};
			r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
		}
	}, function(t, e, r) {
		var n = r(0)("socket.io-parser"),
			o = r(1),
			i = r(25),
			s = r(10),
			a = r(11);

		function c() {}
		e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT =
			0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = c,
			e.Decoder = f;
		var h = e.ERROR + '"encode error"';

		function u(t) {
			var r = "" + t.type;
			if (e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (r += t.attachments + "-"), t.nsp && "/" !== t.nsp &&
				(r += t.nsp + ","), null != t.id && (r += t.id), null != t.data) {
				var o = function(t) {
					try {
						return JSON.stringify(t)
					} catch (t) {
						return !1
					}
				}(t.data);
				if (!1 === o) return h;
				r += o
			}
			return n("encoded %j as %s", t, r), r
		}

		function f() {
			this.reconstructor = null
		}

		function p(t) {
			this.reconPack = t, this.buffers = []
		}

		function l(t) {
			return {
				type: e.ERROR,
				data: "parser error: " + t
			}
		}
		c.prototype.encode = function(t, r) {
			(n("encoding packet %j", t), e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type) ? function(t, e) {
				i.removeBlobs(t, (function(t) {
					var r = i.deconstructPacket(t),
						n = u(r.packet),
						o = r.buffers;
					o.unshift(n), e(o)
				}))
			}(t, r) : r([u(t)])
		}, o(f.prototype), f.prototype.add = function(t) {
			var r;
			if ("string" == typeof t) r = function(t) {
				var r = 0,
					o = {
						type: Number(t.charAt(0))
					};
				if (null == e.types[o.type]) return l("unknown packet type " + o.type);
				if (e.BINARY_EVENT === o.type || e.BINARY_ACK === o.type) {
					for (var i = "";
						"-" !== t.charAt(++r) && (i += t.charAt(r), r != t.length););
					if (i != Number(i) || "-" !== t.charAt(r)) throw new Error("Illegal attachments");
					o.attachments = Number(i)
				}
				if ("/" === t.charAt(r + 1))
					for (o.nsp = ""; ++r;) {
						if ("," === (c = t.charAt(r))) break;
						if (o.nsp += c, r === t.length) break
					} else o.nsp = "/";
				var a = t.charAt(r + 1);
				if ("" !== a && Number(a) == a) {
					for (o.id = ""; ++r;) {
						var c;
						if (null == (c = t.charAt(r)) || Number(c) != c) {
							--r;
							break
						}
						if (o.id += t.charAt(r), r === t.length) break
					}
					o.id = Number(o.id)
				}
				if (t.charAt(++r)) {
					var h = function(t) {
						try {
							return JSON.parse(t)
						} catch (t) {
							return !1
						}
					}(t.substr(r));
					if (!(!1 !== h && (o.type === e.ERROR || s(h)))) return l("invalid payload");
					o.data = h
				}
				return n("decoded %s as %j", t, o), o
			}(t), e.BINARY_EVENT === r.type || e.BINARY_ACK === r.type ? (this.reconstructor = new p(r), 0 === this.reconstructor
				.reconPack.attachments && this.emit("decoded", r)) : this.emit("decoded", r);
			else {
				if (!a(t) && !t.base64) throw new Error("Unknown type: " + t);
				if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
				(r = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, this.emit("decoded", r))
			}
		}, f.prototype.destroy = function() {
			this.reconstructor && this.reconstructor.finishedReconstruction()
		}, p.prototype.takeBinaryData = function(t) {
			if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
				var e = i.reconstructPacket(this.reconPack, this.buffers);
				return this.finishedReconstruction(), e
			}
			return null
		}, p.prototype.finishedReconstruction = function() {
			this.reconPack = null, this.buffers = []
		}
	}, function(t, e, r) {
		"use strict";
		(function(t) {
			/*!
			 * The buffer module from node.js, for the browser.
			 *
			 * @author   Feross Aboukhadijeh <http://feross.org>
			 * @license  MIT
			 */
			var n = r(26),
				o = r(27),
				i = r(28);

			function s() {
				return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
			}

			function a(t, e) {
				if (s() < e) throw new RangeError("Invalid typed array length");
				return c.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = c.prototype : (null === t && (t = new c(e)),
					t.length = e), t
			}

			function c(t, e, r) {
				if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(t, e, r);
				if ("number" == typeof t) {
					if ("string" == typeof e) throw new Error(
						"If encoding is specified then the first argument must be a string");
					return f(this, t)
				}
				return h(this, t, e, r)
			}

			function h(t, e, r, n) {
				if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
				return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, r, n) {
					if (e.byteLength, r < 0 || e.byteLength < r) throw new RangeError("'offset' is out of bounds");
					if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
					e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(
						e, r, n);
					c.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = c.prototype : t = p(t, e);
					return t
				}(t, e, r, n) : "string" == typeof e ? function(t, e, r) {
					"string" == typeof r && "" !== r || (r = "utf8");
					if (!c.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
					var n = 0 | d(e, r),
						o = (t = a(t, n)).write(e, r);
					o !== n && (t = t.slice(0, o));
					return t
				}(t, e, r) : function(t, e) {
					if (c.isBuffer(e)) {
						var r = 0 | l(e.length);
						return 0 === (t = a(t, r)).length || e.copy(t, 0, 0, r), t
					}
					if (e) {
						if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" !=
							typeof e.length || (n = e.length) != n ? a(t, 0) : p(t, e);
						if ("Buffer" === e.type && i(e.data)) return p(t, e.data)
					}
					var n;
					throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
				}(t, e)
			}

			function u(t) {
				if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
				if (t < 0) throw new RangeError('"size" argument must not be negative')
			}

			function f(t, e) {
				if (u(e), t = a(t, e < 0 ? 0 : 0 | l(e)), !c.TYPED_ARRAY_SUPPORT)
					for (var r = 0; r < e; ++r) t[r] = 0;
				return t
			}

			function p(t, e) {
				var r = e.length < 0 ? 0 : 0 | l(e.length);
				t = a(t, r);
				for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
				return t
			}

			function l(t) {
				if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(
					16) + " bytes");
				return 0 | t
			}

			function d(t, e) {
				if (c.isBuffer(t)) return t.length;
				if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) ||
						t instanceof ArrayBuffer)) return t.byteLength;
				"string" != typeof t && (t = "" + t);
				var r = t.length;
				if (0 === r) return 0;
				for (var n = !1;;) switch (e) {
					case "ascii":
					case "latin1":
					case "binary":
						return r;
					case "utf8":
					case "utf-8":
					case void 0:
						return q(t).length;
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return 2 * r;
					case "hex":
						return r >>> 1;
					case "base64":
						return Y(t).length;
					default:
						if (n) return q(t).length;
						e = ("" + e).toLowerCase(), n = !0
				}
			}

			function y(t, e, r) {
				var n = !1;
				if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
				if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
				if ((r >>>= 0) <= (e >>>= 0)) return "";
				for (t || (t = "utf8");;) switch (t) {
					case "hex":
						return C(this, e, r);
					case "utf8":
					case "utf-8":
						return x(this, e, r);
					case "ascii":
						return R(this, e, r);
					case "latin1":
					case "binary":
						return S(this, e, r);
					case "base64":
						return _(this, e, r);
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return P(this, e, r);
					default:
						if (n) throw new TypeError("Unknown encoding: " + t);
						t = (t + "").toLowerCase(), n = !0
				}
			}

			function g(t, e, r) {
				var n = t[e];
				t[e] = t[r], t[r] = n
			}

			function v(t, e, r, n, o) {
				if (0 === t.length) return -1;
				if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -
						2147483648), r = +r, isNaN(r) && (r = o ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
					if (o) return -1;
					r = t.length - 1
				} else if (r < 0) {
					if (!o) return -1;
					r = 0
				}
				if ("string" == typeof e && (e = c.from(e, n)), c.isBuffer(e)) return 0 === e.length ? -1 : m(t, e, r, n, o);
				if ("number" == typeof e) return e &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype
					.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) :
					m(t, [e], r, n, o);
				throw new TypeError("val must be string, number or Buffer")
			}

			function m(t, e, r, n, o) {
				var i, s = 1,
					a = t.length,
					c = e.length;
				if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n ||
						"utf-16le" === n)) {
					if (t.length < 2 || e.length < 2) return -1;
					s = 2, a /= 2, c /= 2, r /= 2
				}

				function h(t, e) {
					return 1 === s ? t[e] : t.readUInt16BE(e * s)
				}
				if (o) {
					var u = -1;
					for (i = r; i < a; i++)
						if (h(t, i) === h(e, -1 === u ? 0 : i - u)) {
							if (-1 === u && (u = i), i - u + 1 === c) return u * s
						} else -1 !== u && (i -= i - u), u = -1
				} else
					for (r + c > a && (r = a - c), i = r; i >= 0; i--) {
						for (var f = !0, p = 0; p < c; p++)
							if (h(t, i + p) !== h(e, p)) {
								f = !1;
								break
							} if (f) return i
					}
				return -1
			}

			function b(t, e, r, n) {
				r = Number(r) || 0;
				var o = t.length - r;
				n ? (n = Number(n)) > o && (n = o) : n = o;
				var i = e.length;
				if (i % 2 != 0) throw new TypeError("Invalid hex string");
				n > i / 2 && (n = i / 2);
				for (var s = 0; s < n; ++s) {
					var a = parseInt(e.substr(2 * s, 2), 16);
					if (isNaN(a)) return s;
					t[r + s] = a
				}
				return s
			}

			function w(t, e, r, n) {
				return H(q(e, t.length - r), t, r, n)
			}

			function A(t, e, r, n) {
				return H(function(t) {
					for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
					return e
				}(e), t, r, n)
			}

			function k(t, e, r, n) {
				return A(t, e, r, n)
			}

			function E(t, e, r, n) {
				return H(Y(e), t, r, n)
			}

			function B(t, e, r, n) {
				return H(function(t, e) {
					for (var r, n, o, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) r = t.charCodeAt(s), n = r >> 8, o =
						r % 256, i.push(o), i.push(n);
					return i
				}(e, t.length - r), t, r, n)
			}

			function _(t, e, r) {
				return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
			}

			function x(t, e, r) {
				r = Math.min(t.length, r);
				for (var n = [], o = e; o < r;) {
					var i, s, a, c, h = t[o],
						u = null,
						f = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
					if (o + f <= r) switch (f) {
						case 1:
							h < 128 && (u = h);
							break;
						case 2:
							128 == (192 & (i = t[o + 1])) && (c = (31 & h) << 6 | 63 & i) > 127 && (u = c);
							break;
						case 3:
							i = t[o + 1], s = t[o + 2], 128 == (192 & i) && 128 == (192 & s) && (c = (15 & h) << 12 | (63 & i) << 6 |
								63 & s) > 2047 && (c < 55296 || c > 57343) && (u = c);
							break;
						case 4:
							i = t[o + 1], s = t[o + 2], a = t[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (c =
								(15 & h) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && c < 1114112 && (u = c)
					}
					null === u ? (u = 65533, f = 1) : u > 65535 && (u -= 65536, n.push(u >>> 10 & 1023 | 55296), u = 56320 |
						1023 & u), n.push(u), o += f
				}
				return function(t) {
					var e = t.length;
					if (e <= 4096) return String.fromCharCode.apply(String, t);
					var r = "",
						n = 0;
					for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += 4096));
					return r
				}(n)
			}
			e.Buffer = c, e.SlowBuffer = function(t) {
					+t != t && (t = 0);
					return c.alloc(+t)
				}, e.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT :
				function() {
					try {
						var t = new Uint8Array(1);
						return t.__proto__ = {
							__proto__: Uint8Array.prototype,
							foo: function() {
								return 42
							}
						}, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
					} catch (t) {
						return !1
					}
				}(), e.kMaxLength = s(), c.poolSize = 8192, c._augment = function(t) {
					return t.__proto__ = c.prototype, t
				}, c.from = function(t, e, r) {
					return h(null, t, e, r)
				}, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array,
					"undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol
						.species, {
							value: null,
							configurable: !0
						})), c.alloc = function(t, e, r) {
					return function(t, e, r, n) {
						return u(e), e <= 0 ? a(t, e) : void 0 !== r ? "string" == typeof n ? a(t, e).fill(r, n) : a(t, e).fill(r) :
							a(t, e)
					}(null, t, e, r)
				}, c.allocUnsafe = function(t) {
					return f(null, t)
				}, c.allocUnsafeSlow = function(t) {
					return f(null, t)
				}, c.isBuffer = function(t) {
					return !(null == t || !t._isBuffer)
				}, c.compare = function(t, e) {
					if (!c.isBuffer(t) || !c.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
					if (t === e) return 0;
					for (var r = t.length, n = e.length, o = 0, i = Math.min(r, n); o < i; ++o)
						if (t[o] !== e[o]) {
							r = t[o], n = e[o];
							break
						} return r < n ? -1 : n < r ? 1 : 0
				}, c.isEncoding = function(t) {
					switch (String(t).toLowerCase()) {
						case "hex":
						case "utf8":
						case "utf-8":
						case "ascii":
						case "latin1":
						case "binary":
						case "base64":
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return !0;
						default:
							return !1
					}
				}, c.concat = function(t, e) {
					if (!i(t)) throw new TypeError('"list" argument must be an Array of Buffers');
					if (0 === t.length) return c.alloc(0);
					var r;
					if (void 0 === e)
						for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
					var n = c.allocUnsafe(e),
						o = 0;
					for (r = 0; r < t.length; ++r) {
						var s = t[r];
						if (!c.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
						s.copy(n, o), o += s.length
					}
					return n
				}, c.byteLength = d, c.prototype._isBuffer = !0, c.prototype.swap16 = function() {
					var t = this.length;
					if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
					for (var e = 0; e < t; e += 2) g(this, e, e + 1);
					return this
				}, c.prototype.swap32 = function() {
					var t = this.length;
					if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
					for (var e = 0; e < t; e += 4) g(this, e, e + 3), g(this, e + 1, e + 2);
					return this
				}, c.prototype.swap64 = function() {
					var t = this.length;
					if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
					for (var e = 0; e < t; e += 8) g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e +
						3, e + 4);
					return this
				}, c.prototype.toString = function() {
					var t = 0 | this.length;
					return 0 === t ? "" : 0 === arguments.length ? x(this, 0, t) : y.apply(this, arguments)
				}, c.prototype.equals = function(t) {
					if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
					return this === t || 0 === c.compare(this, t)
				}, c.prototype.inspect = function() {
					var t = "",
						r = e.INSPECT_MAX_BYTES;
					return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t +=
						" ... ")), "<Buffer " + t + ">"
				}, c.prototype.compare = function(t, e, r, n, o) {
					if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
					if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === o &&
						(o = this.length), e < 0 || r > t.length || n < 0 || o > this.length) throw new RangeError(
						"out of range index");
					if (n >= o && e >= r) return 0;
					if (n >= o) return -1;
					if (e >= r) return 1;
					if (this === t) return 0;
					for (var i = (o >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (e >>>= 0), a = Math.min(i, s), h = this.slice(n, o),
							u = t.slice(e, r), f = 0; f < a; ++f)
						if (h[f] !== u[f]) {
							i = h[f], s = u[f];
							break
						} return i < s ? -1 : s < i ? 1 : 0
				}, c.prototype.includes = function(t, e, r) {
					return -1 !== this.indexOf(t, e, r)
				}, c.prototype.indexOf = function(t, e, r) {
					return v(this, t, e, r, !0)
				}, c.prototype.lastIndexOf = function(t, e, r) {
					return v(this, t, e, r, !1)
				}, c.prototype.write = function(t, e, r, n) {
					if (void 0 === e) n = "utf8", r = this.length, e = 0;
					else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
					else {
						if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
						e |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
					}
					var o = this.length - e;
					if ((void 0 === r || r > o) && (r = o), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError(
						"Attempt to write outside buffer bounds");
					n || (n = "utf8");
					for (var i = !1;;) switch (n) {
						case "hex":
							return b(this, t, e, r);
						case "utf8":
						case "utf-8":
							return w(this, t, e, r);
						case "ascii":
							return A(this, t, e, r);
						case "latin1":
						case "binary":
							return k(this, t, e, r);
						case "base64":
							return E(this, t, e, r);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return B(this, t, e, r);
						default:
							if (i) throw new TypeError("Unknown encoding: " + n);
							n = ("" + n).toLowerCase(), i = !0
					}
				}, c.prototype.toJSON = function() {
					return {
						type: "Buffer",
						data: Array.prototype.slice.call(this._arr || this, 0)
					}
				};

			function R(t, e, r) {
				var n = "";
				r = Math.min(t.length, r);
				for (var o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);
				return n
			}

			function S(t, e, r) {
				var n = "";
				r = Math.min(t.length, r);
				for (var o = e; o < r; ++o) n += String.fromCharCode(t[o]);
				return n
			}

			function C(t, e, r) {
				var n = t.length;
				(!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
				for (var o = "", i = e; i < r; ++i) o += M(t[i]);
				return o
			}

			function P(t, e, r) {
				for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i +
					1]);
				return o
			}

			function T(t, e, r) {
				if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
				if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
			}

			function O(t, e, r, n, o, i) {
				if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
				if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
				if (r + n > t.length) throw new RangeError("Index out of range")
			}

			function N(t, e, r, n) {
				e < 0 && (e = 65535 + e + 1);
				for (var o = 0, i = Math.min(t.length - r, 2); o < i; ++o) t[r + o] = (e & 255 << 8 * (n ? o : 1 - o)) >>> 8 *
					(n ? o : 1 - o)
			}

			function L(t, e, r, n) {
				e < 0 && (e = 4294967295 + e + 1);
				for (var o = 0, i = Math.min(t.length - r, 4); o < i; ++o) t[r + o] = e >>> 8 * (n ? o : 3 - o) & 255
			}

			function U(t, e, r, n, o, i) {
				if (r + n > t.length) throw new RangeError("Index out of range");
				if (r < 0) throw new RangeError("Index out of range")
			}

			function I(t, e, r, n, i) {
				return i || U(t, 0, r, 4), o.write(t, e, r, n, 23, 4), r + 4
			}

			function j(t, e, r, n, i) {
				return i || U(t, 0, r, 8), o.write(t, e, r, n, 52, 8), r + 8
			}
			c.prototype.slice = function(t, e) {
				var r, n = this.length;
				if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) <
					0 && (e = 0) : e > n && (e = n), e < t && (e = t), c.TYPED_ARRAY_SUPPORT)(r = this.subarray(t, e)).__proto__ =
					c.prototype;
				else {
					var o = e - t;
					r = new c(o, void 0);
					for (var i = 0; i < o; ++i) r[i] = this[i + t]
				}
				return r
			}, c.prototype.readUIntLE = function(t, e, r) {
				t |= 0, e |= 0, r || T(t, e, this.length);
				for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) n += this[t + i] * o;
				return n
			}, c.prototype.readUIntBE = function(t, e, r) {
				t |= 0, e |= 0, r || T(t, e, this.length);
				for (var n = this[t + --e], o = 1; e > 0 && (o *= 256);) n += this[t + --e] * o;
				return n
			}, c.prototype.readUInt8 = function(t, e) {
				return e || T(t, 1, this.length), this[t]
			}, c.prototype.readUInt16LE = function(t, e) {
				return e || T(t, 2, this.length), this[t] | this[t + 1] << 8
			}, c.prototype.readUInt16BE = function(t, e) {
				return e || T(t, 2, this.length), this[t] << 8 | this[t + 1]
			}, c.prototype.readUInt32LE = function(t, e) {
				return e || T(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
			}, c.prototype.readUInt32BE = function(t, e) {
				return e || T(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
			}, c.prototype.readIntLE = function(t, e, r) {
				t |= 0, e |= 0, r || T(t, e, this.length);
				for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) n += this[t + i] * o;
				return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n
			}, c.prototype.readIntBE = function(t, e, r) {
				t |= 0, e |= 0, r || T(t, e, this.length);
				for (var n = e, o = 1, i = this[t + --n]; n > 0 && (o *= 256);) i += this[t + --n] * o;
				return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i
			}, c.prototype.readInt8 = function(t, e) {
				return e || T(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
			}, c.prototype.readInt16LE = function(t, e) {
				e || T(t, 2, this.length);
				var r = this[t] | this[t + 1] << 8;
				return 32768 & r ? 4294901760 | r : r
			}, c.prototype.readInt16BE = function(t, e) {
				e || T(t, 2, this.length);
				var r = this[t + 1] | this[t] << 8;
				return 32768 & r ? 4294901760 | r : r
			}, c.prototype.readInt32LE = function(t, e) {
				return e || T(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
			}, c.prototype.readInt32BE = function(t, e) {
				return e || T(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
			}, c.prototype.readFloatLE = function(t, e) {
				return e || T(t, 4, this.length), o.read(this, t, !0, 23, 4)
			}, c.prototype.readFloatBE = function(t, e) {
				return e || T(t, 4, this.length), o.read(this, t, !1, 23, 4)
			}, c.prototype.readDoubleLE = function(t, e) {
				return e || T(t, 8, this.length), o.read(this, t, !0, 52, 8)
			}, c.prototype.readDoubleBE = function(t, e) {
				return e || T(t, 8, this.length), o.read(this, t, !1, 52, 8)
			}, c.prototype.writeUIntLE = function(t, e, r, n) {
				(t = +t, e |= 0, r |= 0, n) || O(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
				var o = 1,
					i = 0;
				for (this[e] = 255 & t; ++i < r && (o *= 256);) this[e + i] = t / o & 255;
				return e + r
			}, c.prototype.writeUIntBE = function(t, e, r, n) {
				(t = +t, e |= 0, r |= 0, n) || O(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
				var o = r - 1,
					i = 1;
				for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = t / i & 255;
				return e + r
			}, c.prototype.writeUInt8 = function(t, e, r) {
				return t = +t, e |= 0, r || O(this, t, e, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] =
					255 & t, e + 1
			}, c.prototype.writeUInt16LE = function(t, e, r) {
				return t = +t, e |= 0, r || O(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e +
					1] = t >>> 8) : N(this, t, e, !0), e + 2
			}, c.prototype.writeUInt16BE = function(t, e, r) {
				return t = +t, e |= 0, r || O(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e +
					1] = 255 & t) : N(this, t, e, !1), e + 2
			}, c.prototype.writeUInt32LE = function(t, e, r) {
				return t = +t, e |= 0, r || O(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24,
					this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : L(this, t, e, !0), e + 4
			}, c.prototype.writeUInt32BE = function(t, e, r) {
				return t = +t, e |= 0, r || O(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
					this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : L(this, t, e, !1), e + 4
			}, c.prototype.writeIntLE = function(t, e, r, n) {
				if (t = +t, e |= 0, !n) {
					var o = Math.pow(2, 8 * r - 1);
					O(this, t, e, r, o - 1, -o)
				}
				var i = 0,
					s = 1,
					a = 0;
				for (this[e] = 255 & t; ++i < r && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), this[e +
					i] = (t / s >> 0) - a & 255;
				return e + r
			}, c.prototype.writeIntBE = function(t, e, r, n) {
				if (t = +t, e |= 0, !n) {
					var o = Math.pow(2, 8 * r - 1);
					O(this, t, e, r, o - 1, -o)
				}
				var i = r - 1,
					s = 1,
					a = 0;
				for (this[e + i] = 255 & t; --i >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1),
					this[e + i] = (t / s >> 0) - a & 255;
				return e + r
			}, c.prototype.writeInt8 = function(t, e, r) {
				return t = +t, e |= 0, r || O(this, t, e, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 &&
					(t = 255 + t + 1), this[e] = 255 & t, e + 1
			}, c.prototype.writeInt16LE = function(t, e, r) {
				return t = +t, e |= 0, r || O(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
					this[e + 1] = t >>> 8) : N(this, t, e, !0), e + 2
			}, c.prototype.writeInt16BE = function(t, e, r) {
				return t = +t, e |= 0, r || O(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
					this[e + 1] = 255 & t) : N(this, t, e, !1), e + 2
			}, c.prototype.writeInt32LE = function(t, e, r) {
				return t = +t, e |= 0, r || O(this, t, e, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[e] =
					255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : L(this, t, e, !0), e + 4
			}, c.prototype.writeInt32BE = function(t, e, r) {
				return t = +t, e |= 0, r || O(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), c.TYPED_ARRAY_SUPPORT ?
					(this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : L(this, t, e,
						!1), e + 4
			}, c.prototype.writeFloatLE = function(t, e, r) {
				return I(this, t, e, !0, r)
			}, c.prototype.writeFloatBE = function(t, e, r) {
				return I(this, t, e, !1, r)
			}, c.prototype.writeDoubleLE = function(t, e, r) {
				return j(this, t, e, !0, r)
			}, c.prototype.writeDoubleBE = function(t, e, r) {
				return j(this, t, e, !1, r)
			}, c.prototype.copy = function(t, e, r, n) {
				if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 &&
					n < r && (n = r), n === r) return 0;
				if (0 === t.length || 0 === this.length) return 0;
				if (e < 0) throw new RangeError("targetStart out of bounds");
				if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
				if (n < 0) throw new RangeError("sourceEnd out of bounds");
				n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
				var o, i = n - r;
				if (this === t && r < e && e < n)
					for (o = i - 1; o >= 0; --o) t[o + e] = this[o + r];
				else if (i < 1e3 || !c.TYPED_ARRAY_SUPPORT)
					for (o = 0; o < i; ++o) t[o + e] = this[o + r];
				else Uint8Array.prototype.set.call(t, this.subarray(r, r + i), e);
				return i
			}, c.prototype.fill = function(t, e, r, n) {
				if ("string" == typeof t) {
					if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length),
						1 === t.length) {
						var o = t.charCodeAt(0);
						o < 256 && (t = o)
					}
					if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
					if ("string" == typeof n && !c.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
				} else "number" == typeof t && (t &= 255);
				if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
				if (r <= e) return this;
				var i;
				if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
					for (i = e; i < r; ++i) this[i] = t;
				else {
					var s = c.isBuffer(t) ? t : q(new c(t, n).toString()),
						a = s.length;
					for (i = 0; i < r - e; ++i) this[i + e] = s[i % a]
				}
				return this
			};
			var D = /[^+\/0-9A-Za-z-_]/g;

			function M(t) {
				return t < 16 ? "0" + t.toString(16) : t.toString(16)
			}

			function q(t, e) {
				var r;
				e = e || 1 / 0;
				for (var n = t.length, o = null, i = [], s = 0; s < n; ++s) {
					if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
						if (!o) {
							if (r > 56319) {
								(e -= 3) > -1 && i.push(239, 191, 189);
								continue
							}
							if (s + 1 === n) {
								(e -= 3) > -1 && i.push(239, 191, 189);
								continue
							}
							o = r;
							continue
						}
						if (r < 56320) {
							(e -= 3) > -1 && i.push(239, 191, 189), o = r;
							continue
						}
						r = 65536 + (o - 55296 << 10 | r - 56320)
					} else o && (e -= 3) > -1 && i.push(239, 191, 189);
					if (o = null, r < 128) {
						if ((e -= 1) < 0) break;
						i.push(r)
					} else if (r < 2048) {
						if ((e -= 2) < 0) break;
						i.push(r >> 6 | 192, 63 & r | 128)
					} else if (r < 65536) {
						if ((e -= 3) < 0) break;
						i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
					} else {
						if (!(r < 1114112)) throw new Error("Invalid code point");
						if ((e -= 4) < 0) break;
						i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
					}
				}
				return i
			}

			function Y(t) {
				return n.toByteArray(function(t) {
					if ((t = function(t) {
							return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
						}(t).replace(D, "")).length < 2) return "";
					for (; t.length % 4 != 0;) t += "=";
					return t
				}(t))
			}

			function H(t, e, r, n) {
				for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o) e[o + r] = t[o];
				return o
			}
		}).call(this, r(12))
	}, function(t, e, r) {
		var n = r(31);
		t.exports = function(t) {
			var e = t.xdomain,
				r = t.xscheme,
				o = t.enablesXDR;
			try {
				if ("undefined" != typeof XMLHttpRequest && (!e || n)) return new XMLHttpRequest
			} catch (t) {}
			try {
				if ("undefined" != typeof XDomainRequest && !r && o) return new XDomainRequest
			} catch (t) {}
			if (!e) try {
				return new(self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
			} catch (t) {}
		}
	}, function(t, e, r) {
		var n = r(2),
			o = r(1);

		function i(t) {
			this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query,
				this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "",
				this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.withCredentials = t.withCredentials,
				this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers =
				t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode = t.forceNode, this.isReactNative =
				t.isReactNative, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress
		}
		t.exports = i, o(i.prototype), i.prototype.onError = function(t, e) {
			var r = new Error(t);
			return r.type = "TransportError", r.description = e, this.emit("error", r), this
		}, i.prototype.open = function() {
			return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()),
				this
		}, i.prototype.close = function() {
			return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
		}, i.prototype.send = function(t) {
			if ("open" !== this.readyState) throw new Error("Transport not open");
			this.write(t)
		}, i.prototype.onOpen = function() {
			this.readyState = "open", this.writable = !0, this.emit("open")
		}, i.prototype.onData = function(t) {
			var e = n.decodePacket(t, this.socket.binaryType);
			this.onPacket(e)
		}, i.prototype.onPacket = function(t) {
			this.emit("packet", t)
		}, i.prototype.onClose = function() {
			this.readyState = "closed", this.emit("close")
		}
	}, function(t, e) {
		var r =
			/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
			n = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path",
				"directory", "file", "query", "anchor"
			];
		t.exports = function(t) {
			var e = t,
				o = t.indexOf("["),
				i = t.indexOf("]"); - 1 != o && -1 != i && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(
				i, t.length));
			for (var s = r.exec(t || ""), a = {}, c = 14; c--;) a[n[c]] = s[c] || "";
			return -1 != o && -1 != i && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"),
				a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a
		}
	}, function(t, e) {
		var r = {}.toString;
		t.exports = Array.isArray || function(t) {
			return "[object Array]" == r.call(t)
		}
	}, function(t, e, r) {
		(function(e) {
			t.exports = function(t) {
				return r && e.isBuffer(t) || n && (t instanceof ArrayBuffer || function(t) {
					return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer
				}(t))
			};
			var r = "function" == typeof e && "function" == typeof e.isBuffer,
				n = "function" == typeof ArrayBuffer
		}).call(this, r(6).Buffer)
	}, function(t, e) {
		var r;
		r = function() {
			return this
		}();
		try {
			r = r || new Function("return this")()
		} catch (t) {
			"object" == typeof window && (r = window)
		}
		t.exports = r
	}, function(t, e, r) {
		var n = r(29),
			o = r(19),
			i = r(1),
			s = r(5),
			a = r(20),
			c = r(21),
			h = r(0)("socket.io-client:manager"),
			u = r(18),
			f = r(46),
			p = Object.prototype.hasOwnProperty;

		function l(t, e) {
			if (!(this instanceof l)) return new l(t, e);
			t && "object" == typeof t && (e = t, t = void 0), (e = e || {}).path = e.path || "/socket.io", this.nsps = {},
				this.subs = [], this.opts = e, this.reconnection(!1 !== e.reconnection), this.reconnectionAttempts(e.reconnectionAttempts ||
					1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax ||
					5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new f({
					min: this.reconnectionDelay(),
					max: this.reconnectionDelayMax(),
					jitter: this.randomizationFactor()
				}), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [],
				this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
			var r = e.parser || s;
			this.encoder = new r.Encoder, this.decoder = new r.Decoder, this.autoConnect = !1 !== e.autoConnect, this.autoConnect &&
				this.open()
		}
		t.exports = l, l.prototype.emitAll = function() {
			for (var t in this.emit.apply(this, arguments), this.nsps) p.call(this.nsps, t) && this.nsps[t].emit.apply(
				this.nsps[t], arguments)
		}, l.prototype.updateSocketIds = function() {
			for (var t in this.nsps) p.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t))
		}, l.prototype.generateId = function(t) {
			return ("/" === t ? "" : t + "#") + this.engine.id
		}, i(l.prototype), l.prototype.reconnection = function(t) {
			return arguments.length ? (this._reconnection = !!t, this) : this._reconnection
		}, l.prototype.reconnectionAttempts = function(t) {
			return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts
		}, l.prototype.reconnectionDelay = function(t) {
			return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay
		}, l.prototype.randomizationFactor = function(t) {
			return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) :
				this._randomizationFactor
		}, l.prototype.reconnectionDelayMax = function(t) {
			return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) :
				this._reconnectionDelayMax
		}, l.prototype.timeout = function(t) {
			return arguments.length ? (this._timeout = t, this) : this._timeout
		}, l.prototype.maybeReconnectOnOpen = function() {
			!this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
		}, l.prototype.open = l.prototype.connect = function(t, e) {
			if (h("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
			h("opening %s", this.uri), this.engine = n(this.uri, this.opts);
			var r = this.engine,
				o = this;
			this.readyState = "opening", this.skipReconnect = !1;
			var i = a(r, "open", (function() {
					o.onopen(), t && t()
				})),
				s = a(r, "error", (function(e) {
					if (h("connect_error"), o.cleanup(), o.readyState = "closed", o.emitAll("connect_error", e), t) {
						var r = new Error("Connection error");
						r.data = e, t(r)
					} else o.maybeReconnectOnOpen()
				}));
			if (!1 !== this._timeout) {
				var c = this._timeout;
				h("connect attempt will timeout after %d", c);
				var u = setTimeout((function() {
					h("connect attempt timed out after %d", c), i.destroy(), r.close(), r.emit("error", "timeout"), o.emitAll(
						"connect_timeout", c)
				}), c);
				this.subs.push({
					destroy: function() {
						clearTimeout(u)
					}
				})
			}
			return this.subs.push(i), this.subs.push(s), this
		}, l.prototype.onopen = function() {
			h("open"), this.cleanup(), this.readyState = "open", this.emit("open");
			var t = this.engine;
			this.subs.push(a(t, "data", c(this, "ondata"))), this.subs.push(a(t, "ping", c(this, "onping"))), this.subs.push(
				a(t, "pong", c(this, "onpong"))), this.subs.push(a(t, "error", c(this, "onerror"))), this.subs.push(a(t,
				"close", c(this, "onclose"))), this.subs.push(a(this.decoder, "decoded", c(this, "ondecoded")))
		}, l.prototype.onping = function() {
			this.lastPing = new Date, this.emitAll("ping")
		}, l.prototype.onpong = function() {
			this.emitAll("pong", new Date - this.lastPing)
		}, l.prototype.ondata = function(t) {
			this.decoder.add(t)
		}, l.prototype.ondecoded = function(t) {
			this.emit("packet", t)
		}, l.prototype.onerror = function(t) {
			h("error", t), this.emitAll("error", t)
		}, l.prototype.socket = function(t, e) {
			var r = this.nsps[t];
			if (!r) {
				r = new o(this, t, e), this.nsps[t] = r;
				var n = this;
				r.on("connecting", i), r.on("connect", (function() {
					r.id = n.generateId(t)
				})), this.autoConnect && i()
			}

			function i() {
				~u(n.connecting, r) || n.connecting.push(r)
			}
			return r
		}, l.prototype.destroy = function(t) {
			var e = u(this.connecting, t);
			~e && this.connecting.splice(e, 1), this.connecting.length || this.close()
		}, l.prototype.packet = function(t) {
			h("writing packet %j", t);
			var e = this;
			t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0,
				this.encoder.encode(t, (function(r) {
					for (var n = 0; n < r.length; n++) e.engine.write(r[n], t.options);
					e.encoding = !1, e.processPacketQueue()
				})))
		}, l.prototype.processPacketQueue = function() {
			if (this.packetBuffer.length > 0 && !this.encoding) {
				var t = this.packetBuffer.shift();
				this.packet(t)
			}
		}, l.prototype.cleanup = function() {
			h("cleanup");
			for (var t = this.subs.length, e = 0; e < t; e++) {
				this.subs.shift().destroy()
			}
			this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
		}, l.prototype.close = l.prototype.disconnect = function() {
			h("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(),
				this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
		}, l.prototype.onclose = function(t) {
			h("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection &&
				!this.skipReconnect && this.reconnect()
		}, l.prototype.reconnect = function() {
			if (this.reconnecting || this.skipReconnect) return this;
			var t = this;
			if (this.backoff.attempts >= this._reconnectionAttempts) h("reconnect failed"), this.backoff.reset(), this.emitAll(
				"reconnect_failed"), this.reconnecting = !1;
			else {
				var e = this.backoff.duration();
				h("will wait %dms before reconnect attempt", e), this.reconnecting = !0;
				var r = setTimeout((function() {
					t.skipReconnect || (h("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll(
						"reconnecting", t.backoff.attempts), t.skipReconnect || t.open((function(e) {
						e ? (h("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error",
							e.data)) : (h("reconnect success"), t.onreconnect())
					})))
				}), e);
				this.subs.push({
					destroy: function() {
						clearTimeout(r)
					}
				})
			}
		}, l.prototype.onreconnect = function() {
			var t = this.backoff.attempts;
			this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t)
		}
	}, function(t, e, r) {
		var n = r(7),
			o = r(32),
			i = r(40),
			s = r(41);
		e.polling = function(t) {
			var e = !1,
				r = !1,
				s = !1 !== t.jsonp;
			if ("undefined" != typeof location) {
				var a = "https:" === location.protocol,
					c = location.port;
				c || (c = a ? 443 : 80), e = t.hostname !== location.hostname || c !== t.port, r = t.secure !== a
			}
			if (t.xdomain = e, t.xscheme = r, "open" in new n(t) && !t.forceJSONP) return new o(t);
			if (!s) throw new Error("JSONP disabled");
			return new i(t)
		}, e.websocket = s
	}, function(t, e, r) {
		var n = r(8),
			o = r(3),
			i = r(2),
			s = r(4),
			a = r(17),
			c = r(0)("engine.io-client:polling");
		t.exports = u;
		var h = null != new(r(7))({
			xdomain: !1
		}).responseType;

		function u(t) {
			var e = t && t.forceBase64;
			h && !e || (this.supportsBinary = !1), n.call(this, t)
		}
		s(u, n), u.prototype.name = "polling", u.prototype.doOpen = function() {
			this.poll()
		}, u.prototype.pause = function(t) {
			var e = this;

			function r() {
				c("paused"), e.readyState = "paused", t()
			}
			if (this.readyState = "pausing", this.polling || !this.writable) {
				var n = 0;
				this.polling && (c("we are currently polling - waiting to pause"), n++, this.once("pollComplete", (function() {
					c("pre-pause polling complete"), --n || r()
				}))), this.writable || (c("we are currently writing - waiting to pause"), n++, this.once("drain", (function() {
					c("pre-pause writing complete"), --n || r()
				})))
			} else r()
		}, u.prototype.poll = function() {
			c("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
		}, u.prototype.onData = function(t) {
			var e = this;
			c("polling got data %s", t);
			i.decodePayload(t, this.socket.binaryType, (function(t, r, n) {
				if ("opening" === e.readyState && e.onOpen(), "close" === t.type) return e.onClose(), !1;
				e.onPacket(t)
			})), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ?
				this.poll() : c('ignoring poll - transport state "%s"', this.readyState))
		}, u.prototype.doClose = function() {
			var t = this;

			function e() {
				c("writing close packet"), t.write([{
					type: "close"
				}])
			}
			"open" === this.readyState ? (c("transport open - closing"), e()) : (c("transport not open - deferring close"),
				this.once("open", e))
		}, u.prototype.write = function(t) {
			var e = this;
			this.writable = !1;
			var r = function() {
				e.writable = !0, e.emit("drain")
			};
			i.encodePayload(t, this.supportsBinary, (function(t) {
				e.doWrite(t, r)
			}))
		}, u.prototype.uri = function() {
			var t = this.query || {},
				e = this.secure ? "https" : "http",
				r = "";
			return !1 !== this.timestampRequests && (t[this.timestampParam] = a()), this.supportsBinary || t.sid || (t.b64 =
				1), t = o.encode(t), this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !==
				Number(this.port)) && (r = ":" + this.port), t.length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(
				":") ? "[" + this.hostname + "]" : this.hostname) + r + this.path + t
		}
	}, function(t, e, r) {
		(function(e) {
			var n = r(34),
				o = Object.prototype.toString,
				i = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === o.call(Blob),
				s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o.call(File);
			t.exports = function t(r) {
				if (!r || "object" != typeof r) return !1;
				if (n(r)) {
					for (var o = 0, a = r.length; o < a; o++)
						if (t(r[o])) return !0;
					return !1
				}
				if ("function" == typeof e && e.isBuffer && e.isBuffer(r) || "function" == typeof ArrayBuffer && r instanceof ArrayBuffer ||
					i && r instanceof Blob || s && r instanceof File) return !0;
				if (r.toJSON && "function" == typeof r.toJSON && 1 === arguments.length) return t(r.toJSON(), !0);
				for (var c in r)
					if (Object.prototype.hasOwnProperty.call(r, c) && t(r[c])) return !0;
				return !1
			}
		}).call(this, r(6).Buffer)
	}, function(t, e, r) {
		"use strict";
		var n, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
			i = {},
			s = 0,
			a = 0;

		function c(t) {
			var e = "";
			do {
				e = o[t % 64] + e, t = Math.floor(t / 64)
			} while (t > 0);
			return e
		}

		function h() {
			var t = c(+new Date);
			return t !== n ? (s = 0, n = t) : t + "." + c(s++)
		}
		for (; a < 64; a++) i[o[a]] = a;
		h.encode = c, h.decode = function(t) {
			var e = 0;
			for (a = 0; a < t.length; a++) e = 64 * e + i[t.charAt(a)];
			return e
		}, t.exports = h
	}, function(t, e) {
		var r = [].indexOf;
		t.exports = function(t, e) {
			if (r) return t.indexOf(e);
			for (var n = 0; n < t.length; ++n)
				if (t[n] === e) return n;
			return -1
		}
	}, function(t, e, r) {
		var n = r(5),
			o = r(1),
			i = r(45),
			s = r(20),
			a = r(21),
			c = r(0)("socket.io-client:socket"),
			h = r(3),
			u = r(16);
		t.exports = l;
		var f = {
				connect: 1,
				connect_error: 1,
				connect_timeout: 1,
				connecting: 1,
				disconnect: 1,
				error: 1,
				reconnect: 1,
				reconnect_attempt: 1,
				reconnect_failed: 1,
				reconnect_error: 1,
				reconnecting: 1,
				ping: 1,
				pong: 1
			},
			p = o.prototype.emit;

		function l(t, e, r) {
			this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [],
				this.connected = !1, this.disconnected = !0, this.flags = {}, r && r.query && (this.query = r.query), this.io.autoConnect &&
				this.open()
		}
		o(l.prototype), l.prototype.subEvents = function() {
			if (!this.subs) {
				var t = this.io;
				this.subs = [s(t, "open", a(this, "onopen")), s(t, "packet", a(this, "onpacket")), s(t, "close", a(this,
					"onclose"))]
			}
		}, l.prototype.open = l.prototype.connect = function() {
			return this.connected || (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(),
				this.emit("connecting")), this
		}, l.prototype.send = function() {
			var t = i(arguments);
			return t.unshift("message"), this.emit.apply(this, t), this
		}, l.prototype.emit = function(t) {
			if (f.hasOwnProperty(t)) return p.apply(this, arguments), this;
			var e = i(arguments),
				r = {
					type: (void 0 !== this.flags.binary ? this.flags.binary : u(e)) ? n.BINARY_EVENT : n.EVENT,
					data: e,
					options: {}
				};
			return r.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] &&
				(c("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), r.id = this.ids++), this.connected ?
				this.packet(r) : this.sendBuffer.push(r), this.flags = {}, this
		}, l.prototype.packet = function(t) {
			t.nsp = this.nsp, this.io.packet(t)
		}, l.prototype.onopen = function() {
			if (c("transport is open - connecting"), "/" !== this.nsp)
				if (this.query) {
					var t = "object" == typeof this.query ? h.encode(this.query) : this.query;
					c("sending connect packet with query %s", t), this.packet({
						type: n.CONNECT,
						query: t
					})
				} else this.packet({
					type: n.CONNECT
				})
		}, l.prototype.onclose = function(t) {
			c("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t)
		}, l.prototype.onpacket = function(t) {
			var e = t.nsp === this.nsp,
				r = t.type === n.ERROR && "/" === t.nsp;
			if (e || r) switch (t.type) {
				case n.CONNECT:
					this.onconnect();
					break;
				case n.EVENT:
				case n.BINARY_EVENT:
					this.onevent(t);
					break;
				case n.ACK:
				case n.BINARY_ACK:
					this.onack(t);
					break;
				case n.DISCONNECT:
					this.ondisconnect();
					break;
				case n.ERROR:
					this.emit("error", t.data)
			}
		}, l.prototype.onevent = function(t) {
			var e = t.data || [];
			c("emitting event %j", e), null != t.id && (c("attaching ack callback to event"), e.push(this.ack(t.id))),
				this.connected ? p.apply(this, e) : this.receiveBuffer.push(e)
		}, l.prototype.ack = function(t) {
			var e = this,
				r = !1;
			return function() {
				if (!r) {
					r = !0;
					var o = i(arguments);
					c("sending ack %j", o), e.packet({
						type: u(o) ? n.BINARY_ACK : n.ACK,
						id: t,
						data: o
					})
				}
			}
		}, l.prototype.onack = function(t) {
			var e = this.acks[t.id];
			"function" == typeof e ? (c("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t
				.id]) : c("bad ack %s", t.id)
		}, l.prototype.onconnect = function() {
			this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
		}, l.prototype.emitBuffered = function() {
			var t;
			for (t = 0; t < this.receiveBuffer.length; t++) p.apply(this, this.receiveBuffer[t]);
			for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) this.packet(this.sendBuffer[t]);
			this.sendBuffer = []
		}, l.prototype.ondisconnect = function() {
			c("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
		}, l.prototype.destroy = function() {
			if (this.subs) {
				for (var t = 0; t < this.subs.length; t++) this.subs[t].destroy();
				this.subs = null
			}
			this.io.destroy(this)
		}, l.prototype.close = l.prototype.disconnect = function() {
			return this.connected && (c("performing disconnect (%s)", this.nsp), this.packet({
				type: n.DISCONNECT
			})), this.destroy(), this.connected && this.onclose("io client disconnect"), this
		}, l.prototype.compress = function(t) {
			return this.flags.compress = t, this
		}, l.prototype.binary = function(t) {
			return this.flags.binary = t, this
		}
	}, function(t, e) {
		t.exports = function(t, e, r) {
			return t.on(e, r), {
				destroy: function() {
					t.removeListener(e, r)
				}
			}
		}
	}, function(t, e) {
		var r = [].slice;
		t.exports = function(t, e) {
			if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");
			var n = r.call(arguments, 2);
			return function() {
				return e.apply(t, n.concat(r.call(arguments)))
			}
		}
	}, function(t, e, r) {
		t.exports = r(23)
	}, function(t, e, r) {
		var n = r(24),
			o = r(5),
			i = r(13),
			s = r(0)("socket.io-client");
		t.exports = e = c;
		var a = e.managers = {};

		function c(t, e) {
			"object" == typeof t && (e = t, t = void 0), e = e || {};
			var r, o = n(t),
				c = o.source,
				h = o.id,
				u = o.path,
				f = a[h] && u in a[h].nsps;
			return e.forceNew || e["force new connection"] || !1 === e.multiplex || f ? (s("ignoring socket cache for %s",
					c), r = i(c, e)) : (a[h] || (s("new io instance for %s", c), a[h] = i(c, e)), r = a[h]), o.query && !e.query &&
				(e.query = o.query), r.socket(o.path, e)
		}
		e.protocol = o.protocol, e.connect = c, e.Manager = r(13), e.Socket = r(19)
	}, function(t, e, r) {
		var n = r(9),
			o = r(0)("socket.io-client:url");
		t.exports = function(t, e) {
			var r = t;
			e = e || "undefined" != typeof location && location, null == t && (t = e.protocol + "//" + e.host);
			"string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t),
				/^(https?|wss?):\/\//.test(t) || (o("protocol-less url %s", t), t = void 0 !== e ? e.protocol + "//" + t :
					"https://" + t), o("parse %s", t), r = n(t));
			r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443"));
			r.path = r.path || "/";
			var i = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
			return r.id = r.protocol + "://" + i + ":" + r.port, r.href = r.protocol + "://" + i + (e && e.port === r.port ?
				"" : ":" + r.port), r
		}
	}, function(t, e, r) {
		var n = r(10),
			o = r(11),
			i = Object.prototype.toString,
			s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob),
			a = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === i.call(File);
		e.deconstructPacket = function(t) {
			var e = [],
				r = t.data,
				i = t;
			return i.data = function t(e, r) {
				if (!e) return e;
				if (o(e)) {
					var i = {
						_placeholder: !0,
						num: r.length
					};
					return r.push(e), i
				}
				if (n(e)) {
					for (var s = new Array(e.length), a = 0; a < e.length; a++) s[a] = t(e[a], r);
					return s
				}
				if ("object" == typeof e && !(e instanceof Date)) {
					s = {};
					for (var c in e) s[c] = t(e[c], r);
					return s
				}
				return e
			}(r, e), i.attachments = e.length, {
				packet: i,
				buffers: e
			}
		}, e.reconstructPacket = function(t, e) {
			return t.data = function t(e, r) {
				if (!e) return e;
				if (e && e._placeholder) return r[e.num];
				if (n(e))
					for (var o = 0; o < e.length; o++) e[o] = t(e[o], r);
				else if ("object" == typeof e)
					for (var i in e) e[i] = t(e[i], r);
				return e
			}(t.data, e), t.attachments = void 0, t
		}, e.removeBlobs = function(t, e) {
			var r = 0,
				i = t;
			! function t(c, h, u) {
				if (!c) return c;
				if (s && c instanceof Blob || a && c instanceof File) {
					r++;
					var f = new FileReader;
					f.onload = function() {
						u ? u[h] = this.result : i = this.result, --r || e(i)
					}, f.readAsArrayBuffer(c)
				} else if (n(c))
					for (var p = 0; p < c.length; p++) t(c[p], p, c);
				else if ("object" == typeof c && !o(c))
					for (var l in c) t(c[l], l, c)
			}(i), r || e(i)
		}
	}, function(t, e, r) {
		"use strict";
		e.byteLength = function(t) {
			var e = h(t),
				r = e[0],
				n = e[1];
			return 3 * (r + n) / 4 - n
		}, e.toByteArray = function(t) {
			var e, r, n = h(t),
				s = n[0],
				a = n[1],
				c = new i(function(t, e, r) {
					return 3 * (e + r) / 4 - r
				}(0, s, a)),
				u = 0,
				f = a > 0 ? s - 4 : s;
			for (r = 0; r < f; r += 4) e = o[t.charCodeAt(r)] << 18 | o[t.charCodeAt(r + 1)] << 12 | o[t.charCodeAt(r + 2)] <<
				6 | o[t.charCodeAt(r + 3)], c[u++] = e >> 16 & 255, c[u++] = e >> 8 & 255, c[u++] = 255 & e;
			2 === a && (e = o[t.charCodeAt(r)] << 2 | o[t.charCodeAt(r + 1)] >> 4, c[u++] = 255 & e);
			1 === a && (e = o[t.charCodeAt(r)] << 10 | o[t.charCodeAt(r + 1)] << 4 | o[t.charCodeAt(r + 2)] >> 2, c[u++] =
				e >> 8 & 255, c[u++] = 255 & e);
			return c
		}, e.fromByteArray = function(t) {
			for (var e, r = t.length, o = r % 3, i = [], s = 0, a = r - o; s < a; s += 16383) i.push(u(t, s, s + 16383 > a ?
				a : s + 16383));
			1 === o ? (e = t[r - 1], i.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === o && (e = (t[r - 2] << 8) + t[r -
				1], i.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "="));
			return i.join("")
		};
		for (var n = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s =
				"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = s.length; a < c; ++a) n[a] = s[
			a], o[s.charCodeAt(a)] = a;

		function h(t) {
			var e = t.length;
			if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
			var r = t.indexOf("=");
			return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4]
		}

		function u(t, e, r) {
			for (var o, i, s = [], a = e; a < r; a += 3) o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a +
				2]), s.push(n[(i = o) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);
			return s.join("")
		}
		o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
	}, function(t, e) {
		e.read = function(t, e, r, n, o) {
			var i, s, a = 8 * o - n - 1,
				c = (1 << a) - 1,
				h = c >> 1,
				u = -7,
				f = r ? o - 1 : 0,
				p = r ? -1 : 1,
				l = t[e + f];
			for (f += p, i = l & (1 << -u) - 1, l >>= -u, u += a; u > 0; i = 256 * i + t[e + f], f += p, u -= 8);
			for (s = i & (1 << -u) - 1, i >>= -u, u += n; u > 0; s = 256 * s + t[e + f], f += p, u -= 8);
			if (0 === i) i = 1 - h;
			else {
				if (i === c) return s ? NaN : 1 / 0 * (l ? -1 : 1);
				s += Math.pow(2, n), i -= h
			}
			return (l ? -1 : 1) * s * Math.pow(2, i - n)
		}, e.write = function(t, e, r, n, o, i) {
			var s, a, c, h = 8 * i - o - 1,
				u = (1 << h) - 1,
				f = u >> 1,
				p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
				l = n ? 0 : i - 1,
				d = n ? 1 : -1,
				y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
			for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = u) : (s = Math.floor(Math.log(e) /
						Math.LN2), e * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), (e += s + f >= 1 ? p / c : p * Math.pow(2, 1 - f)) *
					c >= 2 && (s++, c /= 2), s + f >= u ? (a = 0, s = u) : s + f >= 1 ? (a = (e * c - 1) * Math.pow(2, o), s +=
						f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, o), s = 0)); o >= 8; t[r + l] = 255 & a, l += d, a /= 256, o -=
				8);
			for (s = s << o | a, h += o; h > 0; t[r + l] = 255 & s, l += d, s /= 256, h -= 8);
			t[r + l - d] |= 128 * y
		}
	}, function(t, e) {
		var r = {}.toString;
		t.exports = Array.isArray || function(t) {
			return "[object Array]" == r.call(t)
		}
	}, function(t, e, r) {
		t.exports = r(30), t.exports.parser = r(2)
	}, function(t, e, r) {
		var n = r(14),
			o = r(1),
			i = r(0)("engine.io-client:socket"),
			s = r(18),
			a = r(2),
			c = r(9),
			h = r(3);

		function u(t, e) {
			if (!(this instanceof u)) return new u(t, e);
			e = e || {}, t && "object" == typeof t && (e = t, t = null), t ? (t = c(t), e.hostname = t.host, e.secure =
					"https" === t.protocol || "wss" === t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host &&
				(e.hostname = c(e.host).host), this.secure = null != e.secure ? e.secure : "undefined" != typeof location &&
				"https:" === location.protocol, e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.agent = e
				.agent || !1, this.hostname = e.hostname || ("undefined" != typeof location ? location.hostname : "localhost"),
				this.port = e.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 :
					80), this.query = e.query || {}, "string" == typeof this.query && (this.query = h.decode(this.query)), this.upgrade = !
				1 !== e.upgrade, this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!e.forceJSONP,
				this.jsonp = !1 !== e.jsonp, this.forceBase64 = !!e.forceBase64, this.enablesXDR = !!e.enablesXDR, this.withCredentials = !
				1 !== e.withCredentials, this.timestampParam = e.timestampParam || "t", this.timestampRequests = e.timestampRequests,
				this.transports = e.transports || ["polling", "websocket"], this.transportOptions = e.transportOptions || {},
				this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = e.policyPort || 843,
				this.rememberUpgrade = e.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = e.onlyBinaryUpgrades,
				this.perMessageDeflate = !1 !== e.perMessageDeflate && (e.perMessageDeflate || {}), !0 === this.perMessageDeflate &&
				(this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate
					.threshold = 1024), this.pfx = e.pfx || null, this.key = e.key || null, this.passphrase = e.passphrase ||
				null, this.cert = e.cert || null, this.ca = e.ca || null, this.ciphers = e.ciphers || null, this.rejectUnauthorized =
				void 0 === e.rejectUnauthorized || e.rejectUnauthorized, this.forceNode = !!e.forceNode, this.isReactNative =
				"undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product
				.toLowerCase(), ("undefined" == typeof self || this.isReactNative) && (e.extraHeaders && Object.keys(e.extraHeaders)
					.length > 0 && (this.extraHeaders = e.extraHeaders), e.localAddress && (this.localAddress = e.localAddress)),
				this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer =
				null, this.pingTimeoutTimer = null, this.open()
		}
		t.exports = u, u.priorWebsocketSuccess = !1, o(u.prototype), u.protocol = a.protocol, u.Socket = u, u.Transport =
			r(8), u.transports = r(14), u.parser = r(2), u.prototype.createTransport = function(t) {
				i('creating transport "%s"', t);
				var e = function(t) {
					var e = {};
					for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
					return e
				}(this.query);
				e.EIO = a.protocol, e.transport = t;
				var r = this.transportOptions[t] || {};
				return this.id && (e.sid = this.id), new n[t]({
					query: e,
					socket: this,
					agent: r.agent || this.agent,
					hostname: r.hostname || this.hostname,
					port: r.port || this.port,
					secure: r.secure || this.secure,
					path: r.path || this.path,
					forceJSONP: r.forceJSONP || this.forceJSONP,
					jsonp: r.jsonp || this.jsonp,
					forceBase64: r.forceBase64 || this.forceBase64,
					enablesXDR: r.enablesXDR || this.enablesXDR,
					withCredentials: r.withCredentials || this.withCredentials,
					timestampRequests: r.timestampRequests || this.timestampRequests,
					timestampParam: r.timestampParam || this.timestampParam,
					policyPort: r.policyPort || this.policyPort,
					pfx: r.pfx || this.pfx,
					key: r.key || this.key,
					passphrase: r.passphrase || this.passphrase,
					cert: r.cert || this.cert,
					ca: r.ca || this.ca,
					ciphers: r.ciphers || this.ciphers,
					rejectUnauthorized: r.rejectUnauthorized || this.rejectUnauthorized,
					perMessageDeflate: r.perMessageDeflate || this.perMessageDeflate,
					extraHeaders: r.extraHeaders || this.extraHeaders,
					forceNode: r.forceNode || this.forceNode,
					localAddress: r.localAddress || this.localAddress,
					requestTimeout: r.requestTimeout || this.requestTimeout,
					protocols: r.protocols || void 0,
					isReactNative: this.isReactNative
				})
			}, u.prototype.open = function() {
				var t;
				if (this.rememberUpgrade && u.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t =
					"websocket";
				else {
					if (0 === this.transports.length) {
						var e = this;
						return void setTimeout((function() {
							e.emit("error", "No transports available")
						}), 0)
					}
					t = this.transports[0]
				}
				this.readyState = "opening";
				try {
					t = this.createTransport(t)
				} catch (t) {
					return this.transports.shift(), void this.open()
				}
				t.open(), this.setTransport(t)
			}, u.prototype.setTransport = function(t) {
				i("setting transport %s", t.name);
				var e = this;
				this.transport && (i("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()),
					this.transport = t, t.on("drain", (function() {
						e.onDrain()
					})).on("packet", (function(t) {
						e.onPacket(t)
					})).on("error", (function(t) {
						e.onError(t)
					})).on("close", (function() {
						e.onClose("transport close")
					}))
			}, u.prototype.probe = function(t) {
				i('probing transport "%s"', t);
				var e = this.createTransport(t, {
						probe: 1
					}),
					r = !1,
					n = this;

				function o() {
					if (n.onlyBinaryUpgrades) {
						var o = !this.supportsBinary && n.transport.supportsBinary;
						r = r || o
					}
					r || (i('probe transport "%s" opened', t), e.send([{
						type: "ping",
						data: "probe"
					}]), e.once("packet", (function(o) {
						if (!r)
							if ("pong" === o.type && "probe" === o.data) {
								if (i('probe transport "%s" pong', t), n.upgrading = !0, n.emit("upgrading", e), !e) return;
								u.priorWebsocketSuccess = "websocket" === e.name, i('pausing current transport "%s"', n.transport.name),
									n.transport.pause((function() {
										r || "closed" !== n.readyState && (i("changing transport and sending upgrade packet"), p(), n.setTransport(
											e), e.send([{
											type: "upgrade"
										}]), n.emit("upgrade", e), e = null, n.upgrading = !1, n.flush())
									}))
							} else {
								i('probe transport "%s" failed', t);
								var s = new Error("probe error");
								s.transport = e.name, n.emit("upgradeError", s)
							}
					})))
				}

				function s() {
					r || (r = !0, p(), e.close(), e = null)
				}

				function a(r) {
					var o = new Error("probe error: " + r);
					o.transport = e.name, s(), i('probe transport "%s" failed because of error: %s', t, r), n.emit("upgradeError",
						o)
				}

				function c() {
					a("transport closed")
				}

				function h() {
					a("socket closed")
				}

				function f(t) {
					e && t.name !== e.name && (i('"%s" works - aborting "%s"', t.name, e.name), s())
				}

				function p() {
					e.removeListener("open", o), e.removeListener("error", a), e.removeListener("close", c), n.removeListener(
						"close", h), n.removeListener("upgrading", f)
				}
				u.priorWebsocketSuccess = !1, e.once("open", o), e.once("error", a), e.once("close", c), this.once("close", h),
					this.once("upgrading", f), e.open()
			}, u.prototype.onOpen = function() {
				if (i("socket open"), this.readyState = "open", u.priorWebsocketSuccess = "websocket" === this.transport.name,
					this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
					i("starting upgrade probes");
					for (var t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t])
				}
			}, u.prototype.onPacket = function(t) {
				if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (i(
					'socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {
					case "open":
						this.onHandshake(JSON.parse(t.data));
						break;
					case "pong":
						this.setPing(), this.emit("pong");
						break;
					case "error":
						var e = new Error("server error");
						e.code = t.data, this.onError(e);
						break;
					case "message":
						this.emit("data", t.data), this.emit("message", t.data)
				} else i('packet received with socket readyState "%s"', this.readyState)
			}, u.prototype.onHandshake = function(t) {
				this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(
						t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !==
					this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat",
						this.onHeartbeat))
			}, u.prototype.onHeartbeat = function(t) {
				clearTimeout(this.pingTimeoutTimer);
				var e = this;
				e.pingTimeoutTimer = setTimeout((function() {
					"closed" !== e.readyState && e.onClose("ping timeout")
				}), t || e.pingInterval + e.pingTimeout)
			}, u.prototype.setPing = function() {
				var t = this;
				clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout((function() {
					i("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout)
				}), t.pingInterval)
			}, u.prototype.ping = function() {
				var t = this;
				this.sendPacket("ping", (function() {
					t.emit("ping")
				}))
			}, u.prototype.onDrain = function() {
				this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit(
					"drain") : this.flush()
			}, u.prototype.flush = function() {
				"closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (i(
						"flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen =
					this.writeBuffer.length, this.emit("flush"))
			}, u.prototype.write = u.prototype.send = function(t, e, r) {
				return this.sendPacket("message", t, e, r), this
			}, u.prototype.sendPacket = function(t, e, r, n) {
				if ("function" == typeof e && (n = e, e = void 0), "function" == typeof r && (n = r, r = null), "closing" !==
					this.readyState && "closed" !== this.readyState) {
					(r = r || {}).compress = !1 !== r.compress;
					var o = {
						type: t,
						data: e,
						options: r
					};
					this.emit("packetCreate", o), this.writeBuffer.push(o), n && this.once("flush", n), this.flush()
				}
			}, u.prototype.close = function() {
				if ("opening" === this.readyState || "open" === this.readyState) {
					this.readyState = "closing";
					var t = this;
					this.writeBuffer.length ? this.once("drain", (function() {
						this.upgrading ? n() : e()
					})) : this.upgrading ? n() : e()
				}

				function e() {
					t.onClose("forced close"), i("socket closing - telling transport to close"), t.transport.close()
				}

				function r() {
					t.removeListener("upgrade", r), t.removeListener("upgradeError", r), e()
				}

				function n() {
					t.once("upgrade", r), t.once("upgradeError", r)
				}
				return this
			}, u.prototype.onError = function(t) {
				i("socket error %j", t), u.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error",
					t)
			}, u.prototype.onClose = function(t, e) {
				if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
					i('socket close with reason: "%s"', t);
					clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners(
							"close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id =
						null, this.emit("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0
				}
			}, u.prototype.filterUpgrades = function(t) {
				for (var e = [], r = 0, n = t.length; r < n; r++) ~s(this.transports, t[r]) && e.push(t[r]);
				return e
			}
	}, function(t, e) {
		try {
			t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
		} catch (e) {
			t.exports = !1
		}
	}, function(t, e, r) {
		var n = r(7),
			o = r(15),
			i = r(1),
			s = r(4),
			a = r(0)("engine.io-client:polling-xhr");

		function c() {}

		function h(t) {
			if (o.call(this, t), this.requestTimeout = t.requestTimeout, this.extraHeaders = t.extraHeaders, "undefined" !=
				typeof location) {
				var e = "https:" === location.protocol,
					r = location.port;
				r || (r = e ? 443 : 80), this.xd = "undefined" != typeof location && t.hostname !== location.hostname || r !==
					t.port, this.xs = t.secure !== e
			}
		}

		function u(t) {
			this.method = t.method || "GET", this.uri = t.uri, this.xd = !!t.xd, this.xs = !!t.xs, this.async = !1 !== t.async,
				this.data = void 0 !== t.data ? t.data : null, this.agent = t.agent, this.isBinary = t.isBinary, this.supportsBinary =
				t.supportsBinary, this.enablesXDR = t.enablesXDR, this.withCredentials = t.withCredentials, this.requestTimeout =
				t.requestTimeout, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this
				.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders,
				this.create()
		}
		if (t.exports = h, t.exports.Request = u, s(h, o), h.prototype.supportsBinary = !0, h.prototype.request =
			function(t) {
				return (t = t || {}).uri = this.uri(), t.xd = this.xd, t.xs = this.xs, t.agent = this.agent || !1, t.supportsBinary =
					this.supportsBinary, t.enablesXDR = this.enablesXDR, t.withCredentials = this.withCredentials, t.pfx = this.pfx,
					t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers,
					t.rejectUnauthorized = this.rejectUnauthorized, t.requestTimeout = this.requestTimeout, t.extraHeaders = this
					.extraHeaders, new u(t)
			}, h.prototype.doWrite = function(t, e) {
				var r = "string" != typeof t && void 0 !== t,
					n = this.request({
						method: "POST",
						data: t,
						isBinary: r
					}),
					o = this;
				n.on("success", e), n.on("error", (function(t) {
					o.onError("xhr post error", t)
				})), this.sendXhr = n
			}, h.prototype.doPoll = function() {
				a("xhr poll");
				var t = this.request(),
					e = this;
				t.on("data", (function(t) {
					e.onData(t)
				})), t.on("error", (function(t) {
					e.onError("xhr poll error", t)
				})), this.pollXhr = t
			}, i(u.prototype), u.prototype.create = function() {
				var t = {
					agent: this.agent,
					xdomain: this.xd,
					xscheme: this.xs,
					enablesXDR: this.enablesXDR
				};
				t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers =
					this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized;
				var e = this.xhr = new n(t),
					r = this;
				try {
					a("xhr open %s: %s", this.method, this.uri), e.open(this.method, this.uri, this.async);
					try {
						if (this.extraHeaders)
							for (var o in e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0), this.extraHeaders) this.extraHeaders.hasOwnProperty(
								o) && e.setRequestHeader(o, this.extraHeaders[o])
					} catch (t) {}
					if ("POST" === this.method) try {
						this.isBinary ? e.setRequestHeader("Content-type", "application/octet-stream") : e.setRequestHeader(
							"Content-type", "text/plain;charset=UTF-8")
					} catch (t) {}
					try {
						e.setRequestHeader("Accept", "*/*")
					} catch (t) {}
					"withCredentials" in e && (e.withCredentials = this.withCredentials), this.requestTimeout && (e.timeout =
						this.requestTimeout), this.hasXDR() ? (e.onload = function() {
						r.onLoad()
					}, e.onerror = function() {
						r.onError(e.responseText)
					}) : e.onreadystatechange = function() {
						if (2 === e.readyState) try {
							var t = e.getResponseHeader("Content-Type");
							(r.supportsBinary && "application/octet-stream" === t || "application/octet-stream; charset=UTF-8" === t) &&
							(e.responseType = "arraybuffer")
						} catch (t) {}
						4 === e.readyState && (200 === e.status || 1223 === e.status ? r.onLoad() : setTimeout((function() {
							r.onError("number" == typeof e.status ? e.status : 0)
						}), 0))
					}, a("xhr data %s", this.data), e.send(this.data)
				} catch (t) {
					return void setTimeout((function() {
						r.onError(t)
					}), 0)
				}
				"undefined" != typeof document && (this.index = u.requestsCount++, u.requests[this.index] = this)
			}, u.prototype.onSuccess = function() {
				this.emit("success"), this.cleanup()
			}, u.prototype.onData = function(t) {
				this.emit("data", t), this.onSuccess()
			}, u.prototype.onError = function(t) {
				this.emit("error", t), this.cleanup(!0)
			}, u.prototype.cleanup = function(t) {
				if (void 0 !== this.xhr && null !== this.xhr) {
					if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = c : this.xhr.onreadystatechange = c, t) try {
						this.xhr.abort()
					} catch (t) {}
					"undefined" != typeof document && delete u.requests[this.index], this.xhr = null
				}
			}, u.prototype.onLoad = function() {
				var t;
				try {
					var e;
					try {
						e = this.xhr.getResponseHeader("Content-Type")
					} catch (t) {}
					t = ("application/octet-stream" === e || "application/octet-stream; charset=UTF-8" === e) && this.xhr.response ||
						this.xhr.responseText
				} catch (t) {
					this.onError(t)
				}
				null != t && this.onData(t)
			}, u.prototype.hasXDR = function() {
				return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR
			}, u.prototype.abort = function() {
				this.cleanup()
			}, u.requestsCount = 0, u.requests = {}, "undefined" != typeof document)
			if ("function" == typeof attachEvent) attachEvent("onunload", p);
			else if ("function" == typeof addEventListener) {
			var f = "onpagehide" in self ? "pagehide" : "unload";
			addEventListener(f, p, !1)
		}

		function p() {
			for (var t in u.requests) u.requests.hasOwnProperty(t) && u.requests[t].abort()
		}
	}, function(t, e) {
		t.exports = Object.keys || function(t) {
			var e = [],
				r = Object.prototype.hasOwnProperty;
			for (var n in t) r.call(t, n) && e.push(n);
			return e
		}
	}, function(t, e) {
		var r = {}.toString;
		t.exports = Array.isArray || function(t) {
			return "[object Array]" == r.call(t)
		}
	}, function(t, e) {
		t.exports = function(t, e, r) {
			var n = t.byteLength;
			if (e = e || 0, r = r || n, t.slice) return t.slice(e, r);
			if (e < 0 && (e += n), r < 0 && (r += n), r > n && (r = n), e >= n || e >= r || 0 === n) return new ArrayBuffer(
				0);
			for (var o = new Uint8Array(t), i = new Uint8Array(r - e), s = e, a = 0; s < r; s++, a++) i[a] = o[s];
			return i.buffer
		}
	}, function(t, e) {
		function r() {}
		t.exports = function(t, e, n) {
			var o = !1;
			return n = n || r, i.count = t, 0 === t ? e() : i;

			function i(t, r) {
				if (i.count <= 0) throw new Error("after called too many times");
				--i.count, t ? (o = !0, e(t), e = n) : 0 !== i.count || o || e(null, r)
			}
		}
	}, function(t, e) {
		/*! https://mths.be/utf8js v2.1.2 by @mathias */
		var r, n, o, i = String.fromCharCode;

		function s(t) {
			for (var e, r, n = [], o = 0, i = t.length; o < i;)(e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i ?
				56320 == (64512 & (r = t.charCodeAt(o++))) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e), o--) :
				n.push(e);
			return n
		}

		function a(t, e) {
			if (t >= 55296 && t <= 57343) {
				if (e) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
				return !1
			}
			return !0
		}

		function c(t, e) {
			return i(t >> e & 63 | 128)
		}

		function h(t, e) {
			if (0 == (4294967168 & t)) return i(t);
			var r = "";
			return 0 == (4294965248 & t) ? r = i(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (a(t, e) || (t = 65533), r =
				i(t >> 12 & 15 | 224), r += c(t, 6)) : 0 == (4292870144 & t) && (r = i(t >> 18 & 7 | 240), r += c(t, 12), r +=
				c(t, 6)), r += i(63 & t | 128)
		}

		function u() {
			if (o >= n) throw Error("Invalid byte index");
			var t = 255 & r[o];
			if (o++, 128 == (192 & t)) return 63 & t;
			throw Error("Invalid continuation byte")
		}

		function f(t) {
			var e, i;
			if (o > n) throw Error("Invalid byte index");
			if (o == n) return !1;
			if (e = 255 & r[o], o++, 0 == (128 & e)) return e;
			if (192 == (224 & e)) {
				if ((i = (31 & e) << 6 | u()) >= 128) return i;
				throw Error("Invalid continuation byte")
			}
			if (224 == (240 & e)) {
				if ((i = (15 & e) << 12 | u() << 6 | u()) >= 2048) return a(i, t) ? i : 65533;
				throw Error("Invalid continuation byte")
			}
			if (240 == (248 & e) && (i = (7 & e) << 18 | u() << 12 | u() << 6 | u()) >= 65536 && i <= 1114111) return i;
			throw Error("Invalid UTF-8 detected")
		}
		t.exports = {
			version: "2.1.2",
			encode: function(t, e) {
				for (var r = !1 !== (e = e || {}).strict, n = s(t), o = n.length, i = -1, a = ""; ++i < o;) a += h(n[i], r);
				return a
			},
			decode: function(t, e) {
				var a = !1 !== (e = e || {}).strict;
				r = s(t), n = r.length, o = 0;
				for (var c, h = []; !1 !== (c = f(a));) h.push(c);
				return function(t) {
					for (var e, r = t.length, n = -1, o = ""; ++n < r;)(e = t[n]) > 65535 && (o += i((e -= 65536) >>> 10 &
						1023 | 55296), e = 56320 | 1023 & e), o += i(e);
					return o
				}(h)
			}
		}
	}, function(t, e) {
		! function() {
			"use strict";
			for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = new Uint8Array(256), n = 0; n <
				t.length; n++) r[t.charCodeAt(n)] = n;
			e.encode = function(e) {
				var r, n = new Uint8Array(e),
					o = n.length,
					i = "";
				for (r = 0; r < o; r += 3) i += t[n[r] >> 2], i += t[(3 & n[r]) << 4 | n[r + 1] >> 4], i += t[(15 & n[r + 1]) <<
					2 | n[r + 2] >> 6], i += t[63 & n[r + 2]];
				return o % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 == 1 && (i = i.substring(0, i.length - 2) +
					"=="), i
			}, e.decode = function(t) {
				var e, n, o, i, s, a = .75 * t.length,
					c = t.length,
					h = 0;
				"=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
				var u = new ArrayBuffer(a),
					f = new Uint8Array(u);
				for (e = 0; e < c; e += 4) n = r[t.charCodeAt(e)], o = r[t.charCodeAt(e + 1)], i = r[t.charCodeAt(e + 2)], s =
					r[t.charCodeAt(e + 3)], f[h++] = n << 2 | o >> 4, f[h++] = (15 & o) << 4 | i >> 2, f[h++] = (3 & i) << 6 |
					63 & s;
				return u
			}
		}()
	}, function(t, e) {
		var r = void 0 !== r ? r : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ?
			MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder,
			n = function() {
				try {
					return 2 === new Blob(["hi"]).size
				} catch (t) {
					return !1
				}
			}(),
			o = n && function() {
				try {
					return 2 === new Blob([new Uint8Array([1, 2])]).size
				} catch (t) {
					return !1
				}
			}(),
			i = r && r.prototype.append && r.prototype.getBlob;

		function s(t) {
			return t.map((function(t) {
				if (t.buffer instanceof ArrayBuffer) {
					var e = t.buffer;
					if (t.byteLength !== e.byteLength) {
						var r = new Uint8Array(t.byteLength);
						r.set(new Uint8Array(e, t.byteOffset, t.byteLength)), e = r.buffer
					}
					return e
				}
				return t
			}))
		}

		function a(t, e) {
			e = e || {};
			var n = new r;
			return s(t).forEach((function(t) {
				n.append(t)
			})), e.type ? n.getBlob(e.type) : n.getBlob()
		}

		function c(t, e) {
			return new Blob(s(t), e || {})
		}
		"undefined" != typeof Blob && (a.prototype = Blob.prototype, c.prototype = Blob.prototype), t.exports = n ? o ?
			Blob : c : i ? a : void 0
	}, function(t, e, r) {
		(function(e) {
			var n = r(15),
				o = r(4);
			t.exports = u;
			var i, s = /\n/g,
				a = /\\n/g;

			function c() {}

			function h() {
				return "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : {}
			}

			function u(t) {
				if (n.call(this, t), this.query = this.query || {}, !i) {
					var e = h();
					i = e.___eio = e.___eio || []
				}
				this.index = i.length;
				var r = this;
				i.push((function(t) {
					r.onData(t)
				})), this.query.j = this.index, "function" == typeof addEventListener && addEventListener("beforeunload", (
					function() {
						r.script && (r.script.onerror = c)
					}), !1)
			}
			o(u, n), u.prototype.supportsBinary = !1, u.prototype.doClose = function() {
				this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form
					.parentNode.removeChild(this.form), this.form = null, this.iframe = null), n.prototype.doClose.call(this)
			}, u.prototype.doPoll = function() {
				var t = this,
					e = document.createElement("script");
				this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src =
					this.uri(), e.onerror = function(e) {
						t.onError("jsonp poll error", e)
					};
				var r = document.getElementsByTagName("script")[0];
				r ? r.parentNode.insertBefore(e, r) : (document.head || document.body).appendChild(e), this.script = e,
					"undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout((function() {
						var t = document.createElement("iframe");
						document.body.appendChild(t), document.body.removeChild(t)
					}), 100)
			}, u.prototype.doWrite = function(t, e) {
				var r = this;
				if (!this.form) {
					var n, o = document.createElement("form"),
						i = document.createElement("textarea"),
						c = this.iframeId = "eio_iframe_" + this.index;
					o.className = "socketio", o.style.position = "absolute", o.style.top = "-1000px", o.style.left = "-1000px",
						o.target = c, o.method = "POST", o.setAttribute("accept-charset", "utf-8"), i.name = "d", o.appendChild(i),
						document.body.appendChild(o), this.form = o, this.area = i
				}

				function h() {
					u(), e()
				}

				function u() {
					if (r.iframe) try {
						r.form.removeChild(r.iframe)
					} catch (t) {
						r.onError("jsonp polling iframe removal error", t)
					}
					try {
						var t = '<iframe src="javascript:0" name="' + r.iframeId + '">';
						n = document.createElement(t)
					} catch (t) {
						(n = document.createElement("iframe")).name = r.iframeId, n.src = "javascript:0"
					}
					n.id = r.iframeId, r.form.appendChild(n), r.iframe = n
				}
				this.form.action = this.uri(), u(), t = t.replace(a, "\\\n"), this.area.value = t.replace(s, "\\n");
				try {
					this.form.submit()
				} catch (t) {}
				this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
					"complete" === r.iframe.readyState && h()
				} : this.iframe.onload = h
			}
		}).call(this, r(12))
	}, function(t, e, r) {
		(function(e) {
			var n, o, i = r(8),
				s = r(2),
				a = r(3),
				c = r(4),
				h = r(17),
				u = r(0)("engine.io-client:websocket");
			if ("undefined" != typeof WebSocket ? n = WebSocket : "undefined" != typeof self && (n = self.WebSocket ||
					self.MozWebSocket), "undefined" == typeof window) try {
				o = r(42)
			} catch (t) {}
			var f = n || o;

			function p(t) {
				t && t.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, this.usingBrowserWebSocket =
					n && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (f = o), i.call(this, t)
			}
			t.exports = p, c(p, i), p.prototype.name = "websocket", p.prototype.supportsBinary = !0, p.prototype.doOpen =
				function() {
					if (this.check()) {
						var t = this.uri(),
							e = this.protocols,
							r = {
								agent: this.agent,
								perMessageDeflate: this.perMessageDeflate
							};
						r.pfx = this.pfx, r.key = this.key, r.passphrase = this.passphrase, r.cert = this.cert, r.ca = this.ca, r.ciphers =
							this.ciphers, r.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (r.headers = this.extraHeaders),
							this.localAddress && (r.localAddress = this.localAddress);
						try {
							this.ws = this.usingBrowserWebSocket && !this.isReactNative ? e ? new f(t, e) : new f(t) : new f(t, e, r)
						} catch (t) {
							return this.emit("error", t)
						}
						void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ?
							(this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
					}
				}, p.prototype.addEventListeners = function() {
					var t = this;
					this.ws.onopen = function() {
						t.onOpen()
					}, this.ws.onclose = function() {
						t.onClose()
					}, this.ws.onmessage = function(e) {
						t.onData(e.data)
					}, this.ws.onerror = function(e) {
						t.onError("websocket error", e)
					}
				}, p.prototype.write = function(t) {
					var r = this;
					this.writable = !1;
					for (var n = t.length, o = 0, i = n; o < i; o++) ! function(t) {
						s.encodePacket(t, r.supportsBinary, (function(o) {
							if (!r.usingBrowserWebSocket) {
								var i = {};
								if (t.options && (i.compress = t.options.compress), r.perMessageDeflate)("string" == typeof o ? e.byteLength(
									o) : o.length) < r.perMessageDeflate.threshold && (i.compress = !1)
							}
							try {
								r.usingBrowserWebSocket ? r.ws.send(o) : r.ws.send(o, i)
							} catch (t) {
								u("websocket closed before onclose event")
							}--n || a()
						}))
					}(t[o]);

					function a() {
						r.emit("flush"), setTimeout((function() {
							r.writable = !0, r.emit("drain")
						}), 0)
					}
				}, p.prototype.onClose = function() {
					i.prototype.onClose.call(this)
				}, p.prototype.doClose = function() {
					void 0 !== this.ws && this.ws.close()
				}, p.prototype.uri = function() {
					var t = this.query || {},
						e = this.secure ? "wss" : "ws",
						r = "";
					return this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) &&
						(r = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = h()), this.supportsBinary || (t.b64 =
							1), (t = a.encode(t)).length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this
							.hostname + "]" : this.hostname) + r + this.path + t
				}, p.prototype.check = function() {
					return !(!f || "__initialize" in f && this.name === p.prototype.name)
				}
		}).call(this, r(6).Buffer)
	}, function(t, e, r) {
		const n = r(43),
			o = r(44),
			i = r(0)("@hyoga/uni-socket:"),
			s = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"],
			a = uni || wx;
		class c extends n {
			constructor(t, e, r) {
				super(), this.readyState = c.CONNECTING, this.protocol = "", this._socket = null, null !== t && (Array.isArray(
					e) ? e = e.join(", ") : "object" == typeof e && null !== e && (r = e, e = void 0), h.call(this, t, e, r))
			}
			get CONNECTING() {
				return c.CONNECTING
			}
			get CLOSING() {
				return c.CLOSING
			}
			get CLOSED() {
				return c.CLOSED
			}
			get OPEN() {
				return c.OPEN
			}
			addSocketEventListeners() {
				this._socket.onOpen(() => {
					this.readyState = c.OPEN, this.onopen()
				}), this._socket.onClose(t => {
					i("onclose: ", t), this.readyState = c.CLOSED, this.onclose(t.code, t.reason)
				}), this._socket.onError(t => {
					i("onerror: ", t), this.onerror(t)
				}), this._socket.onMessage(t => {
					this.onmessage(t)
				})
			}
			send(t) {
				i("send data: ", t, this.readyState), this.readyState === c.OPEN && this._socket.send({
					data: t
				})
			}
			close(t, e) {
				i("close socket: ", t, e), this.readyState = c.CLOSING, this._socket.close({
					code: t,
					reason: e
				})
			}
		}

		function h(t, e, r) {
			Object.assign(r, {
				url: t,
				header: {
					"content-type": "application/json"
				},
				protocols: e,
				method: "GET"
			}), this._socket = function(t) {
				const e = a.connectSocket({
					complete: () => {},
					...t
				});
				if (e) return e;
				return {
					onClose: a.onSocketClose,
					onOpen: a.onSocketOpen,
					onError: a.onSocketError,
					onMessage: a.onSocketMessage,
					send: a.sendSocketMessage,
					close: a.closeSocket
				}
			}(r), this.addSocketEventListeners()
		}
		s.forEach((t, e) => {
			c[s[e]] = e
		});
		["open", "error", "close", "message"].forEach(t => {
				Object.defineProperty(c.prototype, `on${t}`, {
					get() {
						const e = this.listeners(t);
						for (var r = 0; r < e.length; r++)
							if (e[r]._listener) return e[r]._listener
					},
					set(e) {
						const r = this.listeners(t);
						for (var n = 0; n < r.length; n++) r[n]._listener && this.removeListener(t, r[n]);
						this.addEventListener(t, e)
					}
				})
			}), c.prototype.addEventListener = o.addEventListener, c.prototype.removeEventListener = o.removeEventListener,
			t.exports = c
	}, function(t, e, r) {
		"use strict";
		var n, o = "object" == typeof Reflect ? Reflect : null,
			i = o && "function" == typeof o.apply ? o.apply : function(t, e, r) {
				return Function.prototype.apply.call(t, e, r)
			};
		n = o && "function" == typeof o.ownKeys ? o.ownKeys : Object.getOwnPropertySymbols ? function(t) {
			return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
		} : function(t) {
			return Object.getOwnPropertyNames(t)
		};
		var s = Number.isNaN || function(t) {
			return t != t
		};

		function a() {
			a.init.call(this)
		}
		t.exports = a, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners =
			void 0;
		var c = 10;

		function h(t) {
			if ("function" != typeof t) throw new TypeError(
				'The "listener" argument must be of type Function. Received type ' + typeof t)
		}

		function u(t) {
			return void 0 === t._maxListeners ? a.defaultMaxListeners : t._maxListeners
		}

		function f(t, e, r, n) {
			var o, i, s, a;
			if (h(r), void 0 === (i = t._events) ? (i = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !==
					i.newListener && (t.emit("newListener", e, r.listener ? r.listener : r), i = t._events), s = i[e]), void 0 ===
				s) s = i[e] = r, ++t._eventsCount;
			else if ("function" == typeof s ? s = i[e] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r), (o = u(t)) > 0 &&
				s.length > o && !s.warned) {
				s.warned = !0;
				var c = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) +
					" listeners added. Use emitter.setMaxListeners() to increase limit");
				c.name = "MaxListenersExceededWarning", c.emitter = t, c.type = e, c.count = s.length, a = c, console &&
					console.warn && console.warn(a)
			}
			return t
		}

		function p() {
			if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ?
				this.listener.call(this.target) : this.listener.apply(this.target, arguments)
		}

		function l(t, e, r) {
			var n = {
					fired: !1,
					wrapFn: void 0,
					target: t,
					type: e,
					listener: r
				},
				o = p.bind(n);
			return o.listener = r, n.wrapFn = o, o
		}

		function d(t, e, r) {
			var n = t._events;
			if (void 0 === n) return [];
			var o = n[e];
			return void 0 === o ? [] : "function" == typeof o ? r ? [o.listener || o] : [o] : r ? function(t) {
				for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
				return e
			}(o) : g(o, o.length)
		}

		function y(t) {
			var e = this._events;
			if (void 0 !== e) {
				var r = e[t];
				if ("function" == typeof r) return 1;
				if (void 0 !== r) return r.length
			}
			return 0
		}

		function g(t, e) {
			for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
			return r
		}
		Object.defineProperty(a, "defaultMaxListeners", {
			enumerable: !0,
			get: function() {
				return c
			},
			set: function(t) {
				if ("number" != typeof t || t < 0 || s(t)) throw new RangeError(
					'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t +
					".");
				c = t
			}
		}), a.init = function() {
			void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(
				null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
		}, a.prototype.setMaxListeners = function(t) {
			if ("number" != typeof t || t < 0 || s(t)) throw new RangeError(
				'The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
			return this._maxListeners = t, this
		}, a.prototype.getMaxListeners = function() {
			return u(this)
		}, a.prototype.emit = function(t) {
			for (var e = [], r = 1; r < arguments.length; r++) e.push(arguments[r]);
			var n = "error" === t,
				o = this._events;
			if (void 0 !== o) n = n && void 0 === o.error;
			else if (!n) return !1;
			if (n) {
				var s;
				if (e.length > 0 && (s = e[0]), s instanceof Error) throw s;
				var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
				throw a.context = s, a
			}
			var c = o[t];
			if (void 0 === c) return !1;
			if ("function" == typeof c) i(c, this, e);
			else {
				var h = c.length,
					u = g(c, h);
				for (r = 0; r < h; ++r) i(u[r], this, e)
			}
			return !0
		}, a.prototype.addListener = function(t, e) {
			return f(this, t, e, !1)
		}, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(t, e) {
			return f(this, t, e, !0)
		}, a.prototype.once = function(t, e) {
			return h(e), this.on(t, l(this, t, e)), this
		}, a.prototype.prependOnceListener = function(t, e) {
			return h(e), this.prependListener(t, l(this, t, e)), this
		}, a.prototype.removeListener = function(t, e) {
			var r, n, o, i, s;
			if (h(e), void 0 === (n = this._events)) return this;
			if (void 0 === (r = n[t])) return this;
			if (r === e || r.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[t],
				n.removeListener && this.emit("removeListener", t, r.listener || e));
			else if ("function" != typeof r) {
				for (o = -1, i = r.length - 1; i >= 0; i--)
					if (r[i] === e || r[i].listener === e) {
						s = r[i].listener, o = i;
						break
					} if (o < 0) return this;
				0 === o ? r.shift() : function(t, e) {
					for (; e + 1 < t.length; e++) t[e] = t[e + 1];
					t.pop()
				}(r, o), 1 === r.length && (n[t] = r[0]), void 0 !== n.removeListener && this.emit("removeListener", t, s ||
					e)
			}
			return this
		}, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function(t) {
			var e, r, n;
			if (void 0 === (r = this._events)) return this;
			if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount =
				0) : void 0 !== r[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[t]), this;
			if (0 === arguments.length) {
				var o, i = Object.keys(r);
				for (n = 0; n < i.length; ++n) "removeListener" !== (o = i[n]) && this.removeAllListeners(o);
				return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0,
					this
			}
			if ("function" == typeof(e = r[t])) this.removeListener(t, e);
			else if (void 0 !== e)
				for (n = e.length - 1; n >= 0; n--) this.removeListener(t, e[n]);
			return this
		}, a.prototype.listeners = function(t) {
			return d(this, t, !0)
		}, a.prototype.rawListeners = function(t) {
			return d(this, t, !1)
		}, a.listenerCount = function(t, e) {
			return "function" == typeof t.listenerCount ? t.listenerCount(e) : y.call(t, e)
		}, a.prototype.listenerCount = y, a.prototype.eventNames = function() {
			return this._eventsCount > 0 ? n(this._events) : []
		}
	}, function(t, e, r) {
		"use strict";
		class n {
			constructor(t, e) {
				this.target = e, this.type = t
			}
		}
		class o extends n {
			constructor(t, e) {
				super("message", e), this.data = t
			}
		}
		class i extends n {
			constructor(t, e, r) {
				super("close", r), this.wasClean = r._closeFrameReceived && r._closeFrameSent, this.reason = e, this.code = t
			}
		}
		class s extends n {
			constructor(t) {
				super("open", t)
			}
		}
		class a extends n {
			constructor(t, e) {
				super("error", e), this.message = t.message, this.error = t
			}
		}
		const c = {
			addEventListener(t, e) {
				function r(t) {
					e.call(this, new o(t, this))
				}

				function n(t, r) {
					e.call(this, new i(t, r, this))
				}

				function c(t) {
					e.call(this, new a(t, this))
				}

				function h() {
					e.call(this, new s(this))
				}
				"function" == typeof e && ("message" === t ? (r._listener = e, this.on(t, r)) : "close" === t ? (n._listener =
					e, this.on(t, n)) : "error" === t ? (c._listener = e, this.on(t, c)) : "open" === t ? (h._listener = e,
					this.on(t, h)) : this.on(t, e))
			},
			removeEventListener(t, e) {
				const r = this.listeners(t);
				for (var n = 0; n < r.length; n++) r[n] !== e && r[n]._listener !== e || this.removeListener(t, r[n])
			}
		};
		t.exports = c
	}, function(t, e) {
		t.exports = function(t, e) {
			for (var r = [], n = (e = e || 0) || 0; n < t.length; n++) r[n - e] = t[n];
			return r
		}
	}, function(t, e) {
		function r(t) {
			t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter >
				0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
		}
		t.exports = r, r.prototype.duration = function() {
			var t = this.ms * Math.pow(this.factor, this.attempts++);
			if (this.jitter) {
				var e = Math.random(),
					r = Math.floor(e * this.jitter * t);
				t = 0 == (1 & Math.floor(10 * e)) ? t - r : t + r
			}
			return 0 | Math.min(t, this.max)
		}, r.prototype.reset = function() {
			this.attempts = 0
		}, r.prototype.setMin = function(t) {
			this.ms = t
		}, r.prototype.setMax = function(t) {
			this.max = t
		}, r.prototype.setJitter = function(t) {
			this.jitter = t
		}
	}])
}));
