(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".picker-wrap[data-v-ef159517]{width:100%;height:300px;display:flex;flex-direction:column}.picker-wrap .container-box[data-v-ef159517]{flex:1;display:flex;overflow:hidden}.picker-wrap .container-box .picker-spin[data-v-ef159517]{flex:1}.picker-wrap .btn-wrap[data-v-ef159517]{width:calc(100% + 30px);position:relative;left:-15px;text-align:right;box-sizing:border-box;padding:8px 15px 0 0;border-top:solid 1px #e4e7ed}.base-wrap[data-v-5ab886c5]{width:100%;height:100%;display:flex;flex-direction:column;box-sizing:border-box;padding-bottom:12px}.base-wrap .base-title[data-v-5ab886c5]{margin-bottom:5px;text-align:center;font-size:14px;line-height:30px;color:var(--el-text-color-regular)}.base-wrap .base-content[data-v-5ab886c5]{flex:1;overflow:hidden;box-sizing:border-box;border-radius:2px;border:1px solid var(--el-border-color-light);display:flex}.base-wrap .base-content .scroll-wrap[data-v-5ab886c5]{flex:1;text-align:center}.time-item-wrap[data-v-5ab886c5]{box-sizing:border-box;padding:40px 0}.hour-item[data-v-5ab886c5]{height:32px;line-height:32px;font-size:12px;color:var(--el-text-color-regular);cursor:pointer;transition:.3s linear}.hour-item[data-v-5ab886c5]:hover{background:var(--el-fill-color-light)}.hour-item.active[data-v-5ab886c5]{font-size:15px;color:var(--el-color-primary);font-weight:700;background:var(--el-fill-color-light);position:sticky;top:0;bottom:0}.hour-item.disabled[data-v-5ab886c5]{color:#cbcbcb;cursor:not-allowed}.base-picker-wrap[data-v-277d6d59]{display:flex;width:100%;height:100%}.base-picker-wrap .picker-spin-container[data-v-277d6d59]{flex:1;height:100%}.base-picker-wrap .right-pannel[data-v-277d6d59]{margin-left:15px}.el-range-input[data-v-277d6d59]{flex:1}")),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { openBlock as S, createElementBlock as $, createElementVNode as p, renderSlot as se, defineComponent as J, computed as f, resolveComponent as X, toDisplayString as j, createVNode as V, withCtx as C, Fragment as de, renderList as ce, unref as o, normalizeClass as G, ref as I, watch as ge, createBlock as he, mergeProps as _e, isRef as z, createCommentVNode as W, withModifiers as He, createTextVNode as pe } from "vue";
import { ElIcon as me } from "element-plus";
const Y = (H, y) => {
  const e = H.__vccOpts || H;
  for (const [s, i] of y)
    e[s] = i;
  return e;
}, be = {}, Me = { class: "picker-wrap" }, Se = { class: "container-box" }, ke = { class: "picker-spin" }, Ve = { class: "btn-wrap" };
function $e(H, y) {
  return S(), $("div", Me, [
    p("div", Se, [
      p("div", ke, [
        se(H.$slots, "default", {}, void 0, !0)
      ])
    ]),
    p("div", Ve, [
      se(H.$slots, "btn", {}, void 0, !0)
    ])
  ]);
}
const we = /* @__PURE__ */ Y(be, [["render", $e], ["__scopeId", "data-v-ef159517"]]), Ce = { class: "base-wrap" }, ye = { class: "base-title" }, Te = { class: "base-content" }, Re = { class: "scroll-wrap" }, Ee = { class: "time-item-wrap" }, Be = ["onClick"], Pe = { class: "scroll-wrap" }, De = { class: "time-item-wrap" }, Le = ["onClick"], Ue = /* @__PURE__ */ J({
  __name: "picker-base",
  props: {
    title: {},
    startHour: { default: 0 },
    endHour: { default: 23 },
    hourStep: { default: 1 },
    startMinute: { default: 0 },
    endMinute: { default: 59 },
    minuteStep: {},
    currentHour: {},
    currentMinute: {},
    minTime: {},
    common: { type: Boolean },
    timeSeparator: {},
    maxHour: { default: "24" }
  },
  emits: [
    "update:currentHour",
    "update:currentMinute",
    "changeHour",
    "changeMinute"
  ],
  setup(H, { emit: y }) {
    const e = H;
    let s = e.timeSeparator || ":", i = f(() => parseFloat(e.maxHour) < 10 ? "0" + e.maxHour : e.maxHour), T = f(() => {
      let u = [];
      for (let r = e.startHour; r <= e.endHour; r += e.hourStep)
        u.push(r < 10 ? "0" + r : r + "");
      return u;
    }), N = f(() => {
      if (e.currentHour == i.value)
        return ["00"];
      let u = [];
      for (let r = e.startMinute; r <= e.endMinute; r += e.minuteStep || 1)
        u.push(r < 10 ? "0" + r : r + "");
      return u;
    }), K = f(() => N.value[N.value.length - 1]), E = f(() => (u) => {
      var a, k, P, b, D, L, M, R, U;
      if (!e.minTime || (((P = (k = (a = e.minTime) == null ? void 0 : a.split) == null ? void 0 : k.call(a, s)) == null ? void 0 : P.length) ?? 0) === 0)
        return !1;
      let r = (L = (D = (b = e.minTime) == null ? void 0 : b.split) == null ? void 0 : D.call(b, s)) == null ? void 0 : L[0], d = (U = (R = (M = e.minTime) == null ? void 0 : M.split) == null ? void 0 : R.call(M, s)) == null ? void 0 : U[1];
      return r && d && !e.common ? `${u}${s}${K.value}` <= e.minTime : u < r;
    }), B = f(() => (u) => {
      var a, k, P, b, D, L, M, R, U;
      if (!e.minTime || !e.currentHour || (((P = (k = (a = e.minTime) == null ? void 0 : a.split) == null ? void 0 : k.call(a, s)) == null ? void 0 : P.length) ?? 0) === 0)
        return !1;
      let r = (L = (D = (b = e.minTime) == null ? void 0 : b.split) == null ? void 0 : D.call(b, s)) == null ? void 0 : L[0];
      return !((U = (R = (M = e.minTime) == null ? void 0 : M.split) == null ? void 0 : R.call(M, s)) == null ? void 0 : U[1]) || !r ? !1 : e.common ? e.minTime > `${e.currentHour}${s}${u}` : e.minTime >= `${e.currentHour}${s}${u}`;
    });
    const g = (u) => {
      w("update:currentHour", u), u == i && w("update:currentMinute", "00"), w("changeHour", u);
    }, h = (u) => {
      w("update:currentMinute", u), w("changeMinute", u);
    }, w = y;
    return (u, r) => {
      const d = X("el-scrollbar");
      return S(), $("div", Ce, [
        p("div", ye, j(u.title), 1),
        p("div", Te, [
          p("div", Re, [
            V(d, { height: "100%" }, {
              default: C(() => [
                p("div", Ee, [
                  (S(!0), $(de, null, ce(o(T), (a) => (S(), $("div", {
                    class: G(["hour-item", {
                      active: a == u.currentHour,
                      disabled: o(E)(a)
                    }]),
                    onClick: (k) => o(E)(a) ? "" : g(a)
                  }, j(a), 11, Be))), 256))
                ])
              ]),
              _: 1
            })
          ]),
          p("div", Pe, [
            V(d, { height: "100%" }, {
              default: C(() => [
                p("div", De, [
                  (S(!0), $(de, null, ce(o(N), (a) => (S(), $("div", {
                    class: G(["hour-item", {
                      active: a == u.currentMinute,
                      disabled: o(B)(a)
                    }]),
                    onClick: (k) => o(B)(a) ? "" : h(a)
                  }, j(a), 11, Le))), 256))
                ])
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
}), ve = /* @__PURE__ */ Y(Ue, [["__scopeId", "data-v-5ab886c5"]]);
/*! Element Plus Icons Vue v2.3.1 */
var ze = /* @__PURE__ */ J({
  name: "CircleClose",
  __name: "circle-close",
  setup(H) {
    return (y, e) => (S(), $("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      p("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      p("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), Ie = ze, Ne = /* @__PURE__ */ J({
  name: "Clock",
  __name: "clock",
  setup(H) {
    return (y, e) => (S(), $("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      p("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      p("path", {
        fill: "currentColor",
        d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      }),
      p("path", {
        fill: "currentColor",
        d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32"
      })
    ]));
  }
}), qe = Ne;
const Fe = ["placeholder", "value"], Ae = {
  key: 0,
  class: "el-range-separator"
}, Oe = ["placeholder", "value"], je = { class: "base-picker-wrap" }, Ge = { class: "picker-spin-container" }, Je = {
  key: 0,
  class: "picker-spin-container right-pannel"
}, Ke = /* @__PURE__ */ J({
  __name: "index",
  props: {
    modelValue: {},
    isRange: { type: Boolean },
    common: { type: Boolean },
    beginStartHour: { default: 0 },
    beginEndHour: { default: 23 },
    beginStartMinute: { default: 0 },
    beginEndMinute: { default: 59 },
    endStartHour: { default: 0 },
    endStartMinute: { default: 0 },
    endEndHour: { default: 23 },
    endEndMinute: { default: 59 },
    hourStep: { default: 1 },
    minuteStep: { default: 1 },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    placeholder: { default: "请选择" },
    startPlaceholder: { default: "开始时间" },
    endPlaceholder: { default: "结束时间" },
    rangeSeparator: { default: "-" },
    timeSeparator: { default: ":" },
    persistent: { type: Boolean, default: !1 },
    transition: { default: "el-zoom-in-top" }
  },
  emits: ["update:modelValue"],
  setup(H, { emit: y }) {
    const e = H;
    let s = I(!1), i = e.timeSeparator;
    ge(
      () => e.modelValue,
      () => {
        var t, n, m, v, l, c, _, Z, x, q, ee, te, le, F, ne, re, A, ue, ae, O, ie, oe;
        e.isRange ? (g.value = ((v = (m = (n = (t = e.modelValue) == null ? void 0 : t[0]) == null ? void 0 : n.split) == null ? void 0 : m.call(n, i)) == null ? void 0 : v[0]) ?? null, h.value = ((Z = (_ = (c = (l = e.modelValue) == null ? void 0 : l[0]) == null ? void 0 : c.split) == null ? void 0 : _.call(c, i)) == null ? void 0 : Z[1]) ?? null, r.value = ((te = (ee = (q = (x = e.modelValue) == null ? void 0 : x[1]) == null ? void 0 : q.split) == null ? void 0 : ee.call(q, i)) == null ? void 0 : te[0]) ?? null, d.value = ((re = (ne = (F = (le = e.modelValue) == null ? void 0 : le[1]) == null ? void 0 : F.split) == null ? void 0 : ne.call(F, i)) == null ? void 0 : re[1]) ?? null) : (g.value = ((ae = (ue = (A = e.modelValue) == null ? void 0 : A.split) == null ? void 0 : ue.call(A, i)) == null ? void 0 : ae[0]) ?? null, h.value = ((oe = (ie = (O = e.modelValue) == null ? void 0 : O.split) == null ? void 0 : ie.call(O, i)) == null ? void 0 : oe[1]) ?? null, r.value = null, d.value = null);
      }
    );
    let T = I(!1), N = f(() => {
      var t;
      return e.isRange ? (t = e.modelValue) == null ? void 0 : t[0] : e.modelValue;
    }), K = f(() => {
      var t;
      return e.isRange ? (t = e.modelValue) == null ? void 0 : t[1] : "";
    }), E = I(null), B = I(null), g = f({
      get() {
        var t, n, m, v, l, c, _;
        return E.value !== null ? E.value : e.isRange ? ((v = (m = (n = (t = e.modelValue) == null ? void 0 : t[0]) == null ? void 0 : n.split) == null ? void 0 : m.call(n, i)) == null ? void 0 : v[0]) ?? "" : ((_ = (c = (l = e.modelValue) == null ? void 0 : l.split) == null ? void 0 : c.call(l, i)) == null ? void 0 : _[0]) ?? "";
      },
      set(t) {
        E.value = t;
      }
    }), h = f({
      get() {
        var t, n, m, v, l, c, _;
        return B.value !== null ? B.value : e.isRange ? ((v = (m = (n = (t = e.modelValue) == null ? void 0 : t[0]) == null ? void 0 : n.split) == null ? void 0 : m.call(n, i)) == null ? void 0 : v[1]) ?? "" : ((_ = (c = (l = e.modelValue) == null ? void 0 : l.split) == null ? void 0 : c.call(l, i)) == null ? void 0 : _[1]) ?? "";
      },
      set(t) {
        B.value = t;
      }
    }), w = I(null), u = I(null), r = f({
      get() {
        var t, n, m, v, l, c, _;
        return w.value !== null ? w.value : e.isRange ? ((v = (m = (n = (t = e.modelValue) == null ? void 0 : t[1]) == null ? void 0 : n.split) == null ? void 0 : m.call(n, i)) == null ? void 0 : v[0]) ?? "" : ((_ = (c = (l = e.modelValue) == null ? void 0 : l.split) == null ? void 0 : c.call(l, i)) == null ? void 0 : _[0]) ?? "";
      },
      set(t) {
        w.value = t;
      }
    }), d = f({
      get() {
        var t, n, m, v, l, c, _;
        return u.value !== null ? u.value : e.isRange ? ((v = (m = (n = (t = e.modelValue) == null ? void 0 : t[1]) == null ? void 0 : n.split) == null ? void 0 : m.call(n, i)) == null ? void 0 : v[1]) ?? "" : ((_ = (c = (l = e.modelValue) == null ? void 0 : l.split) == null ? void 0 : c.call(l, i)) == null ? void 0 : _[1]) ?? "";
      },
      set(t) {
        u.value = t;
      }
    }), a = f(() => `${g.value}${i}${h.value}`), k = f(() => `${r.value}${i}${d.value}`), P = f(() => e.isRange ? g.value && r.value && h.value && d.value : g.value && h.value);
    const b = () => {
      if (e.isRange && r.value) {
        if (e.common) {
          if (g.value > r.value) {
            if (r.value = "", !h.value)
              return;
            d.value = "";
          }
        } else if (g.value >= r.value) {
          if (r.value = "", !h.value)
            return;
          d.value = "";
        }
      }
    }, D = () => {
      b();
    }, L = () => {
      !g.value || !h.value || !r.value || !d.value || (e.common ? a.value >= k.value && (d.value = "") : a.value > k.value && (d.value = ""));
    }, M = () => {
      R(), Q("update:modelValue", e.isRange ? [] : "");
    }, R = () => {
      E.value = null, B.value = null, w.value = null, u.value = null;
    }, U = () => {
      T.value = !1, e.isRange ? Q("update:modelValue", [a.value, k.value]) : Q("update:modelValue", a.value), R();
    }, Q = y;
    return (t, n) => {
      const m = X("el-button"), v = X("el-popover");
      return S(), he(v, _e({
        trigger: "click",
        disabled: t.disabled || t.readonly,
        visible: o(T),
        "onUpdate:visible": n[6] || (n[6] = (l) => z(T) ? T.value = l : T = l),
        width: t.isRange ? 350 : 220,
        "hide-after": 0,
        persistent: t.persistent,
        transition: t.transition
      }, t.$attrs), {
        reference: C(() => {
          var l;
          return [
            p("div", {
              class: G(["el-date-editor el-date-editor el-date-editor--timerange el-input__wrapper el-range-editor", { "is-active": o(T), "is-disabled": t.disabled }]),
              onMouseenter: n[0] || (n[0] = (c) => z(s) ? s.value = !0 : s = !0),
              onMouseleave: n[1] || (n[1] = (c) => z(s) ? s.value = !1 : s = !1)
            }, [
              V(o(me), { class: "el-input__icon el-range__icon" }, {
                default: C(() => [
                  V(o(qe))
                ]),
                _: 1
              }),
              p("input", {
                placeholder: t.isRange ? t.startPlaceholder : t.placeholder,
                readonly: "",
                class: "el-range-input",
                value: o(N)
              }, null, 8, Fe),
              t.isRange ? (S(), $("span", Ae, j(t.rangeSeparator), 1)) : W("", !0),
              t.isRange ? (S(), $("input", {
                key: 1,
                placeholder: t.endPlaceholder,
                readonly: "",
                class: "el-range-input",
                value: o(K)
              }, null, 8, Oe)) : W("", !0),
              V(o(me), {
                onClick: He(M, ["stop"]),
                class: G(["el-input__icon el-range__close-icon", {
                  "el-range__close-icon--hidden": !(t.modelValue && ((l = t.modelValue) == null ? void 0 : l.length) !== 0 && o(s) && !t.disabled && !t.readonly)
                }])
              }, {
                default: C(() => [
                  V(o(Ie))
                ]),
                _: 1
              }, 8, ["class"])
            ], 34)
          ];
        }),
        default: C(() => [
          V(we, null, {
            btn: C(() => [
              V(m, {
                onClick: M,
                bg: "",
                text: "",
                size: "small"
              }, {
                default: C(() => [
                  pe("清除")
                ]),
                _: 1
              }),
              V(m, {
                disabled: !o(P),
                bg: "",
                type: "primary",
                text: "",
                size: "small",
                onClick: U
              }, {
                default: C(() => [
                  pe("确认")
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            default: C(() => [
              p("div", je, [
                p("div", Ge, [
                  V(ve, {
                    key: "startTime",
                    currentHour: o(g),
                    "onUpdate:currentHour": n[2] || (n[2] = (l) => z(g) ? g.value = l : g = l),
                    currentMinute: o(h),
                    "onUpdate:currentMinute": n[3] || (n[3] = (l) => z(h) ? h.value = l : h = l),
                    "start-hour": t.beginStartHour,
                    "end-hour": t.beginEndHour,
                    "end-minute": t.beginEndMinute,
                    minuteStep: t.minuteStep,
                    hourStep: t.hourStep,
                    title: "开始时间",
                    onChangeHour: b,
                    onChangeMinute: D
                  }, null, 8, ["currentHour", "currentMinute", "start-hour", "end-hour", "end-minute", "minuteStep", "hourStep"])
                ]),
                t.isRange ? (S(), $("div", Je, [
                  V(ve, {
                    key: "endTime",
                    "start-hour": t.endStartHour,
                    "end-hour": t.endEndHour,
                    "end-minute": t.endEndMinute,
                    minuteStep: t.minuteStep,
                    hourStep: t.hourStep,
                    minTime: o(a),
                    currentHour: o(r),
                    "onUpdate:currentHour": n[4] || (n[4] = (l) => z(r) ? r.value = l : r = l),
                    currentMinute: o(d),
                    "onUpdate:currentMinute": n[5] || (n[5] = (l) => z(d) ? d.value = l : d = l),
                    title: "结束时间",
                    common: t.common,
                    onChangeHour: L
                  }, null, 8, ["start-hour", "end-hour", "end-minute", "minuteStep", "hourStep", "minTime", "currentHour", "currentMinute", "common"])
                ])) : W("", !0)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 16, ["disabled", "visible", "width", "persistent", "transition"]);
    };
  }
}), fe = /* @__PURE__ */ Y(Ke, [["__scopeId", "data-v-277d6d59"]]);
fe.install = (H) => {
  H.component("timeMomentPicker", fe);
};
export {
  fe as default,
  fe as timeMomentPicker
};
