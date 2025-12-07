(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [14765, 71689], {
        57097: function(n, t, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/sb-zaap/zaap-setting", function() {
                return e(29826)
            }])
        },
        22628: function(n, t, e) {
            "use strict";
            var i = e(85893),
                r = e(50888),
                u = e(11382);
            t.Z = function() {
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
        71689: function(n, t, e) {
            "use strict";
            var i, r, u, E, c, o;
            e.d(t, {
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
        29826: function(n, t, e) {
            "use strict";
            e.r(t);
            var i = e(85893),
                r = e(75707),
                u = e(71689),
                E = (0, r.Z)((function() {
                    return Promise.all([e.e(4585), e.e(58278), e.e(71577), e.e(23530), e.e(80173), e.e(27074), e.e(73553), e.e(10957), e.e(26574), e.e(76519), e.e(79915), e.e(63913), e.e(31681), e.e(58815)]).then(e.bind(e, 82466))
                }));
            t.default = function() {
                return (0, i.jsx)(E, {
                    title: "\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\u0e23\u0e30\u0e1a\u0e1a\u0e43\u0e0a\u0e49\u0e08\u0e48\u0e32\u0e22 ZAAP",
                    type: u.vc.ZAAP
                })
            }
        },
        75707: function(n, t, e) {
            "use strict";
            e.d(t, {
                Z: function() {
                    return s
                }
            });
            var i = e(7297),
                r = e(85893),
                u = e(32125),
                E = e(22628),
                c = e(5152),
                o = e.n(c);
            e(67294);

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
        7297: function(n, t, e) {
            "use strict";

            function i(n, t) {
                return t || (t = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            e.d(t, {
                Z: function() {
                    return i
                }
            })
        }
    },
    function(n) {
        n.O(0, [53440, 11382, 49774, 92888, 40179], (function() {
            return t = 57097, n(n.s = t);
            var t
        }));
        var t = n.O();
        _N_E = t
    }
]);