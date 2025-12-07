(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [13107], {
        72735: function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/deposit-withdraw/pending", function() {
                return t(84149)
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
        24426: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                useAuthActions: function() {
                    return _
                }
            });
            var r = t(47568),
                i = t(26042),
                a = t(69396),
                o = t(34051),
                u = t.n(o),
                c = t(85893),
                s = t(73821),
                f = t(94497),
                l = t(44546),
                A = t(93851),
                S = t(96245),
                d = t(27484),
                T = t.n(d),
                v = t(67294),
                p = t(16726),
                N = t(82071),
                h = t(87784),
                E = t(11163),
                I = (0, v.createContext)({
                    getUserInfo: function() {},
                    getBalance: 0,
                    onRefreshBalance: function() {},
                    checkVerifySession: function() {},
                    checkRefreshToken: function() {}
                }),
                _ = function() {
                    return (0, v.useContext)(I)
                };
            e.default = function(n) {
                var e = n.children,
                    t = (0, f.T)(),
                    o = (0, E.useRouter)(),
                    d = (0, f.C)((function(n) {
                        return n.auth
                    })),
                    _ = d.isAuthenticated,
                    M = d.balance,
                    y = (0, v.useState)(!1),
                    m = y[0],
                    Z = y[1],
                    x = (0, h.U)([{
                        errorCodes: ["GATEWAY_2008"],
                        modal: {
                            title: "\u0e40\u0e0b\u0e2a\u0e0a\u0e31\u0e48\u0e19\u0e2b\u0e21\u0e14\u0e2d\u0e32\u0e22\u0e38 \u0e42\u0e1b\u0e23\u0e14\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",
                            content: "\u0e01\u0e23\u0e38\u0e13\u0e32\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07"
                        },
                        callback: function() {
                            t((0, l.Li)())
                        }
                    }, {
                        errorCodes: ["GATEWAY_4003"],
                        modal: {
                            title: "\u0e40\u0e0b\u0e2a\u0e0a\u0e31\u0e48\u0e19\u0e2b\u0e21\u0e14\u0e2d\u0e32\u0e22\u0e38 \u0e42\u0e1b\u0e23\u0e14\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",
                            content: "\u0e01\u0e23\u0e38\u0e13\u0e32\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",
                            onOk: function() {
                                t((0, l.Li)()), o.reload()
                            }
                        },
                        callback: function() {
                            t((0, l.Li)())
                        }
                    }, {
                        errorCodes: ["GATEWAY_2006"],
                        modal: {
                            title: "\u0e21\u0e35\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a\u0e08\u0e32\u0e01\u0e2d\u0e38\u0e1b\u0e01\u0e23\u0e13\u0e4c\u0e2d\u0e37\u0e48\u0e19",
                            content: "\u0e01\u0e23\u0e38\u0e13\u0e32\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07"
                        },
                        callback: function() {
                            t((0, l.Li)())
                        }
                    }, {
                        errorCodes: ["GATEWAY_2005"],
                        modal: {
                            title: "\u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e16\u0e39\u0e01\u0e23\u0e30\u0e07\u0e31\u0e1a",
                            content: "\u0e01\u0e23\u0e38\u0e13\u0e32\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07"
                        },
                        callback: function() {
                            t((0, l.Li)())
                        }
                    }]).errorHandler,
                    b = function() {
                        var n = (0, r.Z)(u().mark((function n() {
                            return u().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        t((0, s.EG)());
                                    case 1:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }(),
                    g = function() {
                        var n = (0, r.Z)(u().mark((function n() {
                            var e, t;
                            return u().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (_) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 2:
                                        return n.prev = 2, n.next = 5, A.e.verifySession();
                                    case 5:
                                        n.next = 17;
                                        break;
                                    case 7:
                                        if (n.prev = 7, n.t0 = n.catch(2), !(n.t0 && n.t0.response && n.t0.response.data)) {
                                            n.next = 17;
                                            break
                                        }
                                        if (e = n.t0.response.data.code, !(t = x(e))) {
                                            n.next = 17;
                                            break
                                        }
                                        if (!t.modal || m) {
                                            n.next = 17;
                                            break
                                        }
                                        return Z(!0), N.Z.error((0, a.Z)((0, i.Z)({}, t.modal), {
                                            centered: !0,
                                            okText: "\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19",
                                            onOk: function() {
                                                Z(!1), t.callback && t.callback()
                                            }
                                        })), n.abrupt("return");
                                    case 17:
                                        k();
                                    case 18:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [2, 7]
                            ])
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }(),
                    k = function() {
                        var n = (0, r.Z)(u().mark((function n() {
                            var e, t;
                            return u().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (_) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 2:
                                        return n.next = 4, p.Z.getItem("access_token_bof");
                                    case 4:
                                        (e = n.sent) && (t = (0, S.Z)(e)).exp && T()(1e3 * t.exp).diff(T()(), "minute");
                                    case 6:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }();
                return (0, c.jsx)(I.Provider, {
                    value: {
                        getUserInfo: function() {},
                        getBalance: M,
                        onRefreshBalance: b,
                        checkVerifySession: g,
                        checkRefreshToken: k
                    },
                    children: e
                })
            }
        },
        62103: function(n, e, t) {
            "use strict";
            var r = t(47568),
                i = t(29815),
                a = t(34051),
                o = t.n(a),
                u = t(94497),
                c = t(994),
                s = t(9473),
                f = t(35502),
                l = t(81758),
                A = t(67294),
                S = t(44546),
                d = t(49736);
            e.Z = function() {
                var n = (0, u.T)(),
                    e = (0, s.v9)(f.l1),
                    t = (0, s.v9)(S.LT).roleName,
                    a = (0, i.Z)(d.e.OnlyAgent).includes(t);
                (0, l.ZP)("fetchSystemMaintenance", (function() {
                    return n((0, c.Z)())
                }), {
                    revalidateOnMount: !0,
                    revalidateOnFocus: !0
                }), (0, l.ZP)("fetchSystemOpening", (function() {
                    return n((0, c.tr)())
                }), {
                    revalidateOnMount: !0,
                    revalidateOnFocus: !0
                }), (0, l.ZP)("fetchSystemOpeningAgent", (function() {
                    return a ? n((0, c.Of)()) : void 0
                }), {
                    revalidateOnMount: !0,
                    revalidateOnFocus: !0
                });
                var T = e.systemMaintenance,
                    v = e.openDepositWithdraw,
                    p = e.openDepositWithdrawAgent,
                    N = e.loading,
                    h = (0, l.ZP)("fetchSystemSetting", (function() {
                        return _()
                    }), {
                        revalidateOnMount: !0,
                        revalidateOnFocus: !0
                    }),
                    E = h.data,
                    I = h.isLoading,
                    _ = function() {
                        var n = (0, r.Z)(o().mark((function n() {
                            var e;
                            return o().wrap((function(n) {
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
                    M = (0, A.useMemo)((function() {
                        return !I && (null === E || void 0 === E ? void 0 : E.system_maintenance)
                    }), [E, I]);
                return {
                    isSystemMaintenance: M || !N && (T || !v),
                    onlySystemMaintenance: M || !N && T,
                    closePageDepositWithdrawAgent: !!a && !p
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
                        return u
                    }
                }),
                function(n) {
                    n.ADMIN = "ADMIN", n.ADMIN_ASSISTANT = "ADMIN_ASSISTANT", n.MASTER = "MASTER", n.MASTER_ASSISTANT = "MASTER_ASSISTANT", n.AGENT = "AGENT", n.AGENT_ASSISTANT = "AGENT_ASSISTANT", n.MEMBER = "MEMBER"
                }(r || (r = {}));
            var i = [r.ADMIN, r.ADMIN_ASSISTANT, r.MASTER, r.MASTER_ASSISTANT, r.AGENT, r.AGENT_ASSISTANT],
                a = [r.ADMIN, r.ADMIN_ASSISTANT],
                o = [r.AGENT, r.AGENT_ASSISTANT],
                u = {
                    AllRoles: i,
                    OnlyAdmin: a,
                    OnlyMaster: [r.MASTER, r.MASTER_ASSISTANT],
                    OnlyAgent: o,
                    OnlyAssistant: [r.ADMIN_ASSISTANT, r.MASTER_ASSISTANT, r.AGENT_ASSISTANT],
                    IsNotAdmin: [r.AGENT, r.AGENT_ASSISTANT, r.MASTER_ASSISTANT, r.MASTER],
                    IsNotMaster: [r.ADMIN, r.ADMIN_ASSISTANT, r.AGENT, r.AGENT_ASSISTANT],
                    IsNotAgent: [r.ADMIN, r.ADMIN_ASSISTANT, r.MASTER, r.MASTER_ASSISTANT]
                }
        },
        84149: function(n, e, t) {
            "use strict";
            t.r(e);
            var r = t(85893),
                i = t(75707),
                a = t(32013),
                o = t(67294),
                u = t(82624),
                c = t(62103),
                s = t(33859),
                f = (0, i.Z)((function() {
                    return Promise.all([t.e(74885), t.e(23530), t.e(80173), t.e(27074), t.e(73553), t.e(10957), t.e(34729), t.e(23585), t.e(46008), t.e(14011), t.e(46664), t.e(30709), t.e(79915), t.e(92077), t.e(68574), t.e(25675), t.e(87807), t.e(63913), t.e(43792), t.e(74308), t.e(88264), t.e(17272), t.e(57726), t.e(92394), t.e(34408), t.e(80771), t.e(71689)]).then(t.bind(t, 80771))
                }));
            e.default = function() {
                var n = (0, c.Z)(),
                    e = n.isSystemMaintenance,
                    t = n.closePageDepositWithdrawAgent,
                    i = (0, a.useNotificationContext)(),
                    l = i.resetAlert,
                    A = i.alert;
                return (0, o.useEffect)((function() {
                    l("DEPOSIT_WITHDRAW_MEMBER")
                }), []), (0, o.useEffect)((function() {
                    l("DEPOSIT_WITHDRAW_MEMBER")
                }), [A.deposit_withdraw.member]), e || t ? (0, r.jsx)(s.ZP, {
                    status: "403",
                    title: "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e1b\u0e34\u0e14\u0e1b\u0e23\u0e31\u0e1a\u0e1b\u0e23\u0e38\u0e07"
                }) : (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(f, {
                        isPending: !0,
                        criteriaPage: u.uw.report_credit_transaction_pending_page,
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
                    return f
                }
            });
            var r = t(7297),
                i = t(85893),
                a = t(32125),
                o = t(22628),
                u = t(5152),
                c = t.n(u);
            t(67294);

            function s() {
                var n = (0, r.Z)(["\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        "]);
                return s = function() {
                    return n
                }, n
            }

            function f(n) {
                return c()(n, {
                    loading: function() {
                        return (0, i.jsx)(l, {
                            children: (0, i.jsx)(o.Z, {})
                        })
                    }
                })
            }
            var l = (0, a.ZP)("div").withConfig({
                componentId: "sc-c84c05e3-0"
            })(s())
        },
        87784: function(n, e, t) {
            "use strict";
            t.d(e, {
                U: function() {
                    return a
                }
            });
            var r = t(26042),
                i = t(67294),
                a = function(n, e) {
                    var t = (0, i.useMemo)((function() {
                        var e = {},
                            t = !0,
                            i = !1,
                            a = void 0;
                        try {
                            for (var o, u = n[Symbol.iterator](); !(t = (o = u.next()).done); t = !0) {
                                var c = o.value;
                                if (c.errorCodes) {
                                    var s = !0,
                                        f = !1,
                                        l = void 0;
                                    try {
                                        for (var A, S = c.errorCodes[Symbol.iterator](); !(s = (A = S.next()).done); s = !0) {
                                            e[A.value] = (0, r.Z)({}, c)
                                        }
                                    } catch (E) {
                                        f = !0, l = E
                                    } finally {
                                        try {
                                            s || null == S.return || S.return()
                                        } finally {
                                            if (f) throw l
                                        }
                                    }
                                }
                                if (c.statusCodes) {
                                    var d = !0,
                                        T = !1,
                                        v = void 0;
                                    try {
                                        for (var p, N = c.statusCodes[Symbol.iterator](); !(d = (p = N.next()).done); d = !0) {
                                            var h = p.value;
                                            e["".concat(h)] = (0, r.Z)({}, c)
                                        }
                                    } catch (E) {
                                        T = !0, v = E
                                    } finally {
                                        try {
                                            d || null == N.return || N.return()
                                        } finally {
                                            if (T) throw v
                                        }
                                    }
                                }
                            }
                        } catch (E) {
                            i = !0, a = E
                        } finally {
                            try {
                                t || null == u.return || u.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return e
                    }), []);
                    return {
                        errorHandler: function(n) {
                            return t[n] ? t[n] : e
                        }
                    }
                }
        },
        11163: function(n, e, t) {
            n.exports = t(90387)
        },
        43337: function(n, e, t) {
            "use strict";
            var r = t(67294);
            e.Z = function(n, e) {
                var t = (0, r.useRef)((function() {}));
                (0, r.useEffect)((function() {
                    t.current = n
                })), (0, r.useEffect)((function() {
                    if (null !== e) {
                        var n = setInterval((function() {
                            return t.current()
                        }), e || 0);
                        return function() {
                            return clearInterval(n)
                        }
                    }
                }), [e])
            }
        },
        29815: function(n, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return o
                }
            });
            var r = t(20943);
            var i = t(13375);
            var a = t(91566);

            function o(n) {
                return function(n) {
                    if (Array.isArray(n)) return (0, r.Z)(n)
                }(n) || (0, i.Z)(n) || (0, a.Z)(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        }
    },
    function(n) {
        n.O(0, [53662, 53440, 11382, 4585, 58278, 71577, 26574, 76519, 82071, 81758, 26131, 32013, 49774, 92888, 40179], (function() {
            return e = 72735, n(n.s = e);
            var e
        }));
        var e = n.O();
        _N_E = e
    }
]);