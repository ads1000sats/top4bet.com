(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [92197], {
        6141: function(n, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/404", function() {
                return r(59622)
            }])
        },
        29201: function(n, t, r) {
            "use strict";
            var i = r(7297),
                u = r(71577),
                e = r(32125);

            function o() {
                var n = (0, i.Z)(["min-width: 70px;"]);
                return o = function() {
                    return n
                }, n
            }

            function a() {
                var n = (0, i.Z)(["\n        aspect-ratio: 1/1;\n        width: 30px;\n        height: 30px;\n        min-width: 30px !important; \n        border-radius: 5px;\n    "]);
                return a = function() {
                    return n
                }, n
            }

            function c() {
                var n = (0, i.Z)(["\n                background: var(--blue);\n\n                :hover,\n                :focus,\n                :active {\n                    background: var(--blue);\n                }\n            "]);
                return c = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, i.Z)(["\n                background: var(--red);\n\n                :hover,\n                :focus,\n                :active {\n                    background: var(--red);\n                }\n            "]);
                return f = function() {
                    return n
                }, n
            }

            function d() {
                var n = (0, i.Z)(["\n                background: var(--gold);\n\n                :hover,\n                :focus,\n                :active {\n                    background: var(--gold);\n                }\n            "]);
                return d = function() {
                    return n
                }, n
            }

            function v() {
                var n = (0, i.Z)(["\n                background: var(--white);\n\n                :hover,\n                :focus,\n                :active {\n                    background: var(--white);\n                }\n            "]);
                return v = function() {
                    return n
                }, n
            }

            function s() {
                var n = (0, i.Z)(["\n                background: var(--btn-disable);\n\n                :hover,\n                :focus,\n                :active {\n                    background: var(--btn-disable);\n                }\n            "]);
                return s = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, i.Z)(["\n                background: var(--green);\n\n                :hover,\n                :focus,\n                :active {\n                    background: var(--green);\n                }\n            "]);
                return p = function() {
                    return n
                }, n
            }

            function b() {
                var n = (0, i.Z)(["\n    border: 1px #FFFFFF solid !important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #FFF !important;\n    padding: 4.8px 8px !important;\n    border-radius: 4px; \n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n\n    :hover,\n    :active {\n        color: #FFF;\n    }\n\n    &.ant-click-animating-node {\n        animation: none !important;\n        opacity: 1;\n    }\n\n    .ant-btn-loading-icon {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .ant-btn-primary:active {\n        color: initial !important;\n    }\n\n    max-width: ", ";\n    ", "\n    width: ", " !important;\n\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n"]);
                return b = function() {
                    return n
                }, n
            }
            var l = (0, e.ZP)(u.Z).withConfig({
                componentId: "sc-da494153-0"
            })(b(), (function(n) {
                return n.fullWidth ? "unset" : "fit-content"
            }), (function(n) {
                return !n.fullWidth && (0, e.iv)(o())
            }), (function(n) {
                return n.fullWidth ? "100%" : "unset"
            }), (function(n) {
                return n.isSquare && (0, e.iv)(a())
            }), (function(n) {
                return "primary" === n.buttonType && (0, e.iv)(c())
            }), (function(n) {
                return "danger" === n.buttonType && (0, e.iv)(f())
            }), (function(n) {
                return "default" === n.buttonType && (0, e.iv)(d())
            }), (function(n) {
                return "white" === n.buttonType && (0, e.iv)(v())
            }), (function(n) {
                return "disabled" === n.buttonType && (0, e.iv)(s())
            }), (function(n) {
                return "green" === n.buttonType && (0, e.iv)(p())
            }));
            t.Z = l
        },
        59622: function(n, t, r) {
            "use strict";
            r.r(t);
            var i = r(7297),
                u = r(85893),
                e = r(32125),
                o = r(33859),
                a = r(11163),
                c = (r(67294), r(29201));

            function f() {
                var n = (0, i.Z)(["\n            display: flex;\n            justify-content: center;\n        "]);
                return f = function() {
                    return n
                }, n
            }
            t.default = function() {
                var n = (0, a.useRouter)();
                return (0, u.jsx)(o.ZP, {
                    status: "404",
                    title: "\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e2b\u0e19\u0e49\u0e32\u0e19\u0e35\u0e49",
                    subTitle: "\u0e02\u0e2d\u0e2d\u0e20\u0e31\u0e22 \u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48\u0e40\u0e22\u0e35\u0e48\u0e22\u0e21\u0e0a\u0e21\u0e44\u0e21\u0e48\u0e21\u0e35\u0e2d\u0e22\u0e39\u0e48",
                    extra: (0, u.jsx)(d, {
                        children: (0, u.jsx)(c.Z, {
                            buttonType: "primary",
                            style: {
                                width: 200
                            },
                            onClick: function() {
                                return n.back()
                            },
                            children: "\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a"
                        })
                    })
                })
            };
            var d = (0, e.ZP)("div").withConfig({
                componentId: "sc-2b2b26f3-0"
            })(f())
        },
        11163: function(n, t, r) {
            n.exports = r(90387)
        }
    },
    function(n) {
        n.O(0, [53440, 4585, 71577, 26131, 49774, 92888, 40179], (function() {
            return t = 6141, n(n.s = t);
            var t
        }));
        var t = n.O();
        _N_E = t
    }
]);