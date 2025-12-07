(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [79655], {
        64787: function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/withdraw-agent", function() {
                return t(37166)
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
        24426: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                useAuthActions: function() {
                    return y
                }
            });
            var r = t(47568),
                i = t(26042),
                u = t(69396),
                a = t(34051),
                o = t.n(a),
                c = t(85893),
                s = t(73821),
                f = t(94497),
                l = t(44546),
                A = t(93851),
                S = t(96245),
                T = t(27484),
                d = t.n(T),
                v = t(67294),
                N = t(16726),
                p = t(82071),
                h = t(87784),
                I = t(11163),
                E = (0, v.createContext)({
                    getUserInfo: function() {},
                    getBalance: 0,
                    onRefreshBalance: function() {},
                    checkVerifySession: function() {},
                    checkRefreshToken: function() {}
                }),
                y = function() {
                    return (0, v.useContext)(E)
                };
            e.default = function(n) {
                var e = n.children,
                    t = (0, f.T)(),
                    a = (0, I.useRouter)(),
                    T = (0, f.C)((function(n) {
                        return n.auth
                    })),
                    y = T.isAuthenticated,
                    _ = T.balance,
                    M = (0, v.useState)(!1),
                    m = M[0],
                    Z = M[1],
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
                                t((0, l.Li)()), a.reload()
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
                        var n = (0, r.Z)(o().mark((function n() {
                            return o().wrap((function(n) {
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
                    k = function() {
                        var n = (0, r.Z)(o().mark((function n() {
                            var e, t;
                            return o().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (y) {
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
                                        return Z(!0), p.Z.error((0, u.Z)((0, i.Z)({}, t.modal), {
                                            centered: !0,
                                            okText: "\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19",
                                            onOk: function() {
                                                Z(!1), t.callback && t.callback()
                                            }
                                        })), n.abrupt("return");
                                    case 17:
                                        w();
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
                    w = function() {
                        var n = (0, r.Z)(o().mark((function n() {
                            var e, t;
                            return o().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (y) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 2:
                                        return n.next = 4, N.Z.getItem("access_token_bof");
                                    case 4:
                                        (e = n.sent) && (t = (0, S.Z)(e)).exp && d()(1e3 * t.exp).diff(d()(), "minute");
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
                return (0, c.jsx)(E.Provider, {
                    value: {
                        getUserInfo: function() {},
                        getBalance: _,
                        onRefreshBalance: b,
                        checkVerifySession: k,
                        checkRefreshToken: w
                    },
                    children: e
                })
            }
        },
        62103: function(n, e, t) {
            "use strict";
            var r = t(47568),
                i = t(29815),
                u = t(34051),
                a = t.n(u),
                o = t(94497),
                c = t(994),
                s = t(9473),
                f = t(35502),
                l = t(81758),
                A = t(67294),
                S = t(44546),
                T = t(49736);
            e.Z = function() {
                var n = (0, o.T)(),
                    e = (0, s.v9)(f.l1),
                    t = (0, s.v9)(S.LT).roleName,
                    u = (0, i.Z)(T.e.OnlyAgent).includes(t);
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
                    return u ? n((0, c.Of)()) : void 0
                }), {
                    revalidateOnMount: !0,
                    revalidateOnFocus: !0
                });
                var d = e.systemMaintenance,
                    v = e.openDepositWithdraw,
                    N = e.openDepositWithdrawAgent,
                    p = e.loading,
                    h = (0, l.ZP)("fetchSystemSetting", (function() {
                        return y()
                    }), {
                        revalidateOnMount: !0,
                        revalidateOnFocus: !0
                    }),
                    I = h.data,
                    E = h.isLoading,
                    y = function() {
                        var n = (0, r.Z)(a().mark((function n() {
                            var e;
                            return a().wrap((function(n) {
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
                    _ = (0, A.useMemo)((function() {
                        return !E && (null === I || void 0 === I ? void 0 : I.system_maintenance)
                    }), [I, E]);
                return {
                    isSystemMaintenance: _ || !p && (d || !v),
                    onlySystemMaintenance: _ || !p && d,
                    closePageDepositWithdrawAgent: !!u && !N
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
                u = [r.ADMIN, r.ADMIN_ASSISTANT],
                a = [r.AGENT, r.AGENT_ASSISTANT],
                o = {
                    AllRoles: i,
                    OnlyAdmin: u,
                    OnlyMaster: [r.MASTER, r.MASTER_ASSISTANT],
                    OnlyAgent: a,
                    OnlyAssistant: [r.ADMIN_ASSISTANT, r.MASTER_ASSISTANT, r.AGENT_ASSISTANT],
                    IsNotAdmin: [r.AGENT, r.AGENT_ASSISTANT, r.MASTER_ASSISTANT, r.MASTER],
                    IsNotMaster: [r.ADMIN, r.ADMIN_ASSISTANT, r.AGENT, r.AGENT_ASSISTANT],
                    IsNotAgent: [r.ADMIN, r.ADMIN_ASSISTANT, r.MASTER, r.MASTER_ASSISTANT]
                }
        },
        37166: function(n, e, t) {
            "use strict";
            t.r(e);
            var r = t(85893),
                i = t(32013),
                u = t(75707),
                a = t(67294),
                o = t(62103),
                c = t(33859),
                s = (0, u.Z)((function() {
                    return Promise.all([t.e(74885), t.e(23530), t.e(80173), t.e(27074), t.e(73553), t.e(10957), t.e(34729), t.e(23585), t.e(46008), t.e(14011), t.e(46664), t.e(30709), t.e(79915), t.e(92077), t.e(68574), t.e(25675), t.e(87807), t.e(63913), t.e(43792), t.e(74308), t.e(88264), t.e(17272), t.e(57726), t.e(92394), t.e(34408), t.e(80771), t.e(81861)]).then(t.bind(t, 81861))
                }));
            e.default = function() {
                var n = (0, o.Z)().isSystemMaintenance,
                    e = (0, i.useNotificationContext)(),
                    t = e.resetAlert,
                    u = e.alert;
                return (0, a.useEffect)((function() {
                    t("DEPOSIT_WITHDRAW_AGENT")
                }), []), (0, a.useEffect)((function() {
                    t("DEPOSIT_WITHDRAW_AGENT")
                }), [u.deposit_withdraw.agent]), n ? (0, r.jsx)(c.ZP, {
                    status: "403",
                    title: "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e1b\u0e34\u0e14\u0e1b\u0e23\u0e31\u0e1a\u0e1b\u0e23\u0e38\u0e07"
                }) : (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(s, {
                        title: "\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e1d\u0e32\u0e01\u0e16\u0e2d\u0e19"
                    })
                })
            }
        },
        94497: function(n, e, t) {
            "use strict";
            t.d(e, {
                C: function() {
                    return u
                },
                T: function() {
                    return i
                }
            });
            var r = t(9473),
                i = function() {
                    return (0, r.I0)()
                },
                u = r.v9
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
                u = t(32125),
                a = t(22628),
                o = t(5152),
                c = t.n(o);
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
                            children: (0, i.jsx)(a.Z, {})
                        })
                    }
                })
            }
            var l = (0, u.ZP)("div").withConfig({
                componentId: "sc-c84c05e3-0"
            })(s())
        },
        87784: function(n, e, t) {
            "use strict";
            t.d(e, {
                U: function() {
                    return u
                }
            });
            var r = t(26042),
                i = t(67294),
                u = function(n, e) {
                    var t = (0, i.useMemo)((function() {
                        var e = {},
                            t = !0,
                            i = !1,
                            u = void 0;
                        try {
                            for (var a, o = n[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
                                var c = a.value;
                                if (c.errorCodes) {
                                    var s = !0,
                                        f = !1,
                                        l = void 0;
                                    try {
                                        for (var A, S = c.errorCodes[Symbol.iterator](); !(s = (A = S.next()).done); s = !0) {
                                            e[A.value] = (0, r.Z)({}, c)
                                        }
                                    } catch (I) {
                                        f = !0, l = I
                                    } finally {
                                        try {
                                            s || null == S.return || S.return()
                                        } finally {
                                            if (f) throw l
                                        }
                                    }
                                }
                                if (c.statusCodes) {
                                    var T = !0,
                                        d = !1,
                                        v = void 0;
                                    try {
                                        for (var N, p = c.statusCodes[Symbol.iterator](); !(T = (N = p.next()).done); T = !0) {
                                            var h = N.value;
                                            e["".concat(h)] = (0, r.Z)({}, c)
                                        }
                                    } catch (I) {
                                        d = !0, v = I
                                    } finally {
                                        try {
                                            T || null == p.return || p.return()
                                        } finally {
                                            if (d) throw v
                                        }
                                    }
                                }
                            }
                        } catch (I) {
                            i = !0, u = I
                        } finally {
                            try {
                                t || null == o.return || o.return()
                            } finally {
                                if (i) throw u
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
                    return a
                }
            });
            var r = t(20943);
            var i = t(13375);
            var u = t(91566);

            function a(n) {
                return function(n) {
                    if (Array.isArray(n)) return (0, r.Z)(n)
                }(n) || (0, i.Z)(n) || (0, u.Z)(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        }
    },
    function(n) {
        n.O(0, [53662, 53440, 11382, 4585, 58278, 71577, 26574, 76519, 82071, 81758, 26131, 32013, 49774, 92888, 40179], (function() {
            return e = 64787, n(n.s = e);
            var e
        }));
        var e = n.O();
        _N_E = e
    }
]);