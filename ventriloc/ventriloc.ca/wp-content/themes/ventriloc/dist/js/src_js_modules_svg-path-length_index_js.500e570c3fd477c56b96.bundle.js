"use strict";
(self.webpackChunkventriloc = self.webpackChunkventriloc || []).push([
    ["src_js_modules_svg-path-length_index_js"], {
        "./src/js/modules/module/Module.js": (t, e, n) => {
            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            n.d(e, {
                Z: () => o
            });
            const o = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, n, o;
                return e = t, (n = [{
                    key: "init",
                    value: function() {}
                }, {
                    key: "start",
                    value: function() {}
                }, {
                    key: "stop",
                    value: function() {}
                }, {
                    key: "destroy",
                    value: function() {}
                }, {
                    key: "name",
                    get: function() {
                        return null
                    }
                }]) && r(e.prototype, n), o && r(e, o), t
            }()
        },
        "./src/js/modules/svg-path-length/index.js": (t, e, n) => {
            n.r(e), n.d(e, {
                default: () => w,
                instance: () => j
            });
            var r = n("./src/js/utils/dom.js"),
                o = n("./src/js/modules/module/Module.js"),
                i = n("./src/js/utils/resize.js");

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function s(t) {
                return function(t) {
                    if (Array.isArray(t)) return u(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return u(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var c = function() {
                function t(e, n) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.el = e, this.emitter = n, this.paths = s((0, r.$$)("path", this.el)), this._onResize = this._onResize.bind(this), this.init()
                }
                var e, n, o;
                return e = t, (n = [{
                    key: "init",
                    value: function() {
                        this._bindEvents()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this._unbindEvents(), this.el = null, this.emitter = null, this.paths = null, this._onResize = null
                    }
                }, {
                    key: "_bindEvents",
                    value: function() {
                        this.paths.length > 0 && (i.ZP.add(this._onResize), this._onResize())
                    }
                }, {
                    key: "_unbindEvents",
                    value: function() {
                        this.paths.length > 0 && i.ZP.remove(this._onResize)
                    }
                }, {
                    key: "_onResize",
                    value: function() {
                        this.paths.forEach((function(t) {
                            var e = "non-scaling-stroke" === t.getAttribute("vector-effect") ? (0, r.JA)(t).width / t.getBBox().width : 1;
                            t.style.setProperty("--scale", e), t.style.setProperty("--length", "".concat(t.getTotalLength() * e, "px"))
                        }))
                    }
                }]) && a(e.prototype, n), o && a(e, o), t
            }();
            const l = c;

            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function h(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function y(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function p(t) {
                return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, p(t)
            }

            function v(t, e) {
                return !e || "object" !== m(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function d(t, e) {
                return d = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, d(t, e)
            }

            function b(t) {
                return function(t) {
                    if (Array.isArray(t)) return f(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return f(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var m = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function g(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = p(t);
                    if (e) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }
            var j = new(function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && d(t, e)
                }(u, t);
                var e, n, o, i = g(u);

                function u() {
                    var t, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return h(this, u), (t = i.call(this)).initialized = !1, t.items = null, e && t.init(), t
                }
                return e = u, (n = [{
                    key: "name",
                    get: function() {
                        return "SvgPathLength"
                    }
                }, {
                    key: "init",
                    value: function() {
                        var t = this;
                        this.initialized = !0, this.items = b((0, r.$$)("[data-svg-path-length]")).map((function(e) {
                            return new l(e, t.emitter)
                        }))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.items && this.items.forEach((function(t) {
                            return t.destroy()
                        })), this.initialized = !1, this.items = null
                    }
                }]) && y(e.prototype, n), o && y(e, o), u
            }(o.Z));
            const w = {
                instance: j
            }
        }
    }
]);
//# sourceMappingURL=src_js_modules_svg-path-length_index_js.500e570c3fd477c56b96.bundle.js.map