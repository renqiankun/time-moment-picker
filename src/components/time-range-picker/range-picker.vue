<template>
  <div class="picker-wrap">
    <div class="container-box">
      <div class="picker-spin">
        <slot></slot>
      </div>
    </div>
    <div class="btn-wrap">
       <slot name="btn"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.picker-wrap {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  .container-box {
    flex: 1;
    display: flex;
    overflow: hidden;
    .picker-spin{
        flex: 1;
    }
  }
  .btn-wrap {
    width: calc(100% + 30px);
    position: relative;
    left: -15px;
    text-align: right;
    box-sizing: border-box;
    padding: 8px 15px 0 0;
    border-top: solid 1px #e4e7ed;
  }
}
</style>
