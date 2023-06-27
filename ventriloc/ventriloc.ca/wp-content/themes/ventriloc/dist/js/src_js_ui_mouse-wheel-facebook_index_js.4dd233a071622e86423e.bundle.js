"use strict";
(self.webpackChunkventriloc = self.webpackChunkventriloc || []).push([
    ["src_js_ui_mouse-wheel-facebook_index_js"], {
        "./src/js/ui/mouse-wheel-facebook/index.js": (t, e, i) => {
            i.r(e), i.d(e, {
                default: () => _,
                instance: () => p
            });
            var s = i("./src/js/utils/dom.js"),
                n = i("./src/js/utils/mobile.js");

            function a(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var s = e[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                }
            }
            var r = function() {
                function t() {
                    var e = this;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this._fbRoot = (0, s.$)("#fb-root"), this._script = null, this._ready = !1, this._xfbmlInitialized = !1, this._promises = [], this._onXFBMLReady = this._onXFBMLReady.bind(this), window.fbAsyncInit = function() {
                        FB.Event.subscribe("xfbml.ready", e._onXFBMLReady), e._ready = !0, e._promises.forEach((function(t) {
                            return t()
                        })), e._promises = null, window.fbAsyncInit = null
                    }
                }
                var e, i, n;
                return e = t, (i = [{
                    key: "load",
                    value: function() {
                        var t = this;
                        if (this._ready) return Promise.resolve();
                        var e = new Promise((function(e) {
                            return t._promises.push(e)
                        }));
                        return this._fbRoot || (this._fbRoot = document.createElement("div"), this._fbRoot.id = "fb-root", s.d1.appendChild(this._fbRoot)), this._script || (this._script = document.createElement("script"), this._script.id = "facebook-jssdk", this._script.setAttribute("crossorigin", "anonymous"), this._script.onerror = function(t) {
                            console.error("Error loading Youtube iFrame API :", t)
                        }, this._script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0", s.YM.appendChild(this._script)), e
                    }
                }, {
                    key: "_onXFBMLReady",
                    value: function() {
                        this._xfbmlInitialized = !0
                    }
                }, {
                    key: "ready",
                    get: function() {
                        return this._ready
                    }
                }, {
                    key: "xfbmlInitialized",
                    get: function() {
                        return this._xfbmlInitialized
                    }
                }]) && a(e.prototype, i), n && a(e, n), t
            }();
            const l = new r;

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function h(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var s = e[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                }
            }

            function u(t, e, i) {
                return e && h(t.prototype, e), i && h(t, i), t
            }
            var d = 1,
                c = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        o(this, t), this.items = null, this._elements = null, this._status = 0, this._initChildren = this._initChildren.bind(this), e && this.init()
                    }
                    return u(t, [{
                        key: "init",
                        value: function() {
                            var t = this;
                            n.ai || (this._elements = Array.from((0, s.$$)('.wysiwyg iframe[src*="facebook.com/plugins/video"]')), this._elements && 0 !== this._elements.length && (this._status = 1, l.load().then((function() {
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
                        key: "_initChildren",
                        value: function() {
                            var t = this;
                            this.items = this._elements.map((function(e) {
                                return new f(e, t.emitter)
                            })), this._elements = null
                        }
                    }]), t
                }(),
                f = function() {
                    function t(e, i) {
                        o(this, t), this.el = e, this.emitter = i, this.udid = "facebook-smooth-scroll--".concat(d++), this.fbVideo = null, this._playerStartHandler = null, this._playerPauseHandler = null, this._playerFinishedHandler = null, this._onXFBMLReady = this._onXFBMLReady.bind(this), this._onClick = this._onClick.bind(this), this._onPlaybackStarted = this._onPlaybackStarted.bind(this), this._onPlaybackPaused = this._onPlaybackPaused.bind(this), this._onPlaybackFinished = this._onPlaybackFinished.bind(this), this.init()
                    }
                    return u(t, [{
                        key: "init",
                        value: function() {
                            this.wrapper = document.createElement("div"), this.wrapper.classList.add("facebook-video__wrapper", "box", "box-widescreen"), (0, s.re)(this.el, this.wrapper), this.emitter.emit("SiteScroll.update")
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this._playerStartHandler && this._playerStartHandler.release("startedPlaying"), this._playerPauseHandler && this._playerPauseHandler.release("paused"), this._playerFinishedHandler && this._playerFinishedHandler.release("finishedPlaying"), this.player && this.player.pause(), this.el = null, this.emitter = null, this.player = null, this.udid = null, this.fbVideo = null, this._playerStartHandler = null, this._playerPauseHandler = null, this._playerFinishedHandler = null, this._onXFBMLReady = null, this._onClick = null, this._onPlaybackStarted = null, this._onPlaybackPaused = null, this._onPlaybackFinished = null
                        }
                    }, {
                        key: "start",
                        value: function() {
                            this._bindEvents()
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this._unbindEvents(), this.player
                        }
                    }, {
                        key: "_bindEvents",
                        value: function() {
                            this.wrapper.classList.add("--enable-smooth-scroll"), this.wrapper.removeEventListener("click", this._onClick), this.wrapper.addEventListener("click", this._onClick)
                        }
                    }, {
                        key: "_unbindEvents",
                        value: function() {
                            this.wrapper.removeEventListener("click", this._onClick), this.wrapper.classList.remove("--enable-smooth-scroll")
                        }
                    }, {
                        key: "_onXFBMLReady",
                        value: function(t) {
                            var e = t.type,
                                i = t.id,
                                s = t.instance;
                            "video" === e && i === this.udid && (FB.Event.unsubscribe("xfbml.ready", this._onXFBMLReady), this._playerStartHandler = s.subscribe("startedPlaying", this._onPlaybackStarted), this._playerPauseHandler = s.subscribe("paused", this._onPlaybackPaused), this._playerFinishedHandler = s.subscribe("finishedPlaying", this._onPlaybackFinished), this.player = s, this.player.play(), this.wrapper.removeChild(this.el))
                        }
                    }, {
                        key: "_onClick",
                        value: function(t) {
                            if (t && (t.stopImmediatePropagation(), t.preventDefault()), this.fbVideo) this.player && this.player.play();
                            else {
                                var e = decodeURIComponent(this.el.src).split("?").pop().split("&").map((function(t) {
                                    return t.split("=")
                                })).find((function(t) {
                                    return "href" === t[0]
                                }));
                                this.fbVideo = document.createElement("div"), this.fbVideo.id = this.udid, this.fbVideo.classList.add("fb-video"), this.fbVideo.setAttribute("data-href", e[1]), this.fbVideo.setAttribute("data-autoplay", !0), this.fbVideo.setAttribute("data-allowfullscreen", !0), this.wrapper.appendChild(this.fbVideo), FB.Event.subscribe("xfbml.ready", this._onXFBMLReady), FB.XFBML.parse(this.wrapper)
                            }
                        }
                    }, {
                        key: "_onPlaybackStarted",
                        value: function() {
                            this._unbindEvents()
                        }
                    }, {
                        key: "_onPlaybackPaused",
                        value: function() {
                            this._bindEvents()
                        }
                    }, {
                        key: "_onPlaybackFinished",
                        value: function() {
                            this._bindEvents()
                        }
                    }]), t
                }();
            var p = new c;
            const _ = {
                instance: p
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
//# sourceMappingURL=src_js_ui_mouse-wheel-facebook_index_js.4dd233a071622e86423e.bundle.js.map