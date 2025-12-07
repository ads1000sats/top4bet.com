(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [32389, 71689], {
        76063: function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/book-bank-special/[bank_code]/create", function() {
                return t(64110)
            }])
        },
        22628: function(n, e, t) {
            "use strict";
            var r = t(85893),
                i = t(50888),
                u = t(11382);
            e.Z = function() {
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
        71689: function(n, e, t) {
            "use strict";
            var r, i, u, c, E, o;
            t.d(e, {
                    JK: function() {
                        return E
                    },
                    Ss: function() {
                        return u
                    },
                    dz: function() {
                        return r
                    },
                    fb: function() {
                        return c
                    },
                    vc: function() {
                        return o
                    }
                }),
                function(n) {
                    n.PENDING = "PENDING", n.SUCCESS = "SUCCESS", n.ON_HOLD = "ON_HOLD", n.REFUND = "REFUND", n.PROCESSING = "PROCESSING", n.CONFIRM = "CONFIRM", n.REJECTED = "REJECTED", n.ERROR = "ERROR", n.EXPIRED = "EXPIRED", n.UNKNOWN = "UNKNOWN"
                }(r || (r = {})),
                function(n) {
                    n.DEPOSIT = "deposit", n.WITHDRAW = "withdraw", n.TOPUP = "topup", n.SETTLEMENT = "settlement"
                }(i || (i = {})),
                function(n) {
                    n.DEPOSIT = "deposit", n.WITHDRAW = "withdraw"
                }(u || (u = {})),
                function(n) {
                    n.PENDING = "pending", n.PROCESSING = "processing", n.COMPLETED = "completed", n.EXPIRED = "expired", n.FAILED = "failed", n.REJECTED = "rejected"
                }(c || (c = {})),
                function(n) {
                    n.PENDING = "PENDING", n.PAID = "PAID", n.SUCCESS = "SUCCESS", n.CANCEL = "CANCEL", n.EXPIRED = "EXPIRED", n.REJECT = "REJECT", n.REQUIRED_ADMIN = "REQUIRED_ADMIN"
                }(E || (E = {})),
                function(n) {
                    n.AQ1 = "AQ1", n.P2P = "P2P10X", n.BITPAYZ = "BITPAYZ", n.ZAAP = "ZAAP", n.PLZ = "PLZ"
                }(o || (o = {}))
        },
        64110: function(n, e, t) {
            "use strict";
            t.r(e);
            var r = t(85893),
                i = t(75707),
                u = t(11163),
                c = t(67294),
                E = t(71689),
                o = (0, i.Z)((function() {
                    return Promise.all([t.e(4585), t.e(58278), t.e(71577), t.e(23530), t.e(80173), t.e(27074), t.e(73553), t.e(10957), t.e(26574), t.e(76519), t.e(79915), t.e(54081), t.e(14104), t.e(86631), t.e(63913), t.e(57726), t.e(19273)]).then(t.bind(t, 19273))
                }));
            e.default = function() {
                var n = (0, u.useRouter)(),
                    e = (0, c.useCallback)((function() {
                        var e = n.query.bank_code;
                        if (!e) return (0, r.jsx)(r.Fragment, {});
                        var t = e.split("-")[1].toUpperCase();
                        return (0, r.jsx)(o, {
                            type: t,
                            title: t == E.vc.PLZ ? "PMP" : t,
                            isCreate: !0
                        })
                    }), [n.query]);
                return (0, r.jsx)(e, {})
            }
        },
        75707: function(n, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return s
                }
            });
            var r = t(7297),
                i = t(85893),
                u = t(32125),
                c = t(22628),
                E = t(5152),
                o = t.n(E);
            t(67294);

            function f() {
                var n = (0, r.Z)(["\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        "]);
                return f = function() {
                    return n
                }, n
            }

            function s(n) {
                return o()(n, {
                    loading: function() {
                        return (0, i.jsx)(P, {
                            children: (0, i.jsx)(c.Z, {})
                        })
                    }
                })
            }
            var P = (0, u.ZP)("div").withConfig({
                componentId: "sc-c84c05e3-0"
            })(f())
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
        }
    },
    function(n) {
        n.O(0, [53440, 11382, 49774, 92888, 40179], (function() {
            return e = 76063, n(n.s = e);
            var e
        }));
        var e = n.O();
        _N_E = e
    }
]);