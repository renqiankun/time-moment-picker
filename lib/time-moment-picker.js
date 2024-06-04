(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".picker-wrap[data-v-ef159517]{width:100%;height:300px;display:flex;flex-direction:column}.picker-wrap .container-box[data-v-ef159517]{flex:1;display:flex;overflow:hidden}.picker-wrap .container-box .picker-spin[data-v-ef159517]{flex:1}.picker-wrap .btn-wrap[data-v-ef159517]{width:calc(100% + 30px);position:relative;left:-15px;text-align:right;box-sizing:border-box;padding:8px 15px 0 0;border-top:solid 1px #e4e7ed}.base-wrap[data-v-a2082cda]{width:100%;height:100%;display:flex;flex-direction:column;box-sizing:border-box;padding-bottom:12px}.base-wrap .base-title[data-v-a2082cda]{margin-bottom:5px;text-align:center;font-size:14px;line-height:30px;color:var(--el-text-color-regular)}.base-wrap .base-content[data-v-a2082cda]{flex:1;overflow:hidden;box-sizing:border-box;border-radius:2px;border:1px solid var(--el-border-color-light);display:flex}.base-wrap .base-content .scroll-wrap[data-v-a2082cda]{flex:1;text-align:center}.time-item-wrap[data-v-a2082cda]{box-sizing:border-box;padding:40px 0}.hour-item[data-v-a2082cda]{height:32px;line-height:32px;font-size:12px;color:var(--el-text-color-regular);cursor:pointer;transition:.3s linear}.hour-item[data-v-a2082cda]:hover{background:var(--el-fill-color-light)}.hour-item.active[data-v-a2082cda]{font-size:15px;color:var(--el-color-primary);font-weight:700;background:var(--el-fill-color-light);position:sticky;top:0;bottom:0}.hour-item.disabled[data-v-a2082cda]{color:#cbcbcb;cursor:not-allowed}.base-picker-wrap[data-v-17761463]{display:flex;width:100%;height:100%}.base-picker-wrap .picker-spin-container[data-v-17761463]{flex:1;height:100%}.base-picker-wrap .right-pannel[data-v-17761463]{margin-left:15px}.el-range-input[data-v-17761463]{flex:1}")),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { openBlock as M, createElementBlock as y, createElementVNode as S, renderSlot as fe, defineComponent as Te, computed as g, resolveComponent as ee, toDisplayString as X, createVNode as B, withCtx as P, Fragment as te, renderList as ve, unref as m, normalizeClass as Y, ref as U, watch as Se, withDirectives as _e, isRef as z, createCommentVNode as j, createBlock as ge, withModifiers as ke, mergeProps as $e, createTextVNode as he } from "vue";
import { useFormItem as Ve, ElIcon as Me, ClickOutside as ye } from "element-plus";
import { Clock as Re, CircleClose as Ce } from "@element-plus/icons-vue";
const ne = (_, O) => {
  const l = _.__vccOpts || _;
  for (const [t, k] of O)
    l[t] = k;
  return l;
}, Ee = {}, we = { class: "picker-wrap" }, Be = { class: "container-box" }, Pe = { class: "picker-spin" }, De = { class: "btn-wrap" };
function Ue(_, O) {
  return M(), y("div", we, [
    S("div", Be, [
      S("div", Pe, [
        fe(_.$slots, "default", {}, void 0, !0)
      ])
    ]),
    S("div", De, [
      fe(_.$slots, "btn", {}, void 0, !0)
    ])
  ]);
}
const ze = /* @__PURE__ */ ne(Ee, [["render", Ue], ["__scopeId", "data-v-ef159517"]]), Ie = { class: "base-wrap" }, Le = { class: "base-title" }, Ne = { class: "base-content" }, Fe = { class: "scroll-wrap" }, Oe = { class: "time-item-wrap" }, Ae = ["onClick"], je = { class: "scroll-wrap" }, qe = { class: "time-item-wrap" }, Ge = ["onClick"], Je = /* @__PURE__ */ Te({
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
    maxHour: { default: "24" },
    startMaxTime: {},
    startMinTime: {}
  },
  emits: [
    "update:currentHour",
    "update:currentMinute",
    "changeHour",
    "changeMinute"
  ],
  setup(_, { emit: O }) {
    const l = _;
    let t = l.timeSeparator || ":", k = g(() => parseFloat(l.maxHour) < 10 ? "0" + l.maxHour : l.maxHour), f = g(() => {
      let a = [];
      for (let u = l.startHour; u <= l.endHour; u += l.hourStep)
        a.push(u < 10 ? "0" + u : u + "");
      return a;
    }), q = g(() => {
      if (l.currentHour == k.value)
        return ["00"];
      let a = [];
      for (let u = l.startMinute; u <= l.endMinute; u += l.minuteStep || 1)
        a.push(u < 10 ? "0" + u : u + "");
      return a;
    }), A = g(() => {
      let a = [];
      for (let u = l.startMinute; u <= l.endMinute; u += l.minuteStep || 1)
        a.push(u < 10 ? "0" + u : u + "");
      return a[a.length - 1];
    }), G = g(() => (a) => {
      var $, V, L, C, D, N, E, w, F, T, e, n, d, c, o;
      let u = (L = (V = ($ = l.startMaxTime) == null ? void 0 : $.split) == null ? void 0 : V.call($, t)) == null ? void 0 : L[0], p = (N = (D = (C = l.startMinTime) == null ? void 0 : C.split) == null ? void 0 : D.call(C, t)) == null ? void 0 : N[0], i = !1, b = !1;
      u && (i = a > u), p && (b = a < p);
      let H = i || b;
      if (!l.minTime || (((F = (w = (E = l.minTime) == null ? void 0 : E.split) == null ? void 0 : w.call(E, t)) == null ? void 0 : F.length) ?? 0) === 0)
        return H;
      let s = (n = (e = (T = l.minTime) == null ? void 0 : T.split) == null ? void 0 : e.call(T, t)) == null ? void 0 : n[0], v = (o = (c = (d = l.minTime) == null ? void 0 : d.split) == null ? void 0 : c.call(d, t)) == null ? void 0 : o[1];
      return s && v && !l.common ? `${a}${t}${A.value}` <= l.minTime || H : a < s || H;
    }), R = g(() => (a) => {
      var V, L, C, D, N, E, w, F, T;
      if (!l.currentHour)
        return !1;
      let u = `${l.currentHour}${t}${a}`, p = l.startMaxTime, i = l.startMinTime, b = !1, H = !1;
      p && (b = u > p), i && (H = u < i);
      let s = b || H;
      if (!l.minTime || (((C = (L = (V = l.minTime) == null ? void 0 : V.split) == null ? void 0 : L.call(V, t)) == null ? void 0 : C.length) ?? 0) === 0)
        return s;
      let v = (E = (N = (D = l.minTime) == null ? void 0 : D.split) == null ? void 0 : N.call(D, t)) == null ? void 0 : E[0];
      return !((T = (F = (w = l.minTime) == null ? void 0 : w.split) == null ? void 0 : F.call(w, t)) == null ? void 0 : T[1]) || !v ? s : l.common ? l.minTime > u || s : l.minTime >= u || s;
    });
    const Z = (a) => {
      I("update:currentHour", a), I("update:currentMinute", ""), I("changeHour", a);
    }, x = (a) => {
      I("update:currentMinute", a), I("changeMinute", a);
    }, I = O;
    return (a, u) => {
      const p = ee("el-scrollbar");
      return M(), y("div", Ie, [
        S("div", Le, X(a.title), 1),
        S("div", Ne, [
          S("div", Fe, [
            B(p, { height: "100%" }, {
              default: P(() => [
                S("div", Oe, [
                  (M(!0), y(te, null, ve(m(f), (i) => (M(), y("div", {
                    class: Y(["hour-item", {
                      active: i == a.currentHour,
                      disabled: m(G)(i)
                    }]),
                    onClick: (b) => m(G)(i) ? "" : Z(i)
                  }, X(i), 11, Ae))), 256))
                ])
              ]),
              _: 1
            })
          ]),
          S("div", je, [
            B(p, { height: "100%" }, {
              default: P(() => [
                S("div", qe, [
                  (M(!0), y(te, null, ve(m(q), (i) => (M(), y("div", {
                    class: Y(["hour-item", {
                      active: i == a.currentMinute,
                      disabled: m(R)(i)
                    }]),
                    onClick: (b) => m(R)(i) ? "" : x(i)
                  }, X(i), 11, Ge))), 256))
                ])
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
}), be = /* @__PURE__ */ ne(Je, [["__scopeId", "data-v-a2082cda"]]), Ke = ["placeholder", "value"], Qe = {
  key: 0,
  class: "el-range-separator"
}, We = ["placeholder", "value"], Xe = { class: "base-picker-wrap" }, Ye = { class: "picker-spin-container" }, Ze = {
  key: 0,
  class: "picker-spin-container right-pannel"
}, xe = /* @__PURE__ */ Te({
  __name: "index",
  props: {
    modelValue: {},
    isRange: { type: Boolean },
    common: { type: Boolean },
    clearable: { type: Boolean, default: !0 },
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
    transition: { default: "el-zoom-in-top" },
    startMaxTime: {},
    startMinTime: {},
    endMaxTime: {},
    endMinTime: {}
  },
  emits: ["update:modelValue", "change", "clear"],
  setup(_, { emit: O }) {
    const { formItem: l } = Ve(), t = _;
    let k = U(!1), f = t.timeSeparator;
    Se(
      () => t.modelValue,
      () => {
        var e, n, d, c, o, r, h, le, re, J, ae, ue, ie, K, oe, se, Q, de, me, W, pe, ce;
        t.isRange ? (p.value = ((c = (d = (n = (e = t.modelValue) == null ? void 0 : e[0]) == null ? void 0 : n.split) == null ? void 0 : d.call(n, f)) == null ? void 0 : c[0]) ?? null, i.value = ((le = (h = (r = (o = t.modelValue) == null ? void 0 : o[0]) == null ? void 0 : r.split) == null ? void 0 : h.call(r, f)) == null ? void 0 : le[1]) ?? null, s.value = ((ue = (ae = (J = (re = t.modelValue) == null ? void 0 : re[1]) == null ? void 0 : J.split) == null ? void 0 : ae.call(J, f)) == null ? void 0 : ue[0]) ?? null, v.value = ((se = (oe = (K = (ie = t.modelValue) == null ? void 0 : ie[1]) == null ? void 0 : K.split) == null ? void 0 : oe.call(K, f)) == null ? void 0 : se[1]) ?? null) : (p.value = ((me = (de = (Q = t.modelValue) == null ? void 0 : Q.split) == null ? void 0 : de.call(Q, f)) == null ? void 0 : me[0]) ?? null, i.value = ((ce = (pe = (W = t.modelValue) == null ? void 0 : W.split) == null ? void 0 : pe.call(W, f)) == null ? void 0 : ce[1]) ?? null, s.value = null, v.value = null), l == null || l.validate("change");
      }
    );
    const q = U(), A = U(), G = () => {
      var e, n;
      (n = (e = m(A).popperRef) == null ? void 0 : e.delayHide) == null || n.call(e);
    };
    let R = U(!1);
    const Z = () => {
      var e;
      (e = A.value) == null || e.hide();
    };
    let x = g(() => {
      var e;
      return t.isRange ? (e = t.modelValue) == null ? void 0 : e[0] : t.modelValue;
    }), I = g(() => {
      var e;
      return t.isRange ? (e = t.modelValue) == null ? void 0 : e[1] : "";
    }), a = U(null), u = U(null), p = g({
      get() {
        var e, n, d, c, o, r, h;
        return a.value !== null ? a.value : t.isRange ? ((c = (d = (n = (e = t.modelValue) == null ? void 0 : e[0]) == null ? void 0 : n.split) == null ? void 0 : d.call(n, f)) == null ? void 0 : c[0]) ?? "" : ((h = (r = (o = t.modelValue) == null ? void 0 : o.split) == null ? void 0 : r.call(o, f)) == null ? void 0 : h[0]) ?? "";
      },
      set(e) {
        a.value = e;
      }
    }), i = g({
      get() {
        var e, n, d, c, o, r, h;
        return u.value !== null ? u.value : t.isRange ? ((c = (d = (n = (e = t.modelValue) == null ? void 0 : e[0]) == null ? void 0 : n.split) == null ? void 0 : d.call(n, f)) == null ? void 0 : c[1]) ?? "" : ((h = (r = (o = t.modelValue) == null ? void 0 : o.split) == null ? void 0 : r.call(o, f)) == null ? void 0 : h[1]) ?? "";
      },
      set(e) {
        u.value = e;
      }
    }), b = U(null), H = U(null), s = g({
      get() {
        var e, n, d, c, o, r, h;
        return b.value !== null ? b.value : t.isRange ? ((c = (d = (n = (e = t.modelValue) == null ? void 0 : e[1]) == null ? void 0 : n.split) == null ? void 0 : d.call(n, f)) == null ? void 0 : c[0]) ?? "" : ((h = (r = (o = t.modelValue) == null ? void 0 : o.split) == null ? void 0 : r.call(o, f)) == null ? void 0 : h[0]) ?? "";
      },
      set(e) {
        b.value = e;
      }
    }), v = g({
      get() {
        var e, n, d, c, o, r, h;
        return H.value !== null ? H.value : t.isRange ? ((c = (d = (n = (e = t.modelValue) == null ? void 0 : e[1]) == null ? void 0 : n.split) == null ? void 0 : d.call(n, f)) == null ? void 0 : c[1]) ?? "" : ((h = (r = (o = t.modelValue) == null ? void 0 : o.split) == null ? void 0 : r.call(o, f)) == null ? void 0 : h[1]) ?? "";
      },
      set(e) {
        H.value = e;
      }
    }), $ = g(() => `${p.value}${f}${i.value}`), V = g(() => `${s.value}${f}${v.value}`), L = g(() => t.isRange ? p.value && s.value && i.value && v.value : p.value && i.value);
    const C = () => {
      if (t.isRange && s.value) {
        if (t.common) {
          if (p.value > s.value) {
            if (s.value = "", !i.value)
              return;
            v.value = "";
          }
        } else if (p.value >= s.value) {
          if (s.value = "", !i.value)
            return;
          v.value = "";
        }
      }
    }, D = () => {
      C();
    }, N = () => {
      t.endEndHour == s.value && t.endEndHour == 24 && (v.value = "00"), !(!p.value || !i.value || !s.value || !v.value) && (t.common ? $.value > V.value && (v.value = "") : $.value >= V.value && (v.value = ""));
    }, E = () => {
      w(), T("update:modelValue", t.isRange ? [] : ""), T("clear");
    }, w = () => {
      a.value = null, u.value = null, b.value = null, H.value = null;
    }, F = () => {
      let e = "";
      t.isRange ? e = [$.value, V.value] : e = $.value, T("update:modelValue", e), w(), T("change"), Z();
    }, T = O;
    return (e, n) => {
      var o;
      const d = ee("el-button"), c = ee("el-popover");
      return M(), y(te, null, [
        _e((M(), y("div", {
          class: Y(["el-date-editor el-date-editor el-date-editor--timerange el-input__wrapper el-range-editor", { "is-active": m(R), "is-disabled": e.disabled }]),
          onMouseenter: n[0] || (n[0] = (r) => z(k) ? k.value = !0 : k = !0),
          onMouseleave: n[1] || (n[1] = (r) => z(k) ? k.value = !1 : k = !1),
          ref_key: "buttonRef",
          ref: q
        }, [
          B(m(Me), { class: "el-input__icon el-range__icon" }, {
            default: P(() => [
              B(m(Re))
            ]),
            _: 1
          }),
          S("input", {
            placeholder: e.isRange ? e.startPlaceholder : e.placeholder,
            readonly: "",
            class: "el-range-input",
            value: m(x)
          }, null, 8, Ke),
          e.isRange ? (M(), y("span", Qe, X(e.rangeSeparator), 1)) : j("", !0),
          e.isRange ? (M(), y("input", {
            key: 1,
            placeholder: e.endPlaceholder,
            readonly: "",
            class: "el-range-input",
            value: m(I)
          }, null, 8, We)) : j("", !0),
          e.clearable ? (M(), ge(m(Me), {
            key: 2,
            onClick: ke(E, ["stop"]),
            class: Y(["el-input__icon el-range__close-icon", {
              "el-range__close-icon--hidden": !(e.modelValue && ((o = e.modelValue) == null ? void 0 : o.length) !== 0 && m(k) && !e.disabled && !e.readonly)
            }])
          }, {
            default: P(() => [
              B(m(Ce))
            ]),
            _: 1
          }, 8, ["class"])) : j("", !0)
        ], 34)), [
          [m(ye), G]
        ]),
        B(c, $e({
          ref_key: "popoverRef",
          ref: A,
          "virtual-ref": q.value,
          "virtual-triggering": "",
          trigger: "click",
          disabled: e.disabled || e.readonly,
          width: e.isRange ? 350 : 220,
          "hide-after": 0,
          persistent: e.persistent,
          transition: e.transition
        }, e.$attrs, {
          onBeforeEnter: n[6] || (n[6] = (r) => z(R) ? R.value = !0 : R = !0),
          onBeforeLeave: n[7] || (n[7] = (r) => z(R) ? R.value = !1 : R = !1)
        }), {
          reference: P(() => []),
          default: P(() => [
            B(ze, null, {
              btn: P(() => [
                e.clearable ? (M(), ge(d, {
                  key: 0,
                  onClick: E,
                  bg: "",
                  text: "",
                  size: "small"
                }, {
                  default: P(() => [
                    he("清除")
                  ]),
                  _: 1
                })) : j("", !0),
                B(d, {
                  disabled: !m(L),
                  bg: "",
                  type: "primary",
                  text: "",
                  size: "small",
                  onClick: F
                }, {
                  default: P(() => [
                    he("确认")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              default: P(() => [
                S("div", Xe, [
                  S("div", Ye, [
                    B(be, {
                      key: "startTime",
                      currentHour: m(p),
                      "onUpdate:currentHour": n[2] || (n[2] = (r) => z(p) ? p.value = r : p = r),
                      currentMinute: m(i),
                      "onUpdate:currentMinute": n[3] || (n[3] = (r) => z(i) ? i.value = r : i = r),
                      "start-hour": e.beginStartHour,
                      "end-hour": e.beginEndHour,
                      "end-minute": e.beginEndMinute,
                      minuteStep: e.minuteStep,
                      hourStep: e.hourStep,
                      title: "开始时间",
                      onChangeHour: C,
                      onChangeMinute: D,
                      startMaxTime: e.startMaxTime,
                      startMinTime: e.startMinTime
                    }, null, 8, ["currentHour", "currentMinute", "start-hour", "end-hour", "end-minute", "minuteStep", "hourStep", "startMaxTime", "startMinTime"])
                  ]),
                  e.isRange ? (M(), y("div", Ze, [
                    B(be, {
                      key: "endTime",
                      "start-hour": e.endStartHour,
                      "end-hour": e.endEndHour,
                      "end-minute": e.endEndMinute,
                      minuteStep: e.minuteStep,
                      hourStep: e.hourStep,
                      minTime: m($),
                      currentHour: m(s),
                      "onUpdate:currentHour": n[4] || (n[4] = (r) => z(s) ? s.value = r : s = r),
                      currentMinute: m(v),
                      "onUpdate:currentMinute": n[5] || (n[5] = (r) => z(v) ? v.value = r : v = r),
                      title: "结束时间",
                      common: e.common,
                      onChangeHour: N,
                      startMaxTime: e.endMaxTime,
                      startMinTime: e.endMinTime
                    }, null, 8, ["start-hour", "end-hour", "end-minute", "minuteStep", "hourStep", "minTime", "currentHour", "currentMinute", "common", "startMaxTime", "startMinTime"])
                  ])) : j("", !0)
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 16, ["virtual-ref", "disabled", "width", "persistent", "transition"])
      ], 64);
    };
  }
}), He = /* @__PURE__ */ ne(xe, [["__scopeId", "data-v-17761463"]]);
He.install = (_) => {
  _.component("timeMomentPicker", He);
};
export {
  He as default,
  He as timeMomentPicker
};
