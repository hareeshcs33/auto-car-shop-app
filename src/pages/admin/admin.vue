<template>
  <div class="admin">
    <div class="d-flex justify-content-between m-5 ">
      <h3>Admin page</h3>
      <button class="btn btn-success btn-sm px-5" @click="addAdmin">
        Admin
      </button>
    </div>
    <router-view></router-view>
    <!-- <item-list></item-list> -->
  </div>
</template>
<script>
import ItemList from "./item-list.vue";

export default {
  components: {
    ItemList
  },
  methods: {
    addAdmin() {
      this.$router.push("/admin");
    }
  }
};
</script>
