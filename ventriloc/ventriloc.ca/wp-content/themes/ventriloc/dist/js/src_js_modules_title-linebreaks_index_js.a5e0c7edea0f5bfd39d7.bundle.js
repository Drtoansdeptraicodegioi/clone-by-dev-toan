"use strict";
(self.webpackChunkventriloc = self.webpackChunkventriloc || []).push([
    ["src_js_modules_title-linebreaks_index_js"], {
        "./src/js/modules/module/Module.js": (t, n, e) => {
            function r(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var r = n[e];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            e.d(n, {
                Z: () => i
            });
            const i = function() {
                function t() {
                    ! function(t, n) {
                        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var n, e, i;
                return n = t, (e = [{
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
                }]) && r(n.prototype, e), i && r(n, i), t
            }()
        },
        "./src/js/modules/title-linebreaks/index.js": (t, n, e) => {
            e.r(n), e.d(n, {
                default: () => j,
                instance: () => m
            });
            var r = e("./src/js/utils/dom.js"),
                i = e("./src/js/modules/module/Module.js"),
                o = e("./src/js/utils/listener.js");

            function u(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var r = n[e];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            var s = function() {
                function t(n) {
                    ! function(t, n) {
                        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.el = n, this.elements = (0, r.$$)("span", this.el), this._onTransitionEnd = this._onTransitionEnd.bind(this), this.init()
                }
                var n, e, i;
                return n = t, (e = [{
                    key: "init",
                    value: function() {
                        this._bindEvents()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this._unbindEvents(), this.el = null, this.elements = null, this._onTransitionEnd = null
                    }
                }, {
                    key: "_bindEvents",
                    value: function() {
                        (0, o.on)(this.elements, "transitionend", this._onTransitionEnd)
                    }
                }, {
                    key: "_unbindEvents",
                    value: function() {
                        (0, o.S1)(this.elements, "transitionend", this._onTransitionEnd)
                    }
                }, {
                    key: "_onTransitionEnd",
                    value: function(t) {
                        var n = t.target;
                        n && (n.classList.add("--transition-ended"), (0, o.S1)(n, "transitionend", this._onTransitionEnd))
                    }
                }]) && u(n.prototype, e), i && u(n, i), t
            }();
            const a = s;

            function l(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
                return r
            }

            function c(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function f(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var r = n[e];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function y(t) {
                return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, y(t)
            }

            function d(t, n) {
                return !n || "object" !== b(n) && "function" != typeof n ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : n
            }

            function h(t, n) {
                return h = Object.setPrototypeOf || function(t, n) {
                    return t.__proto__ = n, t
                }, h(t, n)
            }

            function p(t) {
                return function(t) {
                    if (Array.isArray(t)) return l(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, n) {
                    if (!t) return;
                    if ("string" == typeof t) return l(t, n);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === e && t.constructor && (e = t.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return l(t, n)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function v(t) {
                var n = function() {
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
                    var e, r = y(t);
                    if (n) {
                        var i = y(this).constructor;
                        e = Reflect.construct(r, arguments, i)
                    } else e = r.apply(this, arguments);
                    return d(this, e)
                }
            }
            var m = new(function(t) {
                ! function(t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), n && h(t, n)
                }(u, t);
                var n, e, i, o = v(u);

                function u() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return c(this, u), (t = o.call(this)).initialized = !1, t.items = null, n && t.init(), t
                }
                return n = u, (e = [{
                    key: "name",
                    get: function() {
                        return "TitleLinebreaks"
                    }
                }, {
                    key: "init",
                    value: function() {
                        var t = this;
                        this.initialized = !0, this.items = p((0, r.$$)("[data-title-linebreaks]")).map((function(n) {
                            return new a(n, t.emitter)
                        }))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.items && this.items.forEach((function(t) {
                            return t.destroy()
                        })), this.initialized = !1, this.items = null
                    }
                }]) && f(n.prototype, e), i && f(n, i), u
            }(i.Z));
            const j = {
                instance: m
            }
        }
    }
]);
//# sourceMappingURL=src_js_modules_title-linebreaks_index_js.a5e0c7edea0f5bfd39d7.bundle.js.map