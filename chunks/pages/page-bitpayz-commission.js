(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [23381, 71689], {
        9998: function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/sb-bitpayz/bitpayz-commission", function() {
                return t(91226)
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
        71689: function(n, e, t) {
            "use strict";
            var i, r, u, E, c, o;
            t.d(e, {
                    JK: function() {
                        return c
                    },
                    Ss: function() {
                        return u
                    },
                    dz: function() {
                        return i
                    },
                    fb: function() {
                        return E
                    },
                    vc: function() {
                        return o
                    }
                }),
                function(n) {
                    n.PENDING = "PENDING", n.SUCCESS = "SUCCESS", n.ON_HOLD = "ON_HOLD", n.REFUND = "REFUND", n.PROCESSING = "PROCESSING", n.CONFIRM = "CONFIRM", n.REJECTED = "REJECTED", n.ERROR = "ERROR", n.EXPIRED = "EXPIRED", n.UNKNOWN = "UNKNOWN"
                }(i || (i = {})),
                function(n) {
                    n.DEPOSIT = "deposit", n.WITHDRAW = "withdraw", n.TOPUP = "topup", n.SETTLEMENT = "settlement"
                }(r || (r = {})),
                function(n) {
                    n.DEPOSIT = "deposit", n.WITHDRAW = "withdraw"
                }(u || (u = {})),
                function(n) {
                    n.PENDING = "pending", n.PROCESSING = "processing", n.COMPLETED = "completed", n.EXPIRED = "expired", n.FAILED = "failed", n.REJECTED = "rejected"
                }(E || (E = {})),
                function(n) {
                    n.PENDING = "PENDING", n.PAID = "PAID", n.SUCCESS = "SUCCESS", n.CANCEL = "CANCEL", n.EXPIRED = "EXPIRED", n.REJECT = "REJECT", n.REQUIRED_ADMIN = "REQUIRED_ADMIN"
                }(c || (c = {})),
                function(n) {
                    n.AQ1 = "AQ1", n.P2P = "P2P10X", n.BITPAYZ = "BITPAYZ", n.ZAAP = "ZAAP", n.PLZ = "PLZ"
                }(o || (o = {}))
        },
        91226: function(n, e, t) {
            "use strict";
            t.r(e);
            var i = t(85893),
                r = t(75707),
                u = t(71689),
                E = (0, r.Z)((function() {
                    return Promise.all([t.e(74885), t.e(4585), t.e(58278), t.e(71577), t.e(23530), t.e(80173), t.e(27074), t.e(73553), t.e(10957), t.e(26574), t.e(76519), t.e(34729), t.e(82071), t.e(23585), t.e(46008), t.e(14011), t.e(46664), t.e(30709), t.e(79915), t.e(92077), t.e(54081), t.e(14104), t.e(81758), t.e(69129), t.e(63913), t.e(17272), t.e(84486), t.e(80167)]).then(t.bind(t, 80167))
                }));
            e.default = function() {
                return (0, i.jsx)(E, {
                    title: "\u0e04\u0e2d\u0e21\u0e21\u0e34\u0e0a\u0e0a\u0e31\u0e48\u0e19 Bitpayz",
                    type: u.vc.BITPAYZ
                })
            }
        },
        75707: function(n, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return s
                }
            });
            var i = t(7297),
                r = t(85893),
                u = t(32125),
                E = t(22628),
                c = t(5152),
                o = t.n(c);
            t(67294);

            function f() {
                var n = (0, i.Z)(["\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        "]);
                return f = function() {
                    return n
                }, n
            }

            function s(n) {
                return o()(n, {
                    loading: function() {
                        return (0, r.jsx)(P, {
                            children: (0, r.jsx)(E.Z, {})
                        })
                    }
                })
            }
            var P = (0, u.ZP)("div").withConfig({
                componentId: "sc-c84c05e3-0"
            })(f())
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
        n.O(0, [53440, 11382, 49774, 92888, 40179], (function() {
            return e = 9998, n(n.s = e);
            var e
        }));
        var e = n.O();
        _N_E = e
    }
]);