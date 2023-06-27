"use strict";
(self.webpackChunkventriloc = self.webpackChunkventriloc || []).push([
    ["src_js_modules_pb-row-hero_index_js"], {
        "./src/js/modules/module/Module.js": (t, e, n) => {
            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
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
                }]) && i(e.prototype, n), o && i(e, o), t
            }()
        },
        "./src/js/modules/pb-row-hero/index.js": (t, e, n) => {
            n.r(e), n.d(e, {
                default: () => E,
                instance: () => k
            });
            var i = n("./src/js/utils/dom.js"),
                o = n("./src/js/modules/module/Module.js"),
                r = n("./node_modules/lottie-web/build/player/lottie.js"),
                s = n.n(r);
            var a = n("./src/js/scroll/constants.js"),
                l = n("./src/js/utils/listener.js"),
                u = n("./src/js/utils/mobile.js"),
                c = n("./src/js/utils/resize.js"),
                h = n("./src/js/utils/sleep.js");

            function f(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            var p = "--js-playing",
                y = function() {
                    function t(e, n) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.el = e, this.emitter = n, this.animation = (0, i.$)(".pb-row-hero__animation", this.el), this.animationScale = (0, i.$)(".pb-row-hero__animation__scale", this.el), this.stripes = (0, i.$)(".pb-row-hero__animation__stripes", this.animation), this.lottie = (0, i.$)(".pb-row-hero__animation__lottie", this.animation), this._firstInViewEnter = !0, this._lottie = null, this._stripes = [], this._onResize = this._onResize.bind(this), this._onScrollCall = this._onScrollCall.bind(this), this._onLottieTransitionEnd = this._onLottieTransitionEnd.bind(this), this.init()
                    }
                    var e, n, o;
                    return e = t, (n = [{
                        key: "init",
                        value: function() {
                            for (var t = 3; t < 5; t++) this._stripes.push({
                                path: (0, i.$)("path:nth-child(".concat(t, ")"), this.stripes),
                                beginPath: (0, i.$)(".pb-row-hero__stripesBegin path:nth-child(".concat(t, ")"), this.el),
                                endPath: (0, i.$)(".pb-row-hero__stripesEnd path:nth-child(".concat(t, ")"), this.el)
                            });
                            var e = (0, i.$)("script", this.lottie);
                            if (e) {
                                var n = e.textContent.trim(),
                                    o = JSON.parse(n);
                                o && (this.animationData = o)
                            }
                            this.animationData && (this._lottie = s().loadAnimation({
                                container: this.lottie,
                                animationData: this.animationData,
                                autoplay: !1,
                                loop: !1,
                                renderer: "svg"
                            })), this._bindEvents(), this._onResize()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this._lottie && this._lottie.destroy(), this.el = null, this.emitter = null, this.animation = null, this.animationData = null, this.animationScale = null, this.lottie = null, this._firstInViewEnter = null, this._lottie = null, this._stripes = null, this._onResize = null, this._onScrollCall = null, this._onLottieTransitionEnd = null
                        }
                    }, {
                        key: "start",
                        value: function() {
                            this._onResize(), this.lottie && this.lottie.style.setProperty("--play-delay", "0ms")
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this._unbindEvents()
                        }
                    }, {
                        key: "_bindEvents",
                        value: function() {
                            c.ZP.add(this._onResize, -1), this.emitter.on("SiteScroll.pb-row-hero", this._onScrollCall), (0, l.on)(this.lottie, "transitionend", this._onLottieTransitionEnd)
                        }
                    }, {
                        key: "_unbindEvents",
                        value: function() {
                            c.ZP.remove(this._onResize), this.emitter.off("SiteScroll.pb-row-hero", this._onScrollCall), (0, l.S1)(this.lottie, "transitionend", this._onLottieTransitionEnd)
                        }
                    }, {
                        key: "_onResize",
                        value: function() {
                            var t = (0, i.JA)(this.animation).width;
                            this.animationScale.style.setProperty("--animation-scale", Math.min(t / 1060, 1)), this._stripes.forEach((function(t) {
                                var e = t.beginPath,
                                    n = t.endPath,
                                    i = t.path,
                                    o = getComputedStyle(e);
                                if (o.getPropertyValue("--scale")) {
                                    var r = getComputedStyle(n);
                                    i.style.setProperty("--beginScale", parseFloat(o.getPropertyValue("--scale"))), i.style.setProperty("--endScale", parseFloat(r.getPropertyValue("--scale"))), i.style.setProperty("--beginLength", o.getPropertyValue("--length")), i.style.setProperty("--endLength", r.getPropertyValue("--length"))
                                }
                            }))
                        }
                    }, {
                        key: "_onScrollCall",
                        value: function(t, e, n) {
                            if (this._lottie && e.el === this.lottie)
                                if (u.ai)
                                    if (t === a.gY && this._firstInViewEnter) {
                                        var i = this;
                                        this._firstInViewEnter = !1;
                                        var o = parseInt(getComputedStyle(this.lottie).getPropertyValue("--play-delay"));
                                        (0, h._)(o).then((function() {
                                            return i._lottie.play()
                                        }))
                                    } else this._lottie[t === a.gY ? "play" : "pause"]();
                            else t === a.gY ? n.direction === a.C2 ? (this._lottie.goToAndPlay(0), this.lottie.classList.add(p)) : this._lottie.play() : n.direction === a.C2 ? this._lottie.pause() : this.lottie.classList.remove(p)
                        }
                    }, {
                        key: "_onLottieTransitionEnd",
                        value: function() {
                            this.lottie.classList.contains(p) || this._lottie && this._lottie.pause()
                        }
                    }]) && f(e.prototype, n), o && f(e, o), t
                }();
            const d = y;

            function m(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i
            }

            function _(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function v(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function b(t) {
                return b = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, b(t)
            }

            function g(t, e) {
                return !e || "object" !== P(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function w(t, e) {
                return w = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, w(t, e)
            }

            function j(t) {
                return function(t) {
                    if (Array.isArray(t)) return m(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return m(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var P = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function S(t) {
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
                    var n, i = b(t);
                    if (e) {
                        var o = b(this).constructor;
                        n = Reflect.construct(i, arguments, o)
                    } else n = i.apply(this, arguments);
                    return g(this, n)
                }
            }
            var k = new(function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && w(t, e)
                }(s, t);
                var e, n, o, r = S(s);

                function s() {
                    var t, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return _(this, s), (t = r.call(this)).initialized = !1, t.items = null, e && t.init(), t
                }
                return e = s, (n = [{
                    key: "name",
                    get: function() {
                        return "PbRowHero"
                    }
                }, {
                    key: "init",
                    value: function() {
                        var t = this;
                        this.initialized = !0, this.items = j((0, i.$$)("[data-pb-row-hero]")).map((function(e) {
                            return new d(e, t.emitter)
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
                }]) && v(e.prototype, n), o && v(e, o), s
            }(o.Z));
            const E = {
                instance: k
            }
        },
        "./src/js/scroll/constants.js": (t, e, n) => {
            n.d(e, {
                zD: () => i,
                dI: () => o,
                gY: () => r,
                Hg: () => s,
                C2: () => a,
                uO: () => l,
                y0: () => u,
                ZC: () => c,
                sp: () => h,
                zM: () => f,
                SJ: () => p,
                n3: () => y
            });
            var i = 1e3 / 60,
                o = "is-inview",
                r = "enter",
                s = "exit",
                a = "down",
                l = "up",
                u = "--js-scroll-down",
                c = "--js-scroll-up",
                h = 50,
                f = "--js-scroll-min",
                p = "--js-scrollbar-hidden",
                y = {
                    offset: 0,
                    smooth: !0,
                    callback: !1
                }
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
//# sourceMappingURL=src_js_modules_pb-row-hero_index_js.559d8166efacb9ce512c.bundle.js.map