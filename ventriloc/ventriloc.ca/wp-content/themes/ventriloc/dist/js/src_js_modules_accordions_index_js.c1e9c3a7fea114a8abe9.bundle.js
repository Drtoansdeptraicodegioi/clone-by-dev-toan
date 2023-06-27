"use strict";
(self.webpackChunkventriloc = self.webpackChunkventriloc || []).push([
    ["src_js_modules_accordions_index_js"], {
        "./src/js/components/Accordion.js": (t, n, e) => {
            e.d(n, {
                Z: () => p
            });
            var o = e("./node_modules/eventemitter2/lib/eventemitter2.js"),
                i = e.n(o),
                r = e("./src/js/utils/listener.js");

            function c(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function u(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var o = n[e];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function a(t) {
                return a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, a(t)
            }

            function l(t, n) {
                return !n || "object" !== h(n) && "function" != typeof n ? c(t) : n
            }

            function f(t, n) {
                return f = Object.setPrototypeOf || function(t, n) {
                    return t.__proto__ = n, t
                }, f(t, n)
            }
            var h = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function d(t) {
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
                    var e, o = a(t);
                    if (n) {
                        var i = a(this).constructor;
                        e = Reflect.construct(o, arguments, i)
                    } else e = o.apply(this, arguments);
                    return l(this, e)
                }
            }
            const p = function(t) {
                ! function(t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), n && f(t, n)
                }(a, t);
                var n, e, o, i = d(a);

                function a(t, n) {
                    var e, o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return u(this, a), (e = i.call(this)).button = t, e.panel = n, e.parent = t.closest(".accordions__accordion"), e._toggled = "true" == e.button.getAttribute("aria-expanded"), e._closeOnTapOut = o, e._onClick = e._onClick.bind(c(e)), e._onClickPanel = e._onClickPanel.bind(c(e)), e._onClickOutside = e._onClickOutside.bind(c(e)), e.init(), e
                }
                return n = a, e = [{
                    key: "init",
                    value: function() {
                        this._bindEvents()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this._unbindEvents(), this.button = null, this.panel = null, this._toggled = null, this._closeOnTapOut = null, this._onClick = null, this._onClickPanel = null, this._onClickOutside = null
                    }
                }, {
                    key: "open",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        !0 !== this._toggled && (this._toggled = !0, this.parent && this.parent.setAttribute("aria-expanded", !0), this.button.setAttribute("aria-expanded", !0), this.panel.setAttribute("aria-hidden", !1), this._closeOnTapOut && window.addEventListener("click", this._onClickOutside), t || this.emit("open", this))
                    }
                }, {
                    key: "close",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        !1 !== this._toggled && (this._toggled = !1, this._closeOnTapOut && window.removeEventListener("click", this._onClickOutside), this.parent && this.parent.setAttribute("aria-expanded", !1), this.button.setAttribute("aria-expanded", !1), this.panel.setAttribute("aria-hidden", !0), t || this.emit("close", this))
                    }
                }, {
                    key: "toggle",
                    value: function() {
                        !0 === this._toggled ? this.close() : this.open()
                    }
                }, {
                    key: "_bindEvents",
                    value: function() {
                        this.button && (0, r.on)(this.button, "click", this._onClick), this.panel && (0, r.on)(this.panel, "click", this._onClickPanel)
                    }
                }, {
                    key: "_unbindEvents",
                    value: function() {
                        this.button && (0, r.S1)(this.button, "click", this._onClick), this.panel && (0, r.S1)(this.panel, "click", this._onClickPanel), this._closeOnTapOut && window.removeEventListener("click", this._onClickOutside)
                    }
                }, {
                    key: "_onClick",
                    value: function(t) {
                        t && (t.preventDefault(), t.stopImmediatePropagation()), this.toggle()
                    }
                }, {
                    key: "_onClickPanel",
                    value: function(t) {
                        t && t.stopImmediatePropagation()
                    }
                }, {
                    key: "_onClickOutside",
                    value: function() {
                        this.close()
                    }
                }, {
                    key: "toggled",
                    get: function() {
                        return this._toggled
                    }
                }], e && s(n.prototype, e), o && s(n, o), a
            }(i())
        },
        "./src/js/modules/accordions/index.js": (t, n, e) => {
            e.r(n), e.d(n, {
                default: () => g,
                instance: () => k
            });
            var o = e("./src/js/utils/dom.js"),
                i = e("./src/js/modules/module/Module.js"),
                r = e("./src/js/components/Accordion.js");

            function c(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var e = 0, o = new Array(n); e < n; e++) o[e] = t[e];
                return o
            }

            function u(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var o = n[e];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function s(t) {
                return function(t) {
                    if (Array.isArray(t)) return c(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, n) {
                    if (!t) return;
                    if ("string" == typeof t) return c(t, n);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === e && t.constructor && (e = t.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return c(t, n)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var a = function() {
                function t(n, e) {
                    ! function(t, n) {
                        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.el = n, this.emitter = e, this.accordions = s((0, o.$$)(".accordions__accordion", this.el)).map((function(t) {
                        var n = (0, o.$)(".accordions__btn", t),
                            e = (0, o.$)(".accordions__content", t);
                        return new r.Z(n, e)
                    })), this._onAccordionOpen = this._onAccordionOpen.bind(this), this._onAccordionClose = this._onAccordionClose.bind(this), this.init()
                }
                var n, e, i;
                return n = t, (e = [{
                    key: "init",
                    value: function() {}
                }, {
                    key: "destroy",
                    value: function() {
                        this.accordions && this.accordions.forEach((function(t) {
                            return t.destroy()
                        })), this.el = null, this.emitter = null, this.accordions = null, this._onAccordionOpen = null, this._onAccordionClose = null
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
                        if (this.accordions) {
                            var t = this;
                            this.accordions.forEach((function(n) {
                                n.on("open", t._onAccordionOpen), n.on("close", t._onAccordionClose)
                            }))
                        }
                    }
                }, {
                    key: "_unbindEvents",
                    value: function() {
                        if (this.accordions) {
                            var t = this;
                            this.accordions.forEach((function(n) {
                                n.off("open", t._onAccordionOpen), n.off("close", t._onAccordionClose)
                            }))
                        }
                    }
                }, {
                    key: "_onAccordionOpen",
                    value: function() {
                        this.emitter.emit("SiteScroll.update")
                    }
                }, {
                    key: "_onAccordionClose",
                    value: function() {
                        this.emitter.emit("SiteScroll.update")
                    }
                }]) && u(n.prototype, e), i && u(n, i), t
            }();
            const l = a;

            function f(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var e = 0, o = new Array(n); e < n; e++) o[e] = t[e];
                return o
            }

            function h(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function d(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var o = n[e];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function p(t) {
                return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, p(t)
            }

            function y(t, n) {
                return !n || "object" !== _(n) && "function" != typeof n ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : n
            }

            function b(t, n) {
                return b = Object.setPrototypeOf || function(t, n) {
                    return t.__proto__ = n, t
                }, b(t, n)
            }

            function v(t) {
                return function(t) {
                    if (Array.isArray(t)) return f(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, n) {
                    if (!t) return;
                    if ("string" == typeof t) return f(t, n);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === e && t.constructor && (e = t.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return f(t, n)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _ = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function m(t) {
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
                    var e, o = p(t);
                    if (n) {
                        var i = p(this).constructor;
                        e = Reflect.construct(o, arguments, i)
                    } else e = o.apply(this, arguments);
                    return y(this, e)
                }
            }
            var k = new(function(t) {
                ! function(t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), n && b(t, n)
                }(c, t);
                var n, e, i, r = m(c);

                function c() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return h(this, c), (t = r.call(this)).initialized = !1, t.items = null, n && t.init(), t
                }
                return n = c, (e = [{
                    key: "name",
                    get: function() {
                        return "Accordions"
                    }
                }, {
                    key: "init",
                    value: function() {
                        var t = this;
                        this.initialized = !0, this.items = v((0, o.$$)("[data-accordions]")).map((function(n) {
                            return new l(n, t.emitter)
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
                }]) && d(n.prototype, e), i && d(n, i), c
            }(i.Z));
            const g = {
                instance: k
            }
        },
        "./src/js/modules/module/Module.js": (t, n, e) => {
            function o(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var o = n[e];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
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
                }]) && o(n.prototype, e), i && o(n, i), t
            }()
        }
    }
]);
//# sourceMappingURL=src_js_modules_accordions_index_js.c1e9c3a7fea114a8abe9.bundle.js.map