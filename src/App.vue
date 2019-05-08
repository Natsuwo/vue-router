<template>
    <div>
      <vue-scroll-progress-bar />
      <router-view name="theme-header"/>
      <div class="container">
        <transition name="slide" appear>
          <router-view/>
        </transition>
      </div>
    </div>
</template>

<script>
import VueScrollProgressBar from "./scrollprogress"
import Header from "./components/layouts/Header";
export default {
  data() {
    return {};
  },
  components: {
    themeHeader: Header,
    'vue-scroll-progress-bar': VueScrollProgressBar
  }
};
</script>

<style>

.slide-enter-active {
  transition: opacity 0.5s ease;
  opacity: 0;
  animation: slide-in 0.5s ease-out forwards;
}

.slide-leave-active {
  transition: opacity 0.5s ease;
  opacity: 0;
  animation: slide-out 0.5s ease-out forwards;
}

.slide-leave,
.slide-enter {
  opacity: 1;
  transform: translateX(0);
}

@keyframes slide-out {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(30px);
  }
}
@keyframes slide-in {
  0% {
    transform: translateX(30px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
