"use strict";
(self.webpackChunkventriloc = self.webpackChunkventriloc || []).push([
    ["src_js_modules_pb-row-testimonials_index_js"], {
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
        "./src/js/modules/pb-row-testimonials/index.js": (t, e, n) => {
            n.r(e), n.d(e, {
                default: () => g,
                instance: () => k
            });
            var i = n("./src/js/utils/dom.js"),
                r = n("./src/js/modules/module/Module.js"),
                o = n("./node_modules/swiper/swiper.esm.js"),
                s = n("./src/js/utils/breakpoint.js"),
                u = n("./src/js/utils/viewport.js");

            function l(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            var a = ["(max-width: 1024px)"],
                c = {
                    centeredSlides: !1,
                    slidesOffsetBefore: 26,
                    freeMode: !1,
                    loop: !1,
                    slidesPerView: "auto",
                    pagination: {
                        el: ".swiper-pagination",
                        type: "bullets"
                    },
                    breakpoints: {
                        768: {
                            slidesOffsetBefore: 36
                        }
                    }
                };
            o.ZP.use([o.tl]);
            var f = function() {
                function t(e, n) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.el = e, this.emitter = n, this.sliderType = this.el.getAttribute("data-slider-type"), this._initializeSlider = this._initializeSlider.bind(this), this._createSlider = this._createSlider.bind(this), this.slider = (0, i.$)(".pb-row-testimonials__cardsWrap", this.el), this.swiper = null, "grid" == this.sliderType && (this._bp = new s.Z(a, this._initializeSlider)), this.init()
                }
                var e, n, r;
                return e = t, (n = [{
                    key: "init",
                    value: function() {
                        this._bp ? this._bp.run() : this._createSlider()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.swiper && this.swiper.destroy(), this._bp && this._bp.dispose(), this.sliderType = null, this.el = null, this.emitter = null, this.swiper = null
                    }
                }, {
                    key: "_initializeSlider",
                    value: function() {
                        this.slider && (u.Z.width > 1024 ? this._createSlider() : this.swiper && (this.swiper.destroy(), this.swiper = null))
                    }
                }, {
                    key: "_createSlider",
                    value: function() {
                        this.swiper || (this.swiper = new o.tq(this.slider, c))
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
                        var t;
                        null === (t = this._bp) || void 0 === t || t.on()
                    }
                }, {
                    key: "_unbindEvents",
                    value: function() {
                        var t;
                        null === (t = this._bp) || void 0 === t || t.off()
                    }
                }]) && l(e.prototype, n), r && l(e, r), t
            }();
            const h = f;

            function p(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i
            }

            function d(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function y(t, e) {
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

            function v(t, e) {
                return !e || "object" !== _(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function m(t, e) {
                return m = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, m(t, e)
            }

            function w(t) {
                return function(t) {
                    if (Array.isArray(t)) return p(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return p(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _ = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function j(t) {
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
                        var r = b(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return v(this, n)
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
                    }), e && m(t, e)
                }(s, t);
                var e, n, r, o = j(s);

                function s() {
                    var t, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return d(this, s), (t = o.call(this)).initialized = !1, t.items = null, e && t.init(), t
                }
                return e = s, (n = [{
                    key: "name",
                    get: function() {
                        return "PbRowTestimonials"
                    }
                }, {
                    key: "init",
                    value: function() {
                        var t = this;
                        this.initialized = !0, this.items = w((0, i.$$)("[data-pb-row-testimonials]")).map((function(e) {
                            return new h(e, t.emitter)
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
                }]) && y(e.prototype, n), r && y(e, r), s
            }(r.Z));
            const g = {
                instance: k
            }
        },
        "./src/js/utils/breakpoint.js": (t, e, n) => {
            n.d(e, {
                Z: () => i
            });
            const i = function(t, e) {
                var n, i = function(t) {
                        n = t, o || (requestAnimationFrame(s), o = !0)
                    },
                    r = t.map((function(t) {
                        return window.matchMedia(t)
                    })),
                    o = !1,
                    s = function() {
                        e(n), o = !1
                    };
                return {
                    dispose: function() {
                        o = !0, n = null, r = null
                    },
                    on: function() {
                        r.forEach((function(t) {
                            return t.addListener(i)
                        }))
                    },
                    off: function() {
                        r.forEach((function(t) {
                            return t.removeListener(i)
                        }))
                    },
                    run: s
                }
            }
        },
        "./src/js/utils/viewport.js": (t, e, n) => {
            n.d(e, {
                Z: () => i
            });
            const i = {
                get width() {
                    return innerWidth
                },
                get height() {
                    return innerHeight
                },
                get devicePixelRatio() {
                    return devicePixelRatio || 1
                }
            }
        }
    }
]);
//# sourceMappingURL=src_js_modules_pb-row-testimonials_index_js.4576a71b27b3b8eb6bcf.bundle.js.map