(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 63676, e => {
    "use strict";
    var t = e.i(14387);
    e.s(["X", () => t.default])
}, 91323, 51757, 30374, e => {
    "use strict";
    var t = e.i(56420);
    let a = (0, t.default)("badge-check", [
        ["path", {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
            key: "3c2336"
        }],
        ["path", {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }]
    ]);
    e.s(["BadgeCheck", 0, a], 91323);
    let n = (0, t.default)("circle-check", [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }]
    ]);
    e.s(["CheckCircle2", 0, n], 51757);
    var s = e.i(43476),
        i = e.i(14387),
        i = i,
        r = e.i(71645),
        l = e.i(81140),
        o = Object.defineProperty,
        c = (e, t) => o(e, "name", {
            value: t,
            configurable: !0
        });

    function d(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }

    function h(...e) {
        return t => {
            let a = !1,
                n = e.map(e => {
                    let n = d(e, t);
                    return a || "function" != typeof n || (a = !0), n
                });
            if (a) return () => {
                for (let t = 0; t < n.length; t++) {
                    let a = n[t];
                    "function" == typeof a ? a() : d(e[t], null)
                }
            }
        }
    }

    function p(...e) {
        return r.useCallback(h(...e), e)
    }
    c(d, "setRef"), c(h, "composeRefs"), c(p, "useComposedRefs");
    var u = e.i(30030),
        g = e.i(10772),
        m = e.i(69340),
        x = e.i(26330),
        f = e.i(65491),
        j = e.i(74606),
        v = e.i(96626),
        y = e.i(48425),
        b = e.i(3536),
        k = e.i(34620),
        N = e.i(85369),
        w = e.i(86312),
        S = Object.defineProperty,
        C = (e, t) => S(e, "name", {
            value: t,
            configurable: !0
        });

    function D(e) {
        let t = r.forwardRef((t, a) => {
            let {
                children: n,
                ...s
            } = t, i = null, l = !1, o = [];
            M(n) && "function" == typeof B && (n = B(n._payload)), r.Children.forEach(n, e => {
                if (P(e)) {
                    l = !0;
                    let t = "child" in e.props ? e.props.child : e.props.children;
                    M(t) && "function" == typeof B && (t = B(t._payload)), i = R(e, t), o.push(i ? .props ? .children)
                } else o.push(e)
            }), i ? i = r.cloneElement(i, void 0, o) : !l && 1 === r.Children.count(n) && r.isValidElement(n) && (i = n);
            let c = i ? I(i) : void 0,
                d = p(a, c);
            if (!i) {
                if (n || 0 === n) throw Error(l ? z(e) : H(e));
                return n
            }
            let h = O(s, i.props ? ? {});
            return i.type !== r.Fragment && (h.ref = a ? d : c), r.cloneElement(i, h)
        });
        return t.displayName = `${e}.Slot`, t
    }
    C(D, "createSlot");
    var E = Symbol.for("radix.slottable");
    C(function(e) {
        let t = C(e => "child" in e ? e.children(e.child) : e.children, "Slottable");
        return t.displayName = `${e}.Slottable`, t.__radixId = E, t
    }, "createSlottable");
    var R = C((e, t) => {
        if ("child" in e.props) {
            let t = e.props.child;
            return r.isValidElement(t) ? r.cloneElement(t, void 0, e.props.children(t.props.children)) : null
        }
        return r.isValidElement(t) ? t : null
    }, "getSlottableElementFromSlottable");

    function O(e, t) {
        let a = { ...t
        };
        for (let n in t) {
            let s = e[n],
                i = t[n];
            /^on[A-Z]/.test(n) ? s && i ? a[n] = (...e) => {
                let t = i(...e);
                return s(...e), t
            } : s && (a[n] = s) : "style" === n ? a[n] = { ...s,
                ...i
            } : "className" === n && (a[n] = [s, i].filter(Boolean).join(" "))
        }
        return { ...e,
            ...a
        }
    }

    function I(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
            a = t && "isReactWarning" in t && t.isReactWarning;
        return a ? e.ref : (a = (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
    }

    function P(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === E
    }
    C(O, "mergeProps"), C(I, "getElementRef"), C(P, "isSlottable");
    var T = Symbol.for("react.lazy");

    function M(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === T && "_payload" in e && A(e._payload)
    }

    function A(e) {
        return "object" == typeof e && null !== e && "then" in e
    }
    C(M, "isLazyComponent"), C(A, "isPromiseLike");
    var H = C(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"),
        z = C(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"),
        B = r[" use ".trim().toString()],
        F = Object.defineProperty,
        _ = (e, t) => F(e, "name", {
            value: t,
            configurable: !0
        }),
        $ = "Dialog",
        [L, V] = (0, u.createContextScope)($),
        [W, U] = L($),
        q = _(e => {
            let {
                __scopeDialog: t,
                children: a,
                open: n,
                defaultOpen: i,
                onOpenChange: l,
                modal: o = !0
            } = e, c = r.useRef(null), d = r.useRef(null), [h, p] = (0, m.useControllableState)({
                prop: n,
                defaultProp: i ? ? !1,
                onChange: l,
                caller: $
            }), [u, x] = r.useState(0), [f, j] = r.useState(0);
            return (0, s.jsx)(W, {
                scope: t,
                triggerRef: c,
                contentRef: d,
                contentId: (0, g.useId)(),
                titleId: (0, g.useId)(),
                descriptionId: (0, g.useId)(),
                titlePresent: u > 0,
                descriptionPresent: f > 0,
                setTitleCount: x,
                setDescriptionCount: j,
                open: h,
                onOpenChange: p,
                onOpenToggle: r.useCallback(() => p(e => !e), [p]),
                modal: o,
                children: a
            })
        }, "Dialog"),
        K = r.forwardRef(_(function(e, t) {
            let {
                __scopeDialog: a,
                ...n
            } = e, i = U("DialogTrigger", a), r = p(t, i.triggerRef);
            return (0, s.jsx)(y.Primitive.button, {
                type: "button",
                "aria-haspopup": "dialog",
                "aria-expanded": i.open,
                "aria-controls": i.open ? i.contentId : void 0,
                "data-state": eh(i.open),
                ...n,
                ref: r,
                onClick: (0, l.composeEventHandlers)(e.onClick, i.onOpenToggle)
            })
        }, "DialogTrigger")),
        Y = "DialogPortal",
        [G, J] = L(Y, {
            forceMount: void 0
        }),
        Z = _(e => {
            let {
                __scopeDialog: t,
                forceMount: a,
                children: n,
                container: i
            } = e, l = U(Y, t);
            return (0, s.jsx)(G, {
                scope: t,
                forceMount: a,
                children: r.Children.map(n, e => (0, s.jsx)(v.Presence, {
                    present: a || l.open,
                    children: (0, s.jsx)(j.Portal, {
                        asChild: !0,
                        container: i,
                        children: e
                    })
                }))
            })
        }, "DialogPortal"),
        X = "DialogOverlay",
        Q = r.forwardRef(_(function(e, t) {
            let a = J(X, e.__scopeDialog),
                {
                    forceMount: n = a.forceMount,
                    ...i
                } = e,
                r = U(X, e.__scopeDialog);
            return r.modal ? (0, s.jsx)(v.Presence, {
                present: n || r.open,
                children: (0, s.jsx)(et, { ...i,
                    ref: t
                })
            }) : null
        }, "DialogOverlay")),
        ee = D("DialogOverlay.RemoveScroll"),
        et = r.forwardRef(_(function(e, t) {
            let {
                __scopeDialog: a,
                ...n
            } = e, i = U(X, a), r = p(t, (0, x.useDismissableLayerSurface)());
            return (0, s.jsx)(N.RemoveScroll, {
                as: ee,
                allowPinchZoom: !0,
                shards: [i.contentRef],
                children: (0, s.jsx)(y.Primitive.div, {
                    "data-state": eh(i.open),
                    ...n,
                    ref: r,
                    style: {
                        pointerEvents: "auto",
                        ...n.style
                    }
                })
            })
        }, "DialogOverlayImpl")),
        ea = "DialogContent",
        en = r.forwardRef(_(function(e, t) {
            let a = J(ea, e.__scopeDialog),
                {
                    forceMount: n = a.forceMount,
                    ...i
                } = e,
                r = U(ea, e.__scopeDialog);
            return (0, s.jsx)(v.Presence, {
                present: n || r.open,
                children: r.modal ? (0, s.jsx)(es, { ...i,
                    ref: t
                }) : (0, s.jsx)(ei, { ...i,
                    ref: t
                })
            })
        }, "DialogContent")),
        es = r.forwardRef(_(function(e, t) {
            let a = U(ea, e.__scopeDialog),
                n = r.useRef(null),
                i = p(t, a.contentRef, n);
            return r.useEffect(() => {
                let e = n.current;
                if (e) return (0, w.hideOthers)(e)
            }, []), (0, s.jsx)(er, { ...e,
                ref: i,
                trapFocus: a.open,
                disableOutsidePointerEvents: a.open,
                onCloseAutoFocus: (0, l.composeEventHandlers)(e.onCloseAutoFocus, e => {
                    e.preventDefault(), a.triggerRef.current ? .focus()
                }),
                onPointerDownOutside: (0, l.composeEventHandlers)(e.onPointerDownOutside, e => {
                    let t = e.detail.originalEvent,
                        a = 0 === t.button && !0 === t.ctrlKey;
                    (2 === t.button || a) && e.preventDefault()
                }),
                onFocusOutside: (0, l.composeEventHandlers)(e.onFocusOutside, e => e.preventDefault())
            })
        }, "DialogContentModal")),
        ei = r.forwardRef(_(function(e, t) {
            let a = U(ea, e.__scopeDialog),
                n = r.useRef(!1),
                i = r.useRef(!1);
            return (0, s.jsx)(er, { ...e,
                ref: t,
                trapFocus: !1,
                disableOutsidePointerEvents: !1,
                onCloseAutoFocus: t => {
                    e.onCloseAutoFocus ? .(t), t.defaultPrevented || (n.current || a.triggerRef.current ? .focus(), t.preventDefault()), n.current = !1, i.current = !1
                },
                onInteractOutside: t => {
                    e.onInteractOutside ? .(t), t.defaultPrevented || (n.current = !0, "pointerdown" === t.detail.originalEvent.type && (i.current = !0));
                    let s = t.target;
                    a.triggerRef.current ? .contains(s) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault()
                }
            })
        }, "DialogContentNonModal")),
        er = r.forwardRef(_(function(e, t) {
            let {
                __scopeDialog: a,
                trapFocus: n,
                onOpenAutoFocus: i,
                onCloseAutoFocus: r,
                ...l
            } = e, o = U(ea, a);
            return (0, b.useFocusGuards)(), (0, s.jsx)(s.Fragment, {
                children: (0, s.jsx)(f.FocusScope, {
                    asChild: !0,
                    loop: !0,
                    trapped: n,
                    onMountAutoFocus: i,
                    onUnmountAutoFocus: r,
                    children: (0, s.jsx)(x.DismissableLayer, {
                        role: "dialog",
                        id: o.contentId,
                        "aria-describedby": o.descriptionPresent ? o.descriptionId : void 0,
                        "aria-labelledby": o.titlePresent ? o.titleId : void 0,
                        "data-state": eh(o.open),
                        ...l,
                        ref: t,
                        deferPointerDownOutside: !0,
                        onDismiss: () => o.onOpenChange(!1)
                    })
                })
            })
        }, "DialogContentImpl")),
        el = r.forwardRef(_(function(e, t) {
            let {
                __scopeDialog: a,
                ...n
            } = e, i = U("DialogTitle", a), {
                setTitleCount: r
            } = i;
            return (0, k.useLayoutEffect)(() => (r(e => e + 1), () => r(e => e - 1)), [r]), (0, s.jsx)(y.Primitive.h2, {
                id: i.titleId,
                ...n,
                ref: t
            })
        }, "DialogTitle")),
        eo = r.forwardRef(_(function(e, t) {
            let {
                __scopeDialog: a,
                ...n
            } = e, i = U("DialogDescription", a), {
                setDescriptionCount: r
            } = i;
            return (0, k.useLayoutEffect)(() => (r(e => e + 1), () => r(e => e - 1)), [r]), (0, s.jsx)(y.Primitive.p, {
                id: i.descriptionId,
                ...n,
                ref: t
            })
        }, "DialogDescription")),
        ec = r.forwardRef(_(function(e, t) {
            let {
                __scopeDialog: a,
                ...n
            } = e, i = U("DialogClose", a);
            return (0, s.jsx)(y.Primitive.button, {
                type: "button",
                ...n,
                ref: t,
                onClick: (0, l.composeEventHandlers)(e.onClick, () => i.onOpenChange(!1))
            })
        }, "DialogClose")),
        ed = _(e => e.children, "WarningProvider");

    function eh(e) {
        return e ? "open" : "closed"
    }
    _(eh, "getState"), e.s(["Close", 0, ec, "Content", 0, en, "Description", 0, eo, "Dialog", 0, q, "DialogClose", 0, ec, "DialogContent", 0, en, "DialogDescription", 0, eo, "DialogOverlay", 0, Q, "DialogPortal", 0, Z, "DialogTitle", 0, el, "DialogTrigger", 0, K, "Overlay", 0, Q, "Portal", 0, Z, "Root", 0, q, "Title", 0, el, "Trigger", 0, K, "WarningProvider", 0, ed, "createDialogScope", 0, V], 26999);
    var ep = e.i(26999),
        ep = ep,
        eu = e.i(47163);

    function eg({ ...e
    }) {
        return (0, s.jsx)(ep.Portal, {
            "data-slot": "dialog-portal",
            ...e
        })
    }

    function em({
        className: e,
        ...t
    }) {
        return (0, s.jsx)(ep.Overlay, {
            "data-slot": "dialog-overlay",
            className: (0, eu.cn)("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
            ...t
        })
    }
    e.i(67881), e.s(["Dialog", 0, function({ ...e
    }) {
        return (0, s.jsx)(ep.Root, {
            "data-slot": "dialog",
            ...e
        })
    }, "DialogContent", 0, function({
        className: e,
        children: t,
        showCloseButton: a = !0,
        ...n
    }) {
        return (0, s.jsxs)(eg, {
            "data-slot": "dialog-portal",
            children: [(0, s.jsx)(em, {}), (0, s.jsxs)(ep.Content, {
                "data-slot": "dialog-content",
                className: (0, eu.cn)("fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg", e),
                ...n,
                children: [t, a && (0, s.jsxs)(ep.Close, {
                    "data-slot": "dialog-close",
                    className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    children: [(0, s.jsx)(i.default, {}), (0, s.jsx)("span", {
                        className: "sr-only",
                        children: "Close"
                    })]
                })]
            })]
        })
    }, "DialogDescription", 0, function({
        className: e,
        ...t
    }) {
        return (0, s.jsx)(ep.Description, {
            "data-slot": "dialog-description",
            className: (0, eu.cn)("text-sm text-muted-foreground", e),
            ...t
        })
    }, "DialogHeader", 0, function({
        className: e,
        ...t
    }) {
        return (0, s.jsx)("div", {
            "data-slot": "dialog-header",
            className: (0, eu.cn)("flex flex-col gap-2 text-center sm:text-left", e),
            ...t
        })
    }, "DialogTitle", 0, function({
        className: e,
        ...t
    }) {
        return (0, s.jsx)(ep.Title, {
            "data-slot": "dialog-title",
            className: (0, eu.cn)("text-lg leading-none font-semibold", e),
            ...t
        })
    }, "DialogTrigger", 0, function({ ...e
    }) {
        return (0, s.jsx)(ep.Trigger, {
            "data-slot": "dialog-trigger",
            ...e
        })
    }], 30374)
}, 31713, e => {
    "use strict";
    var t = e.i(43476),
        a = e.i(71645),
        n = e.i(56420);
    let s = (0, n.default)("arrow-right", [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }],
        ["path", {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }]
    ]);
    var i = e.i(91323);
    let r = (0, n.default)("book-open", [
        ["path", {
            d: "M12 5v16",
            key: "1f6ucr"
        }],
        ["path", {
            d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",
            key: "1fyvmf"
        }]
    ]);
    var l = e.i(46387);
    let o = (0, n.default)("camera", [
        ["path", {
            d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
            key: "18u6gg"
        }],
        ["circle", {
            cx: "12",
            cy: "13",
            r: "3",
            key: "1vg3eu"
        }]
    ]);
    var c = e.i(51757);
    let d = (0, n.default)("chevron-right", [
        ["path", {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }]
    ]);
    var h = e.i(23482),
        p = e.i(30480);
    let u = (0, n.default)("languages", [
        ["path", {
            d: "m5 8 6 6",
            key: "1wu5hv"
        }],
        ["path", {
            d: "m4 14 6-6 2-3",
            key: "1k1g8d"
        }],
        ["path", {
            d: "M2 5h12",
            key: "or177f"
        }],
        ["path", {
            d: "M7 2h1",
            key: "1t2jsx"
        }],
        ["path", {
            d: "m22 22-5-10-5 10",
            key: "don7ne"
        }],
        ["path", {
            d: "M14 18h6",
            key: "1m8k6r"
        }]
    ]);
    var g = e.i(32781);
    let m = (0, n.default)("locate-fixed", [
        ["line", {
            x1: "2",
            x2: "5",
            y1: "12",
            y2: "12",
            key: "bvdh0s"
        }],
        ["line", {
            x1: "19",
            x2: "22",
            y1: "12",
            y2: "12",
            key: "1tbv5k"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "5",
            key: "11lu5j"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "19",
            y2: "22",
            key: "x3vr5v"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "7",
            key: "fim9np"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }]
    ]);
    var x = e.i(20865);
    let f = (0, n.default)("menu", [
            ["path", {
                d: "M4 5h16",
                key: "1tepv9"
            }],
            ["path", {
                d: "M4 12h16",
                key: "1lakjw"
            }],
            ["path", {
                d: "M4 19h16",
                key: "1djgab"
            }]
        ]),
        j = (0, n.default)("mic", [
            ["path", {
                d: "M12 19v3",
                key: "npa21l"
            }],
            ["path", {
                d: "M19 10v2a7 7 0 0 1-14 0v-2",
                key: "1vc78b"
            }],
            ["rect", {
                x: "9",
                y: "2",
                width: "6",
                height: "13",
                rx: "3",
                key: "s6n7sd"
            }]
        ]),
        v = (0, n.default)("plus", [
            ["path", {
                d: "M5 12h14",
                key: "1ays0h"
            }],
            ["path", {
                d: "M12 5v14",
                key: "s699le"
            }]
        ]),
        y = (0, n.default)("search", [
            ["path", {
                d: "m21 21-4.34-4.34",
                key: "14j7rj"
            }],
            ["circle", {
                cx: "11",
                cy: "11",
                r: "8",
                key: "4ej97u"
            }]
        ]),
        b = (0, n.default)("sprout", [
            ["path", {
                d: "M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",
                key: "139s4v"
            }],
            ["path", {
                d: "M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4",
                key: "1dlkgp"
            }],
            ["path", {
                d: "M5 21h14",
                key: "11awu3"
            }]
        ]);
    var k = e.i(82303);
    let N = (0, n.default)("waves-horizontal", [
        ["path", {
            d: "M2 12q2.5 2 5 0t5 0 5 0 5 0",
            key: "8ddzzs"
        }],
        ["path", {
            d: "M2 19q2.5 2 5 0t5 0 5 0 5 0",
            key: "1wj4st"
        }],
        ["path", {
            d: "M2 5q2.5 2 5 0t5 0 5 0 5 0",
            key: "69x50u"
        }]
    ]);
    var w = e.i(63676),
        S = e.i(67881),
        C = e.i(30374),
        D = e.i(23750),
        E = e.i(62870);
    let R = ["All", "Water", "Agriculture", "Education", "Environment"],
        O = [{
            id: -1,
            title: "Clean drinking water needed in Bero village",
            hi: "बेड़ो गांव में स्वच्छ पेयजल की जरूरत",
            description: "Three hand pumps serve over 600 people, but two stop working every summer.",
            location: "Bero, Ranchi",
            category: "Water",
            supporters: 148,
            teams: 3,
            urgency: "Example challenge",
            sample: !0
        }, {
            id: -2,
            title: "Farmers need low-cost crop storage",
            hi: "किसानों को कम लागत वाले भंडारण की जरूरत",
            description: "Vegetables spoil before reaching the market. The community seeks a simple solar solution.",
            location: "Gumla, Jharkhand",
            category: "Agriculture",
            supporters: 96,
            teams: 2,
            urgency: "Example challenge",
            sample: !0
        }, {
            id: -3,
            title: "Learning support for village students",
            hi: "गांव के विद्यार्थियों के लिए पढ़ाई में सहायता",
            description: "Students need reusable, low-data lessons for science and mathematics after school.",
            location: "Dumka, Jharkhand",
            category: "Education",
            supporters: 72,
            teams: 4,
            urgency: "Example challenge",
            sample: !0
        }];

    function I() {
        let e = window.localStorage.getItem("samarthya-device-key");
        if (e) return e;
        let t = `${crypto.randomUUID()}-${Date.now().toString(36)}`;
        return window.localStorage.setItem("samarthya-device-key", t), t
    }

    function P({
        onClose: e,
        onSubmitted: n
    }) {
        let [r, l] = (0, a.useState)(""), [d, h] = (0, a.useState)(""), [p, u] = (0, a.useState)(""), [x, f] = (0, a.useState)(""), [v, y] = (0, a.useState)(""), [b, k] = (0, a.useState)(!1), [N, w] = (0, a.useState)(null), [R, O] = (0, a.useState)(null), [M, A] = (0, a.useState)(!1), [H, z] = (0, a.useState)(!1);
        async function B(e) {
            e.preventDefault(), y(""), k(!0);
            try {
                let e = I(),
                    t = await fetch("/api/challenges", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            description: r,
                            location: d,
                            category: p,
                            reporterKey: e,
                            website: "",
                            ...R
                        })
                    }),
                    a = await t.json();
                if (!t.ok) return void y(a.error ? ? "Submission failed.");
                if (N && a.challenge ? .id) {
                    let t = await T(N),
                        n = new FormData;
                    n.append("photo", t), n.append("reporterKey", e), (await fetch(`/api/challenges/${a.challenge.id}/photo`, {
                        method: "POST",
                        body: n
                    })).ok || y("The report was saved, but the photo could not be uploaded.")
                }
                f(a.challenge ? .reference ? ? "Submitted"), await n()
            } catch (e) {
                y(e instanceof Error ? e.message : "Could not connect. Check your internet and try again.")
            } finally {
                k(!1)
            }
        }
        return (0, t.jsx)(C.DialogContent, {
            className: "report-dialog",
            children: x ? (0, t.jsxs)("div", {
                className: "success-message",
                children: [(0, t.jsx)("span", {
                    children: (0, t.jsx)(c.CheckCircle2, {})
                }), (0, t.jsx)(C.DialogTitle, {
                    children: "Thank you for speaking up!"
                }), (0, t.jsxs)(C.DialogDescription, {
                    children: ["Your report is safely stored and waiting for admin verification. Reference: ", (0, t.jsx)("strong", {
                        children: x
                    })]
                }), (0, t.jsx)(S.Button, {
                    asChild: !0,
                    variant: "outline",
                    children: (0, t.jsx)("a", {
                        href: "/track",
                        children: "Track this report"
                    })
                }), (0, t.jsx)(S.Button, {
                    onClick: e,
                    children: "Done"
                })]
            }) : (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsxs)(C.DialogHeader, {
                    children: [(0, t.jsx)("span", {
                        className: "dialog-step",
                        children: "QUICK REPORT"
                    }), (0, t.jsx)(C.DialogTitle, {
                        children: "What problem do you see?"
                    }), (0, t.jsx)(C.DialogDescription, {
                        children: "Use your own words. A short and simple description is perfect."
                    })]
                }), (0, t.jsxs)("form", {
                    onSubmit: B,
                    className: "report-form",
                    children: [(0, t.jsxs)("label", {
                        children: ["Describe the problem", (0, t.jsx)("textarea", {
                            value: r,
                            onChange: e => l(e.target.value),
                            minLength: 15,
                            maxLength: 1200,
                            required: !0,
                            placeholder: "Example: Our village hand pump stops working every summer…"
                        })]
                    }), (0, t.jsxs)("button", {
                        type: "button",
                        className: H ? "voice-button active" : "voice-button",
                        onClick: function() {
                            let e = window.SpeechRecognition ? ? window.webkitSpeechRecognition;
                            if (!e) return void y("Voice typing is not supported in this browser. Try Chrome or type the problem.");
                            let t = new e;
                            t.lang = "hi-IN", t.interimResults = !1, z(!0), y(""), t.onresult = e => l(t => `${t}${t?" ":""}${e.results[0][0].transcript}`), t.onerror = () => y("Voice could not be understood. Please try again or type instead."), t.onend = () => z(!1), t.start()
                        },
                        disabled: H,
                        children: [(0, t.jsx)(j, {}), " ", H ? "Listening… speak now" : "Speak in Hindi or English"]
                    }), (0, t.jsxs)("div", {
                        className: "form-row",
                        children: [(0, t.jsxs)("label", {
                            children: ["Where is it happening?", (0, t.jsx)(D.Input, {
                                value: d,
                                onChange: e => h(e.target.value),
                                maxLength: 120,
                                required: !0,
                                placeholder: "Village, block or district"
                            })]
                        }), (0, t.jsxs)("label", {
                            children: ["Type of problem", (0, t.jsxs)(E.Select, {
                                value: p,
                                onValueChange: u,
                                required: !0,
                                children: [(0, t.jsx)(E.SelectTrigger, {
                                    className: "w-full",
                                    children: (0, t.jsx)(E.SelectValue, {
                                        placeholder: "Choose category"
                                    })
                                }), (0, t.jsxs)(E.SelectContent, {
                                    children: [(0, t.jsx)(E.SelectItem, {
                                        value: "Water",
                                        children: "Water"
                                    }), (0, t.jsx)(E.SelectItem, {
                                        value: "Agriculture",
                                        children: "Agriculture"
                                    }), (0, t.jsx)(E.SelectItem, {
                                        value: "Education",
                                        children: "Education"
                                    }), (0, t.jsx)(E.SelectItem, {
                                        value: "Environment",
                                        children: "Environment"
                                    }), (0, t.jsx)(E.SelectItem, {
                                        value: "Health",
                                        children: "Health"
                                    }), (0, t.jsx)(E.SelectItem, {
                                        value: "Other",
                                        children: "Other"
                                    })]
                                })]
                            })]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "report-tools",
                        children: [(0, t.jsxs)("label", {
                            className: "file-tool",
                            children: [(0, t.jsx)(o, {}), (0, t.jsx)("span", {
                                children: N ? N.name : "Add one photo (optional)"
                            }), (0, t.jsx)(D.Input, {
                                type: "file",
                                accept: "image/jpeg,image/png,image/webp",
                                onChange: e => w(e.target.files ? .[0] ? ? null)
                            })]
                        }), (0, t.jsxs)("button", {
                            type: "button",
                            className: R ? "location-tool active" : "location-tool",
                            onClick: function() {
                                navigator.geolocation ? (A(!0), y(""), navigator.geolocation.getCurrentPosition(e => {
                                    O({
                                        latitude: e.coords.latitude,
                                        longitude: e.coords.longitude
                                    }), A(!1)
                                }, () => {
                                    y("Location permission was not granted. You can still type the place."), A(!1)
                                }, {
                                    enableHighAccuracy: !1,
                                    timeout: 1e4
                                })) : y("Location is not supported on this device.")
                            },
                            disabled: M,
                            children: [(0, t.jsx)(m, {}), M ? "Finding…" : R ? "Approximate location added" : "Add approximate location"]
                        })]
                    }), (0, t.jsx)("p", {
                        className: "location-safety",
                        children: "Share the problem area only—not a private home address. Coordinates are rounded before saving."
                    }), (0, t.jsxs)("label", {
                        className: "honeypot",
                        "aria-hidden": "true",
                        children: ["Website", (0, t.jsx)(D.Input, {
                            tabIndex: -1,
                            autoComplete: "off"
                        })]
                    }), v && (0, t.jsx)("p", {
                        className: "form-error",
                        role: "alert",
                        children: v
                    }), (0, t.jsxs)("div", {
                        className: "privacy-note",
                        children: [(0, t.jsx)(i.BadgeCheck, {}), " Do not include phone numbers, passwords, or other private information."]
                    }), (0, t.jsx)(S.Button, {
                        disabled: b || !p,
                        size: "lg",
                        type: "submit",
                        children: b ? (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(g.Loader2, {
                                className: "spin"
                            }), " Saving…"]
                        }) : (0, t.jsxs)(t.Fragment, {
                            children: ["Submit for verification ", (0, t.jsx)(s, {})]
                        })
                    })]
                })]
            })
        })
    }
    async function T(e) {
        if (e.size > 8388608) throw Error("Choose a photo under 8 MB.");
        let t = await createImageBitmap(e),
            a = Math.min(1, 1600 / Math.max(t.width, t.height)),
            n = document.createElement("canvas");
        n.width = Math.max(1, Math.round(t.width * a)), n.height = Math.max(1, Math.round(t.height * a));
        let s = n.getContext("2d");
        if (!s) throw Error("This photo could not be processed.");
        s.drawImage(t, 0, 0, n.width, n.height), t.close();
        let i = await new Promise(e => n.toBlob(e, "image/jpeg", .82));
        if (!i) throw Error("This photo could not be processed.");
        return new File([i], "community-evidence.jpg", {
            type: "image/jpeg"
        })
    }
    e.s(["default", 0, function() {
        let [e, n] = (0, a.useState)(!1), [o, m] = (0, a.useState)(!1), [E, T] = (0, a.useState)(""), [M, A] = (0, a.useState)("All"), [H, z] = (0, a.useState)([]), [B, F] = (0, a.useState)(!0), [_, $] = (0, a.useState)([]), [L, V] = (0, a.useState)(null), [W, U] = (0, a.useState)(!1);
        async function q() {
            F(!0);
            try {
                let e = await fetch("/api/challenges", {
                        cache: "no-store"
                    }),
                    t = await e.json();
                e.ok && z(t.challenges ? ? [])
            } finally {
                F(!1)
            }
        }(0, a.useEffect)(() => {
            q()
        }, []);
        let K = H.length ? H : O,
            Y = (0, a.useMemo)(() => K.filter(e => ("All" === M || e.category === M) && `${e.title} ${e.hi??""} ${e.location} ${e.category}`.toLowerCase().includes(E.toLowerCase())), [K, M, E]),
            G = H.reduce((e, t) => e + t.teams, 0),
            J = H.reduce((e, t) => e + t.supporters, 0);
        async function Z(e) {
            if (e.sample) return void $(t => t.includes(e.id) ? t.filter(t => t !== e.id) : [...t, e.id]);
            V(e.id);
            try {
                let t = await fetch(`/api/challenges/${e.id}/support`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            voterKey: I()
                        })
                    }),
                    a = await t.json();
                t.ok && ($(t => a.supported ? [...t.filter(t => t !== e.id), e.id] : t.filter(t => t !== e.id)), z(t => t.map(t => t.id === e.id ? { ...t,
                    supporters: a.supporters ? ? t.supporters
                } : t)))
            } finally {
                V(null)
            }
        }
        return (0, t.jsxs)("main", {
            children: [(0, t.jsx)("a", {
                className: "skip-link",
                href: "#main-content",
                children: "Skip to main content"
            }), (0, t.jsx)(C.Dialog, {
                open: W,
                onOpenChange: U,
                children: (0, t.jsx)(P, {
                    onClose: () => U(!1),
                    onSubmitted: q
                })
            }), (0, t.jsx)("header", {
                className: "site-header",
                children: (0, t.jsxs)("div", {
                    className: "shell header-inner",
                    children: [(0, t.jsxs)("a", {
                        className: "brand",
                        href: "/",
                        "aria-label": "Samarthya home",
                        children: [(0, t.jsx)("span", {
                            className: "brand-mark",
                            children: (0, t.jsx)(p.HandHeart, {})
                        }), (0, t.jsxs)("span", {
                            children: [(0, t.jsx)("strong", {
                                children: "समर्थ्य"
                            }), (0, t.jsx)("small", {
                                children: "Samarthya"
                            })]
                        })]
                    }), (0, t.jsxs)("nav", {
                        className: o ? "nav-links open" : "nav-links",
                        "aria-label": "Main navigation",
                        children: [(0, t.jsx)("a", {
                            href: "#challenges",
                            children: e ? "चुनौतियाँ" : "Challenges"
                        }), (0, t.jsx)("a", {
                            href: "#how",
                            children: e ? "कैसे काम करता है" : "How it works"
                        }), (0, t.jsx)("a", {
                            href: "/track",
                            children: e ? "मेरी गतिविधि" : "My activity"
                        }), (0, t.jsx)("a", {
                            href: "/help",
                            children: e ? "सहायता" : "Help"
                        }), (0, t.jsxs)("button", {
                            className: "language",
                            onClick: () => n(!e),
                            "aria-pressed": e,
                            children: [(0, t.jsx)(u, {}), " ", e ? "English" : "हिंदी"]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "header-actions",
                        children: [(0, t.jsx)(S.Button, {
                            asChild: !0,
                            variant: "ghost",
                            className: "login-button",
                            children: (0, t.jsx)("a", {
                                href: "/admin",
                                children: "Admin"
                            })
                        }), (0, t.jsxs)(S.Button, {
                            className: "report-top",
                            onClick: () => U(!0),
                            children: [(0, t.jsx)(v, {}), " Report a problem"]
                        }), (0, t.jsx)("button", {
                            className: "menu-button",
                            onClick: () => m(!o),
                            "aria-label": "Toggle menu",
                            "aria-expanded": o,
                            children: o ? (0, t.jsx)(w.X, {}) : (0, t.jsx)(f, {})
                        })]
                    })]
                })
            }), (0, t.jsx)("section", {
                id: "main-content",
                className: "hero",
                children: (0, t.jsxs)("div", {
                    className: "shell hero-grid",
                    children: [(0, t.jsxs)("div", {
                        className: "hero-copy",
                        children: [(0, t.jsxs)("div", {
                            className: "eyebrow",
                            children: [(0, t.jsx)(i.BadgeCheck, {}), " Verified community challenges"]
                        }), (0, t.jsx)("h1", {
                            children: e ? "आपकी समस्या। हमारी सामूहिक शक्ति।" : "Your problem. Our collective strength."
                        }), (0, t.jsx)("p", {
                            children: e ? "नागरिकों की वास्तविक समस्याओं को विद्यार्थियों, विशेषज्ञों और उद्योग के साथ जोड़कर समाधान तक पहुंचाएं।" : "Turn real community problems into practical solutions by connecting citizens with students, experts, and industry."
                        }), (0, t.jsxs)("div", {
                            className: "hero-actions",
                            children: [(0, t.jsxs)(S.Button, {
                                size: "lg",
                                className: "primary-cta",
                                onClick: () => U(!0),
                                children: [(0, t.jsx)(j, {}), " Tell us your problem"]
                            }), (0, t.jsx)(S.Button, {
                                asChild: !0,
                                size: "lg",
                                variant: "outline",
                                className: "secondary-cta",
                                children: (0, t.jsxs)("a", {
                                    href: "#challenges",
                                    children: ["Explore challenges ", (0, t.jsx)(s, {})]
                                })
                            })]
                        }), (0, t.jsxs)("p", {
                            className: "help-note",
                            children: [(0, t.jsx)(c.CheckCircle2, {}), " Simple language · Takes less than 3 minutes"]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "connection-card",
                        "aria-label": "How people collaborate",
                        children: [(0, t.jsxs)("div", {
                            className: "connection-top",
                            children: [(0, t.jsx)("span", {
                                children: "ONE SHARED MISSION"
                            }), (0, t.jsx)("strong", {
                                children: "From local voice to lasting change"
                            })]
                        }), (0, t.jsx)("div", {
                            className: "path-line"
                        }), (0, t.jsxs)("div", {
                            className: "people-grid",
                            children: [(0, t.jsxs)("div", {
                                children: [(0, t.jsx)("span", {
                                    className: "person-icon citizen",
                                    children: (0, t.jsx)(k.Users, {})
                                }), (0, t.jsx)("strong", {
                                    children: "Citizens"
                                }), (0, t.jsx)("small", {
                                    children: "Share needs"
                                })]
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("span", {
                                    className: "person-icon student",
                                    children: (0, t.jsx)(h.GraduationCap, {})
                                }), (0, t.jsx)("strong", {
                                    children: "Universities"
                                }), (0, t.jsx)("small", {
                                    children: "Build solutions"
                                })]
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("span", {
                                    className: "person-icon industry",
                                    children: (0, t.jsx)(l.Building2, {})
                                }), (0, t.jsx)("strong", {
                                    children: "Industry"
                                }), (0, t.jsx)("small", {
                                    children: "Support scale"
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "solution-pill",
                            children: [(0, t.jsx)(c.CheckCircle2, {}), " One measurable solution"]
                        })]
                    })]
                })
            }), (0, t.jsx)("section", {
                className: "trust-strip",
                "aria-label": "Live platform statistics",
                children: (0, t.jsxs)("div", {
                    className: "shell trust-grid",
                    children: [(0, t.jsxs)("div", {
                        children: [(0, t.jsx)("strong", {
                            children: B ? "—" : H.length
                        }), (0, t.jsx)("span", {
                            children: "verified challenges"
                        })]
                    }), (0, t.jsxs)("div", {
                        children: [(0, t.jsx)("strong", {
                            children: B ? "—" : G
                        }), (0, t.jsx)("span", {
                            children: "approved teams"
                        })]
                    }), (0, t.jsxs)("div", {
                        children: [(0, t.jsx)("strong", {
                            children: B ? "—" : J
                        }), (0, t.jsx)("span", {
                            children: "community supports"
                        })]
                    }), (0, t.jsxs)("div", {
                        children: [(0, t.jsx)("strong", {
                            children: "24/7"
                        }), (0, t.jsx)("span", {
                            children: "problem reporting"
                        })]
                    })]
                })
            }), (0, t.jsx)("section", {
                id: "challenges",
                className: "challenges-section",
                children: (0, t.jsxs)("div", {
                    className: "shell",
                    children: [(0, t.jsxs)("div", {
                        className: "section-heading",
                        children: [(0, t.jsxs)("div", {
                            children: [(0, t.jsx)("span", {
                                className: "section-kicker",
                                children: "NEEDS AROUND US"
                            }), (0, t.jsx)("h2", {
                                children: e ? "जहाँ आपकी मदद बदलाव ला सकती है" : "Where your help can make a difference"
                            })]
                        }), (0, t.jsxs)("span", {
                            className: "live-data-badge",
                            children: [(0, t.jsx)("span", {}), " ", H.length ? "Live verified data" : "Showing examples until first approval"]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "filter-bar",
                        children: [(0, t.jsxs)("label", {
                            className: "search-box",
                            children: [(0, t.jsx)(y, {}), (0, t.jsx)("span", {
                                className: "sr-only",
                                children: "Search challenges"
                            }), (0, t.jsx)(D.Input, {
                                value: E,
                                onChange: e => T(e.target.value),
                                placeholder: "Search by need or location…"
                            })]
                        }), (0, t.jsx)("div", {
                            className: "category-list",
                            "aria-label": "Challenge categories",
                            children: R.map(e => (0, t.jsx)("button", {
                                className: M === e ? "active" : "",
                                "aria-pressed": M === e,
                                onClick: () => A(e),
                                children: e
                            }, e))
                        })]
                    }), (0, t.jsx)("div", {
                        className: "challenge-grid",
                        children: Y.map(a => {
                            var n;
                            let {
                                Icon: s,
                                accent: i
                            } = "Water" === (n = a.category) ? {
                                Icon: N,
                                accent: "water"
                            } : "Agriculture" === n || "Environment" === n ? {
                                Icon: b,
                                accent: "farm"
                            } : {
                                Icon: r,
                                accent: "learn"
                            }, l = _.includes(a.id);
                            return (0, t.jsxs)("article", {
                                className: "challenge-card",
                                children: [(0, t.jsxs)("div", {
                                    className: `challenge-visual ${i}`,
                                    children: [a.hasPhoto && !a.sample ? (0, t.jsx)("img", {
                                        src: `/api/challenges/${a.id}/photo`,
                                        alt: "Community evidence"
                                    }) : (0, t.jsx)("span", {
                                        className: "challenge-icon",
                                        children: (0, t.jsx)(s, {})
                                    }), (0, t.jsxs)("span", {
                                        className: "priority",
                                        children: [(0, t.jsx)("span", {}), " ", a.urgency]
                                    }), (0, t.jsx)("span", {
                                        className: "category-tag",
                                        children: a.category
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "challenge-body",
                                    children: [(0, t.jsxs)("div", {
                                        className: "location",
                                        children: [(0, t.jsx)(x.MapPin, {}), " ", a.location]
                                    }), (0, t.jsx)("h3", {
                                        children: e && a.hi ? a.hi : a.title
                                    }), (0, t.jsx)("p", {
                                        children: a.description
                                    }), (0, t.jsxs)("div", {
                                        className: "challenge-meta",
                                        children: [(0, t.jsxs)("span", {
                                            children: [(0, t.jsx)(k.Users, {}), " ", a.teams, " teams working"]
                                        }), (0, t.jsxs)("span", {
                                            children: [a.supporters + (a.sample && l ? 1 : 0), " support this"]
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "card-actions",
                                        children: [(0, t.jsxs)("button", {
                                            disabled: L === a.id,
                                            className: l ? "support active" : "support",
                                            onClick: () => Z(a),
                                            children: [L === a.id ? (0, t.jsx)(g.Loader2, {
                                                className: "spin"
                                            }) : (0, t.jsx)(p.HandHeart, {}), " ", l ? "Supported" : "I support this"]
                                        }), a.sample ? (0, t.jsx)("button", {
                                            className: "open-challenge",
                                            disabled: !0,
                                            "aria-label": "Example challenge",
                                            children: (0, t.jsx)(d, {})
                                        }) : (0, t.jsx)("a", {
                                            className: "open-challenge",
                                            href: `/challenges/${a.id}`,
                                            "aria-label": `Open ${a.title}`,
                                            children: (0, t.jsx)(d, {})
                                        })]
                                    })]
                                })]
                            }, a.id)
                        })
                    }), !B && 0 === Y.length && (0, t.jsxs)("div", {
                        className: "empty-state",
                        children: [(0, t.jsx)(y, {}), (0, t.jsx)("h3", {
                            children: "No challenges found"
                        }), (0, t.jsx)("p", {
                            children: "Try another word or category."
                        })]
                    })]
                })
            }), (0, t.jsx)("section", {
                id: "how",
                className: "how-section",
                children: (0, t.jsxs)("div", {
                    className: "shell",
                    children: [(0, t.jsxs)("div", {
                        className: "center-heading",
                        children: [(0, t.jsx)("span", {
                            className: "section-kicker",
                            children: "SIMPLE BY DESIGN"
                        }), (0, t.jsx)("h2", {
                            children: "One problem. Three steps. Real progress."
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "steps-grid",
                        children: [(0, t.jsxs)("article", {
                            children: [(0, t.jsx)("span", {
                                children: "01"
                            }), (0, t.jsx)("div", {
                                className: "step-icon",
                                children: (0, t.jsx)(j, {})
                            }), (0, t.jsx)("h3", {
                                children: "Share the problem"
                            }), (0, t.jsx)("p", {
                                children: "Speak or type in simple language. Your report is saved privately for review."
                            })]
                        }), (0, t.jsxs)("article", {
                            children: [(0, t.jsx)("span", {
                                children: "02"
                            }), (0, t.jsx)("div", {
                                className: "step-icon",
                                children: (0, t.jsx)(h.GraduationCap, {})
                            }), (0, t.jsx)("h3", {
                                children: "Admin verifies it"
                            }), (0, t.jsx)("p", {
                                children: "Only genuine, useful challenges are approved and shown publicly."
                            })]
                        }), (0, t.jsxs)("article", {
                            children: [(0, t.jsx)("span", {
                                children: "03"
                            }), (0, t.jsx)("div", {
                                className: "step-icon",
                                children: (0, t.jsx)(l.Building2, {})
                            }), (0, t.jsx)("h3", {
                                children: "Build and scale"
                            }), (0, t.jsx)("p", {
                                children: "Partners mentor, provide resources, test solutions, and track impact."
                            })]
                        })]
                    })]
                })
            }), (0, t.jsx)("section", {
                id: "impact",
                className: "impact-banner",
                children: (0, t.jsxs)("div", {
                    className: "shell impact-inner",
                    children: [(0, t.jsxs)("div", {
                        children: [(0, t.jsx)("span", {
                            children: "BUILT FOR EVERY VOICE"
                        }), (0, t.jsx)("h2", {
                            children: "A stronger Jharkhand starts with listening."
                        }), (0, t.jsx)("p", {
                            children: "No technical knowledge needed. Tell us what your community needs and we’ll help structure it."
                        })]
                    }), (0, t.jsxs)(S.Button, {
                        size: "lg",
                        onClick: () => U(!0),
                        children: ["Report your first problem ", (0, t.jsx)(s, {})]
                    })]
                })
            }), (0, t.jsx)("footer", {
                children: (0, t.jsxs)("div", {
                    className: "shell footer-inner",
                    children: [(0, t.jsxs)("div", {
                        className: "brand footer-brand",
                        children: [(0, t.jsx)("span", {
                            className: "brand-mark",
                            children: (0, t.jsx)(p.HandHeart, {})
                        }), (0, t.jsxs)("span", {
                            children: [(0, t.jsx)("strong", {
                                children: "समर्थ्य"
                            }), (0, t.jsx)("small", {
                                children: "Ideas into impact"
                            })]
                        })]
                    }), (0, t.jsx)("p", {
                        children: "A collaborative platform for citizens, universities, industry, and government."
                    }), (0, t.jsxs)("nav", {
                        "aria-label": "Footer navigation",
                        children: [(0, t.jsx)("a", {
                            href: "/track",
                            children: "My activity"
                        }), (0, t.jsx)("a", {
                            href: "/help",
                            children: "Help"
                        }), (0, t.jsx)("a", {
                            href: "/privacy",
                            children: "Privacy"
                        }), (0, t.jsx)("a", {
                            href: "/admin",
                            children: "Admin"
                        })]
                    }), (0, t.jsx)("span", {
                        children: "SIH 2026 · Smart Education"
                    })]
                })
            })]
        })
    }], 31713)
}]);