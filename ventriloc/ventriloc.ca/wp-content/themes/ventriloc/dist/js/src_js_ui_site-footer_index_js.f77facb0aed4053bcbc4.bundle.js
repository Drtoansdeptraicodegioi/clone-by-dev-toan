"use strict";
(self.webpackChunkventriloc = self.webpackChunkventriloc || []).push([
    ["src_js_ui_site-footer_index_js"], {
        "./src/js/ui/site-footer/index.js": (e, i, t) => {
            t.r(i), t.d(i, {
                default: () => h,
                instance: () => c
            });
            var s = t("./src/js/utils/dom.js"),
                n = t("./src/js/utils/resize.js"),
                r = t("./src/js/utils/viewport.js");

            function l(e, i) {
                if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, i) {
                for (var t = 0; t < i.length; t++) {
                    var s = i[t];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }
            var c = new(function() {
                function e() {
                    var i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    l(this, e), this.initialized = !1, this.el = null, this._onResize = this._onResize.bind(this), i && this.init()
                }
                var i, t, c;
                return i = e, (t = [{
                    key: "name",
                    get: function() {
                        return "SiteHeader"
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.initialized = !0, this.el = (0, s.$)("[data-site-footer]"), this.el && (this.stickyEl = (0, s.$)(".site-footer__sticky", this.el), this._onResize(), this._bindEvents())
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this._unbindEvents(), this.initialized = !1, this.el = null, this.stickyEl = null
                    }
                }, {
                    key: "_bindEvents",
                    value: function() {
                        n.ZP.add(this._onResize)
                    }
                }, {
                    key: "_unbindEvents",
                    value: function() {
                        n.ZP.remove(this._onResize)
                    }
                }, {
                    key: "_onResize",
                    value: function() {
                        this.el && this.stickyEl && this.el.style.setProperty("--sticky-height", "".concat((0, s.JA)(r.Z.width < 768 ? this.stickyEl : this.el).height, "px"))
                    }
                }]) && o(i.prototype, t), c && o(i, c), e
            }());
            const h = {
                instance: c
            }
        },
        "./src/js/utils/viewport.js": (e, i, t) => {
            t.d(i, {
                Z: () => s
            });
            const s = {
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
//# sourceMappingURL=src_js_ui_site-footer_index_js.f77facb0aed4053bcbc4.bundle.js.map