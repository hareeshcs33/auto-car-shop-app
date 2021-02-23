<template>
  <div class="mx-auto edit-item-block">
    <h2>Edit item: {{ $route.params.id }}</h2>
    <div class="edit-form">
      <form v-if="editObj">
        <input-text v-model="editObj.product"></input-text>
        <input-text type="number" v-model="editObj.qty"></input-text>
        <input-text type="number" v-model="editObj.price"></input-text>
        <input-text type="number" v-model="editObj.discount"></input-text>
      </form>
      <button class="btn btn-success" @click="editDone">Save</button>
      <button class="btn btn-success" @click="editCancel">Cancel</button>
    </div>
  </div>
</template>
<script>
import inputText from "../../shared/input-text.vue";
export default {
  components: { inputText },
  props: {},
  data() {
    return {
      editObj: null,
      editValObj: null,
      casheBeforeEdit: null
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.editObj = JSON.parse(localStorage.getItem("vfl-edit"));
    this.casheBeforeEditObj = JSON.parse(JSON.stringify(this.editObj));
  },
  methods: {
    editDone() {
      this.editValObj = {
        product: this.editObj.product,
        qty: this.editObj.qty,
        price: this.editObj.price,
        discount: this.editObj.discount
      };
      localStorage.setItem("vfl-edit", JSON.stringify(this.editValObj));
      console.log("saved items", this.editValObj);
      this.$router.push("/admin");
    },
    editCancel() {
      this.editObj = this.casheBeforeEditObj;
      console.log("cancelled", this.editObj);
      this.$router.push("/admin");
    }
  }
};
</script>
<style scoped>
.edit-item-block {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.edit-form {
  max-width: 500px;
  width: 100%;
  border: 1px solid #454545;
  padding: 30px;
}
</style>
