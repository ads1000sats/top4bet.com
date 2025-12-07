(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [81422], {
        90086: function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/deposit-withdraw/all", function() {
                return t(72603)
            }])
        },
        22628: function(n, e, t) {
            "use strict";
            var r = t(85893),
                i = t(50888),
                a = t(11382);
            e.Z = function() {
                return (0, r.jsx)(a.Z, {
                    indicator: (0, r.jsx)(i.Z, {
                        style: {
                            fontSize: 24
                        },
                        spin: !0
                    })
                })
            }
        },
        62103: function(n, e, t) {
            "use strict";
            var r = t(47568),
                i = t(29815),
                a = t(34051),
                u = t.n(a),
                o = t(94497),
                A = t(994),
                c = t(9473),
                s = t(35502),
                S = t(81758),
                T = t(67294),
                f = t(44546),
                N = t(49736);
            e.Z = function() {
                var n = (0, o.T)(),
                    e = (0, c.v9)(s.l1),
                    t = (0, c.v9)(f.LT).roleName,
                    a = (0, i.Z)(N.e.OnlyAgent).includes(t);
                (0, S.ZP)("fetchSystemMaintenance", (function() {
                    return n((0, A.Z)())
                }), {
                    revalidateOnMount: !0,
                    revalidateOnFocus: !0
                }), (0, S.ZP)("fetchSystemOpening", (function() {
                    return n((0, A.tr)())
                }), {
                    revalidateOnMount: !0,
                    revalidateOnFocus: !0
                }), (0, S.ZP)("fetchSystemOpeningAgent", (function() {
                    return a ? n((0, A.Of)()) : void 0
                }), {
                    revalidateOnMount: !0,
                    revalidateOnFocus: !0
                });
                var l = e.systemMaintenance,
                    d = e.openDepositWithdraw,
                    M = e.openDepositWithdrawAgent,
                    I = e.loading,
                    v = (0, S.ZP)("fetchSystemSetting", (function() {
                        return p()
                    }), {
                        revalidateOnMount: !0,
                        revalidateOnFocus: !0
                    }),
                    _ = v.data,
                    E = v.isLoading,
                    p = function() {
                        var n = (0, r.Z)(u().mark((function n() {
                            var e;
                            return u().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, "/api/config", n.next = 4, fetch("/api/config").then((function(n) {
                                            return n.json()
                                        }));
                                    case 4:
                                        return e = n.sent, n.abrupt("return", e);
                                    case 8:
                                        return n.prev = 8, n.t0 = n.catch(0), n.abrupt("return", void 0);
                                    case 11:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [0, 8]
                            ])
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }(),
                    h = (0, T.useMemo)((function() {
                        return !E && (null === _ || void 0 === _ ? void 0 : _.system_maintenance)
                    }), [_, E]);
                return {
                    isSystemMaintenance: h || !I && (l || !d),
                    onlySystemMaintenance: h || !I && l,
                    closePageDepositWithdrawAgent: !!a && !M
                }
            }
        },
        49736: function(n, e, t) {
            "use strict";
            var r;
            t.d(e, {
                    G: function() {
                        return r
                    },
                    e: function() {
                        return o
                    }
                }),
                function(n) {
                    n.ADMIN = "ADMIN", n.ADMIN_ASSISTANT = "ADMIN_ASSISTANT", n.MASTER = "MASTER", n.MASTER_ASSISTANT = "MASTER_ASSISTANT", n.AGENT = "AGENT", n.AGENT_ASSISTANT = "AGENT_ASSISTANT", n.MEMBER = "MEMBER"
                }(r || (r = {}));
            var i = [r.ADMIN, r.ADMIN_ASSISTANT, r.MASTER, r.MASTER_ASSISTANT, r.AGENT, r.AGENT_ASSISTANT],
                a = [r.ADMIN, r.ADMIN_ASSISTANT],
                u = [r.AGENT, r.AGENT_ASSISTANT],
                o = {
                    AllRoles: i,
                    OnlyAdmin: a,
                    OnlyMaster: [r.MASTER, r.MASTER_ASSISTANT],
                    OnlyAgent: u,
                    OnlyAssistant: [r.ADMIN_ASSISTANT, r.MASTER_ASSISTANT, r.AGENT_ASSISTANT],
                    IsNotAdmin: [r.AGENT, r.AGENT_ASSISTANT, r.MASTER_ASSISTANT, r.MASTER],
                    IsNotMaster: [r.ADMIN, r.ADMIN_ASSISTANT, r.AGENT, r.AGENT_ASSISTANT],
                    IsNotAgent: [r.ADMIN, r.ADMIN_ASSISTANT, r.MASTER, r.MASTER_ASSISTANT]
                }
        },
        72603: function(n, e, t) {
            "use strict";
            t.r(e);
            var r = t(85893),
                i = t(75707),
                a = t(82624),
                u = (t(67294), t(62103)),
                o = t(33859),
                A = (0, i.Z)((function() {
                    return Promise.all([t.e(74885), t.e(53662), t.e(4585), t.e(58278), t.e(71577), t.e(23530), t.e(80173), t.e(27074), t.e(73553), t.e(10957), t.e(26574), t.e(76519), t.e(34729), t.e(82071), t.e(23585), t.e(46008), t.e(14011), t.e(46664), t.e(30709), t.e(79915), t.e(92077), t.e(68574), t.e(25675), t.e(87807), t.e(63913), t.e(43792), t.e(74308), t.e(88264), t.e(17272), t.e(92394), t.e(34408), t.e(80771), t.e(30891)]).then(t.bind(t, 80771))
                }));
            e.default = function() {
                var n = (0, u.Z)(),
                    e = n.isSystemMaintenance,
                    t = n.closePageDepositWithdrawAgent;
                return e || t ? (0, r.jsx)(o.ZP, {
                    status: "403",
                    title: "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e1b\u0e34\u0e14\u0e1b\u0e23\u0e31\u0e1a\u0e1b\u0e23\u0e38\u0e07"
                }) : (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(A, {
                        criteriaPage: a.uw.report_credit_transaction_all_page,
                        title: "\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e1d\u0e32\u0e01\u0e16\u0e2d\u0e19"
                    })
                })
            }
        },
        94497: function(n, e, t) {
            "use strict";
            t.d(e, {
                C: function() {
                    return a
                },
                T: function() {
                    return i
                }
            });
            var r = t(9473),
                i = function() {
                    return (0, r.I0)()
                },
                a = r.v9
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
                a = t(32125),
                u = t(22628),
                o = t(5152),
                A = t.n(o);
            t(67294);

            function c() {
                var n = (0, r.Z)(["\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        "]);
                return c = function() {
                    return n
                }, n
            }

            function s(n) {
                return A()(n, {
                    loading: function() {
                        return (0, i.jsx)(S, {
                            children: (0, i.jsx)(u.Z, {})
                        })
                    }
                })
            }
            var S = (0, a.ZP)("div").withConfig({
                componentId: "sc-c84c05e3-0"
            })(c())
        },
        29815: function(n, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return u
                }
            });
            var r = t(20943);
            var i = t(13375);
            var a = t(91566);

            function u(n) {
                return function(n) {
                    if (Array.isArray(n)) return (0, r.Z)(n)
                }(n) || (0, i.Z)(n) || (0, a.Z)(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        }
    },
    function(n) {
        n.O(0, [53440, 11382, 81758, 26131, 49774, 92888, 40179], (function() {
            return e = 90086, n(n.s = e);
            var e
        }));
        var e = n.O();
        _N_E = e
    }
]);