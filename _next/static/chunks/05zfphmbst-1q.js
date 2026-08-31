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
        i = e.i(88973),
        n = e.i(96661);
    let o = (0, t.createContext)({}),
        a = (0, t.forwardRef)(({
            color: e,
            size: a,
            strokeWidth: l,
            absoluteStrokeWidth: s,
            className: d = "",
            children: c,
            iconNode: u,
            ...p
        }, f) => {
            let {
                size: h = 24,
                strokeWidth: g = 2,
                absoluteStrokeWidth: v = !1,
                color: m = "currentColor",
                className: b = ""
            } = (0, t.useContext)(o) ? ? {}, y = s ? ? v ? 24 * Number(l ? ? g) / Number(a ? ? h) : l ? ? g;
            return (0, t.createElement)("svg", {
                ref: f,
                ...r.default,
                width: a ? ? h ? ? r.default.width,
                height: a ? ? h ? ? r.default.height,
                stroke: e ? ? m,
                strokeWidth: y,
                className: (0, n.mergeClasses)("lucide", b, d),
                ...!c && !(0, i.hasA11yProp)(p) && {
                    "aria-hidden": "true"
                },
                ...p
            }, [...u.map(([e, r]) => (0, t.createElement)(e, r)), ...Array.isArray(c) ? c : [c]])
        });
    e.s(["default", 0, a], 5014)
}, 67881, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(25913),
        i = e.i(71645),
        n = Object.defineProperty,
        o = (e, t) => n(e, "name", {
            value: t,
            configurable: !0
        });

    function a(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }

    function l(...e) {
        return t => {
            let r = !1,
                i = e.map(e => {
                    let i = a(e, t);
                    return r || "function" != typeof i || (r = !0), i
                });
            if (r) return () => {
                for (let t = 0; t < i.length; t++) {
                    let r = i[t];
                    "function" == typeof r ? r() : a(e[t], null)
                }
            }
        }
    }

    function s(...e) {
        return i.useCallback(l(...e), e)
    }
    o(a, "setRef"), o(l, "composeRefs"), o(s, "useComposedRefs");
    var d = Object.defineProperty,
        c = (e, t) => d(e, "name", {
            value: t,
            configurable: !0
        });

    function u(e) {
        let t = i.forwardRef((t, r) => {
            let {
                children: n,
                ...o
            } = t, a = null, l = !1, d = [];
            k(n) && "function" == typeof R && (n = R(n._payload)), i.Children.forEach(n, e => {
                if (y(e)) {
                    l = !0;
                    let t = "child" in e.props ? e.props.child : e.props.children;
                    k(t) && "function" == typeof R && (t = R(t._payload)), a = v(e, t), d.push(a ? .props ? .children)
                } else d.push(e)
            }), a ? a = i.cloneElement(a, void 0, d) : !l && 1 === i.Children.count(n) && i.isValidElement(n) && (a = n);
            let c = a ? b(a) : void 0,
                u = s(r, c);
            if (!a) {
                if (n || 0 === n) throw Error(l ? w(e) : j(e));
                return n
            }
            let p = m(o, a.props ? ? {});
            return a.type !== i.Fragment && (p.ref = r ? u : c), i.cloneElement(a, p)
        });
        return t.displayName = `${e}.Slot`, t
    }
    c(u, "createSlot");
    var p = u("Slot"),
        f = Symbol.for("radix.slottable");

    function h(e) {
        let t = c(e => "child" in e ? e.children(e.child) : e.children, "Slottable");
        return t.displayName = `${e}.Slottable`, t.__radixId = f, t
    }
    c(h, "createSlottable");
    var g = h("Slottable"),
        v = c((e, t) => {
            if ("child" in e.props) {
                let t = e.props.child;
                return i.isValidElement(t) ? i.cloneElement(t, void 0, e.props.children(t.props.children)) : null
            }
            return i.isValidElement(t) ? t : null
        }, "getSlottableElementFromSlottable");

    function m(e, t) {
        let r = { ...t
        };
        for (let i in t) {
            let n = e[i],
                o = t[i];
            /^on[A-Z]/.test(i) ? n && o ? r[i] = (...e) => {
                let t = o(...e);
                return n(...e), t
            } : n && (r[i] = n) : "style" === i ? r[i] = { ...n,
                ...o
            } : "className" === i && (r[i] = [n, o].filter(Boolean).join(" "))
        }
        return { ...e,
            ...r
        }
    }

    function b(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
            r = t && "isReactWarning" in t && t.isReactWarning;
        return r ? e.ref : (r = (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
    }

    function y(e) {
        return i.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === f
    }
    c(m, "mergeProps"), c(b, "getElementRef"), c(y, "isSlottable");
    var x = Symbol.for("react.lazy");

    function k(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === x && "_payload" in e && S(e._payload)
    }

    function S(e) {
        return "object" == typeof e && null !== e && "then" in e
    }
    c(k, "isLazyComponent"), c(S, "isPromiseLike");
    var j = c(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"),
        w = c(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"),
        R = i[" use ".trim().toString()];
    e.s(["Root", 0, p, "Slot", 0, p, "Slottable", 0, g, "createSlot", 0, u, "createSlottable", 0, h], 43556);
    var z = e.i(43556),
        z = z,
        E = e.i(47163);
    let C = (0, r.cva)("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
        size: i = "default",
        asChild: n = !1,
        ...o
    }) {
        let a = n ? z.Root : "button";
        return (0, t.jsx)(a, {
            "data-slot": "button",
            "data-variant": r,
            "data-size": i,
            className: (0, E.cn)(C({
                variant: r,
                size: i,
                className: e
            })),
            ...o
        })
    }], 67881)
}, 41120, e => {
    "use strict";
    let t = (0, e.i(56420).default)("refresh-cw", [
        ["path", {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc"
        }],
        ["path", {
            d: "M21 3v5h-5",
            key: "1q7to0"
        }],
        ["path", {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3"
        }],
        ["path", {
            d: "M8 16H3v5",
            key: "1cv678"
        }]
    ]);
    e.s(["RefreshCw", 0, t], 41120)
}, 8821, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(41120);
    let i = (0, e.i(56420).default)("triangle-alert", [
        ["path", {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq"
        }],
        ["path", {
            d: "M12 9v4",
            key: "juzpu7"
        }],
        ["path", {
            d: "M12 17h.01",
            key: "p32p05"
        }]
    ]);
    var n = e.i(67881);
    e.s(["default", 0, function({
        reset: e
    }) {
        return (0, t.jsx)("main", {
            className: "final-state",
            children: (0, t.jsxs)("div", {
                children: [(0, t.jsx)("span", {
                    children: (0, t.jsx)(i, {})
                }), (0, t.jsx)("h1", {
                    children: "Something didn’t load correctly."
                }), (0, t.jsx)("p", {
                    children: "Your saved data has not been removed. Try loading this page again."
                }), (0, t.jsxs)(n.Button, {
                    onClick: e,
                    children: [(0, t.jsx)(r.RefreshCw, {}), "Try again"]
                }), (0, t.jsx)("a", {
                    href: "/",
                    children: "Return home"
                })]
            })
        })
    }], 8821)
}]);