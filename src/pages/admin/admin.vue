<template>
  <div class="container admin">
    <div class="d-flex justify-content-between">
      <!-- <button class="btn btn-success btn-sm px-5" @click="addAdmin">
        Admin
      </button> -->
    </div>
    <div class="jumbotron">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    // addAdmin() {
    //   this.$router.push("/admin");
    // }
  }
};
</script>
