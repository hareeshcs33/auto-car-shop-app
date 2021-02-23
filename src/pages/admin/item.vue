<template>
  <div class="d-flex mb-5">
    <div>
      <img class="item-img" src="https://via.placeholder.com/600/92c952" />
    </div>
    <div>
      <ul>
        <li>Product: {{ item.product }}</li>
        <li>Qty: {{ item.qty }}</li>
        <li>Actual price: {{ item.actualPrice }}</li>
        <li>discount: {{ item.discount }}</li>
        <li>coupon: {{ item.coupon }}</li>
        <li>Total Amount: {{ item.totalAmount }}</li>
      </ul>
      <div class="cta-wrapper px-4">
        <button class="btn btn-info btn-sm px-3" @click="editItem(item.id)">
          Edit
        </button>
        <button class="btn btn-danger btn-sm px-3" @click="deleteItem(index)">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      itemObj: {}
    };
  },
  methods: {
    editItem(id) {
      console.log("edit item", id);
      this.$router.push("admin/" + id);
      this.$emit("editItem", this.item);
      console.log(this.item);
    },
    deleteItem(index) {
      console.log("delete item", index);
      this.$emit("deleteItem", index);
    }
  }
};
</script>
<style scoped>
.item-img {
  width: 200px;
  height: 200px;
}
</style>
