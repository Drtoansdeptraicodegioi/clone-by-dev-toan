"use strict";
(self.webpackChunkventriloc = self.webpackChunkventriloc || []).push([
    ["src_js_ui_site-nav_index_js"], {
        "./src/js/ui/site-nav/index.js": (t, e, i) => {
            i.r(e), i.d(e, {
                default: () => O,
                instance: () => C
            });
            var n = i("./src/js/utils/dom.js"),
                s = i("./src/js/utils/listener.js"),
                o = i("./node_modules/lottie-web/build/player/lottie.js"),
                r = i.n(o),
                a = i("./node_modules/eventemitter2/lib/eventemitter2.js"),
                l = i.n(a);

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }

            function u(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function h(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function d(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function f(t, e, i) {
                return e && d(t.prototype, e), i && d(t, i), t
            }

            function p(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }

            function v(t) {
                return v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, v(t)
            }

            function _(t, e) {
                return !e || "object" !== m(e) && "function" != typeof e ? u(t) : e
            }

            function y(t, e) {
                return y = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, y(t, e)
            }

            function g(t) {
                return function(t) {
                    if (Array.isArray(t)) return c(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return c(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(i);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var m = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function b(t) {
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
                    var i, n = v(t);
                    if (e) {
                        var s = v(this).constructor;
                        i = Reflect.construct(n, arguments, s)
                    } else i = n.apply(this, arguments);
                    return _(this, i)
                }
            }
            var w = "--js-site-nav-opened",
                k = {
                    autoplay: !1,
                    loop: !0,
                    renderer: "svg"
                },
                S = function() {
                    function t() {
                        h(this, t), this.initialized = !1, this._opened = !1, this._scrollY = 0, this._handleTriggers = this._handleTriggers.bind(this), this._handleKeyDown = this._handleKeyDown.bind(this), this._onCloseCompleted = this._onCloseCompleted.bind(this), this.close = this.close.bind(this)
                    }
                    return f(t, [{
                        key: "name",
                        get: function() {
                            return "SiteNav"
                        }
                    }, {
                        key: "init",
                        value: function() {
                            var t = this;
                            this.initialized = !0, this._opened = !1, this._scrollY = 0, this.siteHeader = (0, n.$)(".site-header"), this.el = (0, n.$)("[data-site-nav]"), this.wrap = (0, n.$)(".site-nav__wrap", this.el), this.triggers = g((0, n.$$)('[aria-controls="'.concat(this.el.id, '"]'))), this.menuItems = g((0, n.$$)("".concat(".menu-item-has-children"), this.el)).map((function(e) {
                                return new E(e, t.emitter)
                            })), this._bindEvents()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.menuItems && this.menuItems.forEach((function(t) {
                                return t.destroy()
                            })), n.dy.classList.remove(w), this._unbindEvents(), this.siteHeader = null, this.el = null, this.wrap = null, this.triggers = null, this.menuItems = null, this._opened = !1, this._scrollY = 0, this.initialized = !1
                        }
                    }, {
                        key: "start",
                        value: function() {}
                    }, {
                        key: "stop",
                        value: function() {
                            this.emitter.emit("SiteScroll.start")
                        }
                    }, {
                        key: "_bindEvents",
                        value: function() {
                            this.triggers && (0, s.on)(this.triggers, "click", this._handleTriggers), (0, s.on)(window, "keydown", this._handleKeyDown), this.emitter.on("SiteNav.toggle", this._handleTriggers), this.emitter.on("SiteContactPanel.open", this.close)
                        }
                    }, {
                        key: "_unbindEvents",
                        value: function() {
                            this.triggers && (0, s.S1)(this.triggers, "click", this._handleTriggers), (0, s.S1)(this.wrap, "transitionend", this._onCloseCompleted), (0, s.S1)(window, "keydown", this._handleKeyDown), this.emitter.off("SiteNav.toggle", this._handleTriggers), this.emitter.off("SiteContactPanel.open", this.close)
                        }
                    }, {
                        key: "open",
                        value: function() {
                            !0 !== this._opened && (this._opened = !0, this.state.dispatch("SITE_NAV", this._opened), this._scrollY = window.scrollY, this.el.setAttribute("aria-hidden", !1), (0, s.S1)(this.wrap, "transitionend", this._onCloseCompleted), n.dy.classList.add(w), this.emitter.emit("SiteScroll.stop", !0), this.emitter.emit("SiteNav.open"), this.triggers.forEach((function(t) {
                                t.setAttribute("aria-expanded", !0), t.classList.add("is-active")
                            })))
                        }
                    }, {
                        key: "close",
                        value: function() {
                            !1 !== this._opened && (this._opened = !1, this.state.dispatch("SITE_NAV", this._opened), this.triggers.forEach((function(t) {
                                t.setAttribute("aria-expanded", !1), t.classList.remove("is-active")
                            })), (0, s.S1)(this.wrap, "transitionend", this._onCloseCompleted), (0, s.on)(this.wrap, "transitionend", this._onCloseCompleted), n.dy.classList.remove(w), window.scrollTo({
                                top: this._scrollY,
                                behavior: "auto"
                            }), this.emitter.emit("SiteScroll.update"), this.emitter.emit("SiteNav.close"))
                        }
                    }, {
                        key: "toggle",
                        value: function() {
                            !0 === this._opened ? this.close() : this.open()
                        }
                    }, {
                        key: "_handleTriggers",
                        value: function(t) {
                            t && (t.preventDefault(), t.stopPropagation()), this.toggle()
                        }
                    }, {
                        key: "_handleKeyDown",
                        value: function(t) {
                            !0 !== this._opened || "Escape" !== t.key && "Esc" !== t.key || this.close()
                        }
                    }, {
                        key: "_onCloseCompleted",
                        value: function(t) {
                            t && t.target !== this.wrap || !0 !== this._opened && ((0, s.S1)(this.wrap, "transitionend", this._onCloseCompleted), this.emitter.emit("SiteScroll.start"), this.el.setAttribute("aria-hidden", !0))
                        }
                    }, {
                        key: "opened",
                        get: function() {
                            return this._opened
                        }
                    }]), t
                }(),
                E = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && y(t, e)
                    }(i, t);
                    var e = b(i);

                    function i(t, n) {
                        var s;
                        return h(this, i), (s = e.call(this)).el = t, s.emitter = n, s.opened = !0, s.activated = !1, s._toggle = s._toggle.bind(u(s)), s._open = s._open.bind(u(s)), s._close = s._close.bind(u(s)), s._activate = s._activate.bind(u(s)), s._deactivate = s._deactivate.bind(u(s)), s.init(), s
                    }
                    return f(i, [{
                        key: "destroy",
                        value: function() {
                            this.lotties && this.lotties.forEach((function(t) {
                                return t.destroy()
                            })), this._unbindEvents(), this.opened = null, this.activated = null, this.el = null, this.togglers = null, this.lotties = null
                        }
                    }, {
                        key: "init",
                        value: function() {
                            this.toggler = (0, n.$)("button, a", this.el), this.lotties = g((0, n.$$)(".site-nav__lottie", this.el)).map((function(t) {
                                return new j(t)
                            })), this._bindEvents()
                        }
                    }, {
                        key: "_bindEvents",
                        value: function() {
                            (0, s.on)(this.toggler, "click", this._toggle), this.emitter.on("SiteNav.open", this._activate), this.emitter.on("SiteNav.close", this._deactivate)
                        }
                    }, {
                        key: "_unbindEvents",
                        value: function() {
                            (0, s.S1)(this.toggler, "click", this._toggle), this.emitter.off("SiteNav.open", this._activate), this.emitter.off("SiteNav.close", this._deactivate)
                        }
                    }, {
                        key: "_toggle",
                        value: function(t) {
                            t && (t.preventDefault(), t.stopPropagation()), this.el.classList.contains("--opened") ? this._close() : this._open()
                        }
                    }, {
                        key: "_activate",
                        value: function() {
                            !this.activated && this.opened && (this.activated = !0, this.lotties && this.lotties.forEach((function(t) {
                                t.play()
                            })))
                        }
                    }, {
                        key: "_deactivate",
                        value: function() {
                            this.activated && (this.activated = !1, this.lotties && this.lotties.forEach((function(t) {
                                t.pause()
                            })))
                        }
                    }, {
                        key: "_open",
                        value: function() {
                            this.opened || (this.opened = !0, this.el.classList.add("--opened"), this._activate(), this.emit("open", this))
                        }
                    }, {
                        key: "_close",
                        value: function() {
                            this.opened && (this.opened = !1, this.el.classList.remove("--opened"), this._deactivate(), this.emit("close", this))
                        }
                    }]), i
                }(l()),
                j = function() {
                    function t(e) {
                        h(this, t), this.el = e, this.init()
                    }
                    return f(t, [{
                        key: "destroy",
                        value: function() {
                            this._unbindEvents(), this.el = null, this._instance = null
                        }
                    }, {
                        key: "init",
                        value: function() {
                            var t = function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var i = null != arguments[e] ? arguments[e] : {},
                                        n = Object.keys(i);
                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter((function(t) {
                                        return Object.getOwnPropertyDescriptor(i, t).enumerable
                                    })))), n.forEach((function(e) {
                                        p(t, e, i[e])
                                    }))
                                }
                                return t
                            }({}, k, {
                                container: this.el,
                                path: this.el.dataset.lottieUrl
                            });
                            this._instance = r().loadAnimation(t), this._bindEvents()
                        }
                    }, {
                        key: "_bindEvents",
                        value: function() {}
                    }, {
                        key: "_unbindEvents",
                        value: function() {}
                    }, {
                        key: "play",
                        value: function() {
                            var t;
                            null === (t = this._instance) || void 0 === t || t.play()
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            var t;
                            null === (t = this._instance) || void 0 === t || t.goToAndStop(0)
                        }
                    }]), t
                }();
            var C = new S;
            const O = {
                instance: C
            }
        }
    }
]);
//# sourceMappingURL=src_js_ui_site-nav_index_js.66a4e2bfdd4fb87a36b9.bundle.js.map