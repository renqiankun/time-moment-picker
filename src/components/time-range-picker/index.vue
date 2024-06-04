<template>
  <div
    class="el-date-editor el-date-editor el-date-editor--timerange el-input__wrapper el-range-editor"
    :class="{ 'is-active': visible, 'is-disabled': disabled }"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    ref="buttonRef"
    v-click-outside="onClickOutside"
  >
    <el-icon class="el-input__icon el-range__icon"><Clock /></el-icon>
    <input
      :placeholder="isRange ? startPlaceholder : placeholder"
      readonly
      class="el-range-input"
      :value="startTime"
    />
    <span v-if="isRange" class="el-range-separator">{{ rangeSeparator }}</span>
    <input
      :placeholder="endPlaceholder"
      readonly
      v-if="isRange"
      class="el-range-input"
      :value="endTime"
    />
    <el-icon
      @click.stop="clearDataHand"
      v-if="clearable" 
      class="el-input__icon el-range__close-icon"
      :class="{
        'el-range__close-icon--hidden': !(
          modelValue &&
          modelValue?.length !== 0 &&
          isHover &&
          !disabled &&
          !readonly
        ),
      }"
      ><CircleClose
    /></el-icon>
  </div>
  <el-popover
    ref="popoverRef"
    :virtual-ref="buttonRef"
    virtual-triggering
    trigger="click"
    :disabled="disabled || readonly"
    :width="isRange ? 350 : 220"
    :hide-after="0"
    :persistent="persistent"
    :transition="transition"
    v-bind="$attrs"
    @before-enter="visible=true"
    @before-leave="visible=false"
  >
    <template #reference> </template>
    <rangePicker>
      <div class="base-picker-wrap">
        <div class="picker-spin-container">
          <pickerBase
            key="startTime"
            v-model:currentHour="startHour"
            v-model:currentMinute="startMinute"
            :start-hour="beginStartHour"
            :end-hour="beginEndHour"
            :end-minute="beginEndMinute"
            :minuteStep="minuteStep"
            :hourStep="hourStep"
            title="开始时间"
            @change-hour="changeStartHoutHand"
            @change-minute="changeStartMinuteHand"
            :startMaxTime="startMaxTime"
            :startMinTime="startMinTime"
          />
        </div>
        <div v-if="isRange" class="picker-spin-container right-pannel">
          <pickerBase
            key="endTime"
            :start-hour="endStartHour"
            :end-hour="endEndHour"
            :end-minute="endEndMinute"
            :minuteStep="minuteStep"
            :hourStep="hourStep"
            :minTime="formatStartTime"
            v-model:currentHour="endHour"
            v-model:currentMinute="endMinute"
            title="结束时间"
            :common="common"
            @change-hour="changeEndHoutHand"
            :startMaxTime="endMaxTime"
            :startMinTime="endMinTime"
          />
        </div>
      </div>
      <template #btn>
        <el-button v-if="clearable" @click="clearDataHand" bg text size="small">清除</el-button>
        <el-button
          :disabled="!confirmUseAble"
          bg
          type="primary"
          text
          size="small"
          @click="confirmDataHand"
          >确认</el-button
        >
      </template>
    </rangePicker>
  </el-popover>
</template>

<script setup lang="ts">
import rangePicker from "./range-picker.vue";
import pickerBase from "./picker-base.vue";
import { computed, ref, unref, watch } from "vue";
import {
  ElIcon,
  useFormItem,
  ClickOutside as vClickOutside,
} from "element-plus";
import { Clock, CircleClose } from "@element-plus/icons-vue";
const { formItem } = useFormItem();
const props = withDefaults(
  defineProps<{
    modelValue: string | Array<string>;
    isRange?: boolean;
    common?: boolean;
    clearable?:boolean;
    beginStartHour?: number;
    beginEndHour?: number;
    beginStartMinute?: number;
    beginEndMinute?: number;

    endStartHour?: number;
    endStartMinute?: number;
    endEndHour?: number;
    endEndMinute?: number;

    hourStep?: number;
    minuteStep?: number;

    disabled?: boolean;
    readonly?: boolean;

    placeholder?: string;
    startPlaceholder?: string;
    endPlaceholder?: string;

    rangeSeparator?: string;
    timeSeparator?: string;
    persistent?: boolean;
    transition?: string;
  
    startMaxTime?:string // 最大时间
    startMinTime?:string  // 最小时间

    endMaxTime?:string   // range时 右侧最大时间
    endMinTime?:string   // range时 右侧最小时间
  }>(),
  {
    clearable:true,
    beginStartHour: 0,
    beginEndHour: 23,
    beginStartMinute: 0,
    beginEndMinute: 59,

    endStartHour: 0,
    endStartMinute: 0,
    endEndHour: 23,
    endEndMinute: 59,

    hourStep: 1,
    minuteStep: 1,
    placeholder: "请选择",
    startPlaceholder: "开始时间",
    endPlaceholder: "结束时间",
    rangeSeparator: "-",
    timeSeparator: ":",
    persistent: false,
    transition: "el-zoom-in-top",
  }
);
let isHover = ref(false);
let timeSeparator = props.timeSeparator;
watch(
  () => props.modelValue,
  () => {
    if (props.isRange) {
      startHour.value =
        props.modelValue?.[0]?.split?.(timeSeparator)?.[0] ?? null;
      startMinute.value =
        props.modelValue?.[0]?.split?.(timeSeparator)?.[1] ?? null;
      endHour.value =
        props.modelValue?.[1]?.split?.(timeSeparator)?.[0] ?? null;
      endMinute.value =
        props.modelValue?.[1]?.split?.(timeSeparator)?.[1] ?? null;
    } else {
      startHour.value =
        (props.modelValue as string)?.split?.(timeSeparator)?.[0] ?? null;
      startMinute.value =
        (props.modelValue as string)?.split?.(timeSeparator)?.[1] ?? null;
      endHour.value = null;
      endMinute.value = null;
    }
    formItem?.validate("change");
  }
);
const buttonRef = ref();
const popoverRef = ref();
const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.();
};
let visible = ref(false);
const closePoper = () => {
  popoverRef.value?.hide();
}
let startTime = computed(() => {
  if (props.isRange) {
    return props.modelValue?.[0];
  }
  return props.modelValue;
});
let endTime = computed(() => {
  if (props.isRange) {
    return props.modelValue?.[1];
  }
  return "";
});
let currentStartHour: any = ref(null);
let currentStartMinute: any = ref(null);
let startHour = computed({
  get() {
    if (currentStartHour.value !== null) return currentStartHour.value;
    if (props.isRange) {
      return props.modelValue?.[0]?.split?.(timeSeparator)?.[0] ?? "";
    }
    return (props.modelValue as string)?.split?.(timeSeparator)?.[0] ?? "";
  },
  set(newVal) {
    currentStartHour.value = newVal;
  },
});
let startMinute = computed({
  get() {
    if (currentStartMinute.value !== null) return currentStartMinute.value;
    if (props.isRange) {
      return props.modelValue?.[0]?.split?.(timeSeparator)?.[1] ?? "";
    }
    return (props.modelValue as string)?.split?.(timeSeparator)?.[1] ?? "";
  },
  set(newVal) {
    currentStartMinute.value = newVal;
  },
});

let currentEndHour: any = ref(null);
let currentEndMinute: any = ref(null);
let endHour = computed({
  get() {
    if (currentEndHour.value !== null) return currentEndHour.value;
    if (props.isRange) {
      return props.modelValue?.[1]?.split?.(timeSeparator)?.[0] ?? "";
    }
    return (props.modelValue as string)?.split?.(timeSeparator)?.[0] ?? "";
  },
  set(newVal) {
    currentEndHour.value = newVal;
  },
});
let endMinute = computed({
  get() {
    if (currentEndMinute.value !== null) return currentEndMinute.value;
    if (props.isRange) {
      return props.modelValue?.[1]?.split?.(timeSeparator)?.[1] ?? "";
    }
    return (props.modelValue as string)?.split?.(timeSeparator)?.[1] ?? "";
  },
  set(newVal) {
    currentEndMinute.value = newVal;
  },
});

let formatStartTime = computed(() => {
  return `${startHour.value}${timeSeparator}${startMinute.value}`;
});
let formatEndTime = computed(() => {
  return `${endHour.value}${timeSeparator}${endMinute.value}`;
});

let confirmUseAble = computed(() => {
  if (props.isRange) {
    return (
      startHour.value && endHour.value && startMinute.value && endMinute.value
    );
  } else {
    return startHour.value && startMinute.value;
  }
});
// 修改开始时间的小时
const changeStartHoutHand = () => {
  if (!props.isRange) return;
  if (!endHour.value) return;
  if (!props.common) {
    if (startHour.value >= endHour.value) {
      endHour.value = "";
      if (!startMinute.value) return;
      endMinute.value = "";
    }
  } else {
    if (startHour.value > endHour.value) {
      endHour.value = "";
      if (!startMinute.value) return;
      endMinute.value = "";
    }
  }
};

// 修改开始的分钟时
const changeStartMinuteHand = () => {
  changeStartHoutHand();
};

const changeEndHoutHand = () => {
  // 结束小时数选择24时 清除00
  if (props.endEndHour == endHour.value && props.endEndHour == 24) {
    endMinute.value = "00";
  }
  if (
    !startHour.value ||
    !startMinute.value ||
    !endHour.value ||
    !endMinute.value
  )
    return;
  if (!props.common) {
    if (formatStartTime.value >= formatEndTime.value) {
      endMinute.value = "";
    }
  } else {
    if (formatStartTime.value > formatEndTime.value) {
      endMinute.value = "";
    }
  }
};

const clearDataHand = () => {
  clearCatchData();
  emits("update:modelValue", props.isRange ? [] : "");
  emits("clear");
};

const clearCatchData = () => {
  currentStartHour.value = null;
  currentStartMinute.value = null;
  currentEndHour.value = null;
  currentEndMinute.value = null;
};
const confirmDataHand = () => {
  let value: any = "";
  if (props.isRange) {
    value = [formatStartTime.value, formatEndTime.value];
  } else {
    value = formatStartTime.value;
  }
  emits("update:modelValue", value);
  clearCatchData();
  emits("change");
  closePoper();
};
const emits = defineEmits(["update:modelValue", "change", "clear"]);
</script>

<style lang="scss" scoped>
.base-picker-wrap {
  display: flex;
  width: 100%;
  height: 100%;
  .picker-spin-container {
    flex: 1;
    height: 100%;
  }
  .right-pannel {
    margin-left: 15px;
  }
}
.el-range-input {
  flex: 1;
}
</style>
