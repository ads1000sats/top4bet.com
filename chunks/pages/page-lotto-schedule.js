(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [51339], {
        87227: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/lotto-huay/[type_huay]/schedule-setting", function() {
                return n(57987)
            }])
        },
        22628: function(e, t, n) {
            "use strict";
            var r = n(85893),
                o = n(50888),
                u = n(11382);
            t.Z = function() {
                return (0, r.jsx)(u.Z, {
                    indicator: (0, r.jsx)(o.Z, {
                        style: {
                            fontSize: 24
                        },
                        spin: !0
                    })
                })
            }
        },
        57987: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(85893),
                o = n(75707),
                u = n(11163),
                i = n(43792),
                c = n(67294),
                s = n(27491),
                a = (0, o.Z)((function() {
                    return Promise.all([n.e(74885), n.e(4585), n.e(58278), n.e(71577), n.e(23530), n.e(80173), n.e(27074), n.e(73553), n.e(10957), n.e(26574), n.e(76519), n.e(79915), n.e(68574), n.e(41192), n.e(88264), n.e(31585)]).then(n.bind(n, 31585))
                })),
                l = (0, o.Z)((function() {
                    return Promise.all([n.e(74885), n.e(4585), n.e(58278), n.e(71577), n.e(23530), n.e(80173), n.e(27074), n.e(73553), n.e(10957), n.e(26574), n.e(76519), n.e(79915), n.e(68574), n.e(41192), n.e(88264), n.e(23264)]).then(n.bind(n, 23264))
                })),
                f = (0, o.Z)((function() {
                    return Promise.all([n.e(74885), n.e(4585), n.e(58278), n.e(71577), n.e(23530), n.e(80173), n.e(27074), n.e(73553), n.e(10957), n.e(26574), n.e(76519), n.e(79915), n.e(68574), n.e(41192), n.e(63913), n.e(88264), n.e(29035)]).then(n.bind(n, 29035))
                }));
            t.default = function() {
                var e = (0, u.useRouter)(),
                    t = (0, i.$O)(e.query.type_huay, e.query.sub_type_huay || e.query.id),
                    n = (0, i.IK)({
                        lotto_type: t.lotto_type,
                        lotto_subtype: t.lotto_subtype
                    }),
                    o = (0, c.useCallback)((function() {
                        var e = "".concat(n, " - \u0e01\u0e33\u0e2b\u0e19\u0e14\u0e01\u0e32\u0e23");
                        return [s.r.Stock, s.r.Set, s.r.LAOS4].includes(t.lotto_type) ? (0, r.jsx)(a, {
                            title: e,
                            lotto_type: t.lotto_type
                        }) : [s.r.Lottery].includes(t.lotto_type) ? (0, r.jsx)(f, {
                            title: e
                        }) : (0, r.jsx)(l, {
                            title: e,
                            lotto_type: t.lotto_type
                        })
                    }), [t]);
                return (0, r.jsx)(o, {})
            }
        },
        75707: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = n(7297),
                o = n(85893),
                u = n(32125),
                i = n(22628),
                c = n(5152),
                s = n.n(c);
            n(67294);

            function a() {
                var e = (0, r.Z)(["\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        "]);
                return a = function() {
                    return e
                }, e
            }

            function l(e) {
                return s()(e, {
                    loading: function() {
                        return (0, o.jsx)(f, {
                            children: (0, o.jsx)(i.Z, {})
                        })
                    }
                })
            }
            var f = (0, u.ZP)("div").withConfig({
                componentId: "sc-c84c05e3-0"
            })(a())
        },
        11163: function(e, t, n) {
            e.exports = n(90387)
        },
        7297: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        29815: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(20943);
            var o = n(13375);
            var u = n(91566);

            function i(e) {
                return function(e) {
                    if (Array.isArray(e)) return (0, r.Z)(e)
                }(e) || (0, o.Z)(e) || (0, u.Z)(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        }
    },
    function(e) {
        e.O(0, [53440, 11382, 43792, 49774, 92888, 40179], (function() {
            return t = 87227, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);