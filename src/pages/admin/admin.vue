<template>
  <div class="container admin">
    <div class="d-flex justify-content-between">
      <div>
        <strong>Filter</strong>
      </div>
      <button class="btn btn-success btn-sm px-5" @click="addAdmin">
        {{ getCounter }} Admin
      </button>
    </div>
    <div class="jumbotron">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    addAdmin() {
      // this.$router.push("/admin");
      this.$store.commit("increaseCount");
    }
  },
  computed: {
    getCounter() {
      return this.$store.state.counter;
    }
  },
  mounted() {
    console.log(this.$store.state.myName);
  }
};
</script>
