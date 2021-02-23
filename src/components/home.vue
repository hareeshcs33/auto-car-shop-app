<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <home-base></home-base> -->
    <admin></admin>
  </div>
</template>

<script>
import HomeBase from "../pages/home/home-base.vue";
import Admin from "../pages/admin/admin.vue";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    HomeBase,
    Admin
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
