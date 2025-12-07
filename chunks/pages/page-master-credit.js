(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [15373], {
        73685: function(n, A, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/system-user-master/credit/[id]", function() {
                return e(89775)
            }])
        },
        22628: function(n, A, e) {
            "use strict";
            var t = e(85893),
                S = e(50888),
                T = e(11382);
            A.Z = function() {
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
        49736: function(n, A, e) {
            "use strict";
            var t;
            e.d(A, {
                    G: function() {
                        return t
                    },
                    e: function() {
                        return i
                    }
                }),
                function(n) {
                    n.ADMIN = "ADMIN", n.ADMIN_ASSISTANT = "ADMIN_ASSISTANT", n.MASTER = "MASTER", n.MASTER_ASSISTANT = "MASTER_ASSISTANT", n.AGENT = "AGENT", n.AGENT_ASSISTANT = "AGENT_ASSISTANT", n.MEMBER = "MEMBER"
                }(t || (t = {}));
            var S = [t.ADMIN, t.ADMIN_ASSISTANT, t.MASTER, t.MASTER_ASSISTANT, t.AGENT, t.AGENT_ASSISTANT],
                T = [t.ADMIN, t.ADMIN_ASSISTANT],
                r = [t.AGENT, t.AGENT_ASSISTANT],
                i = {
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
        89775: function(n, A, e) {
            "use strict";
            e.r(A);
            var t = e(85893),
                S = e(75707),
                T = e(49736),
                r = (0, S.Z)((function() {
                    return Promise.all([e.e(74885), e.e(53662), e.e(4585), e.e(58278), e.e(71577), e.e(23530), e.e(80173), e.e(27074), e.e(73553), e.e(10957), e.e(34729), e.e(23585), e.e(46008), e.e(14011), e.e(46664), e.e(30709), e.e(92077), e.e(68574), e.e(63913), e.e(43792), e.e(4100)]).then(e.bind(e, 9709))
                }));
            A.default = function() {
                return (0, t.jsx)("div", {
                    children: (0, t.jsx)(r, {
                        title: "\u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e40\u0e04\u0e23\u0e14\u0e34\u0e15",
                        action_role: T.G.MASTER
                    })
                })
            }
        },
        75707: function(n, A, e) {
            "use strict";
            e.d(A, {
                Z: function() {
                    return c
                }
            });
            var t = e(7297),
                S = e(85893),
                T = e(32125),
                r = e(22628),
                i = e(5152),
                N = e.n(i);
            e(67294);

            function u() {
                var n = (0, t.Z)(["\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        "]);
                return u = function() {
                    return n
                }, n
            }

            function c(n) {
                return N()(n, {
                    loading: function() {
                        return (0, S.jsx)(s, {
                            children: (0, S.jsx)(r.Z, {})
                        })
                    }
                })
            }
            var s = (0, T.ZP)("div").withConfig({
                componentId: "sc-c84c05e3-0"
            })(u())
        },
        7297: function(n, A, e) {
            "use strict";

            function t(n, A) {
                return A || (A = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(A)
                    }
                }))
            }
            e.d(A, {
                Z: function() {
                    return t
                }
            })
        }
    },
    function(n) {
        n.O(0, [53440, 11382, 49774, 92888, 40179], (function() {
            return A = 73685, n(n.s = A);
            var A
        }));
        var A = n.O();
        _N_E = A
    }
]);