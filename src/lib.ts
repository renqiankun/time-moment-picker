import timeMomentPicker from "./components/time-range-picker/index.vue";

timeMomentPicker.install = (app: any) => {
  app.component("timeMomentPicker", timeMomentPicker);
};
export { timeMomentPicker };
export default timeMomentPicker;
