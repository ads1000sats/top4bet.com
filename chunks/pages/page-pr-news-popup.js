(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [90297], {
        14356: function(e, n, A) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/public-relations-news-popup", function() {
                return A(9170)
            }])
        },
        22628: function(e, n, A) {
            "use strict";
            var S = A(85893),
                t = A(50888),
                T = A(11382);
            n.Z = function() {
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
        49736: function(e, n, A) {
            "use strict";
            var S;
            A.d(n, {
                    G: function() {
                        return S
                    },
                    e: function() {
                        return N
                    }
                }),
                function(e) {
                    e.ADMIN = "ADMIN", e.ADMIN_ASSISTANT = "ADMIN_ASSISTANT", e.MASTER = "MASTER", e.MASTER_ASSISTANT = "MASTER_ASSISTANT", e.AGENT = "AGENT", e.AGENT_ASSISTANT = "AGENT_ASSISTANT", e.MEMBER = "MEMBER"
                }(S || (S = {}));
            var t = [S.ADMIN, S.ADMIN_ASSISTANT, S.MASTER, S.MASTER_ASSISTANT, S.AGENT, S.AGENT_ASSISTANT],
                T = [S.ADMIN, S.ADMIN_ASSISTANT],
                r = [S.AGENT, S.AGENT_ASSISTANT],
                N = {
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
        9170: function(e, n, A) {
            "use strict";
            A.r(n);
            var S = A(85893),
                t = A(75707),
                T = A(9473),
                r = A(44546),
                N = A(67294),
                i = A(49736),
                u = (0, t.Z)((function() {
                    return Promise.all([A.e(4585), A.e(58278), A.e(71577), A.e(23530), A.e(80173), A.e(27074), A.e(73553), A.e(26574), A.e(76519), A.e(34729), A.e(82071), A.e(23585), A.e(46008), A.e(14011), A.e(46664), A.e(30709), A.e(98464), A.e(2395)]).then(A.bind(A, 91456))
                })),
                c = (0, t.Z)((function() {
                    return Promise.all([A.e(4585), A.e(58278), A.e(71577), A.e(23530), A.e(80173), A.e(27074), A.e(73553), A.e(10957), A.e(26574), A.e(76519), A.e(82071), A.e(25675), A.e(26913), A.e(71712), A.e(63913), A.e(98464), A.e(37955)]).then(A.bind(A, 37955))
                }));
            n.default = function() {
                var e = (0, T.v9)(r.LT),
                    n = (0, N.useCallback)((function() {
                        return [i.G.AGENT, i.G.AGENT_ASSISTANT].includes(e.roleName) ? (0, S.jsx)(c, {}) : (0, S.jsx)(u, {})
                    }), [e.roleName]);
                return (0, S.jsx)(n, {})
            }
        },
        75707: function(e, n, A) {
            "use strict";
            A.d(n, {
                Z: function() {
                    return c
                }
            });
            var S = A(7297),
                t = A(85893),
                T = A(32125),
                r = A(22628),
                N = A(5152),
                i = A.n(N);
            A(67294);

            function u() {
                var e = (0, S.Z)(["\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        "]);
                return u = function() {
                    return e
                }, e
            }

            function c(e) {
                return i()(e, {
                    loading: function() {
                        return (0, t.jsx)(s, {
                            children: (0, t.jsx)(r.Z, {})
                        })
                    }
                })
            }
            var s = (0, T.ZP)("div").withConfig({
                componentId: "sc-c84c05e3-0"
            })(u())
        },
        7297: function(e, n, A) {
            "use strict";

            function S(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }
            A.d(n, {
                Z: function() {
                    return S
                }
            })
        }
    },
    function(e) {
        e.O(0, [53440, 11382, 49774, 92888, 40179], (function() {
            return n = 14356, e(e.s = n);
            var n
        }));
        var n = e.O();
        _N_E = n
    }
]);