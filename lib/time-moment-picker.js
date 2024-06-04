(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".picker-wrap[data-v-ef159517]{width:100%;height:300px;display:flex;flex-direction:column}.picker-wrap .container-box[data-v-ef159517]{flex:1;display:flex;overflow:hidden}.picker-wrap .container-box .picker-spin[data-v-ef159517]{flex:1}.picker-wrap .btn-wrap[data-v-ef159517]{width:calc(100% + 30px);position:relative;left:-15px;text-align:right;box-sizing:border-box;padding:8px 15px 0 0;border-top:solid 1px #e4e7ed}.base-wrap[data-v-a2082cda]{width:100%;height:100%;display:flex;flex-direction:column;box-sizing:border-box;padding-bottom:12px}.base-wrap .base-title[data-v-a2082cda]{margin-bottom:5px;text-align:center;font-size:14px;line-height:30px;color:var(--el-text-color-regular)}.base-wrap .base-content[data-v-a2082cda]{flex:1;overflow:hidden;box-sizing:border-box;border-radius:2px;border:1px solid var(--el-border-color-light);display:flex}.base-wrap .base-content .scroll-wrap[data-v-a2082cda]{flex:1;text-align:center}.time-item-wrap[data-v-a2082cda]{box-sizing:border-box;padding:40px 0}.hour-item[data-v-a2082cda]{height:32px;line-height:32px;font-size:12px;color:var(--el-text-color-regular);cursor:pointer;transition:.3s linear}.hour-item[data-v-a2082cda]:hover{background:var(--el-fill-color-light)}.hour-item.active[data-v-a2082cda]{font-size:15px;color:var(--el-color-primary);font-weight:700;background:var(--el-fill-color-light);position:sticky;top:0;bottom:0}.hour-item.disabled[data-v-a2082cda]{color:#cbcbcb;cursor:not-allowed}.base-picker-wrap[data-v-0dec23f9]{display:flex;width:100%;height:100%}.base-picker-wrap .picker-spin-container[data-v-0dec23f9]{flex:1;height:100%}.base-picker-wrap .right-pannel[data-v-0dec23f9]{margin-left:15px}.el-range-input[data-v-0dec23f9]{flex:1}")),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { openBlock as R, createElementBlock as y, createElementVNode as _, renderSlot as fe, defineComponent as be, computed as g, resolveComponent as ee, toDisplayString as W, createVNode as T, withCtx as P, Fragment as te, renderList as ve, unref as m, normalizeClass as X, ref as U, watch as Te, withDirectives as _e, isRef as z, createCommentVNode as x, withModifiers as Se, mergeProps as ke, createTextVNode as ge } from "vue";
import { useFormItem as $e, ElIcon as he, ClickOutside as Ve } from "element-plus";
import { Clock as Re, CircleClose as ye } from "@element-plus/icons-vue";
const ne = (S, O) => {
  const l = S.__vccOpts || S;
  for (const [t, k] of O)
    l[t] = k;
  return l;
}, Ce = {}, Ee = { class: "picker-wrap" }, we = { class: "container-box" }, Be = { class: "picker-spin" }, Pe = { class: "btn-wrap" };
function De(S, O) {
  return R(), y("div", Ee, [
    _("div", we, [
      _("div", Be, [
        fe(S.$slots, "default", {}, void 0, !0)
      ])
    ]),
    _("div", Pe, [
      fe(S.$slots, "btn", {}, void 0, !0)
    ])
  ]);
}
const Ue = /* @__PURE__ */ ne(Ce, [["render", De], ["__scopeId", "data-v-ef159517"]]), ze = { class: "base-wrap" }, Ie = { class: "base-title" }, Le = { class: "base-content" }, Ne = { class: "scroll-wrap" }, Fe = { class: "time-item-wrap" }, Oe = ["onClick"], Ae = { class: "scroll-wrap" }, je = { class: "time-item-wrap" }, qe = ["onClick"], Ge = /* @__PURE__ */ be({
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
  setup(S, { emit: O }) {
    const l = S;
    let t = l.timeSeparator || ":", k = g(() => parseFloat(l.maxHour) < 10 ? "0" + l.maxHour : l.maxHour), f = g(() => {
      let a = [];
      for (let u = l.startHour; u <= l.endHour; u += l.hourStep)
        a.push(u < 10 ? "0" + u : u + "");
      return a;
    }), j = g(() => {
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
    }), q = g(() => (a) => {
      var $, V, L, E, D, N, w, B, F, b, e, n, d, c, o;
      let u = (L = (V = ($ = l.startMaxTime) == null ? void 0 : $.split) == null ? void 0 : V.call($, t)) == null ? void 0 : L[0], p = (N = (D = (E = l.startMinTime) == null ? void 0 : E.split) == null ? void 0 : D.call(E, t)) == null ? void 0 : N[0], i = !1, M = !1;
      u && (i = a > u), p && (M = a < p);
      let H = i || M;
      if (!l.minTime || (((F = (B = (w = l.minTime) == null ? void 0 : w.split) == null ? void 0 : B.call(w, t)) == null ? void 0 : F.length) ?? 0) === 0)
        return H;
      let s = (n = (e = (b = l.minTime) == null ? void 0 : b.split) == null ? void 0 : e.call(b, t)) == null ? void 0 : n[0], v = (o = (c = (d = l.minTime) == null ? void 0 : d.split) == null ? void 0 : c.call(d, t)) == null ? void 0 : o[1];
      return s && v && !l.common ? `${a}${t}${A.value}` <= l.minTime || H : a < s || H;
    }), C = g(() => (a) => {
      var V, L, E, D, N, w, B, F, b;
      if (!l.currentHour)
        return !1;
      let u = `${l.currentHour}${t}${a}`, p = l.startMaxTime, i = l.startMinTime, M = !1, H = !1;
      p && (M = u > p), i && (H = u < i);
      let s = M || H;
      if (!l.minTime || (((E = (L = (V = l.minTime) == null ? void 0 : V.split) == null ? void 0 : L.call(V, t)) == null ? void 0 : E.length) ?? 0) === 0)
        return s;
      let v = (w = (N = (D = l.minTime) == null ? void 0 : D.split) == null ? void 0 : N.call(D, t)) == null ? void 0 : w[0];
      return !((b = (F = (B = l.minTime) == null ? void 0 : B.split) == null ? void 0 : F.call(B, t)) == null ? void 0 : b[1]) || !v ? s : l.common ? l.minTime > u || s : l.minTime >= u || s;
    });
    const Y = (a) => {
      I("update:currentHour", a), I("update:currentMinute", ""), I("changeHour", a);
    }, Z = (a) => {
      I("update:currentMinute", a), I("changeMinute", a);
    }, I = O;
    return (a, u) => {
      const p = ee("el-scrollbar");
      return R(), y("div", ze, [
        _("div", Ie, W(a.title), 1),
        _("div", Le, [
          _("div", Ne, [
            T(p, { height: "100%" }, {
              default: P(() => [
                _("div", Fe, [
                  (R(!0), y(te, null, ve(m(f), (i) => (R(), y("div", {
                    class: X(["hour-item", {
                      active: i == a.currentHour,
                      disabled: m(q)(i)
                    }]),
                    onClick: (M) => m(q)(i) ? "" : Y(i)
                  }, W(i), 11, Oe))), 256))
                ])
              ]),
              _: 1
            })
          ]),
          _("div", Ae, [
            T(p, { height: "100%" }, {
              default: P(() => [
                _("div", je, [
                  (R(!0), y(te, null, ve(m(j), (i) => (R(), y("div", {
                    class: X(["hour-item", {
                      active: i == a.currentMinute,
                      disabled: m(C)(i)
                    }]),
                    onClick: (M) => m(C)(i) ? "" : Z(i)
                  }, W(i), 11, qe))), 256))
                ])
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
}), Me = /* @__PURE__ */ ne(Ge, [["__scopeId", "data-v-a2082cda"]]), Je = ["placeholder", "value"], Ke = {
  key: 0,
  class: "el-range-separator"
}, Qe = ["placeholder", "value"], We = { class: "base-picker-wrap" }, Xe = { class: "picker-spin-container" }, Ye = {
  key: 0,
  class: "picker-spin-container right-pannel"
}, Ze = /* @__PURE__ */ be({
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
    transition: { default: "el-zoom-in-top" },
    startMaxTime: {},
    startMinTime: {},
    endMaxTime: {},
    endMinTime: {}
  },
  emits: ["update:modelValue", "change", "clear"],
  setup(S, { emit: O }) {
    const { formItem: l } = $e(), t = S;
    let k = U(!1), f = t.timeSeparator;
    Te(
      () => t.modelValue,
      () => {
        var e, n, d, c, o, r, h, le, re, G, ae, ue, ie, J, oe, se, K, de, me, Q, pe, ce;
        t.isRange ? (p.value = ((c = (d = (n = (e = t.modelValue) == null ? void 0 : e[0]) == null ? void 0 : n.split) == null ? void 0 : d.call(n, f)) == null ? void 0 : c[0]) ?? null, i.value = ((le = (h = (r = (o = t.modelValue) == null ? void 0 : o[0]) == null ? void 0 : r.split) == null ? void 0 : h.call(r, f)) == null ? void 0 : le[1]) ?? null, s.value = ((ue = (ae = (G = (re = t.modelValue) == null ? void 0 : re[1]) == null ? void 0 : G.split) == null ? void 0 : ae.call(G, f)) == null ? void 0 : ue[0]) ?? null, v.value = ((se = (oe = (J = (ie = t.modelValue) == null ? void 0 : ie[1]) == null ? void 0 : J.split) == null ? void 0 : oe.call(J, f)) == null ? void 0 : se[1]) ?? null) : (p.value = ((me = (de = (K = t.modelValue) == null ? void 0 : K.split) == null ? void 0 : de.call(K, f)) == null ? void 0 : me[0]) ?? null, i.value = ((ce = (pe = (Q = t.modelValue) == null ? void 0 : Q.split) == null ? void 0 : pe.call(Q, f)) == null ? void 0 : ce[1]) ?? null, s.value = null, v.value = null), l == null || l.validate("change");
      }
    );
    const j = U(), A = U(), q = () => {
      var e, n;
      (n = (e = m(A).popperRef) == null ? void 0 : e.delayHide) == null || n.call(e);
    };
    let C = U(!1);
    const Y = () => {
      var e;
      (e = A.value) == null || e.hide();
    };
    let Z = g(() => {
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
    }), M = U(null), H = U(null), s = g({
      get() {
        var e, n, d, c, o, r, h;
        return M.value !== null ? M.value : t.isRange ? ((c = (d = (n = (e = t.modelValue) == null ? void 0 : e[1]) == null ? void 0 : n.split) == null ? void 0 : d.call(n, f)) == null ? void 0 : c[0]) ?? "" : ((h = (r = (o = t.modelValue) == null ? void 0 : o.split) == null ? void 0 : r.call(o, f)) == null ? void 0 : h[0]) ?? "";
      },
      set(e) {
        M.value = e;
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
    const E = () => {
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
      E();
    }, N = () => {
      t.endEndHour == s.value && t.endEndHour == 24 && (v.value = "00"), !(!p.value || !i.value || !s.value || !v.value) && (t.common ? $.value > V.value && (v.value = "") : $.value >= V.value && (v.value = ""));
    }, w = () => {
      B(), b("update:modelValue", t.isRange ? [] : ""), b("clear");
    }, B = () => {
      a.value = null, u.value = null, M.value = null, H.value = null;
    }, F = () => {
      let e = "";
      t.isRange ? e = [$.value, V.value] : e = $.value, b("update:modelValue", e), B(), b("change"), Y();
    }, b = O;
    return (e, n) => {
      var o;
      const d = ee("el-button"), c = ee("el-popover");
      return R(), y(te, null, [
        _e((R(), y("div", {
          class: X(["el-date-editor el-date-editor el-date-editor--timerange el-input__wrapper el-range-editor", { "is-active": m(C), "is-disabled": e.disabled }]),
          onMouseenter: n[0] || (n[0] = (r) => z(k) ? k.value = !0 : k = !0),
          onMouseleave: n[1] || (n[1] = (r) => z(k) ? k.value = !1 : k = !1),
          ref_key: "buttonRef",
          ref: j
        }, [
          T(m(he), { class: "el-input__icon el-range__icon" }, {
            default: P(() => [
              T(m(Re))
            ]),
            _: 1
          }),
          _("input", {
            placeholder: e.isRange ? e.startPlaceholder : e.placeholder,
            readonly: "",
            class: "el-range-input",
            value: m(Z)
          }, null, 8, Je),
          e.isRange ? (R(), y("span", Ke, W(e.rangeSeparator), 1)) : x("", !0),
          e.isRange ? (R(), y("input", {
            key: 1,
            placeholder: e.endPlaceholder,
            readonly: "",
            class: "el-range-input",
            value: m(I)
          }, null, 8, Qe)) : x("", !0),
          T(m(he), {
            onClick: Se(w, ["stop"]),
            class: X(["el-input__icon el-range__close-icon", {
              "el-range__close-icon--hidden": !(e.modelValue && ((o = e.modelValue) == null ? void 0 : o.length) !== 0 && m(k) && !e.disabled && !e.readonly)
            }])
          }, {
            default: P(() => [
              T(m(ye))
            ]),
            _: 1
          }, 8, ["class"])
        ], 34)), [
          [m(Ve), q]
        ]),
        T(c, ke({
          ref_key: "popoverRef",
          ref: A,
          "virtual-ref": j.value,
          "virtual-triggering": "",
          trigger: "click",
          disabled: e.disabled || e.readonly,
          width: e.isRange ? 350 : 220,
          "hide-after": 0,
          persistent: e.persistent,
          transition: e.transition
        }, e.$attrs, {
          onBeforeEnter: n[6] || (n[6] = (r) => z(C) ? C.value = !0 : C = !0),
          onBeforeLeave: n[7] || (n[7] = (r) => z(C) ? C.value = !1 : C = !1)
        }), {
          reference: P(() => []),
          default: P(() => [
            T(Ue, null, {
              btn: P(() => [
                T(d, {
                  onClick: w,
                  bg: "",
                  text: "",
                  size: "small"
                }, {
                  default: P(() => [
                    ge("清除")
                  ]),
                  _: 1
                }),
                T(d, {
                  disabled: !m(L),
                  bg: "",
                  type: "primary",
                  text: "",
                  size: "small",
                  onClick: F
                }, {
                  default: P(() => [
                    ge("确认")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              default: P(() => [
                _("div", We, [
                  _("div", Xe, [
                    T(Me, {
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
                      onChangeHour: E,
                      onChangeMinute: D,
                      startMaxTime: e.startMaxTime,
                      startMinTime: e.startMinTime
                    }, null, 8, ["currentHour", "currentMinute", "start-hour", "end-hour", "end-minute", "minuteStep", "hourStep", "startMaxTime", "startMinTime"])
                  ]),
                  e.isRange ? (R(), y("div", Ye, [
                    T(Me, {
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
                  ])) : x("", !0)
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
}), He = /* @__PURE__ */ ne(Ze, [["__scopeId", "data-v-0dec23f9"]]);
He.install = (S) => {
  S.component("timeMomentPicker", He);
};
export {
  He as default,
  He as timeMomentPicker
};
