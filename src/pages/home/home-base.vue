<template>
  <div class="home-base">
    <details-part></details-part>
    <slider-details></slider-details>
  </div>
</template>
<script>
import DetailsPart from "./details-part.vue";
import SliderDetails from "./slider-details.vue";
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {
    DetailsPart,
    SliderDetails
  }
};
</script>
<style scoped>
.home-base {
  display: flex;
}
.home-base > div:first-child {
  color: #000;
  background: #cbcbf3;
  border: 1px solid #454545;
  min-width: 200px;
  max-width: 200px;
  height: 100vh;
}
.home-base > div:nth-child(2) {
  width: calc(100% - 200px);
  border: 1px solid #454545;
  padding: 30px;
}
</style>
