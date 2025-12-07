"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [32013], {
        32013: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return W
                },
                useNotificationContext: function() {
                    return N
                }
            });
            var r = n(47568),
                a = n(26042),
                c = n(69396),
                u = n(29815),
                s = n(34051),
                i = n.n(s),
                o = n(85893),
                p = n(67294),
                f = n(55069),
                l = n(94497),
                h = n(43337),
                d = n(49736),
                w = n(24196),
                v = n(18469),
                m = {
                    notification: function() {
                        return Z.apply(this, arguments)
                    },
                    notificationLatest: function() {
                        return _.apply(this, arguments)
                    },
                    readNotification: function(t) {
                        return k.apply(this, arguments)
                    }
                };

            function Z() {
                return (Z = (0, r.Z)(i().mark((function t() {
                    var e;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, (0, w.w)().get("/v1/deposit-withdraw/notify");
                            case 3:
                                return e = t.sent, t.abrupt("return", (0, v.s)(e));
                            case 7:
                                return t.prev = 7, t.t0 = t.catch(0), t.abrupt("return", t.t0.response.data);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 7]
                    ])
                })))).apply(this, arguments)
            }

            function _() {
                return (_ = (0, r.Z)(i().mark((function t() {
                    var e;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, (0, w.w)().get("/v1/notify/latest-event");
                            case 3:
                                return e = t.sent, t.abrupt("return", (0, v.s)(e));
                            case 7:
                                return t.prev = 7, t.t0 = t.catch(0), t.abrupt("return", (0, v.i)(t.t0));
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 7]
                    ])
                })))).apply(this, arguments)
            }

            function k() {
                return (k = (0, r.Z)(i().mark((function t(e) {
                    var n;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, (0, w.w)().get("/v1/notify/read?event=".concat(e));
                            case 3:
                                return n = t.sent, t.abrupt("return", (0, v.s)(n));
                            case 7:
                                return t.prev = 7, t.t0 = t.catch(0), t.abrupt("return", (0, v.i)(t.t0));
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 7]
                    ])
                })))).apply(this, arguments)
            }
            var b = n(24426),
                g = n(96486),
                T = n(29914);

            function y(t, e, n) {
                var r, a = 0;
                return function() {
                    for (var c = arguments.length, s = new Array(c), i = 0; i < c; i++) s[i] = arguments[i];
                    if (a < e) return a++, t.apply(void 0, (0, u.Z)(s));
                    r || (r = setTimeout((function() {
                        a = 0, r && (clearTimeout(r), r = void 0)
                    }), n))
                }
            }
            var x = n(81758),
                A = n(43963),
                E = {
                    new_message: !1,
                    new_member: !1,
                    contact_us: !1,
                    deposit_withdraw: {
                        master: !1,
                        member: !1,
                        agent: !1
                    }
                },
                S = {
                    contact_us: null,
                    message: null,
                    new_member: null
                },
                C = {
                    member: null,
                    agent: null,
                    master: null
                },
                I = (0, p.createContext)({
                    memberPendingCount: null,
                    agentPendingCount: null,
                    masterPendingCount: null,
                    onCallBack: function(t) {},
                    alert: E,
                    notificationLatest: S,
                    checkNotificationDepositWithdraw: function() {},
                    resetAlert: function(t) {},
                    dataDepositWithdraw: [],
                    resetAutoDepositWithdraw: function() {},
                    countUnreadTicket: void 0
                }),
                N = function() {
                    return (0, p.useContext)(I)
                },
                W = function(t) {
                    var e = t.children,
                        n = (0, l.C)((function(t) {
                            return t.auth
                        })),
                        s = n.isAuthenticated,
                        w = n.roleName,
                        v = n.actual_action_by_member_id,
                        Z = n.memberId,
                        _ = (0, p.useState)([]),
                        k = _[0],
                        N = _[1],
                        W = (0, p.useState)(C),
                        D = W[0],
                        M = W[1],
                        R = (0, p.useState)(S),
                        P = R[0],
                        L = R[1],
                        G = (0, p.useState)(E),
                        X = G[0],
                        z = G[1],
                        O = (0, p.useState)(!1),
                        B = O[0],
                        U = O[1],
                        H = (0, p.useState)("none"),
                        j = H[0],
                        F = H[1],
                        K = (0, p.useState)("none"),
                        V = K[0],
                        q = K[1],
                        J = (0, f.EM)(j),
                        Q = (0, f.EM)(V),
                        Y = (0, b.useAuthActions)(),
                        $ = Y.checkVerifySession,
                        tt = Y.onRefreshBalance,
                        et = (0, x.ZP)("fetchUnreadTicket", (function() {
                            return (0, u.Z)(d.e.OnlyAgent).includes(w) ? A.w.getUnreadTicket() : void 0
                        }), {
                            revalidateOnMount: !0,
                            revalidateOnFocus: !0
                        }).data,
                        nt = (0, p.useMemo)((function() {
                            if (null === et || void 0 === et ? void 0 : et.data) return et.data
                        }), [et]);
                    (0, p.useEffect)((function() {
                        s && (ft().catch(console.error), pt().catch(console.error))
                    }), [v]), (0, h.Z)((function() {
                        s && (ot().catch(console.error), it().catch(console.error))
                    }), 3e4), (0, p.useEffect)((function() {
                        U(!1)
                    }), [s]), (0, p.useEffect)((function() {
                        s && v && Z ? (F("to-".concat(v)), q("to-".concat(Z))) : (F("none"), q("none"), M({
                            member: null,
                            master: null,
                            agent: null
                        }), ht("CLEAR_ALL"))
                    }), [s, v]);
                    var rt = function() {
                            var t = (0, r.Z)(i().mark((function t(e) {
                                return i().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, m.readNotification(e);
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }(),
                        at = function() {
                            var t = (0, r.Z)(i().mark((function t() {
                                var e, n;
                                return i().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, m.notificationLatest();
                                        case 3:
                                            e = t.sent, n = (0, g.keyBy)(e.data, "event"), L({
                                                new_member: n["new-member"] ? n["new-member"].total : null,
                                                contact_us: n["contact-us"] ? n["contact-us"].total : null,
                                                message: n["new-message"] ? n["new-message"].total : null
                                            }), t.next = 10;
                                            break;
                                        case 8:
                                            t.prev = 8, t.t0 = t.catch(0);
                                        case 10:
                                            return t.prev = 10, t.finish(10);
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 8, 10, 12]
                                ])
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        ct = function() {
                            var t = (0, r.Z)(i().mark((function t() {
                                var e, n, r, a, c;
                                return i().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, m.notification();
                                        case 3:
                                            (e = t.sent).data && (n = e.data, r = n.agent, a = n.master, c = n.member, M({
                                                agent: r,
                                                master: a,
                                                member: c
                                            }), ([d.G.ADMIN, d.G.ADMIN_ASSISTANT].includes(w) && a || [d.G.MASTER, d.G.MASTER_ASSISTANT].includes(w) && r || [d.G.AGENT, d.G.AGENT_ASSISTANT].includes(w) && c) && (B || U(!0))), t.next = 9;
                                            break;
                                        case 7:
                                            t.prev = 7, t.t0 = t.catch(0);
                                        case 9:
                                            return t.prev = 9, t.finish(9);
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 7, 9, 11]
                                ])
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        ut = y(at, 1, 2e3),
                        st = y(ct, 1, 2e3),
                        it = function() {
                            var t = (0, r.Z)(i().mark((function t() {
                                return i().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            ut();
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        ot = function() {
                            var t = (0, r.Z)(i().mark((function t() {
                                return i().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (s) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            st();
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        pt = function() {
                            var t = (0, r.Z)(i().mark((function t() {
                                return i().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            ut();
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        ft = function() {
                            var t = (0, r.Z)(i().mark((function t() {
                                return i().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (s) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            st();
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        lt = (0, p.useRef)((function() {})),
                        ht = function(t) {
                            "DEPOSIT_WITHDRAW_MEMBER" === t ? z((0, c.Z)((0, a.Z)({}, X), {
                                deposit_withdraw: (0, c.Z)((0, a.Z)({}, X.deposit_withdraw), {
                                    member: !1
                                })
                            })) : "DEPOSIT_WITHDRAW_AGENT" === t ? z((0, c.Z)((0, a.Z)({}, X), {
                                deposit_withdraw: (0, c.Z)((0, a.Z)({}, X.deposit_withdraw), {
                                    agent: !1
                                })
                            })) : "DEPOSIT_WITHDRAW_MASTER" === t ? z((0, c.Z)((0, a.Z)({}, X), {
                                deposit_withdraw: (0, c.Z)((0, a.Z)({}, X.deposit_withdraw), {
                                    master: !1
                                })
                            })) : "NEW_MEMBER" === t ? (L((0, c.Z)((0, a.Z)({}, P), {
                                new_member: null
                            })), z((0, c.Z)((0, a.Z)({}, X), {
                                new_member: !1
                            })), rt("new-member").catch(console.error)) : "NEW_MESSAGE" === t ? (L((0, c.Z)((0, a.Z)({}, P), {
                                message: null
                            })), z((0, c.Z)((0, a.Z)({}, X), {
                                new_message: !1
                            })), rt("new-message").catch(console.error)) : "CONTACT_US" === t ? (L((0, c.Z)((0, a.Z)({}, P), {
                                contact_us: null
                            })), z((0, c.Z)((0, a.Z)({}, X), {
                                contact_us: !1
                            })), rt("contact-us").catch(console.error)) : "CLEAR_ALL" === t && z({
                                new_member: !1,
                                new_message: !1,
                                contact_us: !1,
                                deposit_withdraw: {
                                    master: !1,
                                    member: !1,
                                    agent: !1
                                }
                            })
                        };
                    (0, f.zX)(J, "new-message", (function(t) {
                        var e;
                        z((0, c.Z)((0, a.Z)({}, X), {
                            new_message: !0
                        })), null === lt || void 0 === lt || null === (e = lt.current) || void 0 === e || e.call(lt, "NEW_MESSAGE", t), setTimeout((function() {
                            ut()
                        }), 1300)
                    })), (0, f.zX)(J, "new-member", (function(t) {
                        z((0, c.Z)((0, a.Z)({}, X), {
                            new_member: !0
                        })), setTimeout((function() {
                            ut()
                        }), 1300)
                    })), (0, f.zX)(J, "contact-us", (function(t) {
                        z((0, c.Z)((0, a.Z)({}, X), {
                            contact_us: !0
                        })), setTimeout((function() {
                            ut()
                        }), 1300)
                    })), (0, f.zX)(J, "deposit-withdraw", (function(t) {
                        "DEPOSIT_WITHDRAW_MEMBER" === t.message ? z((0, c.Z)((0, a.Z)({}, X), {
                            deposit_withdraw: (0, c.Z)((0, a.Z)({}, X.deposit_withdraw), {
                                member: !0
                            })
                        })) : "DEPOSIT_WITHDRAW_MASTER" === t.message ? z((0, c.Z)((0, a.Z)({}, X), {
                            deposit_withdraw: (0, c.Z)((0, a.Z)({}, X.deposit_withdraw), {
                                master: !0
                            })
                        })) : "DEPOSIT_WITHDRAW_AGENT" === t.message && z((0, c.Z)((0, a.Z)({}, X), {
                            deposit_withdraw: (0, c.Z)((0, a.Z)({}, X.deposit_withdraw), {
                                agent: !0
                            })
                        })), (0, g.debounce)((function() {
                            ot()
                        }), 1300)()
                    })), (0, f.zX)(J, "deposit-result", (function(t) {
                        ot(), tt()
                    })), (0, f.zX)(J, "auto-deposit-approve", (function(t) {
                        t.data && t.data.id && N((function(e) {
                            return (0, u.Z)(e).concat([t.data.id])
                        })), ot(), tt()
                    })), (0, f.zX)(J, "auto-withdraw-approve", (function(t) {
                        t.data && t.data.id && N((function(e) {
                            return (0, u.Z)(e).concat([t.data.id])
                        })), t.message && t.message.includes("\u0e16\u0e2d\u0e19\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08") && (0, T.Z)({
                            title: "\u0e16\u0e2d\u0e19\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34",
                            description: t.message,
                            type: "error"
                        }), ot(), tt()
                    }));
                    return (0, f.zX)(Q, "deposit-result", (function(t) {
                        M({
                            member: 10,
                            master: 10,
                            agent: 10
                        }), ot(), tt()
                    })), (0, f.zX)(Q, "user_login_event", (function(t) {
                        $()
                    })), (0, f.zX)(Q, "user_was_suspended_event", (function(t) {
                        $()
                    })), (0, o.jsx)(I.Provider, {
                        value: {
                            memberPendingCount: D.member,
                            agentPendingCount: D.agent,
                            masterPendingCount: D.master,
                            onCallBack: function(t) {
                                lt.current && (lt.current = t)
                            },
                            alert: X,
                            notificationLatest: P,
                            checkNotificationDepositWithdraw: ot,
                            resetAlert: ht,
                            dataDepositWithdraw: k,
                            resetAutoDepositWithdraw: function() {
                                N([])
                            },
                            countUnreadTicket: nt
                        },
                        children: e
                    })
                }
        },
        43963: function(t, e, n) {
            n.d(e, {
                w: function() {
                    return p
                }
            });
            var r = n(47568),
                a = n(26042),
                c = n(34051),
                u = n.n(c),
                s = n(24196),
                i = n(18469),
                o = n(83454),
                p = {
                    createTicket: function(t) {
                        return l.apply(this, arguments)
                    },
                    getTicket: function(t) {
                        return h.apply(this, arguments)
                    },
                    updateTicket: function(t) {
                        return d.apply(this, arguments)
                    },
                    getTicketList: function(t) {
                        return w.apply(this, arguments)
                    },
                    getTicketHistoryList: function(t) {
                        return v.apply(this, arguments)
                    },
                    createCommentTicket: function(t) {
                        return m.apply(this, arguments)
                    },
                    getCommentTicket: function(t) {
                        return Z.apply(this, arguments)
                    },
                    updateCommentTicket: function(t) {
                        return _.apply(this, arguments)
                    },
                    getCommentTicketList: function(t) {
                        return k.apply(this, arguments)
                    },
                    updateStatusTicket: function(t) {
                        return b.apply(this, arguments)
                    },
                    getUnreadTicket: function() {
                        return g.apply(this, arguments)
                    },
                    readTicket: function(t) {
                        return T.apply(this, arguments)
                    }
                },
                f = o.env.NEXT_PUBLIC_API_URI_TICKET;

            function l() {
                return (l = (0, r.Z)(u().mark((function t(e) {
                    var n;
                    return u().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, (0, s.w)(f).post("/v1/ticket/", (0, a.Z)({}, e));
                            case 3:
                                return n = t.sent, t.abrupt("return", (0, i.s)(n));
                            case 7:
                                throw t.prev = 7, t.t0 = t.catch(0), (0, i.i)(t.t0);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 7]
                    ])
                })))).apply(this, arguments)
            }

            function h() {
                return (h = (0, r.Z)(u().mark((function t(e) {
                    var n;
                    return u().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, (0, s.w)(f).get("/v1/ticket/".concat(e));
                            case 3:
                                return n = t.sent, t.abrupt("return", (0, i.s)(n));
                            case 7:
                                throw t.prev = 7, t.t0 = t.catch(0), (0, i.i)(t.t0);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 7]
                    ])
                })))).apply(this, arguments)
            }

            function d() {
                return (d = (0, r.Z)(u().mark((function t(e) {
                    var n;
                    return u().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, (0, s.w)(f).patch("/v1/ticket/", (0, a.Z)({}, e));
                            case 3:
                                return n = t.sent, t.abrupt("return", (0, i.s)(n));
                            case 7:
                                throw t.prev = 7, t.t0 = t.catch(0), (0, i.i)(t.t0);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 7]
                    ])
                })))).apply(this, arguments)
            }

            function w() {
                return (w = (0, r.Z)(u().mark((function t(e) {
                    var n;
                    return u().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, (0, s.w)(f).post("/v1/ticket/lists", (0, a.Z)({}, e));
                            case 3:
                                return n = t.sent, t.abrupt("return", (0, i.s)(n));
                            case 7:
                                throw t.prev = 7, t.t0 = t.catch(0), (0, i.i)(t.t0);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 7]
                    ])
                })))).apply(this, arguments)
            }

            function v() {
                return (v = (0, r.Z)(u().mark((function t(e) {
                    var n;
                    return u().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, (0, s.w)(f).get("/v1/ticket/histories/".concat(e));
                            case 3:
                                return n = t.sent, t.abrupt("return", (0, i.s)(n));
                            case 7:
                                throw t.prev = 7, t.t0 = t.catch(0), (0, i.i)(t.t0);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 7]
                    ])
                })))).apply(this, arguments)
            }

            function m() {
                return (m = (0, r.Z)(u().mark((function t(e) {
                    var n;
                    return u().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, (0, s.w)(f).post("/v1/comment/", (0, a.Z)({}, e));
                            case 3:
                                return n = t.sent, t.abrupt("return", (0, i.s)(n));
                            case 7:
                                throw t.prev = 7, t.t0 = t.catch(0), (0, i.i)(t.t0);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 7]
                    ])
                })))).apply(this, arguments)
            }

            function Z() {
                return (Z = (0, r.Z)(u().mark((function t(e) {
                    var n;
                    return u().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, (0, s.w)(f).get("/v1/comment/".concat(e));
                            case 3:
                                return n = t.sent, t.abrupt("return", (0, i.s)(n));
                            case 7:
                                throw t.prev = 7, t.t0 = t.catch(0), (0, i.i)(t.t0);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 7]
                    ])
                })))).apply(this, arguments)
            }

            function _() {
                return (_ = (0, r.Z)(u().mark((function t(e) {
                    var n;
                    return u().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, (0, s.w)(f).patch("/v1/comment/", (0, a.Z)({}, e));
                            case 3:
                                return n = t.sent, t.abrupt("return", (0, i.s)(n));
                            case 7:
                                throw t.prev = 7, t.t0 = t.catch(0), (0, i.i)(t.t0);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 7]
                    ])
                })))).apply(this, arguments)
            }

            function k() {
                return (k = (0, r.Z)(u().mark((function t(e) {
                    var n;
                    return u().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, (0, s.w)(f).post("/v1/comment/lists", (0, a.Z)({}, e));
                            case 3:
                                return n = t.sent, t.abrupt("return", (0, i.s)(n));
                            case 7:
                                throw t.prev = 7, t.t0 = t.catch(0), (0, i.i)(t.t0);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 7]
                    ])
                })))).apply(this, arguments)
            }

            function b() {
                return (b = (0, r.Z)(u().mark((function t(e) {
                    var n;
                    return u().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, (0, s.w)(f).post("/v1/ticket/update-status", (0, a.Z)({}, e));
                            case 3:
                                return n = t.sent, t.abrupt("return", (0, i.s)(n));
                            case 7:
                                throw t.prev = 7, t.t0 = t.catch(0), (0, i.i)(t.t0);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 7]
                    ])
                })))).apply(this, arguments)
            }

            function g() {
                return (g = (0, r.Z)(u().mark((function t() {
                    var e;
                    return u().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, (0, s.w)(f).get("/v1/ticket/counts-unread");
                            case 3:
                                return e = t.sent, t.abrupt("return", (0, i.s)(e));
                            case 7:
                                throw t.prev = 7, t.t0 = t.catch(0), (0, i.i)(t.t0);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 7]
                    ])
                })))).apply(this, arguments)
            }

            function T() {
                return (T = (0, r.Z)(u().mark((function t(e) {
                    var n;
                    return u().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, (0, s.w)(f).post("/v1/ticket/read", (0, a.Z)({}, e));
                            case 3:
                                return n = t.sent, t.abrupt("return", (0, i.s)(n));
                            case 7:
                                throw t.prev = 7, t.t0 = t.catch(0), (0, i.i)(t.t0);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 7]
                    ])
                })))).apply(this, arguments)
            }
        },
        29914: function(t, e, n) {
            var r = n(13448);
            e.Z = function(t) {
                r.Z[t.type]({
                    message: t.title,
                    description: t.description,
                    duration: t.duration
                })
            }
        }
    }
]);