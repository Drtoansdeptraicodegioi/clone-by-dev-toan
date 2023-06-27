/*! For license information please see src_js_ui_gdpr_index_js.a652537a54e9ee04a5b0.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkventriloc = self.webpackChunkventriloc || []).push([
    ["src_js_ui_gdpr_index_js"], {
        "./src/js/components/Accordion.js": (t, e, n) => {
            n.d(e, {
                Z: () => p
            });
            var i = n("./node_modules/eventemitter2/lib/eventemitter2.js"),
                s = n.n(i),
                o = n("./src/js/utils/listener.js");

            function r(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function c(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function u(t) {
                return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, u(t)
            }

            function h(t, e) {
                return !e || "object" !== d(e) && "function" != typeof e ? r(t) : e
            }

            function l(t, e) {
                return l = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, l(t, e)
            }
            var d = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function _(t) {
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
                    var n, i = u(t);
                    if (e) {
                        var s = u(this).constructor;
                        n = Reflect.construct(i, arguments, s)
                    } else n = i.apply(this, arguments);
                    return h(this, n)
                }
            }
            const p = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && l(t, e)
                }(u, t);
                var e, n, i, s = _(u);

                function u(t, e) {
                    var n, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return c(this, u), (n = s.call(this)).button = t, n.panel = e, n.parent = t.closest(".accordions__accordion"), n._toggled = "true" == n.button.getAttribute("aria-expanded"), n._closeOnTapOut = i, n._onClick = n._onClick.bind(r(n)), n._onClickPanel = n._onClickPanel.bind(r(n)), n._onClickOutside = n._onClickOutside.bind(r(n)), n.init(), n
                }
                return e = u, n = [{
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
                        this.button && (0, o.on)(this.button, "click", this._onClick), this.panel && (0, o.on)(this.panel, "click", this._onClickPanel)
                    }
                }, {
                    key: "_unbindEvents",
                    value: function() {
                        this.button && (0, o.S1)(this.button, "click", this._onClick), this.panel && (0, o.S1)(this.panel, "click", this._onClickPanel), this._closeOnTapOut && window.removeEventListener("click", this._onClickOutside)
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
                }], n && a(e.prototype, n), i && a(e, i), u
            }(s())
        },
        "./src/js/ui/gdpr/index.js": (t, e, n) => {
            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) t[i] = n[i]
                }
                return t
            }
            n.r(e), n.d(e, {
                default: () => B,
                instance: () => C
            });
            var s = function t(e, n) {
                function s(t, s, o) {
                    if ("undefined" != typeof document) {
                        "number" == typeof(o = i({}, n, o)).expires && (o.expires = new Date(Date.now() + 864e5 * o.expires)), o.expires && (o.expires = o.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                        var r = "";
                        for (var c in o) o[c] && (r += "; " + c, !0 !== o[c] && (r += "=" + o[c].split(";")[0]));
                        return document.cookie = t + "=" + e.write(s, t) + r
                    }
                }
                return Object.create({
                    set: s,
                    get: function(t) {
                        if ("undefined" != typeof document && (!arguments.length || t)) {
                            for (var n = document.cookie ? document.cookie.split("; ") : [], i = {}, s = 0; s < n.length; s++) {
                                var o = n[s].split("="),
                                    r = o.slice(1).join("=");
                                try {
                                    var c = decodeURIComponent(o[0]);
                                    if (i[c] = e.read(r, c), t === c) break
                                } catch (t) {}
                            }
                            return t ? i[t] : i
                        }
                    },
                    remove: function(t, e) {
                        s(t, "", i({}, e, {
                            expires: -1
                        }))
                    },
                    withAttributes: function(e) {
                        return t(this.converter, i({}, this.attributes, e))
                    },
                    withConverter: function(e) {
                        return t(i({}, this.converter, e), this.attributes)
                    }
                }, {
                    attributes: {
                        value: Object.freeze(n)
                    },
                    converter: {
                        value: Object.freeze(e)
                    }
                })
            }({
                read: function(t) {
                    return '"' === t[0] && (t = t.slice(1, -1)), t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
                },
                write: function(t) {
                    return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
                }
            }, {
                path: "/"
            });

            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            var r = "denied",
                c = "granted",
                a = "pending",
                u = "closed",
                h = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this._consent_analytics = r, this._consent_ads = r, this._consent_status = a, this._consent_user_id = null;
                        var e = s.get("consent_analytics"),
                            n = s.get("consent_ads"),
                            i = s.get("consent_status"),
                            o = s.get("consent_user_id");
                        e && (this._consent_analytics = this._validateConsent(e)), n && (this._consent_ads = this._validateConsent(n)), i && (this._consent_status = this._validateStatus(i)), o && (this._consent_user_id = o), this._pushDataLayer(!1)
                    }
                    var e, n, i;
                    return e = t, n = [{
                        key: "save",
                        value: function(t, e) {
                            t = this._validateConsent(t), e = this._validateConsent(e);
                            var n = t !== this._consent_analytics || e !== this._consent_ads;
                            this._consent_analytics = t, this._consent_ads = e, this._consent_status = u, s.set("consent_analytics", this._consent_analytics), s.set("consent_ads", this._consent_ads), s.set("consent_status", this._consent_status), this._pushDataLayer(n)
                        }
                    }, {
                        key: "_pushDataLayer",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                e = this._consent_analytics === r && this._consent_ads === r ? 0 : 1;
                            (e || t) && (this._consent_user_id || (this._consent_user_id = this._createUserID(), s.set("consent_user_id", this._consent_user_id)), window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                                event: "consent_submit",
                                user_id: this._consent_user_id,
                                consent_accept: e
                            }))
                        }
                    }, {
                        key: "_validateConsent",
                        value: function(t) {
                            return t === c ? c : r
                        }
                    }, {
                        key: "_validateStatus",
                        value: function(t) {
                            return t === u ? u : a
                        }
                    }, {
                        key: "_createUserID",
                        value: function() {
                            var t = self.crypto.getRandomValues(new Uint16Array(1))[0],
                                e = Date.now();
                            return "".concat(t, "-").concat(e)
                        }
                    }, {
                        key: "consent_analytics",
                        get: function() {
                            return this._consent_analytics
                        }
                    }, {
                        key: "consent_ads",
                        get: function() {
                            return this._consent_ads
                        }
                    }, {
                        key: "consent_status",
                        get: function() {
                            return this._consent_status
                        }
                    }, {
                        key: "consent_user_id",
                        get: function() {
                            return this._consent_user_id
                        }
                    }], n && o(e.prototype, n), i && o(e, i), t
                }();
            const l = new h;
            var d = n("./src/js/utils/dom.js"),
                _ = n("./src/js/utils/listener.js"),
                p = n("./src/js/components/Accordion.js");

            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i
            }

            function v(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function k(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function y(t) {
                return function(t) {
                    if (Array.isArray(t)) return f(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return f(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = "#gdpr",
                b = "--js-more-options",
                m = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        v(this, t), this.initialized = !1, this.el = null, this._opened = !1, this._expanded = !1, this._acceptAll = this._acceptAll.bind(this), this._saveCustomized = this._saveCustomized.bind(this), this._rejectAll = this._rejectAll.bind(this), this._onMoreClick = this._onMoreClick.bind(this), this._onBackClick = this._onBackClick.bind(this), this._openBnd = this.open.bind(this), this._setHeight = this._setHeight.bind(this), e && this.init()
                    }
                    var e, n, i;
                    return e = t, (n = [{
                        key: "name",
                        get: function() {
                            return "GDPR"
                        }
                    }, {
                        key: "init",
                        value: function() {
                            this.initialized || (this.initialized = !0, this.el = (0, d.$)(g), this.acceptBtn = (0, d.$)(".gdpr__acceptBtn", this.el), this.rejectBtn = (0, d.$)(".gdpr__rejectBtn", this.el), this.saveCloseBtn = (0, d.$)(".gdpr__saveCloseBtn", this.el), this.inputs = y((0, d.$$)('.gdpr__input input[type="checkbox"]', this.el)), this.moreBtn = (0, d.$)(".gdpr__moreBtn", this.el), this.backBtn = (0, d.$)(".gdpr__backBtn", this.el), this.homeWrap = (0, d.$)(".gdpr__homeWrap", this.el), this.optionsWrap = (0, d.$)(".gdpr__optionsWrap", this.el), this.wraps = [this.homeWrap, this.optionsWrap], this.userId = (0, d.$)(".gdpr__userId", this.el), this.accordionBtn = (0, d.$)(".gdpr__accordion__btn", this.el), this.accordionPanel = (0, d.$)(".gdpr__accordion__panel", this.el), this.accordion = this.accordionBtn && this.accordionPanel ? new p.Z(this.accordionBtn, this.accordionPanel) : null, this.toggleBtns = null, this.initInputs(), l.consent_status === a && this.open(), this._opened && this._setHeight(), this.emitter && this.emitter.on("GDPR.open", this._openBnd))
                        }
                    }, {
                        key: "start",
                        value: function() {
                            this.toggleBtns = y((0, d.$$)('[aria-controls="'.concat(g, '"]'))), this.toggleBtns && (0, _.on)(this.toggleBtns, "click", this._openBnd)
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.toggleBtns && (0, _.S1)(this.toggleBtns, "click", this._openBnd), this.toggleBtns = null
                        }
                    }, {
                        key: "open",
                        value: function() {
                            this._opened || (this._opened = !0, this._bindEvents(), this._updateUserId(), this.el && (this.el.setAttribute("aria-hidden", !1), this._setHeight()))
                        }
                    }, {
                        key: "close",
                        value: function() {
                            this._opened && (this._opened = !1, this.el && (this.el.setAttribute("aria-hidden", !0), this.el.classList.remove(b)), this.optionsWrap && this.optionsWrap.setAttribute("aria-hidden", !0), this.homeWrap && this.homeWrap.setAttribute("aria-hidden", !1), this._unbindEvents())
                        }
                    }, {
                        key: "initInputs",
                        value: function() {
                            var t = l.consent_status === a,
                                e = [],
                                n = this.inputs.find((function(t) {
                                    return "consent_analytics" === t.name
                                })),
                                i = this.inputs.find((function(t) {
                                    return "consent_ads" === t.name
                                }));
                            n && e.push(n), i && e.push(i), t ? e.forEach((function(t) {
                                return t.checked = "checked"
                            })) : (n && l.consent_analytics === c && (n.checked = "checked"), i && l.consent_ads === c && (i.checked = "checked"))
                        }
                    }, {
                        key: "_bindEvents",
                        value: function() {
                            this.acceptBtn && (0, _.on)(this.acceptBtn, "click", this._acceptAll), this.saveCloseBtn && (0, _.on)(this.saveCloseBtn, "click", this._saveCustomized), this.rejectBtn && (0, _.on)(this.rejectBtn, "click", this._rejectAll), this.moreBtn && (0, _.on)(this.moreBtn, "click", this._onMoreClick), this.backBtn && (0, _.on)(this.backBtn, "click", this._onBackClick), this.accordion && this.accordion.on("open", this._setHeight), this.accordion && this.accordion.on("close", this._setHeight)
                        }
                    }, {
                        key: "_unbindEvents",
                        value: function() {
                            this.acceptBtn && (0, _.S1)(this.acceptBtn, "click", this._acceptAll), this.saveCloseBtn && (0, _.S1)(this.saveCloseBtn, "click", this._saveCustomized), this.rejectBtn && (0, _.S1)(this.rejectBtn, "click", this._rejectAll), this.moreBtn && (0, _.S1)(this.moreBtn, "click", this._onMoreClick), this.backBtn && (0, _.S1)(this.backBtn, "click", this._onBackClick)
                        }
                    }, {
                        key: "_updateUserId",
                        value: function() {
                            this.userId && l.consent_user_id && (this.userId.textContent = this.userId.textContent.replace("%s", l.consent_user_id), this.userId.setAttribute("aria-hidden", !1))
                        }
                    }, {
                        key: "_acceptAll",
                        value: function() {
                            this.inputs && this.inputs.forEach((function(t) {
                                return t.checked = "checked"
                            })), l.save(c, c), this.close(), this._updateUserId()
                        }
                    }, {
                        key: "_saveCustomized",
                        value: function() {
                            var t = this.inputs.find((function(t) {
                                    return "consent_analytics" === t.name
                                })),
                                e = this.inputs.find((function(t) {
                                    return "consent_ads" === t.name
                                })),
                                n = t && t.checked ? c : r,
                                i = e && e.checked ? c : r;
                            l.save(n, i), this.close(), this._updateUserId()
                        }
                    }, {
                        key: "_rejectAll",
                        value: function() {
                            l.save(r, r), this.inputs.find((function(t) {
                                return "consent_analytics" === t.name
                            })).removeAttribute("checked"), this.inputs.find((function(t) {
                                return "consent_ads" === t.name
                            })).removeAttribute("checked"), this.close(), this._updateUserId()
                        }
                    }, {
                        key: "_onMoreClick",
                        value: function() {
                            this.homeWrap && this.homeWrap.setAttribute("aria-hidden", !0), this.optionsWrap && this.optionsWrap.setAttribute("aria-hidden", !1), this._expanded = !0, this.el.classList.add(b), this._setHeight()
                        }
                    }, {
                        key: "_onBackClick",
                        value: function() {
                            this.optionsWrap && this.optionsWrap.setAttribute("aria-hidden", !0), this.homeWrap && this.homeWrap.setAttribute("aria-hidden", !1), this._expanded = !1, this.el.classList.remove(b), this._setHeight()
                        }
                    }, {
                        key: "_setHeight",
                        value: function() {
                            var t = null;
                            t = this._expanded ? this.wraps[1] : this.wraps[0], this.el.style.setProperty("--container-height", "".concat((0, d.JA)(t).height, "px"))
                        }
                    }]) && k(e.prototype, n), i && k(e, i), t
                }();
            var C = new m;
            const B = {
                instance: C
            }
        }
    }
]);
//# sourceMappingURL=src_js_ui_gdpr_index_js.a652537a54e9ee04a5b0.bundle.js.map