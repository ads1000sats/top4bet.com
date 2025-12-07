"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [81758], {
        81758: function(e, t, n) {
            n.d(t, {
                ZP: function() {
                    return Y
                }
            });
            var r = n(67294),
                i = n(61688);
            const o = () => {},
                a = o(),
                s = Object,
                u = e => e === a,
                c = e => "function" == typeof e,
                l = (e, t) => ({
                    ...e,
                    ...t
                }),
                d = new WeakMap;
            let f = 0;
            const g = e => {
                    const t = typeof e,
                        n = e && e.constructor,
                        r = n == Date;
                    let i, o;
                    if (s(e) !== e || r || n == RegExp) i = r ? e.toJSON() : "symbol" == t ? e.toString() : "string" == t ? JSON.stringify(e) : "" + e;
                    else {
                        if (i = d.get(e), i) return i;
                        if (i = ++f + "~", d.set(e, i), n == Array) {
                            for (i = "@", o = 0; o < e.length; o++) i += g(e[o]) + ",";
                            d.set(e, i)
                        }
                        if (n == s) {
                            i = "#";
                            const t = s.keys(e).sort();
                            for (; !u(o = t.pop());) u(e[o]) || (i += o + ":" + g(e[o]) + ",");
                            d.set(e, i)
                        }
                    }
                    return i
                },
                h = new WeakMap,
                v = {},
                p = {},
                w = "undefined",
                y = typeof window != w,
                m = typeof document != w,
                b = (e, t) => {
                    const n = h.get(e);
                    return [() => !u(t) && e.get(t) || v, r => {
                        if (!u(t)) {
                            const i = e.get(t);
                            t in p || (p[t] = i), n[5](t, l(i, r), i || v)
                        }
                    }, n[6], () => !u(t) && t in p ? p[t] : !u(t) && e.get(t) || v]
                };
            let _ = !0;
            const [E, O] = y && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [o, o], R = {
                isOnline: () => _,
                isVisible: () => {
                    const e = m && document.visibilityState;
                    return u(e) || "hidden" !== e
                }
            }, k = {
                initFocus: e => (m && document.addEventListener("visibilitychange", e), E("focus", e), () => {
                    m && document.removeEventListener("visibilitychange", e), O("focus", e)
                }),
                initReconnect: e => {
                    const t = () => {
                            _ = !0, e()
                        },
                        n = () => {
                            _ = !1
                        };
                    return E("online", t), E("offline", n), () => {
                        O("online", t), O("offline", n)
                    }
                }
            }, S = !r.useId, L = !y || "Deno" in window, T = e => y && typeof window.requestAnimationFrame != w ? window.requestAnimationFrame(e) : setTimeout(e, 1), V = L ? r.useEffect : r.useLayoutEffect, C = "undefined" !== typeof navigator && navigator.connection, D = !L && C && (["slow-2g", "2g"].includes(C.effectiveType) || C.saveData), P = e => {
                if (c(e)) try {
                    e = e()
                } catch (n) {
                    e = ""
                }
                const t = e;
                return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? g(e) : "", t]
            };
            let I = 0;
            const F = () => ++I;
            var M = 3,
                W = 0,
                x = 2,
                A = 1;
            async function N(...e) {
                const [t, n, r, i] = e, o = l({
                    populateCache: !0,
                    throwOnError: !0
                }, "boolean" === typeof i ? {
                    revalidate: i
                } : i || {});
                let s = o.populateCache;
                const d = o.rollbackOnError;
                let f = o.optimisticData;
                const g = o.throwOnError;
                if (c(n)) {
                    const e = n,
                        r = [],
                        i = t.keys();
                    for (const n of i) !/^\$(inf|sub)\$/.test(n) && e(t.get(n)._k) && r.push(n);
                    return Promise.all(r.map(v))
                }
                return v(n);
                async function v(n) {
                    const [i] = P(n);
                    if (!i) return;
                    const [l, v] = b(t, i), [p, w, y, m] = h.get(t), _ = () => {
                        const e = p[i];
                        return (c(o.revalidate) ? o.revalidate(l().data, n) : !1 !== o.revalidate) && (delete y[i], delete m[i], e && e[0]) ? e[0](2).then((() => l().data)) : l().data
                    };
                    if (e.length < 3) return _();
                    let E, O = r;
                    const R = F();
                    w[i] = [R, 0];
                    const k = !u(f),
                        S = l(),
                        L = S.data,
                        T = S._c,
                        V = u(T) ? L : T;
                    if (k && (f = c(f) ? f(V, L) : f, v({
                            data: f,
                            _c: V
                        })), c(O)) try {
                        O = O(V)
                    } catch (C) {
                        E = C
                    }
                    if (O && c(O.then)) {
                        if (O = await O.catch((e => {
                                E = e
                            })), R !== w[i][0]) {
                            if (E) throw E;
                            return O
                        }
                        E && k && (e => "function" === typeof d ? d(e) : !1 !== d)(E) && (s = !0, v({
                            data: V,
                            _c: a
                        }))
                    }
                    if (s && !E)
                        if (c(s)) {
                            const e = s(O, V);
                            v({
                                data: e,
                                error: a,
                                _c: a
                            })
                        } else v({
                            data: O,
                            error: a,
                            _c: a
                        });
                    if (w[i][1] = F(), Promise.resolve(_()).then((() => {
                            v({
                                _c: a
                            })
                        })), !E) return O;
                    if (g) throw E
                }
            }
            const $ = (e, t) => {
                    for (const n in e) e[n][0] && e[n][0](t)
                },
                j = (e, t) => {
                    if (!h.has(e)) {
                        const n = l(k, t),
                            r = {},
                            i = N.bind(a, e);
                        let s = o;
                        const u = {},
                            c = (e, t) => {
                                const n = u[e] || [];
                                return u[e] = n, n.push(t), () => n.splice(n.indexOf(t), 1)
                            },
                            d = (t, n, r) => {
                                e.set(t, n);
                                const i = u[t];
                                if (i)
                                    for (const e of i) e(n, r)
                            },
                            f = () => {
                                if (!h.has(e) && (h.set(e, [r, {}, {}, {}, i, d, c]), !L)) {
                                    const t = n.initFocus(setTimeout.bind(a, $.bind(a, r, 0))),
                                        i = n.initReconnect(setTimeout.bind(a, $.bind(a, r, 1)));
                                    s = () => {
                                        t && t(), i && i(), h.delete(e)
                                    }
                                }
                            };
                        return f(), [e, i, f, s]
                    }
                    return [e, h.get(e)[4]]
                },
                [q, J] = j(new Map),
                U = l({
                    onLoadingSlow: o,
                    onSuccess: o,
                    onError: o,
                    onErrorRetry: (e, t, n, r, i) => {
                        const o = n.errorRetryCount,
                            a = i.retryCount,
                            s = ~~((Math.random() + .5) * (1 << (a < 8 ? a : 8))) * n.errorRetryInterval;
                        !u(o) && a > o || setTimeout(r, s, i)
                    },
                    onDiscarded: o,
                    revalidateOnFocus: !0,
                    revalidateOnReconnect: !0,
                    revalidateIfStale: !0,
                    shouldRetryOnError: !0,
                    errorRetryInterval: D ? 1e4 : 5e3,
                    focusThrottleInterval: 5e3,
                    dedupingInterval: 2e3,
                    loadingTimeout: D ? 5e3 : 3e3,
                    compare: (e, t) => g(e) == g(t),
                    isPaused: () => !1,
                    cache: q,
                    mutate: J,
                    fallback: {}
                }, R),
                H = (e, t) => {
                    const n = l(e, t);
                    if (t) {
                        const {
                            use: r,
                            fallback: i
                        } = e, {
                            use: o,
                            fallback: a
                        } = t;
                        r && o && (n.use = r.concat(o)), i && a && (n.fallback = l(i, a))
                    }
                    return n
                },
                Z = (0, r.createContext)({}),
                z = y && window.__SWR_DEVTOOLS_USE__,
                B = z ? window.__SWR_DEVTOOLS_USE__ : [],
                G = e => c(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
                K = B.concat((e => (t, n, r) => e(t, n && ((...e) => {
                    const [r] = P(t), [, , , i] = h.get(q);
                    if (r.startsWith("$inf$")) return n(...e);
                    const o = i[r];
                    return u(o) ? n(...e) : (delete i[r], o)
                }), r)));
            z && (window.__SWR_DEVTOOLS_REACT__ = r);
            const Q = r.use || (e => {
                    if ("pending" === e.status) throw e;
                    if ("fulfilled" === e.status) return e.value;
                    throw "rejected" === e.status ? e.reason : (e.status = "pending", e.then((t => {
                        e.status = "fulfilled", e.value = t
                    }), (t => {
                        e.status = "rejected", e.reason = t
                    })), e)
                }),
                X = {
                    dedupe: !0
                },
                Y = (s.defineProperty((e => {
                    const {
                        value: t
                    } = e, n = (0, r.useContext)(Z), i = c(t), o = (0, r.useMemo)((() => i ? t(n) : t), [i, n, t]), s = (0, r.useMemo)((() => i ? o : H(n, o)), [i, n, o]), u = o && o.provider, d = (0, r.useRef)(a);
                    u && !d.current && (d.current = j(u(s.cache || q), o));
                    const f = d.current;
                    return f && (s.cache = f[0], s.mutate = f[1]), V((() => {
                        if (f) return f[2] && f[2](), f[3]
                    }), []), (0, r.createElement)(Z.Provider, l(e, {
                        value: s
                    }))
                }), "defaultValue", {
                    value: U
                }), ee = (e, t, n) => {
                    const {
                        cache: o,
                        compare: s,
                        suspense: d,
                        fallbackData: f,
                        revalidateOnMount: g,
                        revalidateIfStale: v,
                        refreshInterval: p,
                        refreshWhenHidden: w,
                        refreshWhenOffline: y,
                        keepPreviousData: m
                    } = n, [_, E, O, R] = h.get(o), [k, C] = P(e), D = (0, r.useRef)(!1), I = (0, r.useRef)(!1), $ = (0, r.useRef)(k), j = (0, r.useRef)(t), q = (0, r.useRef)(n), J = () => q.current, U = () => J().isVisible() && J().isOnline(), [H, Z, z, B] = b(o, k), G = (0, r.useRef)({}).current, K = u(f) ? n.fallback[k] : f, Y = (e, t) => {
                        for (const n in G) {
                            const r = n;
                            if ("data" === r) {
                                if (!s(e[r], t[r])) {
                                    if (!u(e[r])) return !1;
                                    if (!s(ue, t[r])) return !1
                                }
                            } else if (t[r] !== e[r]) return !1
                        }
                        return !0
                    }, ee = (0, r.useMemo)((() => {
                        const e = !!k && !!t && (u(g) ? !J().isPaused() && !d && (!!u(v) || v) : g),
                            n = t => {
                                const n = l(t);
                                return delete n._k, e ? {
                                    isValidating: !0,
                                    isLoading: !0,
                                    ...n
                                } : n
                            },
                            r = H(),
                            i = B(),
                            o = n(r),
                            a = r === i ? o : n(i);
                        let s = o;
                        return [() => {
                            const e = n(H());
                            return Y(e, s) ? (s.data = e.data, s.isLoading = e.isLoading, s.isValidating = e.isValidating, s.error = e.error, s) : (s = e, e)
                        }, () => a]
                    }), [o, k]), te = (0, i.useSyncExternalStore)((0, r.useCallback)((e => z(k, ((t, n) => {
                        Y(n, t) || e()
                    }))), [o, k]), ee[0], ee[1]), ne = !D.current, re = _[k] && _[k].length > 0, ie = te.data, oe = u(ie) ? K : ie, ae = te.error, se = (0, r.useRef)(oe), ue = m ? u(ie) ? se.current : ie : oe, ce = !(re && !u(ae)) && (ne && !u(g) ? g : !J().isPaused() && (d ? !u(oe) && v : u(oe) || v)), le = !!(k && t && ne && ce), de = u(te.isValidating) ? le : te.isValidating, fe = u(te.isLoading) ? le : te.isLoading, ge = (0, r.useCallback)((async e => {
                        const t = j.current;
                        if (!k || !t || I.current || J().isPaused()) return !1;
                        let r, i, o = !0;
                        const l = e || {},
                            d = !O[k] || !l.dedupe,
                            f = () => S ? !I.current && k === $.current && D.current : k === $.current,
                            g = {
                                isValidating: !1,
                                isLoading: !1
                            },
                            h = () => {
                                Z(g)
                            },
                            v = () => {
                                const e = O[k];
                                e && e[1] === i && delete O[k]
                            },
                            p = {
                                isValidating: !0
                            };
                        u(H().data) && (p.isLoading = !0);
                        try {
                            if (d && (Z(p), n.loadingTimeout && u(H().data) && setTimeout((() => {
                                    o && f() && J().onLoadingSlow(k, n)
                                }), n.loadingTimeout), O[k] = [t(C), F()]), [r, i] = O[k], r = await r, d && setTimeout(v, n.dedupingInterval), !O[k] || O[k][1] !== i) return d && f() && J().onDiscarded(k), !1;
                            g.error = a;
                            const e = E[k];
                            if (!u(e) && (i <= e[0] || i <= e[1] || 0 === e[1])) return h(), d && f() && J().onDiscarded(k), !1;
                            const c = H().data;
                            g.data = s(c, r) ? c : r, d && f() && J().onSuccess(r, k, n)
                        } catch (w) {
                            v();
                            const e = J(),
                                {
                                    shouldRetryOnError: t
                                } = e;
                            e.isPaused() || (g.error = w, d && f() && (e.onError(w, k, e), (!0 === t || c(t) && t(w)) && (J().revalidateOnFocus && J().revalidateOnReconnect && !U() || e.onErrorRetry(w, k, e, (e => {
                                const t = _[k];
                                t && t[0] && t[0](M, e)
                            }), {
                                retryCount: (l.retryCount || 0) + 1,
                                dedupe: !0
                            }))))
                        }
                        return o = !1, h(), !0
                    }), [k, o]), he = (0, r.useCallback)(((...e) => N(o, $.current, ...e)), []);
                    if (V((() => {
                            j.current = t, q.current = n, u(ie) || (se.current = ie)
                        })), V((() => {
                            if (!k) return;
                            const e = ge.bind(a, X);
                            let t = 0;
                            const n = ((e, t, n) => {
                                const r = t[e] || (t[e] = []);
                                return r.push(n), () => {
                                    const e = r.indexOf(n);
                                    e >= 0 && (r[e] = r[r.length - 1], r.pop())
                                }
                            })(k, _, ((n, r = {}) => {
                                if (n == W) {
                                    const n = Date.now();
                                    J().revalidateOnFocus && n > t && U() && (t = n + J().focusThrottleInterval, e())
                                } else if (n == A) J().revalidateOnReconnect && U() && e();
                                else {
                                    if (n == x) return ge();
                                    if (n == M) return ge(r)
                                }
                            }));
                            return I.current = !1, $.current = k, D.current = !0, Z({
                                _k: C
                            }), ce && (u(oe) || L ? e() : T(e)), () => {
                                I.current = !0, n()
                            }
                        }), [k]), V((() => {
                            let e;

                            function t() {
                                const t = c(p) ? p(H().data) : p;
                                t && -1 !== e && (e = setTimeout(n, t))
                            }

                            function n() {
                                H().error || !w && !J().isVisible() || !y && !J().isOnline() ? t() : ge(X).then(t)
                            }
                            return t(), () => {
                                e && (clearTimeout(e), e = -1)
                            }
                        }), [p, w, y, k]), (0, r.useDebugValue)(ue), d && u(oe) && k) {
                        if (!S && L) throw new Error("Fallback data is required when using suspense in SSR.");
                        j.current = t, q.current = n, I.current = !1;
                        const e = R[k];
                        if (!u(e)) {
                            const t = he(e);
                            Q(t)
                        }
                        if (!u(ae)) throw ae;
                        {
                            const e = ge(X);
                            u(ue) || (e.status = "fulfilled", e.value = !0), Q(e)
                        }
                    }
                    return {
                        mutate: he,
                        get data() {
                            return G.data = !0, ue
                        },
                        get error() {
                            return G.error = !0, ae
                        },
                        get isValidating() {
                            return G.isValidating = !0, de
                        },
                        get isLoading() {
                            return G.isLoading = !0, fe
                        }
                    }
                }, function(...e) {
                    const t = l(U, (0, r.useContext)(Z)),
                        [n, i, o] = G(e),
                        a = H(t, o);
                    let s = ee;
                    const {
                        use: u
                    } = a, c = (u || []).concat(K);
                    for (let r = c.length; r--;) s = c[r](s);
                    return s(n, i || a.fetcher || null, a)
                });
            var ee
        }
    }
]);