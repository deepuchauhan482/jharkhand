(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 20865, 82303, 14387, e => {
    "use strict";
    var t = e.i(56420);
    let n = (0, t.default)("map-pin", [
        ["path", {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }]
    ]);
    e.s(["MapPin", 0, n], 20865);
    let r = (0, t.default)("users", [
        ["path", {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }],
        ["path", {
            d: "M16 3.128a4 4 0 0 1 0 7.744",
            key: "16gr8j"
        }],
        ["path", {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }]
    ]);
    e.s(["Users", 0, r], 82303);
    let o = (0, t.default)("x", [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ]);
    e.s(["default", 0, o], 14387)
}, 26330, e => {
    "use strict";
    var t, n = e.i(71645),
        r = e.i(81140),
        o = e.i(48425),
        i = Object.defineProperty,
        l = (e, t) => i(e, "name", {
            value: t,
            configurable: !0
        });

    function a(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }

    function s(...e) {
        return t => {
            let n = !1,
                r = e.map(e => {
                    let r = a(e, t);
                    return n || "function" != typeof r || (n = !0), r
                });
            if (n) return () => {
                for (let t = 0; t < r.length; t++) {
                    let n = r[t];
                    "function" == typeof n ? n() : a(e[t], null)
                }
            }
        }
    }

    function c(...e) {
        return n.useCallback(s(...e), e)
    }
    l(a, "setRef"), l(s, "composeRefs"), l(c, "useComposedRefs");
    var u = e.i(30207),
        d = e.i(43476),
        f = Object.defineProperty,
        p = (e, t) => f(e, "name", {
            value: t,
            configurable: !0
        }),
        m = "dismissableLayer.update",
        h = n.createContext({
            layers: new Set,
            layersWithOutsidePointerEventsDisabled: new Set,
            branches: new Set,
            dismissableSurfaces: new Set
        }),
        v = n.forwardRef(p(function(e, i) {
            let {
                disableOutsidePointerEvents: l = !1,
                deferPointerDownOutside: a = !1,
                onEscapeKeyDown: s,
                onPointerDownOutside: f,
                onFocusOutside: v,
                onInteractOutside: g,
                onDismiss: y,
                ...S
            } = e, E = n.useContext(h), [C, R] = n.useState(null), P = C?.ownerDocument ?? globalThis?.document, [, L] = n.useState({}), k = c(i, R), T = Array.from(E.layers), [j] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1), A = j ? T.indexOf(j) : -1, O = C ? T.indexOf(C) : -1, I = E.layersWithOutsidePointerEventsDisabled.size > 0, D = O >= A, M = n.useRef(!1), H = b(e => {
                f?.(e), g?.(e), e.defaultPrevented || y?.()
            }, {
                ownerDocument: P,
                deferPointerDownOutside: a,
                isDeferredPointerDownOutsideRef: M,
                dismissableSurfaces: E.dismissableSurfaces,
                shouldHandlePointerDownOutside: n.useCallback(e => {
                    if (!(e instanceof Node)) return !1;
                    let t = [...E.branches].some(t => t.contains(e));
                    return D && !t
                }, [E.branches, D])
            }), N = w(e => {
                if (a && M.current) return;
                let t = e.target;
                ![...E.branches].some(e => e.contains(t)) && (v?.(e), g?.(e), e.defaultPrevented || y?.())
            }, P), F = !!C && O === T.length - 1, _ = (0, u.useCallbackRef)(e => {
                "Escape" === e.key && (s?.(e), !e.defaultPrevented && y && (e.preventDefault(), y()))
            });
            return n.useEffect(() => {
                if (F) return P.addEventListener("keydown", _, {
                    capture: !0
                }), () => P.removeEventListener("keydown", _, {
                    capture: !0
                })
            }, [P, F, _]), n.useEffect(() => {
                if (C) return l && (0 === E.layersWithOutsidePointerEventsDisabled.size && (t = P.body.style.pointerEvents, P.body.style.pointerEvents = "none"), E.layersWithOutsidePointerEventsDisabled.add(C)), E.layers.add(C), x(), () => {
                    l && (E.layersWithOutsidePointerEventsDisabled.delete(C), 0 === E.layersWithOutsidePointerEventsDisabled.size && (P.body.style.pointerEvents = t))
                }
            }, [C, P, l, E]), n.useEffect(() => () => {
                C && (E.layers.delete(C), E.layersWithOutsidePointerEventsDisabled.delete(C), x())
            }, [C, E]), n.useEffect(() => {
                let e = p(() => L({}), "handleUpdate");
                return document.addEventListener(m, e), () => document.removeEventListener(m, e)
            }, []), (0, d.jsx)(o.Primitive.div, { ...S,
                ref: k,
                style: {
                    pointerEvents: I ? D ? "auto" : "none" : void 0,
                    ...e.style
                },
                onFocusCapture: (0, r.composeEventHandlers)(e.onFocusCapture, N.onFocusCapture),
                onBlurCapture: (0, r.composeEventHandlers)(e.onBlurCapture, N.onBlurCapture),
                onPointerDownCapture: (0, r.composeEventHandlers)(e.onPointerDownCapture, H.onPointerDownCapture)
            })
        }, "DismissableLayer"));

    function g() {
        let e = n.useContext(h),
            [t, r] = n.useState(null);
        return n.useEffect(() => {
            if (t) return e.dismissableSurfaces.add(t), () => {
                e.dismissableSurfaces.delete(t)
            }
        }, [t, e.dismissableSurfaces]), r
    }
    p(g, "useDismissableLayerSurface");
    var y = p(() => !0, "IS_TRUE");

    function b(e, t) {
        let {
            ownerDocument: r = globalThis?.document,
            deferPointerDownOutside: o = !1,
            isDeferredPointerDownOutsideRef: i,
            dismissableSurfaces: l,
            shouldHandlePointerDownOutside: a = y
        } = t, s = (0, u.useCallbackRef)(e), c = n.useRef(!1), d = n.useRef(!1), f = n.useRef(new Map), m = n.useRef(() => {});
        return n.useEffect(() => {
            function e() {
                d.current = !1, i.current = !1, f.current.clear()
            }

            function t() {
                return Array.from(f.current.values()).some(Boolean)
            }

            function n(e) {
                if (!d.current) return;
                let t = e.target;
                t instanceof Node && [...l].some(e => e.contains(t)) || f.current.set(e.type, !0), "click" === e.type && window.setTimeout(() => {
                    d.current && m.current()
                }, 0)
            }

            function u(e) {
                d.current && f.current.set(e.type, !1)
            }
            p(e, "resetOutsideInteraction"), p(t, "isOutsideInteractionIntercepted"), p(n, "handleInteractionCapture"), p(u, "handleInteractionBubble");
            let h = p(n => {
                    if (n.target && !c.current) {
                        let l = function() {
                            r.removeEventListener("click", m.current);
                            let n = t();
                            e(), n || S("dismissableLayer.pointerDownOutside", s, u, {
                                discrete: !0
                            })
                        };
                        if (p(l, "handleAndDispatchPointerDownOutsideEvent"), !a(n.target)) {
                            r.removeEventListener("click", m.current), e(), c.current = !1;
                            return
                        }
                        let u = {
                            originalEvent: n
                        };
                        d.current = !0, i.current = o && 0 === n.button, f.current.clear(), o && 0 === n.button ? (r.removeEventListener("click", m.current), m.current = l, r.addEventListener("click", m.current, {
                            once: !0
                        })) : l()
                    } else r.removeEventListener("click", m.current), e();
                    c.current = !1
                }, "handlePointerDown"),
                v = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
            for (let e of v) r.addEventListener(e, n, !0), r.addEventListener(e, u);
            let g = window.setTimeout(() => {
                r.addEventListener("pointerdown", h)
            }, 0);
            return () => {
                for (let e of (window.clearTimeout(g), r.removeEventListener("pointerdown", h), r.removeEventListener("click", m.current), v)) r.removeEventListener(e, n, !0), r.removeEventListener(e, u)
            }
        }, [r, s, o, i, l, a]), {
            onPointerDownCapture: p(() => c.current = !0, "onPointerDownCapture")
        }
    }

    function w(e, t = globalThis ? .document) {
        let r = (0, u.useCallbackRef)(e),
            o = n.useRef(!1);
        return n.useEffect(() => {
            let e = p(e => {
                e.target && !o.current && S("dismissableLayer.focusOutside", r, {
                    originalEvent: e
                }, {
                    discrete: !1
                })
            }, "handleFocus");
            return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
        }, [t, r]), {
            onFocusCapture: p(() => o.current = !0, "onFocusCapture"),
            onBlurCapture: p(() => o.current = !1, "onBlurCapture")
        }
    }

    function x() {
        let e = new CustomEvent(m);
        document.dispatchEvent(e)
    }

    function S(e, t, n, {
        discrete: r
    }) {
        let i = n.originalEvent.target,
            l = new CustomEvent(e, {
                bubbles: !1,
                cancelable: !0,
                detail: n
            });
        t && i.addEventListener(e, t, {
            once: !0
        }), r ? (0, o.dispatchDiscreteCustomEvent)(i, l) : i.dispatchEvent(l)
    }
    p(b, "usePointerDownOutside"), p(w, "useFocusOutside"), p(x, "dispatchUpdate"), p(S, "handleAndDispatchCustomEvent"), e.s(["DismissableLayer", 0, v, "useDismissableLayerSurface", 0, g], 26330)
}, 65491, e => {
    "use strict";
    var t = e.i(71645),
        n = Object.defineProperty,
        r = (e, t) => n(e, "name", {
            value: t,
            configurable: !0
        });

    function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }

    function i(...e) {
        return t => {
            let n = !1,
                r = e.map(e => {
                    let r = o(e, t);
                    return n || "function" != typeof r || (n = !0), r
                });
            if (n) return () => {
                for (let t = 0; t < r.length; t++) {
                    let n = r[t];
                    "function" == typeof n ? n() : o(e[t], null)
                }
            }
        }
    }

    function l(...e) {
        return t.useCallback(i(...e), e)
    }
    r(o, "setRef"), r(i, "composeRefs"), r(l, "useComposedRefs");
    var a = e.i(48425),
        s = e.i(30207),
        c = e.i(43476),
        u = Object.defineProperty,
        d = (e, t) => u(e, "name", {
            value: t,
            configurable: !0
        }),
        f = "focusScope.autoFocusOnMount",
        p = "focusScope.autoFocusOnUnmount",
        m = {
            bubbles: !1,
            cancelable: !0
        },
        h = t.forwardRef(d(function(e, n) {
            let {
                loop: r = !1,
                trapped: o = !1,
                onMountAutoFocus: i,
                onUnmountAutoFocus: u,
                ...h
            } = e, [b, w] = t.useState(null), x = (0, s.useCallbackRef)(i), C = (0, s.useCallbackRef)(u), R = t.useRef(null), L = l(n, w), k = t.useRef({
                paused: !1,
                pause() {
                    this.paused = !0
                },
                resume() {
                    this.paused = !1
                }
            }).current;
            t.useEffect(() => {
                if (o) {
                    let e = function(e) {
                            if (k.paused || !b) return;
                            let t = e.target;
                            b.contains(t) ? R.current = t : S(R.current, {
                                select: !0
                            })
                        },
                        t = function(e) {
                            if (k.paused || !b) return;
                            let t = e.relatedTarget;
                            null !== t && (b.contains(t) || S(R.current, {
                                select: !0
                            }))
                        },
                        n = function(e) {
                            if (document.activeElement === document.body)
                                for (let t of e) t.removedNodes.length > 0 && S(b)
                        };
                    d(e, "handleFocusIn"), d(t, "handleFocusOut"), d(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                    let r = new MutationObserver(n);
                    return b && r.observe(b, {
                        childList: !0,
                        subtree: !0
                    }), () => {
                        document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
                    }
                }
            }, [o, b, k.paused]), t.useEffect(() => {
                if (b) {
                    E.add(k);
                    let e = document.activeElement;
                    if (!b.contains(e)) {
                        let t = new CustomEvent(f, m);
                        b.addEventListener(f, x), b.dispatchEvent(t), t.defaultPrevented || (v(P(y(b)), {
                            select: !0
                        }), document.activeElement === e && S(b))
                    }
                    return () => {
                        b.removeEventListener(f, x), setTimeout(() => {
                            let t = new CustomEvent(p, m);
                            b.addEventListener(p, C), b.dispatchEvent(t), t.defaultPrevented || S(e ? ? document.body, {
                                select: !0
                            }), b.removeEventListener(p, C), E.remove(k)
                        }, 0)
                    }
                }
            }, [b, x, C, k]);
            let T = t.useCallback(e => {
                if (!r && !o || k.paused) return;
                let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                    n = document.activeElement;
                if (t && n) {
                    let t = e.currentTarget,
                        [o, i] = g(t);
                    o && i ? e.shiftKey || n !== i ? e.shiftKey && n === o && (e.preventDefault(), r && S(i, {
                        select: !0
                    })) : (e.preventDefault(), r && S(o, {
                        select: !0
                    })) : n === t && e.preventDefault()
                }
            }, [r, o, k.paused]);
            return (0, c.jsx)(a.Primitive.div, {
                tabIndex: -1,
                ...h,
                ref: L,
                onKeyDown: T
            })
        }, "FocusScope"));

    function v(e, {
        select: t = !1
    } = {}) {
        let n = document.activeElement;
        for (let r of e)
            if (S(r, {
                    select: t
                }), document.activeElement !== n) return
    }

    function g(e) {
        let t = y(e);
        return [b(t, e), b(t.reverse(), e)]
    }

    function y(e) {
        let t = [],
            n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: d(e => {
                    let t = "INPUT" === e.tagName && "hidden" === e.type;
                    return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }, "acceptNode")
            });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
    }

    function b(e, t) {
        let n = "function" == typeof t.checkVisibility && t.checkVisibility({
            checkVisibilityCSS: !0
        });
        for (let r of e)
            if (!(n ? !r.checkVisibility({
                    checkVisibilityCSS: !0
                }) : w(r, {
                    upTo: t
                }))) return r
    }

    function w(e, {
        upTo: t
    }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e && (void 0 === t || e !== t);) {
            if ("none" === getComputedStyle(e).display) return !0;
            e = e.parentElement
        }
        return !1
    }

    function x(e) {
        return e instanceof HTMLInputElement && "select" in e
    }

    function S(e, {
        select: t = !1
    } = {}) {
        if (e && e.focus) {
            let n = document.activeElement;
            e.focus({
                preventScroll: !0
            }), e !== n && x(e) && t && e.select()
        }
    }
    d(v, "focusFirst"), d(g, "getTabbableEdges"), d(y, "getTabbableCandidates"), d(b, "findVisible"), d(w, "isHidden"), d(x, "isSelectableInput"), d(S, "focus");
    var E = C();

    function C() {
        let e = [];
        return {
            add(t) {
                let n = e[0];
                t !== n && n ? .pause(), (e = R(e, t)).unshift(t)
            },
            remove(t) {
                e = R(e, t), e[0] ? .resume()
            }
        }
    }

    function R(e, t) {
        let n = [...e],
            r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
    }

    function P(e) {
        return e.filter(e => "A" !== e.tagName)
    }
    d(C, "createFocusScopesStack"), d(R, "arrayRemove"), d(P, "removeLinks"), e.s(["FocusScope", 0, h], 65491)
}, 74606, e => {
    "use strict";
    var t = e.i(71645),
        n = e.i(74080),
        r = e.i(48425),
        o = e.i(34620),
        i = e.i(43476),
        l = Object.defineProperty,
        a = t.forwardRef(l(function(e, l) {
            let {
                container: a,
                ...s
            } = e, [c, u] = t.useState(!1);
            (0, o.useLayoutEffect)(() => u(!0), []);
            let d = a || c && globalThis ? .document ? .body;
            return d ? n.createPortal((0, i.jsx)(r.Primitive.div, { ...s,
                ref: l
            }), d) : null
        }, "name", {
            value: "Portal",
            configurable: !0
        }));
    e.s(["Portal", 0, a])
}, 3536, e => {
    "use strict";
    var t = e.i(71645),
        n = Object.defineProperty,
        r = (e, t) => n(e, "name", {
            value: t,
            configurable: !0
        }),
        o = 0,
        i = null;

    function l() {
        t.useEffect(() => {
            i || (i = {
                start: a(),
                end: a()
            });
            let {
                start: e,
                end: t
            } = i;
            return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), o++, () => {
                1 === o && (i ? .start.remove(), i ? .end.remove(), i = null), o = Math.max(0, o - 1)
            }
        }, [])
    }

    function a() {
        let e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
    }
    r(function(e) {
        return l(), e.children
    }, "FocusGuards"), r(l, "useFocusGuards"), r(a, "createFocusGuard"), e.s(["useFocusGuards", 0, l])
}, 85369, e => {
    "use strict";
    var t, n, r, o, i, l, a, s = function() {
        return (s = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };

    function c(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
        return n
    }
    var u = ("function" == typeof SuppressedError && SuppressedError, e.i(71645)),
        d = "right-scroll-bar-position",
        f = "width-before-scroll-bar";

    function p(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
    }
    var m = "u" > typeof window ? u.useLayoutEffect : u.useEffect,
        h = new WeakMap,
        v = (void 0 === t && (t = {}), (void 0 === n && (n = function(e) {
            return e
        }), r = [], o = !1, i = {
            read: function() {
                if (o) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return r.length ? r[r.length - 1] : null
            },
            useMedium: function(e) {
                var t = n(e, o);
                return r.push(t),
                    function() {
                        r = r.filter(function(e) {
                            return e !== t
                        })
                    }
            },
            assignSyncMedium: function(e) {
                for (o = !0; r.length;) {
                    var t = r;
                    r = [], t.forEach(e)
                }
                r = {
                    push: function(t) {
                        return e(t)
                    },
                    filter: function() {
                        return r
                    }
                }
            },
            assignMedium: function(e) {
                o = !0;
                var t = [];
                if (r.length) {
                    var n = r;
                    r = [], n.forEach(e), t = r
                }
                var i = function() {
                        var n = t;
                        t = [], n.forEach(e)
                    },
                    l = function() {
                        return Promise.resolve().then(i)
                    };
                l(), r = {
                    push: function(e) {
                        t.push(e), l()
                    },
                    filter: function(e) {
                        return t = t.filter(e), r
                    }
                }
            }
        }).options = s({
            async: !0,
            ssr: !1
        }, t), i),
        g = function() {},
        y = u.forwardRef(function(e, t) {
            var n, r, o, i, l = u.useRef(null),
                a = u.useState({
                    onScrollCapture: g,
                    onWheelCapture: g,
                    onTouchMoveCapture: g
                }),
                d = a[0],
                f = a[1],
                y = e.forwardProps,
                b = e.children,
                w = e.className,
                x = e.removeScrollBar,
                S = e.enabled,
                E = e.shards,
                C = e.sideCar,
                R = e.noRelative,
                P = e.noIsolation,
                L = e.inert,
                k = e.allowPinchZoom,
                T = e.as,
                j = e.gapMode,
                A = c(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                O = (n = [l, t], r = function(e) {
                    return n.forEach(function(t) {
                        return p(t, e)
                    })
                }, (o = (0, u.useState)(function() {
                    return {
                        value: null,
                        callback: r,
                        facade: {
                            get current() {
                                return o.value
                            },
                            set current(value) {
                                var e = o.value;
                                e !== value && (o.value = value, o.callback(value, e))
                            }
                        }
                    }
                })[0]).callback = r, i = o.facade, m(function() {
                    var e = h.get(i);
                    if (e) {
                        var t = new Set(e),
                            r = new Set(n),
                            o = i.current;
                        t.forEach(function(e) {
                            r.has(e) || p(e, null)
                        }), r.forEach(function(e) {
                            t.has(e) || p(e, o)
                        })
                    }
                    h.set(i, n)
                }, [n]), i),
                I = s(s({}, A), d);
            return u.createElement(u.Fragment, null, S && u.createElement(C, {
                sideCar: v,
                removeScrollBar: x,
                shards: E,
                noRelative: R,
                noIsolation: P,
                inert: L,
                setCallbacks: f,
                allowPinchZoom: !!k,
                lockRef: l,
                gapMode: j
            }), y ? u.cloneElement(u.Children.only(b), s(s({}, I), {
                ref: O
            })) : u.createElement(void 0 === T ? "div" : T, s({}, I, {
                className: w,
                ref: O
            }), b))
        });
    y.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
    }, y.classNames = {
        fullWidth: f,
        zeroRight: d
    };
    var b = function(e) {
        var t = e.sideCar,
            n = c(e, ["sideCar"]);
        if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return u.createElement(r, s({}, n))
    };
    b.isSideCarExport = !0;
    var w = function() {
            var e = 0,
                t = null;
            return {
                add: function(n) {
                    if (0 == e && (t = function() {
                            if (!document) return null;
                            var e = document.createElement("style");
                            e.type = "text/css";
                            var t = a || ("u" > typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
                            return t && e.setAttribute("nonce", t), e
                        }())) {
                        var r, o;
                        (r = t).styleSheet ? r.styleSheet.cssText = n : r.appendChild(document.createTextNode(n)), o = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(o)
                    }
                    e++
                },
                remove: function() {
                    --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                }
            }
        },
        x = function() {
            var e = w();
            return function(t, n) {
                u.useEffect(function() {
                    return e.add(t),
                        function() {
                            e.remove()
                        }
                }, [t && n])
            }
        },
        S = function() {
            var e = x();
            return function(t) {
                return e(t.styles, t.dynamic), null
            }
        },
        E = {
            left: 0,
            top: 0,
            right: 0,
            gap: 0
        },
        C = function(e) {
            return parseInt(e || "", 10) || 0
        },
        R = function(e) {
            var t = window.getComputedStyle(document.body),
                n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                r = t["padding" === e ? "paddingTop" : "marginTop"],
                o = t["padding" === e ? "paddingRight" : "marginRight"];
            return [C(n), C(r), C(o)]
        },
        P = function(e) {
            if (void 0 === e && (e = "margin"), "u" < typeof window) return E;
            var t = R(e),
                n = document.documentElement.clientWidth,
                r = window.innerWidth;
            return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, r - n + t[2] - t[0])
            }
        },
        L = S(),
        k = "data-scroll-locked",
        T = function(e, t, n, r) {
            var o = e.left,
                i = e.top,
                l = e.right,
                a = e.gap;
            return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(a, "px ").concat(r, ";\n  }\n  body[").concat(k, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(d, " {\n    right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(f, " {\n    margin-right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(d, " .").concat(d, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(f, " .").concat(f, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(k, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(a, "px;\n  }\n")
        },
        j = function() {
            var e = parseInt(document.body.getAttribute(k) || "0", 10);
            return isFinite(e) ? e : 0
        },
        A = function() {
            u.useEffect(function() {
                return document.body.setAttribute(k, (j() + 1).toString()),
                    function() {
                        var e = j() - 1;
                        e <= 0 ? document.body.removeAttribute(k) : document.body.setAttribute(k, e.toString())
                    }
            }, [])
        },
        O = function(e) {
            var t = e.noRelative,
                n = e.noImportant,
                r = e.gapMode,
                o = void 0 === r ? "margin" : r;
            A();
            var i = u.useMemo(function() {
                return P(o)
            }, [o]);
            return u.createElement(L, {
                styles: T(i, !t, o, n ? "" : "!important")
            })
        },
        I = !1;
    if ("u" > typeof window) try {
        var D = Object.defineProperty({}, "passive", {
            get: function() {
                return I = !0, !0
            }
        });
        window.addEventListener("test", D, D), window.removeEventListener("test", D, D)
    } catch (e) {
        I = !1
    }
    var M = !!I && {
            passive: !1
        },
        H = function(e, t) {
            if (!(e instanceof Element)) return !1;
            var n = window.getComputedStyle(e);
            return "hidden" !== n[t] && (n.overflowY !== n.overflowX || "TEXTAREA" === e.tagName || "visible" !== n[t])
        },
        N = function(e, t) {
            var n = t.ownerDocument,
                r = t;
            do {
                if ("u" > typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), F(e, r)) {
                    var o = _(e, r);
                    if (o[1] > o[2]) return !0
                }
                r = r.parentNode
            } while (r && r !== n.body) return !1
        },
        F = function(e, t) {
            return "v" === e ? H(t, "overflowY") : H(t, "overflowX")
        },
        _ = function(e, t) {
            return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
        },
        B = function(e, t, n, r, o) {
            var i, l = (i = window.getComputedStyle(t).direction, "h" === e && "rtl" === i ? -1 : 1),
                a = l * r,
                s = n.target,
                c = t.contains(s),
                u = !1,
                d = a > 0,
                f = 0,
                p = 0;
            do {
                if (!s) break;
                var m = _(e, s),
                    h = m[0],
                    v = m[1] - m[2] - l * h;
                (h || v) && F(e, s) && (f += v, p += h);
                var g = s.parentNode;
                s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g
            } while (!c && s !== document.body || c && (t.contains(s) || t === s)) return d && (o && 1 > Math.abs(f) || !o && a > f) ? u = !0 : !d && (o && 1 > Math.abs(p) || !o && -a > p) && (u = !0), u
        },
        W = function(e) {
            return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        V = function(e) {
            return [e.deltaX, e.deltaY]
        },
        z = function(e) {
            return e && "current" in e ? e.current : e
        },
        U = 0,
        $ = [];
    let K = (l = function(e) {
        var t = u.useRef([]),
            n = u.useRef([0, 0]),
            r = u.useRef(),
            o = u.useState(U++)[0],
            i = u.useState(S)[0],
            l = u.useRef(e);
        u.useEffect(function() {
            l.current = e
        }, [e]), u.useEffect(function() {
            if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(o));
                var t = (function(e, t, n) {
                    if (n || 2 == arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                    return e.concat(r || Array.prototype.slice.call(t))
                })([e.lockRef.current], (e.shards || []).map(z), !0).filter(Boolean);
                return t.forEach(function(e) {
                        return e.classList.add("allow-interactivity-".concat(o))
                    }),
                    function() {
                        document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function(e) {
                            return e.classList.remove("allow-interactivity-".concat(o))
                        })
                    }
            }
        }, [e.inert, e.lockRef.current, e.shards]);
        var a = u.useCallback(function(e, t) {
                if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !l.current.allowPinchZoom;
                var o, i = W(e),
                    a = n.current,
                    s = "deltaX" in e ? e.deltaX : a[0] - i[0],
                    c = "deltaY" in e ? e.deltaY : a[1] - i[1],
                    u = e.target,
                    d = Math.abs(s) > Math.abs(c) ? "h" : "v";
                if ("touches" in e && "h" === d && "range" === u.type) return !1;
                var f = window.getSelection(),
                    p = f && f.anchorNode;
                if (p && (p === u || p.contains(u))) return !1;
                var m = N(d, u);
                if (!m) return !0;
                if (m ? o = d : (o = "v" === d ? "h" : "v", m = N(d, u)), !m) return !1;
                if (!r.current && "changedTouches" in e && (s || c) && (r.current = o), !o) return !0;
                var h = r.current || o;
                return B(h, t, e, "h" === h ? s : c, !0)
            }, []),
            s = u.useCallback(function(e) {
                if ($.length && $[$.length - 1] === i) {
                    var n = "deltaY" in e ? V(e) : W(e),
                        r = t.current.filter(function(t) {
                            var r;
                            return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (r = t.delta, r[0] === n[0] && r[1] === n[1])
                        })[0];
                    if (r && r.should) {
                        e.cancelable && e.preventDefault();
                        return
                    }
                    if (!r) {
                        var o = (l.current.shards || []).map(z).filter(Boolean).filter(function(t) {
                            return t.contains(e.target)
                        });
                        (o.length > 0 ? a(e, o[0]) : !l.current.noIsolation) && e.cancelable && e.preventDefault()
                    }
                }
            }, []),
            c = u.useCallback(function(e, n, r, o) {
                var i = {
                    name: e,
                    delta: n,
                    target: r,
                    should: o,
                    shadowParent: function(e) {
                        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
                        return t
                    }(r)
                };
                t.current.push(i), setTimeout(function() {
                    t.current = t.current.filter(function(e) {
                        return e !== i
                    })
                }, 1)
            }, []),
            d = u.useCallback(function(e) {
                n.current = W(e), r.current = void 0
            }, []),
            f = u.useCallback(function(t) {
                c(t.type, V(t), t.target, a(t, e.lockRef.current))
            }, []),
            p = u.useCallback(function(t) {
                c(t.type, W(t), t.target, a(t, e.lockRef.current))
            }, []);
        u.useEffect(function() {
            return $.push(i), e.setCallbacks({
                    onScrollCapture: f,
                    onWheelCapture: f,
                    onTouchMoveCapture: p
                }), document.addEventListener("wheel", s, M), document.addEventListener("touchmove", s, M), document.addEventListener("touchstart", d, M),
                function() {
                    $ = $.filter(function(e) {
                        return e !== i
                    }), document.removeEventListener("wheel", s, M), document.removeEventListener("touchmove", s, M), document.removeEventListener("touchstart", d, M)
                }
        }, []);
        var m = e.removeScrollBar,
            h = e.inert;
        return u.createElement(u.Fragment, null, h ? u.createElement(i, {
            styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
        }) : null, m ? u.createElement(O, {
            noRelative: e.noRelative,
            gapMode: e.gapMode
        }) : null)
    }, v.useMedium(l), b);
    var Y = u.forwardRef(function(e, t) {
        return u.createElement(y, s({}, e, {
            ref: t,
            sideCar: K
        }))
    });
    Y.classNames = y.classNames, e.s(["RemoveScroll", 0, Y], 85369)
}, 86312, e => {
    "use strict";
    var t = new WeakMap,
        n = new WeakMap,
        r = {},
        o = 0,
        i = function(e) {
            return e && (e.host || i(e.parentNode))
        },
        l = function(e, l, a, s) {
            var c = (Array.isArray(e) ? e : [e]).map(function(e) {
                if (l.contains(e)) return e;
                var t = i(e);
                return t && l.contains(t) ? t : (console.error("aria-hidden", e, "in not contained inside", l, ". Doing nothing"), null)
            }).filter(function(e) {
                return !!e
            });
            r[a] || (r[a] = new WeakMap);
            var u = r[a],
                d = [],
                f = new Set,
                p = new Set(c),
                m = function(e) {
                    !e || f.has(e) || (f.add(e), m(e.parentNode))
                };
            c.forEach(m);
            var h = function(e) {
                !e || p.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                    if (f.has(e)) h(e);
                    else try {
                        var r = e.getAttribute(s),
                            o = null !== r && "false" !== r,
                            i = (t.get(e) || 0) + 1,
                            l = (u.get(e) || 0) + 1;
                        t.set(e, i), u.set(e, l), d.push(e), 1 === i && o && n.set(e, !0), 1 === l && e.setAttribute(a, "true"), o || e.setAttribute(s, "true")
                    } catch (t) {
                        console.error("aria-hidden: cannot operate on ", e, t)
                    }
                })
            };
            return h(l), f.clear(), o++,
                function() {
                    d.forEach(function(e) {
                        var r = t.get(e) - 1,
                            o = u.get(e) - 1;
                        t.set(e, r), u.set(e, o), r || (n.has(e) || e.removeAttribute(s), n.delete(e)), o || e.removeAttribute(a)
                    }), --o || (t = new WeakMap, t = new WeakMap, n = new WeakMap, r = {})
                }
        };
    e.s(["hideOthers", 0, function(e, t, n) {
        void 0 === n && (n = "data-aria-hidden");
        var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || ("u" < typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
        return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), l(r, o, n, "aria-hidden")) : function() {
            return null
        }
    }])
}, 23750, e => {
    "use strict";
    var t = e.i(43476),
        n = e.i(47163);
    e.s(["Input", 0, function({
        className: e,
        type: r,
        ...o
    }) {
        return (0, t.jsx)("input", {
            type: r,
            "data-slot": "input",
            className: (0, n.cn)("h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30", "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", e),
            ...o
        })
    }])
}, 43957, e => {
    "use strict";
    let t = (0, e.i(56420).default)("check", [
        ["path", {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }]
    ]);
    e.s(["default", 0, t])
}, 93698, 3636, 58729, 70152, 84430, e => {
    "use strict";
    var t = e.i(43957);
    e.s(["CheckIcon", () => t.default], 93698);
    var n = e.i(56420);
    let r = (0, n.default)("chevron-down", [
        ["path", {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }]
    ]);
    e.s(["ChevronDownIcon", 0, r], 3636);
    let o = (0, n.default)("chevron-up", [
        ["path", {
            d: "m18 15-6-6-6 6",
            key: "153udz"
        }]
    ]);

    function i(e, [t, n]) {
        return Math.min(n, Math.max(t, e))
    }
    e.s(["ChevronUpIcon", 0, o], 58729), (0, Object.defineProperty)(i, "name", {
        value: "clamp",
        configurable: !0
    }), e.s(["clamp", 0, i], 70152);
    var l = e.i(71645),
        a = Object.defineProperty,
        s = (e, t) => a(e, "name", {
            value: t,
            configurable: !0
        });

    function c(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }

    function u(...e) {
        return t => {
            let n = !1,
                r = e.map(e => {
                    let r = c(e, t);
                    return n || "function" != typeof r || (n = !0), r
                });
            if (n) return () => {
                for (let t = 0; t < r.length; t++) {
                    let n = r[t];
                    "function" == typeof n ? n() : c(e[t], null)
                }
            }
        }
    }

    function d(...e) {
        return l.useCallback(u(...e), e)
    }
    s(c, "setRef"), s(u, "composeRefs"), s(d, "useComposedRefs"), e.s(["useComposedRefs", 0, d], 84430)
}, 53660, e => {
    "use strict";
    let t;
    var n = e.i(71645);
    let r = ["top", "right", "bottom", "left"],
        o = Math.min,
        i = Math.max,
        l = Math.round,
        a = Math.floor,
        s = e => ({
            x: e,
            y: e
        }),
        c = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };

    function u(e, t) {
        return "function" == typeof e ? e(t) : e
    }

    function d(e) {
        return e.split("-")[0]
    }

    function f(e) {
        return e.split("-")[1]
    }

    function p(e) {
        return "x" === e ? "y" : "x"
    }

    function m(e) {
        return "y" === e ? "height" : "width"
    }

    function h(e) {
        let t = e[0];
        return "t" === t || "b" === t ? "y" : "x"
    }

    function v(e) {
        return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start")
    }
    let g = ["left", "right"],
        y = ["right", "left"],
        b = ["top", "bottom"],
        w = ["bottom", "top"];

    function x(e) {
        let t = d(e);
        return c[t] + e.slice(t.length)
    }

    function S(e) {
        var t, n, r, o;
        return "number" != typeof e ? {
            top: null != (t = e.top) ? t : 0,
            right: null != (n = e.right) ? n : 0,
            bottom: null != (r = e.bottom) ? r : 0,
            left: null != (o = e.left) ? o : 0
        } : {
            top: e,
            right: e,
            bottom: e,
            left: e
        }
    }

    function E(e) {
        let {
            x: t,
            y: n,
            width: r,
            height: o
        } = e;
        return {
            width: r,
            height: o,
            top: n,
            left: t,
            right: t + r,
            bottom: n + o,
            x: t,
            y: n
        }
    }

    function C(e, t, n) {
        let r, {
                reference: o,
                floating: i
            } = e,
            l = h(t),
            a = p(h(t)),
            s = m(a),
            c = d(t),
            u = o.x + o.width / 2 - i.width / 2,
            v = o.y + o.height / 2 - i.height / 2,
            g = o[s] / 2 - i[s] / 2;
        switch (c) {
            case "top":
                r = {
                    x: u,
                    y: o.y - i.height
                };
                break;
            case "bottom":
                r = {
                    x: u,
                    y: o.y + o.height
                };
                break;
            case "right":
                r = {
                    x: o.x + o.width,
                    y: v
                };
                break;
            case "left":
                r = {
                    x: o.x - i.width,
                    y: v
                };
                break;
            default:
                r = {
                    x: o.x,
                    y: o.y
                }
        }
        let y = f(t);
        return y && (r[a] += g * ("end" === y ? 1 : -1) * (n && "y" === l ? -1 : 1)), r
    }
    async function R(e, t) {
        var n;
        void 0 === t && (t = {});
        let {
            x: r,
            y: o,
            platform: i,
            rects: l,
            elements: a,
            strategy: s
        } = e, {
            boundary: c = "clippingAncestors",
            rootBoundary: d = "viewport",
            elementContext: f = "floating",
            altBoundary: p = !1,
            padding: m = 0
        } = u(t, e), h = S(m), v = a[p ? "floating" === f ? "reference" : "floating" : f], g = E(await i.getClippingRect({
            element: null == (n = await (null == i.isElement ? void 0 : i.isElement(v))) || n ? v : v.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
            boundary: c,
            rootBoundary: d,
            strategy: s
        })), y = "floating" === f ? {
            x: r,
            y: o,
            width: l.floating.width,
            height: l.floating.height
        } : l.reference, b = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), w = await (null == i.isElement ? void 0 : i.isElement(b)) && await (null == i.getScale ? void 0 : i.getScale(b)) || {
            x: 1,
            y: 1
        }, x = E(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: y,
            offsetParent: b,
            strategy: s
        }) : y);
        return {
            top: (g.top - x.top + h.top) / w.y,
            bottom: (x.bottom - g.bottom + h.bottom) / w.y,
            left: (g.left - x.left + h.left) / w.x,
            right: (x.right - g.right + h.right) / w.x
        }
    }
    let P = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: i = [],
            platform: l
        } = n, a = l.detectOverflow ? l : { ...l,
            detectOverflow: R
        }, s = await (null == l.isRTL ? void 0 : l.isRTL(t)), c = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }), {
            x: u,
            y: d
        } = C(c, r, s), f = r, p = 0, m = {};
        for (let n = 0; n < i.length; n++) {
            let h = i[n];
            if (!h) continue;
            let {
                name: v,
                fn: g
            } = h, {
                x: y,
                y: b,
                data: w,
                reset: x
            } = await g({
                x: u,
                y: d,
                initialPlacement: r,
                placement: f,
                strategy: o,
                middlewareData: m,
                rects: c,
                platform: a,
                elements: {
                    reference: e,
                    floating: t
                }
            });
            u = null != y ? y : u, d = null != b ? b : d, m[v] = { ...m[v],
                ...w
            }, x && p < 50 && (p++, "object" == typeof x && (x.placement && (f = x.placement), x.rects && (c = !0 === x.rects ? await l.getElementRects({
                reference: e,
                floating: t,
                strategy: o
            }) : x.rects), {
                x: u,
                y: d
            } = C(c, f, s)), n = -1)
        }
        return {
            x: u,
            y: d,
            placement: f,
            strategy: o,
            middlewareData: m
        }
    };

    function L(e, t) {
        return {
            top: e.top - t.height,
            right: e.right - t.width,
            bottom: e.bottom - t.height,
            left: e.left - t.width
        }
    }

    function k(e) {
        return r.some(t => e[t] >= 0)
    }
    let T = new Set(["left", "top"]);
    async function j(e, t) {
        let {
            placement: n,
            platform: r,
            elements: o
        } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), l = d(n), a = f(n), s = "y" === h(n), c = T.has(l) ? -1 : 1, p = i && s ? -1 : 1, m = u(t, e), {
            mainAxis: v,
            crossAxis: g,
            alignmentAxis: y
        } = "number" == typeof m ? {
            mainAxis: m,
            crossAxis: 0,
            alignmentAxis: null
        } : {
            mainAxis: m.mainAxis || 0,
            crossAxis: m.crossAxis || 0,
            alignmentAxis: m.alignmentAxis
        };
        return a && "number" == typeof y && (g = "end" === a ? -1 * y : y), s ? {
            x: g * p,
            y: v * c
        } : {
            x: v * c,
            y: g * p
        }
    }

    function A() {
        return "u" > typeof window
    }

    function O(e) {
        return M(e) ? (e.nodeName || "").toLowerCase() : "#document"
    }

    function I(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
    }

    function D(e) {
        var t;
        return null == (t = (M(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
    }

    function M(e) {
        return !!A() && (e instanceof Node || e instanceof I(e).Node)
    }

    function H(e) {
        return !!A() && (e instanceof Element || e instanceof I(e).Element)
    }

    function N(e) {
        return !!A() && (e instanceof HTMLElement || e instanceof I(e).HTMLElement)
    }

    function F(e) {
        return !(!A() || "u" < typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof I(e).ShadowRoot)
    }

    function _(e) {
        let {
            overflow: t,
            overflowX: n,
            overflowY: r,
            display: o
        } = Y(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && "inline" !== o && "contents" !== o
    }

    function B(e) {
        try {
            if (e.matches(":popover-open")) return !0
        } catch (e) {}
        try {
            return e.matches(":modal")
        } catch (e) {
            return !1
        }
    }
    let W = /transform|translate|scale|rotate|perspective|filter/,
        V = /paint|layout|strict|content/,
        z = e => !!e && "none" !== e;

    function U(e) {
        let t = H(e) ? Y(e) : e;
        return z(t.transform) || z(t.translate) || z(t.scale) || z(t.rotate) || z(t.perspective) || !$() && (z(t.backdropFilter) || z(t.filter)) || W.test(t.willChange || "") || V.test(t.contain || "")
    }

    function $() {
        return null == t && (t = "u" > typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), t
    }

    function K(e) {
        return /^(html|body|#document)$/.test(O(e))
    }

    function Y(e) {
        return I(e).getComputedStyle(e)
    }

    function X(e) {
        return H(e) ? {
            scrollLeft: e.scrollLeft,
            scrollTop: e.scrollTop
        } : {
            scrollLeft: e.scrollX,
            scrollTop: e.scrollY
        }
    }

    function G(e) {
        if ("html" === O(e)) return e;
        let t = e.assignedSlot || e.parentNode || F(e) && e.host || D(e);
        return F(t) ? t.host : t
    }

    function q(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = function e(t) {
                let n = G(t);
                return K(n) ? (t.ownerDocument || t).body : N(n) && _(n) ? n : e(n)
            }(e),
            i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
            l = I(o);
        if (!i) return t.concat(o, q(o, [], n)); {
            let e = Z(l);
            return t.concat(l, l.visualViewport || [], _(o) ? o : [], e && n ? q(e) : [])
        }
    }

    function Z(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
    }

    function J(e) {
        let t = Y(e),
            n = parseFloat(t.width) || 0,
            r = parseFloat(t.height) || 0,
            o = N(e),
            i = o ? e.offsetWidth : n,
            a = o ? e.offsetHeight : r,
            s = l(n) !== i || l(r) !== a;
        return s && (n = i, r = a), {
            width: n,
            height: r,
            $: s
        }
    }

    function Q(e) {
        return H(e) ? e : e.contextElement
    }

    function ee(e) {
        let t = Q(e);
        if (!N(t)) return s(1);
        let n = t.getBoundingClientRect(),
            {
                width: r,
                height: o,
                $: i
            } = J(t),
            a = (i ? l(n.width) : n.width) / r,
            c = (i ? l(n.height) : n.height) / o;
        return a && Number.isFinite(a) || (a = 1), c && Number.isFinite(c) || (c = 1), {
            x: a,
            y: c
        }
    }
    let et = s(0);

    function en(e) {
        let t = I(e);
        return $() && t.visualViewport ? {
            x: t.visualViewport.offsetLeft,
            y: t.visualViewport.offsetTop
        } : et
    }

    function er(e, t, n, r) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let i = e.getBoundingClientRect(),
            l = Q(e),
            a = s(1);
        t && (r ? H(r) && (a = ee(r)) : a = ee(e));
        let c = (void 0 === (o = n) && (o = !1), r && o && r === I(l)) ? en(l) : s(0),
            u = (i.left + c.x) / a.x,
            d = (i.top + c.y) / a.y,
            f = i.width / a.x,
            p = i.height / a.y;
        if (l && r) {
            let e = I(l),
                t = H(r) ? I(r) : r,
                n = e,
                o = Z(n);
            for (; o && t !== n;) {
                let e = ee(o),
                    t = o.getBoundingClientRect(),
                    r = Y(o),
                    i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                    l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
                u *= e.x, d *= e.y, f *= e.x, p *= e.y, u += i, d += l, o = Z(n = I(o))
            }
        }
        return E({
            width: f,
            height: p,
            x: u,
            y: d
        })
    }

    function eo(e, t) {
        let n = X(e).scrollLeft;
        return t ? t.left + n : er(D(e)).left + n
    }

    function ei(e, t) {
        let n = e.getBoundingClientRect();
        return {
            x: n.left + t.scrollLeft - eo(e, n),
            y: n.top + t.scrollTop
        }
    }

    function el(e, t, n) {
        var r;
        let o;
        if ("viewport" === t || "layoutViewport" === t) o = function(e, t, n) {
            void 0 === n && (n = "viewport");
            let r = "layoutViewport" === n,
                o = I(e),
                i = D(e),
                l = o.visualViewport,
                a = i.clientWidth,
                s = i.clientHeight,
                c = 0,
                u = 0;
            if (l) {
                let e = !$() || "fixed" === t;
                r ? e || (c = -l.offsetLeft, u = -l.offsetTop) : (a = l.width, s = l.height, e && (c = l.offsetLeft, u = l.offsetTop))
            }
            if (0 >= eo(i)) {
                let e = i.ownerDocument,
                    t = e.body,
                    n = getComputedStyle(t),
                    r = "CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
                    o = Math.abs(i.clientWidth - t.clientWidth - r),
                    l = "stable both-edges" === getComputedStyle(i).scrollbarGutter ? o / 2 : o;
                l <= 25 && (a -= l)
            }
            return {
                width: a,
                height: s,
                x: c,
                y: u
            }
        }(e, n, t);
        else if ("document" === t) {
            let t, n, l, a, s, c;
            t = X(r = D(e)), n = r.ownerDocument.body, l = i(r.scrollWidth, r.clientWidth, n.scrollWidth, n.clientWidth), a = i(r.scrollHeight, r.clientHeight, n.scrollHeight, n.clientHeight), s = -t.scrollLeft + eo(r), c = -t.scrollTop, "rtl" === Y(n).direction && (s += i(r.clientWidth, n.clientWidth) - l), o = {
                width: l,
                height: a,
                x: s,
                y: c
            }
        } else if (H(t)) {
            let e, r, i, l, a, s;
            r = (e = er(t, !0, "fixed" === n)).top + t.clientTop, i = e.left + t.clientLeft, l = ee(t), a = t.clientWidth * l.x, s = t.clientHeight * l.y, o = {
                width: a,
                height: s,
                x: i * l.x,
                y: r * l.y
            }
        } else {
            let n = en(e);
            o = {
                x: t.x - n.x,
                y: t.y - n.y,
                width: t.width,
                height: t.height
            }
        }
        return E(o)
    }

    function ea(e) {
        return "static" === Y(e).position
    }

    function es(e, t) {
        if (!N(e) || "fixed" === Y(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return D(e) === n && (n = n.ownerDocument.body), n
    }

    function ec(e, t) {
        var n;
        let r = I(e);
        if (B(e)) return r;
        if (!N(e)) {
            let t = G(e);
            for (; t && !K(t);) {
                if (H(t) && !ea(t)) return t;
                t = G(t)
            }
            return r
        }
        let o = es(e, t);
        for (; o && (n = o, /^(table|td|th)$/.test(O(n))) && ea(o);) o = es(o, t);
        return o && K(o) && ea(o) && !U(o) ? r : o || function(e) {
            let t = G(e);
            for (; N(t) && !K(t);) {
                if (U(t)) return t;
                if (B(t)) break;
                t = G(t)
            }
            return null
        }(e) || r
    }
    let eu = async function(e) {
            let t = this.getOffsetParent || ec,
                n = this.getDimensions,
                r = await n(e.floating);
            return {
                reference: function(e, t, n) {
                    let r = N(t),
                        o = D(t),
                        i = "fixed" === n,
                        l = er(e, !0, i, t),
                        a = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        c = s(0);
                    if ((r || !i) && (("body" !== O(t) || _(o)) && (a = X(t)), r)) {
                        let e = er(t, !0, i, t);
                        c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop
                    }!r && o && (c.x = eo(o));
                    let u = !o || r || i ? s(0) : ei(o, a);
                    return {
                        x: l.left + a.scrollLeft - c.x - u.x,
                        y: l.top + a.scrollTop - c.y - u.y,
                        width: l.width,
                        height: l.height
                    }
                }(e.reference, await t(e.floating), e.strategy),
                floating: {
                    x: 0,
                    y: 0,
                    width: r.width,
                    height: r.height
                }
            }
        },
        ed = {
            convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                let {
                    elements: t,
                    rect: n,
                    offsetParent: r,
                    strategy: o
                } = e, i = "fixed" === o, l = D(r), a = !!t && B(t.floating);
                if (r === l || a && i) return n;
                let c = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    u = s(1),
                    d = s(0),
                    f = N(r);
                if ((f || !i) && (("body" !== O(r) || _(l)) && (c = X(r)), f)) {
                    let e = er(r);
                    u = ee(r), d.x = e.x + r.clientLeft, d.y = e.y + r.clientTop
                }
                let p = !l || f || i ? s(0) : ei(l, c);
                return {
                    width: n.width * u.x,
                    height: n.height * u.y,
                    x: n.x * u.x - c.scrollLeft * u.x + d.x + p.x,
                    y: n.y * u.y - c.scrollTop * u.y + d.y + p.y
                }
            },
            getDocumentElement: D,
            getClippingRect: function(e) {
                let {
                    element: t,
                    boundary: n,
                    rootBoundary: r,
                    strategy: l
                } = e, a = [..."clippingAncestors" === n ? B(t) ? [] : function(e, t) {
                    let n = t.get(e);
                    if (n) return n;
                    let r = q(e, [], !1).filter(e => H(e) && "body" !== O(e)),
                        o = null,
                        i = "fixed" === Y(e).position,
                        l = i ? G(e) : e;
                    for (; H(l) && !K(l);) {
                        let e = Y(l),
                            t = U(l),
                            n = o ? o.position : i ? "fixed" : "";
                        t || "fixed" !== n && ("absolute" !== n || "static" !== e.position) ? o = e : r = r.filter(e => e !== l), l = G(l)
                    }
                    return t.set(e, r), r
                }(t, this._c) : [].concat(n), r], s = el(t, a[0], l), c = s.top, u = s.right, d = s.bottom, f = s.left;
                for (let e = 1; e < a.length; e++) {
                    let n = el(t, a[e], l);
                    c = i(n.top, c), u = o(n.right, u), d = o(n.bottom, d), f = i(n.left, f)
                }
                return {
                    width: u - f,
                    height: d - c,
                    x: f,
                    y: c
                }
            },
            getOffsetParent: ec,
            getElementRects: eu,
            getClientRects: function(e) {
                return e.getClientRects ? Array.from(e.getClientRects()) : []
            },
            getDimensions: function(e) {
                let {
                    width: t,
                    height: n
                } = J(e);
                return {
                    width: t,
                    height: n
                }
            },
            getScale: ee,
            isElement: H,
            isRTL: function(e) {
                return "rtl" === Y(e).direction
            }
        };

    function ef(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
    }
    let ep = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            let {
                x: n,
                y: r,
                placement: l,
                rects: a,
                platform: s,
                elements: c,
                middlewareData: d
            } = t, {
                element: v,
                padding: g = 0
            } = u(e, t) || {};
            if (null == v) return {};
            let y = S(g),
                b = {
                    x: n,
                    y: r
                },
                w = p(h(l)),
                x = m(w),
                E = await s.getDimensions(v),
                C = "y" === w,
                R = C ? "clientHeight" : "clientWidth",
                P = a.reference[x] + a.reference[w] - b[w] - a.floating[x],
                L = b[w] - a.reference[w],
                k = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(v)),
                T = k ? k[R] : 0;
            T && await (null == s.isElement ? void 0 : s.isElement(k)) || (T = c.floating[R] || a.floating[x]);
            let j = T / 2 - E[x] / 2 - 1,
                A = o(y[C ? "top" : "left"], j),
                O = o(y[C ? "bottom" : "right"], j),
                I = T - E[x] - O,
                D = T / 2 - E[x] / 2 + (P / 2 - L / 2),
                M = i(A, o(D, I)),
                H = !d.arrow && null != f(l) && D !== M && a.reference[x] / 2 - (D < A ? A : O) - E[x] / 2 < 0,
                N = H ? D < A ? D - A : D - I : 0;
            return {
                [w]: b[w] + N,
                data: {
                    [w]: M,
                    centerOffset: D - M - N,
                    ...H && {
                        alignmentOffset: N
                    }
                },
                reset: H
            }
        }
    });
    var em = e.i(74080),
        eh = "u" > typeof document ? n.useLayoutEffect : function() {};

    function ev(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
            if (Array.isArray(e)) {
                if ((n = e.length) !== t.length) return !1;
                for (r = n; 0 != r--;)
                    if (!ev(e[r], t[r])) return !1;
                return !0
            }
            if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
            for (r = n; 0 != r--;)
                if (!({}).hasOwnProperty.call(t, o[r])) return !1;
            for (r = n; 0 != r--;) {
                let n = o[r];
                if (("_owner" !== n || !e.$$typeof) && !ev(e[n], t[n])) return !1
            }
            return !0
        }
        return e != e && t != t
    }

    function eg(e) {
        return "u" < typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
    }

    function ey(e, t) {
        let n = eg(e);
        return Math.round(t * n) / n
    }

    function eb(e) {
        let t = n.useRef(e);
        return eh(() => {
            t.current = e
        }), t
    }
    var ew = e.i(48425),
        ex = e.i(43476),
        eS = Object.defineProperty,
        eE = n.forwardRef(eS(function(e, t) {
            let {
                children: n,
                width: r = 10,
                height: o = 5,
                ...i
            } = e;
            return (0, ex.jsx)(ew.Primitive.svg, { ...i,
                ref: t,
                width: r,
                height: o,
                viewBox: "0 0 30 10",
                preserveAspectRatio: "none",
                children: e.asChild ? n : (0, ex.jsx)("polygon", {
                    points: "0,0 30,0 15,10"
                })
            })
        }, "name", {
            value: "Arrow",
            configurable: !0
        })),
        eC = Object.defineProperty,
        eR = (e, t) => eC(e, "name", {
            value: t,
            configurable: !0
        });

    function eP(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }

    function eL(...e) {
        return t => {
            let n = !1,
                r = e.map(e => {
                    let r = eP(e, t);
                    return n || "function" != typeof r || (n = !0), r
                });
            if (n) return () => {
                for (let t = 0; t < r.length; t++) {
                    let n = r[t];
                    "function" == typeof n ? n() : eP(e[t], null)
                }
            }
        }
    }

    function ek(...e) {
        return n.useCallback(eL(...e), e)
    }
    eR(eP, "setRef"), eR(eL, "composeRefs"), eR(ek, "useComposedRefs");
    var eT = e.i(30030),
        ej = e.i(30207),
        eA = e.i(34620);

    function eO(e) {
        let [t, r] = n.useState(void 0);
        return (0, eA.useLayoutEffect)(() => {
            if (e) {
                r({
                    width: e.offsetWidth,
                    height: e.offsetHeight
                });
                let t = new ResizeObserver(t => {
                    let n, o;
                    if (!Array.isArray(t) || !t.length) return;
                    let i = t[0];
                    if ("borderBoxSize" in i) {
                        let e = i.borderBoxSize,
                            t = Array.isArray(e) ? e[0] : e;
                        n = t.inlineSize, o = t.blockSize
                    } else n = e.offsetWidth, o = e.offsetHeight;
                    r({
                        width: n,
                        height: o
                    })
                });
                return t.observe(e, {
                    box: "border-box"
                }), () => t.unobserve(e)
            }
            r(void 0)
        }, [e]), t
    }(0, Object.defineProperty)(eO, "name", {
        value: "useSize",
        configurable: !0
    });
    var eI = Object.defineProperty,
        eD = (e, t) => eI(e, "name", {
            value: t,
            configurable: !0
        }),
        eM = "Popper",
        [eH, eN] = (0, eT.createContextScope)(eM),
        [eF, e_] = eH(eM),
        eB = eD(e => {
            let {
                __scopePopper: t,
                children: r
            } = e, [o, i] = n.useState(null), [l, a] = n.useState(void 0);
            return (0, ex.jsx)(eF, {
                scope: t,
                anchor: o,
                onAnchorChange: i,
                placementState: l,
                setPlacementState: a,
                children: r
            })
        }, "Popper"),
        eW = n.forwardRef(eD(function(e, t) {
            let {
                __scopePopper: r,
                virtualRef: o,
                ...i
            } = e, l = e_("PopperAnchor", r), a = n.useRef(null), s = l.onAnchorChange, c = ek(t, n.useCallback(e => {
                a.current = e, e && s(e)
            }, [s])), u = n.useRef(null);
            n.useEffect(() => {
                if (!o) return;
                let e = u.current;
                u.current = o.current, e !== u.current && s(u.current)
            });
            let d = l.placementState && eq(l.placementState),
                f = d ? .[0],
                p = d ? .[1];
            return o ? null : (0, ex.jsx)(ew.Primitive.div, {
                "data-radix-popper-side": f,
                "data-radix-popper-align": p,
                ...i,
                ref: c
            })
        }, "PopperAnchor")),
        eV = "PopperContent",
        [ez, eU] = eH(eV),
        e$ = n.forwardRef(eD(function(e, t) {
            var r, l, s, c, S, E, C, R, A, O, M, H, N, F, _, B, W, V, z, U, $;
            let K, Y, X, G, Z, J, {
                    __scopePopper: ee,
                    side: et = "bottom",
                    sideOffset: en = 0,
                    align: eo = "center",
                    alignOffset: ei = 0,
                    arrowPadding: el = 0,
                    avoidCollisions: ea = !0,
                    collisionBoundary: es = [],
                    collisionPadding: ec = 0,
                    sticky: eu = "partial",
                    hideWhenDetached: eS = !1,
                    updatePositionStrategy: eE = "optimized",
                    onPlaced: eC,
                    ...eR
                } = e,
                eP = e_(eV, ee),
                [eL, eT] = n.useState(null),
                eI = ek(t, eT),
                [eM, eH] = n.useState(null),
                eN = eO(eM),
                eF = eN ? .width ? ? 0,
                eB = eN ? .height ? ? 0,
                eW = "number" == typeof ec ? ec : {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...ec
                },
                eU = Array.isArray(es) ? es : [es],
                e$ = eU.length > 0,
                eK = {
                    padding: eW,
                    boundary: eU.filter(eX),
                    altBoundary: e$
                },
                {
                    refs: eY,
                    floatingStyles: eZ,
                    placement: eJ,
                    isPositioned: eQ,
                    middlewareData: e0
                } = function(e) {
                    void 0 === e && (e = {});
                    let {
                        placement: t = "bottom",
                        strategy: r = "absolute",
                        middleware: o = [],
                        platform: i,
                        elements: {
                            reference: l,
                            floating: a
                        } = {},
                        transform: s = !0,
                        whileElementsMounted: c,
                        open: u
                    } = e, [d, f] = n.useState({
                        x: 0,
                        y: 0,
                        strategy: r,
                        placement: t,
                        middlewareData: {},
                        isPositioned: !1
                    }), [p, m] = n.useState(o);
                    ev(p, o) || m(o);
                    let [h, v] = n.useState(null), [g, y] = n.useState(null), b = n.useCallback(e => {
                        e !== E.current && (E.current = e, v(e))
                    }, []), w = n.useCallback(e => {
                        e !== C.current && (C.current = e, y(e))
                    }, []), x = l || h, S = a || g, E = n.useRef(null), C = n.useRef(null), R = n.useRef(d), L = null != c, k = eb(c), T = eb(i), j = eb(u), A = n.useCallback(() => {
                        var e, n;
                        let o, i, l;
                        if (!E.current || !C.current) return;
                        let a = {
                            placement: t,
                            strategy: r,
                            middleware: p
                        };
                        T.current && (a.platform = T.current), (e = E.current, n = C.current, o = new Map, i = null != a ? a : {}, l = { ...ed,
                            ...i.platform,
                            _c: o
                        }, P(e, n, { ...i,
                            platform: l
                        })).then(e => {
                            let t = { ...e,
                                isPositioned: !1 !== j.current
                            };
                            O.current && !ev(R.current, t) && (R.current = t, em.flushSync(() => {
                                f(t)
                            }))
                        })
                    }, [p, t, r, T, j]);
                    eh(() => {
                        !1 === u && R.current.isPositioned && (R.current.isPositioned = !1, f(e => ({ ...e,
                            isPositioned: !1
                        })))
                    }, [u]);
                    let O = n.useRef(!1);
                    eh(() => (O.current = !0, () => {
                        O.current = !1
                    }), []), eh(() => {
                        if (x && (E.current = x), S && (C.current = S), x && S) {
                            if (k.current) return k.current(x, S, A);
                            A()
                        }
                    }, [x, S, A, k, L]);
                    let I = n.useMemo(() => ({
                            reference: E,
                            floating: C,
                            setReference: b,
                            setFloating: w
                        }), [b, w]),
                        D = n.useMemo(() => ({
                            reference: x,
                            floating: S
                        }), [x, S]),
                        M = n.useMemo(() => {
                            let e = {
                                position: r,
                                left: 0,
                                top: 0
                            };
                            if (!D.floating) return e;
                            let t = ey(D.floating, d.x),
                                n = ey(D.floating, d.y);
                            return s ? { ...e,
                                transform: "translate(" + t + "px, " + n + "px)",
                                ...eg(D.floating) >= 1.5 && {
                                    willChange: "transform"
                                }
                            } : {
                                position: r,
                                left: t,
                                top: n
                            }
                        }, [r, s, D.floating, d.x, d.y]);
                    return n.useMemo(() => ({ ...d,
                        update: A,
                        refs: I,
                        elements: D,
                        floatingStyles: M
                    }), [d, A, I, D, M])
                }({
                    strategy: "fixed",
                    placement: et + ("center" !== eo ? "-" + eo : ""),
                    whileElementsMounted: eD((...e) => (function(e, t, n, r) {
                        let l;
                        void 0 === r && (r = {});
                        let {
                            ancestorScroll: s = !0,
                            ancestorResize: c = !0,
                            elementResize: u = "function" == typeof ResizeObserver,
                            layoutShift: d = "function" == typeof IntersectionObserver,
                            animationFrame: f = !1
                        } = r, p = Q(e), m = s || c ? [...p ? q(p) : [], ...t ? q(t) : []] : [];
                        m.forEach(e => {
                            s && e.addEventListener("scroll", n), c && e.addEventListener("resize", n)
                        });
                        let h = p && d ? function(e, t, n) {
                                let r, l = null,
                                    s = D(e);

                                function c() {
                                    var e;
                                    clearTimeout(r), null == (e = l) || e.disconnect(), l = null
                                }

                                function u(n, d) {
                                    void 0 === n && (n = !1), void 0 === d && (d = 1), c();
                                    let f = e.getBoundingClientRect(),
                                        {
                                            left: p,
                                            top: m,
                                            width: h,
                                            height: v
                                        } = f;
                                    if (n || t(), !h || !v) return;
                                    let g = {
                                            rootMargin: -a(m) + "px " + -a(s.clientWidth - (p + h)) + "px " + -a(s.clientHeight - (m + v)) + "px " + -a(p) + "px",
                                            threshold: i(0, o(1, d)) || 1
                                        },
                                        y = !0;

                                    function b(t) {
                                        let n = t[0].intersectionRatio;
                                        if (!ef(f, e.getBoundingClientRect())) return u();
                                        if (n !== d) {
                                            if (!y) return u();
                                            n ? u(!1, n) : r = setTimeout(() => {
                                                u(!1, 1e-7)
                                            }, 1e3)
                                        }
                                        y = !1
                                    }
                                    try {
                                        l = new IntersectionObserver(b, { ...g,
                                            root: s.ownerDocument
                                        })
                                    } catch (e) {
                                        l = new IntersectionObserver(b, g)
                                    }
                                    l.observe(e)
                                }
                                let d = I(e),
                                    f = () => u(n);
                                return d.addEventListener("resize", f), u(!0), () => {
                                    d.removeEventListener("resize", f), c()
                                }
                            }(p, n, c) : null,
                            v = -1,
                            g = null;
                        u && (g = new ResizeObserver(e => {
                            let [r] = e;
                            r && r.target === p && g && t && (g.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
                                var e;
                                null == (e = g) || e.observe(t)
                            })), n()
                        }), p && !f && g.observe(p), t && g.observe(t));
                        let y = f ? er(e) : null;
                        return f && function t() {
                            let r = er(e);
                            y && !ef(y, r) && n(), y = r, l = requestAnimationFrame(t)
                        }(), n(), () => {
                            var e;
                            m.forEach(e => {
                                s && e.removeEventListener("scroll", n), c && e.removeEventListener("resize", n)
                            }), null == h || h(), null == (e = g) || e.disconnect(), g = null, f && cancelAnimationFrame(l)
                        }
                    })(...e, {
                        animationFrame: "always" === eE
                    }), "whileElementsMounted"),
                    elements: {
                        reference: eP.anchor
                    },
                    middleware: [{
                        name: (K = {
                            name: "offset",
                            options: s = r = {
                                mainAxis: en + eB,
                                alignmentAxis: ei
                            },
                            async fn(e) {
                                var t, n;
                                let {
                                    x: r,
                                    y: o,
                                    placement: i,
                                    middlewareData: l
                                } = e, a = await j(e, s);
                                return i === (null == (t = l.offset) ? void 0 : t.placement) && null != (n = l.arrow) && n.alignmentOffset ? {} : {
                                    x: r + a.x,
                                    y: o + a.y,
                                    data: { ...a,
                                        placement: i
                                    }
                                }
                            }
                        }).name,
                        fn: K.fn,
                        options: [r, l]
                    }, ea && {
                        name: (Y = {
                            name: "shift",
                            options: A = C = {
                                mainAxis: !0,
                                crossAxis: !1,
                                limiter: "partial" === eu ? {
                                    fn: (void 0 === (E = c) && (E = {}), {
                                        options: E,
                                        fn(e) {
                                            var t, n, r, o;
                                            let {
                                                x: i,
                                                y: l,
                                                placement: a,
                                                rects: s,
                                                middlewareData: c
                                            } = e, {
                                                offset: f = 0,
                                                mainAxis: m = !0,
                                                crossAxis: v = !0
                                            } = u(E, e), g = {
                                                x: i,
                                                y: l
                                            }, y = h(a), b = p(y), w = g[b], x = g[y], S = u(f, e), C = "number" == typeof S ? {
                                                mainAxis: S,
                                                crossAxis: 0
                                            } : {
                                                mainAxis: null != (t = S.mainAxis) ? t : 0,
                                                crossAxis: null != (n = S.crossAxis) ? n : 0
                                            };
                                            if (m) {
                                                let e = "y" === b ? "height" : "width",
                                                    t = s.reference[b] - s.floating[e] + C.mainAxis,
                                                    n = s.reference[b] + s.reference[e] - C.mainAxis;
                                                w < t ? w = t : w > n && (w = n)
                                            }
                                            if (v) {
                                                let e = "y" === b ? "width" : "height",
                                                    t = T.has(d(a)),
                                                    n = s.reference[y] - s.floating[e] + (t && (null == (r = c.offset) ? void 0 : r[y]) || 0) + (t ? 0 : C.crossAxis),
                                                    i = s.reference[y] + s.reference[e] + (t ? 0 : (null == (o = c.offset) ? void 0 : o[y]) || 0) - (t ? C.crossAxis : 0);
                                                x < n ? x = n : x > i && (x = i)
                                            }
                                            return {
                                                [b]: w,
                                                [y]: x
                                            }
                                        }
                                    }).fn,
                                    options: [c, S]
                                } : void 0,
                                ...eK
                            },
                            async fn(e) {
                                let {
                                    x: t,
                                    y: n,
                                    placement: r,
                                    platform: l
                                } = e, {
                                    mainAxis: a = !0,
                                    crossAxis: s = !1,
                                    limiter: c = {
                                        fn: e => {
                                            let {
                                                x: t,
                                                y: n
                                            } = e;
                                            return {
                                                x: t,
                                                y: n
                                            }
                                        }
                                    },
                                    ...d
                                } = u(A, e), f = {
                                    x: t,
                                    y: n
                                }, m = await l.detectOverflow(e, d), v = h(r), g = p(v), y = f[g], b = f[v], w = (e, t) => i(t + m["y" === e ? "top" : "left"], o(t, t - m["y" === e ? "bottom" : "right"]));
                                a && (y = w(g, y)), s && (b = w(v, b));
                                let x = c.fn({ ...e,
                                    [g]: y,
                                    [v]: b
                                });
                                return { ...x,
                                    data: {
                                        x: x.x - t,
                                        y: x.y - n,
                                        enabled: {
                                            [g]: a,
                                            [v]: s
                                        }
                                    }
                                }
                            }
                        }).name,
                        fn: Y.fn,
                        options: [C, R]
                    }, ea && {
                        name: (X = {
                            name: "flip",
                            options: H = O = { ...eK
                            },
                            async fn(e) {
                                var t, n, r, o, i, l, a, s;
                                let c, S, E, {
                                        placement: C,
                                        middlewareData: R,
                                        rects: P,
                                        initialPlacement: L,
                                        platform: k,
                                        elements: T
                                    } = e,
                                    {
                                        mainAxis: j = !0,
                                        crossAxis: A = !0,
                                        fallbackPlacements: O,
                                        fallbackStrategy: I = "bestFit",
                                        fallbackAxisSideDirection: D = "none",
                                        flipAlignment: M = !0,
                                        ...N
                                    } = u(H, e);
                                if (null != (t = R.arrow) && t.alignmentOffset) return {};
                                let F = d(C),
                                    _ = h(L),
                                    B = d(L) === L,
                                    W = await (null == k.isRTL ? void 0 : k.isRTL(T.floating)),
                                    V = O || (B || !M ? [x(L)] : (c = x(L), [v(L), c, v(c)])),
                                    z = "none" !== D;
                                !O && z && V.push(...(S = f(L), E = function(e, t, n) {
                                    switch (e) {
                                        case "top":
                                        case "bottom":
                                            if (n) return t ? y : g;
                                            return t ? g : y;
                                        case "left":
                                        case "right":
                                            return t ? b : w;
                                        default:
                                            return []
                                    }
                                }(d(L), "start" === D, W), S && (E = E.map(e => e + "-" + S), M && (E = E.concat(E.map(v)))), E));
                                let U = [L, ...V],
                                    $ = await k.detectOverflow(e, N),
                                    K = [],
                                    Y = (null == (n = R.flip) ? void 0 : n.overflows) || [];
                                if (j && K.push($[F]), A) {
                                    let e, t, n, r, o = (l = C, a = P, void 0 === (s = W) && (s = !1), e = f(l), n = m(t = p(h(l))), r = "x" === t ? e === (s ? "end" : "start") ? "right" : "left" : "start" === e ? "bottom" : "top", a.reference[n] > a.floating[n] && (r = x(r)), [r, x(r)]);
                                    K.push($[o[0]], $[o[1]])
                                }
                                if (Y = [...Y, {
                                        placement: C,
                                        overflows: K
                                    }], !K.every(e => e <= 0)) {
                                    let e = ((null == (r = R.flip) ? void 0 : r.index) || 0) + 1,
                                        t = U[e];
                                    if (t && ("alignment" !== A || _ === h(t) || Y.every(e => h(e.placement) !== _ || e.overflows[0] > 0))) return {
                                        data: {
                                            index: e,
                                            overflows: Y
                                        },
                                        reset: {
                                            placement: t
                                        }
                                    };
                                    let n = null == (o = Y.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : o.placement;
                                    if (!n) switch (I) {
                                        case "bestFit":
                                            {
                                                let e = null == (i = Y.filter(e => {
                                                    if (z) {
                                                        let t = h(e.placement);
                                                        return t === _ || "y" === t
                                                    }
                                                    return !0
                                                }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : i[0];e && (n = e);
                                                break
                                            }
                                        case "initialPlacement":
                                            n = L
                                    }
                                    if (C !== n) return {
                                        reset: {
                                            placement: n
                                        }
                                    }
                                }
                                return {}
                            }
                        }).name,
                        fn: X.fn,
                        options: [O, M]
                    }, {
                        name: (G = {
                            name: "size",
                            options: _ = N = { ...eK,
                                apply: eD(({
                                    elements: e,
                                    rects: t,
                                    availableWidth: n,
                                    availableHeight: r
                                }) => {
                                    let {
                                        width: o,
                                        height: i
                                    } = t.reference, l = e.floating.style;
                                    l.setProperty("--radix-popper-available-width", `${n}px`), l.setProperty("--radix-popper-available-height", `${r}px`), l.setProperty("--radix-popper-anchor-width", `${o}px`), l.setProperty("--radix-popper-anchor-height", `${i}px`)
                                }, "apply")
                            },
                            async fn(e) {
                                let t, n, {
                                        placement: r,
                                        rects: l,
                                        platform: a,
                                        elements: s
                                    } = e,
                                    {
                                        apply: c = () => {},
                                        ...p
                                    } = u(_, e),
                                    m = await a.detectOverflow(e, p),
                                    v = d(r),
                                    g = f(r),
                                    y = "y" === h(r),
                                    {
                                        width: b,
                                        height: w
                                    } = l.floating;
                                "top" === v || "bottom" === v ? (t = v, n = g === (await (null == a.isRTL ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (n = v, t = "end" === g ? "top" : "bottom");
                                let x = w - m.top - m.bottom,
                                    S = b - m.left - m.right,
                                    E = o(w - m[t], x),
                                    C = o(b - m[n], S),
                                    R = e.middlewareData.shift,
                                    P = !R,
                                    L = E,
                                    k = C;
                                null != R && R.enabled.x && (k = S), null != R && R.enabled.y && (L = x), P && !g && (y ? k = b - 2 * i(m.left, m.right) : L = w - 2 * i(m.top, m.bottom)), await c({ ...e,
                                    availableWidth: k,
                                    availableHeight: L
                                });
                                let T = await a.getDimensions(s.floating);
                                return b !== T.width || w !== T.height ? {
                                    reset: {
                                        rects: !0
                                    }
                                } : {}
                            }
                        }).name,
                        fn: G.fn,
                        options: [N, F]
                    }, eM && {
                        name: (Z = {
                            name: "arrow",
                            options: V = B = {
                                element: eM,
                                padding: el
                            },
                            fn(e) {
                                let {
                                    element: t,
                                    padding: n
                                } = "function" == typeof V ? V(e) : V;
                                return t && ({}).hasOwnProperty.call(t, "current") ? null != t.current ? ep({
                                    element: t.current,
                                    padding: n
                                }).fn(e) : {} : t ? ep({
                                    element: t,
                                    padding: n
                                }).fn(e) : {}
                            }
                        }).name,
                        fn: Z.fn,
                        options: [B, W]
                    }, eG({
                        arrowWidth: eF,
                        arrowHeight: eB
                    }), eS && {
                        name: (J = {
                            name: "hide",
                            options: $ = z = {
                                strategy: "referenceHidden",
                                ...eK,
                                boundary: e$ ? eK.boundary : void 0
                            },
                            async fn(e) {
                                let {
                                    rects: t,
                                    platform: n
                                } = e, {
                                    strategy: r = "referenceHidden",
                                    ...o
                                } = u($, e);
                                switch (r) {
                                    case "referenceHidden":
                                        {
                                            let r = L(await n.detectOverflow(e, { ...o,
                                                elementContext: "reference"
                                            }), t.reference);
                                            return {
                                                data: {
                                                    referenceHiddenOffsets: r,
                                                    referenceHidden: k(r)
                                                }
                                            }
                                        }
                                    case "escaped":
                                        {
                                            let r = L(await n.detectOverflow(e, { ...o,
                                                altBoundary: !0
                                            }), t.floating);
                                            return {
                                                data: {
                                                    escapedOffsets: r,
                                                    escaped: k(r)
                                                }
                                            }
                                        }
                                    default:
                                        return {}
                                }
                            }
                        }).name,
                        fn: J.fn,
                        options: [z, U]
                    }]
                }),
                e1 = eP.setPlacementState;
            (0, eA.useLayoutEffect)(() => (e1(eJ), () => {
                e1(void 0)
            }), [eJ, e1]);
            let [e2, e4] = eq(eJ), e3 = (0, ej.useCallbackRef)(eC);
            (0, eA.useLayoutEffect)(() => {
                eQ && e3 ? .()
            }, [eQ, e3]);
            let e6 = e0.arrow ? .x,
                e5 = e0.arrow ? .y,
                e8 = e0.arrow ? .centerOffset !== 0,
                [e7, e9] = n.useState();
            return (0, eA.useLayoutEffect)(() => {
                eL && e9(window.getComputedStyle(eL).zIndex)
            }, [eL]), (0, ex.jsx)("div", {
                ref: eY.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: { ...eZ,
                    transform: eQ ? eZ.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: e7,
                    "--radix-popper-transform-origin": [e0.transformOrigin ? .x, e0.transformOrigin ? .y].join(" "),
                    ...e0.hide ? .referenceHidden && {
                        visibility: "hidden",
                        pointerEvents: "none"
                    }
                },
                dir: e.dir,
                children: (0, ex.jsx)(ez, {
                    scope: ee,
                    placedSide: e2,
                    placedAlign: e4,
                    onArrowChange: eH,
                    arrowX: e6,
                    arrowY: e5,
                    shouldHideArrow: e8,
                    children: (0, ex.jsx)(ew.Primitive.div, {
                        "data-side": e2,
                        "data-align": e4,
                        ...eR,
                        ref: eI,
                        style: { ...eR.style,
                            animation: eQ ? eR.style ? .animation : "none"
                        }
                    })
                })
            })
        }, "PopperContent")),
        eK = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
        },
        eY = n.forwardRef(eD(function(e, t) {
            let {
                __scopePopper: n,
                ...r
            } = e, o = eU("PopperArrow", n), i = eK[o.placedSide];
            return (0, ex.jsx)("span", {
                ref: o.onArrowChange,
                style: {
                    position: "absolute",
                    left: o.arrowX,
                    top: o.arrowY,
                    [i]: 0,
                    transformOrigin: {
                        top: "",
                        right: "0 0",
                        bottom: "center 0",
                        left: "100% 0"
                    }[o.placedSide],
                    transform: {
                        top: "translateY(100%)",
                        right: "translateY(50%) rotate(90deg) translateX(-50%)",
                        bottom: "rotate(180deg)",
                        left: "translateY(50%) rotate(-90deg) translateX(50%)"
                    }[o.placedSide],
                    visibility: o.shouldHideArrow ? "hidden" : void 0
                },
                children: (0, ex.jsx)(eE, { ...r,
                    ref: t,
                    style: { ...r.style,
                        display: "block"
                    }
                })
            })
        }, "PopperArrow"));

    function eX(e) {
        return null !== e
    }
    eD(eX, "isNotNull");
    var eG = eD(e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
            let {
                placement: n,
                rects: r,
                middlewareData: o
            } = t, i = o.arrow ? .centerOffset !== 0, l = i ? 0 : e.arrowWidth, a = i ? 0 : e.arrowHeight, [s, c] = eq(n), u = {
                start: "0%",
                center: "50%",
                end: "100%"
            }[c], d = (o.arrow ? .x ? ? 0) + l / 2, f = (o.arrow ? .y ? ? 0) + a / 2, p = "", m = "";
            return "bottom" === s ? (p = i ? u : `${d}px`, m = `${-a}px`) : "top" === s ? (p = i ? u : `${d}px`, m = `${r.floating.height+a}px`) : "right" === s ? (p = `${-a}px`, m = i ? u : `${f}px`) : "left" === s && (p = `${r.floating.width+a}px`, m = i ? u : `${f}px`), {
                data: {
                    x: p,
                    y: m
                }
            }
        }
    }), "transformOrigin");

    function eq(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n]
    }
    eD(eq, "getSideAndAlignFromPlacement"), e.s(["Anchor", 0, eW, "Arrow", 0, eY, "Content", 0, e$, "Root", 0, eB, "createPopperScope", 0, eN], 53660)
}, 64383, 99682, 59411, e => {
    "use strict";
    var t = e.i(71645),
        n = e.i(84430),
        r = Object.defineProperty,
        o = (e, t) => r(e, "name", {
            value: t,
            configurable: !0
        });

    function i(e) {
        let r = t.forwardRef((r, o) => {
            let {
                children: i,
                ...l
            } = r, d = null, p = !1, g = [];
            f(i) && "function" == typeof v && (i = v(i._payload)), t.Children.forEach(i, e => {
                if (u(e)) {
                    p = !0;
                    let t = "child" in e.props ? e.props.child : e.props.children;
                    f(t) && "function" == typeof v && (t = v(t._payload)), d = a(e, t), g.push(d ? .props ? .children)
                } else g.push(e)
            }), d ? d = t.cloneElement(d, void 0, g) : !p && 1 === t.Children.count(i) && t.isValidElement(i) && (d = i);
            let y = d ? c(d) : void 0,
                b = (0, n.useComposedRefs)(o, y);
            if (!d) {
                if (i || 0 === i) throw Error(p ? h(e) : m(e));
                return i
            }
            let w = s(l, d.props ? ? {});
            return d.type !== t.Fragment && (w.ref = o ? b : y), t.cloneElement(d, w)
        });
        return r.displayName = `${e}.Slot`, r
    }
    o(i, "createSlot");
    var l = Symbol.for("radix.slottable");
    o(function(e) {
        let t = o(e => "child" in e ? e.children(e.child) : e.children, "Slottable");
        return t.displayName = `${e}.Slottable`, t.__radixId = l, t
    }, "createSlottable");
    var a = o((e, n) => {
        if ("child" in e.props) {
            let n = e.props.child;
            return t.isValidElement(n) ? t.cloneElement(n, void 0, e.props.children(n.props.children)) : null
        }
        return t.isValidElement(n) ? n : null
    }, "getSlottableElementFromSlottable");

    function s(e, t) {
        let n = { ...t
        };
        for (let r in t) {
            let o = e[r],
                i = t[r];
            /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                let t = i(...e);
                return o(...e), t
            } : o && (n[r] = o) : "style" === r ? n[r] = { ...o,
                ...i
            } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
        }
        return { ...e,
            ...n
        }
    }

    function c(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
            n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (n = (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
    }

    function u(e) {
        return t.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === l
    }
    o(s, "mergeProps"), o(c, "getElementRef"), o(u, "isSlottable");
    var d = Symbol.for("react.lazy");

    function f(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === d && "_payload" in e && p(e._payload)
    }

    function p(e) {
        return "object" == typeof e && null !== e && "then" in e
    }
    o(f, "isLazyComponent"), o(p, "isPromiseLike");
    var m = o(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"),
        h = o(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"),
        v = t[" use ".trim().toString()];

    function g(e) {
        let n = t.useRef({
            value: e,
            previous: e
        });
        return t.useMemo(() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous), [e])
    }
    e.s(["createSlot", 0, i], 64383), (0, Object.defineProperty)(g, "name", {
        value: "usePrevious",
        configurable: !0
    }), e.s(["usePrevious", 0, g], 99682), e.i(48425), e.i(43476);
    var y = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    });
    e.s(["VISUALLY_HIDDEN_STYLES", 0, y], 59411)
}, 62870, e => {
    "use strict";
    var t = e.i(43476),
        n = e.i(93698),
        r = e.i(3636),
        o = e.i(58729),
        i = e.i(71645),
        l = e.i(74080),
        a = e.i(70152),
        s = e.i(81140),
        c = e.i(75830),
        u = e.i(84430),
        d = e.i(30030),
        f = e.i(86318),
        p = e.i(26330),
        m = e.i(3536),
        h = e.i(65491),
        v = e.i(10772),
        g = e.i(53660),
        y = e.i(74606),
        b = e.i(96626),
        w = e.i(48425),
        x = e.i(64383),
        S = e.i(30207),
        E = e.i(69340),
        C = e.i(34620),
        R = e.i(99682),
        P = e.i(59411),
        L = e.i(86312),
        k = e.i(85369),
        T = Object.defineProperty,
        j = (e, t) => T(e, "name", {
            value: t,
            configurable: !0
        }),
        A = [" ", "Enter", "ArrowUp", "ArrowDown"],
        O = [" ", "Enter"],
        I = "Select",
        [D, M, H] = (0, c.createCollection)(I),
        [N, F] = (0, d.createContextScope)(I, [H, g.createPopperScope]),
        _ = (0, g.createPopperScope)(),
        [B, W] = N(I),
        [V, z] = N(I);

    function U(e) {
        let {
            __scopeSelect: n,
            children: r,
            open: o,
            defaultOpen: l,
            onOpenChange: a,
            value: s,
            defaultValue: c,
            onValueChange: u,
            dir: d,
            name: p,
            autoComplete: m,
            disabled: h,
            required: y,
            form: b,
            internal_do_not_use_render: w
        } = e, x = _(n), [S, C] = i.useState(null), [R, P] = i.useState(null), [L, k] = i.useState(!1), T = (0, f.useDirection)(d), [A, O] = (0, E.useControllableState)({
            prop: o,
            defaultProp: l ? ? !1,
            onChange: a,
            caller: I
        }), [M, H] = (0, E.useControllableState)({
            prop: s,
            defaultProp: c,
            onChange: u,
            caller: I
        }), N = i.useRef(null), F = i.useRef(M);
        i.useEffect(() => {
            let e = b ? S ? .ownerDocument.getElementById(b) : S ? .form;
            if (e instanceof HTMLFormElement) {
                let t = j(() => H(F.current), "reset");
                return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
            }
        }, [b, S, H]);
        let W = !S || !!b || !!S.closest("form"),
            [z, U] = i.useState(new Set),
            $ = (0, v.useId)(),
            K = Array.from(z).map(e => e.props.value).join(";"),
            Y = i.useCallback(e => {
                U(t => new Set(t).add(e))
            }, []),
            X = i.useCallback(e => {
                U(t => {
                    let n = new Set(t);
                    return n.delete(e), n
                })
            }, []),
            G = {
                required: y,
                trigger: S,
                onTriggerChange: C,
                valueNode: R,
                onValueNodeChange: P,
                valueNodeHasChildren: L,
                onValueNodeHasChildrenChange: k,
                contentId: $,
                value: M,
                onValueChange: H,
                open: A,
                onOpenChange: O,
                dir: T,
                triggerPointerDownPosRef: N,
                disabled: h,
                name: p,
                autoComplete: m,
                form: b,
                nativeOptions: z,
                nativeSelectKey: K,
                isFormControl: W
            };
        return (0, t.jsx)(g.Root, { ...x,
            children: (0, t.jsx)(B, {
                scope: n,
                ...G,
                children: (0, t.jsx)(D.Provider, {
                    scope: n,
                    children: (0, t.jsx)(V, {
                        scope: n,
                        onNativeOptionAdd: Y,
                        onNativeOptionRemove: X,
                        children: ej(w) ? w(G) : r
                    })
                })
            })
        })
    }
    j(U, "SelectProvider");
    var $ = j(e => {
            let {
                __scopeSelect: n,
                children: r,
                ...o
            } = e;
            return (0, t.jsx)(U, {
                __scopeSelect: n,
                ...o,
                internal_do_not_use_render: ({
                    isFormControl: e
                }) => (0, t.jsxs)(t.Fragment, {
                    children: [r, e ? (0, t.jsx)(eT, {
                        __scopeSelect: n
                    }) : null]
                })
            })
        }, "Select"),
        K = i.forwardRef(j(function(e, n) {
            let {
                __scopeSelect: r,
                disabled: o = !1,
                ...l
            } = e, a = _(r), c = W("SelectTrigger", r), d = c.disabled || o, f = (0, u.useComposedRefs)(n, c.onTriggerChange), p = M(r), m = i.useRef("touch"), [h, v, y] = eO(e => {
                let t = p().filter(e => !e.disabled),
                    n = t.find(e => e.value === c.value),
                    r = eI(t, e, n);
                void 0 !== r && c.onValueChange(r.value)
            }), b = j(e => {
                d || (c.onOpenChange(!0), y()), e && (c.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY)
                })
            }, "handleOpen");
            return (0, t.jsx)(g.Anchor, {
                asChild: !0,
                ...a,
                children: (0, t.jsx)(w.Primitive.button, {
                    type: "button",
                    role: "combobox",
                    "aria-controls": c.open ? c.contentId : void 0,
                    "aria-expanded": c.open,
                    "aria-required": c.required,
                    "aria-autocomplete": "none",
                    dir: c.dir,
                    "data-state": c.open ? "open" : "closed",
                    disabled: d,
                    "data-disabled": d ? "" : void 0,
                    "data-placeholder": eA(c.value) ? "" : void 0,
                    ...l,
                    ref: f,
                    onClick: (0, s.composeEventHandlers)(l.onClick, e => {
                        e.currentTarget.focus(), "mouse" !== m.current && b(e)
                    }),
                    onPointerDown: (0, s.composeEventHandlers)(l.onPointerDown, e => {
                        m.current = e.pointerType;
                        let t = e.target;
                        t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (b(e), e.preventDefault())
                    }),
                    onKeyDown: (0, s.composeEventHandlers)(l.onKeyDown, e => {
                        let t = "" !== h.current;
                        e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || v(e.key), (!t || " " !== e.key) && A.includes(e.key) && (b(), e.preventDefault())
                    })
                })
            })
        }, "SelectTrigger")),
        Y = i.forwardRef(j(function(e, n) {
            let {
                __scopeSelect: r,
                className: o,
                style: l,
                children: a,
                placeholder: s = "",
                ...c
            } = e, d = W("SelectValue", r), {
                onValueNodeHasChildrenChange: f
            } = d, p = void 0 !== a, m = (0, u.useComposedRefs)(n, d.onValueNodeChange);
            (0, C.useLayoutEffect)(() => {
                f(p)
            }, [f, p]);
            let h = eA(d.value);
            return (0, t.jsx)(w.Primitive.span, { ...c,
                asChild: !h && c.asChild,
                ref: m,
                style: {
                    pointerEvents: "none"
                },
                children: (0, t.jsx)(i.Fragment, {
                    children: h ? s : a
                }, h ? "placeholder" : "value")
            })
        }, "SelectValue")),
        X = i.forwardRef(j(function(e, n) {
            let {
                __scopeSelect: r,
                children: o,
                ...i
            } = e;
            return (0, t.jsx)(w.Primitive.span, {
                "aria-hidden": !0,
                ...i,
                ref: n,
                children: o || "▼"
            })
        }, "SelectIcon")),
        [G, q] = N("SelectPortal", {
            forceMount: void 0
        }),
        Z = j(e => {
            let {
                __scopeSelect: n,
                forceMount: r,
                ...o
            } = e;
            return (0, t.jsx)(G, {
                scope: e.__scopeSelect,
                forceMount: r,
                children: (0, t.jsx)(y.Portal, {
                    asChild: !0,
                    ...o
                })
            })
        }, "SelectPortal"),
        J = "SelectContent",
        Q = i.forwardRef(j(function(e, n) {
            let r = q(J, e.__scopeSelect),
                {
                    forceMount: o = r.forceMount,
                    ...l
                } = e,
                a = W(J, e.__scopeSelect),
                [s, c] = i.useState();
            return (0, C.useLayoutEffect)(() => {
                c(new DocumentFragment)
            }, []), (0, t.jsx)(b.Presence, {
                present: o || a.open,
                children: ({
                    present: e
                }) => e ? (0, t.jsx)(eo, { ...l,
                    ref: n
                }) : (0, t.jsx)(ee, { ...l,
                    fragment: s
                })
            })
        }, "SelectContent")),
        ee = i.forwardRef(j(function(e, n) {
            let {
                __scopeSelect: r,
                children: o,
                fragment: i
            } = e;
            return i ? l.createPortal((0, t.jsx)(et, {
                scope: r,
                children: (0, t.jsx)(D.Slot, {
                    scope: r,
                    children: (0, t.jsx)("div", {
                        ref: n,
                        children: o
                    })
                })
            }), i) : null
        }, "SelectContentFragment")),
        [et, en] = N(J),
        er = (0, x.createSlot)("SelectContent.RemoveScroll"),
        eo = i.forwardRef(j(function(e, n) {
            let {
                __scopeSelect: r
            } = e, {
                position: o = "item-aligned",
                onCloseAutoFocus: l,
                onEscapeKeyDown: a,
                onPointerDownOutside: c,
                side: d,
                sideOffset: f,
                align: v,
                alignOffset: g,
                arrowPadding: y,
                collisionBoundary: b,
                collisionPadding: w,
                sticky: x,
                hideWhenDetached: S,
                avoidCollisions: E,
                ...C
            } = e, R = W(J, r), [P, T] = i.useState(null), [A, O] = i.useState(null), I = (0, u.useComposedRefs)(n, T), [D, H] = i.useState(null), [N, F] = i.useState(null), _ = M(r), [B, V] = i.useState(!1), z = i.useRef(!1);
            i.useEffect(() => {
                if (P) return (0, L.hideOthers)(P)
            }, [P]), (0, m.useFocusGuards)();
            let U = i.useCallback(e => {
                    let [t, ...n] = _().map(e => e.ref.current), [r] = n.slice(-1), o = document.activeElement;
                    for (let n of e)
                        if (n === o || (n ? .scrollIntoView({
                                block: "nearest"
                            }), n === t && A && (A.scrollTop = 0), n === r && A && (A.scrollTop = A.scrollHeight), n ? .focus(), document.activeElement !== o)) return
                }, [_, A]),
                $ = i.useCallback(() => U([D, P]), [U, D, P]);
            i.useEffect(() => {
                B && $()
            }, [B, $]);
            let {
                onOpenChange: K,
                triggerPointerDownPosRef: Y
            } = R;
            i.useEffect(() => {
                if (P) {
                    let e = {
                            x: 0,
                            y: 0
                        },
                        t = j(t => {
                            e = {
                                x: Math.abs(Math.round(t.pageX) - (Y.current ? .x ? ? 0)),
                                y: Math.abs(Math.round(t.pageY) - (Y.current ? .y ? ? 0))
                            }
                        }, "handlePointerMove"),
                        n = j(n => {
                            e.x <= 10 && e.y <= 10 ? n.preventDefault() : n.composedPath().includes(P) || K(!1), document.removeEventListener("pointermove", t), Y.current = null
                        }, "handlePointerUp");
                    return null !== Y.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                        capture: !0,
                        once: !0
                    })), () => {
                        document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                            capture: !0
                        })
                    }
                }
            }, [P, K, Y]), i.useEffect(() => {
                let e = j(() => K(!1), "close");
                return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
                    window.removeEventListener("blur", e), window.removeEventListener("resize", e)
                }
            }, [K]);
            let [X, G] = eO(e => {
                let t = _().filter(e => !e.disabled),
                    n = t.find(e => e.ref.current === document.activeElement),
                    r = eI(t, e, n);
                r && setTimeout(() => r.ref.current ? .focus())
            }), q = i.useCallback((e, t, n) => {
                let r = !z.current && !n;
                (void 0 !== R.value && R.value === t || r) && (H(e), r && (z.current = !0))
            }, [R.value]), Z = i.useCallback(() => P ? .focus(), [P]), Q = i.useCallback((e, t, n) => {
                let r = !z.current && !n;
                (void 0 !== R.value && R.value === t || r) && F(e)
            }, [R.value]), ee = "popper" === o ? el : ei;
            return (0, t.jsx)(et, {
                scope: r,
                content: P,
                viewport: A,
                onViewportChange: O,
                itemRefCallback: q,
                selectedItem: D,
                onItemLeave: Z,
                itemTextRefCallback: Q,
                focusSelectedItem: $,
                selectedItemText: N,
                position: o,
                isPositioned: B,
                searchRef: X,
                children: (0, t.jsx)(k.RemoveScroll, {
                    as: er,
                    allowPinchZoom: !0,
                    children: (0, t.jsx)(h.FocusScope, {
                        asChild: !0,
                        trapped: R.open,
                        onMountAutoFocus: e => {
                            e.preventDefault()
                        },
                        onUnmountAutoFocus: (0, s.composeEventHandlers)(l, e => {
                            R.trigger ? .focus({
                                preventScroll: !0
                            }), e.preventDefault()
                        }),
                        children: (0, t.jsx)(p.DismissableLayer, {
                            asChild: !0,
                            disableOutsidePointerEvents: !0,
                            onEscapeKeyDown: a,
                            onPointerDownOutside: c,
                            onFocusOutside: e => e.preventDefault(),
                            onDismiss: () => R.onOpenChange(!1),
                            children: (0, t.jsx)(ee, {
                                role: "listbox",
                                id: R.contentId,
                                "data-state": R.open ? "open" : "closed",
                                dir: R.dir,
                                onContextMenu: e => e.preventDefault(),
                                ...C,
                                ...ee === el ? {
                                    side: d,
                                    sideOffset: f,
                                    align: v,
                                    alignOffset: g,
                                    arrowPadding: y,
                                    collisionBoundary: b,
                                    collisionPadding: w,
                                    sticky: x,
                                    hideWhenDetached: S,
                                    avoidCollisions: E
                                } : {},
                                onPlaced: () => V(!0),
                                ref: I,
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    outline: "none",
                                    ...C.style
                                },
                                onKeyDown: (0, s.composeEventHandlers)(C.onKeyDown, e => {
                                    let t = e.ctrlKey || e.altKey || e.metaKey;
                                    if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || G(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                                        let t = _().filter(e => !e.disabled).map(e => e.ref.current);
                                        if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                                            let n = e.target,
                                                r = t.indexOf(n);
                                            t = t.slice(r + 1)
                                        }
                                        setTimeout(() => U(t)), e.preventDefault()
                                    }
                                })
                            })
                        })
                    })
                })
            })
        }, "SelectContentImpl")),
        ei = i.forwardRef(j(function(e, n) {
            let {
                __scopeSelect: r,
                onPlaced: o,
                ...l
            } = e, s = W(J, r), c = en(J, r), [d, f] = i.useState(null), [p, m] = i.useState(null), h = (0, u.useComposedRefs)(n, m), v = M(r), g = i.useRef(!1), y = i.useRef(!0), {
                viewport: b,
                selectedItem: x,
                selectedItemText: S,
                focusSelectedItem: E
            } = c, R = i.useCallback(() => {
                if (s.trigger && s.valueNode && d && p && b && x && S) {
                    let e = s.trigger.getBoundingClientRect(),
                        t = p.getBoundingClientRect(),
                        n = s.valueNode.getBoundingClientRect(),
                        r = S.getBoundingClientRect();
                    if ("rtl" !== s.dir) {
                        let o = r.left - t.left,
                            i = n.left - o,
                            l = e.left - i,
                            s = e.width + l,
                            c = Math.max(s, t.width),
                            u = window.innerWidth - 10,
                            f = (0, a.clamp)(i, [10, Math.max(10, u - c)]);
                        d.style.minWidth = s + "px", d.style.left = f + "px"
                    } else {
                        let o = t.right - r.right,
                            i = window.innerWidth - n.right - o,
                            l = window.innerWidth - e.right - i,
                            s = e.width + l,
                            c = Math.max(s, t.width),
                            u = window.innerWidth - 10,
                            f = (0, a.clamp)(i, [10, Math.max(10, u - c)]);
                        d.style.minWidth = s + "px", d.style.right = f + "px"
                    }
                    let i = v(),
                        l = window.innerHeight - 20,
                        c = b.scrollHeight,
                        u = window.getComputedStyle(p),
                        f = parseInt(u.borderTopWidth, 10),
                        m = parseInt(u.paddingTop, 10),
                        h = parseInt(u.borderBottomWidth, 10),
                        y = f + m + c + parseInt(u.paddingBottom, 10) + h,
                        w = Math.min(5 * x.offsetHeight, y),
                        E = window.getComputedStyle(b),
                        C = parseInt(E.paddingTop, 10),
                        R = parseInt(E.paddingBottom, 10),
                        P = e.top + e.height / 2 - 10,
                        L = x.offsetHeight / 2,
                        k = f + m + (x.offsetTop + L);
                    if (k <= P) {
                        let e = i.length > 0 && x === i[i.length - 1].ref.current;
                        d.style.bottom = "0px";
                        let t = Math.max(l - P, L + (e ? R : 0) + (p.clientHeight - b.offsetTop - b.offsetHeight) + h);
                        d.style.height = k + t + "px"
                    } else {
                        let e = i.length > 0 && x === i[0].ref.current;
                        d.style.top = "0px";
                        let t = Math.max(P, f + b.offsetTop + (e ? C : 0) + L);
                        d.style.height = t + (y - k) + "px", b.scrollTop = k - P + b.offsetTop
                    }
                    d.style.margin = "10px 0", d.style.minHeight = w + "px", d.style.maxHeight = l + "px", o ? .(), requestAnimationFrame(() => g.current = !0)
                }
            }, [v, s.trigger, s.valueNode, d, p, b, x, S, s.dir, o]);
            (0, C.useLayoutEffect)(() => R(), [R]);
            let [P, L] = i.useState();
            (0, C.useLayoutEffect)(() => {
                p && L(window.getComputedStyle(p).zIndex)
            }, [p]);
            let k = i.useCallback(e => {
                e && !0 === y.current && (R(), E ? .(), y.current = !1)
            }, [R, E]);
            return (0, t.jsx)(ea, {
                scope: r,
                contentWrapper: d,
                shouldExpandOnScrollRef: g,
                onScrollButtonChange: k,
                children: (0, t.jsx)("div", {
                    ref: f,
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        position: "fixed",
                        zIndex: P
                    },
                    children: (0, t.jsx)(w.Primitive.div, { ...l,
                        ref: h,
                        style: {
                            boxSizing: "border-box",
                            maxHeight: "100%",
                            ...l.style
                        }
                    })
                })
            })
        }, "SelectItemAlignedPosition")),
        el = i.forwardRef(j(function(e, n) {
            let {
                __scopeSelect: r,
                align: o = "start",
                collisionPadding: i = 10,
                ...l
            } = e, a = _(r);
            return (0, t.jsx)(g.Content, { ...a,
                ...l,
                ref: n,
                align: o,
                collisionPadding: i,
                style: {
                    boxSizing: "border-box",
                    ...l.style,
                    "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
                }
            })
        }, "SelectPopperPosition")),
        [ea, es] = N(J, {}),
        ec = "SelectViewport",
        eu = i.forwardRef(j(function(e, n) {
            let {
                __scopeSelect: r,
                nonce: o,
                ...l
            } = e, a = en(ec, r), c = es(ec, r), d = (0, u.useComposedRefs)(n, a.onViewportChange), f = i.useRef(0);
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                    },
                    nonce: o
                }), (0, t.jsx)(D.Slot, {
                    scope: r,
                    children: (0, t.jsx)(w.Primitive.div, {
                        "data-radix-select-viewport": "",
                        role: "presentation",
                        ...l,
                        ref: d,
                        style: {
                            position: "relative",
                            flex: 1,
                            overflow: "hidden auto",
                            ...l.style
                        },
                        onScroll: (0, s.composeEventHandlers)(l.onScroll, e => {
                            let t = e.currentTarget,
                                {
                                    contentWrapper: n,
                                    shouldExpandOnScrollRef: r
                                } = c;
                            if (r ? .current && n) {
                                let e = Math.abs(f.current - t.scrollTop);
                                if (e > 0) {
                                    let r = window.innerHeight - 20,
                                        o = Math.max(parseFloat(n.style.minHeight), parseFloat(n.style.height));
                                    if (o < r) {
                                        let i = o + e,
                                            l = Math.min(r, i),
                                            a = i - l;
                                        n.style.height = l + "px", "0px" === n.style.bottom && (t.scrollTop = a > 0 ? a : 0, n.style.justifyContent = "flex-end")
                                    }
                                }
                            }
                            f.current = t.scrollTop
                        })
                    })
                })]
            })
        }, "SelectViewport")),
        [ed, ef] = N("SelectGroup"),
        ep = i.forwardRef(j(function(e, n) {
            let {
                __scopeSelect: r,
                ...o
            } = e, i = (0, v.useId)();
            return (0, t.jsx)(ed, {
                scope: r,
                id: i,
                children: (0, t.jsx)(w.Primitive.div, {
                    role: "group",
                    "aria-labelledby": i,
                    ...o,
                    ref: n
                })
            })
        }, "SelectGroup")),
        em = i.forwardRef(j(function(e, n) {
            let {
                __scopeSelect: r,
                ...o
            } = e, i = ef("SelectLabel", r);
            return (0, t.jsx)(w.Primitive.div, {
                id: i.id,
                ...o,
                ref: n
            })
        }, "SelectLabel")),
        eh = "SelectItem",
        [ev, eg] = N(eh),
        ey = i.forwardRef(j(function(e, n) {
            let {
                __scopeSelect: r,
                value: o,
                disabled: l = !1,
                textValue: a,
                ...c
            } = e, d = W(eh, r), f = en(eh, r), p = d.value === o, [m, h] = i.useState(a ? ? ""), [g, y] = i.useState(!1), b = (0, S.useCallbackRef)(e => f.itemRefCallback ? .(e, o, l)), x = (0, u.useComposedRefs)(n, b), E = (0, v.useId)(), C = i.useRef("touch"), R = j(() => {
                l || (d.onValueChange(o), d.onOpenChange(!1))
            }, "handleSelect");
            return (0, t.jsx)(ev, {
                scope: r,
                value: o,
                disabled: l,
                textId: E,
                isSelected: p,
                onItemTextChange: i.useCallback(e => {
                    h(t => t || (e ? .textContent ? ? "").trim())
                }, []),
                children: (0, t.jsx)(D.ItemSlot, {
                    scope: r,
                    value: o,
                    disabled: l,
                    textValue: m,
                    children: (0, t.jsx)(w.Primitive.div, {
                        role: "option",
                        "aria-labelledby": E,
                        "data-highlighted": g ? "" : void 0,
                        "aria-selected": p && g,
                        "data-state": p ? "checked" : "unchecked",
                        "aria-disabled": l || void 0,
                        "data-disabled": l ? "" : void 0,
                        tabIndex: l ? void 0 : -1,
                        ...c,
                        ref: x,
                        onFocus: (0, s.composeEventHandlers)(c.onFocus, () => y(!0)),
                        onBlur: (0, s.composeEventHandlers)(c.onBlur, () => y(!1)),
                        onClick: (0, s.composeEventHandlers)(c.onClick, () => {
                            "mouse" !== C.current && R()
                        }),
                        onPointerUp: (0, s.composeEventHandlers)(c.onPointerUp, () => {
                            "mouse" === C.current && R()
                        }),
                        onPointerDown: (0, s.composeEventHandlers)(c.onPointerDown, e => {
                            C.current = e.pointerType
                        }),
                        onPointerMove: (0, s.composeEventHandlers)(c.onPointerMove, e => {
                            C.current = e.pointerType, l ? f.onItemLeave ? .() : "mouse" === C.current && e.currentTarget.focus({
                                preventScroll: !0
                            })
                        }),
                        onPointerLeave: (0, s.composeEventHandlers)(c.onPointerLeave, e => {
                            e.currentTarget === document.activeElement && f.onItemLeave ? .()
                        }),
                        onKeyDown: (0, s.composeEventHandlers)(c.onKeyDown, e => {
                            l || e.target !== e.currentTarget || (f.searchRef ? .current === "" || " " !== e.key) && (O.includes(e.key) && R(), " " === e.key && e.preventDefault())
                        })
                    })
                })
            })
        }, "SelectItem")),
        eb = "SelectItemText",
        ew = i.forwardRef(j(function(e, n) {
            let {
                __scopeSelect: r,
                className: o,
                style: a,
                ...s
            } = e, c = W(eb, r), d = en(eb, r), f = eg(eb, r), p = z(eb, r), [m, h] = i.useState(null), v = (0, S.useCallbackRef)(e => d.itemTextRefCallback ? .(e, f.value, f.disabled)), g = (0, u.useComposedRefs)(n, h, f.onItemTextChange, v), y = m ? .textContent, b = i.useMemo(() => (0, t.jsx)("option", {
                value: f.value,
                disabled: f.disabled,
                children: y
            }, f.value), [f.disabled, f.value, y]), {
                onNativeOptionAdd: x,
                onNativeOptionRemove: E
            } = p;
            return (0, C.useLayoutEffect)(() => (x(b), () => E(b)), [x, E, b]), (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(w.Primitive.span, {
                    id: f.textId,
                    ...s,
                    ref: g
                }), f.isSelected && c.valueNode && !c.valueNodeHasChildren && !eA(c.value) ? l.createPortal(s.children, c.valueNode) : null]
            })
        }, "SelectItemText")),
        ex = i.forwardRef(j(function(e, n) {
            let {
                __scopeSelect: r,
                ...o
            } = e;
            return eg("SelectItemIndicator", r).isSelected ? (0, t.jsx)(w.Primitive.span, {
                "aria-hidden": !0,
                ...o,
                ref: n
            }) : null
        }, "SelectItemIndicator")),
        eS = "SelectScrollUpButton",
        eE = i.forwardRef(j(function(e, n) {
            let r = en(eS, e.__scopeSelect),
                o = es(eS, e.__scopeSelect),
                [l, a] = i.useState(!1),
                s = (0, u.useComposedRefs)(n, o.onScrollButtonChange);
            return (0, C.useLayoutEffect)(() => {
                if (r.viewport && r.isPositioned) {
                    let e = function() {
                        a(t.scrollTop > 0)
                    };
                    j(e, "handleScroll");
                    let t = r.viewport;
                    return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                }
            }, [r.viewport, r.isPositioned]), l ? (0, t.jsx)(eP, { ...e,
                ref: s,
                onAutoScroll: () => {
                    let {
                        viewport: e,
                        selectedItem: t
                    } = r;
                    e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
                }
            }) : null
        }, "SelectScrollUpButton")),
        eC = "SelectScrollDownButton",
        eR = i.forwardRef(j(function(e, n) {
            let r = en(eC, e.__scopeSelect),
                o = es(eC, e.__scopeSelect),
                [l, a] = i.useState(!1),
                s = (0, u.useComposedRefs)(n, o.onScrollButtonChange);
            return (0, C.useLayoutEffect)(() => {
                if (r.viewport && r.isPositioned) {
                    let e = function() {
                        let e = t.scrollHeight - t.clientHeight;
                        a(Math.ceil(t.scrollTop) < e)
                    };
                    j(e, "handleScroll");
                    let t = r.viewport;
                    return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                }
            }, [r.viewport, r.isPositioned]), l ? (0, t.jsx)(eP, { ...e,
                ref: s,
                onAutoScroll: () => {
                    let {
                        viewport: e,
                        selectedItem: t
                    } = r;
                    e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
                }
            }) : null
        }, "SelectScrollDownButton")),
        eP = i.forwardRef(j(function(e, n) {
            let {
                __scopeSelect: r,
                onAutoScroll: o,
                ...l
            } = e, a = en("SelectScrollButton", r), c = i.useRef(null), u = M(r), d = i.useCallback(() => {
                null !== c.current && (window.clearInterval(c.current), c.current = null)
            }, []);
            return i.useEffect(() => () => d(), [d]), (0, C.useLayoutEffect)(() => {
                let e = u().find(e => e.ref.current === document.activeElement);
                e?.ref.current?.scrollIntoView({
                    block: "nearest"
                })
            }, [u]), (0, t.jsx)(w.Primitive.div, {
                "aria-hidden": !0,
                ...l,
                ref: n,
                style: {
                    flexShrink: 0,
                    ...l.style
                },
                onPointerDown: (0, s.composeEventHandlers)(l.onPointerDown, () => {
                    null === c.current && (c.current = window.setInterval(o, 50))
                }),
                onPointerMove: (0, s.composeEventHandlers)(l.onPointerMove, () => {
                    a.onItemLeave ? .(), null === c.current && (c.current = window.setInterval(o, 50))
                }),
                onPointerLeave: (0, s.composeEventHandlers)(l.onPointerLeave, () => {
                    d()
                })
            })
        }, "SelectScrollButtonImpl")),
        eL = i.forwardRef(j(function(e, n) {
            let {
                __scopeSelect: r,
                ...o
            } = e;
            return (0, t.jsx)(w.Primitive.div, {
                "aria-hidden": !0,
                ...o,
                ref: n
            })
        }, "SelectSeparator")),
        ek = i.forwardRef(j(function(e, n) {
            let {
                __scopeSelect: r,
                ...o
            } = e, i = _(r);
            return "popper" === en("SelectArrow", r).position ? (0, t.jsx)(g.Arrow, { ...i,
                ...o,
                ref: n
            }) : null
        }, "SelectArrow")),
        eT = i.forwardRef(j(function({
            __scopeSelect: e,
            ...n
        }, r) {
            let o = W("SelectBubbleInput", e),
                {
                    value: l,
                    onValueChange: a,
                    required: s,
                    disabled: c,
                    name: d,
                    autoComplete: f,
                    form: p
                } = o,
                {
                    nativeOptions: m,
                    nativeSelectKey: h
                } = o,
                v = i.useRef(null),
                g = (0, u.useComposedRefs)(r, v),
                y = l ?? "",
                b = (0, R.usePrevious)(y),
                x = Array.from(m).some(e => (e.props.value ?? "") === "");
            return i.useEffect(() => {
                let e = v.current;
                if (!e) return;
                let t = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value").set;
                if (b !== y && t) {
                    let n = new Event("change", {
                        bubbles: !0
                    });
                    t.call(e, y), e.dispatchEvent(n)
                }
            }, [b, y]), (0, t.jsxs)(w.Primitive.select, {
                "aria-hidden": !0,
                required: s,
                tabIndex: -1,
                name: d,
                autoComplete: f,
                disabled: c,
                form: p,
                onChange: e => a(e.target.value),
                ...n,
                style: { ...P.VISUALLY_HIDDEN_STYLES,
                    ...n.style
                },
                ref: g,
                defaultValue: y,
                children: [eA(l) && !x ? (0, t.jsx)("option", {
                    value: ""
                }) : null, Array.from(m)]
            }, h)
        }, "SelectBubbleInput"));

    function ej(e) {
        return "function" == typeof e
    }

    function eA(e) {
        return "" === e || void 0 === e
    }

    function eO(e) {
        let t = (0, S.useCallbackRef)(e),
            n = i.useRef(""),
            r = i.useRef(0),
            o = i.useCallback(e => {
                t(n.current + e)
            }, [t]),
            l = i.useCallback(() => {
                n.current = "", window.clearTimeout(r.current)
            }, []);
        return i.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, l]
    }

    function eI(e, t, n) {
        let r = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
            o = n ? e.indexOf(n) : -1,
            i = eD(e, Math.max(o, 0));
        1 === r.length && (i = i.filter(e => e !== n));
        let l = i.find(e => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
        return l !== n ? l : void 0
    }

    function eD(e, t) {
        return e.map((n, r) => e[(t + r) % e.length])
    }
    j(ej, "isFunction"), j(eA, "shouldShowPlaceholder"), j(eO, "useTypeaheadSearch"), j(eI, "findNextItem"), j(eD, "wrapArray"), e.s(["Arrow", 0, ek, "Content", 0, Q, "Group", 0, ep, "Icon", 0, X, "Item", 0, ey, "ItemIndicator", 0, ex, "ItemText", 0, ew, "Label", 0, em, "Portal", 0, Z, "Root", 0, $, "ScrollDownButton", 0, eR, "ScrollUpButton", 0, eE, "Select", 0, $, "SelectArrow", 0, ek, "SelectContent", 0, Q, "SelectGroup", 0, ep, "SelectIcon", 0, X, "SelectItem", 0, ey, "SelectItemIndicator", 0, ex, "SelectItemText", 0, ew, "SelectLabel", 0, em, "SelectPortal", 0, Z, "SelectScrollDownButton", 0, eR, "SelectScrollUpButton", 0, eE, "SelectSeparator", 0, eL, "SelectTrigger", 0, K, "SelectValue", 0, Y, "SelectViewport", 0, eu, "Separator", 0, eL, "Trigger", 0, K, "Value", 0, Y, "Viewport", 0, eu, "createSelectScope", 0, F, "unstable_BubbleInput", 0, eT, "unstable_Provider", 0, U, "unstable_SelectBubbleInput", 0, eT, "unstable_SelectProvider", 0, U], 29402);
    var eM = e.i(29402),
        eM = eM,
        eH = e.i(47163);

    function eN({
        className: e,
        ...n
    }) {
        return (0, t.jsx)(eM.ScrollUpButton, {
            "data-slot": "select-scroll-up-button",
            className: (0, eH.cn)("flex cursor-default items-center justify-center py-1", e),
            ...n,
            children: (0, t.jsx)(o.ChevronUpIcon, {
                className: "size-4"
            })
        })
    }

    function eF({
        className: e,
        ...n
    }) {
        return (0, t.jsx)(eM.ScrollDownButton, {
            "data-slot": "select-scroll-down-button",
            className: (0, eH.cn)("flex cursor-default items-center justify-center py-1", e),
            ...n,
            children: (0, t.jsx)(r.ChevronDownIcon, {
                className: "size-4"
            })
        })
    }
    e.s(["Select", 0, function({ ...e
    }) {
        return (0, t.jsx)(eM.Root, {
            "data-slot": "select",
            ...e
        })
    }, "SelectContent", 0, function({
        className: e,
        children: n,
        position: r = "item-aligned",
        align: o = "center",
        ...i
    }) {
        return (0, t.jsx)(eM.Portal, {
            children: (0, t.jsxs)(eM.Content, {
                "data-slot": "select-content",
                className: (0, eH.cn)("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", "popper" === r && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
                position: r,
                align: o,
                ...i,
                children: [(0, t.jsx)(eN, {}), (0, t.jsx)(eM.Viewport, {
                    className: (0, eH.cn)("p-1", "popper" === r && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: n
                }), (0, t.jsx)(eF, {})]
            })
        })
    }, "SelectItem", 0, function({
        className: e,
        children: r,
        ...o
    }) {
        return (0, t.jsxs)(eM.Item, {
            "data-slot": "select-item",
            className: (0, eH.cn)("relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", e),
            ...o,
            children: [(0, t.jsx)("span", {
                "data-slot": "select-item-indicator",
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: (0, t.jsx)(eM.ItemIndicator, {
                    children: (0, t.jsx)(n.CheckIcon, {
                        className: "size-4"
                    })
                })
            }), (0, t.jsx)(eM.ItemText, {
                children: r
            })]
        })
    }, "SelectTrigger", 0, function({
        className: e,
        size: n = "default",
        children: o,
        ...i
    }) {
        return (0, t.jsxs)(eM.Trigger, {
            "data-slot": "select-trigger",
            "data-size": n,
            className: (0, eH.cn)("flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
            ...i,
            children: [o, (0, t.jsx)(eM.Icon, {
                asChild: !0,
                children: (0, t.jsx)(r.ChevronDownIcon, {
                    className: "size-4 opacity-50"
                })
            })]
        })
    }, "SelectValue", 0, function({ ...e
    }) {
        return (0, t.jsx)(eM.Value, {
            "data-slot": "select-value",
            ...e
        })
    }], 62870)
}]);