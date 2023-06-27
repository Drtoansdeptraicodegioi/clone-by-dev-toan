"use strict";
(self.webpackChunkventriloc = self.webpackChunkventriloc || []).push([
    ["src_js_modules_lottie_index_js"], {
        "./src/js/modules/lottie/index.js": (t, e, n) => {
            n.r(e), n.d(e, {
                default: () => L,
                instance: () => C
            });
            var i = n("./src/js/utils/dom.js"),
                r = n("./src/js/modules/module/Module.js"),
                o = n("./node_modules/lottie-web/build/player/lottie.js"),
                s = n.n(o),
                a = n("./node_modules/animejs/lib/anime.es.js"),
                l = n("./src/js/utils/sleep.js"),
                u = function(t) {
                    return t.includes("ms") ? parseFloat(t) : 1e3 * parseFloat(t)
                };
            var c = n("./src/js/utils/listener.js"),
                h = n("./src/js/utils/mobile.js");

            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i
            }

            function p(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function y(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function v(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    })))), i.forEach((function(e) {
                        y(t, e, n[e])
                    }))
                }
                return t
            }

            function d(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var i, r, o = [],
                            s = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(s = (i = n.next()).done) && (o.push(i.value), !e || o.length !== e); s = !0);
                        } catch (t) {
                            a = !0, r = t
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return f(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _ = {
                    autoplay: !1,
                    loop: !0,
                    delay: 0,
                    renderer: "canvas"
                },
                m = function() {
                    function t(e, n) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.el = e, this.emitter = n, this.wrapper = this.el.closest("[data-lottie-wrapper]"), this._inView = !1, this._instance = null, this._options = null, this._scrollTarget = null, this._onSiteScrollCall = this._onSiteScrollCall.bind(this), this._onInstanceDataReady = this._onInstanceReady.bind(this), this._onInstanceLoop = this._onInstanceLoop.bind(this), this._onMouseEnter = this._onMouseEnter.bind(this), this._onMouseLeave = this._onMouseLeave.bind(this), this.init()
                    }
                    var e, n, r;
                    return e = t, (n = [{
                        key: "init",
                        value: function() {
                            var t = this;
                            if (this.el.dataset.lottie) {
                                var e = JSON.parse(this.el.dataset.lottie);
                                this._options = v({}, _, e)
                            } else this._options = v({}, _);
                            var n = (0, i.$)("script", this.el);
                            if (n) {
                                var r = n.textContent.trim(),
                                    o = JSON.parse(r);
                                o && (this._options.animationData = o, this._options.path = null, delete this._options.path)
                            }
                            var a = !0,
                                u = !1,
                                c = void 0;
                            try {
                                for (var f, p = Object.entries(this._options)[Symbol.iterator](); !(a = (f = p.next()).done); a = !0) {
                                    var y = d(f.value, 2),
                                        m = y[0];
                                    null === y[1] && delete this._options[m]
                                }
                            } catch (t) {
                                u = !0, c = t
                            } finally {
                                try {
                                    a || null == p.return || p.return()
                                } finally {
                                    if (u) throw c
                                }
                            }
                            this._options.hasOwnProperty("container") ? this._options.container = (0, i.$)(this._options.container) : this._options.container = this.el, this._options.container ? (this.el.dataset.scrollTarget && (this._scrollTarget = this.el.dataset.scrollTarget), this._scrollTarget ? this._scrollTarget = (0, i.$)(this._scrollTarget) : this._scrollTarget = this.el, (0, l._)(250).then((function() {
                                var e = t;
                                t._instance = s().loadAnimation(t._options), t._instance.addEventListener("DOMLoaded", (function() {
                                    return e._onInstanceReady()
                                })), t._options.on_rollover && !h.ai && t._instance.addEventListener("loopComplete", t._onInstanceLoop)
                            })), this._bindEvents()) : console.warn("Lottie will be ignored on ".concat(this.el, " because container is not found."), this.el)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this._unbindEvents(), this._instance && this._instance.destroy(), this.el = null, this.emitter = null, this.wrapper = null, this._instance = null, this._inView = null, this._options = null, this._scrollTarget = null, this._onSiteScrollCall = null, this._onInstanceDataReady = null, this._onInstanceLoop = null, this._onMouseEnter = null, this._onMouseLeave = null
                        }
                    }, {
                        key: "_bindEvents",
                        value: function() {
                            this.emitter && this.emitter.on("SiteScroll.lottie", this._onSiteScrollCall), this._options.on_rollover && this.wrapper && !h.ai && ((0, c.on)(this.wrapper, "mouseenter", this._onMouseEnter), (0, c.on)(this.wrapper, "mouseleave", this._onMouseLeave))
                        }
                    }, {
                        key: "_unbindEvents",
                        value: function() {
                            this.emitter && this.emitter.off("SiteScroll.lottie", this._onSiteScrollCall), this._instance && (this._instance.removeEventListener("data_ready", this._onInstanceDataReady), this._instance.removeEventListener("loopComplete", this._onInstanceLoop)), this._options.on_rollover && this.wrapper && !h.ai && ((0, c.S1)(this.wrapper, "mouseenter", this._onMouseEnter), (0, c.S1)(this.wrapper, "mouseleave", this._onMouseLeave))
                        }
                    }, {
                        key: "_onInstanceReady",
                        value: function() {
                            var t = this,
                                e = this._calculateDelay();
                            (0, a.Z)({
                                targets: [this.el],
                                opacity: {
                                    value: [0, 1],
                                    duration: 750,
                                    easing: "linear"
                                },
                                scale: {
                                    value: [.84, 1],
                                    duration: 750,
                                    easing: "easeOutCubic"
                                },
                                translateY: {
                                    value: [115, 0],
                                    duration: 750,
                                    easing: "easeOutCubic"
                                },
                                complete: function() {
                                    t._inView && !t._options.on_rollover && t._instance.play()
                                },
                                delay: e > 0 ? e : 0
                            })
                        }
                    }, {
                        key: "_onInstanceLoop",
                        value: function() {
                            var t;
                            this._hovering || null === (t = this._instance) || void 0 === t || t.pause()
                        }
                    }, {
                        key: "_onSiteScrollCall",
                        value: function(t, e) {
                            if ((e.target ? e.target : e.targetEl) === this._scrollTarget && (!this._options.on_rollover || h.ai))
                                if (e.inView && "enter" === t) {
                                    var n, i = this;
                                    this._inView = !0;
                                    var r = this._calculateDelay();
                                    r > 0 ? (0, l._)(r).then((function() {
                                        var t;
                                        return null === (t = i._instance) || void 0 === t ? void 0 : t.play()
                                    })) : null === (n = this._instance) || void 0 === n || n.play()
                                } else {
                                    var o;
                                    this._inView = !1, null === (o = this._instance) || void 0 === o || o.pause()
                                }
                        }
                    }, {
                        key: "_calculateDelay",
                        value: function() {
                            var t = getComputedStyle(this.el).getPropertyValue("--delay");
                            return u(t) + this._options.delay
                        }
                    }, {
                        key: "_onMouseEnter",
                        value: function() {
                            var t;
                            this._hovering = !0, null === (t = this._instance) || void 0 === t || t.play()
                        }
                    }, {
                        key: "_onMouseLeave",
                        value: function() {
                            this._hovering = !1
                        }
                    }]) && p(e.prototype, n), r && p(e, r), t
                }();
            const b = m;

            function g(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i
            }

            function w(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function j(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function S(t) {
                return S = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, S(t)
            }

            function O(t, e) {
                return !e || "object" !== M(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function k(t, e) {
                return k = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, k(t, e)
            }

            function E(t) {
                return function(t) {
                    if (Array.isArray(t)) return g(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return g(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var M = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function I(t) {
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
                    var n, i = S(t);
                    if (e) {
                        var r = S(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return O(this, n)
                }
            }
            var C = new(function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && k(t, e)
                }(s, t);
                var e, n, r, o = I(s);

                function s() {
                    var t, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return w(this, s), (t = o.call(this)).initialized = !1, t.items = null, e && t.init(), t
                }
                return e = s, (n = [{
                    key: "name",
                    get: function() {
                        return "Lottie"
                    }
                }, {
                    key: "init",
                    value: function() {
                        var t = this;
                        this.initialized = !0, this.items = E((0, i.$$)("[data-lottie]")).map((function(e) {
                            return new b(e, t.emitter)
                        }))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.items && this.items.forEach((function(t) {
                            return t.destroy()
                        })), this.initialized = !1, this.items = null
                    }
                }]) && j(e.prototype, n), r && j(e, r), s
            }(r.Z));
            const L = {
                instance: C
            }
        },
        "./src/js/modules/module/Module.js": (t, e, n) => {
            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            n.d(e, {
                Z: () => r
            });
            const r = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, n, r;
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
                }]) && i(e.prototype, n), r && i(e, r), t
            }()
        },
        "./src/js/utils/mobile.js": (t, e, n) => {
            n.d(e, {
                ai: () => i
            });
            var i = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
            window.matchMedia("(hover: none)").matches
        },
        "./src/js/utils/sleep.js": (t, e, n) => {
            n.d(e, {
                _: () => i
            });
            var i = function(t) {
                return new Promise((function(e) {
                    return setTimeout(e, t)
                }))
            }
        }
    }
]);
//# sourceMappingURL=src_js_modules_lottie_index_js.1d2bed4f1d61ec8f141d.bundle.js.map