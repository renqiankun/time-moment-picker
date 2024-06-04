<template>
  <!-- <el-time-picker readonly is-range></el-time-picker> -->
  <br />
  常规1
  <timeRangePicker startMaxTime="18:30" startMinTime="08:15" v-model="time" @change="changeHand" @clear="clearHand"/>
  <timeRangePicker :beginEndHour="24" v-model="time24" />
  <br />
  <br />
  常规2
  <timeRangePicker

    timeSeparator=":"
    rangeSeparator="~"
    common
    is-range
    v-model="time2"
  />
  <br />
  <br />
  时刻
  <timeRangePicker
    :hour-step="1"
    :minute-step="15"
    :end-end-hour="24"
    is-range
    v-model="time3"
    common
    startMaxTime="18:15" startMinTime="08:15" 
    endMaxTime="18:15" endMinTime="08:15"
  />

  <br />
  <br />
  特殊
  <timeRangePicker
    :hour-step="1"
    :minute-step="15"
    :begin-start-hour="2"
    :begin-end-hour="4"
    :end-start-hour="13"
    :end-end-hour="15"
    is-range
    v-model="time4"
  />

  <br />
  <br />
  校验
  <el-form ref="formRef" style="width: 400px" :model="dataForm" :rules="rules">
    <el-form-item prop="times">
      <timeRangePicker v-model="dataForm.times" />
    </el-form-item>
    <el-form-item prop="timeRange">
      <timeRangePicker is-range v-model="dataForm.timeRange" />
    </el-form-item>
  </el-form>
  <el-button @click="check" type="primary">校验</el-button>
  <el-button @click="clear" type="primary">清除</el-button>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import timeRangePicker from "./components/time-range-picker/index.vue";
let time = ref("");
let time24 = ref('')
let time2 = ref([]);
let time3 = ref([]);
let time4 = ref([]);
const changeHand = (e:any)=>{
  console.log(e)
}
const clearHand= ()=>{

}
let dataForm = reactive({
  origin: "",
  times: "",
  timeRange: [],
});
let rules = {
  times: [{ required: true, message: "不能为空", trigger: "change" }],
  timeRange: [{ required: true, message: "不能为空", trigger: "change" }],
};

let formRef = ref();
const check = () => {
  formRef.value.validate((valid:any) => {
    console.log(valid);
  });
};
const clear = () => {
  formRef.value.resetFields();
};
</script>

<style lang="scss" scoped></style>
