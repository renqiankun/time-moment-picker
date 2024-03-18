(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".picker-wrap[data-v-ef159517]{width:100%;height:300px;display:flex;flex-direction:column}.picker-wrap .container-box[data-v-ef159517]{flex:1;display:flex;overflow:hidden}.picker-wrap .container-box .picker-spin[data-v-ef159517]{flex:1}.picker-wrap .btn-wrap[data-v-ef159517]{width:calc(100% + 30px);position:relative;left:-15px;text-align:right;box-sizing:border-box;padding:8px 15px 0 0;border-top:solid 1px #e4e7ed}.base-wrap[data-v-5ab886c5]{width:100%;height:100%;display:flex;flex-direction:column;box-sizing:border-box;padding-bottom:12px}.base-wrap .base-title[data-v-5ab886c5]{margin-bottom:5px;text-align:center;font-size:14px;line-height:30px;color:var(--el-text-color-regular)}.base-wrap .base-content[data-v-5ab886c5]{flex:1;overflow:hidden;box-sizing:border-box;border-radius:2px;border:1px solid var(--el-border-color-light);display:flex}.base-wrap .base-content .scroll-wrap[data-v-5ab886c5]{flex:1;text-align:center}.time-item-wrap[data-v-5ab886c5]{box-sizing:border-box;padding:40px 0}.hour-item[data-v-5ab886c5]{height:32px;line-height:32px;font-size:12px;color:var(--el-text-color-regular);cursor:pointer;transition:.3s linear}.hour-item[data-v-5ab886c5]:hover{background:var(--el-fill-color-light)}.hour-item.active[data-v-5ab886c5]{font-size:15px;color:var(--el-color-primary);font-weight:700;background:var(--el-fill-color-light);position:sticky;top:0;bottom:0}.hour-item.disabled[data-v-5ab886c5]{color:#cbcbcb;cursor:not-allowed}.base-picker-wrap[data-v-c3124ecb]{display:flex;width:100%;height:100%}.base-picker-wrap .picker-spin-container[data-v-c3124ecb]{flex:1;height:100%}.base-picker-wrap .right-pannel[data-v-c3124ecb]{margin-left:15px}.el-range-input[data-v-c3124ecb]{flex:1}")),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { openBlock as y, createElementBlock as R, createElementVNode as b, renderSlot as oe, defineComponent as fe, computed as f, resolveComponent as W, toDisplayString as q, createVNode as k, withCtx as T, Fragment as se, renderList as de, unref as o, normalizeClass as G, ref as N, watch as he, createBlock as He, mergeProps as be, isRef as U, createCommentVNode as Q, withModifiers as _e, createTextVNode as ce } from "vue";
import { useFormItem as Me, ElIcon as pe } from "element-plus";
import { Clock as Se, CircleClose as $e } from "@element-plus/icons-vue";
const X = (M, z) => {
  const u = M.__vccOpts || M;
  for (const [t, _] of z)
    u[t] = _;
  return u;
}, ke = {}, Ve = { class: "picker-wrap" }, Te = { class: "container-box" }, ye = { class: "picker-spin" }, Ce = { class: "btn-wrap" };
function Re(M, z) {
  return y(), R("div", Ve, [
    b("div", Te, [
      b("div", ye, [
        oe(M.$slots, "default", {}, void 0, !0)
      ])
    ]),
    b("div", Ce, [
      oe(M.$slots, "btn", {}, void 0, !0)
    ])
  ]);
}
const Ee = /* @__PURE__ */ X(ke, [["render", Re], ["__scopeId", "data-v-ef159517"]]), we = { class: "base-wrap" }, Be = { class: "base-title" }, Pe = { class: "base-content" }, De = { class: "scroll-wrap" }, Ue = { class: "time-item-wrap" }, ze = ["onClick"], Ie = { class: "scroll-wrap" }, Ne = { class: "time-item-wrap" }, Fe = ["onClick"], Le = /* @__PURE__ */ fe({
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
  setup(M, { emit: z }) {
    const u = M;
    let t = u.timeSeparator || ":", _ = f(() => parseFloat(u.maxHour) < 10 ? "0" + u.maxHour : u.maxHour), d = f(() => {
      let a = [];
      for (let i = u.startHour; i <= u.endHour; i += u.hourStep)
        a.push(i < 10 ? "0" + i : i + "");
      return a;
    }), V = f(() => {
      if (u.currentHour == _.value)
        return ["00"];
      let a = [];
      for (let i = u.startMinute; i <= u.endMinute; i += u.minuteStep || 1)
        a.push(i < 10 ? "0" + i : i + "");
      return a;
    }), J = f(() => V.value[V.value.length - 1]), F = f(() => (a) => {
      var r, H, C, S, E, D, $, w, B;
      if (!u.minTime || (((C = (H = (r = u.minTime) == null ? void 0 : r.split) == null ? void 0 : H.call(r, t)) == null ? void 0 : C.length) ?? 0) === 0)
        return !1;
      let i = (D = (E = (S = u.minTime) == null ? void 0 : S.split) == null ? void 0 : E.call(S, t)) == null ? void 0 : D[0], s = (B = (w = ($ = u.minTime) == null ? void 0 : $.split) == null ? void 0 : w.call($, t)) == null ? void 0 : B[1];
      return i && s && !u.common ? `${a}${t}${J.value}` <= u.minTime : a < i;
    }), P = f(() => (a) => {
      var r, H, C, S, E, D, $, w, B;
      if (!u.minTime || !u.currentHour || (((C = (H = (r = u.minTime) == null ? void 0 : r.split) == null ? void 0 : H.call(r, t)) == null ? void 0 : C.length) ?? 0) === 0)
        return !1;
      let i = (D = (E = (S = u.minTime) == null ? void 0 : S.split) == null ? void 0 : E.call(S, t)) == null ? void 0 : D[0];
      return !((B = (w = ($ = u.minTime) == null ? void 0 : $.split) == null ? void 0 : w.call($, t)) == null ? void 0 : B[1]) || !i ? !1 : u.common ? u.minTime > `${u.currentHour}${t}${a}` : u.minTime >= `${u.currentHour}${t}${a}`;
    });
    const I = (a) => {
      c("update:currentHour", a), a == _ && c("update:currentMinute", "00"), c("changeHour", a);
    }, g = (a) => {
      c("update:currentMinute", a), c("changeMinute", a);
    }, c = z;
    return (a, i) => {
      const s = W("el-scrollbar");
      return y(), R("div", we, [
        b("div", Be, q(a.title), 1),
        b("div", Pe, [
          b("div", De, [
            k(s, { height: "100%" }, {
              default: T(() => [
                b("div", Ue, [
                  (y(!0), R(se, null, de(o(d), (r) => (y(), R("div", {
                    class: G(["hour-item", {
                      active: r == a.currentHour,
                      disabled: o(F)(r)
                    }]),
                    onClick: (H) => o(F)(r) ? "" : I(r)
                  }, q(r), 11, ze))), 256))
                ])
              ]),
              _: 1
            })
          ]),
          b("div", Ie, [
            k(s, { height: "100%" }, {
              default: T(() => [
                b("div", Ne, [
                  (y(!0), R(se, null, de(o(V), (r) => (y(), R("div", {
                    class: G(["hour-item", {
                      active: r == a.currentMinute,
                      disabled: o(P)(r)
                    }]),
                    onClick: (H) => o(P)(r) ? "" : g(r)
                  }, q(r), 11, Fe))), 256))
                ])
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
}), me = /* @__PURE__ */ X(Le, [["__scopeId", "data-v-5ab886c5"]]), Ae = ["placeholder", "value"], Oe = {
  key: 0,
  class: "el-range-separator"
}, je = ["placeholder", "value"], qe = { class: "base-picker-wrap" }, Ge = { class: "picker-spin-container" }, Je = {
  key: 0,
  class: "picker-spin-container right-pannel"
}, Ke = /* @__PURE__ */ fe({
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
  emits: ["update:modelValue", "change"],
  setup(M, { emit: z }) {
    const { formItem: u } = Me(), t = M;
    let _ = N(!1), d = t.timeSeparator;
    he(
      () => t.modelValue,
      () => {
        var e, l, m, v, n, p, h, Y, Z, L, x, ee, te, A, ne, le, O, re, ue, j, ae, ie;
        t.isRange ? (g.value = ((v = (m = (l = (e = t.modelValue) == null ? void 0 : e[0]) == null ? void 0 : l.split) == null ? void 0 : m.call(l, d)) == null ? void 0 : v[0]) ?? null, c.value = ((Y = (h = (p = (n = t.modelValue) == null ? void 0 : n[0]) == null ? void 0 : p.split) == null ? void 0 : h.call(p, d)) == null ? void 0 : Y[1]) ?? null, s.value = ((ee = (x = (L = (Z = t.modelValue) == null ? void 0 : Z[1]) == null ? void 0 : L.split) == null ? void 0 : x.call(L, d)) == null ? void 0 : ee[0]) ?? null, r.value = ((le = (ne = (A = (te = t.modelValue) == null ? void 0 : te[1]) == null ? void 0 : A.split) == null ? void 0 : ne.call(A, d)) == null ? void 0 : le[1]) ?? null) : (g.value = ((ue = (re = (O = t.modelValue) == null ? void 0 : O.split) == null ? void 0 : re.call(O, d)) == null ? void 0 : ue[0]) ?? null, c.value = ((ie = (ae = (j = t.modelValue) == null ? void 0 : j.split) == null ? void 0 : ae.call(j, d)) == null ? void 0 : ie[1]) ?? null, s.value = null, r.value = null), u == null || u.validate("change");
      }
    );
    let V = N(!1), J = f(() => {
      var e;
      return t.isRange ? (e = t.modelValue) == null ? void 0 : e[0] : t.modelValue;
    }), F = f(() => {
      var e;
      return t.isRange ? (e = t.modelValue) == null ? void 0 : e[1] : "";
    }), P = N(null), I = N(null), g = f({
      get() {
        var e, l, m, v, n, p, h;
        return P.value !== null ? P.value : t.isRange ? ((v = (m = (l = (e = t.modelValue) == null ? void 0 : e[0]) == null ? void 0 : l.split) == null ? void 0 : m.call(l, d)) == null ? void 0 : v[0]) ?? "" : ((h = (p = (n = t.modelValue) == null ? void 0 : n.split) == null ? void 0 : p.call(n, d)) == null ? void 0 : h[0]) ?? "";
      },
      set(e) {
        P.value = e;
      }
    }), c = f({
      get() {
        var e, l, m, v, n, p, h;
        return I.value !== null ? I.value : t.isRange ? ((v = (m = (l = (e = t.modelValue) == null ? void 0 : e[0]) == null ? void 0 : l.split) == null ? void 0 : m.call(l, d)) == null ? void 0 : v[1]) ?? "" : ((h = (p = (n = t.modelValue) == null ? void 0 : n.split) == null ? void 0 : p.call(n, d)) == null ? void 0 : h[1]) ?? "";
      },
      set(e) {
        I.value = e;
      }
    }), a = N(null), i = N(null), s = f({
      get() {
        var e, l, m, v, n, p, h;
        return a.value !== null ? a.value : t.isRange ? ((v = (m = (l = (e = t.modelValue) == null ? void 0 : e[1]) == null ? void 0 : l.split) == null ? void 0 : m.call(l, d)) == null ? void 0 : v[0]) ?? "" : ((h = (p = (n = t.modelValue) == null ? void 0 : n.split) == null ? void 0 : p.call(n, d)) == null ? void 0 : h[0]) ?? "";
      },
      set(e) {
        a.value = e;
      }
    }), r = f({
      get() {
        var e, l, m, v, n, p, h;
        return i.value !== null ? i.value : t.isRange ? ((v = (m = (l = (e = t.modelValue) == null ? void 0 : e[1]) == null ? void 0 : l.split) == null ? void 0 : m.call(l, d)) == null ? void 0 : v[1]) ?? "" : ((h = (p = (n = t.modelValue) == null ? void 0 : n.split) == null ? void 0 : p.call(n, d)) == null ? void 0 : h[1]) ?? "";
      },
      set(e) {
        i.value = e;
      }
    }), H = f(() => `${g.value}${d}${c.value}`), C = f(() => `${s.value}${d}${r.value}`), S = f(() => t.isRange ? g.value && s.value && c.value && r.value : g.value && c.value);
    const E = () => {
      if (t.isRange && s.value) {
        if (t.common) {
          if (g.value > s.value) {
            if (s.value = "", !c.value)
              return;
            r.value = "";
          }
        } else if (g.value >= s.value) {
          if (s.value = "", !c.value)
            return;
          r.value = "";
        }
      }
    }, D = () => {
      E();
    }, $ = () => {
      !g.value || !c.value || !s.value || !r.value || (t.common ? H.value > C.value && (r.value = "") : H.value >= C.value && (r.value = ""));
    }, w = () => {
      B(), K("update:modelValue", t.isRange ? [] : "");
    }, B = () => {
      P.value = null, I.value = null, a.value = null, i.value = null;
    }, ge = () => {
      V.value = !1;
      let e = "";
      t.isRange ? e = [H.value, C.value] : e = H.value, K("update:modelValue", e), B(), K("change");
    }, K = z;
    return (e, l) => {
      const m = W("el-button"), v = W("el-popover");
      return y(), He(v, be({
        trigger: "click",
        disabled: e.disabled || e.readonly,
        visible: o(V),
        "onUpdate:visible": l[6] || (l[6] = (n) => U(V) ? V.value = n : V = n),
        width: e.isRange ? 350 : 220,
        "hide-after": 0,
        persistent: e.persistent,
        transition: e.transition
      }, e.$attrs), {
        reference: T(() => {
          var n;
          return [
            b("div", {
              class: G(["el-date-editor el-date-editor el-date-editor--timerange el-input__wrapper el-range-editor", { "is-active": o(V), "is-disabled": e.disabled }]),
              onMouseenter: l[0] || (l[0] = (p) => U(_) ? _.value = !0 : _ = !0),
              onMouseleave: l[1] || (l[1] = (p) => U(_) ? _.value = !1 : _ = !1)
            }, [
              k(o(pe), { class: "el-input__icon el-range__icon" }, {
                default: T(() => [
                  k(o(Se))
                ]),
                _: 1
              }),
              b("input", {
                placeholder: e.isRange ? e.startPlaceholder : e.placeholder,
                readonly: "",
                class: "el-range-input",
                value: o(J)
              }, null, 8, Ae),
              e.isRange ? (y(), R("span", Oe, q(e.rangeSeparator), 1)) : Q("", !0),
              e.isRange ? (y(), R("input", {
                key: 1,
                placeholder: e.endPlaceholder,
                readonly: "",
                class: "el-range-input",
                value: o(F)
              }, null, 8, je)) : Q("", !0),
              k(o(pe), {
                onClick: _e(w, ["stop"]),
                class: G(["el-input__icon el-range__close-icon", {
                  "el-range__close-icon--hidden": !(e.modelValue && ((n = e.modelValue) == null ? void 0 : n.length) !== 0 && o(_) && !e.disabled && !e.readonly)
                }])
              }, {
                default: T(() => [
                  k(o($e))
                ]),
                _: 1
              }, 8, ["class"])
            ], 34)
          ];
        }),
        default: T(() => [
          k(Ee, null, {
            btn: T(() => [
              k(m, {
                onClick: w,
                bg: "",
                text: "",
                size: "small"
              }, {
                default: T(() => [
                  ce("清除")
                ]),
                _: 1
              }),
              k(m, {
                disabled: !o(S),
                bg: "",
                type: "primary",
                text: "",
                size: "small",
                onClick: ge
              }, {
                default: T(() => [
                  ce("确认")
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            default: T(() => [
              b("div", qe, [
                b("div", Ge, [
                  k(me, {
                    key: "startTime",
                    currentHour: o(g),
                    "onUpdate:currentHour": l[2] || (l[2] = (n) => U(g) ? g.value = n : g = n),
                    currentMinute: o(c),
                    "onUpdate:currentMinute": l[3] || (l[3] = (n) => U(c) ? c.value = n : c = n),
                    "start-hour": e.beginStartHour,
                    "end-hour": e.beginEndHour,
                    "end-minute": e.beginEndMinute,
                    minuteStep: e.minuteStep,
                    hourStep: e.hourStep,
                    title: "开始时间",
                    onChangeHour: E,
                    onChangeMinute: D
                  }, null, 8, ["currentHour", "currentMinute", "start-hour", "end-hour", "end-minute", "minuteStep", "hourStep"])
                ]),
                e.isRange ? (y(), R("div", Je, [
                  k(me, {
                    key: "endTime",
                    "start-hour": e.endStartHour,
                    "end-hour": e.endEndHour,
                    "end-minute": e.endEndMinute,
                    minuteStep: e.minuteStep,
                    hourStep: e.hourStep,
                    minTime: o(H),
                    currentHour: o(s),
                    "onUpdate:currentHour": l[4] || (l[4] = (n) => U(s) ? s.value = n : s = n),
                    currentMinute: o(r),
                    "onUpdate:currentMinute": l[5] || (l[5] = (n) => U(r) ? r.value = n : r = n),
                    title: "结束时间",
                    common: e.common,
                    onChangeHour: $
                  }, null, 8, ["start-hour", "end-hour", "end-minute", "minuteStep", "hourStep", "minTime", "currentHour", "currentMinute", "common"])
                ])) : Q("", !0)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 16, ["disabled", "visible", "width", "persistent", "transition"]);
    };
  }
}), ve = /* @__PURE__ */ X(Ke, [["__scopeId", "data-v-c3124ecb"]]);
ve.install = (M) => {
  M.component("timeMomentPicker", ve);
};
export {
  ve as default,
  ve as timeMomentPicker
};
