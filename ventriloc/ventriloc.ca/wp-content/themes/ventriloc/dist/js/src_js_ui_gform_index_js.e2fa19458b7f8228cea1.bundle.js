"use strict";
(self.webpackChunkventriloc = self.webpackChunkventriloc || []).push([
    ["src_js_ui_gform_index_js"], {
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
        "./src/js/ui/gform/index.js": (t, e, n) => {
            n.r(e), n.d(e, {
                default: () => et,
                instance: () => tt
            });
            var i = n("./src/js/utils/dom.js"),
                r = n("./src/js/modules/module/Module.js"),
                o = n("./src/js/utils/throttle.js"),
                u = n("./node_modules/eventemitter2/lib/eventemitter2.js"),
                s = n.n(u),
                l = n("./src/js/utils/listener.js");

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i
            }

            function a(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function h(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function p(t, e, n) {
                return e && h(t.prototype, e), n && h(t, n), t
            }

            function y(t, e, n) {
                return y = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                    var i = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = d(t)););
                        return t
                    }(t, e);
                    if (i) {
                        var r = Object.getOwnPropertyDescriptor(i, e);
                        return r.get ? r.get.call(n) : r.value
                    }
                }, y(t, e, n || t)
            }

            function d(t) {
                return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, d(t)
            }

            function v(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && b(t, e)
            }

            function _(t, e) {
                return !e || "object" !== g(e) && "function" != typeof e ? a(t) : e
            }

            function b(t, e) {
                return b = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, b(t, e)
            }

            function m(t) {
                return function(t) {
                    if (Array.isArray(t)) return c(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return c(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = function(t) {
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
                    var n, i = d(t);
                    if (e) {
                        var r = d(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return _(this, n)
                }
            }
            var w = "--filled",
                j = "--focus",
                R = "--submitting",
                O = function(t) {
                    v(n, t);
                    var e = k(n);

                    function n(t) {
                        var i;
                        return f(this, n), (i = e.call(this)).el = t, i.id = parseInt(i.el.id.replace("gform_wrapper_", "")), i.postTitle = "", i._onRender = i._onRender.bind(a(i)), i._onSubmit = i._onSubmit.bind(a(i)), i._onResize = i._onResize.bind(a(i)), i.reset(), i.init(), i
                    }
                    return p(n, [{
                        key: "init",
                        value: function() {
                            jQuery(document).on("gform_post_render", this._onRender)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            if (jQuery(document).off("gform_post_render", this._onRender), this.fields) {
                                var t = this;
                                this.fields.forEach((function(e) {
                                    e.off("resize", t._onResize), e.destroy()
                                }))
                            }
                            this.el = null, this.id = null, this.form = null, this.body = null, this.submit = null, this.fields = null, this.postTitle = null, this._onRender = null, this._onSubmit = null, this._onResize = null
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            if (this.submit && (0, l.S1)(this.submit, "click", null), this.fields) {
                                var t = this;
                                this.fields.forEach((function(e) {
                                    e.off("resize", t._onResize), e.destroy()
                                }))
                            }
                            this.form = (0, i.$)("form", this.el), this.body = (0, i.$)(".gform_body", this.el), this.submit = (0, i.$)(".gsubmit", this.el), this.fields = m((0, i.$$)(".gfield", this.body)).map((function(t) {
                                return new E(t)
                            })), this.submit && (0, l.on)(this.submit, "click", this._onSubmit)
                        }
                    }, {
                        key: "updatePostTitle",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            this.fields.forEach((function(e) {
                                var n = e.input;
                                n && n instanceof P && n.update(t)
                            }))
                        }
                    }, {
                        key: "_onRender",
                        value: function(t, e) {
                            e === this.id && (this.el.classList.remove(R), this.reset(), this.emit("resize"))
                        }
                    }, {
                        key: "_onSubmit",
                        value: function() {
                            this.el && this.el.classList.add(R)
                        }
                    }, {
                        key: "_onResize",
                        value: function() {
                            this.emit("resize")
                        }
                    }]), n
                }(s()),
                E = function(t) {
                    v(n, t);
                    var e = k(n);

                    function n(t) {
                        var r;
                        return f(this, n), (r = e.call(this)).el = t, r.label = (0, i.$)(".gfield_label", r.el), r.inputContainer = (0, i.$)(".ginput_container", r.el), r.parentContainer = r.inputContainer.parentElement, r.input = r._getInput(), r.type = r._getType(), r._onInputFocus = r._onInputFocus.bind(a(r)), r._onInputBlur = r._onInputBlur.bind(a(r)), r._onInputResize = r._onInputResize.bind(a(r)), r.init(), r
                    }
                    return p(n, [{
                        key: "init",
                        value: function() {
                            this.input && (this.input.on("focus", this._onInputFocus), this.input.on("blur", this._onInputBlur), this.input.on("resize", this._onInputResize), this.parentContainer && this.parentContainer.classList.add("--".concat(this.type)), this.input.value.trim() && this._onInputFocus())
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.input && (this.input.off("focus", this._onInputFocus), this.input.off("blur", this._onInputBlur), this.input.off("resize", this._onInputResize), this.input.destroy()), this.el = null, this.label = null, this.inputContainer = null, this.input = null, this._onInputFocus = null, this._onInputBlur = null, this._onInputResize = null
                        }
                    }, {
                        key: "_onInputFocus",
                        value: function() {
                            this.el && "hidden" !== this.type && this.el.classList.add(j, w)
                        }
                    }, {
                        key: "_onInputBlur",
                        value: function() {
                            if (this.input) {
                                var t = this.input.value.trim();
                                if (this.el && this.el.classList.remove(j), t) return
                            }
                            this.el && this.el.classList.remove(w)
                        }
                    }, {
                        key: "_onInputResize",
                        value: function() {
                            this.emit("resize", this)
                        }
                    }, {
                        key: "_getInput",
                        value: function() {
                            if (!this.inputContainer) return null;
                            var t = (0, i.$)("textarea", this.inputContainer);
                            if (t) return new z(t);
                            var e = (0, i.$)("select", this.inputContainer);
                            if (e) return new T(e);
                            var n = (0, i.$)('input[type="file"]', this.inputContainer);
                            if (n) return new S(n);
                            var r = (0, i.$)('input[type="hidden"][data-gform-post-title-input]', this.inputContainer);
                            if (r) return new P(r);
                            var o = (0, i.$)('input:not([type="radio"]):not([type="checkbox"]):not([type="submit"]):not([type="image"]):not([type="file"]):not([type="hidden"])', this.inputContainer);
                            return o ? new I(o) : null
                        }
                    }, {
                        key: "_getType",
                        value: function() {
                            if (!this.input) return null;
                            var t = this.input.el.getAttribute("type"),
                                e = this.input.el.tagName.toLowerCase();
                            return t || e
                        }
                    }]), n
                }(s()),
                I = function(t) {
                    v(n, t);
                    var e = k(n);

                    function n(t) {
                        var i;
                        return f(this, n), (i = e.call(this)).el = t, i._onFocus = i._onFocus.bind(a(i)), i._onBlur = i._onBlur.bind(a(i)), i.init(), i
                    }
                    return p(n, [{
                        key: "init",
                        value: function() {
                            this._bindEvents()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this._unbindEvents(), this.el = null, this._onFocus = null, this._onBlur = null
                        }
                    }, {
                        key: "_bindEvents",
                        value: function() {
                            (0, l.on)(this.el, "focus", this._onFocus), (0, l.on)(this.el, "blur", this._onBlur)
                        }
                    }, {
                        key: "_unbindEvents",
                        value: function() {
                            (0, l.S1)(this.el, "focus", this._onFocus), (0, l.S1)(this.el, "blur", this._onBlur)
                        }
                    }, {
                        key: "_onFocus",
                        value: function() {
                            this.emit("focus", this)
                        }
                    }, {
                        key: "_onBlur",
                        value: function() {
                            this.emit("blur", this)
                        }
                    }, {
                        key: "value",
                        get: function() {
                            return this.el.value
                        }
                    }]), n
                }(s()),
                z = function(t) {
                    v(n, t);
                    var e = k(n);

                    function n() {
                        return f(this, n), e.apply(this, arguments)
                    }
                    return p(n, [{
                        key: "init",
                        value: function() {
                            this.el.setAttribute("rows", 1), this.el.removeAttribute("cols"), this._currentHeight = null, this._onInput = this._onInput.bind(this), y(d(n.prototype), "init", this).call(this), this.update()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this._currentHeight = null, this._onInput = null, y(d(n.prototype), "destroy", this).call(this)
                        }
                    }, {
                        key: "update",
                        value: function() {
                            if (this.el) {
                                this.el.style.height = "inherit";
                                var t = this.el.scrollHeight;
                                this._currentHeight !== t && null !== this._currentHeight && this.emit("resize", this), this._currentHeight = t, this.el.style.height = "".concat(this._currentHeight, "px")
                            }
                        }
                    }, {
                        key: "_bindEvents",
                        value: function() {
                            y(d(n.prototype), "_bindEvents", this).call(this), (0, l.on)(this.el, "input", this._onInput)
                        }
                    }, {
                        key: "_unbindEvents",
                        value: function() {
                            y(d(n.prototype), "_unbindEvents", this).call(this), (0, l.S1)(this.el, "input", this._onInput)
                        }
                    }, {
                        key: "_onInput",
                        value: function() {
                            this.update()
                        }
                    }]), n
                }(I),
                T = function(t) {
                    v(n, t);
                    var e = k(n);

                    function n() {
                        return f(this, n), e.apply(this, arguments)
                    }
                    return n
                }(I),
                S = function(t) {
                    v(n, t);
                    var e = k(n);

                    function n() {
                        return f(this, n), e.apply(this, arguments)
                    }
                    return p(n, [{
                        key: "init",
                        value: function() {
                            this.outputEl = (0, i.$)(".gform_fileupload_rules", this.el.parentElement), this._defaultOuputHTML = this.outputEl.innerHTML, this._onInput = this._onInput.bind(this), y(d(n.prototype), "init", this).call(this)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.outputEl = null, this._defaultOuputHTML = null, this._onInput = null, y(d(n.prototype), "destroy", this).call(this)
                        }
                    }, {
                        key: "_bindEvents",
                        value: function() {
                            y(d(n.prototype), "_bindEvents", this).call(this), (0, l.on)(this.el, "input", this._onInput)
                        }
                    }, {
                        key: "_unbindEvents",
                        value: function() {
                            y(d(n.prototype), "_unbindEvents", this).call(this), (0, l.S1)(this.el, "input", this._onInput)
                        }
                    }, {
                        key: "_onInput",
                        value: function() {
                            if (this.el && this.outputEl) {
                                var t = this._defaultOuputHTML,
                                    e = this.el.files;
                                e && e.length > 0 && (t = m(e).map((function(t) {
                                    return t.name
                                })).join("<br />")), this.outputEl.classList[t === this._defaultOuputHTML ? "remove" : "add"]("--filled"), this.outputEl.innerHTML = t
                            }
                        }
                    }]), n
                }(I),
                P = function(t) {
                    v(n, t);
                    var e = k(n);

                    function n(t) {
                        var i;
                        return f(this, n), (i = e.call(this)).el = t, i.init(), i
                    }
                    return p(n, [{
                        key: "init",
                        value: function() {}
                    }, {
                        key: "destroy",
                        value: function() {
                            this.el = null
                        }
                    }, {
                        key: "update",
                        value: function(t) {
                            this.el.value = t
                        }
                    }, {
                        key: "value",
                        get: function() {
                            return this.el.value
                        }
                    }]), n
                }(s());
            const F = O;
            var C = n("./src/js/core/windmill.js");

            function A(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function B(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function $(t) {
                return $ = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, $(t)
            }

            function L(t, e) {
                return !e || "object" !== x(e) && "function" != typeof e ? A(t) : e
            }

            function H(t, e) {
                return H = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, H(t, e)
            }
            var x = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function M(t) {
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
                    var n, i = $(t);
                    if (e) {
                        var r = $(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return L(this, n)
                }
            }
            var Z = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && H(t, e)
                }(u, t);
                var e, n, r, o = M(u);

                function u(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, u), (e = o.call(this)).el = t, e.gform = null, e._onResize = e._onResize.bind(A(e)), e._updatePostTitleField = e._updatePostTitleField.bind(A(e)), e.init(), e
                }
                return e = u, (n = [{
                    key: "init",
                    value: function() {
                        this.gform = new F(this.el), this.gform.on("resize", this._onResize), C.Z.on("done", this._updatePostTitleField)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        C.Z.off("done", this._updatePostTitleField), this.gform && (this.gform.off("resize", this._onResize), this.gform.destroy()), this.el = null, this.gform = null, this._onResize = null, this._updatePostTitleField = null
                    }
                }, {
                    key: "_onResize",
                    value: function() {
                        this.emit("resize")
                    }
                }, {
                    key: "_updatePostTitleField",
                    value: function() {
                        if (this.gform) {
                            var t = (0, i.$)("h1");
                            if (t) {
                                var e = t.hasAttribute("aria-label") ? t.getAttribute("aria-label") : t.innerText;
                                this.gform.updatePostTitle(e)
                            } else this.gform.updatePostTitle("")
                        }
                    }
                }]) && B(e.prototype, n), r && B(e, r), u
            }(s());
            const Q = Z;

            function U(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i
            }

            function D(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function G(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function N(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function q(t) {
                return q = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, q(t)
            }

            function J(t, e) {
                return !e || "object" !== W(e) && "function" != typeof e ? D(t) : e
            }

            function K(t, e) {
                return K = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, K(t, e)
            }

            function V(t) {
                return function(t) {
                    if (Array.isArray(t)) return U(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return U(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return U(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var W = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function X(t) {
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
                    var n, i = q(t);
                    if (e) {
                        var r = q(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return J(this, n)
                }
            }
            var Y = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && K(t, e)
                }(s, t);
                var e, n, r, u = X(s);

                function s() {
                    var t, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return G(this, s), (t = u.call(this)).initialized = !1, t.items = null, t.throttle = null, t._onFormResize = t._onFormResize.bind(D(t)), t._onThrottle = t._onThrottle.bind(D(t)), e && t.init(), t
                }
                return e = s, n = [{
                    key: "name",
                    get: function() {
                        return "Gform"
                    }
                }, {
                    key: "init",
                    value: function() {
                        var t = this;
                        this.throttle || (this.throttle = (0, o.Z)({
                            cb: this._onThrottle,
                            delay: 200,
                            onlyAtEnd: !0
                        })), this.initialized = !0, this.items = V((0, i.$$)(".gform_wrapper")).map((function(e) {
                            return new Q(e, t.emitter)
                        })), this.items.length > 0 && this._onThrottle()
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
                        var t = this;
                        this.items.forEach((function(e) {
                            return e.on("resize", t._onFormResize)
                        }))
                    }
                }, {
                    key: "_unbindEvents",
                    value: function() {
                        var t = this;
                        this.items.forEach((function(e) {
                            return e.off("resize", t._onFormResize)
                        }))
                    }
                }, {
                    key: "_onFormResize",
                    value: function() {
                        this.throttle.init()
                    }
                }, {
                    key: "_onThrottle",
                    value: function() {
                        this.emitter.emit("SiteScroll.update")
                    }
                }], n && N(e.prototype, n), r && N(e, r), s
            }(r.Z);
            var tt = new Y;
            const et = {
                instance: tt
            }
        }
    }
]);
//# sourceMappingURL=src_js_ui_gform_index_js.e2fa19458b7f8228cea1.bundle.js.map