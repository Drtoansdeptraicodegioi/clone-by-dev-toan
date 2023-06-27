"use strict";
(self.webpackChunkventriloc = self.webpackChunkventriloc || []).push([
    ["src_js_ui_mouse-wheel-youtube_index_js"], {
        "./src/js/ui/mouse-wheel-youtube/MouseWheelYoutube.js": (t, e, i) => {
            i.d(e, {
                Y: () => h,
                Z: () => _
            });
            var n = i("./src/js/utils/dom.js"),
                s = i("./src/js/utils/mobile.js");

            function a(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            const r = new(function() {
                function t() {
                    var e = this;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this._script = null, this._ready = !1, this._promises = [], window.onYouTubeIframeAPIReady = function() {
                        e._ready = !0, e._promises.forEach((function(t) {
                            return t()
                        })), e._promises = null, window.onYouTubeIframeAPIReady = null
                    }
                }
                var e, i, s;
                return e = t, (i = [{
                    key: "load",
                    value: function() {
                        var t = this;
                        if (this._ready) return Promise.resolve();
                        var e = new Promise((function(e) {
                            return t._promises.push(e)
                        }));
                        return this._script || (this._script = document.createElement("script"), this._script.onerror = function(t) {
                            console.error("Error loading Youtube iFrame API :", t)
                        }, this._script.src = "https://www.youtube.com/iframe_api", n.YM.appendChild(this._script)), e
                    }
                }, {
                    key: "ready",
                    get: function() {
                        return this._ready
                    }
                }]) && a(e.prototype, i), s && a(e, s), t
            }());

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function u(t, e, i) {
                return e && l(t.prototype, e), i && l(t, i), t
            }
            var h = '.wysiwyg iframe[src*="youtube.com"]',
                c = 1,
                d = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        o(this, t), this.items = null, this._elements = null, this._status = 0, this._initChildren = this._initChildren.bind(this), e && this.init()
                    }
                    return u(t, [{
                        key: "init",
                        value: function() {
                            var t = this;
                            s.ai || (this._elements = Array.from((0, n.$$)(h)), this._elements && 0 !== this._elements.length && (this._status = 1, r.load().then((function() {
                                t._status < 1 || (t._initChildren(), 3 === t._status && t.start())
                            }))))
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
                            var e = this;
                            s.ai || (this._status < 1 && (this._status = 1), r.load().then((function() {
                                if (!(e._status < 1)) {
                                    var i = new y(t);
                                    e.items || (e.items = []), e.items.push(i), 3 === e._status && i.start()
                                }
                            })))
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
                                return new y(t)
                            })), this._elements = null
                        }
                    }]), t
                }(),
                y = function() {
                    function t(e) {
                        o(this, t), this.el = e, this.parent = this.el.parentNode, this.udid = this.el.id ? this.el.id : null, this.udid || (this.udid = "youtube-smooth-scroll--".concat(c++), this.el.id = this.udid);
                        var i = new URLSearchParams(this.el.src);
                        this._autoplay = "1" === i.get("autoplay"), this._playerReady = !1, this._playerStatus = null, this._onClick = this._onClick.bind(this), this._onReady = this._onReady.bind(this), this._onStateChange = this._onStateChange.bind(this)
                    }
                    return u(t, [{
                        key: "destroy",
                        value: function() {
                            this.player && this.player.destroy(), this.el = null, this.parent = null, this.player = null, this.udid = null, this._autoplay = null, this._playerReady = null, this._playerStatus = null, this._onClick = null, this._onReady = null, this._onStateChange = null
                        }
                    }, {
                        key: "start",
                        value: function() {
                            this._bindEvents(), this._autoplay && (this._onClick(), this._onStateChange({
                                data: YT.PlayerState.PLAYING
                            }))
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this._unbindEvents(), this.player && (this.player.removeEventListener("onReady", this._onReady), this.player.removeEventListener("onStateChange", this._onStateChange))
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
                            t && (t.stopPropagation(), t.preventDefault()), this.player ? !0 === this._playerReady && this.player.playVideo() : (this.player = new YT.Player(this.udid), this.player.addEventListener("onReady", this._onReady), this.player.addEventListener("onStateChange", this._onStateChange))
                        }
                    }, {
                        key: "_onReady",
                        value: function() {
                            this._playerReady = !0, this.player.playVideo(), this._unbindEvents()
                        }
                    }, {
                        key: "_onStateChange",
                        value: function(t) {
                            this._playerReady = !0, t.data === YT.PlayerState.PAUSED || t.data === YT.PlayerState.ENDED ? this._bindEvents() : t.data === YT.PlayerState.PLAYING && this._unbindEvents()
                        }
                    }]), t
                }();
            const _ = d
        },
        "./src/js/ui/mouse-wheel-youtube/index.js": (t, e, i) => {
            i.r(e), i.d(e, {
                instance: () => n,
                default: () => s
            });
            var n = new(i("./src/js/ui/mouse-wheel-youtube/MouseWheelYoutube.js").Z);
            const s = {
                instance: n
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
//# sourceMappingURL=src_js_ui_mouse-wheel-youtube_index_js.f33eb72456db60b5dee1.bundle.js.map