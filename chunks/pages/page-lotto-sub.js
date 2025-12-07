(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [15731], {
        64135: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/lotto-huay/[type_huay]/[sub_type_huay]", function() {
                return n(7249)
            }])
        },
        22628: function(e, t, n) {
            "use strict";
            var r = n(85893),
                u = n(50888),
                i = n(11382);
            t.Z = function() {
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
        7249: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(85893),
                u = n(75707),
                i = n(11163),
                o = n(43792),
                c = (0, u.Z)((function() {
                    return Promise.all([n.e(74885), n.e(4585), n.e(58278), n.e(71577), n.e(23530), n.e(80173), n.e(27074), n.e(73553), n.e(34729), n.e(23585), n.e(46008), n.e(14011), n.e(46664), n.e(30709), n.e(92077), n.e(68574), n.e(85353), n.e(88264), n.e(11539)]).then(n.bind(n, 11539))
                }));
            t.default = function() {
                var e = (0, i.useRouter)(),
                    t = (0, o.$O)(e.query.type_huay, e.query.sub_type_huay),
                    n = (0, o.IK)({
                        lotto_type: t.lotto_type,
                        lotto_subtype: t.lotto_subtype
                    });
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(c, {
                        title: n,
                        type: t
                    })
                })
            }
        },
        75707: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return f
                }
            });
            var r = n(7297),
                u = n(85893),
                i = n(32125),
                o = n(22628),
                c = n(5152),
                s = n.n(c);
            n(67294);

            function a() {
                var e = (0, r.Z)(["\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        "]);
                return a = function() {
                    return e
                }, e
            }

            function f(e) {
                return s()(e, {
                    loading: function() {
                        return (0, u.jsx)(l, {
                            children: (0, u.jsx)(o.Z, {})
                        })
                    }
                })
            }
            var l = (0, i.ZP)("div").withConfig({
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
                    return o
                }
            });
            var r = n(20943);
            var u = n(13375);
            var i = n(91566);

            function o(e) {
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
            return t = 64135, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);