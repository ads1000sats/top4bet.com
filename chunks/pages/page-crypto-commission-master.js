(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [16542], {
        44698: function(n, e, A) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/crypto/commission-crypto-master", function() {
                return A(57209)
            }])
        },
        22628: function(n, e, A) {
            "use strict";
            var t = A(85893),
                S = A(50888),
                T = A(11382);
            e.Z = function() {
                return (0, t.jsx)(T.Z, {
                    indicator: (0, t.jsx)(S.Z, {
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
            var t;
            A.d(e, {
                    G: function() {
                        return t
                    },
                    e: function() {
                        return N
                    }
                }),
                function(n) {
                    n.ADMIN = "ADMIN", n.ADMIN_ASSISTANT = "ADMIN_ASSISTANT", n.MASTER = "MASTER", n.MASTER_ASSISTANT = "MASTER_ASSISTANT", n.AGENT = "AGENT", n.AGENT_ASSISTANT = "AGENT_ASSISTANT", n.MEMBER = "MEMBER"
                }(t || (t = {}));
            var S = [t.ADMIN, t.ADMIN_ASSISTANT, t.MASTER, t.MASTER_ASSISTANT, t.AGENT, t.AGENT_ASSISTANT],
                T = [t.ADMIN, t.ADMIN_ASSISTANT],
                r = [t.AGENT, t.AGENT_ASSISTANT],
                N = {
                    AllRoles: S,
                    OnlyAdmin: T,
                    OnlyMaster: [t.MASTER, t.MASTER_ASSISTANT],
                    OnlyAgent: r,
                    OnlyAssistant: [t.ADMIN_ASSISTANT, t.MASTER_ASSISTANT, t.AGENT_ASSISTANT],
                    IsNotAdmin: [t.AGENT, t.AGENT_ASSISTANT, t.MASTER_ASSISTANT, t.MASTER],
                    IsNotMaster: [t.ADMIN, t.ADMIN_ASSISTANT, t.AGENT, t.AGENT_ASSISTANT],
                    IsNotAgent: [t.ADMIN, t.ADMIN_ASSISTANT, t.MASTER, t.MASTER_ASSISTANT]
                }
        },
        57209: function(n, e, A) {
            "use strict";
            A.r(e);
            var t = A(85893),
                S = A(75707),
                T = A(49736),
                r = (0, S.Z)((function() {
                    return Promise.all([A.e(74885), A.e(4585), A.e(58278), A.e(71577), A.e(23530), A.e(80173), A.e(27074), A.e(73553), A.e(10957), A.e(26574), A.e(76519), A.e(34729), A.e(82071), A.e(23585), A.e(46008), A.e(14011), A.e(46664), A.e(30709), A.e(79915), A.e(92077), A.e(54081), A.e(14104), A.e(81758), A.e(69129), A.e(63913), A.e(17272), A.e(84486), A.e(8735)]).then(A.bind(A, 8735))
                }));
            e.default = function() {
                return (0, t.jsx)(r, {
                    title: "\u0e04\u0e2d\u0e21\u0e21\u0e34\u0e0a\u0e0a\u0e31\u0e48\u0e19\u0e04\u0e23\u0e34\u0e1b\u0e42\u0e15\u0e21\u0e32\u0e2a\u0e40\u0e15\u0e2d\u0e23\u0e4c",
                    commission_type: T.G.AGENT
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
            var t = A(7297),
                S = A(85893),
                T = A(32125),
                r = A(22628),
                N = A(5152),
                i = A.n(N);
            A(67294);

            function u() {
                var n = (0, t.Z)(["\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        "]);
                return u = function() {
                    return n
                }, n
            }

            function c(n) {
                return i()(n, {
                    loading: function() {
                        return (0, S.jsx)(o, {
                            children: (0, S.jsx)(r.Z, {})
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

            function t(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }
            A.d(e, {
                Z: function() {
                    return t
                }
            })
        }
    },
    function(n) {
        n.O(0, [53440, 11382, 49774, 92888, 40179], (function() {
            return e = 44698, n(n.s = e);
            var e
        }));
        var e = n.O();
        _N_E = e
    }
]);