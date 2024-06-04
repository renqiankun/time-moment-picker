基于vue3、element-plus的时刻选择器， 支持24:00
支持校验
    
预览：https://renqiankun.github.io/time-moment-picker/

git: https://github.com/renqiankun/time-moment-picker

    安装
        npm i time-moment-picker

    组件内引入
        import timeMomentPicker from 'time-moment-picker'  
    
    or全局安装
        app.use(timeMomentPicker)
![alt text](image-3.png)

(image-2.png)
![alt text](image-1.png)

![alt text](image.png)

![alt text](image-4.png)

```

 defineProps<{
    modelValue: string | Array<string>;
    isRange?: boolean;
    common?: boolean;  // range时 左右是否可相同

    beginStartHour?: number;   // 起始小时
    beginEndHour?: number;
    beginStartMinute?: number;
    beginEndMinute?: number;

    endStartHour?: number;
    endStartMinute?: number;
    endEndHour?: number;
    endEndMinute?: number;

    hourStep?: number;  //小时步长
    minuteStep?: number;

    disabled?: boolean;
    readonly?: boolean;

    placeholder?: string;
    startPlaceholder?: string;
    endPlaceholder?: string;

    rangeSeparator?: string;  
    timeSeparator?: string;  // 分隔符默认:
    persistent?: boolean;
    transition?: string;
  
    startMaxTime?:string // 最大时间
    startMinTime?:string  // 最小时间

    endMaxTime?:string   // range时 右侧最大时间
    endMinTime?:string   // range时 右侧最小时间
  }>(),

```