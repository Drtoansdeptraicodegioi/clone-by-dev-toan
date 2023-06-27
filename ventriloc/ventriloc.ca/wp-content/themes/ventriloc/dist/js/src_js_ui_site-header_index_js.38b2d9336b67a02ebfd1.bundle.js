"use strict";
(self.webpackChunkventriloc = self.webpackChunkventriloc || []).push([
    ["src_js_ui_site-header_index_js"], {
        "./src/js/ui/site-header/index.js": (e, i, n) => {
            n.r(i), n.d(i, {
                default: () => r,
                instance: () => l
            });
            var t = n("./src/js/utils/dom.js");

            function s(e, i) {
                if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, i) {
                for (var n = 0; n < i.length; n++) {
                    var t = i[n];
                    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
                }
            }
            var l = new(function() {
                function e() {
                    var i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    s(this, e), this.initialized = !1, this.el = null, i && this.init()
                }
                var i, n, l;
                return i = e, (n = [{
                    key: "name",
                    get: function() {
                        return "SiteHeader"
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.initialized = !0, this.el = (0, t.$)("[data-site-header]"), this.initialize(), this._bindEvents()
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        t.d1.classList.add("--js-site-header-initialized")
                    }
                }, {
                    key: "_bindEvents",
                    value: function() {}
                }, {
                    key: "_unbindEvents",
                    value: function() {}
                }, {
                    key: "destroy",
                    value: function() {
                        this._unbindEvents(), this.el = null, this.initialized = !1
                    }
                }]) && a(i.prototype, n), l && a(i, l), e
            }());
            const r = {
                instance: l
            }
        }
    }
]);
//# sourceMappingURL=src_js_ui_site-header_index_js.38b2d9336b67a02ebfd1.bundle.js.map