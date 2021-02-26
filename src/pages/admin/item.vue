<template>
  <div class="d-flex mb-5 item">
    <div class="img-box">
      <img class="item-img" :src="'/static/img/' + item.src" />
    </div>
    <div>
      <ul class="row my-3">
        <li class="col-12 col-sm-6 col-md-4">Product: {{ item.product }}</li>
        <li class="col-12 col-sm-6 col-md-4">Qty: {{ item.qty }}</li>
        <li class="col-12 col-sm-6 col-md-4">Price: {{ item.price }}</li>
        <li class="col-12 col-sm-6 col-md-4">discount: {{ item.discount }}</li>
        <li class="col-12 col-sm-6 col-md-4">coupon: {{ item.coupon }}</li>
        <li class="col-12 col-sm-6 col-md-4">
          Total Amount: {{ item.totalAmount }}
        </li>
        <li class="col-12 col-sm-6 col-md-4">color: {{ item.color }}</li>
      </ul>
      <div class="d-flex cta-wrapper px-4">
        <button class="btn btn-info btn-sm px-4 mr-2" @click="editItem(item)">
          Edit
        </button>
        <button class="btn btn-danger btn-sm px-4" @click="deleteItem(index)">
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
    },
    getUrls: {
      type: null
    }
  },
  data() {
    return {
      itemObj: {}
    };
  },
  methods: {
    editItem(item) {
      console.log("edit item", item);
      localStorage.setItem("vfl-edit", JSON.stringify(item));
      this.$router.push("admin/" + item.id);
      // this.$emit("editItem", this.item);
      console.log(this.item);
    },
    deleteItem(index) {
      console.log("delete item", index);
      this.$emit("deleteItem", index);
    }
  },
  computed: {
    imgSrc() {
      return this.item.src;
    }
  }
};
</script>
