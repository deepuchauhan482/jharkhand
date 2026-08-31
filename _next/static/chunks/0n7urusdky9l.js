(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 96661, e => {
    "use strict";
    e.s(["mergeClasses", 0, (...e) => e.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim()])
}, 71987, 88973, e => {
    "use strict";
    e.s(["default", 0, {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }], 71987), e.s(["hasA11yProp", 0, e => {
        for (let t in e)
            if (t.startsWith("aria-") || "role" === t || "title" === t) return !0;
        return !1
    }], 88973)
}, 5014, e => {
    "use strict";
    var t = e.i(71645),
        r = e.i(71987),
        n = e.i(88973),
        i = e.i(96661);
    let o = (0, t.createContext)({}),
        l = (0, t.forwardRef)(({
            color: e,
            size: l,
            strokeWidth: s,
            absoluteStrokeWidth: a,
            className: u = "",
            children: c,
            iconNode: f,
            ...d
        }, p) => {
            let {
                size: h = 24,
                strokeWidth: m = 2,
                absoluteStrokeWidth: y = !1,
                color: g = "currentColor",
                className: v = ""
            } = (0, t.useContext)(o) ?? {}, b = a ?? y ? 24 * Number(s ?? m) / Number(l ?? h) : s ?? m;
            return (0, t.createElement)("svg", {
                ref: p,
                ...r.default,
                width: l ?? h ?? r.default.width,
                height: l ?? h ?? r.default.height,
                stroke: e ?? g,
                strokeWidth: b,
                className: (0, i.mergeClasses)("lucide", v, u),
                ...!c && !(0, n.hasA11yProp)(d) && {
                    "aria-hidden": "true"
                },
                ...d
            }, [...f.map(([e, r]) => (0, t.createElement)(e, r)), ...Array.isArray(c) ? c : [c]])
        });
    e.s(["default", 0, l], 5014)
}, 67881, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(25913),
        n = e.i(71645),
        i = Object.defineProperty,
        o = (e, t) => i(e, "name", {
            value: t,
            configurable: !0
        });

    function l(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }

    function s(...e) {
        return t => {
            let r = !1,
                n = e.map(e => {
                    let n = l(e, t);
                    return r || "function" != typeof n || (r = !0), n
                });
            if (r) return () => {
                for (let t = 0; t < n.length; t++) {
                    let r = n[t];
                    "function" == typeof r ? r() : l(e[t], null)
                }
            }
        }
    }

    function a(...e) {
        return n.useCallback(s(...e), e)
    }
    o(l, "setRef"), o(s, "composeRefs"), o(a, "useComposedRefs");
    var u = Object.defineProperty,
        c = (e, t) => u(e, "name", {
            value: t,
            configurable: !0
        });

    function f(e) {
        let t = n.forwardRef((t, r) => {
            let {
                children: i,
                ...o
            } = t, l = null, s = !1, u = [];
            E(i) && "function" == typeof w && (i = w(i._payload)), n.Children.forEach(i, e => {
                if (b(e)) {
                    s = !0;
                    let t = "child" in e.props ? e.props.child : e.props.children;
                    E(t) && "function" == typeof w && (t = w(t._payload)), l = y(e, t), u.push(l ?.props ?.children)
                } else u.push(e)
            }), l ? l = n.cloneElement(l, void 0, u) : !s && 1 === n.Children.count(i) && n.isValidElement(i) && (l = i);
            let c = l ? v(l) : void 0,
                f = a(r, c);
            if (!l) {
                if (i || 0 === i) throw Error(s ? C(e) : R(e));
                return i
            }
            let d = g(o, l.props ?? {});
            return l.type !== n.Fragment && (d.ref = r ? f : c), n.cloneElement(l, d)
        });
        return t.displayName = `${e}.Slot`, t
    }
    c(f, "createSlot");
    var d = f("Slot"),
        p = Symbol.for("radix.slottable");

    function h(e) {
        let t = c(e => "child" in e ? e.children(e.child) : e.children, "Slottable");
        return t.displayName = `${e}.Slottable`, t.__radixId = p, t
    }
    c(h, "createSlottable");
    var m = h("Slottable"),
        y = c((e, t) => {
            if ("child" in e.props) {
                let t = e.props.child;
                return n.isValidElement(t) ? n.cloneElement(t, void 0, e.props.children(t.props.children)) : null
            }
            return n.isValidElement(t) ? t : null
        }, "getSlottableElementFromSlottable");

    function g(e, t) {
        let r = { ...t
        };
        for (let n in t) {
            let i = e[n],
                o = t[n];
            /^on[A-Z]/.test(n) ? i && o ? r[n] = (...e) => {
                let t = o(...e);
                return i(...e), t
            } : i && (r[n] = i) : "style" === n ? r[n] = { ...i,
                ...o
            } : "className" === n && (r[n] = [i, o].filter(Boolean).join(" "))
        }
        return { ...e,
            ...r
        }
    }

    function v(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref") ?.get,
            r = t && "isReactWarning" in t && t.isReactWarning;
        return r ? e.ref : (r = (t = Object.getOwnPropertyDescriptor(e, "ref") ?.get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
    }

    function b(e) {
        return n.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
    }
    c(g, "mergeProps"), c(v, "getElementRef"), c(b, "isSlottable");
    var S = Symbol.for("react.lazy");

    function E(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === S && "_payload" in e && x(e._payload)
    }

    function x(e) {
        return "object" == typeof e && null !== e && "then" in e
    }
    c(E, "isLazyComponent"), c(x, "isPromiseLike");
    var R = c(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"),
        C = c(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"),
        w = n[" use ".trim().toString()];
    e.s(["Root", 0, d, "Slot", 0, d, "Slottable", 0, m, "createSlot", 0, f, "createSlottable", 0, h], 43556);
    var O = e.i(43556),
        O = O,
        k = e.i(47163);
    let N = (0, r.cva)("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
                outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
                sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                icon: "size-9",
                "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
                "icon-sm": "size-8",
                "icon-lg": "size-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    });
    e.s(["Button", 0, function({
        className: e,
        variant: r = "default",
        size: n = "default",
        asChild: i = !1,
        ...o
    }) {
        let l = i ? O.Root : "button";
        return (0, t.jsx)(l, {
            "data-slot": "button",
            "data-variant": r,
            "data-size": n,
            className: (0, k.cn)(N({
                variant: r,
                size: n,
                className: e
            })),
            ...o
        })
    }], 67881)
}, 32781, e => {
    "use strict";
    let t = (0, e.i(56420).default)("loader-circle", [
        ["path", {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }]
    ]);
    e.s(["Loader2", 0, t], 32781)
}, 46387, 23482, 30480, 81140, 30030, e => {
    "use strict";
    var t = e.i(56420);
    let r = (0, t.default)("building-2", [
        ["path", {
            d: "M10 12h4",
            key: "a56b0p"
        }],
        ["path", {
            d: "M10 8h4",
            key: "1sr2af"
        }],
        ["path", {
            d: "M14 21v-3a2 2 0 0 0-4 0v3",
            key: "1rgiei"
        }],
        ["path", {
            d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
            key: "secmi2"
        }],
        ["path", {
            d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",
            key: "16ra0t"
        }]
    ]);
    e.s(["Building2", 0, r], 46387);
    let n = (0, t.default)("graduation-cap", [
        ["path", {
            d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
            key: "j76jl0"
        }],
        ["path", {
            d: "M22 10v6",
            key: "1lu8f3"
        }],
        ["path", {
            d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
            key: "1r8lef"
        }]
    ]);
    e.s(["GraduationCap", 0, n], 23482);
    let i = (0, t.default)("hand-heart", [
        ["path", {
            d: "M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",
            key: "1v1a37"
        }],
        ["path", {
            d: "m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95",
            key: "fhfbnt"
        }],
        ["path", {
            d: "m2 15 6 6",
            key: "10dquu"
        }],
        ["path", {
            d: "m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91",
            key: "1x6kdw"
        }]
    ]);
    e.s(["HandHeart", 0, i], 30480);
    var o = Object.defineProperty,
        l = (e, t) => o(e, "name", {
            value: t,
            configurable: !0
        }),
        s = !!("u" > typeof window && window.document && window.document.createElement);

    function a(e, t, {
        checkForDefaultPrevented: r = !0
    } = {}) {
        return l(function(n) {
            if (e ?.(n), !1 === r || !n || !n.defaultPrevented) return t ?.(n)
        }, "handleEvent")
    }

    function u(e) {
        if (!s) throw Error("Cannot access document outside of the DOM");
        return e ?.ownerDocument ?? document
    }

    function c(e) {
        return "IFRAME" === e.tagName
    }
    l(a, "composeEventHandlers"), l(function(e) {
        if (!s) throw Error("Cannot access window outside of the DOM");
        return e ?.ownerDocument ?.defaultView ?? window
    }, "getOwnerWindow"), l(u, "getOwnerDocument"), l(function e(t, r = !1) {
        let {
            activeElement: n
        } = u(t);
        if (!n ?.nodeName) return null;
        if (c(n) && n.contentDocument) return e(n.contentDocument.body, r);
        if (r) {
            let e = n.getAttribute("aria-activedescendant");
            if (e) {
                let t = u(n).getElementById(e);
                if (t) return t
            }
        }
        return n
    }, "getActiveElement"), l(c, "isFrame"), e.s(["composeEventHandlers", 0, a], 81140);
    var f = e.i(71645),
        d = e.i(43476),
        p = Object.defineProperty,
        h = (e, t) => p(e, "name", {
            value: t,
            configurable: !0
        });

    function m(e, t = []) {
        let r = [];

        function n(t, n) {
            let i = f.createContext(n);
            i.displayName = t + "Context";
            let o = r.length;
            r = [...r, n];
            let l = h(t => {
                let {
                    scope: r,
                    children: n,
                    ...l
                } = t, s = r ?.[e] ?.[o] || i, a = f.useMemo(() => l, Object.values(l));
                return (0, d.jsx)(s.Provider, {
                    value: a,
                    children: n
                })
            }, "Provider");

            function s(r, l, a = {}) {
                let {
                    optional: u = !1
                } = a, c = l ?.[e] ?.[o] || i, d = f.useContext(c);
                if (d) return d;
                if (void 0 !== n) return n;
                if (!u) throw Error(`\`${r}\` must be used within \`${t}\``)
            }
            return l.displayName = t + "Provider", h(s, "useContext"), [l, s]
        }
        h(n, "createContext");
        let i = h(() => {
            let t = r.map(e => f.createContext(e));
            return h(function(r) {
                let n = r ?.[e] || t;
                return f.useMemo(() => ({
                    [`__scope${e}`]: { ...r,
                        [e]: n
                    }
                }), [r, n])
            }, "useScope")
        }, "createScope");
        return i.scopeName = e, [n, y(i, ...t)]
    }

    function y(...e) {
        let t = e[0];
        if (1 === e.length) return t;
        let r = h(() => {
            let r = e.map(e => ({
                useScope: e(),
                scopeName: e.scopeName
            }));
            return h(function(e) {
                let n = r.reduce((t, {
                    useScope: r,
                    scopeName: n
                }) => {
                    let i = r(e)[`__scope${n}`];
                    return { ...t,
                        ...i
                    }
                }, {});
                return f.useMemo(() => ({
                    [`__scope${t.scopeName}`]: n
                }), [n])
            }, "useComposedScopes")
        }, "createScope");
        return r.scopeName = t.scopeName, r
    }
    h(function(e, t) {
        let r = f.createContext(t);
        r.displayName = e + "Context";
        let n = h(e => {
            let {
                children: t,
                ...n
            } = e, i = f.useMemo(() => n, Object.values(n));
            return (0, d.jsx)(r.Provider, {
                value: i,
                children: t
            })
        }, "Provider");

        function i(n, o = {}) {
            let {
                optional: l = !1
            } = o, s = f.useContext(r);
            if (s) return s;
            if (void 0 !== t) return t;
            if (!l) throw Error(`\`${n}\` must be used within \`${e}\``)
        }
        return n.displayName = e + "Provider", h(i, "useContext"), [n, i]
    }, "createContext"), h(m, "createContextScope"), h(y, "composeContextScopes"), e.s(["createContextScope", 0, m], 30030)
}, 10772, 34620, e => {
    "use strict";
    var t = e.i(71645),
        r = globalThis ?.document ? t.useLayoutEffect : () => {};
    e.s(["useLayoutEffect", 0, r], 34620);
    var n = Object.defineProperty,
        i = t[" useId ".trim().toString()] || (() => void 0),
        o = 0;

    function l(e) {
        let [n, l] = t.useState(i());
        return r(() => {
            e || l(e => e ?? String(o++))
        }, [e]), e || (n ? `radix-${n}` : "")
    }
    n(l, "name", {
        value: "useId",
        configurable: !0
    }), e.s(["useId", 0, l], 10772)
}, 69340, e => {
    "use strict";
    var t = e.i(71645),
        r = e.i(34620),
        n = Object.defineProperty,
        i = t[" useEffectEvent ".trim().toString()],
        o = t[" useInsertionEffect ".trim().toString()];

    function l(e) {
        if ("function" == typeof i) return i(e);
        let n = t.useRef(() => {
            throw Error("Cannot call an event handler while rendering.")
        });
        return "function" == typeof o ? o(() => {
            n.current = e
        }) : (0, r.useLayoutEffect)(() => {
            n.current = e
        }), t.useMemo(() => (...e) => n.current ?.(...e), [])
    }
    n(l, "name", {
        value: "useEffectEvent",
        configurable: !0
    });
    var s = Object.defineProperty,
        a = (e, t) => s(e, "name", {
            value: t,
            configurable: !0
        }),
        u = t[" useInsertionEffect ".trim().toString()] || r.useLayoutEffect;

    function c({
        prop: e,
        defaultProp: r,
        onChange: n = a(() => {}, "onChange"),
        caller: i
    }) {
        let [o, l, s] = f({
            defaultProp: r,
            onChange: n
        }), u = void 0 !== e, p = u ? e : o;
        return [p, t.useCallback(t => {
            if (u) {
                let r = d(t) ? t(e) : t;
                r !== e && s.current ?.(r)
            } else l(t)
        }, [u, e, l, s])]
    }

    function f({
        defaultProp: e,
        onChange: r
    }) {
        let [n, i] = t.useState(e), o = t.useRef(n), l = t.useRef(r);
        return u(() => {
            l.current = r
        }, [r]), t.useEffect(() => {
            o.current !== n && (l.current ?.(n), o.current = n)
        }, [n, o]), [n, i, l]
    }

    function d(e) {
        return "function" == typeof e
    }
    a(c, "useControllableState"), a(f, "useUncontrolledState"), a(d, "isFunction");
    var p = Symbol("RADIX:SYNC_STATE");
    a(function(e, r, n, i) {
        let {
            prop: o,
            defaultProp: s,
            onChange: a,
            caller: u
        } = r, c = void 0 !== o, f = l(a), d = [{ ...n,
            state: s
        }];
        i && d.push(i);
        let [h, m] = t.useReducer((t, r) => {
            if (r.type === p) return { ...t,
                state: r.state
            };
            let n = e(t, r);
            return c && !Object.is(n.state, t.state) && f(n.state), n
        }, ...d), y = h.state, g = t.useRef(y);
        t.useEffect(() => {
            g.current !== y && (g.current = y, c || f(y))
        }, [y, g, c]);
        let v = t.useMemo(() => void 0 !== o ? { ...h,
            state: o
        } : h, [h, o]);
        return t.useEffect(() => {
            c && !Object.is(o, h.state) && m({
                type: p,
                state: o
            })
        }, [o, h.state, c]), [v, m]
    }, "useControllableStateReducer"), e.s(["useControllableState", 0, c], 69340)
}, 48425, 30207, e => {
    "use strict";
    var t = e.i(71645),
        r = e.i(74080),
        n = Object.defineProperty,
        i = (e, t) => n(e, "name", {
            value: t,
            configurable: !0
        });

    function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }

    function l(...e) {
        return t => {
            let r = !1,
                n = e.map(e => {
                    let n = o(e, t);
                    return r || "function" != typeof n || (r = !0), n
                });
            if (r) return () => {
                for (let t = 0; t < n.length; t++) {
                    let r = n[t];
                    "function" == typeof r ? r() : o(e[t], null)
                }
            }
        }
    }

    function s(...e) {
        return t.useCallback(l(...e), e)
    }
    i(o, "setRef"), i(l, "composeRefs"), i(s, "useComposedRefs");
    var a = Object.defineProperty,
        u = (e, t) => a(e, "name", {
            value: t,
            configurable: !0
        });

    function c(e) {
        let r = t.forwardRef((r, n) => {
            let {
                children: i,
                ...o
            } = r, l = null, a = !1, u = [];
            g(i) && "function" == typeof E && (i = E(i._payload)), t.Children.forEach(i, e => {
                if (m(e)) {
                    a = !0;
                    let t = "child" in e.props ? e.props.child : e.props.children;
                    g(t) && "function" == typeof E && (t = E(t._payload)), l = d(e, t), u.push(l ?.props ?.children)
                } else u.push(e)
            }), l ? l = t.cloneElement(l, void 0, u) : !a && 1 === t.Children.count(i) && t.isValidElement(i) && (l = i);
            let c = l ? h(l) : void 0,
                f = s(n, c);
            if (!l) {
                if (i || 0 === i) throw Error(a ? S(e) : b(e));
                return i
            }
            let y = p(o, l.props ?? {});
            return l.type !== t.Fragment && (y.ref = n ? f : c), t.cloneElement(l, y)
        });
        return r.displayName = `${e}.Slot`, r
    }
    u(c, "createSlot");
    var f = Symbol.for("radix.slottable");
    u(function(e) {
        let t = u(e => "child" in e ? e.children(e.child) : e.children, "Slottable");
        return t.displayName = `${e}.Slottable`, t.__radixId = f, t
    }, "createSlottable");
    var d = u((e, r) => {
        if ("child" in e.props) {
            let r = e.props.child;
            return t.isValidElement(r) ? t.cloneElement(r, void 0, e.props.children(r.props.children)) : null
        }
        return t.isValidElement(r) ? r : null
    }, "getSlottableElementFromSlottable");

    function p(e, t) {
        let r = { ...t
        };
        for (let n in t) {
            let i = e[n],
                o = t[n];
            /^on[A-Z]/.test(n) ? i && o ? r[n] = (...e) => {
                let t = o(...e);
                return i(...e), t
            } : i && (r[n] = i) : "style" === n ? r[n] = { ...i,
                ...o
            } : "className" === n && (r[n] = [i, o].filter(Boolean).join(" "))
        }
        return { ...e,
            ...r
        }
    }

    function h(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref") ?.get,
            r = t && "isReactWarning" in t && t.isReactWarning;
        return r ? e.ref : (r = (t = Object.getOwnPropertyDescriptor(e, "ref") ?.get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
    }

    function m(e) {
        return t.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === f
    }
    u(p, "mergeProps"), u(h, "getElementRef"), u(m, "isSlottable");
    var y = Symbol.for("react.lazy");

    function g(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === y && "_payload" in e && v(e._payload)
    }

    function v(e) {
        return "object" == typeof e && null !== e && "then" in e
    }
    u(g, "isLazyComponent"), u(v, "isPromiseLike");
    var b = u(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"),
        S = u(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"),
        E = t[" use ".trim().toString()],
        x = e.i(43476),
        R = Object.defineProperty,
        C = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
            let n = c(`Primitive.${r}`),
                i = t.forwardRef((e, t) => {
                    let {
                        asChild: i,
                        ...o
                    } = e;
                    return "u" > typeof window && (window[Symbol.for("radix-ui")] = !0), (0, x.jsx)(i ? n : r, { ...o,
                        ref: t
                    })
                });
            return i.displayName = `Primitive.${r}`, { ...e,
                [r]: i
            }
        }, {});

    function w(e, t) {
        e && r.flushSync(() => e.dispatchEvent(t))
    }

    function O(e) {
        let r = t.useRef(e);
        return t.useEffect(() => {
            r.current = e
        }), t.useMemo(() => (...e) => r.current ?.(...e), [])
    }
    R(w, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
    }), e.s(["Primitive", 0, C, "dispatchDiscreteCustomEvent", 0, w], 48425), (0, Object.defineProperty)(O, "name", {
        value: "useCallbackRef",
        configurable: !0
    }), e.s(["useCallbackRef", 0, O], 30207)
}, 96626, e => {
    "use strict";
    var t = e.i(71645),
        r = e.i(34620),
        n = Object.defineProperty,
        i = (e, t) => n(e, "name", {
            value: t,
            configurable: !0
        });

    function o(e, r) {
        return t.useReducer((e, t) => r[e][t] ?? e, e)
    }
    i(o, "useStateMachine");
    var l = i(e => {
        let {
            present: r,
            children: n
        } = e, i = s(r), o = "function" == typeof n ? n({
            present: i.isPresent
        }) : t.Children.only(n), l = u(i.ref, f(o));
        return "function" == typeof n || i.isPresent ? t.cloneElement(o, {
            ref: l
        }) : null
    }, "Presence");

    function s(e) {
        let [n, l] = t.useState(), s = t.useRef(null), a = t.useRef(e), u = t.useRef("none"), f = t.useRef(void 0), [d, p] = o(e ? "mounted" : "unmounted", {
            mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
            },
            unmounted: {
                MOUNT: "mounted"
            }
        });
        return t.useEffect(() => {
            "mounted" === d ? (u.current = f.current ?? c(s.current), f.current = void 0) : u.current = "none"
        }, [d]), (0, r.useLayoutEffect)(() => {
            let t = s.current,
                r = a.current;
            if (r !== e) {
                let n = u.current,
                    i = c(t);
                e ? (f.current = i, p("MOUNT")) : "none" === i || t ?.display === "none" ? p("UNMOUNT") : r && n !== i ? p("ANIMATION_OUT") : p("UNMOUNT"), a.current = e
            }
        }, [e, p]), (0, r.useLayoutEffect)(() => {
            if (n) {
                let e, t = n.ownerDocument.defaultView ?? window,
                    r = i(r => {
                        let i = c(s.current).includes(CSS.escape(r.animationName));
                        if (r.target === n && i && (p("ANIMATION_END"), !a.current)) {
                            let r = n.style.animationFillMode;
                            n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                                "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                            })
                        }
                    }, "handleAnimationEnd"),
                    o = i(e => {
                        e.target === n && (u.current = c(s.current))
                    }, "handleAnimationStart");
                return n.addEventListener("animationstart", o), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
                    t.clearTimeout(e), n.removeEventListener("animationstart", o), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r)
                }
            }
            p("ANIMATION_END")
        }, [n, p]), {
            isPresent: ["mounted", "unmountSuspended"].includes(d),
            ref: t.useCallback(e => {
                if (e) {
                    let t = getComputedStyle(e);
                    s.current = t, f.current = c(t)
                } else s.current = null;
                l(e)
            }, [])
        }
    }

    function a(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }

    function u(...e) {
        let r = t.useRef(e);
        return r.current = e, t.useCallback(e => {
            let t = r.current,
                n = !1,
                i = t.map(t => {
                    let r = a(t, e);
                    return n || "function" != typeof r || (n = !0), r
                });
            if (n) return () => {
                for (let e = 0; e < i.length; e++) {
                    let r = i[e];
                    "function" == typeof r ? r() : a(t[e], null)
                }
            }
        }, [])
    }

    function c(e) {
        return e ?.animationName || "none"
    }

    function f(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref") ?.get,
            r = t && "isReactWarning" in t && t.isReactWarning;
        return r ? e.ref : (r = (t = Object.getOwnPropertyDescriptor(e, "ref") ?.get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
    }
    i(s, "usePresence"), i(a, "setRef"), i(u, "useStableComposedRefs"), i(c, "getAnimationName"), i(f, "getElementRef"), e.s(["Presence", 0, l])
}, 75830, e => {
    "use strict";
    var t = e.i(71645),
        r = e.i(30030),
        n = Object.defineProperty,
        i = (e, t) => n(e, "name", {
            value: t,
            configurable: !0
        });

    function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }

    function l(...e) {
        return t => {
            let r = !1,
                n = e.map(e => {
                    let n = o(e, t);
                    return r || "function" != typeof n || (r = !0), n
                });
            if (r) return () => {
                for (let t = 0; t < n.length; t++) {
                    let r = n[t];
                    "function" == typeof r ? r() : o(e[t], null)
                }
            }
        }
    }

    function s(...e) {
        return t.useCallback(l(...e), e)
    }
    i(o, "setRef"), i(l, "composeRefs"), i(s, "useComposedRefs");
    var a = Object.defineProperty,
        u = (e, t) => a(e, "name", {
            value: t,
            configurable: !0
        });

    function c(e) {
        let r = t.forwardRef((r, n) => {
            let {
                children: i,
                ...o
            } = r, l = null, a = !1, u = [];
            g(i) && "function" == typeof E && (i = E(i._payload)), t.Children.forEach(i, e => {
                if (m(e)) {
                    a = !0;
                    let t = "child" in e.props ? e.props.child : e.props.children;
                    g(t) && "function" == typeof E && (t = E(t._payload)), l = d(e, t), u.push(l ?.props ?.children)
                } else u.push(e)
            }), l ? l = t.cloneElement(l, void 0, u) : !a && 1 === t.Children.count(i) && t.isValidElement(i) && (l = i);
            let c = l ? h(l) : void 0,
                f = s(n, c);
            if (!l) {
                if (i || 0 === i) throw Error(a ? S(e) : b(e));
                return i
            }
            let y = p(o, l.props ?? {});
            return l.type !== t.Fragment && (y.ref = n ? f : c), t.cloneElement(l, y)
        });
        return r.displayName = `${e}.Slot`, r
    }
    u(c, "createSlot");
    var f = Symbol.for("radix.slottable");
    u(function(e) {
        let t = u(e => "child" in e ? e.children(e.child) : e.children, "Slottable");
        return t.displayName = `${e}.Slottable`, t.__radixId = f, t
    }, "createSlottable");
    var d = u((e, r) => {
        if ("child" in e.props) {
            let r = e.props.child;
            return t.isValidElement(r) ? t.cloneElement(r, void 0, e.props.children(r.props.children)) : null
        }
        return t.isValidElement(r) ? r : null
    }, "getSlottableElementFromSlottable");

    function p(e, t) {
        let r = { ...t
        };
        for (let n in t) {
            let i = e[n],
                o = t[n];
            /^on[A-Z]/.test(n) ? i && o ? r[n] = (...e) => {
                let t = o(...e);
                return i(...e), t
            } : i && (r[n] = i) : "style" === n ? r[n] = { ...i,
                ...o
            } : "className" === n && (r[n] = [i, o].filter(Boolean).join(" "))
        }
        return { ...e,
            ...r
        }
    }

    function h(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref") ?.get,
            r = t && "isReactWarning" in t && t.isReactWarning;
        return r ? e.ref : (r = (t = Object.getOwnPropertyDescriptor(e, "ref") ?.get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
    }

    function m(e) {
        return t.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === f
    }
    u(p, "mergeProps"), u(h, "getElementRef"), u(m, "isSlottable");
    var y = Symbol.for("react.lazy");

    function g(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === y && "_payload" in e && v(e._payload)
    }

    function v(e) {
        return "object" == typeof e && null !== e && "then" in e
    }
    u(g, "isLazyComponent"), u(v, "isPromiseLike");
    var b = u(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"),
        S = u(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"),
        E = t[" use ".trim().toString()],
        x = e.i(43476),
        R = Object.defineProperty,
        C = (e, t) => R(e, "name", {
            value: t,
            configurable: !0
        });

    function w(e) {
        let n = e + "CollectionProvider",
            [i, o] = (0, r.createContextScope)(n),
            [l, a] = i(n, {
                collectionRef: {
                    current: null
                },
                itemMap: new Map
            }),
            u = C(e => {
                let {
                    scope: r,
                    children: n
                } = e, i = t.useRef(null), o = t.useRef(new Map).current;
                return (0, x.jsx)(l, {
                    scope: r,
                    itemMap: o,
                    collectionRef: i,
                    children: n
                })
            }, "CollectionProvider");
        u.displayName = n;
        let f = e + "CollectionSlot",
            d = c(f),
            p = t.forwardRef((e, t) => {
                let {
                    scope: r,
                    children: n
                } = e, i = s(t, a(f, r).collectionRef);
                return (0, x.jsx)(d, {
                    ref: i,
                    children: n
                })
            });
        p.displayName = f;
        let h = e + "CollectionItemSlot",
            m = "data-radix-collection-item",
            y = c(h),
            g = t.forwardRef((e, r) => {
                let {
                    scope: n,
                    children: i,
                    ...o
                } = e, l = t.useRef(null), u = s(r, l), c = a(h, n);
                return t.useEffect(() => (c.itemMap.set(l, {
                    ref: l,
                    ...o
                }), () => void c.itemMap.delete(l))), (0, x.jsx)(y, { ...{
                        [m]: ""
                    },
                    ref: u,
                    children: i
                })
            });

        function v(r) {
            let n = a(e + "CollectionConsumer", r);
            return t.useCallback(() => {
                let e = n.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll(`[${m}]`));
                return Array.from(n.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
            }, [n.collectionRef, n.itemMap])
        }
        return g.displayName = h, C(v, "useCollection"), [{
            Provider: u,
            Slot: p,
            ItemSlot: g
        }, v, o]
    }
    C(w, "createCollection");
    var O = new WeakMap,
        k = class e extends Map {
            static {
                C(this, "OrderedDict")
            }
            #e;
            constructor(e) {
                super(e), this.#e = [...super.keys()], O.set(this, !0)
            }
            set(e, t) {
                return O.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this
            }
            insert(e, t, r) {
                let n, i = this.has(t),
                    o = this.#e.length,
                    l = P(e),
                    s = l >= 0 ? l : o + l,
                    a = s < 0 || s >= o ? -1 : s;
                if (a === this.size || i && a === this.size - 1 || -1 === a) return this.set(t, r), this;
                let u = this.size + +!i;
                l < 0 && s++;
                let c = [...this.#e],
                    f = !1;
                for (let e = s; e < u; e++)
                    if (s === e) {
                        let o = c[e];
                        c[e] === t && (o = c[e + 1]), i && this.delete(t), n = this.get(o), this.set(t, r)
                    } else {
                        f || c[e - 1] !== t || (f = !0);
                        let r = c[f ? e : e - 1],
                            i = n;
                        n = this.get(r), this.delete(r), this.set(r, i)
                    }
                return this
            }
            with(t, r, n) {
                let i = new e(this);
                return i.insert(t, r, n), i
            }
            before(e) {
                let t = this.#e.indexOf(e) - 1;
                if (!(t < 0)) return this.entryAt(t)
            }
            setBefore(e, t, r) {
                let n = this.#e.indexOf(e);
                return -1 === n ? this : this.insert(n, t, r)
            }
            after(e) {
                let t = this.#e.indexOf(e);
                if (-1 !== (t = -1 === t || t === this.size - 1 ? -1 : t + 1)) return this.entryAt(t)
            }
            setAfter(e, t, r) {
                let n = this.#e.indexOf(e);
                return -1 === n ? this : this.insert(n + 1, t, r)
            }
            first() {
                return this.entryAt(0)
            }
            last() {
                return this.entryAt(-1)
            }
            clear() {
                return this.#e = [], super.clear()
            }
            delete(e) {
                let t = super.delete(e);
                return t && this.#e.splice(this.#e.indexOf(e), 1), t
            }
            deleteAt(e) {
                let t = this.keyAt(e);
                return void 0 !== t && this.delete(t)
            }
            at(e) {
                let t = N(this.#e, e);
                if (void 0 !== t) return this.get(t)
            }
            entryAt(e) {
                let t = N(this.#e, e);
                if (void 0 !== t) return [t, this.get(t)]
            }
            indexOf(e) {
                return this.#e.indexOf(e)
            }
            keyAt(e) {
                return N(this.#e, e)
            }
            from(e, t) {
                let r = this.indexOf(e);
                if (-1 === r) return;
                let n = r + t;
                return n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.at(n)
            }
            keyFrom(e, t) {
                let r = this.indexOf(e);
                if (-1 === r) return;
                let n = r + t;
                return n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.keyAt(n)
            }
            find(e, t) {
                let r = 0;
                for (let n of this) {
                    if (Reflect.apply(e, t, [n, r, this])) return n;
                    r++
                }
            }
            findIndex(e, t) {
                let r = 0;
                for (let n of this) {
                    if (Reflect.apply(e, t, [n, r, this])) return r;
                    r++
                }
                return -1
            }
            filter(t, r) {
                let n = [],
                    i = 0;
                for (let e of this) Reflect.apply(t, r, [e, i, this]) && n.push(e), i++;
                return new e(n)
            }
            map(t, r) {
                let n = [],
                    i = 0;
                for (let e of this) n.push([e[0], Reflect.apply(t, r, [e, i, this])]), i++;
                return new e(n)
            }
            reduce(...e) {
                let [t, r] = e, n = 0, i = r ?? this.at(0);
                for (let r of this) i = 0 === n && 1 === e.length ? r : Reflect.apply(t, this, [i, r, n, this]), n++;
                return i
            }
            reduceRight(...e) {
                let [t, r] = e, n = r ?? this.at(-1);
                for (let r = this.size - 1; r >= 0; r--) {
                    let i = this.at(r);
                    n = r === this.size - 1 && 1 === e.length ? i : Reflect.apply(t, this, [n, i, r, this])
                }
                return n
            }
            toSorted(t) {
                return new e([...this.entries()].sort(t))
            }
            toReversed() {
                let t = new e;
                for (let e = this.size - 1; e >= 0; e--) {
                    let r = this.keyAt(e),
                        n = this.get(r);
                    t.set(r, n)
                }
                return t
            }
            toSpliced(...t) {
                let r = [...this.entries()];
                return r.splice(...t), new e(r)
            }
            slice(t, r) {
                let n = new e,
                    i = this.size - 1;
                if (void 0 === t) return n;
                t < 0 && (t += this.size), void 0 !== r && r > 0 && (i = r - 1);
                for (let e = t; e <= i; e++) {
                    let t = this.keyAt(e),
                        r = this.get(t);
                    n.set(t, r)
                }
                return n
            }
            every(e, t) {
                let r = 0;
                for (let n of this) {
                    if (!Reflect.apply(e, t, [n, r, this])) return !1;
                    r++
                }
                return !0
            }
            some(e, t) {
                let r = 0;
                for (let n of this) {
                    if (Reflect.apply(e, t, [n, r, this])) return !0;
                    r++
                }
                return !1
            }
        };

    function N(e, t) {
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        let r = j(e, t);
        return -1 === r ? void 0 : e[r]
    }

    function j(e, t) {
        let r = e.length,
            n = P(t),
            i = n >= 0 ? n : r + n;
        return i < 0 || i >= r ? -1 : i
    }

    function P(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e)
    }

    function M(e, t) {
        if (e === t) return !0;
        if ("object" != typeof e || "object" != typeof t || null == e || null == t) return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let n of r)
            if (!Object.prototype.hasOwnProperty.call(t, n) || e[n] !== t[n]) return !1;
        return !0
    }

    function _(e, t) {
        return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING)
    }

    function A(e, t) {
        return e[1].element && t[1].element ? _(e[1].element, t[1].element) ? -1 : 1 : 0
    }

    function I(e) {
        return new MutationObserver(t => {
            for (let r of t)
                if ("childList" === r.type) return void e()
        })
    }
    C(N, "at"), C(j, "toSafeIndex"), C(P, "toSafeInteger"), C(function(e) {
        let n = e + "CollectionProvider",
            [i, o] = (0, r.createContextScope)(n),
            [l, a] = i(n, {
                collectionElement: null,
                collectionRef: {
                    current: null
                },
                collectionRefObject: {
                    current: null
                },
                itemMap: new k,
                setItemMap: C(() => void 0, "setItemMap")
            }),
            u = C(({
                state: e,
                ...t
            }) => e ? (0, x.jsx)(d, { ...t,
                state: e
            }) : (0, x.jsx)(f, { ...t
            }), "CollectionProvider");
        u.displayName = n;
        let f = C(e => {
            let t = b();
            return (0, x.jsx)(d, { ...e,
                state: t
            })
        }, "CollectionInit");
        f.displayName = n + "Init";
        let d = C(e => {
            let {
                scope: r,
                children: n,
                state: i
            } = e, o = t.useRef(null), [a, u] = t.useState(null), c = s(o, u), [f, d] = i;
            return t.useEffect(() => {
                if (!a) return;
                let e = I(() => {});
                return e.observe(a, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    e.disconnect()
                }
            }, [a]), (0, x.jsx)(l, {
                scope: r,
                itemMap: f,
                setItemMap: d,
                collectionRef: c,
                collectionRefObject: o,
                collectionElement: a,
                children: n
            })
        }, "CollectionProviderImpl");
        d.displayName = n + "Impl";
        let p = e + "CollectionSlot",
            h = c(p),
            m = t.forwardRef((e, t) => {
                let {
                    scope: r,
                    children: n
                } = e, i = s(t, a(p, r).collectionRef);
                return (0, x.jsx)(h, {
                    ref: i,
                    children: n
                })
            });
        m.displayName = p;
        let y = e + "CollectionItemSlot",
            g = c(y),
            v = t.forwardRef((e, r) => {
                let {
                    scope: n,
                    children: i,
                    ...o
                } = e, l = t.useRef(null), [u, c] = t.useState(null), f = s(r, l, c), {
                    setItemMap: d
                } = a(y, n), p = t.useRef(o);
                M(p.current, o) || (p.current = o);
                let h = p.current;
                return t.useEffect(() => (d(e => u ? e.has(u) ? e.set(u, { ...h,
                    element: u
                }).toSorted(A) : (e.set(u, { ...h,
                    element: u
                }), e.toSorted(A)) : e), () => {
                    d(e => u && e.has(u) ? (e.delete(u), new k(e)) : e)
                }), [u, h, d]), (0, x.jsx)(g, {
                    "data-radix-collection-item": "",
                    ref: f,
                    children: i
                })
            });

        function b() {
            return t.useState(new k)
        }

        function S(t) {
            let {
                itemMap: r
            } = a(e + "CollectionConsumer", t);
            return r
        }
        return v.displayName = y, C(b, "useInitCollection"), C(S, "useCollection"), [{
            Provider: u,
            Slot: m,
            ItemSlot: v
        }, {
            createCollectionScope: o,
            useCollection: S,
            useInitCollection: b
        }]
    }, "createCollection"), C(M, "shallowEqual"), C(_, "isElementPreceding"), C(A, "sortByDocumentPosition"), C(I, "getChildListObserver"), e.s(["createCollection", 0, w], 75830)
}, 86318, e => {
    "use strict";
    var t = e.i(71645),
        r = (e.i(43476), Object.defineProperty),
        n = t.createContext(void 0);

    function i(e) {
        let r = t.useContext(n);
        return e || r || "ltr"
    }
    r(i, "name", {
        value: "useDirection",
        configurable: !0
    }), e.s(["useDirection", 0, i])
}]);