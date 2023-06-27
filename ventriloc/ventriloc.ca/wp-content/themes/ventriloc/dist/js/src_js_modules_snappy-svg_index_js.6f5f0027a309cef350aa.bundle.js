"use strict";
(self.webpackChunkventriloc = self.webpackChunkventriloc || []).push([
    ["src_js_modules_snappy-svg_index_js"], {
        "./src/js/modules/module/Module.js": (t, e, n) => {
            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            n.d(e, {
                Z: () => i
            });
            const i = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, n, i;
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
                }]) && r(e.prototype, n), i && r(e, i), t
            }()
        },
        "./src/js/modules/snappy-svg/index.js": (t, e, n) => {
            n.r(e), n.d(e, {
                default: () => j,
                instance: () => w
            });
            var r = n("./src/js/utils/dom.js"),
                i = n("./src/js/modules/module/Module.js"),
                o = n("./src/js/utils/resize.js");

            function s(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function u(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function a(t) {
                return function(t) {
                    if (Array.isArray(t)) return s(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return s(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var c = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.el = e, this.parent = this.el.parentElement, this.svg = (0, r.$)("svg", this.el), this.rects = a((0, r.$$)("rect", this.el)), this._resize = this._resize.bind(this), this.parent && this.init()
                }
                var e, n, i;
                return e = t, (n = [{
                    key: "init",
                    value: function() {
                        this._bindEvents(), this._resize()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this._unbindEvents(), this.el = null, this.emitter = null, this.rects = null, this._ro = null
                    }
                }, {
                    key: "_bindEvents",
                    value: function() {
                        this.rects.length && o.ZP.add(this._resize)
                    }
                }, {
                    key: "_unbindEvents",
                    value: function() {
                        this.rects.length && o.ZP.remove(this._resize)
                    }
                }, {
                    key: "_resize",
                    value: function() {
                        var t = (0, r.JA)(this.parent),
                            e = t.width,
                            n = t.height;
                        e = parseInt(e), n = parseInt(n), this.svg.setAttribute("viewBox", "0 0 ".concat(e, " ").concat(n)), this.svg.setAttribute("width", e), this.svg.setAttribute("height", n), this.rects.forEach((function(t) {
                            var i = t.getAttribute("stroke-width"),
                                o = "non-scaling-stroke" === t.getAttribute("vector-effect") ? (0, r.JA)(t).width / t.getBBox().width : 1;
                            t.setAttribute("width", e - i), t.setAttribute("height", n - i), t.setAttribute("x", i / 2), t.setAttribute("y", i / 2), t.style.setProperty("--scale", o), t.style.setProperty("--length", "".concat(t.getTotalLength(), "px")), t.style.setProperty("--height", "".concat(n - i, "px")), t.style.setProperty("--width", "".concat(e - i, "px"))
                        }))
                    }
                }]) && u(e.prototype, n), i && u(e, i), t
            }();
            const l = c;

            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function h(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function y(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function p(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function v(t) {
                return v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, v(t)
            }

            function b(t, e) {
                return !e || "object" !== g(e) && "function" != typeof e ? h(t) : e
            }

            function d(t, e) {
                return d = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, d(t, e)
            }

            function m(t) {
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
            var g = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function _(t) {
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
                    var n, r = v(t);
                    if (e) {
                        var i = v(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
                }
            }
            var w = new(function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && d(t, e)
                }(s, t);
                var e, n, i, o = _(s);

                function s() {
                    var t, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return y(this, s), (t = o.call(this)).initialized = !1, t.items = null, t._resize = t._resize.bind(h(t)), e && t.init(), t
                }
                return e = s, (n = [{
                    key: "name",
                    get: function() {
                        return "SnappySvg"
                    }
                }, {
                    key: "init",
                    value: function() {
                        var t = this;
                        this.initialized = !0, this.items = m((0, r.$$)("[data-snappy-svg]")).map((function(e) {
                            return new l(e, t.emitter)
                        })), this._bindEvents()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.items && this.items.forEach((function(t) {
                            return t.destroy()
                        })), this.initialized = !1, this.items = null, this._unbindEvents()
                    }
                }, {
                    key: "_bindEvents",
                    value: function() {
                        this.emitter.on("SiteScroll.update", this._resize)
                    }
                }, {
                    key: "_unbindEvents",
                    value: function() {
                        this.emitter.off("SiteScroll.update", this._resize)
                    }
                }, {
                    key: "_resize",
                    value: function() {
                        this.items && this.items.forEach((function(t) {
                            return t._resize()
                        }))
                    }
                }]) && p(e.prototype, n), i && p(e, i), s
            }(i.Z));
            const j = {
                instance: w
            }
        }
    }
]);
//# sourceMappingURL=src_js_modules_snappy-svg_index_js.6f5f0027a309cef350aa.bundle.js.map