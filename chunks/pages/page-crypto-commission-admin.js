(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [38348], {
        81740: function(n, e, A) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/crypto/commission-crypto-admin", function() {
                return A(94397)
            }])
        },
        22628: function(n, e, A) {
            "use strict";
            var S = A(85893),
                t = A(50888),
                T = A(11382);
            e.Z = function() {
                return (0, S.jsx)(T.Z, {
                    indicator: (0, S.jsx)(t.Z, {
                        style: {
                            fontSize: 24
                        },
                        spin: !0
                    })
                })
            }
        },
        49736: function(n, e, A) {
            "use strict";
            var S;
            A.d(e, {
                    G: function() {
                        return S
                    },
                    e: function() {
                        return i
                    }
                }),
                function(n) {
                    n.ADMIN = "ADMIN", n.ADMIN_ASSISTANT = "ADMIN_ASSISTANT", n.MASTER = "MASTER", n.MASTER_ASSISTANT = "MASTER_ASSISTANT", n.AGENT = "AGENT", n.AGENT_ASSISTANT = "AGENT_ASSISTANT", n.MEMBER = "MEMBER"
                }(S || (S = {}));
            var t = [S.ADMIN, S.ADMIN_ASSISTANT, S.MASTER, S.MASTER_ASSISTANT, S.AGENT, S.AGENT_ASSISTANT],
                T = [S.ADMIN, S.ADMIN_ASSISTANT],
                r = [S.AGENT, S.AGENT_ASSISTANT],
                i = {
                    AllRoles: t,
                    OnlyAdmin: T,
                    OnlyMaster: [S.MASTER, S.MASTER_ASSISTANT],
                    OnlyAgent: r,
                    OnlyAssistant: [S.ADMIN_ASSISTANT, S.MASTER_ASSISTANT, S.AGENT_ASSISTANT],
                    IsNotAdmin: [S.AGENT, S.AGENT_ASSISTANT, S.MASTER_ASSISTANT, S.MASTER],
                    IsNotMaster: [S.ADMIN, S.ADMIN_ASSISTANT, S.AGENT, S.AGENT_ASSISTANT],
                    IsNotAgent: [S.ADMIN, S.ADMIN_ASSISTANT, S.MASTER, S.MASTER_ASSISTANT]
                }
        },
        94397: function(n, e, A) {
            "use strict";
            A.r(e);
            var S = A(85893),
                t = A(75707),
                T = A(49736),
                r = (0, t.Z)((function() {
                    return Promise.all([A.e(74885), A.e(4585), A.e(58278), A.e(71577), A.e(23530), A.e(80173), A.e(27074), A.e(73553), A.e(10957), A.e(26574), A.e(76519), A.e(34729), A.e(82071), A.e(23585), A.e(46008), A.e(14011), A.e(46664), A.e(30709), A.e(79915), A.e(92077), A.e(54081), A.e(14104), A.e(81758), A.e(69129), A.e(63913), A.e(17272), A.e(84486), A.e(8735)]).then(A.bind(A, 8735))
                }));
            e.default = function() {
                return (0, S.jsx)(r, {
                    title: "\u0e04\u0e2d\u0e21\u0e21\u0e34\u0e0a\u0e0a\u0e31\u0e48\u0e19\u0e04\u0e23\u0e34\u0e1b\u0e42\u0e15\u0e41\u0e2d\u0e14\u0e21\u0e34\u0e19",
                    commission_type: T.G.MASTER
                })
            }
        },
        75707: function(n, e, A) {
            "use strict";
            A.d(e, {
                Z: function() {
                    return c
                }
            });
            var S = A(7297),
                t = A(85893),
                T = A(32125),
                r = A(22628),
                i = A(5152),
                N = A.n(i);
            A(67294);

            function u() {
                var n = (0, S.Z)(["\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        "]);
                return u = function() {
                    return n
                }, n
            }

            function c(n) {
                return N()(n, {
                    loading: function() {
                        return (0, t.jsx)(o, {
                            children: (0, t.jsx)(r.Z, {})
                        })
                    }
                })
            }
            var o = (0, T.ZP)("div").withConfig({
                componentId: "sc-c84c05e3-0"
            })(u())
        },
        7297: function(n, e, A) {
            "use strict";

            function S(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }
            A.d(e, {
                Z: function() {
                    return S
                }
            })
        }
    },
    function(n) {
        n.O(0, [53440, 11382, 49774, 92888, 40179], (function() {
            return e = 81740, n(n.s = e);
            var e
        }));
        var e = n.O();
        _N_E = e
    }
]);