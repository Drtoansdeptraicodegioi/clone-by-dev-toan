"use strict";
(self.webpackChunkventriloc = self.webpackChunkventriloc || []).push([
    ["src_js_modules_post-preview_index_js"], {
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
        "./src/js/modules/post-preview/index.js": (t, e, n) => {
            n.r(e), n.d(e, {
                default: () => j,
                instance: () => w
            });
            var r = n("./src/js/utils/dom.js"),
                i = n("./src/js/modules/module/Module.js"),
                o = n("./src/js/utils/listener.js");

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function s(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function a(t) {
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
            var l = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.el = e, this.links = a((0, r.$$)("[data-post-preview-link]", this.el)), this._enterLink = this._enterLink.bind(this), this._leaveLink = this._leaveLink.bind(this)
                }
                var e, n, i;
                return e = t, (n = [{
                    key: "destroy",
                    value: function() {
                        this.el = null, this.links = null
                    }
                }, {
                    key: "start",
                    value: function() {
                        this._bindEvents()
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this._unbindEvents()
                    }
                }, {
                    key: "_bindEvents",
                    value: function() {
                        this.links && ((0, o.on)(this.links, "mouseenter", this._enterLink), (0, o.on)(this.links, "mouseleave", this._leaveLink))
                    }
                }, {
                    key: "_unbindEvents",
                    value: function() {
                        this.links && ((0, o.S1)(this.links, "mouseenter", this._enterLink), (0, o.S1)(this.links, "mouseleave", this._leaveLink))
                    }
                }, {
                    key: "_enterLink",
                    value: function() {
                        this.el.classList.add("--hover")
                    }
                }, {
                    key: "_leaveLink",
                    value: function() {
                        this.el.classList.remove("--hover")
                    }
                }]) && s(e.prototype, n), i && s(e, i), t
            }();
            const c = l;

            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function y(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function h(t, e) {
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
                return !e || "object" !== b(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function m(t, e) {
                return m = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, m(t, e)
            }

            function d(t) {
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
            var b = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function k(t) {
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
                        var i = p(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
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
                    }), e && m(t, e)
                }(u, t);
                var e, n, i, o = k(u);

                function u() {
                    var t, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return y(this, u), (t = o.call(this)).initialized = !1, t.items = null, e && t.init(), t
                }
                return e = u, (n = [{
                    key: "name",
                    get: function() {
                        return "PostPreview"
                    }
                }, {
                    key: "init",
                    value: function() {
                        var t = this;
                        this.initialized = !0, this.items = d((0, r.$$)("[data-post-preview]")).map((function(e) {
                            return new c(e, t.emitter)
                        }))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.items && this.items.forEach((function(t) {
                            return t.destroy()
                        })), this.initialized = !1, this.items = null
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.items && this.items.forEach((function(t) {
                            return t.start()
                        }))
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.items && this.items.forEach((function(t) {
                            return t.stop()
                        }))
                    }
                }]) && h(e.prototype, n), i && h(e, i), u
            }(i.Z));
            const j = {
                instance: w
            }
        }
    }
]);
//# sourceMappingURL=src_js_modules_post-preview_index_js.c388f760caa0eff01f59.bundle.js.map