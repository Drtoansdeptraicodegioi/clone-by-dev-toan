"use strict";
(self.webpackChunkventriloc = self.webpackChunkventriloc || []).push([
    ["src_js_modules_text-ticker_index_js"], {
        "./src/js/modules/module/Module.js": (t, e, i) => {
            function n(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            i.d(e, {
                Z: () => r
            });
            const r = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, i, r;
                return e = t, (i = [{
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
                }]) && n(e.prototype, i), r && n(e, r), t
            }()
        },
        "./src/js/modules/text-ticker/index.js": (t, e, i) => {
            i.r(e), i.d(e, {
                default: () => R,
                instance: () => x
            });
            var n = i("./src/js/utils/dom.js"),
                r = i("./src/js/modules/module/Module.js"),
                o = i("./src/js/utils/math.js"),
                s = i("./src/js/utils/mobile.js"),
                l = i("./src/js/utils/resize.js"),
                a = i("./src/js/utils/wheel.js");

            function c(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var u = .08,
                h = "css",
                f = "js",
                _ = "scroll",
                d = function() {
                    function t(e, i) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.el = e, this.emitter = i, this.template = (0, n.$)(".text-ticker__text", this.el), this.texts = [this.template], this._mode = this._getMode(), this._direction = this._getDirection(), this._velocity = {
                            target: u * this._direction,
                            current: u * this._direction
                        }, this._progress = 0, this._raf = null, this._wheel = null, this._ro = null, this._inView = !1, this._onScroll = this._onScroll.bind(this), this._onRaf = this._onRaf.bind(this), this._onScrollStart = this._onScrollStart.bind(this), this._onScrollStop = this._onScrollStop.bind(this), this._onScrollCall = this._onScrollCall.bind(this), this._onResize = this._onResize.bind(this), this.init()
                    }
                    var e, i, r;
                    return e = t, (i = [{
                        key: "init",
                        value: function() {
                            this._onResize(), this._mode === _ && (this._velocity.target = this._velocity.current = 0), this._mode === f || this._mode === _ ? (this.el.classList.add("--mode-js"), this._wheel = (0, a.Z)(this._onScroll), this.el.hasAttribute("data-scroll") || (this._inView = !0)) : this.el.classList.add("--mode-css"), this._bindEvents()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this._unbindEvents(), this.el = null, this.emitter = null, this.template = null, this.texts = null, this._mode = null, this._direction = null, this._velocity = null, this._progress = null, this._raf = null, this._wheel = null, this._ro = null, this._inView = null, this._onScroll = null, this._onRaf = null, this._onScrollStart = null, this._onScrollStop = null, this._onScrollCall = null, this._onResize = null
                        }
                    }, {
                        key: "_bindEvents",
                        value: function() {
                            var t, e, i, n;
                            l.ZP.add(this._onResize), this._wheel && (null === (t = this._wheel) || void 0 === t || t.on()), (this._mode === f || this._mode === _) && (null === (e = this.emitter) || void 0 === e || e.on("SiteScroll.start", this._onScrollStart), null === (i = this.emitter) || void 0 === i || i.on("SiteScroll.stop", this._onScrollStop), null === (n = this.emitter) || void 0 === n || n.on("SiteScroll.text-ticker", this._onScrollCall), this._raf = requestAnimationFrame(this._onRaf))
                        }
                    }, {
                        key: "_unbindEvents",
                        value: function() {
                            var t, e, i, n;
                            this._mode !== f && this._mode !== _ || (null === (e = this.emitter) || void 0 === e || e.off("SiteScroll.start", this._onScrollStart), null === (i = this.emitter) || void 0 === i || i.off("SiteScroll.stop", this._onScrollStop), null === (n = this.emitter) || void 0 === n || n.off("SiteScroll.text-ticker", this._onScrollCall)), l.ZP.remove(this._onResize), this._wheel && (null === (t = this._wheel) || void 0 === t || t.off()), this._raf && cancelAnimationFrame(this._raf), this._raf = null
                        }
                    }, {
                        key: "_onScroll",
                        value: function(t) {
                            this._velocity.target = .005 * t, 0 !== this._direction && (this._velocity.target = Math.abs(this._velocity.target) * this._direction)
                        }
                    }, {
                        key: "_onRaf",
                        value: function() {
                            var t = this;
                            this.texts && (this._raf = requestAnimationFrame(this._onRaf), this._velocity.target *= .9, this._mode === f && (this._velocity.target > 0 ? this._velocity.target = Math.max(u, this._velocity.target) : this._velocity.target = Math.min(-.08, this._velocity.target)), this._velocity.current = (0, o.t7)(this._velocity.current, this._velocity.target, .2), this._progress += this._velocity.current, this._progress < -100 ? this._progress = this._progress + 100 : this._progress > 0 && (this._progress = this._progress - 100), this._inView && this.texts.forEach((function(e) {
                                return e.style.transform = "translate3d(".concat(t._progress, "%, 0, 0)")
                            })))
                        }
                    }, {
                        key: "_onScrollStart",
                        value: function() {
                            var t;
                            null === (t = this._wheel) || void 0 === t || t.on(), this._raf = requestAnimationFrame(this._onRaf)
                        }
                    }, {
                        key: "_onScrollStop",
                        value: function() {
                            var t;
                            null === (t = this._wheel) || void 0 === t || t.off(), this._raf && cancelAnimationFrame(this._raf), this._raf = null
                        }
                    }, {
                        key: "_onScrollCall",
                        value: function(t, e) {
                            e.el === this.el && (this._inView = "enter" === t)
                        }
                    }, {
                        key: "_onResize",
                        value: function() {
                            var t = (0, n.JA)(this.el),
                                e = (0, n.JA)(this.template);
                            if (!(t.width < 1 || e.width < 1))
                                for (var i = Math.ceil(t.width / e.width) + 1; this.texts.length < i;) {
                                    var r = this.template.cloneNode(!0);
                                    r.setAttribute("aria-hidden", !0), r.style.setProperty("--ticker-index", this.texts.length), this.texts.push(r), this.el.appendChild(r)
                                }
                        }
                    }, {
                        key: "_getDirection",
                        value: function() {
                            return this.el.classList.contains("--direction-left") ? -1 : this.el.classList.contains("--direction-both") ? 0 : this.el.classList.contains("--direction-right") ? 1 : void 0
                        }
                    }, {
                        key: "_getMode",
                        value: function() {
                            if (s.ai) return h;
                            switch (this.el.dataset.textTicker) {
                                case h:
                                    return h;
                                case _:
                                    return _;
                                default:
                                    return f
                            }
                        }
                    }]) && c(e.prototype, i), r && c(e, r), t
                }();
            const v = d;

            function y(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }

            function m(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function p(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function b(t) {
                return b = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, b(t)
            }

            function S(t, e) {
                return !e || "object" !== j(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function g(t, e) {
                return g = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, g(t, e)
            }

            function w(t) {
                return function(t) {
                    if (Array.isArray(t)) return y(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return y(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(i);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return y(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var j = function(t) {
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
                    var i, n = b(t);
                    if (e) {
                        var r = b(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return S(this, i)
                }
            }
            var x = new(function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && g(t, e)
                }(s, t);
                var e, i, r, o = k(s);

                function s() {
                    var t, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return m(this, s), (t = o.call(this)).initialized = !1, t.items = null, e && t.init(), t
                }
                return e = s, (i = [{
                    key: "name",
                    get: function() {
                        return "TextTicker"
                    }
                }, {
                    key: "init",
                    value: function() {
                        var t = this;
                        this.initialized = !0, this.items = w((0, n.$$)("[data-text-ticker]")).map((function(e) {
                            return new v(e, t.emitter)
                        }))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.items && this.items.forEach((function(t) {
                            return t.destroy()
                        })), this.initialized = !1, this.items = null
                    }
                }]) && p(e.prototype, i), r && p(e, r), s
            }(r.Z));
            const R = {
                instance: x
            }
        },
        "./src/js/utils/mobile.js": (t, e, i) => {
            i.d(e, {
                ai: () => n
            });
            var n = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
            window.matchMedia("(hover: none)").matches
        },
        "./src/js/utils/wheel.js": (t, e, i) => {
            i.d(e, {
                Z: () => r
            });
            var n = i("./src/js/utils/listener.js");
            const r = function(t) {
                var e, i, r = !1,
                    o = function(t) {
                        (e = t).cancelable && e.preventDefault(), r || (requestAnimationFrame(l), r = !0)
                    },
                    s = function() {
                        t(i, e), r = !1
                    },
                    l = function() {
                        if (e) {
                            var t = e.type;
                            "wheel" === t ? (i = e.wheelDeltaY || -1 * e.deltaY, s()) : "mousewheel" === t && (i = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta, s())
                        }
                    };
                return {
                    on: function() {
                        (0, n.on)(document, "mouseWheel", o)
                    },
                    off: function() {
                        (0, n.S1)(document, "mouseWheel", o)
                    }
                }
            }
        }
    }
]);
//# sourceMappingURL=src_js_modules_text-ticker_index_js.64d35f7cb7ba4129820a.bundle.js.map