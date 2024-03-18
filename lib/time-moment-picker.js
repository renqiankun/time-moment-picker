(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".picker-wrap[data-v-ef159517]{width:100%;height:300px;display:flex;flex-direction:column}.picker-wrap .container-box[data-v-ef159517]{flex:1;display:flex;overflow:hidden}.picker-wrap .container-box .picker-spin[data-v-ef159517]{flex:1}.picker-wrap .btn-wrap[data-v-ef159517]{width:calc(100% + 30px);position:relative;left:-15px;text-align:right;box-sizing:border-box;padding:8px 15px 0 0;border-top:solid 1px #e4e7ed}.base-wrap[data-v-7f4f6033]{width:100%;height:100%;display:flex;flex-direction:column;box-sizing:border-box;padding-bottom:12px}.base-wrap .base-title[data-v-7f4f6033]{margin-bottom:5px;text-align:center;font-size:14px;line-height:30px;color:var(--el-text-color-regular)}.base-wrap .base-content[data-v-7f4f6033]{flex:1;overflow:hidden;box-sizing:border-box;border-radius:2px;border:1px solid var(--el-border-color-light);display:flex}.base-wrap .base-content .scroll-wrap[data-v-7f4f6033]{flex:1;text-align:center}.time-item-wrap[data-v-7f4f6033]{box-sizing:border-box;padding:40px 0}.hour-item[data-v-7f4f6033]{height:32px;line-height:32px;font-size:12px;color:var(--el-text-color-regular);cursor:pointer;transition:.3s linear}.hour-item[data-v-7f4f6033]:hover{background:var(--el-fill-color-light)}.hour-item.active[data-v-7f4f6033]{font-size:15px;color:var(--el-color-primary);font-weight:700;background:var(--el-fill-color-light);position:sticky;top:0;bottom:0}.hour-item.disabled[data-v-7f4f6033]{color:#cbcbcb;cursor:not-allowed}.base-picker-wrap[data-v-5c0c4daa]{display:flex;width:100%;height:100%}.base-picker-wrap .picker-spin-container[data-v-5c0c4daa]{flex:1;height:100%}.base-picker-wrap .right-pannel[data-v-5c0c4daa]{margin-left:15px}.el-range-input[data-v-5c0c4daa]{flex:1}")),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { openBlock as T, createElementBlock as C, createElementVNode as _, renderSlot as oe, defineComponent as fe, computed as f, resolveComponent as W, toDisplayString as G, createVNode as k, withCtx as V, Fragment as se, renderList as de, unref as s, normalizeClass as J, ref as N, watch as he, createBlock as He, mergeProps as _e, isRef as U, createCommentVNode as Q, withModifiers as be, createTextVNode as ce } from "vue";
import { useFormItem as Me, ElIcon as pe } from "element-plus";
import { Clock as Se, CircleClose as $e } from "@element-plus/icons-vue";
const X = (M, z) => {
  const r = M.__vccOpts || M;
  for (const [t, b] of z)
    r[t] = b;
  return r;
}, ke = {}, Ve = { class: "picker-wrap" }, Te = { class: "container-box" }, ye = { class: "picker-spin" }, Ce = { class: "btn-wrap" };
function Re(M, z) {
  return T(), C("div", Ve, [
    _("div", Te, [
      _("div", ye, [
        oe(M.$slots, "default", {}, void 0, !0)
      ])
    ]),
    _("div", Ce, [
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
    const r = M;
    let t = r.timeSeparator || ":", b = f(() => parseFloat(r.maxHour) < 10 ? "0" + r.maxHour : r.maxHour), d = f(() => {
      let a = [];
      for (let i = r.startHour; i <= r.endHour; i += r.hourStep)
        a.push(i < 10 ? "0" + i : i + "");
      return a;
    }), R = f(() => {
      if (r.currentHour == b.value)
        return ["00"];
      let a = [];
      for (let i = r.startMinute; i <= r.endMinute; i += r.minuteStep || 1)
        a.push(i < 10 ? "0" + i : i + "");
      return a;
    }), K = f(() => {
      let a = [];
      for (let i = r.startMinute; i <= r.endMinute; i += r.minuteStep || 1)
        a.push(i < 10 ? "0" + i : i + "");
      return a[a.length - 1];
    }), F = f(() => (a) => {
      var u, H, y, S, E, D, $, w, B;
      if (!r.minTime || (((y = (H = (u = r.minTime) == null ? void 0 : u.split) == null ? void 0 : H.call(u, t)) == null ? void 0 : y.length) ?? 0) === 0)
        return !1;
      let i = (D = (E = (S = r.minTime) == null ? void 0 : S.split) == null ? void 0 : E.call(S, t)) == null ? void 0 : D[0], o = (B = (w = ($ = r.minTime) == null ? void 0 : $.split) == null ? void 0 : w.call($, t)) == null ? void 0 : B[1];
      return i && o && !r.common ? `${a}${t}${K.value}` <= r.minTime : a < i;
    }), P = f(() => (a) => {
      var u, H, y, S, E, D, $, w, B;
      if (!r.minTime || !r.currentHour || (((y = (H = (u = r.minTime) == null ? void 0 : u.split) == null ? void 0 : H.call(u, t)) == null ? void 0 : y.length) ?? 0) === 0)
        return !1;
      let i = (D = (E = (S = r.minTime) == null ? void 0 : S.split) == null ? void 0 : E.call(S, t)) == null ? void 0 : D[0];
      return !((B = (w = ($ = r.minTime) == null ? void 0 : $.split) == null ? void 0 : w.call($, t)) == null ? void 0 : B[1]) || !i ? !1 : r.common ? r.minTime > `${r.currentHour}${t}${a}` : r.minTime >= `${r.currentHour}${t}${a}`;
    });
    const I = (a) => {
      c("update:currentHour", a), a == b && c("update:currentMinute", "00"), c("changeHour", a);
    }, g = (a) => {
      c("update:currentMinute", a), c("changeMinute", a);
    }, c = z;
    return (a, i) => {
      const o = W("el-scrollbar");
      return T(), C("div", we, [
        _("div", Be, G(a.title), 1),
        _("div", Pe, [
          _("div", De, [
            k(o, { height: "100%" }, {
              default: V(() => [
                _("div", Ue, [
                  (T(!0), C(se, null, de(s(d), (u) => (T(), C("div", {
                    class: J(["hour-item", {
                      active: u == a.currentHour,
                      disabled: s(F)(u)
                    }]),
                    onClick: (H) => s(F)(u) ? "" : I(u)
                  }, G(u), 11, ze))), 256))
                ])
              ]),
              _: 1
            })
          ]),
          _("div", Ie, [
            k(o, { height: "100%" }, {
              default: V(() => [
                _("div", Ne, [
                  (T(!0), C(se, null, de(s(R), (u) => (T(), C("div", {
                    class: J(["hour-item", {
                      active: u == a.currentMinute,
                      disabled: s(P)(u)
                    }]),
                    onClick: (H) => s(P)(u) ? "" : g(u)
                  }, G(u), 11, Fe))), 256))
                ])
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
}), me = /* @__PURE__ */ X(Le, [["__scopeId", "data-v-7f4f6033"]]), Ae = ["placeholder", "value"], Oe = {
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
  emits: ["update:modelValue", "change", "clear"],
  setup(M, { emit: z }) {
    const { formItem: r } = Me(), t = M;
    let b = N(!1), d = t.timeSeparator;
    he(
      () => t.modelValue,
      () => {
        var e, l, m, v, n, p, h, Y, Z, A, x, ee, te, O, ne, le, j, re, ue, q, ae, ie;
        t.isRange ? (g.value = ((v = (m = (l = (e = t.modelValue) == null ? void 0 : e[0]) == null ? void 0 : l.split) == null ? void 0 : m.call(l, d)) == null ? void 0 : v[0]) ?? null, c.value = ((Y = (h = (p = (n = t.modelValue) == null ? void 0 : n[0]) == null ? void 0 : p.split) == null ? void 0 : h.call(p, d)) == null ? void 0 : Y[1]) ?? null, o.value = ((ee = (x = (A = (Z = t.modelValue) == null ? void 0 : Z[1]) == null ? void 0 : A.split) == null ? void 0 : x.call(A, d)) == null ? void 0 : ee[0]) ?? null, u.value = ((le = (ne = (O = (te = t.modelValue) == null ? void 0 : te[1]) == null ? void 0 : O.split) == null ? void 0 : ne.call(O, d)) == null ? void 0 : le[1]) ?? null) : (g.value = ((ue = (re = (j = t.modelValue) == null ? void 0 : j.split) == null ? void 0 : re.call(j, d)) == null ? void 0 : ue[0]) ?? null, c.value = ((ie = (ae = (q = t.modelValue) == null ? void 0 : q.split) == null ? void 0 : ae.call(q, d)) == null ? void 0 : ie[1]) ?? null, o.value = null, u.value = null), r == null || r.validate("change");
      }
    );
    let R = N(!1), K = f(() => {
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
    }), a = N(null), i = N(null), o = f({
      get() {
        var e, l, m, v, n, p, h;
        return a.value !== null ? a.value : t.isRange ? ((v = (m = (l = (e = t.modelValue) == null ? void 0 : e[1]) == null ? void 0 : l.split) == null ? void 0 : m.call(l, d)) == null ? void 0 : v[0]) ?? "" : ((h = (p = (n = t.modelValue) == null ? void 0 : n.split) == null ? void 0 : p.call(n, d)) == null ? void 0 : h[0]) ?? "";
      },
      set(e) {
        a.value = e;
      }
    }), u = f({
      get() {
        var e, l, m, v, n, p, h;
        return i.value !== null ? i.value : t.isRange ? ((v = (m = (l = (e = t.modelValue) == null ? void 0 : e[1]) == null ? void 0 : l.split) == null ? void 0 : m.call(l, d)) == null ? void 0 : v[1]) ?? "" : ((h = (p = (n = t.modelValue) == null ? void 0 : n.split) == null ? void 0 : p.call(n, d)) == null ? void 0 : h[1]) ?? "";
      },
      set(e) {
        i.value = e;
      }
    }), H = f(() => `${g.value}${d}${c.value}`), y = f(() => `${o.value}${d}${u.value}`), S = f(() => t.isRange ? g.value && o.value && c.value && u.value : g.value && c.value);
    const E = () => {
      if (t.isRange && o.value) {
        if (t.common) {
          if (g.value > o.value) {
            if (o.value = "", !c.value)
              return;
            u.value = "";
          }
        } else if (g.value >= o.value) {
          if (o.value = "", !c.value)
            return;
          u.value = "";
        }
      }
    }, D = () => {
      E();
    }, $ = () => {
      t.endEndHour == o.value && t.endEndHour == 24 && (u.value = "00"), !(!g.value || !c.value || !o.value || !u.value) && (t.common ? H.value > y.value && (u.value = "") : H.value >= y.value && (u.value = ""));
    }, w = () => {
      B(), L("update:modelValue", t.isRange ? [] : ""), L("clear");
    }, B = () => {
      P.value = null, I.value = null, a.value = null, i.value = null;
    }, ge = () => {
      R.value = !1;
      let e = "";
      t.isRange ? e = [H.value, y.value] : e = H.value, L("update:modelValue", e), B(), L("change");
    }, L = z;
    return (e, l) => {
      const m = W("el-button"), v = W("el-popover");
      return T(), He(v, _e({
        trigger: "click",
        disabled: e.disabled || e.readonly,
        visible: s(R),
        "onUpdate:visible": l[6] || (l[6] = (n) => U(R) ? R.value = n : R = n),
        width: e.isRange ? 350 : 220,
        "hide-after": 0,
        persistent: e.persistent,
        transition: e.transition
      }, e.$attrs), {
        reference: V(() => {
          var n;
          return [
            _("div", {
              class: J(["el-date-editor el-date-editor el-date-editor--timerange el-input__wrapper el-range-editor", { "is-active": s(R), "is-disabled": e.disabled }]),
              onMouseenter: l[0] || (l[0] = (p) => U(b) ? b.value = !0 : b = !0),
              onMouseleave: l[1] || (l[1] = (p) => U(b) ? b.value = !1 : b = !1)
            }, [
              k(s(pe), { class: "el-input__icon el-range__icon" }, {
                default: V(() => [
                  k(s(Se))
                ]),
                _: 1
              }),
              _("input", {
                placeholder: e.isRange ? e.startPlaceholder : e.placeholder,
                readonly: "",
                class: "el-range-input",
                value: s(K)
              }, null, 8, Ae),
              e.isRange ? (T(), C("span", Oe, G(e.rangeSeparator), 1)) : Q("", !0),
              e.isRange ? (T(), C("input", {
                key: 1,
                placeholder: e.endPlaceholder,
                readonly: "",
                class: "el-range-input",
                value: s(F)
              }, null, 8, je)) : Q("", !0),
              k(s(pe), {
                onClick: be(w, ["stop"]),
                class: J(["el-input__icon el-range__close-icon", {
                  "el-range__close-icon--hidden": !(e.modelValue && ((n = e.modelValue) == null ? void 0 : n.length) !== 0 && s(b) && !e.disabled && !e.readonly)
                }])
              }, {
                default: V(() => [
                  k(s($e))
                ]),
                _: 1
              }, 8, ["class"])
            ], 34)
          ];
        }),
        default: V(() => [
          k(Ee, null, {
            btn: V(() => [
              k(m, {
                onClick: w,
                bg: "",
                text: "",
                size: "small"
              }, {
                default: V(() => [
                  ce("清除")
                ]),
                _: 1
              }),
              k(m, {
                disabled: !s(S),
                bg: "",
                type: "primary",
                text: "",
                size: "small",
                onClick: ge
              }, {
                default: V(() => [
                  ce("确认")
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            default: V(() => [
              _("div", qe, [
                _("div", Ge, [
                  k(me, {
                    key: "startTime",
                    currentHour: s(g),
                    "onUpdate:currentHour": l[2] || (l[2] = (n) => U(g) ? g.value = n : g = n),
                    currentMinute: s(c),
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
                e.isRange ? (T(), C("div", Je, [
                  k(me, {
                    key: "endTime",
                    "start-hour": e.endStartHour,
                    "end-hour": e.endEndHour,
                    "end-minute": e.endEndMinute,
                    minuteStep: e.minuteStep,
                    hourStep: e.hourStep,
                    minTime: s(H),
                    currentHour: s(o),
                    "onUpdate:currentHour": l[4] || (l[4] = (n) => U(o) ? o.value = n : o = n),
                    currentMinute: s(u),
                    "onUpdate:currentMinute": l[5] || (l[5] = (n) => U(u) ? u.value = n : u = n),
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
}), ve = /* @__PURE__ */ X(Ke, [["__scopeId", "data-v-5c0c4daa"]]);
ve.install = (M) => {
  M.component("timeMomentPicker", ve);
};
export {
  ve as default,
  ve as timeMomentPicker
};
