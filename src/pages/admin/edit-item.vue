<template>
  <div class="mx-auto edit-item-block">
    <h2>Edit item: {{ $route.params.id }}</h2>
    <div class="edit-form">
      <ul>
        <li>list</li>
      </ul>
    </div>
    <div>
      <button class="btn btn-success" @click="editDone">save</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    editDone() {
      this.$router.push("/admin");
    }
  }
};
</script>
<style scoped>
.edit-item-block {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.edit-form {
  max-width: 500px;
  width: 100%;
  margin: auto;
  border: 1px solid #454545;
  padding: 30px;
}
</style>
