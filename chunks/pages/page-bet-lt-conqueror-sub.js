(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [37318], {
        2218: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/bet-lt-conqueror/[type_huay]/[sub_type_huay]", function() {
                return t(18106)
            }])
        },
        22628: function(e, n, t) {
            "use strict";
            var r = t(85893),
                u = t(50888),
                i = t(11382);
            n.Z = function() {
                return (0, r.jsx)(i.Z, {
                    indicator: (0, r.jsx)(u.Z, {
                        style: {
                            fontSize: 24
                        },
                        spin: !0
                    })
                })
            }
        },
        18106: function(e, n, t) {
            "use strict";
            t.r(n);
            var r = t(85893),
                u = t(75707),
                i = t(11163),
                c = t(43792),
                o = t(67294),
                a = (0, u.Z)((function() {
                    return Promise.all([t.e(74885), t.e(4585), t.e(58278), t.e(71577), t.e(23530), t.e(80173), t.e(27074), t.e(73553), t.e(10957), t.e(26574), t.e(76519), t.e(34729), t.e(82071), t.e(23585), t.e(46008), t.e(14011), t.e(46664), t.e(30709), t.e(92077), t.e(68574), t.e(88264), t.e(92394), t.e(39526)]).then(t.bind(t, 92394))
                }));
            n.default = function() {
                var e = (0, i.useRouter)(),
                    n = (0, c.$O)(e.query.type_huay, e.query.sub_type_huay),
                    t = (0, o.useCallback)((function() {
                        return (0, r.jsx)(a, {
                            type: n,
                            searchCreateriaPattern: "2"
                        })
                    }), [n]);
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(t, {})
                })
            }
        },
        75707: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return f
                }
            });
            var r = t(7297),
                u = t(85893),
                i = t(32125),
                c = t(22628),
                o = t(5152),
                a = t.n(o);
            t(67294);

            function s() {
                var e = (0, r.Z)(["\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        "]);
                return s = function() {
                    return e
                }, e
            }

            function f(e) {
                return a()(e, {
                    loading: function() {
                        return (0, u.jsx)(l, {
                            children: (0, u.jsx)(c.Z, {})
                        })
                    }
                })
            }
            var l = (0, i.ZP)("div").withConfig({
                componentId: "sc-c84c05e3-0"
            })(s())
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
        },
        29815: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return c
                }
            });
            var r = t(20943);
            var u = t(13375);
            var i = t(91566);

            function c(e) {
                return function(e) {
                    if (Array.isArray(e)) return (0, r.Z)(e)
                }(e) || (0, u.Z)(e) || (0, i.Z)(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        }
    },
    function(e) {
        e.O(0, [53440, 11382, 43792, 49774, 92888, 40179], (function() {
            return n = 2218, e(e.s = n);
            var n
        }));
        var n = e.O();
        _N_E = n
    }
]);