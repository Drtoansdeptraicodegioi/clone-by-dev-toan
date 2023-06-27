"use strict";
(self.webpackChunkventriloc = self.webpackChunkventriloc || []).push([
    ["src_js_ui_site-contact-panel_index_js"], {
        "./src/js/ui/site-contact-panel/index.js": (t, e, i) => {
            i.r(e), i.d(e, {
                default: () => h,
                instance: () => c
            });
            var n = i("./src/js/utils/dom.js"),
                s = i("./src/js/utils/listener.js");

            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function l(t) {
                return function(t) {
                    if (Array.isArray(t)) return o(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return o(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(i);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return o(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var c = new(function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    r(this, t), this.initialized = !1, this.opened = !1, this.el = null, this._onClick = this._onClick.bind(this), this._open = this._open.bind(this), this._onLeave = this._onLeave.bind(this), this._close = this._close.bind(this), this._onCloseCompleted = this._onCloseCompleted.bind(this), this._toggle = this._toggle.bind(this), e && this.init()
                }
                var e, i, o;
                return e = t, (i = [{
                    key: "name",
                    get: function() {
                        return "SiteContactPanel"
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.initialized = !0, this.el = (0, n.$)("[data-site-contact-panel]"), this.backdrop = (0, n.$)(".site-contact-panel__backdrop", this.el), this.triggers = l((0, n.$$)('[aria-controls="'.concat(this.el.id, '"]'))), this._bindEvents()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this._unbindEvents(), this.el = null, this.initialized = !1, this.opened = !1, this.backdrop = null, this.container = null, this.triggers = null
                    }
                }, {
                    key: "_bindEvents",
                    value: function() {
                        this.triggers && (0, s.on)(this.triggers, "click", this._onClick), this.backdrop && (0, s.on)(this.backdrop, "click", this._onLeave), this.emitter.on("SiteSuperMenu.open", this._onLeave), this.emitter.on("SiteNav.open", this._onLeave)
                    }
                }, {
                    key: "_unbindEvents",
                    value: function() {
                        this.triggers && (0, s.S1)(this.triggers, "click", this._onClick), this.backdrop && ((0, s.S1)(this.backdrop, "click", this._onLeave), (0, s.S1)(this.backdrop, "transitionend", this._onCloseCompleted)), this.emitter.off("SiteSuperMenu.open", this._onLeave), this.emitter.off("SiteNav.open", this._onLeave)
                    }
                }, {
                    key: "_onClick",
                    value: function(t) {
                        t && (t.preventDefault(), t.stopImmediatePropagation()), this._toggle()
                    }
                }, {
                    key: "_onLeave",
                    value: function() {
                        this._close()
                    }
                }, {
                    key: "_open",
                    value: function() {
                        this.opened = !0, this.backdrop && (0, s.S1)(this.backdrop, "transitionend", this._onCloseCompleted), this.el.setAttribute("aria-hidden", !1), n.d1.classList.add("--js-site-contact-panel-opened"), this.emitter.emit("SiteScroll.stop", !0), this.emitter.emit("SiteContactPanel.open"), this.triggers.forEach((function(t) {
                            t.setAttribute("aria-expanded", !0)
                        }))
                    }
                }, {
                    key: "_close",
                    value: function() {
                        this.opened = !1, this.backdrop && ((0, s.S1)(this.backdrop, "transitionend", this._onCloseCompleted), (0, s.on)(this.backdrop, "transitionend", this._onCloseCompleted)), this.el.setAttribute("aria-hidden", !0), n.d1.classList.remove("--js-site-contact-panel-opened"), this.backdrop || this.emitter.emit("SiteScroll.start"), this.emitter.emit("SiteContactPanel.close"), this.triggers.forEach((function(t) {
                            t.setAttribute("aria-expanded", !1)
                        }))
                    }
                }, {
                    key: "_onCloseCompleted",
                    value: function() {
                        (0, s.S1)(this.backdrop, "transitionend", this._onCloseCompleted), this.el.setAttribute("aria-hidden", !0), this.emitter.emit("SiteScroll.start")
                    }
                }, {
                    key: "_toggle",
                    value: function() {
                        this.opened ? this._close() : this._open()
                    }
                }]) && a(e.prototype, i), o && a(e, o), t
            }());
            const h = {
                instance: c
            }
        }
    }
]);
//# sourceMappingURL=src_js_ui_site-contact-panel_index_js.bd408c82b8466dd9001f.bundle.js.map