(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".picker-wrap[data-v-ef159517]{width:100%;height:300px;display:flex;flex-direction:column}.picker-wrap .container-box[data-v-ef159517]{flex:1;display:flex;overflow:hidden}.picker-wrap .container-box .picker-spin[data-v-ef159517]{flex:1}.picker-wrap .btn-wrap[data-v-ef159517]{width:calc(100% + 30px);position:relative;left:-15px;text-align:right;box-sizing:border-box;padding:8px 15px 0 0;border-top:solid 1px #e4e7ed}.base-wrap[data-v-5ab886c5]{width:100%;height:100%;display:flex;flex-direction:column;box-sizing:border-box;padding-bottom:12px}.base-wrap .base-title[data-v-5ab886c5]{margin-bottom:5px;text-align:center;font-size:14px;line-height:30px;color:var(--el-text-color-regular)}.base-wrap .base-content[data-v-5ab886c5]{flex:1;overflow:hidden;box-sizing:border-box;border-radius:2px;border:1px solid var(--el-border-color-light);display:flex}.base-wrap .base-content .scroll-wrap[data-v-5ab886c5]{flex:1;text-align:center}.time-item-wrap[data-v-5ab886c5]{box-sizing:border-box;padding:40px 0}.hour-item[data-v-5ab886c5]{height:32px;line-height:32px;font-size:12px;color:var(--el-text-color-regular);cursor:pointer;transition:.3s linear}.hour-item[data-v-5ab886c5]:hover{background:var(--el-fill-color-light)}.hour-item.active[data-v-5ab886c5]{font-size:15px;color:var(--el-color-primary);font-weight:700;background:var(--el-fill-color-light);position:sticky;top:0;bottom:0}.hour-item.disabled[data-v-5ab886c5]{color:#cbcbcb;cursor:not-allowed}.base-picker-wrap[data-v-df816197]{display:flex;width:100%;height:100%}.base-picker-wrap .picker-spin-container[data-v-df816197]{flex:1;height:100%}.base-picker-wrap .right-pannel[data-v-df816197]{margin-left:15px}.el-range-input[data-v-df816197]{flex:1}")),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { openBlock as S, createElementBlock as w, createElementVNode as m, renderSlot as se, defineComponent as J, computed as g, resolveComponent as X, toDisplayString as j, createVNode as $, withCtx as y, Fragment as de, renderList as ce, unref as o, normalizeClass as G, ref as I, watch as he, createBlock as _e, mergeProps as He, isRef as U, createCommentVNode as W, withModifiers as be, createTextVNode as pe } from "vue";
import { useFormItem as Me, ElIcon as me } from "element-plus";
const Y = (H, R) => {
  const r = H.__vccOpts || H;
  for (const [t, M] of R)
    r[t] = M;
  return r;
}, Se = {}, ke = { class: "picker-wrap" }, Ve = { class: "container-box" }, $e = { class: "picker-spin" }, we = { class: "btn-wrap" };
function Ce(H, R) {
  return S(), w("div", ke, [
    m("div", Ve, [
      m("div", $e, [
        se(H.$slots, "default", {}, void 0, !0)
      ])
    ]),
    m("div", we, [
      se(H.$slots, "btn", {}, void 0, !0)
    ])
  ]);
}
const ye = /* @__PURE__ */ Y(Se, [["render", Ce], ["__scopeId", "data-v-ef159517"]]), Te = { class: "base-wrap" }, Re = { class: "base-title" }, Ee = { class: "base-content" }, Be = { class: "scroll-wrap" }, Pe = { class: "time-item-wrap" }, De = ["onClick"], Le = { class: "scroll-wrap" }, Ue = { class: "time-item-wrap" }, ze = ["onClick"], Ie = /* @__PURE__ */ J({
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
  setup(H, { emit: R }) {
    const r = H;
    let t = r.timeSeparator || ":", M = g(() => parseFloat(r.maxHour) < 10 ? "0" + r.maxHour : r.maxHour), d = g(() => {
      let u = [];
      for (let i = r.startHour; i <= r.endHour; i += r.hourStep)
        u.push(i < 10 ? "0" + i : i + "");
      return u;
    }), C = g(() => {
      if (r.currentHour == M.value)
        return ["00"];
      let u = [];
      for (let i = r.startMinute; i <= r.endMinute; i += r.minuteStep || 1)
        u.push(i < 10 ? "0" + i : i + "");
      return u;
    }), K = g(() => C.value[C.value.length - 1]), N = g(() => (u) => {
      var a, b, T, k, E, L, V, B, P;
      if (!r.minTime || (((T = (b = (a = r.minTime) == null ? void 0 : a.split) == null ? void 0 : b.call(a, t)) == null ? void 0 : T.length) ?? 0) === 0)
        return !1;
      let i = (L = (E = (k = r.minTime) == null ? void 0 : k.split) == null ? void 0 : E.call(k, t)) == null ? void 0 : L[0], s = (P = (B = (V = r.minTime) == null ? void 0 : V.split) == null ? void 0 : B.call(V, t)) == null ? void 0 : P[1];
      return i && s && !r.common ? `${u}${t}${K.value}` <= r.minTime : u < i;
    }), D = g(() => (u) => {
      var a, b, T, k, E, L, V, B, P;
      if (!r.minTime || !r.currentHour || (((T = (b = (a = r.minTime) == null ? void 0 : a.split) == null ? void 0 : b.call(a, t)) == null ? void 0 : T.length) ?? 0) === 0)
        return !1;
      let i = (L = (E = (k = r.minTime) == null ? void 0 : k.split) == null ? void 0 : E.call(k, t)) == null ? void 0 : L[0];
      return !((P = (B = (V = r.minTime) == null ? void 0 : V.split) == null ? void 0 : B.call(V, t)) == null ? void 0 : P[1]) || !i ? !1 : r.common ? r.minTime > `${r.currentHour}${t}${u}` : r.minTime >= `${r.currentHour}${t}${u}`;
    });
    const z = (u) => {
      c("update:currentHour", u), u == M && c("update:currentMinute", "00"), c("changeHour", u);
    }, h = (u) => {
      c("update:currentMinute", u), c("changeMinute", u);
    }, c = R;
    return (u, i) => {
      const s = X("el-scrollbar");
      return S(), w("div", Te, [
        m("div", Re, j(u.title), 1),
        m("div", Ee, [
          m("div", Be, [
            $(s, { height: "100%" }, {
              default: y(() => [
                m("div", Pe, [
                  (S(!0), w(de, null, ce(o(d), (a) => (S(), w("div", {
                    class: G(["hour-item", {
                      active: a == u.currentHour,
                      disabled: o(N)(a)
                    }]),
                    onClick: (b) => o(N)(a) ? "" : z(a)
                  }, j(a), 11, De))), 256))
                ])
              ]),
              _: 1
            })
          ]),
          m("div", Le, [
            $(s, { height: "100%" }, {
              default: y(() => [
                m("div", Ue, [
                  (S(!0), w(de, null, ce(o(C), (a) => (S(), w("div", {
                    class: G(["hour-item", {
                      active: a == u.currentMinute,
                      disabled: o(D)(a)
                    }]),
                    onClick: (b) => o(D)(a) ? "" : h(a)
                  }, j(a), 11, ze))), 256))
                ])
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
}), ve = /* @__PURE__ */ Y(Ie, [["__scopeId", "data-v-5ab886c5"]]);
/*! Element Plus Icons Vue v2.3.1 */
var Ne = /* @__PURE__ */ J({
  name: "CircleClose",
  __name: "circle-close",
  setup(H) {
    return (R, r) => (S(), w("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      m("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), Fe = Ne, qe = /* @__PURE__ */ J({
  name: "Clock",
  __name: "clock",
  setup(H) {
    return (R, r) => (S(), w("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      m("path", {
        fill: "currentColor",
        d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      }),
      m("path", {
        fill: "currentColor",
        d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32"
      })
    ]));
  }
}), Ae = qe;
const Oe = ["placeholder", "value"], je = {
  key: 0,
  class: "el-range-separator"
}, Ge = ["placeholder", "value"], Je = { class: "base-picker-wrap" }, Ke = { class: "picker-spin-container" }, Qe = {
  key: 0,
  class: "picker-spin-container right-pannel"
}, We = /* @__PURE__ */ J({
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
  setup(H, { emit: R }) {
    const { formItem: r } = Me(), t = H;
    let M = I(!1), d = t.timeSeparator;
    he(
      () => t.modelValue,
      () => {
        var e, n, v, f, l, p, _, Z, x, F, ee, te, le, q, ne, re, A, ae, ue, O, ie, oe;
        t.isRange ? (h.value = ((f = (v = (n = (e = t.modelValue) == null ? void 0 : e[0]) == null ? void 0 : n.split) == null ? void 0 : v.call(n, d)) == null ? void 0 : f[0]) ?? null, c.value = ((Z = (_ = (p = (l = t.modelValue) == null ? void 0 : l[0]) == null ? void 0 : p.split) == null ? void 0 : _.call(p, d)) == null ? void 0 : Z[1]) ?? null, s.value = ((te = (ee = (F = (x = t.modelValue) == null ? void 0 : x[1]) == null ? void 0 : F.split) == null ? void 0 : ee.call(F, d)) == null ? void 0 : te[0]) ?? null, a.value = ((re = (ne = (q = (le = t.modelValue) == null ? void 0 : le[1]) == null ? void 0 : q.split) == null ? void 0 : ne.call(q, d)) == null ? void 0 : re[1]) ?? null) : (h.value = ((ue = (ae = (A = t.modelValue) == null ? void 0 : A.split) == null ? void 0 : ae.call(A, d)) == null ? void 0 : ue[0]) ?? null, c.value = ((oe = (ie = (O = t.modelValue) == null ? void 0 : O.split) == null ? void 0 : ie.call(O, d)) == null ? void 0 : oe[1]) ?? null, s.value = null, a.value = null), r == null || r.validate("change");
      }
    );
    let C = I(!1), K = g(() => {
      var e;
      return t.isRange ? (e = t.modelValue) == null ? void 0 : e[0] : t.modelValue;
    }), N = g(() => {
      var e;
      return t.isRange ? (e = t.modelValue) == null ? void 0 : e[1] : "";
    }), D = I(null), z = I(null), h = g({
      get() {
        var e, n, v, f, l, p, _;
        return D.value !== null ? D.value : t.isRange ? ((f = (v = (n = (e = t.modelValue) == null ? void 0 : e[0]) == null ? void 0 : n.split) == null ? void 0 : v.call(n, d)) == null ? void 0 : f[0]) ?? "" : ((_ = (p = (l = t.modelValue) == null ? void 0 : l.split) == null ? void 0 : p.call(l, d)) == null ? void 0 : _[0]) ?? "";
      },
      set(e) {
        D.value = e;
      }
    }), c = g({
      get() {
        var e, n, v, f, l, p, _;
        return z.value !== null ? z.value : t.isRange ? ((f = (v = (n = (e = t.modelValue) == null ? void 0 : e[0]) == null ? void 0 : n.split) == null ? void 0 : v.call(n, d)) == null ? void 0 : f[1]) ?? "" : ((_ = (p = (l = t.modelValue) == null ? void 0 : l.split) == null ? void 0 : p.call(l, d)) == null ? void 0 : _[1]) ?? "";
      },
      set(e) {
        z.value = e;
      }
    }), u = I(null), i = I(null), s = g({
      get() {
        var e, n, v, f, l, p, _;
        return u.value !== null ? u.value : t.isRange ? ((f = (v = (n = (e = t.modelValue) == null ? void 0 : e[1]) == null ? void 0 : n.split) == null ? void 0 : v.call(n, d)) == null ? void 0 : f[0]) ?? "" : ((_ = (p = (l = t.modelValue) == null ? void 0 : l.split) == null ? void 0 : p.call(l, d)) == null ? void 0 : _[0]) ?? "";
      },
      set(e) {
        u.value = e;
      }
    }), a = g({
      get() {
        var e, n, v, f, l, p, _;
        return i.value !== null ? i.value : t.isRange ? ((f = (v = (n = (e = t.modelValue) == null ? void 0 : e[1]) == null ? void 0 : n.split) == null ? void 0 : v.call(n, d)) == null ? void 0 : f[1]) ?? "" : ((_ = (p = (l = t.modelValue) == null ? void 0 : l.split) == null ? void 0 : p.call(l, d)) == null ? void 0 : _[1]) ?? "";
      },
      set(e) {
        i.value = e;
      }
    }), b = g(() => `${h.value}${d}${c.value}`), T = g(() => `${s.value}${d}${a.value}`), k = g(() => t.isRange ? h.value && s.value && c.value && a.value : h.value && c.value);
    const E = () => {
      if (t.isRange && s.value) {
        if (t.common) {
          if (h.value > s.value) {
            if (s.value = "", !c.value)
              return;
            a.value = "";
          }
        } else if (h.value >= s.value) {
          if (s.value = "", !c.value)
            return;
          a.value = "";
        }
      }
    }, L = () => {
      E();
    }, V = () => {
      !h.value || !c.value || !s.value || !a.value || (t.common ? b.value >= T.value && (a.value = "") : b.value > T.value && (a.value = ""));
    }, B = () => {
      P(), Q("update:modelValue", t.isRange ? [] : "");
    }, P = () => {
      D.value = null, z.value = null, u.value = null, i.value = null;
    }, ge = () => {
      C.value = !1;
      let e = "";
      t.isRange ? e = [b.value, T.value] : e = b.value, Q("update:modelValue", e), P(), Q("change");
    }, Q = R;
    return (e, n) => {
      const v = X("el-button"), f = X("el-popover");
      return S(), _e(f, He({
        trigger: "click",
        disabled: e.disabled || e.readonly,
        visible: o(C),
        "onUpdate:visible": n[6] || (n[6] = (l) => U(C) ? C.value = l : C = l),
        width: e.isRange ? 350 : 220,
        "hide-after": 0,
        persistent: e.persistent,
        transition: e.transition
      }, e.$attrs), {
        reference: y(() => {
          var l;
          return [
            m("div", {
              class: G(["el-date-editor el-date-editor el-date-editor--timerange el-input__wrapper el-range-editor", { "is-active": o(C), "is-disabled": e.disabled }]),
              onMouseenter: n[0] || (n[0] = (p) => U(M) ? M.value = !0 : M = !0),
              onMouseleave: n[1] || (n[1] = (p) => U(M) ? M.value = !1 : M = !1)
            }, [
              $(o(me), { class: "el-input__icon el-range__icon" }, {
                default: y(() => [
                  $(o(Ae))
                ]),
                _: 1
              }),
              m("input", {
                placeholder: e.isRange ? e.startPlaceholder : e.placeholder,
                readonly: "",
                class: "el-range-input",
                value: o(K)
              }, null, 8, Oe),
              e.isRange ? (S(), w("span", je, j(e.rangeSeparator), 1)) : W("", !0),
              e.isRange ? (S(), w("input", {
                key: 1,
                placeholder: e.endPlaceholder,
                readonly: "",
                class: "el-range-input",
                value: o(N)
              }, null, 8, Ge)) : W("", !0),
              $(o(me), {
                onClick: be(B, ["stop"]),
                class: G(["el-input__icon el-range__close-icon", {
                  "el-range__close-icon--hidden": !(e.modelValue && ((l = e.modelValue) == null ? void 0 : l.length) !== 0 && o(M) && !e.disabled && !e.readonly)
                }])
              }, {
                default: y(() => [
                  $(o(Fe))
                ]),
                _: 1
              }, 8, ["class"])
            ], 34)
          ];
        }),
        default: y(() => [
          $(ye, null, {
            btn: y(() => [
              $(v, {
                onClick: B,
                bg: "",
                text: "",
                size: "small"
              }, {
                default: y(() => [
                  pe("清除")
                ]),
                _: 1
              }),
              $(v, {
                disabled: !o(k),
                bg: "",
                type: "primary",
                text: "",
                size: "small",
                onClick: ge
              }, {
                default: y(() => [
                  pe("确认")
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            default: y(() => [
              m("div", Je, [
                m("div", Ke, [
                  $(ve, {
                    key: "startTime",
                    currentHour: o(h),
                    "onUpdate:currentHour": n[2] || (n[2] = (l) => U(h) ? h.value = l : h = l),
                    currentMinute: o(c),
                    "onUpdate:currentMinute": n[3] || (n[3] = (l) => U(c) ? c.value = l : c = l),
                    "start-hour": e.beginStartHour,
                    "end-hour": e.beginEndHour,
                    "end-minute": e.beginEndMinute,
                    minuteStep: e.minuteStep,
                    hourStep: e.hourStep,
                    title: "开始时间",
                    onChangeHour: E,
                    onChangeMinute: L
                  }, null, 8, ["currentHour", "currentMinute", "start-hour", "end-hour", "end-minute", "minuteStep", "hourStep"])
                ]),
                e.isRange ? (S(), w("div", Qe, [
                  $(ve, {
                    key: "endTime",
                    "start-hour": e.endStartHour,
                    "end-hour": e.endEndHour,
                    "end-minute": e.endEndMinute,
                    minuteStep: e.minuteStep,
                    hourStep: e.hourStep,
                    minTime: o(b),
                    currentHour: o(s),
                    "onUpdate:currentHour": n[4] || (n[4] = (l) => U(s) ? s.value = l : s = l),
                    currentMinute: o(a),
                    "onUpdate:currentMinute": n[5] || (n[5] = (l) => U(a) ? a.value = l : a = l),
                    title: "结束时间",
                    common: e.common,
                    onChangeHour: V
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
}), fe = /* @__PURE__ */ Y(We, [["__scopeId", "data-v-df816197"]]);
fe.install = (H) => {
  H.component("timeMomentPicker", fe);
};
export {
  fe as default,
  fe as timeMomentPicker
};
