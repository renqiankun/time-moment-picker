<template>
  <div class="base-wrap">
    <div class="base-title">
      {{ title }}
    </div>
    <div class="base-content">
      <div class="scroll-wrap">
        <el-scrollbar height="100%">
          <div class="time-item-wrap">
            <div
              class="hour-item"
              :class="{
                active: item == currentHour,
                disabled: hourDisabled(item),
              }"
              v-for="item in houtList"
              @click="hourDisabled(item) ? '' : changeHour(item)"
            >
              {{ item }}
            </div>
          </div>
        </el-scrollbar>
      </div>
      <div class="scroll-wrap">
        <el-scrollbar height="100%">
          <div class="time-item-wrap">
            <div
              class="hour-item"
              :class="{
                active: item == currentMinute,
                disabled: minutDisabled(item),
              }"
              v-for="item in minutList"
              @click="minutDisabled(item) ? '' : changeMinute(item)"
            >
              {{ item }}
            </div>
          </div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

const props = withDefaults(
  defineProps<{
    title: string;
    startHour?: number;
    endHour?: number;
    hourStep?: number;
    startMinute?: number;
    endMinute?: number;
    minuteStep?: number;

    currentHour: string;
    currentMinute: string;

    minTime?: string;
    common?: boolean; // 允许开始结束相同
    timeSeparator?:string
    maxHour?:string

    startMaxTime?:string
    startMinTime?:string
  }>(),
  {
    startHour: 0,
    endHour: 23,
    hourStep: 1,
    startMinute: 0,
    endMinute: 59,
    minutStep: 1,
    maxHour:'24'
  }
);
let timeSeparator = props.timeSeparator || ":";
let maxHour = computed(()=>{
  return parseFloat(props.maxHour)<10? '0'+props.maxHour:props.maxHour
});
let houtList = computed(() => {
  let list = [];
  for (let i = props.startHour; i <= props.endHour; i += props.hourStep) {
    list.push(i < 10 ? "0" + i : i + "");
  }
  return list;
});
let minutList = computed(() => {
  if (props.currentHour == maxHour.value) {
    return ["00"];
  }
  let list = [];
  for (let i = props.startMinute; i <= props.endMinute; i += (props.minuteStep||1)) {
    list.push(i < 10 ? "0" + i : i + "");
  }
  return list;
});

// 当前最大的分钟
let maxMinute = computed(() => {
  let list = [];
  for (let i = props.startMinute; i <= props.endMinute; i += (props.minuteStep||1)) {
    list.push(i < 10 ? "0" + i : i + "");
  }
  return list[list.length - 1];
});
// watch(
//   () => props.minTime,
//   (newVal) => {
//     if (!props.minTime) return;
//     if (props.minTime?.split?.(":")[0].length ?? 0 === 0) return;
//     if (props.minTime! <= props.currentHour) {
//       emits("update:currentHour", "");
//       emits("update:currentMinute", "");
//     }
//   },
//   {
//     immediate: true,
//     flush: "post",
//   }
// );
let hourDisabled = computed(() => {
  return (hour: any) => {
    // 若存在最大 最小 小时 则只能在此区间
    let disabledMaxHour = props.startMaxTime?.split?.(timeSeparator)?.[0];
    let disabledMinHour = props.startMinTime?.split?.(timeSeparator)?.[0];

    let disabledMax = false // 是否在禁用范围内
    let disabledMin = false // 是否在禁用范围内
    if(disabledMaxHour){
      disabledMax =  hour > disabledMaxHour
    }
    if(disabledMinHour){
      disabledMin = hour < disabledMinHour
    }
    let disabledRange = disabledMax || disabledMin
    if (!props.minTime) return disabledRange;
    if ((props.minTime?.split?.(timeSeparator)?.length ?? 0) === 0) return disabledRange;
    let beginHour = props.minTime?.split?.(timeSeparator)?.[0];
    let beginMinut = props.minTime?.split?.(timeSeparator)?.[1];
    if(beginHour && beginMinut && !props.common){
      return `${hour}${timeSeparator}${maxMinute.value}` <= props.minTime || disabledRange
    }
    return hour < beginHour || disabledRange;
  };
});

let minutDisabled = computed(() => {
  return (minut: any) => {
   

    if(!props.currentHour) return false
    // 当前的完整时间
    let currentTime = `${props.currentHour}${timeSeparator}${minut}`

     // 若存在最大 最小 时间 则只能在此区间
    let disabledMaxHour = props.startMaxTime
    let disabledMinHour = props.startMinTime
    let disabledMax = false // 是否在禁用范围内
    let disabledMin = false // 是否在禁用范围内
    if(disabledMaxHour){
      disabledMax =  currentTime > disabledMaxHour
    }
    if(disabledMinHour){
      disabledMin = currentTime < disabledMinHour
    }
    let disabledRange = disabledMax || disabledMin


    if(!props.minTime) return disabledRange
    if ((props.minTime?.split?.(timeSeparator)?.length ?? 0) === 0) return disabledRange;
    let beginHour = props.minTime?.split?.(timeSeparator)?.[0];
    let beginMinut = props.minTime?.split?.(timeSeparator)?.[1];
    if (!beginMinut || !beginHour) return disabledRange;
    if (!props.common) {
      return props.minTime >= currentTime ||disabledRange;
    }
    return props.minTime > currentTime || disabledRange;
  };
});
const changeHour = (item: any) => {
  emits("update:currentHour", item);
  // if (item == maxHour) {
  //   emits("update:currentMinute", "00");
  // }
  emits("update:currentMinute", "");
  emits("changeHour", item);
};
const changeMinute = (item: any) => {
  emits("update:currentMinute", item);
  emits("changeMinute", item);
};
const emits = defineEmits([
  "update:currentHour",
  "update:currentMinute",
  "changeHour",
  "changeMinute",
]);
</script>

<style lang="scss" scoped>
.base-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: 12px;
  .base-title {
    margin-bottom: 5px;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
    color: var(--el-text-color-regular);
  }
  .base-content {
    flex: 1;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 2px;
    border: 1px solid var(--el-border-color-light);
    display: flex;
    .scroll-wrap {
      flex: 1;
      text-align: center;
    }
  }
}
.time-item-wrap {
  box-sizing: border-box;
  padding: 40px 0;
}
.hour-item {
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  color: var(--el-text-color-regular);
  cursor: pointer;
  transition: 0.3s linear;
  &:hover {
    background: var(--el-fill-color-light);
  }
  &.active {
    font-size: 15px;
    color: var(--el-color-primary);
    font-weight: 700;
    background: var(--el-fill-color-light);
    position: sticky;
    top: 0;
    bottom: 0;
  }
  &.disabled {
    color: #cbcbcb;
    cursor: not-allowed;
  }
}
</style>
