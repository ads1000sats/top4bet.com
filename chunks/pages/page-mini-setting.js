(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [71207], {
        48509: function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/mini-games-setting/[mini_game]", function() {
                return t(22350)
            }])
        },
        22628: function(n, e, t) {
            "use strict";
            var i = t(85893),
                r = t(50888),
                u = t(11382);
            e.Z = function() {
                return (0, i.jsx)(u.Z, {
                    indicator: (0, i.jsx)(r.Z, {
                        style: {
                            fontSize: 24
                        },
                        spin: !0
                    })
                })
            }
        },
        22350: function(n, e, t) {
            "use strict";
            t.r(e);
            var i = t(85893),
                r = t(75707),
                u = t(11163),
                c = t(96486),
                o = t.n(c),
                s = (0, r.Z)((function() {
                    return Promise.all([t.e(4585), t.e(58278), t.e(71577), t.e(23530), t.e(80173), t.e(27074), t.e(73553), t.e(10957), t.e(26574), t.e(76519), t.e(82071), t.e(79915), t.e(25675), t.e(26913), t.e(63913), t.e(69241)]).then(t.bind(t, 90193))
                }));
            e.default = function() {
                var n = (0, u.useRouter)(),
                    e = o().upperCase(n.query.mini_game);
                return (0, i.jsx)(s, {
                    title: "\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\u0e21\u0e34\u0e19\u0e34\u0e40\u0e01\u0e21",
                    miniGame: e
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
            var i = t(7297),
                r = t(85893),
                u = t(32125),
                c = t(22628),
                o = t(5152),
                s = t.n(o);
            t(67294);

            function f() {
                var n = (0, i.Z)(["\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        "]);
                return f = function() {
                    return n
                }, n
            }

            function a(n) {
                return s()(n, {
                    loading: function() {
                        return (0, r.jsx)(l, {
                            children: (0, r.jsx)(c.Z, {})
                        })
                    }
                })
            }
            var l = (0, u.ZP)("div").withConfig({
                componentId: "sc-c84c05e3-0"
            })(f())
        },
        11163: function(n, e, t) {
            n.exports = t(90387)
        },
        7297: function(n, e, t) {
            "use strict";

            function i(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }
            t.d(e, {
                Z: function() {
                    return i
                }
            })
        }
    },
    function(n) {
        n.O(0, [53662, 53440, 11382, 49774, 92888, 40179], (function() {
            return e = 48509, n(n.s = e);
            var e
        }));
        var e = n.O();
        _N_E = e
    }
]);