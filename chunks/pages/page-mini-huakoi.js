(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [13702], {
        13223: function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/mini-games-huakoi", function() {
                return t(9048)
            }])
        },
        22628: function(n, e, t) {
            "use strict";
            var r = t(85893),
                u = t(50888),
                c = t(11382);
            e.Z = function() {
                return (0, r.jsx)(c.Z, {
                    indicator: (0, r.jsx)(u.Z, {
                        style: {
                            fontSize: 24
                        },
                        spin: !0
                    })
                })
            }
        },
        9048: function(n, e, t) {
            "use strict";
            t.r(e);
            var r = t(85893),
                u = t(75707),
                c = t(42508),
                i = (0, u.Z)((function() {
                    return Promise.all([t.e(4585), t.e(58278), t.e(71577), t.e(23530), t.e(80173), t.e(27074), t.e(73553), t.e(10957), t.e(34729), t.e(23585), t.e(46008), t.e(14011), t.e(46664), t.e(30709), t.e(92077), t.e(14995)]).then(t.bind(t, 92832))
                }));
            e.default = function() {
                return (0, r.jsx)(i, {
                    miniGames: c.Zz.HUAKOI
                })
            }
        },
        75707: function(n, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return a
                }
            });
            var r = t(7297),
                u = t(85893),
                c = t(32125),
                i = t(22628),
                s = t(5152),
                f = t.n(s);
            t(67294);

            function o() {
                var n = (0, r.Z)(["\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        "]);
                return o = function() {
                    return n
                }, n
            }

            function a(n) {
                return f()(n, {
                    loading: function() {
                        return (0, u.jsx)(I, {
                            children: (0, u.jsx)(i.Z, {})
                        })
                    }
                })
            }
            var I = (0, c.ZP)("div").withConfig({
                componentId: "sc-c84c05e3-0"
            })(o())
        },
        42508: function(n, e, t) {
            "use strict";
            var r, u, c;
            t.d(e, {
                    $L: function() {
                        return u
                    },
                    JK: function() {
                        return i
                    },
                    VH: function() {
                        return s
                    },
                    Zz: function() {
                        return r
                    },
                    _4: function() {
                        return f
                    }
                }),
                function(n) {
                    n.PAOYINGCHUB = "PAOYINGCHUB", n.HUAKOI = "HUAKOI", n.HILO = "HILO"
                }(r || (r = {})),
                function(n) {
                    n.PENDING = "PENDING", n.WIN = "WIN", n.LOSE = "LOSE", n.TIE = "TIE", n.EXPIRE = "EXPIRE"
                }(u || (u = {})),
                function(n) {
                    n.HUA = "HUA", n.KOI = "KOI", n.HIGH = "HIGH", n.LOW = "LOW", n.PAPER = "PAPER", n.SCISSORS = "SCISSORS", n.HAMMER = "HAMMER"
                }(c || (c = {}));
            var i = function(n) {
                    switch (n) {
                        case c.HAMMER:
                            return "\u0e04\u0e49\u0e2d\u0e19";
                        case c.PAPER:
                            return "\u0e01\u0e23\u0e30\u0e14\u0e32\u0e29";
                        case c.SCISSORS:
                            return "\u0e01\u0e23\u0e23\u0e44\u0e01\u0e23";
                        case c.HIGH:
                            return "\u0e2a\u0e39\u0e07";
                        case c.LOW:
                            return "\u0e15\u0e48\u0e33";
                        case c.HUA:
                            return "\u0e2b\u0e31\u0e27";
                        case c.KOI:
                            return "\u0e01\u0e49\u0e2d\u0e22";
                        default:
                            return ""
                    }
                },
                s = function(n) {
                    switch (n) {
                        case u.WIN:
                            return "\u0e0a\u0e19\u0e30";
                        case u.LOSE:
                            return "\u0e41\u0e1e\u0e49";
                        case u.TIE:
                            return "\u0e40\u0e2a\u0e21\u0e2d";
                        case u.PENDING:
                            return "PENDING";
                        case u.EXPIRE:
                            return "\u0e2b\u0e21\u0e14\u0e40\u0e27\u0e25\u0e32";
                        default:
                            return ""
                    }
                },
                f = function(n) {
                    switch (n) {
                        case r.HUAKOI:
                            return "\u0e2b\u0e31\u0e27 - \u0e01\u0e49\u0e2d\u0e22";
                        case r.HILO:
                            return "\u0e2a\u0e39\u0e07 - \u0e15\u0e48\u0e33";
                        case r.PAOYINGCHUB:
                            return "\u0e40\u0e1b\u0e48\u0e32 \u0e22\u0e34\u0e49\u0e07 \u0e09\u0e38\u0e1a";
                        default:
                            return ""
                    }
                }
        },
        7297: function(n, e, t) {
            "use strict";

            function r(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }
            t.d(e, {
                Z: function() {
                    return r
                }
            })
        }
    },
    function(n) {
        n.O(0, [53440, 11382, 49774, 92888, 40179], (function() {
            return e = 13223, n(n.s = e);
            var e
        }));
        var e = n.O();
        _N_E = e
    }
]);