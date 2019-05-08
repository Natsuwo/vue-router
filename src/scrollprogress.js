import VueScrollProgressBar from "./components/ScrollProgressBar";

const install = function(Vue) {
  Vue.component(VueScrollProgressBar.name, VueScrollProgressBar);
};

if (typeof window !== "undefined" && window.Vue) {
  window.VueScrollProgressBar = VueScrollProgressBar;
  window.Vue.use(VueScrollProgressBar);
}

VueScrollProgressBar.install = install;
export default VueScrollProgressBar;
export { VueScrollProgressBar };