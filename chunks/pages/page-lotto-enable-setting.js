(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [75578], {
        82318: function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/lotto-huay/[type_huay]/enable-setting", function() {
                return t(90661)
            }])
        },
        22628: function(n, e, t) {
            "use strict";
            var r = t(85893),
                u = t(50888),
                i = t(11382);
            e.Z = function() {
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
        90661: function(n, e, t) {
            "use strict";
            t.r(e);
            var r = t(85893),
                u = t(75707),
                i = t(11163),
                o = t(43792),
                c = t(27491),
                a = (0, u.Z)((function() {
                    return Promise.all([t.e(4585), t.e(58278), t.e(71577), t.e(23530), t.e(80173), t.e(27074), t.e(73553), t.e(10957), t.e(26574), t.e(76519), t.e(82071), t.e(79915), t.e(63913), t.e(88264), t.e(56751)]).then(t.bind(t, 84398))
                }));
            e.default = function() {
                var n = (0, i.useRouter)(),
                    e = (0, o.$O)(n.query.type_huay, n.query.sub_type_huay);
                return [c.r.ThaiGovern].includes(e.lotto_type) && (e.lotto_subtype = "01"), (0, r.jsx)(a, {
                    title: "\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32",
                    type: e
                })
            }
        },
        75707: function(n, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return f
                }
            });
            var r = t(7297),
                u = t(85893),
                i = t(32125),
                o = t(22628),
                c = t(5152),
                a = t.n(c);
            t(67294);

            function s() {
                var n = (0, r.Z)(["\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        "]);
                return s = function() {
                    return n
                }, n
            }

            function f(n) {
                return a()(n, {
                    loading: function() {
                        return (0, u.jsx)(l, {
                            children: (0, u.jsx)(o.Z, {})
                        })
                    }
                })
            }
            var l = (0, i.ZP)("div").withConfig({
                componentId: "sc-c84c05e3-0"
            })(s())
        },
        11163: function(n, e, t) {
            n.exports = t(90387)
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
        },
        29815: function(n, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return o
                }
            });
            var r = t(20943);
            var u = t(13375);
            var i = t(91566);

            function o(n) {
                return function(n) {
                    if (Array.isArray(n)) return (0, r.Z)(n)
                }(n) || (0, u.Z)(n) || (0, i.Z)(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        }
    },
    function(n) {
        n.O(0, [53440, 11382, 43792, 49774, 92888, 40179], (function() {
            return e = 82318, n(n.s = e);
            var e
        }));
        var e = n.O();
        _N_E = e
    }
]);