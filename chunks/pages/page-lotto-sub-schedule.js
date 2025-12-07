(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [78097], {
        60942: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/lotto-huay/[type_huay]/[sub_type_huay]/schedule-setting", function() {
                return n(14584)
            }])
        },
        22628: function(t, e, n) {
            "use strict";
            var r = n(85893),
                u = n(50888),
                o = n(11382);
            e.Z = function() {
                return (0, r.jsx)(o.Z, {
                    indicator: (0, r.jsx)(u.Z, {
                        style: {
                            fontSize: 24
                        },
                        spin: !0
                    })
                })
            }
        },
        14584: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(85893),
                u = n(75707),
                o = n(11163),
                i = n(43792),
                c = n(67294),
                s = (0, u.Z)((function() {
                    return Promise.all([n.e(74885), n.e(4585), n.e(58278), n.e(71577), n.e(23530), n.e(80173), n.e(27074), n.e(73553), n.e(10957), n.e(26574), n.e(76519), n.e(82071), n.e(68574), n.e(88264), n.e(44172)]).then(n.bind(n, 95533))
                }));
            e.default = function() {
                var t = (0, o.useRouter)(),
                    e = (0, i.$O)(t.query.type_huay, t.query.sub_type_huay),
                    n = (0, i.IK)({
                        lotto_type: e.lotto_type,
                        lotto_subtype: e.lotto_subtype
                    }),
                    u = (0, c.useCallback)((function() {
                        return (0, r.jsx)(s, {
                            title: "".concat(n, " - \u0e01\u0e33\u0e2b\u0e19\u0e14\u0e01\u0e32\u0e23"),
                            type: e
                        })
                    }), [e]);
                return (0, r.jsx)(u, {})
            }
        },
        75707: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return f
                }
            });
            var r = n(7297),
                u = n(85893),
                o = n(32125),
                i = n(22628),
                c = n(5152),
                s = n.n(c);
            n(67294);

            function a() {
                var t = (0, r.Z)(["\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        "]);
                return a = function() {
                    return t
                }, t
            }

            function f(t) {
                return s()(t, {
                    loading: function() {
                        return (0, u.jsx)(l, {
                            children: (0, u.jsx)(i.Z, {})
                        })
                    }
                })
            }
            var l = (0, o.ZP)("div").withConfig({
                componentId: "sc-c84c05e3-0"
            })(a())
        },
        11163: function(t, e, n) {
            t.exports = n(90387)
        },
        7297: function(t, e, n) {
            "use strict";

            function r(t, e) {
                return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }
            n.d(e, {
                Z: function() {
                    return r
                }
            })
        },
        29815: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return i
                }
            });
            var r = n(20943);
            var u = n(13375);
            var o = n(91566);

            function i(t) {
                return function(t) {
                    if (Array.isArray(t)) return (0, r.Z)(t)
                }(t) || (0, u.Z)(t) || (0, o.Z)(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        }
    },
    function(t) {
        t.O(0, [53440, 11382, 43792, 49774, 92888, 40179], (function() {
            return e = 60942, t(t.s = e);
            var e
        }));
        var e = t.O();
        _N_E = e
    }
]);