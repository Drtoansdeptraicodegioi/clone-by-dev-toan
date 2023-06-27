"use strict";
(self.webpackChunkventriloc = self.webpackChunkventriloc || []).push([
    ["src_js_ui_mouse-wheel-vimeo_index_js"], {
        "./src/js/ui/mouse-wheel-vimeo/MouseWheelVimeo.js": (t, e, i) => {
            i.d(e, {
                Y: () => h,
                Z: () => _
            });
            var s = i("./src/js/utils/dom.js"),
                n = i("./src/js/utils/mobile.js");

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var s = e[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                }
            }

            function l(t, e, i) {
                return e && a(t.prototype, e), i && a(t, i), t
            }
            var r, h = '.wysiwyg iframe[src*="vimeo.com"]',
                u = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        o(this, t), this.items = null, this._elements = null, this._promise = null, this._status = 0, e && this.init()
                    }
                    return l(t, [{
                        key: "init",
                        value: function() {
                            if (!n.ai && (this._elements = Array.from((0, s.$$)(h)), this._elements && 0 !== this._elements.length))
                                if (this._status = 1, r || this._promise) r && this._initChildren();
                                else {
                                    var t = this;
                                    this._promise = i.e("vendors-node_modules_vimeo_player_dist_player_es_js").then(i.bind(i, "./node_modules/@vimeo/player/dist/player.es.js")), this._promise.then((function(e) {
                                        r = e.default, t._status < 1 || (t._initChildren(), 3 === t._status && t.start())
                                    })), this._promise.catch((function(t) {
                                        console.error("Error loading Vimeo Player API :", t)
                                    }))
                                }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.items && this.items.forEach((function(t) {
                                return t.destroy()
                            })), this.items = null, this._elements = null, this._status = 0
                        }
                    }, {
                        key: "start",
                        value: function() {
                            this._status = 3, this.items && this.items.forEach((function(t) {
                                return t.start()
                            }))
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.items && this.items.forEach((function(t) {
                                return t.stop()
                            })), this._status = 2
                        }
                    }, {
                        key: "add",
                        value: function(t) {
                            if (!n.ai)
                                if (this._status < 1 && (this._status = 1), r || this._promise) {
                                    if (r) {
                                        var e = new c(t);
                                        this.items || (this.items = []), this.items.push(e), 3 === this._status && e.start()
                                    }
                                } else {
                                    var s = this;
                                    this._promise = i.e("vendors-node_modules_vimeo_player_dist_player_es_js").then(i.bind(i, "./node_modules/@vimeo/player/dist/player.es.js")), this._promise.then((function(e) {
                                        if (r = e.default, !(s._status < 1)) {
                                            var i = new c(t);
                                            s.items || (s.items = []), s.items.push(i), 3 === s._status && i.start()
                                        }
                                    })), this._promise.catch((function(t) {
                                        console.error("Error loading Vimeo Player API :", t)
                                    }))
                                }
                        }
                    }, {
                        key: "remove",
                        value: function(t) {
                            if (this._elements && (this._elements = this._elements.filter((function(e) {
                                    return e !== t
                                }))), this.items) {
                                var e = this.items.findIndex((function(e) {
                                    return e.el === t
                                }));
                                if (e > -1) {
                                    var i = this.items.splice(e, 1)[0];
                                    i.stop(), i.destroy()
                                }
                            }
                        }
                    }, {
                        key: "_initChildren",
                        value: function() {
                            this.items = this._elements.map((function(t) {
                                return new c(t)
                            })), this._elements = null
                        }
                    }]), t
                }(),
                c = function() {
                    function t(e) {
                        o(this, t), this.el = e, this.parent = this.el.parentNode;
                        var i = new URLSearchParams(this.el.src);
                        this._autoplay = "1" === i.get("autoplay"), this._onClick = this._onClick.bind(this), this._onPlaying = this._onPlaying.bind(this), this._onPause = this._onPause.bind(this)
                    }
                    return l(t, [{
                        key: "destroy",
                        value: function() {
                            this.player && this.player.destroy(), this.el = null, this.parent = null, this.player = null, this._autoplay = null, this._onClick = null, this._onPlaying = null, this._onPause = null
                        }
                    }, {
                        key: "start",
                        value: function() {
                            this._bindEvents(), this._autoplay && this._onClick()
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this._unbindEvents(), this.player && (this.player.off("playing", this._onPlaying), this.player.off("pause", this._onPause))
                        }
                    }, {
                        key: "_bindEvents",
                        value: function() {
                            this.parent && (this.el.style.pointerEvents = "none", this.parent.removeEventListener("click", this._onClick), this.parent.addEventListener("click", this._onClick))
                        }
                    }, {
                        key: "_unbindEvents",
                        value: function() {
                            this.parent && (this.el.style.pointerEvents = "", this.parent.removeEventListener("click", this._onClick))
                        }
                    }, {
                        key: "_onClick",
                        value: function(t) {
                            t && (t.stopPropagation(), t.preventDefault()), this.player || (this.player = new r(this.el), this.player.on("playing", this._onPlaying), this.player.on("pause", this._onPause)), this.player.play()
                        }
                    }, {
                        key: "_onPlaying",
                        value: function() {
                            this._unbindEvents()
                        }
                    }, {
                        key: "_onPause",
                        value: function() {
                            this._bindEvents()
                        }
                    }]), t
                }();
            const _ = u
        },
        "./src/js/ui/mouse-wheel-vimeo/index.js": (t, e, i) => {
            i.r(e), i.d(e, {
                instance: () => s,
                default: () => n
            });
            var s = new(i("./src/js/ui/mouse-wheel-vimeo/MouseWheelVimeo.js").Z);
            const n = {
                instance: s
            }
        },
        "./src/js/utils/mobile.js": (t, e, i) => {
            i.d(e, {
                ai: () => s
            });
            var s = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
            window.matchMedia("(hover: none)").matches
        }
    }
]);
//# sourceMappingURL=src_js_ui_mouse-wheel-vimeo_index_js.037bda9a8492b52d2c9b.bundle.js.map