<template>
  <div class="slider-details">
    <h1>slider details</h1>
    <div class="buttons-wrapper">
      <button class="btn btn-sm px-5 btn-success">Previous</button>
      <button class="btn btn-sm px-5 btn-success">Next</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.slider-details {
  position: relative;
}
.buttons-wrapper {
  position: absolute;
  right: 30px;
  bottom: 30px;
}
.buttons-wrapper .btn {
  width: 150px;
}
</style>
