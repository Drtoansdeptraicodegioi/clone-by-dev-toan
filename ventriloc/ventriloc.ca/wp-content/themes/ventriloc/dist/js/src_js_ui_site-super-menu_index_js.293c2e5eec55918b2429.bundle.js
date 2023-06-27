"use strict";
(self.webpackChunkventriloc = self.webpackChunkventriloc || []).push([
    ["src_js_ui_site-super-menu_index_js"], {
        "./src/js/ui/site-super-menu/index.js": (t, e, i) => {
            i.r(e), i.d(e, {
                default: () => _,
                instance: () => v
            });
            var n = i("./src/js/utils/dom.js"),
                s = i("./src/js/utils/listener.js"),
                r = i("./src/js/utils/mobile.js"),
                o = i("./src/js/utils/throttle.js"),
                a = i("./src/js/utils/breakpoint.js"),
                l = i("./src/js/utils/resize.js");

            function h(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function d(t) {
                return function(t) {
                    if (Array.isArray(t)) return h(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return h(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(i);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return h(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p = ["(max-width: 1200px)"];
            var v = new(function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    u(this, t), this.initialized = !1, this.opened = !1, this.el = null, this.currentId = null, this.currentDelay = 450, this.transitionDelay = 0, this._onClick = this._onClick.bind(this), this._open = this._open.bind(this), this._selectCurrentNav = this._selectCurrentNav.bind(this), this._onLeave = this._onLeave.bind(this), this._close = this._close.bind(this), this._onCloseCompleted = this._onCloseCompleted.bind(this), this._toggle = this._toggle.bind(this), this._setSiteHeaderWidth = this._setSiteHeaderWidth.bind(this), e && this.init()
                }
                var e, i, h;
                return e = t, (i = [{
                    key: "name",
                    get: function() {
                        return "SiteSuperMenu"
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.initialized = !0, this.el = (0, n.$)("[data-site-super-menu]"), this.backdrop = (0, n.$)(".site-super-menu__backdrop", this.el), this.container = (0, n.$)(".site-super-menu__container", this.el), this.triggers = d((0, n.$$)('[aria-controls="'.concat(this.el.id, '"]'))), this.navs = d((0, n.$$)(".site-super-menu__nav", this.el)), this.siteHeader = (0, n.$)(".site-header"), this.navThrottler = new o.Z({
                            cb: this._toggle,
                            delay: 250,
                            onlyAtEnd: !1
                        }), this._bp = new a.Z(p, this._setSiteHeaderWidth), this._bp.run(), this._bindEvents()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this._unbindEvents(), this._bp && this._bp.dispose(), this._bp = null, this.el = null, this.initialized = !1, this.opened = !1, this.backdrop = null, this.container = null, this.triggers = null, this.navs = null, this.siteHeader = null, this.navThrottler && this.navThrottler.dispose(), this.navThrottler = null, this.currentId = null, this.currentDelay = null
                    }
                }, {
                    key: "_bindEvents",
                    value: function() {
                        var t;
                        null === (t = this._bp) || void 0 === t || t.on(), l.ZP.add(this._setSiteHeaderWidth), r.ai ? (this.triggers && (0, s.on)(this.triggers, "click", this._onClick), this.backdrop && (0, s.on)(this.backdrop, "click", this._onLeave)) : (this.triggers && (0, s.on)(this.triggers, "click", this._onClick), this.backdrop && (0, s.on)(this.backdrop, "mouseenter", this._onLeave)), this.emitter.on("SiteScroll.direction", this._onLeave), this.emitter.on("SiteContactPanel.open", this._onLeave)
                    }
                }, {
                    key: "_unbindEvents",
                    value: function() {
                        var t;
                        null === (t = this._bp) || void 0 === t || t.off(), l.ZP.remove(this._setSiteHeaderWidth), r.ai ? (this.triggers && (0, s.S1)(this.triggers, "click", this._onClick), this.backdrop && (0, s.S1)(this.backdrop, "click", this._onLeave)) : (this.triggers && (0, s.S1)(this.triggers, "click", this._onClick), this.backdrop && (0, s.S1)(this.backdrop, "mouseenter", this._onLeave)), (0, s.S1)(this.backdrop, "transitionend", this._onCloseCompleted), this.emitter.off("SiteScroll.direction", this._onLeave), this.emitter.off("SiteContactPanel.open", this._onLeave)
                    }
                }, {
                    key: "_onClick",
                    value: function(t) {
                        t && (t.preventDefault(), t.stopImmediatePropagation());
                        var e = t.currentTarget.getAttribute("data-nav-id");
                        return this.currentId = this.currentId !== e ? e : null, this._toggle(), !1
                    }
                }, {
                    key: "_selectCurrentNav",
                    value: function() {
                        var t = this;
                        this.navs.forEach((function(e) {
                            e.getAttribute("data-id") == t.currentId ? e.setAttribute("aria-hidden", !1) : e.setAttribute("aria-hidden", !0)
                        })), this.triggers.forEach((function(e) {
                            e.getAttribute("data-nav-id") == t.currentId ? e.setAttribute("aria-expanded", !0) : e.setAttribute("aria-expanded", !1)
                        }))
                    }
                }, {
                    key: "_onLeave",
                    value: function() {
                        this.currentId = null, this.navThrottler.init()
                    }
                }, {
                    key: "_onCloseCompleted",
                    value: function() {
                        (0, s.S1)(this.backdrop, "transitionend", this._onCloseCompleted), this.el.setAttribute("aria-hidden", !0)
                    }
                }, {
                    key: "_open",
                    value: function() {
                        var t = this;
                        this.opened = !0, (0, s.S1)(this.backdrop, "transitionend", this._onCloseCompleted), this.el.setAttribute("aria-hidden", !1), n.d1.classList.add("--js-site-super-menu-opened"), this.emitter.emit("SiteSuperMenu.open"), setTimeout((function() {
                            t.currentDelay = 0, t.el.style.setProperty("--menu-delay", "".concat(t.currentDelay, "ms")), t.transitionDelay = 450, t.el.style.setProperty("--transition-delay", "".concat(t.transitionDelay, "ms"))
                        }), 50)
                    }
                }, {
                    key: "_close",
                    value: function() {
                        this.opened = !1, (0, s.S1)(this.backdrop, "transitionend", this._onCloseCompleted), (0, s.on)(this.backdrop, "transitionend", this._onCloseCompleted), n.d1.classList.remove("--js-site-super-menu-opened"), this.emitter.emit("SiteSuperMenu.close"), this.currentDelay = 450, this.el.style.setProperty("--menu-delay", "".concat(this.currentDelay, "ms")), this.transitionDelay = 0, this.el.style.setProperty("--transition-delay", "".concat(this.transitionDelay, "ms"))
                    }
                }, {
                    key: "_toggle",
                    value: function() {
                        this._selectCurrentNav(), this.currentId ? this._open() : this._close()
                    }
                }, {
                    key: "_setSiteHeaderWidth",
                    value: function() {
                        var t = (0, n.$)(".site-header__menu", this.siteHeader);
                        this.el.style.setProperty("--site-header-menu-width", "".concat(t.clientWidth, "px"))
                    }
                }]) && c(e.prototype, i), h && c(e, h), t
            }());
            const _ = {
                instance: v
            }
        },
        "./src/js/utils/breakpoint.js": (t, e, i) => {
            i.d(e, {
                Z: () => n
            });
            const n = function(t, e) {
                var i, n = function(t) {
                        i = t, r || (requestAnimationFrame(o), r = !0)
                    },
                    s = t.map((function(t) {
                        return window.matchMedia(t)
                    })),
                    r = !1,
                    o = function() {
                        e(i), r = !1
                    };
                return {
                    dispose: function() {
                        r = !0, i = null, s = null
                    },
                    on: function() {
                        s.forEach((function(t) {
                            return t.addListener(n)
                        }))
                    },
                    off: function() {
                        s.forEach((function(t) {
                            return t.removeListener(n)
                        }))
                    },
                    run: o
                }
            }
        },
        "./src/js/utils/mobile.js": (t, e, i) => {
            i.d(e, {
                ai: () => n
            });
            var n = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
            window.matchMedia("(hover: none)").matches
        }
    }
]);
//# sourceMappingURL=src_js_ui_site-super-menu_index_js.293c2e5eec55918b2429.bundle.js.map