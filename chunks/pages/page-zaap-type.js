(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [62803], {
        85620: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/sb-zaap/[type]", function() {
                return t(50792)
            }])
        },
        22628: function(e, n, t) {
            "use strict";
            var r = t(85893),
                i = t(50888),
                u = t(11382);
            n.Z = function() {
                return (0, r.jsx)(u.Z, {
                    indicator: (0, r.jsx)(i.Z, {
                        style: {
                            fontSize: 24
                        },
                        spin: !0
                    })
                })
            }
        },
        50792: function(e, n, t) {
            "use strict";
            t.r(n);
            var r = t(85893),
                i = t(75707),
                u = t(11163),
                c = t(67294),
                s = (0, i.Z)((function() {
                    return Promise.all([t.e(74885), t.e(4585), t.e(58278), t.e(71577), t.e(23530), t.e(80173), t.e(27074), t.e(73553), t.e(10957), t.e(26574), t.e(76519), t.e(34729), t.e(82071), t.e(23585), t.e(46008), t.e(14011), t.e(46664), t.e(30709), t.e(92077), t.e(68574), t.e(63913), t.e(31681), t.e(2452), t.e(30860)]).then(t.bind(t, 30860))
                }));
            n.default = function() {
                var e = (0, u.useRouter)(),
                    n = (0, c.useCallback)((function() {
                        var n = e.query.type.split("-")[1];
                        return "deposit" == n ? (0, r.jsx)(s, {
                            title: "\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e1d\u0e32\u0e01",
                            type: n
                        }) : "withdraw" == n ? (0, r.jsx)(s, {
                            title: "\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e16\u0e2d\u0e19",
                            type: n
                        }) : (0, r.jsx)(r.Fragment, {})
                    }), [e.query]);
                return (0, r.jsx)(n, {})
            }
        },
        75707: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return a
                }
            });
            var r = t(7297),
                i = t(85893),
                u = t(32125),
                c = t(22628),
                s = t(5152),
                o = t.n(s);
            t(67294);

            function f() {
                var e = (0, r.Z)(["\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        "]);
                return f = function() {
                    return e
                }, e
            }

            function a(e) {
                return o()(e, {
                    loading: function() {
                        return (0, i.jsx)(l, {
                            children: (0, i.jsx)(c.Z, {})
                        })
                    }
                })
            }
            var l = (0, u.ZP)("div").withConfig({
                componentId: "sc-c84c05e3-0"
            })(f())
        },
        11163: function(e, n, t) {
            e.exports = t(90387)
        },
        7297: function(e, n, t) {
            "use strict";

            function r(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }
            t.d(n, {
                Z: function() {
                    return r
                }
            })
        }
    },
    function(e) {
        e.O(0, [53440, 11382, 49774, 92888, 40179], (function() {
            return n = 85620, e(e.s = n);
            var n
        }));
        var n = e.O();
        _N_E = n
    }
]);